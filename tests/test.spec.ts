import { test, expect } from "@playwright/test";

test.describe.serial('Game Tests', () => {

  test("Verify game loads and has correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle('The Platform Platform Game');
  });

  test("Verify player moves to left on arrow left", async ({page}) =>{
    await page.goto("/");
    const handle = await page.evaluateHandle(() => gamestate);
    await expect((await handle.jsonValue()).Player.x).toBe(375);

    await page.keyboard.press("ArrowLeft", {delay: 300});
    
    await expect((await handle.jsonValue()).Player.x).toBeLessThan(375);
  });

  test("Verify player moves to right on arrow right", async ({page}) =>{
    await page.goto("/");
    const handle = await page.evaluateHandle(() => gamestate);
    await expect((await handle.jsonValue()).Player.x).toBe(375);

    await page.keyboard.press("ArrowRight", {delay: 300});
    
    await expect((await handle.jsonValue()).Player.x).toBeGreaterThan(375);
  });

  test("Verify player jumps on space", async ({page}) =>{
    await page.goto("/");
    const handle = await page.evaluateHandle(() => gamestate);
    await expect((await handle.jsonValue()).Player.y).toBe(600);

    await page.keyboard.down("Space");
    
    await expect((await handle.jsonValue()).Player.y).toBeLessThan(600);
  });

});