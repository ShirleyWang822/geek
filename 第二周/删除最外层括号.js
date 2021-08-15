/**
 
 
 class Solution {
    public String removeOuterParentheses(String S) {
        StringBuilder sb = new StringBuilder();
        int level = 0;
        for (char c : S.toCharArray()) {
            if (c == ')') --level;
            if (level >= 1) sb.append(c);
            if (c == '(') ++level;
        }
        return sb.toString();
    }
}
 (()())
 
 主要是要理解level的意义，level可以理解为“(”的层数，比如说“（（）（））（（））”这个
 碰到第一个“(”过后，直到碰到与之对应的“)”,level大于等于1，即把()()append到sb中，右边的括号同理。（个人理解）
 
 
 
 
 
 
 
 * */
