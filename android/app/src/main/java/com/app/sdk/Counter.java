package com.app.sdk;

public class Counter {
    int countValue = 5;

    public int getCountValue() {
        return this.countValue;
    }

    public void increaseCount() {
        this.countValue++;
    }

    public void decreaseCount() {
        this.countValue--;
    }

    public void setCountValue(int countValue) {
        this.countValue = countValue;
    }
}
