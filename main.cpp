#include "mbed.h"
#include "m3pi.h"

m3pi m3pi;

int main() {

    m3pi.locate(0,1);
    m3pi.printf("YO YO YO!");

    wait (2.0);
    
    // right 9.46 degrees
    m3pi.right(0.1);
    wait(0.06571057088906673);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109333);

    // forwards 6 inches
    m3pi.forward(0.1);
    wait(1.6216216216216215);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 6.08 inches
    m3pi.backward(0.1);
    wait(1.6439898730535727);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // backwards 3 inches
    m3pi.backward(0.1);
    wait(0.8108108108108107);

    // forwards 1 inches
    m3pi.forward(0.1);
    wait(0.27027027027027023);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 6.08 inches
    m3pi.backward(0.1);
    wait(1.6439898730535727);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // forwards 4 inches
    m3pi.forward(0.1);
    wait(1.081081081081081);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109333);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109333);

    // forwards 8 inches
    m3pi.forward(0.1);
    wait(2.162162162162162);

    // backwards 6 inches
    m3pi.backward(0.1);
    wait(1.6216216216216215);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 12.17 inches
    m3pi.backward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // forwards 8 inches
    m3pi.forward(0.1);
    wait(2.162162162162162);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109333);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // backwards 6.08 inches
    m3pi.backward(0.1);
    wait(1.6439898730535727);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109333);

    // forwards 6 inches
    m3pi.forward(0.1);
    wait(1.6216216216216215);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109333);

    // forwards 6.08 inches
    m3pi.forward(0.1);
    wait(1.6439898730535727);

    // backwards 12.17 inches
    m3pi.backward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109333);

    // forwards 2 inches
    m3pi.forward(0.1);
    wait(0.5405405405405405);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109333);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109333);

    // forwards 6 inches
    m3pi.forward(0.1);
    wait(1.6216216216216215);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 12.17 inches
    m3pi.backward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // forwards 2 inches
    m3pi.forward(0.1);
    wait(0.5405405405405405);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109333);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109333);

    // forwards 6 inches
    m3pi.forward(0.1);
    wait(1.6216216216216215);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 6.08 inches
    m3pi.backward(0.1);
    wait(1.6439898730535727);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // backwards 4 inches
    m3pi.backward(0.1);
    wait(1.081081081081081);

    // forwards 2 inches
    m3pi.forward(0.1);
    wait(0.5405405405405405);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 6.08 inches
    m3pi.backward(0.1);
    wait(1.6439898730535727);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // forwards 4 inches
    m3pi.forward(0.1);
    wait(1.081081081081081);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109333);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // left 43.15 degrees
    m3pi.left(0.1);
    wait(0.2996693731528153);

    // backwards 7.21 inches
    m3pi.backward(0.1);
    wait(1.94894663538594);

    // right 78.69 degrees
    m3pi.right(0.1);
    wait(0.5464588022637487);

    // backwards 8.49 inches
    m3pi.backward(0.1);
    wait(2.2933192903347486);

    m3pi.stop();
}

