import 'expect-puppeteer'


describe('Login Scenario', () => {
    beforeEach(async () => {
        await page.goto("https://dashboard.prakerja.go.id/masuk");
        await page.waitForSelector(`#email`);
    });

    afterEach(async () => {
        await expect(await page.evaluate(() => localStorage.removeItem('token'))).toEqual(undefined);
    });
  
    
    it('GIVEN valid username & password combination WHEN submit login THEN redirect to dashboard page', async () => {
        await page.type(`#email`, 'ariefb78@gmail.com');
        await page.type(`#password`, 'Prakerja2021');
        await expect(page).toClick('button', { text: 'Masuk' })
        await page.waitFor(500);
        expect(page.url().includes('/masuk')).toEqual(false);
    });

    it('GIVEN invalid username WHEN submit login THEN stay in login page', async () => {
        await page.type(`#email`, 'aaarrrriefb78@gmail.comm');
        await page.type(`#password`, 'Prakerja2021');
        await expect(page).toClick('button', { text: 'Masuk' })
        await page.waitFor(500);
        expect(page.url().includes('/masuk')).toBe(true);
    });

    it('GIVEN invalid Password WHEN submit login THEN stay in login page', async () => {
        await page.type(`#email`, 'ariefb78@gmail.com');
        await page.type(`#password`, '');
        await expect(page).toClick('button', { text: 'Masuk' })
        await page.waitFor(500);
        await expect(page).toMatch('Kolom password harus diisi')
    });

    it('GIVEN invalid Password WHEN submit login THEN stay in login page', async () => {
        await page.type(`#email`, '');
        await page.type(`#password`, 'Prakerja2021');
        await expect(page).toClick('button', { text: 'Masuk' })
        await page.waitFor(500);
        await expect(page).toMatch('Kolom email harus diisi')
    });

    it('GIVEN invalid Password WHEN submit login THEN stay in login page', async () => {
        await page.type(`#email`, '');
        await page.type(`#password`, 'Prakerja2021');
        await expect(page).toClick('button', { text: 'Masuk' })
        await page.waitFor(500);
        await expect(page).toMatch('Kolom email harus diisi')
    });




});
