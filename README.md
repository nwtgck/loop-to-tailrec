loop-to-tailrec
==

Convertor a while-loop to a tail-recursive function

# Page

http://nwtgck.github.io/loop-to-tailrec/

# Demo

![](./demo-images/demo1.gif)

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
     val newI = i+1
     val newA = b
     val newB = a+b
     i = newI
     a = newA
     b = newB
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
     val newAccum = f(accum, seq(i))
     val newI = i + 1
     accum = newAccum
     i = newI
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

You can access http://nwtgck.github.io/loop-to-tailrec/ and try other examples!
