google.maps.__gjsload__('search_impl', function(_) {
    var Imb = function(a, b) {
            _.H(a.Ig, 3, b)
        },
        Mmb = function(a, b, c) {
            const d = _.XK(new Jmb);
            c.Tq = (0, _.Da)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.EPa(c, _.yR(b));
            const e = [];
            e.push(_.Ak(c, "click", (0, _.Da)(Kmb, null, a)));
            _.Qb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.Ak(c, f, (0, _.Da)(Lmb, null, a, f)))
            });
            e.push(_.Ak(a, "clickable_changed", function() {
                a.Fg.clickable = 0 != a.get("clickable")
            }));
            a.Gg = e
        },
        Kmb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Z(e.Ig,
                    2) ? new _.Oj(_.xv(_.J(e.Ig, 2, _.Cv).Ig, 1), _.xv(_.J(e.Ig, 2, _.Cv).Ig, 2)) : null;
                f.fields = {};
                const g = _.yi(e.Ig, 3);
                for (let h = 0; h < g; ++h) {
                    const l = _.it(e.Ig, 3, _.HR, h);
                    f.fields[l.getKey()] = l.getValue()
                }
            }
            _.Ok(a, "click", b, c, d, f)
        },
        Lmb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.Ok(a, b, c, d, e, h, g)
        },
        Nmb = function() {},
        Omb = class extends _.R {
            constructor() {
                super()
            }
            cj() {
                return _.Wi(this.Ig, 2)
            }
        },
        Pmb = [_.K, , , _.Jq, _.MQa];
    var Qmb = class extends _.R {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.I(this.Ig, 1, -1)
        }
    };
    var Jmb = class {
        constructor() {
            var a = _.qp,
                b = _.np;
            this.Gg = _.Yi;
            this.Fg = _.ct(_.Iz, a, _.VA + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Qmb(g);
                b(g)
            }
            var d = new Omb;
            _.H(d.Ig, 1, a.layerId.split("|")[0]);
            _.H(d.Ig, 2, a.featureId);
            Imb(d, this.Gg.Fg().Fg());
            for (var e in a.parameters) {
                var f = _.Si(d.Ig, 4, _.HR);
                _.H(f.Ig, 1, e);
                _.H(f.Ig, 2, a.parameters[e])
            }
            a = _.Fi(d.xi(), Pmb, 1);
            this.Fg(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Nmb.prototype.sE = function(a) {
        if (_.Nn[15]) {
            var b = a.Jg;
            const c = a.Jg = a.getMap();
            b && a.Fg && (a.Hg ? (b = b.__gm.Yj, b.set(b.get().Gn(a.Fg))) : a.Fg && _.aQa(a.Fg, b) && (_.Qb(a.Gg || [], _.Ck), a.Gg = null));
            if (c) {
                b = new _.Ry;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...g] = d[e].split(":");
                    b.parameters[f] = g.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.jz(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.bz(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.bz(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.eka(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.Xy(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.EA(a.get("searchPipeMetadata")));
                a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.sia(a.get("gmmContextPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.kz(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.Jja(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters =
                    new _.Hja(a.get("directionsPipeParameters")));
                a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.$ha(a.get("clientSignalPipeMetadata")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.Fg = b;
                a.Hg = a.get("renderOnBaseMap");
                a.Hg ? (a = c.__gm.Yj, a.set(a.get().Il(b))) : Mmb(a, c, b);
                _.Il(c, "Lg");
                _.Gl(c, 148282)
            }
        }
    };
    _.sk("search_impl", new Nmb);
});