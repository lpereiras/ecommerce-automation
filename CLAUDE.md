# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Playwright-based test automation project for e-commerce testing, targeting https://automationexercise.com/. The project uses TypeScript and Playwright Test framework.

## Essential Commands

### Running Tests
- Run all tests: `npx playwright test`
- Run single test file: `npx playwright test tests/example.spec.ts`
- Run tests in headed mode: `npx playwright test --headed`
- Run tests in specific browser: `npx playwright test --project=chromium` (options: chromium, firefox, webkit)
- Run tests in UI mode: `npx playwright test --ui`
- Debug tests: `npx playwright test --debug`

### Test Reports
- Open last test report: `npx playwright show-report`

### Code Generation
- Generate tests with Codegen: `npx playwright codegen`

## Configuration

- **Test directory**: `./tests`
- **Base URL**: `https://automationexercise.com/` (configured in playwright.config.ts:29)
- **Browser projects**: Chromium, Firefox, and WebKit are configured
- **Parallelization**: Tests run fully parallel by default (except on CI where workers=1)
- **Retries**: Disabled locally, 2 retries on CI
- **Trace**: Enabled on first retry only

## Architecture Notes

- All test files should be placed in the `tests/` directory
- The project uses Playwright's baseURL feature, so relative paths can be used in `page.goto()`
- Tests are configured to run across multiple browsers by default
- Environment variables can be configured via dotenv (currently commented out in config)
