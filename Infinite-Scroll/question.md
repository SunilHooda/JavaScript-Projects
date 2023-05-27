# Infinite Scrolling

# `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don't jump directly into code.
- Commit your code every hour with a proper commit message to your repository (we will monitor every commit)
- Use HTML, CSS, and Vanilla JavaScript to solve this question.
- Invest ample time in providing good styles, and don’t use any external libraries.

## `**Problem Statement**`

The task is to implement a small web app using HTML,CSS and Vanilla JS, with a list of comments which the user can scroll infinitely!

## `**Instructions**`

Use this API to get a list of comments

```jsx
https://jsonplaceholder.typicode.com/comments
```

## `**Part 1 - Infinite Loading`\*\*

- On the initial page load display only first 10 of the comments, and load the content as a set of 10 continuously as the user scrolls down.
- For each of the comment assign and render a unique number as well.
- Use the scroll event along with the following properties of window to implement this
  - **scrollY** - [https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)
  - **innerHeight** - [https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)
  - **scrollHeight** - [https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight)
- You can use the above properties, or any other combination of window properties to achieve this task.

---

## **`Part 2 - Modal`**

- When the user clicks on any of the comments from the list open up a modal/popup where the user can see more details of that comment which includes
  - Name
  - Email
  - Comment
- You need to use z-index and positions property to achieve this.
- The modal/ popup should also have a close button, which when clicked will exit that modal/popup.
- You should be creating `onCloseModal` `onOpenModal` functions to open and close the modal respectively.

## **`Reference Video`**

External Link :

[https://drive.google.com/file/d/1ycEljW5DHZnR-qANxPI62wmtFvcbO4T5/view?usp=sharing](https://drive.google.com/file/d/1ycEljW5DHZnR-qANxPI62wmtFvcbO4T5/view?usp=sharing)

Embedded:

[Reference Video for Mock](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d364bfe4-fc8f-491c-88ac-27855e081749/Reference_Video.mp4)

Reference Video for Mock

---

## Submission

- Please submit deployed link and Github link of code.
- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Please double-check if deployed version works or not (run the deployed version on your laptop and then submit it).
- Any issues in the deployed link will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before the deadline.

### Rubrics / Criteria to be judged upon

- HTML, CSS, Vanilla JavaScript.
- DOM Manipulation.
- Infinte Scrolling.
- Modal Component.
- Good Layout and Design.
- Code cleanliness.
