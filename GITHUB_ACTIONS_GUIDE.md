# GitHub Actions Publishing Guide

This guide explains how to use the automated GitHub Actions workflow to publish new versions of `urdu-number-words` to npm.

## Prerequisites

✅ You've already published v1.0.0 manually
✅ You have push access to the GitHub repository
✅ You have npm account with publishing rights

## Setup (One-time)

### 1. Create an npm Token for GitHub Actions

You need to create a special npm token for GitHub Actions to use:

1. Go to https://www.npmjs.com/settings/tokens
2. Click **"Create New Token"**
3. Select **"Automation"** type (not Granular)
4. Enable **"Bypass two-factor authentication (2FA)"**
5. Copy the token

### 2. Add Token to GitHub Secrets

1. Go to your repository: https://github.com/faakhir-habib/urdu-number-words
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `NPM_TOKEN`
5. Value: Paste the npm token you created
6. Click **"Add secret"**

That's it for setup! Now you can publish anytime.

---

## Publishing a New Version

### Step 1: Update Version in package.json

Edit `package.json` and bump the version:

```json
{
  "version": "1.0.1"  // Changed from 1.0.0
}
```

Follow [semantic versioning](https://semver.org/):
- **Patch**: `1.0.1` (bug fixes)
- **Minor**: `1.1.0` (new features, backward compatible)
- **Major**: `2.0.0` (breaking changes)

### Step 2: Update CHANGELOG.md (Recommended)

Create or update `CHANGELOG.md` documenting changes:

```markdown
# Changelog

## [1.0.1] - 2026-02-23

### Fixed
- Fixed issue with currency mode

### Added
- New feature X

## [1.0.0] - 2026-02-22

### Initial Release
- Convert numbers to Urdu words
- PKR currency support
- Urdu digit conversion
- Ordinal numbers
```

### Step 3: Commit Changes

```bash
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 1.0.1"
git push origin main
```

### Step 4: Create Git Tag

```bash
git tag v1.0.1
git push origin v1.0.1
```

That's it! GitHub Actions will automatically:
1. ✅ Checkout code
2. ✅ Setup Node.js 18
3. ✅ Install dependencies
4. ✅ Run all tests (57 tests)
5. ✅ Build TypeScript
6. ✅ Publish to npm
7. ✅ Create GitHub Release with auto-generated release notes

---

## Example Workflow

Let's say you want to publish v1.0.1 with a bug fix:

```bash
# 1. Update version
# Edit package.json: "version": "1.0.1"

# 2. Update CHANGELOG
# Add entry for v1.0.1

# 3. Commit
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 1.0.1

Fix: resolved currency formatting issue"
git push origin main

# 4. Tag and push
git tag v1.0.1
git push origin v1.0.1

# Done! Watch it publish automatically at:
# https://github.com/faakhir-habib/urdu-number-words/actions
```

---

## Monitoring the Publish

1. Go to: https://github.com/faakhir-habib/urdu-number-words/actions
2. Click the latest workflow run
3. Watch the steps execute:
   - ✅ Checkout code
   - ✅ Setup Node.js
   - ✅ Install dependencies
   - ✅ Run tests
   - ✅ Build
   - ✅ Publish to npm
   - ✅ Create GitHub Release

If any step fails, you'll see the error details. Common issues:
- Tests fail → Fix the code
- Build fails → Check TypeScript errors
- Publish fails → Check npm token (may have expired)

---

## Verify Publication

Once the workflow completes successfully:

```bash
npm view urdu-number-words@1.0.1
```

Or visit: https://www.npmjs.com/package/urdu-number-words

The new version should be live!

---

## Troubleshooting

### "npm token expired"
- Create a new npm token at https://www.npmjs.com/settings/tokens
- Update the `NPM_TOKEN` secret in GitHub

### "Tests failed"
- The workflow stops before publishing
- Fix the code, commit, and try again with a new tag

### "Permission denied"
- Verify `NPM_TOKEN` is set in GitHub Secrets
- Verify token has "Publish" permissions

---

## Useful Commands

```bash
# View all tags
git tag -l

# Delete a local tag (if you made a mistake)
git tag -d v1.0.1

# Delete a remote tag
git push origin --delete v1.0.1

# List recent commits
git log --oneline -10
```

---

## From Now On

Every time you want to publish a new version:

1. Update `package.json` version
2. Update `CHANGELOG.md`
3. Commit: `git commit -m "chore: bump version to X.Y.Z"`
4. Tag: `git tag vX.Y.Z && git push origin vX.Y.Z`
5. Watch it auto-publish! 🚀

No more manual `npm publish` commands needed!
