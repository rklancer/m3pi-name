#include "mbed.h"
#include "m3pi.h"

m3pi m3pi;

int main() {

    m3pi.locate(0,1);
    m3pi.printf("LO World");

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

    // left 45 degrees
    m3pi.left(0.1);
    wait(0.3125);

    // backwards 8.49 inches
    m3pi.backward(0.1);
    wait(2.2933192903347486);

    // left 63.43 degrees
    m3pi.left(0.1);
    wait(0.4405204779369584);

    // backwards 6.32 inches
    m3pi.backward(0.1);
    wait(1.7093392757666916);

    // left 71.57 degrees
    m3pi.left(0.1);
    wait(0.4969795220630416);

    // backwards 4 inches
    m3pi.backward(0.1);
    wait(1.081081081081081);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 12.17 inches
    m3pi.backward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // backwards 8 inches
    m3pi.backward(0.1);
    wait(2.162162162162162);

    // forwards 6 inches
    m3pi.forward(0.1);
    wait(1.6216216216216215);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // backwards 8 inches
    m3pi.backward(0.1);
    wait(2.162162162162162);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 12.17 inches
    m3pi.backward(0.1);
    wait(3.2879797461071454);

    // forwards 6.08 inches
    m3pi.forward(0.1);
    wait(1.6439898730535727);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // backwards 6 inches
    m3pi.backward(0.1);
    wait(1.6216216216216215);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 6.08 inches
    m3pi.backward(0.1);
    wait(1.6439898730535727);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // right 80.54 degrees
    m3pi.right(0.1);
    wait(0.5592894291109332);

    // backwards 2 inches
    m3pi.backward(0.1);
    wait(0.5405405405405405);

    // left 63.43 degrees
    m3pi.left(0.1);
    wait(0.4405204779369584);

    // backwards 13.42 inches
    m3pi.backward(0.1);
    wait(3.626056179729389);

    // left 36.03 degrees
    m3pi.left(0.1);
    wait(0.25019009295210837);

    // forwards 12.17 inches
    m3pi.forward(0.1);
    wait(3.2879797461071454);

    // left 80.54 degrees
    m3pi.left(0.1);
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

    // left 45 degrees
    m3pi.left(0.1);
    wait(0.3125);

    // backwards 8.49 inches
    m3pi.backward(0.1);
    wait(2.2933192903347486);

    // left 63.43 degrees
    m3pi.left(0.1);
    wait(0.4405204779369584);

    // backwards 6.32 inches
    m3pi.backward(0.1);
    wait(1.7093392757666916);

    // left 71.57 degrees
    m3pi.left(0.1);
    wait(0.4969795220630416);

    // backwards 4 inches
    m3pi.backward(0.1);
    wait(1.081081081081081);

    // left 80.54 degrees
    m3pi.left(0.1);
    wait(0.5592894291109332);

    // backwards 12.17 inches
    m3pi.backward(0.1);
    wait(3.2879797461071454);

    // left 43.15 degrees
    m3pi.left(0.1);
    wait(0.2996693731528153);

    // forwards 7.21 inches
    m3pi.forward(0.1);
    wait(1.94894663538594);

    // right 78.69 degrees
    m3pi.right(0.1);
    wait(0.5464588022637485);

    // forwards 8.49 inches
    m3pi.forward(0.1);
    wait(2.2933192903347486);

    m3pi.stop();
}

