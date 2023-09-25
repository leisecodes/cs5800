'''
Leise Crandall
CS5800, Assignment 3
9/24/2023
'''
#function to determine the greatest product of contiguous integers in an array
class Solution(object):
    def maxProduct(self, nums):
        #edge case- there is only 1 number in the array, so return that number.
        if len(nums)== 1:
            return nums[0]
        #set default values to the first integer in the array
        largestProduct = nums[0]
        currentLargest = nums[0]
        currentSmallest = nums[0]
        
        #for loop iterates through nums[1] to nums[...]
        for i in range(1, len(nums)):
            #replace largest with product of self times next integer
            currentLargest *= nums[i]
            #replace smallest with product of self times next integer
            currentSmallest *= nums[i]
            #temp variable to keep track of largest before reassignment
            tempLargest = currentLargest
            #determine the greatest value, reassign largest
            currentLargest = max(currentLargest, currentSmallest, nums[i])
            #determine smallest, using temp largest instead of current, reassign to smallest
            currentSmallest = min(tempLargest, currentSmallest, nums[i])
            #compare the largest value from this iteration with the previous largest product, keep largest of the two
            largestProduct = max(largestProduct, currentLargest)
        #return largestProduct at end of for loop, this is the largest possible product of the subarrays
        return largestProduct