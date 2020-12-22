#include <iostream>
using namespace std;
int main()
{
    int matrix[3][5] = {{5, 1, 4, 2, 6}, {3, 5, 0, 0, 7}, {9, 9, 8, 3, 1}};
    int num;
    int cnt = 0;
    cin >> num;

    for (int y = 0; y < 3; y++) {
        for (int x = 0; x < 5; x++) {
            if (matrix[y][x] > num) {
                cnt++;
            }
        }
    }

    cout << cnt << "개";

    return 0;
}