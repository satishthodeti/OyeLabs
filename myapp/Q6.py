# 6. Imagine you have array of integer from 1 to 100 , the numbers are randomly ordered ,
# one number from 1 to 100 is missing , Please write the code for finding the missing number ?

# Solution Python Code
numbers = [9, 5, 7, 8, 4, 6, 1, 2, ]
max_num = max(numbers)
min_num = min(numbers)
total_nums = list(range(min_num, max_num+1))
missing_num = set(total_nums) - set(numbers)
res = list(missing_num)
print(*res)
