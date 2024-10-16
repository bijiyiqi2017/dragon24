
# Contributing to Word Scramble Web Game

Thank you for your interest in contributing to the **Word Scramble Web Game**! Whether you're a seasoned developer or a beginner, we're excited to have you onboard, especially for Hacktoberfest! :wave:

## How to Contribute

### 1. Fork the Repository
- Click the "Fork" button at the top of this repository.
- This creates a copy of the repository under your GitHub account.

**Example**:
After forking, you will see a repository under `https://github.com/YOUR-USERNAME/dragon24`.

---

### 2. Clone the Repository
- Clone the forked repository to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/dragon24.git
   cd dragon24
   ```

**Example**:
```bash
git clone https://github.com/johndoe/dragon24.git
cd dragon24
```

---

### 3. Create a New Branch
- All contributions should be made on a branch named `contrib-<your-name>`. This ensures consistency across contributions.
   ```bash
   git checkout -b contrib-your-name
   ```

**Example**:
```bash
git checkout -b contrib-alex
```

This will create a new branch called `contrib-alex` for your work.

---

### 4. Make Your Changes
- Add the necessary code changes (HTML, CSS, or JavaScript).
- If you’re working on a specific issue, reference the issue number (e.g., `Fixes #4`).

**Example:**

For adding a video, the changes might look like this:

```html
<!-- Add this to index.html -->
<video width="320" height="240" controls>
   <source src="video.mp4" type="video/mp4">
   Your browser does not support the video tag.
</video>
```

In `styles.css`, you might add:

```css
video {
   display: block;
   margin: 20px auto;
   max-width: 100%;
}
```

And for JavaScript functionality:

```javascript
const video = document.querySelector('video');
video.addEventListener('play', () => console.log('Video is playing'));
```

---

### 5. Test Your Changes

**Manual Testing**:
- Open `index.html` directly in your browser.
- Test changes in different browsers (e.g., Chrome, Firefox).
- Check responsiveness across devices (desktop, tablet, mobile).

**Using Live Server in VS Code**:
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. Open the project in VS Code.
3. Right-click on `index.html` and select **Open with Live Server**.
4. Your browser will automatically refresh when you save changes.

---

### 6. Commit and Push Your Changes
- After testing, commit your work with a descriptive message:
   ```bash
   git add .
   git commit -m "Add video player functionality"
   ```

**Example**:
```bash
git commit -m "Fix #4: Add video player functionality with play/pause features"
```

- Push your branch to your forked repository:
   ```bash
   git push origin contrib-your-name
   ```

**Example**:
```bash
git push origin contrib-alex
```

---

### 7. Open a Pull Request (PR)

#### Step-by-Step Guide to Opening a Pull Request

1. **Navigate to the Original Repository**:  
   Go to the original **dragon24** repository, and you should see a banner offering the option to create a pull request.

2. **Open the Pull Request (PR)**:  
   Click the "Compare & Pull Request" button, and this will take you to the PR creation page.

3. **Title Your PR**:  
   Use a clear, descriptive title for your PR.

**Example**:
```
[Feature] Add Video Player to Word Scramble Game
```

4. **Write a Detailed Description**:  
   Provide as much detail as possible. Here’s a template you can follow:

**Example**:
```markdown
### Description
This PR adds a video player to the Word Scramble Game.

- Implemented a `<video>` tag in `index.html`.
- Added styling for the video player in `styles.css`.
- Integrated play and pause functionality in `main.js`.

### Testing
Tested the video player on the following browsers:
- Chrome
- Firefox
- Edge

### Related Issue
Fixes #4
```

5. **Request Reviewers**:  
   Tag specific collaborators or ask for general feedback.

**Example**:
```
@bijiyiqi2017 Please review the video functionality added in this PR.
```

6. **Label Your PR**:  
   Make sure the PR has the `hacktoberfest-accepted` label if it's part of Hacktoberfest, or check that the repository is tagged with the Hacktoberfest topic.

7. **Submit the Pull Request**:  
   Click **Create Pull Request** when you're ready to submit.

---

### Example Pull Request

**Title**:  
`[Feature] Add Video Player to Word Scramble Game`

**Description**:
```markdown
### Description
This PR adds a video player feature to the game.

- Added `<video>` element to `index.html`.
- Styled the player using `styles.css`.
- Created basic JavaScript controls (play, pause).

### Testing
- Tested on Chrome, Firefox, and Edge.
- Responsive on mobile and tablet devices.

### Related Issue
Fixes #4
```

---

## Code Guidelines

To ensure consistency and readability, please follow these guidelines:

- **Indentation**: Use 4 spaces for indentation.
- **CSS**: Keep styles in a separate CSS file (no inline styles in HTML).
- **Variable and Function Names**: Use descriptive names in camelCase (e.g., `scrambleWords`).
- **Commenting**: Comment your code where necessary, especially for complex logic.
- **HTML Structure**: Use semantic HTML (e.g., `header`, `footer`, `main`).
- **Accessibility**: Ensure images have `alt` attributes and elements are accessible.

---

## Hacktoberfest Guidelines

This project is open to Hacktoberfest participants! If you’re contributing during Hacktoberfest:

- Ensure your PRs are meaningful and follow the [Hacktoberfest rules](https://hacktoberfest.com/participation/#rules).
- Label your PRs with **hacktoberfest-accepted** once they meet the project guidelines.
- Don’t hesitate to reach out if you have questions—beginners are welcome!

---

## Contact

If you have any questions or need clarification, feel free to open an issue or contact the repository maintainer.
