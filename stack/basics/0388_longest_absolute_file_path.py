# Suppose we have a file system that stores both files and directories.

# Here, we have dir as the only directory in the root. dir contains two subdirectories, subdir1 and subdir2. subdir1 contains a file file1.ext and subdirectory subsubdir1. subdir2 contains a subdirectory subsubdir2, which contains a file file2.ext.

# In text form, it looks like this (with ⟶ representing the tab character):

# dir
# ⟶ subdir1
# ⟶ ⟶ file1.ext
# ⟶ ⟶ subsubdir1
# ⟶ subdir2
# ⟶ ⟶ subsubdir2
# ⟶ ⟶ ⟶ file2.ext

# If we were to write this representation in code, it will look like this: "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext". Note that the '\n' and '\t' are the new-line and tab characters.

# Every file and directory has a unique absolute path in the file system, which is the order of directories that must be opened to reach the file/directory itself, all concatenated by '/'s. Using the above example, the absolute path to file2.ext is "dir/subdir2/subsubdir2/file2.ext". Each directory name consists of letters, digits, and/or spaces. Each file name is of the form name.extension, where name and extension consist of letters, digits, and/or spaces.

# Given a string input representing the file system in the explained format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

# Note that the testcases are generated such that the file system is valid and no file or directory name has length 0.

# https://leetcode.com/problems/longest-absolute-file-path/

class Solution:
    def lengthLongestPath(self, input: str) -> int:
        # Split input into lines by newline character
        paths = input.split('\n')
        
        # Stack to store the length of directories at each level
        stack = []
        max_len = 0
        
        for path in paths:
            # Count the depth of the current file or directory based on '\t'
            depth = path.count('\t')
            path = path.lstrip('\t')  # Remove all '\t' characters to get the actual name
            
            # Ensure the stack size matches the current depth
            while len(stack) > depth:
                stack.pop()
            
            # If it's a file (contains a dot), update the max length
            if '.' in path:
                # Calculate the current total length (consider all parts and '/')
                current_len = sum(stack) + len(path) + len(stack)  # Add len(stack) for slashes
                max_len = max(max_len, current_len)
            else:
                # If it's a directory, push its length to the stack
                stack.append(len(path))
        
        return max_len
