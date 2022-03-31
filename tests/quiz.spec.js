// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test.describe("[Quiz App]", () => {
  test("should show 0% when all fields are empty ", async ({ page }) => {
    await page.goto("./");

    await page.click("[data-testid=submit-quiz]");

    const expectedScoreMessage = "Você errou todas =(";
    const expectedScore = "0%";

    await expect(page.locator("[data-testid=popup-title]")).toHaveText(
      expectedScoreMessage
    );

    await expect(page.locator("[data-testid=popup-score]")).toHaveText(expectedScore);
  });

  test("should show 0% when all fields are filled with wrong answers ", async ({
    page,
  }) => {
    await page.goto("./");

    await page.locator('[data-testid="answer-1-1"]').click();
    await page.locator('[data-testid="answer-2-1"]').click();
    await page.locator('[data-testid="answer-3-2"]').click();
    await page.locator('[data-testid="answer-4-1"]').click();
    await page.locator('[data-testid="answer-5-1"]').click();
    await page.locator('[data-testid="submit-quiz"]').click();

    const expectedScoreMessage = "Você errou todas =(";
    const expectedScore = "0%";

    await expect(page.locator("[data-testid=popup-title]")).toHaveText(
      expectedScoreMessage
    );

    await expect(page.locator("[data-testid=popup-score]")).toHaveText(expectedScore);
  });

  test("should show 20% when one field is filled with correct answer ", async ({
    page,
  }) => {
    await page.goto("./");

    await page.locator('[data-testid="answer-1-3"]').click();
    await page.locator('[data-testid="answer-2-1"]').click();
    await page.locator('[data-testid="answer-3-2"]').click();
    await page.locator('[data-testid="answer-4-1"]').click();
    await page.locator('[data-testid="answer-5-1"]').click();
    await page.locator('[data-testid="submit-quiz"]').click();

    const expectedScoreMessage = "VOCÊ ACERTOU";
    const expectedScore = "20%";

    await expect(page.locator("[data-testid=popup-title]")).toHaveText(
      expectedScoreMessage
    );

    await expect(page.locator("[data-testid=popup-score]")).toHaveText(expectedScore);
  });

  test("should show 40% when two fields are filled with correct answers ", async ({
    page,
  }) => {
    await page.goto("./");

    await page.locator('[data-testid="answer-1-3"]').click();
    await page.locator('[data-testid="answer-2-4"]').click();
    await page.locator('[data-testid="answer-3-2"]').click();
    await page.locator('[data-testid="answer-4-1"]').click();
    await page.locator('[data-testid="answer-5-1"]').click();
    await page.locator('[data-testid="submit-quiz"]').click();

    const expectedScoreMessage = "VOCÊ ACERTOU";
    const expectedScore = "40%";

    await expect(page.locator("[data-testid=popup-title]")).toHaveText(
      expectedScoreMessage
    );

    await expect(page.locator("[data-testid=popup-score]")).toHaveText(expectedScore);
  });

  test("should show 60% when three fields are filled with correct answers ", async ({
    page,
  }) => {
    await page.goto("./");

    await page.locator('[data-testid="answer-1-3"]').click();
    await page.locator('[data-testid="answer-2-4"]').click();
    await page.locator('[data-testid="answer-3-1"]').click();
    await page.locator('[data-testid="answer-4-1"]').click();
    await page.locator('[data-testid="answer-5-3"]').click();
    await page.locator('[data-testid="submit-quiz"]').click();

    const expectedScoreMessage = "VOCÊ ACERTOU";
    const expectedScore = "60%";

    await expect(page.locator("[data-testid=popup-title]")).toHaveText(
      expectedScoreMessage
    );

    await expect(page.locator("[data-testid=popup-score]")).toHaveText(expectedScore);
  });

  test("should show 80% when four fields are filled with correct answers ", async ({
    page,
  }) => {
    await page.goto("./");

    await page.locator('[data-testid="answer-1-3"]').click();
    await page.locator('[data-testid="answer-2-4"]').click();
    await page.locator('[data-testid="answer-3-1"]').click();
    await page.locator('[data-testid="answer-4-3"]').click();
    await page.locator('[data-testid="answer-5-3"]').click();
    await page.locator('[data-testid="submit-quiz"]').click();

    const expectedScoreMessage = "VOCÊ ACERTOU";
    const expectedScore = "80%";

    await expect(page.locator("[data-testid=popup-title]")).toHaveText(
      expectedScoreMessage
    );

    await expect(page.locator("[data-testid=popup-score]")).toHaveText(expectedScore);
  });

  test("should show 100% when all fields are filled with correct answers ", async ({
    page,
  }) => {
    await page.goto("./");

    await page.locator('[data-testid="answer-1-3"]').click();
    await page.locator('[data-testid="answer-2-4"]').click();
    await page.locator('[data-testid="answer-3-1"]').click();
    await page.locator('[data-testid="answer-4-3"]').click();
    await page.locator('[data-testid="answer-5-2"]').click();
    await page.locator('[data-testid="submit-quiz"]').click();

    const expectedScoreMessage = "Parabéns, você acertou todas!";
    const expectedScore = "100%";

    await expect(page.locator("[data-testid=popup-title]")).toHaveText(
      expectedScoreMessage
    );

    await expect(page.locator("[data-testid=popup-score]")).toHaveText(expectedScore);
  });
});
