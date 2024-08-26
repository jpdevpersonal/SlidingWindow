// Problem Statement  
// Given an array of integers and an integer `k`, find the maximum sum of any consecutive subarray of size `k`.

const slidingWindow = (nums : number[], k: number): number => {
    let windowSum: number = 0;
    let maxSum: number = 0;

    // Edge case: if k is greater than the length of the array
    if (k > nums.length) {
        throw new Error('k cannot be greater than the length of the array');
    }

    // First get the sum of the first 'k' number of elements
    for(let i:number = 0; i < k; i++ ) {
        windowSum += nums[i];
    }

    // Initialize maxSum to store the maximum sum found; initially, it's the sum of the first window.
    maxSum = windowSum;

    // slide the window from k to array.length -1
    for (let i:number = k; i<nums.length; i++){   
        // Updates the windowSum by subtracting the element that is leaving the window (arr[i - k]) 
        // and adding the new element that is entering (arr[i])
        windowSum = windowSum - nums[i - k] + nums[i];

        // update maxsum if the current window sum is greater
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
    
};


const nums:number[] = [2,1,5,1,3,2];
const k:number = 3;

console.log(slidingWindow(nums,k));