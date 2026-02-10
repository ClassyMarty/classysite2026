# Welcome to the notes for classysite2026

## Introduction

This is a simple frontend created with Angular and MaterialUI to show off as a personal site and perhaps a bit of a blog and for details of my resume. It is a work in progress and will be updated as I learn more about Angular and MaterialUI.

I chose MaterialUI because Google has spent so much time researching and refining it. It is my very favorite UI and I love the rounded edges and the subtle clean animations. I also like yellow and orange, so will certainly be butchering the color pallets (Probably against their design philosophy)

## making the site work first

Angular is designed with standalone components in mind, so each page will be a component (although this is mostly a static site, I thought it would be fun to make use of the modular nature). I would also like to do as much of this manually as possible as a learning experience as opposd to having everything dictated by AI. So, in this setup there will be some pretty nasty and ugly code, because its human made ^^.

### Pushing the rendered site to github pages

I am using the angular cli to build the site and then pushing the rendered site to github pages. This is done with the following commands:

```bash
ng build --base-href "https://github.com/ClassySite2026/classysite2026.github.io.git"
ngh --dir=dist/classysite2026/browser
```

## Adding components
I used a master page that will always show and broke that into three main components to make editing modular
```
ng generate component masterpage --standalone --skip-tests
```
```
ng generate component masterpage/header --standalone --skip-tests
```
```
ng generate component masterpage/body --standalone --skip-tests
```
```
ng generate component masterpage/foot --standalone --skip-tests
```
ng generate component masterpage/sidenav --standalone --skip-tests
```
The masterpage will hold all the new components, then I will route the body component to the different pages.