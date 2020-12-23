#include <iostream>
using namespace std;
int main() 
{
    int arr[9] = { 0 };
    int headIdx, endIdx;

    for (int y = 0; y < 3; y++) {
        cin >> headIdx >> endIdx;

        for (int x = headIdx; x <= endIdx; x++) {
            arr[x]++;
        }
    }

    for (int y = 0; y < 9; y++) {
        cout << arr[y] << " ";
    }

    return 0;
}