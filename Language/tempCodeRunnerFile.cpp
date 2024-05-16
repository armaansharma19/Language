#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

vector<string> split(const string& input, char delimiter) {
    vector<string> tokens;
    stringstream ss(input);
    string token;
    while (getline(ss, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}

void generateCombinations(const vector<int>& items, vector<string>& combinations) {
    int n = items.size();
    for (int i = 0; i < (1 << n); ++i) {
        string combination;
        for (int j = 0; j < n; ++j) {
            if (i & (1 << j)) {
                combination += to_string(items[j]) + " ";
            }
        }
        combinations.push_back(combination);
    }
}

void printCombinations(const vector<int>& items) {
    vector<string> combinations;
    generateCombinations(items, combinations);
    for (const string& combination : combinations) {
        cout << combination << endl;
    }
}

int main() {
    string input;
    getline(cin, input);

    vector<string> items_str = split(input, ' ');
    vector<int> items;
    for (const string& item : items_str) {
        items.push_back(stoi(item));
    }

    printCombinations(items);
    return 0;
}