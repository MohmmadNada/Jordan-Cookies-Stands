# Steps lab 38 / React app version 2 :
## Feature Task and Requirement

1. add over view buttom in top right header 
   - [ ] <Header> component should have Next <Link> to overview page. 
   - [x] <Header> should be in own file inside top level components folder.
   - [x] this component should be imported into Index.js

2. Overview page details…
    - [ ]should live in pages/overview.js
    - [ ]should render <Link href="/"><a>Return to Main page</a></Link>
### Implementation 
1. Open index.js => import Link from 'next/link'
2. add a tag inside button tag add some class name for css 
> should be Link 
3. create overview.js inside pages 
4. header component 
   1. <Header herfOverview={'/overview'}>
   2. copy the header tag 
   3. add folder components in top level => Header.js => past the contenet
   4. add  export defult and function with props
   5. open index.js import the Header

5. the table , random number between min and max => set in array 

