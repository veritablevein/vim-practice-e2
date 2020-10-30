var foo = 1;
var bar = 'a';
var foobar = foo + bar;
// A;<ESC>      $a;<ESC>
// j.           j$.
// j.           j$.
// (光标移到行尾+";"；a光标后插入；i光标前插入；$移动到行尾；A移动到行尾并插入=$a)