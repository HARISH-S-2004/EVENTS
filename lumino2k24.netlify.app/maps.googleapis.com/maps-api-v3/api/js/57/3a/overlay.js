google.maps.__gjsload__('overlay', function(_) {
    var tD = function(a) {
            this.Fg = a
        },
        tpa = function() {},
        uD = function(a) {
            a.Hy = a.Hy || new tpa;
            return a.Hy
        },
        upa = function(a) {
            this.Dh = new _.xn(() => {
                const b = a.Hy;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Xw && a.onAdd) a.onAdd();
                        b.Xw = !0;
                        a.draw()
                    }
                } else {
                    if (b.Xw)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Xw = !1
                }
            }, 0)
        },
        vpa = function(a, b) {
            const c = uD(a);
            let d = c.fw;
            d || (d = c.fw = new upa(a));
            _.Qb(c.Qh || [], _.Ck);
            var e = c.ni = c.ni || new _.Fka;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.xC = c.xC || new tD(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.yn(d.Dh);
            c.Qh = [_.Ak(a, "panes_changed", e), _.Ak(f, "zoom_changed", e), _.Ak(f, "offset_changed", e), _.Ak(b, "projection_changed", e), _.Ak(f, "projectioncenterq_changed", e)];
            _.yn(d.Dh);
            b instanceof _.Yk ? (_.Il(b, "Ox"), _.Gl(b, 148440)) : b instanceof _.cm && (_.Il(b, "Oxs"),
                _.Gl(b, 181451))
        },
        Apa = function(a) {
            if (a) {
                var b = a.getMap();
                if (wpa(a) !== b && b && b instanceof _.Yk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new xpa(b, a, c.overlayLayer) : c.Gg.then(({
                        lh: d
                    }) => {
                        const e = new ypa(b, d);
                        d.Bi(e);
                        c.overlayLayer = e;
                        zpa(a);
                        Apa(a)
                    })
                }
            }
        },
        zpa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Fg.unbindAll(), b.Fg.set("panes", null), b.Fg.set("projection", null), b.Hg.xl(b), b.Gg && (b.Gg = !1, b.Fg.onRemove ? b.Fg.onRemove() : b.Fg.remove()))
            }
        },
        wpa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Bpa = function(a,
            b) {
            a.Fg.get("projection") != b && (a.Fg.bindTo("panes", a.map.__gm), a.Fg.set("projection", b))
        };
    _.Ha(tD, _.Sk);
    tD.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.ij(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Fg : null))
    };
    var vD = {};
    _.Ha(upa, _.Sk);
    vD.Hl = function(a) {
        if (a) {
            var b = a.getMap();
            (uD(a).fC || null) !== b && (b && vpa(a, b), uD(a).fC = b)
        }
    };
    vD.xl = function(a) {
        const b = uD(a);
        var c = b.ni;
        c && c.unbindAll();
        (c = b.xC) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Qh && _.Qb(b.Qh, _.Ck);
        b.Qh = null;
        b.fw && (b.fw.Dh.Ej(), b.fw = null);
        delete uD(a).fC
    };
    var wD = {},
        xpa = class {
            constructor(a, b, c) {
                this.map = a;
                this.Fg = b;
                this.Hg = c;
                this.Gg = !1;
                _.Il(this.map, "Ox");
                _.Gl(this.map, 148440);
                c.Hl(this)
            }
            draw() {
                this.Gg || (this.Gg = !0, this.Fg.onAdd && this.Fg.onAdd());
                this.Fg.draw && this.Fg.draw()
            }
        },
        ypa = class {
            constructor(a, b) {
                this.Jg = a;
                this.Hg = b;
                this.Fg = null;
                this.Gg = []
            }
            dispose() {}
            Gi(a, b, c, d, e, f, g, h) {
                const l = this.Fg = this.Fg || new _.cB(this.Jg, this.Hg, () => {});
                l.Gi(a, b, c, d, e, f, g, h);
                for (const n of this.Gg) Bpa(n, l), n.draw()
            }
            Hl(a) {
                this.Gg.push(a);
                this.Fg && Bpa(a, this.Fg);
                this.Hg.refresh()
            }
            xl(a) {
                _.Wb(this.Gg,
                    a)
            }
        };
    wD.Hl = Apa;
    wD.xl = zpa;
    _.sk("overlay", {
        vA: function(a) {
            if (a) {
                (0, vD.xl)(a);
                (0, wD.xl)(a);
                var b = a.getMap();
                b && (b instanceof _.Yk ? (0, wD.Hl)(a) : (0, vD.Hl)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.Kw(a, {
                Uk: ({
                    event: b
                }) => {
                    _.Qu(b.Kh)
                },
                ak: b => _.vw(b),
                Wp: b => _.ww(b),
                Vk: b => _.ww(b),
                sk: b => _.xw(b)
            }).Cr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.yk);
            a.addEventListener("contextmenu", _.yk);
            a.addEventListener("dblclick", _.yk);
            a.addEventListener("mousedown", _.yk);
            a.addEventListener("mousemove", _.yk);
            a.addEventListener("MSPointerDown",
                _.yk);
            a.addEventListener("pointerdown", _.yk);
            a.addEventListener("touchstart", _.yk);
            a.addEventListener("wheel", _.yk)
        }
    });
});