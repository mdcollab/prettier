// parentheses around numeric literal should be preserved
function test5(): string {
  return (100).toString();
}

0
1

0.1
1.1

.1
1.

0b1
0B1
0o1
0O1
0x1
0X1

0x123abcdef456ABCDEF
0X123abcdef456ABCDEF
0xdeadbeef;

0b111000
0b000111
0B111000
0B000111
0o111000
0o000111
0O111000
0O000111
0x111000
0x000111
0X111000
0X000111

1e1
1e+1
1e-1
1.e1
.1e1
1.1e1
1.1e0010
.1e+0010
.1e-0010

1E1
1E+1
1E-1
1.E1
.1E1
1.1E1
1.1E0010
.1E+0010
.1E-0010

0.5e0
0.5e00
0.5e+0
0.5e+00
0.5e-0
0.5e-00
