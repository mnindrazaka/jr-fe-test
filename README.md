# Junior Frontend Test

Junior frontend test

## Screenshot

![screenshot](screenshot.png)

## Notice For Reviewer

### 1. React Router Issue

There is typing issue on react router if we are using react lazy to load component to router :

https://github.com/ReactTraining/react-router/issues/6420

so i decided to load component normally to router to remove warning from browser console

### 2. DropdownToggle Component Issue

There is props issue on DropdownToggle component that lead to warning on browser console

```bash
Warning: React does not recognize the `dropDirection` prop on a DOM element.
```

this is happen when i open `second.tsx`, but on that component there are no `dropDirection` props used to regular DOM element, so maybe that issue comes from DropdownToggle component itself
