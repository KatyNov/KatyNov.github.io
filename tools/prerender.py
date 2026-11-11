"""Bake the JS-rendered sections into index.html so crawlers get real text.

Source skeleton: index.source.html (edit that file, never index.html).
Run after changing copy or structure in strategic.js or index.source.html:
    python3 -m http.server 8766   (in the repo root, separate terminal)
    python3 tools/prerender.py
Needs: pip install playwright && playwright install chromium
The page is opened with ?prerender=1: strategic.js renders the markup, marks
<html data-prerendered> and stops. On normal visits the script sees that mark,
skips rendering and only binds interactions and the language switch.
"""
import asyncio, re, sys, pathlib
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
URL = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8766') + '/index.source.html?prerender=1'
CHROME = sys.argv[2] if len(sys.argv) > 2 else None

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path=CHROME, args=['--no-sandbox'])
        page = await browser.new_page()
        await page.goto(URL)
        await page.wait_for_function("document.documentElement.hasAttribute('data-prerendered')")
        html = await page.evaluate("document.documentElement.outerHTML")
        await browser.close()
    html = '<!DOCTYPE html>\n' + html + '\n'
    html = html.replace('</head>', '<noscript><style>.reveal{opacity:1;transform:none}</style></noscript>\n</head>', 1)
    (ROOT / 'index.html').write_text(html, encoding='utf-8')
    print('index.html prerendered:', len(html), 'bytes')

asyncio.run(main())
