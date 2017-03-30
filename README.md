# ava-compare

---

## setup

    npm install
---
We run single assertion for 1000 times per each framework.

## Mocha

    npm run mocha:sync -- --times=1000

    output: 454ms


    npm run mocha:async -- --times=1000
    output: 2m

## Ava

    npm run ava:sync
    output: 82ms

    npm run ava:async
    output: 294ms

---

## Conclusion

As we can see ava is much faster than mocha.Even in sync and async way.
