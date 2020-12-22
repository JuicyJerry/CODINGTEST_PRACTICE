#include <iostream>
using namespace std;
int main() 
{
    int juso[8] = {402, 401, 302, 301, 202, 201, 102, 101};
    char name[8][5] = {{"KIM"}, {"TEA"}, {"SOM"}, {"OPPO"}, {"TOM"}, {"GDK"}, {"JAME"}, {"MIN"}};
    int num;
    cin >> num;

    if (num == juso[0]) cout << name[0];
    else if (num == juso[1]) cout << name[1];
    else if (num == juso[2]) cout << name[2];
    else if (num == juso[3]) cout << name[3];
    else if (num == juso[4]) cout << name[4];
    else if (num == juso[5]) cout << name[5];
    else if (num == juso[6]) cout << name[6];
    else if (num == juso[7]) cout << name[7];

    /*
        int index;
        for (int i = 0; i < 8; i++){
            if (num === juso[i]) {
                index = i;
                break;
            }
        }
        cout << name[index];
    */

    return 0;
}