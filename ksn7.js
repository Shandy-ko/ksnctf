(function (stack, heap, callStack, main, buf) {

  (main = function (label, end) { do switch(label) {
    var WS2JS = [0, 0]
    case 0:

      stack.push(80);
      WS2JS.putc(stack.pop());
      stack.push(73);
      WS2JS.putc(stack.pop());
      stack.push(78);
      WS2JS.putc(stack.pop());
      stack.push(58);
      WS2JS.putc(stack.pop());
      stack.push(32);
      WS2JS.putc(stack.pop());
      stack.push(0);
      WS2JS.getn(function (n) { heap[stack.pop()] = n; main(14);}); label = 2; break; case 14:
      stack.push(0);
      stack.push(heap[stack.pop()]);
      stack.push(33355524);
      stack.push(-stack.pop() + stack.pop());
      if (!stack.pop()) { label = '1'; break;}
      stack.push(78);
      WS2JS.putc(stack.pop());
      stack.push(79);
      WS2JS.putc(stack.pop());
      label = 1; break;

    case '1':

      stack.push(79);
      WS2JS.putc(stack.pop());
      stack.push(75);
      WS2JS.putc(stack.pop());
      stack.push(10);
      WS2JS.putc(stack.pop());
      stack.push(0);
      stack.push(heap[stack.pop()]);
      stack.push(33355454);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(6);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(11);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(6);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(24);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(26);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(40);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(25);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(36);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(66);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(16);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(14);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(14);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(27);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(5);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(29);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(4);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(4);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(28);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(22);
      stack.push(stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(34);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      stack.push(55);
      stack.push(-stack.pop() + stack.pop());
      stack.push(stack[stack.length - 1]);
      WS2JS.putc(stack.pop());
      label = 1; break;

    case 1:

      WS2JS.onExit();

    case 2:

      end = 1; break;

  default: throw new Error('Invalid label :' + label);} while (!end);})(0);

})([], {}, []);
