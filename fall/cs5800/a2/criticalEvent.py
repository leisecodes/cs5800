'''
Leise Crandall
CS 5800, Kennedy
Assignment 2
'''

#Program to count number of critical events (i>j*t) based on input threshold(t) and input array
def main():
    print("Please enter an integer value for the threshold. >")
    #User input stored as integer value
    threshold = int(input())

    #reading txt file for array values
    file = open('fall/cs5800/a2/exampleArray2.txt', "r")
    #separating array values by empty string "" into list
    num = file.read().split(); 
    #empty array for storing values in program
    valueArray= [];
    #loop adds each value from list to array structure, typecasts to integers from strings
    for i in num:
        i = int(i)
        valueArray.append(i);
    
    #counter to keep track of number of critical events
    count = 0;
    #counter to keep track of index in outer for loop
    i = 0;
    #length of array
    length = len(valueArray);

    #outer loop moves through the values in the array for comparison
    for val1 in valueArray:
        #j is index of value to right of val1
        j = i+1;
        #while loop compares value in focus against subsequent values up to len-1
        while j<=length-1:
            #if val1 is greater than val[j]*t, record critical event, increment j
            if val1>valueArray[j]*threshold:
                count+=1
                j+=1
            #otherwise, increment j
            else: 
                j+=1
        #when all values j have been checked, increment i and continue outer for loop
        i+=1
    print(count);
        


        





if __name__=="__main__":
    main()