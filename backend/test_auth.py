from fastapi.testclient import TestClient
from main import app, startup_db_seed

client = TestClient(app)

# Ensure seed data is run
startup_db_seed()

def test_flow():
    print("--- 1. Testing Citizen Login ---")
    res = client.post("/api/auth/login", json={
        "email": "user@example.com",
        "password": "password123"
    })
    print("Citizen Login status:", res.status_code)
    print("Citizen Login response:", res.json())
    assert res.status_code == 200
    citizen_token = res.json()["access_token"]
    assert res.json()["role"] == "citizen"
    assert res.json()["redirect"] == "/user"

    print("\n--- 2. Testing Officer Login ---")
    res = client.post("/api/auth/login", json={
        "email": "officer@nagrik.ai",
        "password": "officer123"
    })
    print("Officer Login status:", res.status_code)
    print("Officer Login response:", res.json())
    assert res.status_code == 200
    officer_token = res.json()["access_token"]
    assert res.json()["role"] == "officer"
    assert res.json()["redirect"] == "/department"

    print("\n--- 3. Testing Admin Login ---")
    res = client.post("/api/auth/login", json={
        "email": "admin@nagrik.ai",
        "password": "admin123"
    })
    print("Admin Login status:", res.status_code)
    print("Admin Login response:", res.json())
    assert res.status_code == 200
    admin_token = res.json()["access_token"]
    assert res.json()["role"] == "admin"
    assert res.json()["redirect"] == "/admin"

    print("\n--- 4. Testing Role Protection: Citizen accessing Admin Dashboard ---")
    res = client.get(
        "/api/admin/dashboard",
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    print("Citizen -> Admin Dashboard status (Should be 403):", res.status_code, res.json())
    assert res.status_code == 403

    print("\n--- 5. Testing Role Protection: Officer accessing Admin Dashboard ---")
    res = client.get(
        "/api/admin/dashboard",
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    print("Officer -> Admin Dashboard status (Should be 403):", res.status_code, res.json())
    assert res.status_code == 403

    print("\n--- 6. Testing Admin accessing Admin Dashboard ---")
    res = client.get(
        "/api/admin/dashboard",
        headers={"Authorization": f"Bearer {admin_token}"}
    )
    print("Admin -> Admin Dashboard status (Should be 200):", res.status_code, res.json())
    assert res.status_code == 200

    print("\n--- 7. Testing Officer Department Dashboard & Complaints ---")
    res = client.get(
        "/api/department/dashboard",
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    print("Officer Department Dashboard status:", res.status_code, res.json())
    assert res.status_code == 200

    res = client.get(
        "/api/department/complaints",
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    print("Officer Department Complaints status:", res.status_code, len(res.json()), "complaints returned")
    assert res.status_code == 200

    print("\n✅ ALL ROLE-BASED AUTHENTICATION CHECKS PASSED PERFECTLY!")

if __name__ == "__main__":
    test_flow()
