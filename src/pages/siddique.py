import math
def check_difference(arr, pivot):
    greater_count = 0
    lesser_count = 0
    for num in arr:
        if num > pivot:
            greater_count += 1
        elif num < pivot:
            lesser_count += 1
    if abs(greater_count - lesser_count) == 1:
        print("YES")
    else:
        print("NO")
def main():
    size=int(input())
    pivot=int(input())
    for i in range(0,size):
        arr=map(list(int(input())))
    check_difference(arr,pivot)
main()

                     
