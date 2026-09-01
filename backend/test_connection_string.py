import urllib.parse
from sqlalchemy import create_engine, text

password = urllib.parse.quote_plus("Apsit@SIH2026")

urls = [
    f"postgresql://postgres:{password}@db.dcicfxasjvkcsnvsmbfn.supabase.co:5432/postgres?sslmode=require",
    f"postgresql://postgres:{password}@db.dcicfxasjvkcsnvsmbfn.supabase.co:5432/postgres",
]

for url in urls:
    print(f"Testing URL: {url[:55]}...")
    try:
        engine = create_engine(url, connect_args={"connect_timeout": 5})
        with engine.connect() as conn:
            res = conn.execute(text("SELECT count(*) FROM users;"))
            print("  SUCCESS! User count:", res.scalar())
            break
    except Exception as e:
        print("  FAILED:", e)
