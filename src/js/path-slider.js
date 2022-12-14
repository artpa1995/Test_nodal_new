import anime from 'animejs/lib/anime.es.js';

function PathSlider(t, i, n) {
    this.path = is.str(t) ? document.querySelector(t) : t, this.pathLength = this.path.getTotalLength(), this.items = is.str(i) ? document.querySelectorAll(i) : i, this.itemsLength = this.items.length, this.init(n)
}

function setStyle(t, i, n) {
    t.style[i] = n, t.style["-webkit-" + i] = n
}

function call(t, i) {
    is.fnc(t) && t(i)
}

function extendSingle(t, i) {
    for (var n in i) t[n] = is.arr(i[n]) ? i[n].slice(0) : i[n];
    return t
}

function extend(t, i) {
    t || (t = {});
    for (var n = 1; n < arguments.length; n++) extendSingle(t, arguments[n]);
    return t
}

PathSlider.prototype = {
    defaults: {
        paddingSeparation: 0,
        duration: 1e3,
        delay: 0,
        stagger: 0,
        easing: "easeInOutCubic",
        elasticity: void 0,
        rotate: !1,
        begin: void 0,
        end: void 0,
        beginAll: void 0,
        endAll: void 0,
        clickSelection: !0
    }, init: function (t) {
        this.initialOptions = t, extend(this, this.defaults, t), this.initPathOptions(), this.initItems(), this.clickSelection && this.initEvents()
    }, initPathOptions: function () {
        this.activeSeparation = is.und(this.initialOptions.activeSeparation) ? (this.pathLength - 2 * this.paddingSeparation) / this.itemsLength : this.initialOptions.activeSeparation, is.und(this.initialOptions.startLength) ? this.startLength = this.paddingSeparation + this.activeSeparation / 2 : this.startLength = "center" === this.initialOptions.startLength ? this.pathLength / 2 : this.initialOptions.startLength + this.paddingSeparation
    }, initItems: function () {
        for (var t = [], i = 0; i < this.itemsLength; i++) t.push({node: this.items[i], positionIndex: i});
        this.items = t, this.currentIndex = 0, this.updatePositions(), this.updateClass(), this.animations = []
    }, initEvents: function () {
        for (var t = this, i = 0; i < this.itemsLength; i++) !function (i) {
            t.items[i].node.addEventListener("click", function () {
                t.selectItem(i)
            })
        }(i)
    }, updatePositions: function () {
        this.calcPositions();
        for (var t, i = 0; i < this.itemsLength; i++) t = this.items[i], t.position = this.positions[t.positionIndex], this.setPosition(t.node, t.position)
    }, calcPositions: function () {
        this.positions = [], this.pathLength = this.path.getTotalLength(), this.initPathOptions();
        for (var t = this.pathLength - 2 * this.activeSeparation - 2 * this.paddingSeparation, i = t / (this.itemsLength - 2), n = this.startLength, e = 0; e < this.itemsLength; e++) this.positions.push(n), n += 0 === e ? this.activeSeparation : i, n >= this.pathLength - this.paddingSeparation && (n += 2 * this.paddingSeparation, n -= this.pathLength)
    }, setPosition: function (t, i) {
        var n = this.point(i), e = this.point(i - 1), s = this.point(i + 1),
            o = ["translate(" + n.x + "px, " + n.y + "px)"];
        if (this.rotate) {
            var a = 180 * Math.atan2(s.y - e.y, s.x - e.x) / Math.PI + 180;
            o.push("rotate(" + a + "deg)")
        }
        setStyle(t, "transform", o.join(" "))
    }, point: function (t) {
        return this.path.getPointAtLength(this.getRealPosition(t))
    }, selectItem: function (t) {
        var i = this.items[t], n = i.positionIndex, e = !0;
        if (0 !== n) {
            for (var s = 0; s < this.animations.length; s++) this.animations[s].anime.pause();
            this.animations = [], this.updateClass(t), n > this.itemsLength / 2 && (e = !1);
            for (var o = this, a = 0; a < this.itemsLength; a++) !function (i) {
                var s = o.items[i], a = i - t < 0 ? o.itemsLength - (t - i) : i - t, h = o.positions[a], r = o.stagger,
                    p = s.positionIndex;
                e ? (s.position < h && (h -= o.pathLength, p += o.itemsLength), r *= p - n) : (s.position >= h && (h += o.pathLength, s.positionIndex > n && (p -= o.itemsLength)), r *= n - p), 0 === i && call(o.beginAll);
                var c = {index: i, node: s.node, selected: 0 === a, unselected: 0 === s.positionIndex};
                call(o.begin, c);
                var d = {position: s.position};
                s.positionIndex = a, s.position = o.getRealPosition(h), o.animations.push({
                    index: i,
                    anime: anime({
                        targets: d,
                        position: h,
                        duration: o.duration,
                        easing: o.easing,
                        elasticity: o.elasticity,
                        delay: o.delay + r,
                        update: function () {
                            o.setPosition(s.node, d.position)
                        },
                        complete: function () {
                            call(o.end, c), o.animations = o.animations.filter(function (t) {
                                return t.index !== i
                            }), 0 === o.animations.length && call(o.endAll)
                        }
                    })
                })
            }(a)
        }
    }, selectPrevItem: function () {
        this.selectItem(this.getPrevItem(this.currentIndex))
    }, selectNextItem: function () {
        this.selectItem(this.getNextItem(this.currentIndex))
    }, getPrevItem: function (t) {
        return t > 0 ? t - 1 : this.itemsLength - 1
    }, getNextItem: function (t) {
        return t + 1 < this.itemsLength ? t + 1 : 0
    }, getRealPosition: function (t) {
        var i = parseFloat(t);
        if (i < 0) for (; i < 0;) i += this.pathLength; else if (i >= this.pathLength) for (; i >= this.pathLength;) i -= this.pathLength;
        return i
    }, updateClass: function (t) {
        is.und(t) || (this.items[this.currentIndex].node.classList.remove("path-slider__current-item"), this.currentIndex = t), this.items[this.currentIndex].node.classList.add("path-slider__current-item")
    }
};
var is = {
    arr: function (t) {
        return Array.isArray(t)
    }, str: function (t) {
        return "string" == typeof t
    }, fnc: function (t) {
        return "function" == typeof t
    }, und: function (t) {
        return "undefined" == typeof t
    }
};

export default PathSlider;