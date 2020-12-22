#include <iostream>
using namespace std;
int main() {

    int arr[3][4] = {{12, 11, 10, 9}, {8, 7, 6, 5}, {4, 3, 2, 1}};
    int num;
    cin >> num;

    if (num == 1) {
        for (int y = 0; y < 4; y++) {
            arr[0][y] = 7;
        }
    } else if (num == 2) {
        for (int y = 0; y < 4; y++) {
            arr[1][y] = 7;
        }
    } else {
        for (int y = 0; y < 4; y++) {
            arr[2][y] = 7;
        }
    }

    for (int y = 0; y < 3; y++) {
        for (int x = 0; x < 4; x++) {
            cout << arr[y][x] << " ";
        }
        cout << endl;
    }
    return 0;
}