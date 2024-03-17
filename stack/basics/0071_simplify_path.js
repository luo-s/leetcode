/*
Given a string path, which is an absolute path (starting with a slash '/') 
to a file or directory in a Unix-style file system, convert it to the 
simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, 
a double period '..' refers to the directory up a level, and any multiple 
consecutive slashes (i.e. '//') are treated as a single slash '/'. 
For this problem, any other format of periods such as '...' are treated as 
file/directory names.

The canonical path should have the following format:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.

1 <= path.length <= 3000
path consists of English letters, digits, period '.', slash '/' or '_'.
path is a valid absolute Unix path.
*/

// https://leetcode.com/problems/simplify-path/description/

/*
split path by "/":
1) "//" -> "", do nothing
2) "/../" -> ".." element -> go up one level, stack.pop()
3) "/./" -> "." element -> stay at the same level, do nothing
4) begining "/" -> "", do nothing
5) ending "/" -> "", do nothing
*/
var simplifyPath = function (path) {
  let stack = [];
  let pathArr = path.split("/");
  for (let dir of pathArr) {
    if (dir === "" || dir === ".") {
      continue;
    } else if (dir === "..") {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }
  return "/" + stack.join("/");
};
