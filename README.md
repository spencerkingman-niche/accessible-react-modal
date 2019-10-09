## Overview

Website's modals don't meet accessibility standards. For instance, the `input` elements in regForm modals must be focused by mouse click in order to fill out anything. They are not reachable by keyboard at all.

This is an example of ModalContainer that satisfies the following accessibility requirements. 

- [x] When the Modal is not open, it is not rendered into the DOM.
- [x] When rendered, the Modal is appended to the end of document.body.
- [x] The Modal has relevant WAI-ARIA attributes in accordance with accessibility guidelines.
- [x] Pressing the escape key will close the Modal.
- [x] Clicking outside the Modal will close it.
- [x] When open, scrolling is frozen on the main document beneath the Modal.
- [x] When open, focus is drawn immediately to the Modal's close button.
- [x] When the Modal closes, focus returns to the Modal's trigger button.
- [x] Focus is trapped within the Modal when open.

I believe that the `ModalContainer` component here might be able to be swapped out for the `ModalContainer` that is currently rendered in website as a child of `App.tsx` whenever there is `modalContent` in the `ModalStore`.

I built this by following articles: 
* [https://assortment.io/posts/accessible-modal-component-react-portals-part-1](https://assortment.io/posts/accessible-modal-component-react-portals-part-1)
* [https://assortment.io/posts/accessible-modal-component-react-portals-part-2](https://assortment.io/posts/accessible-modal-component-react-portals-part-2)

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn` then `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

