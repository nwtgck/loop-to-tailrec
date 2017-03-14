for-to-tailrec
==

Convertor a while-loop to a tail-recursive function

# Demo

![](./demo-images/demo1.gif)

# Page

http://nwtgck.github.io/loop-to-tailrec/

# What is this?

Convert the following format while-loop to a tail-rec function!

# Example1 - Fibonacci

### Input (while-loop)

```scala
def fib ( n: Int ): Int = {
   var i: Int = 0
   var a: Int = 1
   var b: Int = 1
   while(i < n){
     val prev_i = i
     val prev_a = a
     val prev_b = b
     i = i+1
     a = prev_b
     b = prev_a+prev_b
   }
   a
}
```

==>

### Output (tailrec)

```scala
// Scala(tailrec)
def fib ( n: Int ): Int = {
   import scala.annotation.tailrec
   @tailrec
   def _fib( i: Int , a: Int , b: Int ): Int = {
     if(i < n) _fib( i+1 , b , a+b )
     else a
   }
   _fib( 0 , 1 , 1 )
}
```

# Example2 - foldLeft

### Input (while-loop)

```scala
def foldLeft [ E , A ] ( seq: Seq[E] , zero: A , f: (A, E) => A ): A = {
   var accum: A = zero
   var i: Int = 0
   while(i < seq.length){
     val prev_accum = accum
     val prev_i = i
     accum = f(accum, seq(i))
     i = i + 1
   }
   accum
}
```

==>

### Output (tailrec)

```scala
// Scala(tailrec)
def foldLeft [ E , A ] ( seq: Seq[E] , zero: A , f: (A, E) => A ): A = {
   import scala.annotation.tailrec
   @tailrec
   def _foldLeft( accum: A , i: Int ): A = {
     if(i < seq.length) _foldLeft( f(accum, seq(i)) , i + 1 )
     else accum
   }
   _foldLeft( zero , 0 )
}
```

You can access http://nwtgck.github.io/for-to-tailrec/ and try other examples!
