/*
Question: 
Given a 2preorder, 1inorder, and 3post of a tree, write a program to see if they are the same tree
*/

/* 

node class
this.left
this.right
root = new Node (val)
root.left = new Node (val1)
root.right = new Node (val2)

left = new Node(4) 
right = new Node(5)
parent = new Node(2)
parent.left = left 
parent.right = right

Testcases:
Input : Inorder(LNR) -> 4 2 5 1 3 (array)
        Preorder(NLR) -> 1 2 4 5 3
        Postorder(LRN) -> 4 5 2 3 1
Output : Yes
      1
    2  3
  4  5

  2
4  1
  5  3

    5 
  2   3
4    1

/*

/*


Psuedocode

set root to first element of preorder arr

we know the furthest left node is the first element of inorder arr and the parent of that furthest left node is the second element of inorder arr

run through preorder until we reach the first element of inorder 
set all elements prior to the first element of inorder to left children of the prior

test case looks like so far
    1
  2 
4   

check if inorder[1] is in tree? 
*/ 












