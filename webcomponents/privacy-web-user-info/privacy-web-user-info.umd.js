(function (n, W) {
  if (typeof exports == "object" && typeof module !== "undefined") {
    W(require("vue"), require("axios"), require("vue-i18n"), require("moment"), require("moment/dist/locale/pt-br"), require("moment/dist/locale/es"), require("@fortawesome/fontawesome-svg-core"), require("element-plus"), require("element-plus/dist/locale/pt-br"), require("element-plus/dist/locale/es"), require("lodash"));
  } else if (typeof define == "function" && define.amd) {
    define(["vue", "axios", "vue-i18n", "moment", "moment/dist/locale/pt-br", "moment/dist/locale/es", "@fortawesome/fontawesome-svg-core", "element-plus", "element-plus/dist/locale/pt-br", "element-plus/dist/locale/es", "lodash"], W);
  } else {
    n = typeof globalThis !== "undefined" ? globalThis : n || self;
    W(n.Vue, n.axios, n.VueI18n, n.moment, null, null, n["fontawesome-svg-core"], n.ElementPlus, n.ElementPlusLocalePtBr, n.ElementPlusLocaleEs, n._);
  }
})(this, function (n, W, Ot, V, tl, il, B, S, kt, vt, Pt) {
  "use strict";

  function Be(t) {
    const e = Object.create(null, {
      [Symbol.toStringTag]: {
        value: "Module"
      }
    });
    if (t) {
      for (const i in t) {
        if (i !== "default") {
          const o = Object.getOwnPropertyDescriptor(t, i);
          Object.defineProperty(e, i, o.get ? o : {
            enumerable: true,
            get: () => t[i]
          });
        }
      }
    }
    e.default = t;
    return Object.freeze(e);
  }
  const le = Be(Ot);
  const ge = Be(S);
  var Bt = false; /*!
                  * pinia v2.0.30
                  * (c) 2023 Eduardo San Martin Morote
                  * @license MIT
                  */
  let Ve;
  const ce = t => Ve = t;
  const Re = Symbol();
  function ye(t) {
    return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
  }
  var G;
  (function (t) {
    t.direct = "direct";
    t.patchObject = "patch object";
    t.patchFunction = "patch function";
  })(G || (G = {}));
  function Vt() {
    const t = n.effectScope(true);
    const e = t.run(() => n.ref({}));
    let i = [];
    let o = [];
    const s = n.markRaw({
      install(r) {
        ce(s);
        s._a = r;
        r.provide(Re, s);
        r.config.globalProperties.$pinia = s;
        o.forEach(a => i.push(a));
        o = [];
      },
      use(r) {
        if (!this._a && !Bt) {
          o.push(r);
        } else {
          i.push(r);
        }
        return this;
      },
      _p: i,
      _a: null,
      _e: t,
      _s: new Map(),
      state: e
    });
    return s;
  }
  const Ze = () => {};
  function Ue(t, e, i, o = Ze) {
    t.push(e);
    const s = () => {
      const r = t.indexOf(e);
      if (r > -1) {
        t.splice(r, 1);
        o();
      }
    };
    if (!i && n.getCurrentScope()) {
      n.onScopeDispose(s);
    }
    return s;
  }
  function Y(t, ...e) {
    t.slice().forEach(i => {
      i(...e);
    });
  }
  function Me(t, e) {
    if (t instanceof Map && e instanceof Map) {
      e.forEach((i, o) => t.set(o, i));
    }
    if (t instanceof Set && e instanceof Set) {
      e.forEach(t.add, t);
    }
    for (const i in e) {
      if (!e.hasOwnProperty(i)) {
        continue;
      }
      const o = e[i];
      const s = t[i];
      if (ye(s) && ye(o) && t.hasOwnProperty(i) && !n.isRef(o) && !n.isReactive(o)) {
        t[i] = Me(s, o);
      } else {
        t[i] = o;
      }
    }
    return t;
  }
  const Rt = Symbol();
  function Zt(t) {
    return !ye(t) || !t.hasOwnProperty(Rt);
  }
  const {
    assign: R
  } = Object;
  function Ut(t) {
    return !!(n.isRef(t) && t.effect);
  }
  function Ft(t, e, i, o) {
    const {
      state: s,
      actions: r,
      getters: a
    } = e;
    const l = i.state.value[t];
    let c;
    function d() {
      if (!l) {
        i.state.value[t] = s ? s() : {};
      }
      const m = n.toRefs(i.state.value[t]);
      return R(m, r, Object.keys(a || {}).reduce((f, u) => {
        f[u] = n.markRaw(n.computed(() => {
          ce(i);
          const g = i._s.get(t);
          return a[u].call(g, g);
        }));
        return f;
      }, {}));
    }
    c = Fe(t, d, e, i, o, true);
    c.$reset = function () {
      const f = s ? s() : {};
      this.$patch(u => {
        R(u, f);
      });
    };
    return c;
  }
  function Fe(t, e, i = {}, o, s, r) {
    let a;
    const l = R({
      actions: {}
    }, i);
    const c = {
      deep: true
    };
    let d;
    let m;
    let f = n.markRaw([]);
    let u = n.markRaw([]);
    let g;
    const N = o.state.value[t];
    if (!r && !N) {
      o.state.value[t] = {};
    }
    n.ref({});
    let y;
    function w(z) {
      let D;
      d = m = false;
      if (typeof z == "function") {
        z(o.state.value[t]);
        D = {
          type: G.patchFunction,
          storeId: t,
          events: g
        };
      } else {
        Me(o.state.value[t], z);
        D = {
          type: G.patchObject,
          payload: z,
          storeId: t,
          events: g
        };
      }
      const U = y = Symbol();
      n.nextTick().then(() => {
        if (y === U) {
          d = true;
        }
      });
      m = true;
      Y(f, D, o.state.value[t]);
    }
    const p = Ze;
    function h() {
      a.stop();
      f = [];
      u = [];
      o._s.delete(t);
    }
    function T(z, D) {
      return function () {
        ce(o);
        const U = Array.from(arguments);
        const se = [];
        const re = [];
        function $a(O) {
          se.push(O);
        }
        function el(O) {
          re.push(O);
        }
        Y(u, {
          args: U,
          name: z,
          store: b,
          after: $a,
          onError: el
        });
        let ae;
        try {
          ae = D.apply(this && this.$id === t ? this : b, U);
        } catch (O) {
          Y(re, O);
          throw O;
        }
        if (ae instanceof Promise) {
          return ae.then(O => {
            Y(se, O);
            return O;
          }).catch(O => {
            Y(re, O);
            return Promise.reject(O);
          });
        } else {
          Y(se, ae);
          return ae;
        }
      };
    }
    const M = {
      _p: o,
      $id: t,
      $onAction: Ue.bind(null, u),
      $patch: w,
      $reset: p,
      $subscribe(z, D = {}) {
        const U = Ue(f, z, D.detached, () => se());
        const se = a.run(() => n.watch(() => o.state.value[t], re => {
          if (D.flush === "sync" ? m : d) {
            z({
              storeId: t,
              type: G.direct,
              events: g
            }, re);
          }
        }, R({}, c, D)));
        return U;
      },
      $dispose: h
    };
    const b = n.reactive(M);
    o._s.set(t, b);
    const Z = o._e.run(() => {
      a = n.effectScope();
      return a.run(() => e());
    });
    for (const z in Z) {
      const D = Z[z];
      if (n.isRef(D) && !Ut(D) || n.isReactive(D)) {
        if (!r) {
          if (N && Zt(D)) {
            if (n.isRef(D)) {
              D.value = N[z];
            } else {
              Me(D, N[z]);
            }
          }
          o.state.value[t][z] = D;
        }
      } else if (typeof D == "function") {
        const U = T(z, D);
        Z[z] = U;
        l.actions[z] = D;
      }
    }
    R(b, Z);
    R(n.toRaw(b), Z);
    Object.defineProperty(b, "$state", {
      get: () => o.state.value[t],
      set: z => {
        w(D => {
          R(D, z);
        });
      }
    });
    o._p.forEach(z => {
      R(b, a.run(() => z({
        store: b,
        app: o._a,
        pinia: o,
        options: l
      })));
    });
    if (N && r && i.hydrate) {
      i.hydrate(b.$state, N);
    }
    d = true;
    m = true;
    return b;
  }
  function _t(t, e, i) {
    let o;
    let s;
    const r = typeof e == "function";
    if (typeof t == "string") {
      o = t;
      s = r ? i : e;
    } else {
      s = t;
      o = t.id;
    }
    function a(l, c) {
      const d = n.getCurrentInstance();
      l = l || d && n.inject(Re, null);
      if (l) {
        ce(l);
      }
      l = Ve;
      if (!l._s.has(o)) {
        if (r) {
          Fe(o, e, s, l);
        } else {
          Ft(o, s, l);
        }
      }
      return l._s.get(o);
    }
    a.$id = o;
    return a;
  }
  let Qt = "Store";
  function Yt(...t) {
    return t.reduce((e, i) => {
      e[i.$id + Qt] = function () {
        return i(this.$pinia);
      };
      return e;
    }, {});
  }
  const _e = Vt();
  const Qe = {
    install(t) {
      t.use(_e);
    },
    useProvides(t) {
      const e = () => ({
        global: {
          instance: t,
          ready: t.provides.ready,
          appSettings: t.provides.appSettings,
          token: t.provides.token,
          tokenV1: t.provides.tokenV1,
          $http: t.provides.$http,
          locale: t.provides.locale
        }
      });
      _e.use(e);
    }
  };
  const Ht = {
    READ_MORE: t => {
      const {
        normalize: e
      } = t;
      return e(["Ler mais"]);
    },
    READ_LESS: t => {
      const {
        normalize: e
      } = t;
      return e(["Ler menos"]);
    },
    AVAILABLE_NOW: t => {
      const {
        normalize: e
      } = t;
      return e(["DisponÃ­vel agora"]);
    },
    SCHEDULED_POSTS: t => {
      const {
        normalize: e
      } = t;
      return e(["Posts agendados"]);
    },
    ARCHIVED: t => {
      const {
        normalize: e
      } = t;
      return e(["Arquivados"]);
    },
    EDIT_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Editar perfil"]);
    },
    FREE_SUBSCRIPTION: t => {
      const {
        normalize: e
      } = t;
      return e(["Assinatura gratuita"]);
    },
    ACCESS_UNTIL: t => {
      const {
        normalize: e
      } = t;
      return e(["Acesso liberado atÃ©"]);
    },
    CHAT: t => {
      const {
        normalize: e
      } = t;
      return e(["Chat"]);
    },
    SUBSCRIBE_OPTION: t => {
      const {
        normalize: e
      } = t;
      return e(["Assinar"]);
    },
    SHARE: t => {
      const {
        normalize: e
      } = t;
      return e(["Compartilhar"]);
    },
    UNFOLLOW: t => {
      const {
        normalize: e
      } = t;
      return e(["Deixar de seguir"]);
    },
    REPORT_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Denunciar perfil"]);
    },
    MUTE_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Silenciar perfil"]);
    },
    UNMUTE_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Cancelar silenciamento"]);
    },
    ADD_FRIEND: t => {
      const {
        normalize: e
      } = t;
      return e(["Adicionar amigo"]);
    },
    REMOVE_FRIEND: t => {
      const {
        normalize: e
      } = t;
      return e(["Remover amigo"]);
    },
    ENABLE_RENEWAL: t => {
      const {
        normalize: e
      } = t;
      return e(["Ativar renovaÃ§Ã£o"]);
    },
    DISABLE_RENEWAL: t => {
      const {
        normalize: e
      } = t;
      return e(["Desativar renovaÃ§Ã£o"]);
    },
    MY_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Meu perfil"]);
    },
    REQUEST_VERIFICATION: t => {
      const {
        normalize: e
      } = t;
      return e(["Solicitar verificaÃ§Ã£o"]);
    },
    SUBSCRIBE_FREE: t => {
      const {
        normalize: e
      } = t;
      return e(["Gratuito"]);
    },
    TITLE_SUBSCRIBE: t => {
      const {
        normalize: e
      } = t;
      return e(["Assinaturas"]);
    },
    MONTH: t => {
      const {
        normalize: e
      } = t;
      return e(["mês"]);
    },
    MONTHS: t => {
      const {
        normalize: e
      } = t;
      return e(["meses"]);
    },
    PROMOTIONS: t => {
      const {
        normalize: e
      } = t;
      return e(["Promoções"]);
    },
    MEDIAS: {
      PHOTOS: t => {
        const {
          normalize: e
        } = t;
        return e(["fotos"]);
      },
      VIDEOS: t => {
        const {
          normalize: e
        } = t;
        return e(["ví­deos"]);
      },
      GIFS: t => {
        const {
          normalize: e
        } = t;
        return e(["gifs"]);
      },
      ALL_POSTS: t => {
        const {
          normalize: e
        } = t;
        return e(["postagens"]);
      },
      ALL_MEDIA: t => {
        const {
          normalize: e
        } = t;
        return e(["mí­dias"]);
      },
      PAID: t => {
        const {
          normalize: e
        } = t;
        return e(["pagos"]);
      },
      ALL: t => {
        const {
          normalize: e
        } = t;
        return e(["todos"]);
      }
    },
    SEND_MIMO: t => {
      const {
        normalize: e
      } = t;
      return e(["Enviar mimo"]);
    },
    BUTTON_CHECKOUT: t => {
      const {
        normalize: e
      } = t;
      return e(["Continuar"]);
    },
    ERROR_MESSAGE: {
      TERMS_NOT_ACCEPTED: t => {
        const {
          normalize: e
        } = t;
        return e(["Os Termos e a Privacidade sÃ£o obrigatÃ³rios."]);
      },
      REGISTER: t => {
        const {
          normalize: e
        } = t;
        return e(["Erro ao cadastrar os dados, por favor, preencher corretamente."]);
      },
      EMAIL_IN_USE: t => {
        const {
          normalize: e
        } = t;
        return e(["O email jÃ¡ estÃ¡ cadastrado. Para recuperar a senha ACTION_MODAL"]);
      },
      ADDRES_ZIP_CODE: t => {
        const {
          normalize: e
        } = t;
        return e(["EndereÃ§o invÃ¡lido"]);
      }
    },
    ACTION: {
      CLICK_HERE: t => {
        const {
          normalize: e
        } = t;
        return e(["clique aqui."]);
      }
    },
    REGISTER_SUCCESS: {
      TITLE: t => {
        const {
          normalize: e
        } = t;
        return e(["Cadastro efetuado"]);
      },
      TEXT: t => {
        const {
          normalize: e,
          interpolate: i,
          named: o
        } = t;
        return e(["OlÃ¡ ", i(o("nickName")), ", <br> Para finalizar seu cadastro, enviamos um e-mail de confirmaÃ§Ã£o para o endereÃ§o informado."]);
      }
    },
    ACCEPT_TERMS: t => {
      const {
        normalize: e
      } = t;
      return e(["Ao se cadastrar na Privacy, vocÃª atesta que leu e concorda com nossos <a href=\"/termos\">Termos</a> e <a href=\"/privacidade\">Privacidade</a> e confirma que tem pelo menos 18 anos de idade . <span style=\"color: #f57c97;\">*</span>"]);
    },
    FILL_FULL_NAME: t => {
      const {
        normalize: e
      } = t;
      return e(["Favor preencher o nome completo."]);
    },
    ERROR_OCCURRED_ENTERING_CPF: t => {
      const {
        normalize: e
      } = t;
      return e(["Ocorreu um erro ao inserir o CPF. Em caso de dÃºvidas, contate nosso atendimento."]);
    },
    NON_EXISTENT_CPF: t => {
      const {
        normalize: e
      } = t;
      return e(["Documento invÃ¡lido. Verifique os dados informados e tente novamente."]);
    },
    CPF_PROVIDED_BEING_ANOTHER_USER: t => {
      const {
        normalize: e
      } = t;
      return e(["CPF informado jÃ¡ estÃ¡ sendo utilizado por outro usuÃ¡rio, caso estejam utilizando indevidamente favor entrar em contato com nosso suporte."]);
    },
    CPF_BELONG_NAME_PROVIDED: t => {
      const {
        normalize: e
      } = t;
      return e(["O CPF nÃ£o pertence ao nome informado."]);
    },
    PLEASE_CHECK_DATE_BIRTH: t => {
      const {
        normalize: e
      } = t;
      return e(["Favor verificar a data de nascimento."]);
    }
  };
  const Wt = {
    READ_MORE: t => {
      const {
        normalize: e
      } = t;
      return e(["Read more"]);
    },
    READ_LESS: t => {
      const {
        normalize: e
      } = t;
      return e(["Read less"]);
    },
    AVAILABLE_NOW: t => {
      const {
        normalize: e
      } = t;
      return e(["Available now"]);
    },
    SCHEDULED_POSTS: t => {
      const {
        normalize: e
      } = t;
      return e(["Scheduled posts"]);
    },
    ARCHIVED: t => {
      const {
        normalize: e
      } = t;
      return e(["Archived"]);
    },
    EDIT_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Edit profile"]);
    },
    FREE_SUBSCRIPTION: t => {
      const {
        normalize: e
      } = t;
      return e(["Free subscription"]);
    },
    ACCESS_UNTIL: t => {
      const {
        normalize: e
      } = t;
      return e(["Access until"]);
    },
    CHAT: t => {
      const {
        normalize: e
      } = t;
      return e(["Chat"]);
    },
    SHARE: t => {
      const {
        normalize: e
      } = t;
      return e(["Share"]);
    },
    SUBSCRIBE_OPTION: t => {
      const {
        normalize: e
      } = t;
      return e(["Subscribe"]);
    },
    UNFOLLOW: t => {
      const {
        normalize: e
      } = t;
      return e(["Unfollow"]);
    },
    REPORT_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Report profile"]);
    },
    MUTE_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Mute profile"]);
    },
    UNMUTE_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Unmute profile"]);
    },
    ADD_FRIEND: t => {
      const {
        normalize: e
      } = t;
      return e(["Add friend"]);
    },
    REMOVE_FRIEND: t => {
      const {
        normalize: e
      } = t;
      return e(["Remove friend"]);
    },
    ENABLE_RENEWAL: t => {
      const {
        normalize: e
      } = t;
      return e(["Enable renewal"]);
    },
    DISABLE_RENEWAL: t => {
      const {
        normalize: e
      } = t;
      return e(["Disable renewal"]);
    },
    MY_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["My profile"]);
    },
    REQUEST_VERIFICATION: t => {
      const {
        normalize: e
      } = t;
      return e(["Request verification"]);
    },
    SUBSCRIBE_FREE: t => {
      const {
        normalize: e
      } = t;
      return e(["Free"]);
    },
    TITLE_SUBSCRIBE: t => {
      const {
        normalize: e
      } = t;
      return e(["Subscriptions"]);
    },
    MONTH: t => {
      const {
        normalize: e
      } = t;
      return e(["month"]);
    },
    MONTHS: t => {
      const {
        normalize: e
      } = t;
      return e(["months"]);
    },
    PROMOTIONS: t => {
      const {
        normalize: e
      } = t;
      return e(["Promotions"]);
    },
    MEDIAS: {
      PHOTOS: t => {
        const {
          normalize: e
        } = t;
        return e(["photos"]);
      },
      VIDEOS: t => {
        const {
          normalize: e
        } = t;
        return e(["videos"]);
      },
      GIFS: t => {
        const {
          normalize: e
        } = t;
        return e(["gifs"]);
      },
      ALL_POSTS: t => {
        const {
          normalize: e
        } = t;
        return e(["posts"]);
      },
      ALL_MEDIA: t => {
        const {
          normalize: e
        } = t;
        return e(["media"]);
      },
      PAID: t => {
        const {
          normalize: e
        } = t;
        return e(["paid"]);
      },
      ALL: t => {
        const {
          normalize: e
        } = t;
        return e(["all"]);
      }
    },
    SEND_MIMO: t => {
      const {
        normalize: e
      } = t;
      return e(["Send tip"]);
    },
    BUTTON_CHECKOUT: t => {
      const {
        normalize: e
      } = t;
      return e(["Continue"]);
    },
    ERROR_MESSAGE: {
      TERMS_NOT_ACCEPTED: t => {
        const {
          normalize: e
        } = t;
        return e(["Terms and Privacy are mandatory"]);
      },
      REGISTER: t => {
        const {
          normalize: e
        } = t;
        return e(["Error registering the data, please fill out correctly."]);
      },
      EMAIL_IN_USE: t => {
        const {
          normalize: e
        } = t;
        return e(["The provided email is already registered. To recover the password ACTION_MODAL"]);
      },
      ADDRES_ZIP_CODE: t => {
        const {
          normalize: e
        } = t;
        return e(["Invalid address"]);
      }
    },
    ACTION: {
      CLICK_HERE: t => {
        const {
          normalize: e
        } = t;
        return e(["click here."]);
      }
    },
    REGISTER_SUCCESS: {
      TITLE: t => {
        const {
          normalize: e
        } = t;
        return e(["Registration Successful"]);
      },
      TEXT: t => {
        const {
          normalize: e,
          interpolate: i,
          named: o
        } = t;
        return e(["Hello ", i(o("nickName")), ", <br> To complete your registration, we sent a confirmation email to the address provided."]);
      }
    },
    ACCEPT_TERMS: t => {
      const {
        normalize: e
      } = t;
      return e(["By signing up with Privacy, you confirm that you have read and agree to our <a href=\"/termos\">Terms</a> and <a href=\"/privacidade\">Privacy</a> and that you are at least 18 years old. <span style=\"color: #f57c97;\">*</span>"]);
    },
    FILL_FULL_NAME: t => {
      const {
        normalize: e
      } = t;
      return e(["Please fill in your full name."]);
    },
    ERROR_OCCURRED_ENTERING_CPF: t => {
      const {
        normalize: e
      } = t;
      return e(["An error occurred while entering the CPF. If you have any questions, please contact our support."]);
    },
    NON_EXISTENT_CPF: t => {
      const {
        normalize: e
      } = t;
      return e(["Invalid document. Check the information provided and try again."]);
    },
    CPF_PROVIDED_BEING_ANOTHER_USER: t => {
      const {
        normalize: e
      } = t;
      return e(["The provided CPF is already being used by another user. If it is being used improperly, please contact our support."]);
    },
    CPF_BELONG_NAME_PROVIDED: t => {
      const {
        normalize: e
      } = t;
      return e(["The CPF does not belong to the provided name."]);
    },
    PLEASE_CHECK_DATE_BIRTH: t => {
      const {
        normalize: e
      } = t;
      return e(["Please verify the date of birth."]);
    }
  };
  const Gt = {
    READ_MORE: t => {
      const {
        normalize: e
      } = t;
      return e(["Leer mÃ¡s"]);
    },
    READ_LESS: t => {
      const {
        normalize: e
      } = t;
      return e(["Leer menos"]);
    },
    AVAILABLE_NOW: t => {
      const {
        normalize: e
      } = t;
      return e(["Disponible ahora"]);
    },
    SCHEDULED_POSTS: t => {
      const {
        normalize: e
      } = t;
      return e(["Publicaciones programadas"]);
    },
    ARCHIVED: t => {
      const {
        normalize: e
      } = t;
      return e(["Archivados"]);
    },
    EDIT_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Editar perfil"]);
    },
    FREE_SUBSCRIPTION: t => {
      const {
        normalize: e
      } = t;
      return e(["SuscripciÃ³n gratuita"]);
    },
    ACCESS_UNTIL: t => {
      const {
        normalize: e
      } = t;
      return e(["Acceso hasta"]);
    },
    CHAT: t => {
      const {
        normalize: e
      } = t;
      return e(["Chat"]);
    },
    SHARE: t => {
      const {
        normalize: e
      } = t;
      return e(["Compartir"]);
    },
    SUBSCRIBE_OPTION: t => {
      const {
        normalize: e
      } = t;
      return e(["Suscribir"]);
    },
    UNFOLLOW: t => {
      const {
        normalize: e
      } = t;
      return e(["Dejar de seguir"]);
    },
    REPORT_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Denunciar perfil"]);
    },
    MUTE_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Silenciar perfil"]);
    },
    UNMUTE_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Cancelar silenciamiento"]);
    },
    ADD_FRIEND: t => {
      const {
        normalize: e
      } = t;
      return e(["Agregar amigo"]);
    },
    REMOVE_FRIEND: t => {
      const {
        normalize: e
      } = t;
      return e(["Eliminar amigo"]);
    },
    ENABLE_RENEWAL: t => {
      const {
        normalize: e
      } = t;
      return e(["Activar renovaciÃ³n"]);
    },
    DISABLE_RENEWAL: t => {
      const {
        normalize: e
      } = t;
      return e(["Desactivar renovaciÃ³n"]);
    },
    MY_PROFILE: t => {
      const {
        normalize: e
      } = t;
      return e(["Mi perfil"]);
    },
    REQUEST_VERIFICATION: t => {
      const {
        normalize: e
      } = t;
      return e(["Solicitar verificaciÃ³n"]);
    },
    SUBSCRIBE_FREE: t => {
      const {
        normalize: e
      } = t;
      return e(["Gratis"]);
    },
    TITLE_SUBSCRIBE: t => {
      const {
        normalize: e
      } = t;
      return e(["Suscripciones"]);
    },
    MONTH: t => {
      const {
        normalize: e
      } = t;
      return e(["mes"]);
    },
    MONTHS: t => {
      const {
        normalize: e
      } = t;
      return e(["meses"]);
    },
    PROMOTIONS: t => {
      const {
        normalize: e
      } = t;
      return e(["Promociones"]);
    },
    MEDIAS: {
      PHOTOS: t => {
        const {
          normalize: e
        } = t;
        return e(["fotos"]);
      },
      VIDEOS: t => {
        const {
          normalize: e
        } = t;
        return e(["videos"]);
      },
      GIFS: t => {
        const {
          normalize: e
        } = t;
        return e(["gifs"]);
      },
      ALL_POSTS: t => {
        const {
          normalize: e
        } = t;
        return e(["publicaciones"]);
      },
      ALL_MEDIA: t => {
        const {
          normalize: e
        } = t;
        return e(["medios"]);
      },
      PAID: t => {
        const {
          normalize: e
        } = t;
        return e(["pagados"]);
      },
      ALL: t => {
        const {
          normalize: e
        } = t;
        return e(["todos"]);
      }
    },
    SEND_MIMO: t => {
      const {
        normalize: e
      } = t;
      return e(["Enviar mimo"]);
    },
    BUTTON_CHECKOUT: t => {
      const {
        normalize: e
      } = t;
      return e(["Continuar"]);
    },
    ERROR_MESSAGE: {
      TERMS_NOT_ACCEPTED: t => {
        const {
          normalize: e
        } = t;
        return e(["Los TÃ©rminos y La Privacidad son obligatorios"]);
      },
      REGISTER: t => {
        const {
          normalize: e
        } = t;
        return e(["Error al registrar los datos, por favor complete correctamente."]);
      },
      EMAIL_IN_USE: t => {
        const {
          normalize: e
        } = t;
        return e(["El email proporcionado ya estÃ¡ registrado. Para recuperar la contraseÃ±a ACTION_MODAL"]);
      },
      ADDRES_ZIP_CODE: t => {
        const {
          normalize: e
        } = t;
        return e(["DirecciÃ³n invÃ¡lida"]);
      }
    },
    ACTION: {
      CLICK_HERE: t => {
        const {
          normalize: e
        } = t;
        return e(["haga clic aquÃ­."]);
      }
    },
    REGISTER_SUCCESS: {
      TITLE: t => {
        const {
          normalize: e
        } = t;
        return e(["Registro Exitoso"]);
      },
      TEXT: t => {
        const {
          normalize: e,
          interpolate: i,
          named: o
        } = t;
        return e(["Hola ", i(o("nickName")), ", <br> Para completar tu registro, enviamos un correo de confirmaciÃ³n a la direcciÃ³n proporcionada."]);
      }
    },
    ACCEPT_TERMS: t => {
      const {
        normalize: e
      } = t;
      return e(["Al registrarte en Privacy, confirmas que has leÃ­do y aceptas nuestros <a href=\"/termos\">TÃ©rminos</a> y <a href=\"/privacidade\">Privacidad</a> y que tienes al menos 18 aÃ±os de edad. <span style=\"color: #f57c97;\">*</span>"]);
    },
    FILL_FULL_NAME: t => {
      const {
        normalize: e
      } = t;
      return e(["Por favor, rellene su nombre completo."]);
    },
    ERROR_OCCURRED_ENTERING_CPF: t => {
      const {
        normalize: e
      } = t;
      return e(["Se produjo un error al ingresar el CPF. Si tiene alguna duda, comunÃ­quese con nuestro soporte."]);
    },
    NON_EXISTENT_CPF: t => {
      const {
        normalize: e
      } = t;
      return e(["Documento invÃ¡lido. Verifique los datos proporcionados e intÃ©ntelo de nuevo."]);
    },
    CPF_PROVIDED_BEING_ANOTHER_USER: t => {
      const {
        normalize: e
      } = t;
      return e(["El CPF informado ya estÃ¡ siendo utilizado por otro usuario. Si lo estÃ¡n usando indebidamente, comunÃ­quese con nuestro soporte."]);
    },
    CPF_BELONG_NAME_PROVIDED: t => {
      const {
        normalize: e
      } = t;
      return e(["El CPF no pertenece al nombre informado."]);
    },
    PLEASE_CHECK_DATE_BIRTH: t => {
      const {
        normalize: e
      } = t;
      return e(["Por favor, verifique la fecha de nacimiento."]);
    }
  };
  let q = null;
  const Ne = {
    install(t) {
      q = le.createI18n({
        legacy: false,
        locale: "pt",
        fallbackLocale: "pt",
        globalInjection: false
      });
      t.use(q);
      qt();
      return q;
    },
    get global() {
      return q.global;
    }
  };
  function qt() {
    if (!n.inject(le.I18nInjectionKey)) {
      n.provide(le.I18nInjectionKey, q);
    }
  }
  function v() {
    var o;
    var s;
    const t = n.getCurrentInstance();
    if (!n.inject((s = (o = t == null ? undefined : t.appContext) == null ? undefined : o.app) == null ? undefined : s.__VUE_I18N_SYMBOL__)) {
      t.isCE = true;
    }
    const {
      t: i
    } = le.useI18n({
      messages: {
        pt: Ht,
        en: Wt,
        es: Gt
      }
    });
    return {
      t: i
    };
  }
  V.locale("pt-br");
  function Kt(t) {
    V.locale(t);
  }
  const F = {
    get defaultLocale() {
      return "pt";
    },
    set currentLocale(t) {
      t = t && t.split("-")[0];
      Ne.global.locale.value = t;
    },
    get currentLocale() {
      return Ne.global.locale.value;
    },
    setTranslate({
      t
    }) {
      this.t = t;
    },
    getUserLocale() {
      const t = window.navigator.language || window.navigator.userLanguage || F.defaultLocale;
      return {
        locale: t,
        localeNoRegion: t.split("-")[0]
      };
    },
    getMessage(t) {
      return this.t(t);
    },
    async switchLanguage(t) {
      F.currentLocale = t;
      Kt(t);
    }
  };
  function Jt(t) {
    const {
      t: e
    } = v();
    F.setTranslate({
      t: e
    });
    n.watch(t.locale, i => {
      F.switchLanguage(i || t.locale);
    }, {
      immediate: true
    });
  }
  const P = {
    value: null,
    provides: null,
    emit: null
  };
  const Ye = {
    install(t, e) {
      if (!t.config.globalProperties.$http) {
        P.value = W.create({
          baseURL: e == null ? undefined : e.baseUrl
        });
        P.value.interceptors.request.use(i => {
          if (i.includeAppAuthorization != false && P.provides.token.value && !i.headers.Authorization) {
            if (i.apiAuth == "v1") {
              i.headers.Authorization = `Bearer ${P.provides.tokenV1.value}`;
            } else {
              i.headers.Authorization = `Bearer ${P.provides.token.value}`;
            }
          }
          if (!i.headers["Accept-Language"]) {
            i.headers["Accept-Language"] = P.provides.locale.value || F.defaultLocale;
          }
          return i;
        }, i => Promise.reject(i));
        t.config.globalProperties.$http = P.value;
      }
    },
    useProvides(t) {
      P.provides = t.provides;
      P.emit = t.emit;
    }
  };
  function He(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      if (e) {
        o = o.filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        });
      }
      i.push.apply(i, o);
    }
    return i;
  }
  function k(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e] != null ? arguments[e] : {};
      if (e % 2) {
        He(Object(i), true).forEach(function (o) {
          A(t, o, i[o]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(t, Object.getOwnPropertyDescriptors(i));
      } else {
        He(Object(i)).forEach(function (o) {
          Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o));
        });
      }
    }
    return t;
  }
  function de(t) {
    de = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    };
    return de(t);
  }
  function A(t, e, i) {
    if (e in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  function Xt(t, e) {
    if (t == null) {
      return {};
    }
    var i = {};
    var o = Object.keys(t);
    var s;
    var r;
    for (r = 0; r < o.length; r++) {
      s = o[r];
      if (!(e.indexOf(s) >= 0)) {
        i[s] = t[s];
      }
    }
    return i;
  }
  function $t(t, e) {
    if (t == null) {
      return {};
    }
    var i = Xt(t, e);
    var o;
    var s;
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      for (s = 0; s < r.length; s++) {
        o = r[s];
        if (!(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o)) {
          i[o] = t[o];
        }
      }
    }
    return i;
  }
  function ze(t) {
    return ei(t) || ti(t) || ii(t) || ni();
  }
  function ei(t) {
    if (Array.isArray(t)) {
      return De(t);
    }
  }
  function ti(t) {
    if (typeof Symbol !== "undefined" && t[Symbol.iterator] != null || t["@@iterator"] != null) {
      return Array.from(t);
    }
  }
  function ii(t, e) {
    if (t) {
      if (typeof t == "string") {
        return De(t, e);
      }
      var i = Object.prototype.toString.call(t).slice(8, -1);
      if (i === "Object" && t.constructor) {
        i = t.constructor.name;
      }
      if (i === "Map" || i === "Set") {
        return Array.from(t);
      }
      if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) {
        return De(t, e);
      }
    }
  }
  function De(t, e) {
    if (e == null || e > t.length) {
      e = t.length;
    }
    for (var i = 0, o = new Array(e); i < e; i++) {
      o[i] = t[i];
    }
    return o;
  }
  function ni() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var oi = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var We = {
    exports: {}
  };
  (function (t) {
    (function (e) {
      function i(p, h, T) {
        if (!d(h) || f(h) || u(h) || g(h) || c(h)) {
          return h;
        }
        var M;
        var b = 0;
        var Z = 0;
        if (m(h)) {
          M = [];
          Z = h.length;
          M = [];
          Z = h.length;
          for (; b < Z; b++) {
            M.push(i(p, h[b], T));
          }
        } else {
          M = {};
          for (var z in h) {
            if (Object.prototype.hasOwnProperty.call(h, z)) {
              M[p(z, T)] = i(p, h[z], T);
            }
          }
        }
        return M;
      }
      function o(p, h) {
        h = h || {};
        var T = h.separator || "_";
        var M = h.split || /(?=[A-Z])/;
        return p.split(M).join(T);
      }
      function s(p) {
        if (N(p)) {
          return p;
        } else {
          p = p.replace(/[\-_\s]+(.)?/g, function (h, T) {
            if (T) {
              return T.toUpperCase();
            } else {
              return "";
            }
          });
          return p.substr(0, 1).toLowerCase() + p.substr(1);
        }
      }
      function r(p) {
        var h = s(p);
        return h.substr(0, 1).toUpperCase() + h.substr(1);
      }
      function a(p, h) {
        return o(p, h).toLowerCase();
      }
      var l = Object.prototype.toString;
      function c(p) {
        return typeof p == "function";
      }
      function d(p) {
        return p === Object(p);
      }
      function m(p) {
        return l.call(p) == "[object Array]";
      }
      function f(p) {
        return l.call(p) == "[object Date]";
      }
      function u(p) {
        return l.call(p) == "[object RegExp]";
      }
      function g(p) {
        return l.call(p) == "[object Boolean]";
      }
      function N(p) {
        p = p - 0;
        return p === p;
      }
      function y(p, h) {
        var T = h && "process" in h ? h.process : h;
        if (typeof T != "function") {
          return p;
        } else {
          return function (M, b) {
            return T(M, p, b);
          };
        }
      }
      var w = {
        camelize: s,
        decamelize: a,
        pascalize: r,
        depascalize: a,
        camelizeKeys: function (p, h) {
          return i(y(s, h), p);
        },
        decamelizeKeys: function (p, h) {
          return i(y(a, h), p, h);
        },
        pascalizeKeys: function (p, h) {
          return i(y(r, h), p);
        },
        depascalizeKeys: function () {
          return this.decamelizeKeys.apply(this, arguments);
        }
      };
      if (t.exports) {
        t.exports = w;
      } else {
        e.humps = w;
      }
    })(oi);
  })(We);
  var si = We.exports;
  var ri = ["class", "style"];
  function ai(t) {
    return t.split(";").map(function (e) {
      return e.trim();
    }).filter(function (e) {
      return e;
    }).reduce(function (e, i) {
      var o = i.indexOf(":");
      var s = si.camelize(i.slice(0, o));
      var r = i.slice(o + 1).trim();
      e[s] = r;
      return e;
    }, {});
  }
  function li(t) {
    return t.split(/\s+/).reduce(function (e, i) {
      e[i] = true;
      return e;
    }, {});
  }
  function Ee(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof t == "string") {
      return t;
    }
    var o = (t.children || []).map(function (c) {
      return Ee(c);
    });
    var s = Object.keys(t.attributes || {}).reduce(function (c, d) {
      var m = t.attributes[d];
      switch (d) {
        case "class":
          c.class = li(m);
          break;
        case "style":
          c.style = ai(m);
          break;
        default:
          c.attrs[d] = m;
      }
      return c;
    }, {
      attrs: {},
      class: {},
      style: {}
    });
    i.class;
    var r = i.style;
    var a = r === undefined ? {} : r;
    var l = $t(i, ri);
    return n.h(t.tag, k(k(k({}, e), {}, {
      class: s.class,
      style: k(k({}, s.style), a)
    }, s.attrs), l), o);
  }
  var Ge = false;
  try {
    Ge = true;
  } catch {}
  function ci() {
    if (!Ge && console && typeof console.error == "function") {
      var t;
      (t = console).error.apply(t, arguments);
    }
  }
  function K(t, e) {
    if (Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e) {
      return A({}, t, e);
    } else {
      return {};
    }
  }
  function di(t) {
    var e;
    e = {
      "fa-spin": t.spin,
      "fa-pulse": t.pulse,
      "fa-fw": t.fixedWidth,
      "fa-border": t.border,
      "fa-li": t.listItem,
      "fa-inverse": t.inverse,
      "fa-flip": t.flip === true,
      "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
      "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
    };
    A(e, `fa-${t.size}`, t.size !== null);
    A(e, `fa-rotate-${t.rotation}`, t.rotation !== null);
    A(e, `fa-pull-${t.pull}`, t.pull !== null);
    A(e, "fa-swap-opacity", t.swapOpacity);
    A(e, "fa-bounce", t.bounce);
    A(e, "fa-shake", t.shake);
    A(e, "fa-beat", t.beat);
    A(e, "fa-fade", t.fade);
    A(e, "fa-beat-fade", t.beatFade);
    A(e, "fa-flash", t.flash);
    A(e, "fa-spin-pulse", t.spinPulse);
    A(e, "fa-spin-reverse", t.spinReverse);
    var i = e;
    return Object.keys(i).map(function (o) {
      if (i[o]) {
        return o;
      } else {
        return null;
      }
    }).filter(function (o) {
      return o;
    });
  }
  function qe(t) {
    if (t && de(t) === "object" && t.prefix && t.iconName && t.icon) {
      return t;
    }
    if (B.parse.icon) {
      return B.parse.icon(t);
    }
    if (t === null) {
      return null;
    }
    if (de(t) === "object" && t.prefix && t.iconName) {
      return t;
    }
    if (Array.isArray(t) && t.length === 2) {
      return {
        prefix: t[0],
        iconName: t[1]
      };
    }
    if (typeof t == "string") {
      return {
        prefix: "fas",
        iconName: t
      };
    }
  }
  var mi = n.defineComponent({
    name: "FontAwesomeIcon",
    props: {
      border: {
        type: Boolean,
        default: false
      },
      fixedWidth: {
        type: Boolean,
        default: false
      },
      flip: {
        type: [Boolean, String],
        default: false,
        validator: function (e) {
          return [true, false, "horizontal", "vertical", "both"].indexOf(e) > -1;
        }
      },
      icon: {
        type: [Object, Array, String],
        required: true
      },
      mask: {
        type: [Object, Array, String],
        default: null
      },
      listItem: {
        type: Boolean,
        default: false
      },
      pull: {
        type: String,
        default: null,
        validator: function (e) {
          return ["right", "left"].indexOf(e) > -1;
        }
      },
      pulse: {
        type: Boolean,
        default: false
      },
      rotation: {
        type: [String, Number],
        default: null,
        validator: function (e) {
          return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
        }
      },
      swapOpacity: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: null,
        validator: function (e) {
          return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
        }
      },
      spin: {
        type: Boolean,
        default: false
      },
      transform: {
        type: [String, Object],
        default: null
      },
      symbol: {
        type: [Boolean, String],
        default: false
      },
      title: {
        type: String,
        default: null
      },
      inverse: {
        type: Boolean,
        default: false
      },
      bounce: {
        type: Boolean,
        default: false
      },
      shake: {
        type: Boolean,
        default: false
      },
      beat: {
        type: Boolean,
        default: false
      },
      fade: {
        type: Boolean,
        default: false
      },
      beatFade: {
        type: Boolean,
        default: false
      },
      flash: {
        type: Boolean,
        default: false
      },
      spinPulse: {
        type: Boolean,
        default: false
      },
      spinReverse: {
        type: Boolean,
        default: false
      }
    },
    setup: function (e, i) {
      var o = i.attrs;
      var s = n.computed(function () {
        return qe(e.icon);
      });
      var r = n.computed(function () {
        return K("classes", di(e));
      });
      var a = n.computed(function () {
        return K("transform", typeof e.transform == "string" ? B.parse.transform(e.transform) : e.transform);
      });
      var l = n.computed(function () {
        return K("mask", qe(e.mask));
      });
      var c = n.computed(function () {
        return B.icon(s.value, k(k(k(k({}, r.value), a.value), l.value), {}, {
          symbol: e.symbol,
          title: e.title
        }));
      });
      n.watch(c, function (m) {
        if (!m) {
          return ci("Could not find one or more icon(s)", s.value, l.value);
        }
      }, {
        immediate: true
      });
      var d = n.computed(function () {
        if (c.value) {
          return Ee(c.value.abstract[0], {}, o);
        } else {
          return null;
        }
      });
      return function () {
        return d.value;
      };
    }
  });
  n.defineComponent({
    name: "FontAwesomeLayers",
    props: {
      fixedWidth: {
        type: Boolean,
        default: false
      }
    },
    setup: function (e, i) {
      var o = i.slots;
      var s = B.config.familyPrefix;
      var r = n.computed(function () {
        return [`${s}-layers`].concat(ze(e.fixedWidth ? [`${s}-fw`] : []));
      });
      return function () {
        return n.h("div", {
          class: r.value
        }, o.default ? o.default() : []);
      };
    }
  });
  n.defineComponent({
    name: "FontAwesomeLayersText",
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      transform: {
        type: [String, Object],
        default: null
      },
      counter: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: null,
        validator: function (e) {
          return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(e) > -1;
        }
      }
    },
    setup: function (e, i) {
      var o = i.attrs;
      var s = B.config.familyPrefix;
      var r = n.computed(function () {
        return K("classes", [].concat(ze(e.counter ? [`${s}-layers-counter`] : []), ze(e.position ? [`${s}-layers-${e.position}`] : [])));
      });
      var a = n.computed(function () {
        return K("transform", typeof e.transform == "string" ? B.parse.transform(e.transform) : e.transform);
      });
      var l = n.computed(function () {
        var d = B.text(e.value.toString(), k(k({}, a.value), r.value));
        var m = d.abstract;
        if (e.counter) {
          m[0].attributes.class = m[0].attributes.class.replace("fa-layers-text", "");
        }
        return m[0];
      });
      var c = n.computed(function () {
        return Ee(l.value, {}, o);
      });
      return function () {
        return c.value;
      };
    }
  });
  const Ke = {
    css: B.dom.css,
    install(t) {
      t.component("font-awesome-icon", mi);
    }
  };
  const ui = {
    install(t) {
      t.directive("loading", ge.vLoading);
      for (const e in ge) {
        if (e.startsWith("El")) {
          t.component(e, ge[e]);
        }
      }
    }
  };
  n.computed(() => {
    var t;
    var e;
    if ((t = F.currentLocale) != null && t.startsWith("pt")) {
      return kt;
    }
    if ((e = F.currentLocale) != null && e.startsWith("es")) {
      return vt;
    }
  });
  async function pi() {
    const t = Object.assign({
      "../App.ce.vue": () => Promise.resolve().then(() => Ja),
      "../components/Auth.vue": () => Promise.resolve().then(() => Yi),
      "../components/Avatar.vue": () => Promise.resolve().then(() => oo),
      "../components/Background.vue": () => Promise.resolve().then(() => xs),
      "../components/Base/AlertText.vue": () => Promise.resolve().then(() => Nr),
      "../components/Base/IconToggle.vue": () => Promise.resolve().then(() => ws),
      "../components/Base/MessageSuccess.vue": () => Promise.resolve().then(() => $r),
      "../components/Base/TabMenuContent.vue": () => Promise.resolve().then(() => Rs),
      "../components/Bio.vue": () => Promise.resolve().then(() => ki),
      "../components/IconButton.vue": () => Promise.resolve().then(() => Wo),
      "../components/Index.vue": () => Promise.resolve().then(() => Wa),
      "../components/PageCheckout.vue": () => Promise.resolve().then(() => ma),
      "../components/PageProfile.vue": () => Promise.resolve().then(() => _a),
      "../components/PersonalData.vue": () => Promise.resolve().then(() => Br),
      "../components/Popover.vue": () => Promise.resolve().then(() => Oa),
      "../components/SimplifiedPersonalData.vue": () => Promise.resolve().then(() => mo),
      "../components/SocialMediaList.vue": () => Promise.resolve().then(() => Yr),
      "../components/StatDisplay.vue": () => Promise.resolve().then(() => Xo),
      "../components/Subscribe.vue": () => Promise.resolve().then(() => Zo),
      "../components/UserContent.vue": () => Promise.resolve().then(() => gr)
    });
    const e = [];
    for (const i in t) {
      const o = await t[i]();
      e.push(o.default.styles);
    }
    return [e.flat().join("")];
  }
  const hi = _t("app", {
    state: () => ({
      socket: {
        instance: null,
        joined: false
      }
    }),
    getters: {
      ready: t => t.global.ready,
      appSettings: t => t.global.appSettings,
      token: t => t.global.token,
      tokenV1: t => t.global.tokenV1,
      $http: t => t.global.$http,
      locale: t => t.global.locale
    }
  });
  const fi = 700;
  function Je() {
    return window.innerWidth < fi;
  }
  function I(t) {
    return (t == null ? undefined : t.toString().toLocaleLowerCase()) === "true" || t === true;
  }
  function gi(t) {
    if (t) {
      if (typeof t == "object") {
        return t;
      } else {
        return JSON.parse(t);
      }
    } else {
      return {};
    }
  }
  function Xe(t) {
    const e = t ? atob(t) : undefined;
    return gi(e);
  }
  function yi(t) {
    for (const e in t) {
      if (Mi(t[e])) {
        t[e] = t[e].replace(/\?&/g, "");
      }
    }
  }
  function Mi(t) {
    return t && typeof t == "string" && t.startsWith("http");
  }
  const Ni = () => {
    const t = n.ref(Je());
    const e = new ResizeObserver(() => {
      t.value = Je();
    });
    n.onMounted(() => {
      e.observe(document.body);
      n.provide("isSmallDevice", t);
    });
    n.onBeforeUnmount(() => {
      if (e) {
        e.unobserve(document.body);
        e.disconnect(document.body);
      }
    });
  };
  const zi = t => {
    n.provide("ready", n.computed(() => t.ready == null ? true : I(t.ready)));
    n.provide("appSettings", n.computed(() => {
      const e = Xe(t.appSettings);
      yi(e);
      return e;
    }));
    n.provide("token", n.computed(() => t.token));
    n.provide("tokenV1", n.computed(() => t.tokenV1));
    n.provide("$http", n.computed(() => P.value));
    n.provide("locale", n.computed(() => t.locale));
  };
  const Di = ({
    emit: t
  }) => {
    const e = n.ref(false);
    n.onMounted(() => {
      if (document.readyState === "complete") {
        e.value = true;
        t("ready");
      } else {
        const i = window.addEventListener("load", () => {
          e.value = true;
          window.removeEventListener("load", i);
          t("ready");
        });
      }
    });
    return {
      windowLoaded: e
    };
  };
  const $e = t => typeof t == "string" && t.trim() === "";
  const et = t => Array.isArray(t) && t.length === 0;
  let xe = {};
  const Ei = () => xe;
  const xi = t => {
    if (!t) {
      return xe = {};
    }
    let e = Ti(t);
    bi(e);
    Si(e);
    xe = e;
  };
  function Ti(t) {
    if (t) {
      if (typeof t == "string") {
        return Xe(t);
      } else {
        return t;
      }
    } else {
      return {};
    }
  }
  function bi(t) {
    Object.keys(t).forEach(e => {
      if (typeof t[e] == "string") {
        const i = wi(t[e]);
        if (i) {
          t[e] = i;
        }
      }
    });
  }
  function Si(t) {
    if (t.SENSITIVE_INFOS_PATTERN) {
      t.SENSITIVE_INFOS_PATTERN = t.SENSITIVE_INFOS_PATTERN.map(e => {
        if (e) {
          return Ii(typeof e == "string" ? e : e.source);
        }
      });
    }
  }
  function wi(t) {
    if (t) {
      if (t instanceof RegExp) {
        return t;
      }
      if (typeof t != "string") {
        return null;
      }
      try {
        return Ai(t);
      } catch (e) {
        console.warn("Error converting regex:", t, e);
      }
    }
  }
  function Ai(t) {
    const e = t.match(/^\/(.+)\/([gimuy]*)$/);
    if (e) {
      return new RegExp(e[1], e[2]);
    } else {
      return new RegExp(t);
    }
  }
  function Ii(t) {
    if (t.includes("\\\\")) {
      return t.replace(/\\\\/g, "\\");
    } else {
      return t;
    }
  }
  const Ci = ({
    EXIST_LINKS_PATTERN: t = "",
    LINK_INTERNAL_PATTERN: e = "",
    SENSITIVE_INFOS_PATTERN: i = [],
    KEYS_WORDS_NOT_ALLOWED: o = []
  }) => $e(t) && $e(e) && et(i) && et(o);
  function Li(t) {
    var o;
    var s;
    const e = Ei();
    if (Ci(e)) {
      return t;
    }
    let i = t;
    try {
      if ((o = e == null ? undefined : e.KEYS_WORDS_NOT_ALLOWED) != null && o.length) {
        const r = new RegExp(`\\b(${e.KEYS_WORDS_NOT_ALLOWED.join("|")})\\b`, "gi");
        i = i.replace(r, "");
      }
      if (e != null && e.EXIST_LINKS_PATTERN) {
        (i.match(e.EXIST_LINKS_PATTERN) || []).forEach(a => {
          if (!e.LINK_INTERNAL_PATTERN.test(a)) {
            i = i.replace(a, "");
          }
        });
      }
      if ((s = e == null ? undefined : e.SENSITIVE_INFOS_PATTERN) != null && s.length) {
        const r = e.SENSITIVE_INFOS_PATTERN.join("|");
        const a = new RegExp(`(${r})`, "gim");
        i = i.replace(a, "");
      }
      return i.trim();
    } catch (r) {
      console.error(r);
      return t;
    }
  }
  const E = (t, e) => {
    const i = t.__vccOpts || t;
    for (const [o, s] of e) {
      i[o] = s;
    }
    return i;
  };
  const ji = {
    props: {
      description: {
        type: String,
        required: true
      }
    },
    setup() {
      const {
        t
      } = v();
      return {
        t
      };
    },
    data() {
      return {
        isBioExpanded: false,
        showToggleButton: false
      };
    },
    mounted() {
      this.checkIfBioIsTruncated();
    },
    watch: {
      description() {
        this.checkIfBioIsTruncated();
      }
    },
    methods: {
      toggleBio() {
        this.isBioExpanded = !this.isBioExpanded;
      },
      checkIfBioIsTruncated() {
        const t = this.$refs.bioText;
        if (t) {
          this.showToggleButton = t.scrollHeight > t.offsetHeight;
        }
      },
      removeLinks(t) {
        if (t) {
          return Li(t);
        } else {
          return "";
        }
      }
    }
  };
  function Oi(t, e, i, o, s, r) {
    n.openBlock();
    return n.createElementBlock("div", null, [n.createElementVNode("span", {
      ref: "bioText",
      class: n.normalizeClass(["bio", {
        "bio-expanded": s.isBioExpanded
      }])
    }, n.toDisplayString(r.removeLinks(i.description)), 3), s.showToggleButton ? (n.openBlock(), n.createElementBlock("div", {
      key: 0,
      class: "toggle-bio-button",
      onClick: e[0] || (e[0] = (...a) => r.toggleBio && r.toggleBio(...a))
    }, n.toDisplayString(s.isBioExpanded ? o.t("READ_LESS") : o.t("READ_MORE")), 1)) : n.createCommentVNode("", true)]);
  }
  const Te = E(ji, [["render", Oi]]);
  const ki = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Te
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const be = {
    run(t) {
      return window.WC_AUTO_LOADER.run(t);
    }
  };
  const nl = "";
  const ol = "";
  const sl = "";
  function vi(t) {
    var e = [];
    if (t.length === 0) {
      return "";
    }
    if (typeof t[0] != "string") {
      throw new TypeError("Url must be a string. Received " + t[0]);
    }
    if (t[0].match(/^[^/:]+:\/*$/) && t.length > 1) {
      var i = t.shift();
      t[0] = i + t[0];
    }
    if (t[0].match(/^file:\/\/\//)) {
      t[0] = t[0].replace(/^([^/:]+):\/*/, "$1:///");
    } else {
      t[0] = t[0].replace(/^([^/:]+):\/*/, "$1://");
    }
    for (var o = 0; o < t.length; o++) {
      var s = t[o];
      if (typeof s != "string") {
        throw new TypeError("Url must be a string. Received " + s);
      }
      if (s !== "") {
        if (o > 0) {
          s = s.replace(/^[\/]+/, "");
        }
        if (o < t.length - 1) {
          s = s.replace(/[\/]+$/, "");
        } else {
          s = s.replace(/[\/]+$/, "/");
        }
        e.push(s);
      }
    }
    var r = e.join("/");
    r = r.replace(/\/(\?|&|#[^!])/g, "$1");
    var a = r.split("?");
    r = a.shift() + (a.length > 0 ? "?" : "") + a.join("&");
    return r;
  }
  function C() {
    var t;
    if (typeof arguments[0] == "object") {
      t = arguments[0];
    } else {
      t = [].slice.call(arguments);
    }
    return vi(t);
  }
  const Pi = `.auth{margin-left:17px;margin-right:20px}
`;
  const Bi = {
    inject: ["locale", "appSettings", "$http"],
    emits: ["form-paid"],
    components: {
      ElSkeleton: S.ElSkeleton,
      ElSkeletonItem: S.ElSkeletonItem
    },
    props: {
      user: {
        type: Object,
        required: true
      },
      orderPayment: {
        type: String,
        default: null
      },
      authView: String,
      isRecoveryConfirmation: Boolean
    },
    data() {
      return {
        wcAuth: {
          visible: false,
          name: "privacy-web-auth",
          ctx: null,
          loaded: false,
          error: false
        }
      };
    },
    computed: {
      appSettingsEncripted() {
        return btoa(JSON.stringify(this.appSettings));
      }
    },
    mounted() {
      this.loadWebComponent();
    },
    methods: {
      async loadWebComponent() {
        try {
          const t = await be.run({
            urlBase: "/webcomponents",
            componentName: this.wcAuth.name
          });
          this.wcAuth.loaded = t.loaded;
          this.wcAuth.error = t.error;
        } catch {
          this.wcAuth.error = true;
        }
      },
      async finishCheckout(t) {
        var e;
        try {
          let i = null;
          if (this.orderPayment) {
            i = C(this.appSettings.PRIVACY_URL, `/profile/${this.user.profileName}/orderpayment=${this.orderPayment}`);
          } else {
            const o = (e = t == null ? undefined : t.detail) == null ? undefined : e[0];
            if (o != null && o.token && (await this.verifyUser(o.token))) {
              await this.followProfile(o.token);
            }
            i = C(this.appSettings.PRIVACY_URL, `/profile/${this.user.profileName}`);
          }
          window.location.href = i;
        } catch (i) {
          console.error(i);
        }
      },
      async followProfile(t) {
        var e;
        try {
          const i = C(this.appSettings.ENDPOINT_API_CHECKOUT, `/follow-profile/${(e = this.user) == null ? undefined : e.clientId}`);
          await this.$http.get(i, {
            headers: {
              Authorization: `Bearer ${t}`
            }
          });
        } catch (i) {
          console.error(i);
        }
      },
      async verifyUser(t) {
        var e;
        try {
          const i = C(this.appSettings.ENDPOINT_API_PROFILE, "/Users");
          const o = await this.$http.get(i, {
            headers: {
              Authorization: `Bearer ${t}`
            }
          });
          if (o != null && o.data) {
            return !!((e = o.data) != null && e.document);
          } else {
            return false;
          }
        } catch (i) {
          console.error(i);
        }
      }
    }
  };
  const Vi = {
    class: "auth"
  };
  const Ri = {
    key: 0
  };
  const Zi = {
    key: 1,
    class: "mt-3"
  };
  const Ui = {
    class: "d-flex justify-content-between mb-2"
  };
  const Fi = {
    class: "d-flex justify-content-center"
  };
  const _i = {
    class: "d-flex justify-content-between mb-4"
  };
  function Qi(t, e, i, o, s, r) {
    var d;
    var m;
    const a = n.resolveComponent("privacy-web-auth");
    const l = n.resolveComponent("el-skeleton-item");
    const c = n.resolveComponent("el-skeleton");
    n.openBlock();
    return n.createElementBlock("div", Vi, [s.wcAuth.loaded ? (n.openBlock(), n.createElementBlock("div", Ri, [n.createVNode(a, {
      visible: s.wcAuth.visible,
      locale: r.locale,
      "app-settings": r.appSettingsEncripted,
      "profile-name": (d = i.user) == null ? undefined : d.profileName,
      "is-free-creator": (m = i.user) == null ? undefined : m.isFreeCreator,
      "is-recovery-confirmation": i.isRecoveryConfirmation,
      "is-checkout": true,
      view: i.authView,
      "order-payment": i.orderPayment,
      onSuccessLogin: r.finishCheckout,
      onFormPaid: e[0] || (e[0] = f => t.$emit("form-paid"))
    }, null, 8, ["visible", "locale", "app-settings", "profile-name", "is-free-creator", "is-recovery-confirmation", "view", "order-payment", "onSuccessLogin"])])) : (n.openBlock(), n.createElementBlock("div", Zi, [n.createVNode(c, null, {
      template: n.withCtx(() => [n.createVNode(l, {
        variant: "p",
        class: "mb-1",
        style: {
          width: "30%",
          height: "20px"
        }
      }), n.createVNode(l, {
        variant: "text",
        class: "mb-2",
        style: {
          width: "100%",
          height: "40px",
          "border-radius": "18px"
        }
      }), n.createVNode(l, {
        variant: "text",
        class: "mb-1",
        style: {
          width: "100%",
          height: "40px",
          "border-radius": "18px"
        }
      }), n.createElementVNode("div", Ui, [n.createVNode(l, {
        variant: "text",
        style: {
          width: "30%",
          height: "20px"
        }
      }), n.createVNode(l, {
        variant: "text",
        style: {
          width: "30%",
          height: "20px"
        }
      })]), n.createVNode(l, {
        variant: "text",
        class: "mb-2",
        style: {
          width: "100%",
          height: "40px",
          "border-radius": "18px"
        }
      }), n.createElementVNode("div", Fi, [n.createVNode(l, {
        variant: "p",
        class: "mb-3",
        style: {
          width: "40%",
          height: "20px"
        }
      })]), n.createElementVNode("div", _i, [n.createVNode(l, {
        variant: "text",
        style: {
          width: "45%",
          height: "40px",
          "border-radius": "18px"
        }
      }), n.createVNode(l, {
        variant: "text",
        style: {
          width: "45%",
          height: "40px",
          "border-radius": "18px"
        }
      })])]),
      _: 1
    })]))]);
  }
  const tt = E(Bi, [["render", Qi], ["styles", [Pi]]]);
  const Yi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Hi({
    userName: t
  }) {
    t = t.trim();
    const e = "#F4EEE5";
    const i = "#333333";
    let o = "";
    let s = "";
    if (!t) {
      o = "";
      s = "";
    } else {
      const m = Array.from(t.toUpperCase().replace(/\s+/g, ""));
      o = m[0] || "";
      s = m[1] || "";
    }
    const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    r.setAttribute("width", "120");
    r.setAttribute("height", "120");
    const a = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    a.setAttribute("x", "0");
    a.setAttribute("y", "0");
    a.setAttribute("width", "120");
    a.setAttribute("height", "120");
    a.setAttribute("fill", e);
    const l = document.createElementNS("http://www.w3.org/2000/svg", "text");
    l.setAttribute("x", "60px");
    l.setAttribute("y", "64px");
    l.setAttribute("dominant-baseline", "middle");
    l.setAttribute("text-anchor", "middle");
    l.setAttribute("fill", i);
    l.setAttribute("font-family", "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, Helvetica, sans-serif");
    l.setAttribute("font-size", "40px");
    l.setAttribute("font-weight", "530");
    l.textContent = `${o}${s}`;
    r.appendChild(a);
    r.appendChild(l);
    const c = new XMLSerializer().serializeToString(r);
    return `data:image/svg+xml;base64,${Wi(c)}`;
  }
  function Wi(t) {
    const e = new TextEncoder().encode(t);
    let i = "";
    for (let o = 0; o < e.byteLength; o++) {
      i += String.fromCharCode(e[o]);
    }
    return btoa(i);
  }
  function it({
    userName: t
  }) {
    return Hi({
      userName: t
    });
  } /*!
    * PhotoSwipe 5.3.8 - https://photoswipe.com
    * (c) 2023 Dmytro Semenov
    */
  function L(t, e, i) {
    const o = document.createElement(e);
    if (t) {
      o.className = t;
    }
    if (i) {
      i.appendChild(o);
    }
    return o;
  }
  function x(t, e) {
    t.x = e.x;
    t.y = e.y;
    if (e.id !== undefined) {
      t.id = e.id;
    }
    return t;
  }
  function nt(t) {
    t.x = Math.round(t.x);
    t.y = Math.round(t.y);
  }
  function Se(t, e) {
    const i = Math.abs(t.x - e.x);
    const o = Math.abs(t.y - e.y);
    return Math.sqrt(i * i + o * o);
  }
  function J(t, e) {
    return t.x === e.x && t.y === e.y;
  }
  function X(t, e, i) {
    return Math.min(Math.max(t, e), i);
  }
  function $(t, e, i) {
    let o = `translate3d(${t}px,${e || 0}px,0)`;
    if (i !== undefined) {
      o += ` scale3d(${i},${i},1)`;
    }
    return o;
  }
  function _(t, e, i, o) {
    t.style.transform = $(e, i, o);
  }
  const Gi = "cubic-bezier(.4,0,.22,1)";
  function ot(t, e, i, o) {
    t.style.transition = e ? `${e} ${i}ms ${o || Gi}` : "none";
  }
  function we(t, e, i) {
    t.style.width = typeof e == "number" ? `${e}px` : e;
    t.style.height = typeof i == "number" ? `${i}px` : i;
  }
  function qi(t) {
    ot(t);
  }
  function Ki(t) {
    if ("decode" in t) {
      return t.decode().catch(() => {});
    } else if (t.complete) {
      return Promise.resolve(t);
    } else {
      return new Promise((e, i) => {
        t.onload = () => e(t);
        t.onerror = i;
      });
    }
  }
  function Ji(t) {
    return "button" in t && t.button === 1 || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey;
  }
  function Xi(t, e, i = document) {
    let o = [];
    if (t instanceof Element) {
      o = [t];
    } else if (t instanceof NodeList || Array.isArray(t)) {
      o = Array.from(t);
    } else {
      const s = typeof t == "string" ? t : e;
      if (s) {
        o = Array.from(i.querySelectorAll(s));
      }
    }
    return o;
  }
  function st() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
  }
  let rt = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: () => {
        rt = true;
      }
    }));
  } catch {}
  class $i {
    constructor() {
      this._pool = [];
    }
    add(e, i, o, s) {
      this._toggleListener(e, i, o, s);
    }
    remove(e, i, o, s) {
      this._toggleListener(e, i, o, s, true);
    }
    removeAll() {
      this._pool.forEach(e => {
        this._toggleListener(e.target, e.type, e.listener, e.passive, true, true);
      });
      this._pool = [];
    }
    _toggleListener(e, i, o, s, r, a) {
      if (!e) {
        return;
      }
      const l = r ? "removeEventListener" : "addEventListener";
      i.split(" ").forEach(d => {
        if (d) {
          if (!a) {
            if (r) {
              this._pool = this._pool.filter(f => f.type !== d || f.listener !== o || f.target !== e);
            } else {
              this._pool.push({
                target: e,
                type: d,
                listener: o,
                passive: s
              });
            }
          }
          const m = rt ? {
            passive: s || false
          } : false;
          e[l](d, o, m);
        }
      });
    }
  }
  function at(t, e) {
    if (t.getViewportSizeFn) {
      const i = t.getViewportSizeFn(t, e);
      if (i) {
        return i;
      }
    }
    return {
      x: document.documentElement.clientWidth,
      y: window.innerHeight
    };
  }
  function ee(t, e, i, o, s) {
    let r = 0;
    if (e.paddingFn) {
      r = e.paddingFn(i, o, s)[t];
    } else if (e.padding) {
      r = e.padding[t];
    } else {
      const a = "padding" + t[0].toUpperCase() + t.slice(1);
      if (e[a]) {
        r = e[a];
      }
    }
    return Number(r) || 0;
  }
  function lt(t, e, i, o) {
    return {
      x: e.x - ee("left", t, e, i, o) - ee("right", t, e, i, o),
      y: e.y - ee("top", t, e, i, o) - ee("bottom", t, e, i, o)
    };
  }
  class en {
    constructor(e) {
      this.slide = e;
      this.currZoomLevel = 1;
      this.center = {
        x: 0,
        y: 0
      };
      this.max = {
        x: 0,
        y: 0
      };
      this.min = {
        x: 0,
        y: 0
      };
    }
    update(e) {
      this.currZoomLevel = e;
      if (this.slide.width) {
        this._updateAxis("x");
        this._updateAxis("y");
        this.slide.pswp.dispatch("calcBounds", {
          slide: this.slide
        });
      } else {
        this.reset();
      }
    }
    _updateAxis(e) {
      const {
        pswp: i
      } = this.slide;
      const o = this.slide[e === "x" ? "width" : "height"] * this.currZoomLevel;
      const r = ee(e === "x" ? "left" : "top", i.options, i.viewportSize, this.slide.data, this.slide.index);
      const a = this.slide.panAreaSize[e];
      this.center[e] = Math.round((a - o) / 2) + r;
      this.max[e] = o > a ? Math.round(a - o) + r : this.center[e];
      this.min[e] = o > a ? r : this.center[e];
    }
    reset() {
      this.center.x = 0;
      this.center.y = 0;
      this.max.x = 0;
      this.max.y = 0;
      this.min.x = 0;
      this.min.y = 0;
    }
    correctPan(e, i) {
      return X(i, this.max[e], this.min[e]);
    }
  }
  const ct = 4000;
  class dt {
    constructor(e, i, o, s) {
      this.pswp = s;
      this.options = e;
      this.itemData = i;
      this.index = o;
      this.panAreaSize = null;
      this.elementSize = null;
      this.fit = 1;
      this.fill = 1;
      this.vFill = 1;
      this.initial = 1;
      this.secondary = 1;
      this.max = 1;
      this.min = 1;
    }
    update(e, i, o) {
      const s = {
        x: e,
        y: i
      };
      this.elementSize = s;
      this.panAreaSize = o;
      const r = o.x / s.x;
      const a = o.y / s.y;
      this.fit = Math.min(1, r < a ? r : a);
      this.fill = Math.min(1, r > a ? r : a);
      this.vFill = Math.min(1, a);
      this.initial = this._getInitial();
      this.secondary = this._getSecondary();
      this.max = Math.max(this.initial, this.secondary, this._getMax());
      this.min = Math.min(this.fit, this.initial, this.secondary);
      if (this.pswp) {
        this.pswp.dispatch("zoomLevelsUpdate", {
          zoomLevels: this,
          slideData: this.itemData
        });
      }
    }
    _parseZoomLevelOption(e) {
      const i = e + "ZoomLevel";
      const o = this.options[i];
      if (o) {
        if (typeof o == "function") {
          return o(this);
        } else if (o === "fill") {
          return this.fill;
        } else if (o === "fit") {
          return this.fit;
        } else {
          return Number(o);
        }
      }
    }
    _getSecondary() {
      let e = this._parseZoomLevelOption("secondary");
      return e || (e = Math.min(1, this.fit * 3), this.elementSize && e * this.elementSize.x > ct && (e = ct / this.elementSize.x), e);
    }
    _getInitial() {
      return this._parseZoomLevelOption("initial") || this.fit;
    }
    _getMax() {
      return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
    }
  }
  class tn {
    constructor(e, i, o) {
      this.data = e;
      this.index = i;
      this.pswp = o;
      this.isActive = i === o.currIndex;
      this.currentResolution = 0;
      this.panAreaSize = {
        x: 0,
        y: 0
      };
      this.pan = {
        x: 0,
        y: 0
      };
      this.isFirstSlide = this.isActive && !o.opener.isOpen;
      this.zoomLevels = new dt(o.options, e, i, o);
      this.pswp.dispatch("gettingData", {
        slide: this,
        data: this.data,
        index: i
      });
      this.content = this.pswp.contentLoader.getContentBySlide(this);
      this.container = L("pswp__zoom-wrap", "div");
      this.holderElement = null;
      this.currZoomLevel = 1;
      this.width = this.content.width;
      this.height = this.content.height;
      this.heavyAppended = false;
      this.bounds = new en(this);
      this.prevDisplayedWidth = -1;
      this.prevDisplayedHeight = -1;
      this.pswp.dispatch("slideInit", {
        slide: this
      });
    }
    setIsActive(e) {
      if (e && !this.isActive) {
        this.activate();
      } else if (!e && this.isActive) {
        this.deactivate();
      }
    }
    append(e) {
      this.holderElement = e;
      this.container.style.transformOrigin = "0 0";
      if (this.data) {
        this.calculateSize();
        this.load();
        this.updateContentSize();
        this.appendHeavy();
        this.holderElement.appendChild(this.container);
        this.zoomAndPanToInitial();
        this.pswp.dispatch("firstZoomPan", {
          slide: this
        });
        this.applyCurrentZoomPan();
        this.pswp.dispatch("afterSetContent", {
          slide: this
        });
        if (this.isActive) {
          this.activate();
        }
      }
    }
    load() {
      this.content.load(false);
      this.pswp.dispatch("slideLoad", {
        slide: this
      });
    }
    appendHeavy() {
      const {
        pswp: e
      } = this;
      const i = true;
      if (!(this.heavyAppended || !e.opener.isOpen || e.mainScroll.isShifted() || !this.isActive && !i || this.pswp.dispatch("appendHeavy", {
        slide: this
      }).defaultPrevented)) {
        this.heavyAppended = true;
        this.content.append();
        this.pswp.dispatch("appendHeavyContent", {
          slide: this
        });
      }
    }
    activate() {
      this.isActive = true;
      this.appendHeavy();
      this.content.activate();
      this.pswp.dispatch("slideActivate", {
        slide: this
      });
    }
    deactivate() {
      this.isActive = false;
      this.content.deactivate();
      if (this.currZoomLevel !== this.zoomLevels.initial) {
        this.calculateSize();
      }
      this.currentResolution = 0;
      this.zoomAndPanToInitial();
      this.applyCurrentZoomPan();
      this.updateContentSize();
      this.pswp.dispatch("slideDeactivate", {
        slide: this
      });
    }
    destroy() {
      this.content.hasSlide = false;
      this.content.remove();
      this.container.remove();
      this.pswp.dispatch("slideDestroy", {
        slide: this
      });
    }
    resize() {
      if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
        this.calculateSize();
        this.currentResolution = 0;
        this.zoomAndPanToInitial();
        this.applyCurrentZoomPan();
        this.updateContentSize();
      } else {
        this.calculateSize();
        this.bounds.update(this.currZoomLevel);
        this.panTo(this.pan.x, this.pan.y);
      }
    }
    updateContentSize(e) {
      const i = this.currentResolution || this.zoomLevels.initial;
      if (!i) {
        return;
      }
      const o = Math.round(this.width * i) || this.pswp.viewportSize.x;
      const s = Math.round(this.height * i) || this.pswp.viewportSize.y;
      if (!(!this.sizeChanged(o, s) && !e)) {
        this.content.setDisplayedSize(o, s);
      }
    }
    sizeChanged(e, i) {
      if (e !== this.prevDisplayedWidth || i !== this.prevDisplayedHeight) {
        this.prevDisplayedWidth = e;
        this.prevDisplayedHeight = i;
        return true;
      } else {
        return false;
      }
    }
    getPlaceholderElement() {
      var e;
      if ((e = this.content.placeholder) == null) {
        return undefined;
      } else {
        return e.element;
      }
    }
    zoomTo(e, i, o, s) {
      const {
        pswp: r
      } = this;
      if (!this.isZoomable() || r.mainScroll.isShifted()) {
        return;
      }
      r.dispatch("beforeZoomTo", {
        destZoomLevel: e,
        centerPoint: i,
        transitionDuration: o
      });
      r.animations.stopAllPan();
      const a = this.currZoomLevel;
      if (!s) {
        e = X(e, this.zoomLevels.min, this.zoomLevels.max);
      }
      this.setZoomLevel(e);
      this.pan.x = this.calculateZoomToPanOffset("x", i, a);
      this.pan.y = this.calculateZoomToPanOffset("y", i, a);
      nt(this.pan);
      const l = () => {
        this._setResolution(e);
        this.applyCurrentZoomPan();
      };
      if (o) {
        r.animations.startTransition({
          isPan: true,
          name: "zoomTo",
          target: this.container,
          transform: this.getCurrentTransform(),
          onComplete: l,
          duration: o,
          easing: r.options.easing
        });
      } else {
        l();
      }
    }
    toggleZoom(e) {
      this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, e, this.pswp.options.zoomAnimationDuration);
    }
    setZoomLevel(e) {
      this.currZoomLevel = e;
      this.bounds.update(this.currZoomLevel);
    }
    calculateZoomToPanOffset(e, i, o) {
      if (this.bounds.max[e] - this.bounds.min[e] === 0) {
        return this.bounds.center[e];
      }
      if (!i) {
        i = this.pswp.getViewportCenterPoint();
      }
      if (!o) {
        o = this.zoomLevels.initial;
      }
      const r = this.currZoomLevel / o;
      return this.bounds.correctPan(e, (this.pan[e] - i[e]) * r + i[e]);
    }
    panTo(e, i) {
      this.pan.x = this.bounds.correctPan("x", e);
      this.pan.y = this.bounds.correctPan("y", i);
      this.applyCurrentZoomPan();
    }
    isPannable() {
      return Boolean(this.width) && this.currZoomLevel > this.zoomLevels.fit;
    }
    isZoomable() {
      return Boolean(this.width) && this.content.isZoomable();
    }
    applyCurrentZoomPan() {
      this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
      if (this === this.pswp.currSlide) {
        this.pswp.dispatch("zoomPanUpdate", {
          slide: this
        });
      }
    }
    zoomAndPanToInitial() {
      this.currZoomLevel = this.zoomLevels.initial;
      this.bounds.update(this.currZoomLevel);
      x(this.pan, this.bounds.center);
      this.pswp.dispatch("initialZoomPan", {
        slide: this
      });
    }
    _applyZoomTransform(e, i, o) {
      o /= this.currentResolution || this.zoomLevels.initial;
      _(this.container, e, i, o);
    }
    calculateSize() {
      const {
        pswp: e
      } = this;
      x(this.panAreaSize, lt(e.options, e.viewportSize, this.data, this.index));
      this.zoomLevels.update(this.width, this.height, this.panAreaSize);
      e.dispatch("calcSlideSize", {
        slide: this
      });
    }
    getCurrentTransform() {
      const e = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
      return $(this.pan.x, this.pan.y, e);
    }
    _setResolution(e) {
      if (e !== this.currentResolution) {
        this.currentResolution = e;
        this.updateContentSize();
        this.pswp.dispatch("resolutionChanged");
      }
    }
  }
  const nn = 0.35;
  const on = 0.6;
  const mt = 0.4;
  const ut = 0.5;
  function sn(t, e) {
    return t * e / (1 - e);
  }
  class rn {
    constructor(e) {
      this.gestures = e;
      this.pswp = e.pswp;
      this.startPan = {
        x: 0,
        y: 0
      };
    }
    start() {
      if (this.pswp.currSlide) {
        x(this.startPan, this.pswp.currSlide.pan);
      }
      this.pswp.animations.stopAll();
    }
    change() {
      const {
        p1: e,
        prevP1: i,
        dragAxis: o
      } = this.gestures;
      const {
        currSlide: s
      } = this.pswp;
      if (o === "y" && this.pswp.options.closeOnVerticalDrag && s && s.currZoomLevel <= s.zoomLevels.fit && !this.gestures.isMultitouch) {
        const r = s.pan.y + (e.y - i.y);
        if (!this.pswp.dispatch("verticalDrag", {
          panY: r
        }).defaultPrevented) {
          this._setPanWithFriction("y", r, on);
          const a = 1 - Math.abs(this._getVerticalDragRatio(s.pan.y));
          this.pswp.applyBgOpacity(a);
          s.applyCurrentZoomPan();
        }
      } else if (!this._panOrMoveMainScroll("x")) {
        this._panOrMoveMainScroll("y");
        if (s) {
          nt(s.pan);
          s.applyCurrentZoomPan();
        }
      }
    }
    end() {
      const {
        velocity: e
      } = this.gestures;
      const {
        mainScroll: i,
        currSlide: o
      } = this.pswp;
      let s = 0;
      this.pswp.animations.stopAll();
      if (i.isShifted()) {
        const a = (i.x - i.getCurrSlideX()) / this.pswp.viewportSize.x;
        if (e.x < -ut && a < 0 || e.x < 0.1 && a < -0.5) {
          s = 1;
          e.x = Math.min(e.x, 0);
        } else if (e.x > ut && a > 0 || e.x > -0.1 && a > 0.5) {
          s = -1;
          e.x = Math.max(e.x, 0);
        }
        i.moveIndexBy(s, true, e.x);
      }
      if (o && o.currZoomLevel > o.zoomLevels.max || this.gestures.isMultitouch) {
        this.gestures.zoomLevels.correctZoomPan(true);
      } else {
        this._finishPanGestureForAxis("x");
        this._finishPanGestureForAxis("y");
      }
    }
    _finishPanGestureForAxis(e) {
      const {
        velocity: i
      } = this.gestures;
      const {
        currSlide: o
      } = this.pswp;
      if (!o) {
        return;
      }
      const {
        pan: s,
        bounds: r
      } = o;
      const a = s[e];
      const l = this.pswp.bgOpacity < 1 && e === "y";
      const c = 0.995;
      const d = a + sn(i[e], c);
      if (l) {
        const N = this._getVerticalDragRatio(a);
        const y = this._getVerticalDragRatio(d);
        if (N < 0 && y < -mt || N > 0 && y > mt) {
          this.pswp.close();
          return;
        }
      }
      const m = r.correctPan(e, d);
      if (a === m) {
        return;
      }
      const f = m === d ? 1 : 0.82;
      const u = this.pswp.bgOpacity;
      const g = m - a;
      this.pswp.animations.startSpring({
        name: "panGesture" + e,
        isPan: true,
        start: a,
        end: m,
        velocity: i[e],
        dampingRatio: f,
        onUpdate: N => {
          if (l && this.pswp.bgOpacity < 1) {
            const y = 1 - (m - N) / g;
            this.pswp.applyBgOpacity(X(u + (1 - u) * y, 0, 1));
          }
          s[e] = Math.floor(N);
          o.applyCurrentZoomPan();
        }
      });
    }
    _panOrMoveMainScroll(e) {
      const {
        p1: i,
        dragAxis: o,
        prevP1: s,
        isMultitouch: r
      } = this.gestures;
      const {
        currSlide: a,
        mainScroll: l
      } = this.pswp;
      const c = i[e] - s[e];
      const d = l.x + c;
      if (!c || !a) {
        return false;
      }
      if (e === "x" && !a.isPannable() && !r) {
        l.moveTo(d, true);
        return true;
      }
      const {
        bounds: m
      } = a;
      const f = a.pan[e] + c;
      if (this.pswp.options.allowPanToNext && o === "x" && e === "x" && !r) {
        const u = l.getCurrSlideX();
        const g = l.x - u;
        const N = c > 0;
        const y = !N;
        if (f > m.min[e] && N) {
          if (m.min[e] <= this.startPan[e]) {
            l.moveTo(d, true);
            return true;
          }
          this._setPanWithFriction(e, f);
        } else if (f < m.max[e] && y) {
          if (this.startPan[e] <= m.max[e]) {
            l.moveTo(d, true);
            return true;
          }
          this._setPanWithFriction(e, f);
        } else if (g !== 0) {
          if (g > 0) {
            l.moveTo(Math.max(d, u), true);
            return true;
          }
          if (g < 0) {
            l.moveTo(Math.min(d, u), true);
            return true;
          }
        } else {
          this._setPanWithFriction(e, f);
        }
      } else if (e === "y") {
        if (!l.isShifted() && m.min.y !== m.max.y) {
          this._setPanWithFriction(e, f);
        }
      } else {
        this._setPanWithFriction(e, f);
      }
      return false;
    }
    _getVerticalDragRatio(e) {
      var i;
      return (e - (((i = this.pswp.currSlide) == null ? undefined : i.bounds.center.y) ?? 0)) / (this.pswp.viewportSize.y / 3);
    }
    _setPanWithFriction(e, i, o) {
      const {
        currSlide: s
      } = this.pswp;
      if (!s) {
        return;
      }
      const {
        pan: r,
        bounds: a
      } = s;
      if (a.correctPan(e, i) !== i || o) {
        const c = Math.round(i - r[e]);
        r[e] += c * (o || nn);
      } else {
        r[e] = i;
      }
    }
  }
  const an = 0.05;
  const ln = 0.15;
  function pt(t, e, i) {
    t.x = (e.x + i.x) / 2;
    t.y = (e.y + i.y) / 2;
    return t;
  }
  class cn {
    constructor(e) {
      this.gestures = e;
      this._startPan = {
        x: 0,
        y: 0
      };
      this._startZoomPoint = {
        x: 0,
        y: 0
      };
      this._zoomPoint = {
        x: 0,
        y: 0
      };
      this._wasOverFitZoomLevel = false;
      this._startZoomLevel = 1;
    }
    start() {
      const {
        currSlide: e
      } = this.gestures.pswp;
      if (e) {
        this._startZoomLevel = e.currZoomLevel;
        x(this._startPan, e.pan);
      }
      this.gestures.pswp.animations.stopAllPan();
      this._wasOverFitZoomLevel = false;
    }
    change() {
      const {
        p1: e,
        startP1: i,
        p2: o,
        startP2: s,
        pswp: r
      } = this.gestures;
      const {
        currSlide: a
      } = r;
      if (!a) {
        return;
      }
      const l = a.zoomLevels.min;
      const c = a.zoomLevels.max;
      if (!a.isZoomable() || r.mainScroll.isShifted()) {
        return;
      }
      pt(this._startZoomPoint, i, s);
      pt(this._zoomPoint, e, o);
      let d = 1 / Se(i, s) * Se(e, o) * this._startZoomLevel;
      if (d > a.zoomLevels.initial + a.zoomLevels.initial / 15) {
        this._wasOverFitZoomLevel = true;
      }
      if (d < l) {
        if (r.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= a.zoomLevels.initial) {
          const m = 1 - (l - d) / (l / 1.2);
          if (!r.dispatch("pinchClose", {
            bgOpacity: m
          }).defaultPrevented) {
            r.applyBgOpacity(m);
          }
        } else {
          d = l - (l - d) * ln;
        }
      } else if (d > c) {
        d = c + (d - c) * an;
      }
      a.pan.x = this._calculatePanForZoomLevel("x", d);
      a.pan.y = this._calculatePanForZoomLevel("y", d);
      a.setZoomLevel(d);
      a.applyCurrentZoomPan();
    }
    end() {
      const {
        pswp: e
      } = this.gestures;
      const {
        currSlide: i
      } = e;
      if ((!i || i.currZoomLevel < i.zoomLevels.initial) && !this._wasOverFitZoomLevel && e.options.pinchToClose) {
        e.close();
      } else {
        this.correctZoomPan();
      }
    }
    _calculatePanForZoomLevel(e, i) {
      const o = i / this._startZoomLevel;
      return this._zoomPoint[e] - (this._startZoomPoint[e] - this._startPan[e]) * o;
    }
    correctZoomPan(e) {
      const {
        pswp: i
      } = this.gestures;
      const {
        currSlide: o
      } = i;
      if (!(o != null && o.isZoomable())) {
        return;
      }
      if (this._zoomPoint.x === 0) {
        e = true;
      }
      const s = o.currZoomLevel;
      let r;
      let a = true;
      if (s < o.zoomLevels.initial) {
        r = o.zoomLevels.initial;
      } else if (s > o.zoomLevels.max) {
        r = o.zoomLevels.max;
      } else {
        a = false;
        r = s;
      }
      const l = i.bgOpacity;
      const c = i.bgOpacity < 1;
      const d = x({
        x: 0,
        y: 0
      }, o.pan);
      let m = x({
        x: 0,
        y: 0
      }, d);
      if (e) {
        this._zoomPoint.x = 0;
        this._zoomPoint.y = 0;
        this._startZoomPoint.x = 0;
        this._startZoomPoint.y = 0;
        this._startZoomLevel = s;
        x(this._startPan, d);
      }
      if (a) {
        m = {
          x: this._calculatePanForZoomLevel("x", r),
          y: this._calculatePanForZoomLevel("y", r)
        };
      }
      o.setZoomLevel(r);
      m = {
        x: o.bounds.correctPan("x", m.x),
        y: o.bounds.correctPan("y", m.y)
      };
      o.setZoomLevel(s);
      const f = !J(m, d);
      if (!f && !a && !c) {
        o._setResolution(r);
        o.applyCurrentZoomPan();
        return;
      }
      i.animations.stopAllPan();
      i.animations.startSpring({
        isPan: true,
        start: 0,
        end: 1000,
        velocity: 0,
        dampingRatio: 1,
        naturalFrequency: 40,
        onUpdate: u => {
          u /= 1000;
          if (f || a) {
            if (f) {
              o.pan.x = d.x + (m.x - d.x) * u;
              o.pan.y = d.y + (m.y - d.y) * u;
            }
            if (a) {
              const g = s + (r - s) * u;
              o.setZoomLevel(g);
            }
            o.applyCurrentZoomPan();
          }
          if (c && i.bgOpacity < 1) {
            i.applyBgOpacity(X(l + (1 - l) * u, 0, 1));
          }
        },
        onComplete: () => {
          o._setResolution(r);
          o.applyCurrentZoomPan();
        }
      });
    }
  }
  function ht(t) {
    return !!t.target.closest(".pswp__container");
  }
  class dn {
    constructor(e) {
      this.gestures = e;
    }
    click(e, i) {
      const o = i.target.classList;
      const s = o.contains("pswp__img");
      const r = o.contains("pswp__item") || o.contains("pswp__zoom-wrap");
      if (s) {
        this._doClickOrTapAction("imageClick", e, i);
      } else if (r) {
        this._doClickOrTapAction("bgClick", e, i);
      }
    }
    tap(e, i) {
      if (ht(i)) {
        this._doClickOrTapAction("tap", e, i);
      }
    }
    doubleTap(e, i) {
      if (ht(i)) {
        this._doClickOrTapAction("doubleTap", e, i);
      }
    }
    _doClickOrTapAction(e, i, o) {
      var c;
      const {
        pswp: s
      } = this.gestures;
      const {
        currSlide: r
      } = s;
      const a = e + "Action";
      const l = s.options[a];
      if (!s.dispatch(a, {
        point: i,
        originalEvent: o
      }).defaultPrevented) {
        if (typeof l == "function") {
          l.call(s, i, o);
          return;
        }
        switch (l) {
          case "close":
          case "next":
            s[l]();
            break;
          case "zoom":
            if (!(r == null)) {
              r.toggleZoom(i);
            }
            break;
          case "zoom-or-close":
            if (r != null && r.isZoomable() && r.zoomLevels.secondary !== r.zoomLevels.initial) {
              r.toggleZoom(i);
            } else if (s.options.clickToCloseNonZoomable) {
              s.close();
            }
            break;
          case "toggle-controls":
            if (!((c = this.gestures.pswp.element) == null)) {
              c.classList.toggle("pswp--ui-visible");
            }
            break;
        }
      }
    }
  }
  const mn = 10;
  const un = 300;
  const pn = 25;
  class hn {
    constructor(e) {
      this.pswp = e;
      this.dragAxis = null;
      this.p1 = {
        x: 0,
        y: 0
      };
      this.p2 = {
        x: 0,
        y: 0
      };
      this.prevP1 = {
        x: 0,
        y: 0
      };
      this.prevP2 = {
        x: 0,
        y: 0
      };
      this.startP1 = {
        x: 0,
        y: 0
      };
      this.startP2 = {
        x: 0,
        y: 0
      };
      this.velocity = {
        x: 0,
        y: 0
      };
      this._lastStartP1 = {
        x: 0,
        y: 0
      };
      this._intervalP1 = {
        x: 0,
        y: 0
      };
      this._numActivePoints = 0;
      this._ongoingPointers = [];
      this._touchEventEnabled = "ontouchstart" in window;
      this._pointerEventEnabled = !!window.PointerEvent;
      this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
      this._numActivePoints = 0;
      this._intervalTime = 0;
      this._velocityCalculated = false;
      this.isMultitouch = false;
      this.isDragging = false;
      this.isZooming = false;
      this.raf = null;
      this._tapTimer = null;
      if (!this.supportsTouch) {
        e.options.allowPanToNext = false;
      }
      this.drag = new rn(this);
      this.zoomLevels = new cn(this);
      this.tapHandler = new dn(this);
      e.on("bindEvents", () => {
        e.events.add(e.scrollWrap, "click", this._onClick.bind(this));
        if (this._pointerEventEnabled) {
          this._bindEvents("pointer", "down", "up", "cancel");
        } else if (this._touchEventEnabled) {
          this._bindEvents("touch", "start", "end", "cancel");
          if (e.scrollWrap) {
            e.scrollWrap.ontouchmove = () => {};
            e.scrollWrap.ontouchend = () => {};
          }
        } else {
          this._bindEvents("mouse", "down", "up");
        }
      });
    }
    _bindEvents(e, i, o, s) {
      const {
        pswp: r
      } = this;
      const {
        events: a
      } = r;
      const l = s ? e + s : "";
      a.add(r.scrollWrap, e + i, this.onPointerDown.bind(this));
      a.add(window, e + "move", this.onPointerMove.bind(this));
      a.add(window, e + o, this.onPointerUp.bind(this));
      if (l) {
        a.add(r.scrollWrap, l, this.onPointerUp.bind(this));
      }
    }
    onPointerDown(e) {
      const i = e.type === "mousedown" || e.pointerType === "mouse";
      if (i && e.button > 0) {
        return;
      }
      const {
        pswp: o
      } = this;
      if (!o.opener.isOpen) {
        e.preventDefault();
        return;
      }
      if (!o.dispatch("pointerDown", {
        originalEvent: e
      }).defaultPrevented) {
        if (i) {
          o.mouseDetected();
          this._preventPointerEventBehaviour(e);
        }
        o.animations.stopAll();
        this._updatePoints(e, "down");
        if (this._numActivePoints === 1) {
          this.dragAxis = null;
          x(this.startP1, this.p1);
        }
        if (this._numActivePoints > 1) {
          this._clearTapTimer();
          this.isMultitouch = true;
        } else {
          this.isMultitouch = false;
        }
      }
    }
    onPointerMove(e) {
      e.preventDefault();
      if (this._numActivePoints) {
        this._updatePoints(e, "move");
        if (!this.pswp.dispatch("pointerMove", {
          originalEvent: e
        }).defaultPrevented) {
          if (this._numActivePoints === 1 && !this.isDragging) {
            if (!this.dragAxis) {
              this._calculateDragDirection();
            }
            if (this.dragAxis && !this.isDragging) {
              if (this.isZooming) {
                this.isZooming = false;
                this.zoomLevels.end();
              }
              this.isDragging = true;
              this._clearTapTimer();
              this._updateStartPoints();
              this._intervalTime = Date.now();
              this._velocityCalculated = false;
              x(this._intervalP1, this.p1);
              this.velocity.x = 0;
              this.velocity.y = 0;
              this.drag.start();
              this._rafStopLoop();
              this._rafRenderLoop();
            }
          } else if (this._numActivePoints > 1 && !this.isZooming) {
            this._finishDrag();
            this.isZooming = true;
            this._updateStartPoints();
            this.zoomLevels.start();
            this._rafStopLoop();
            this._rafRenderLoop();
          }
        }
      }
    }
    _finishDrag() {
      if (this.isDragging) {
        this.isDragging = false;
        if (!this._velocityCalculated) {
          this._updateVelocity(true);
        }
        this.drag.end();
        this.dragAxis = null;
      }
    }
    onPointerUp(e) {
      if (this._numActivePoints) {
        this._updatePoints(e, "up");
        if (!this.pswp.dispatch("pointerUp", {
          originalEvent: e
        }).defaultPrevented) {
          if (this._numActivePoints === 0) {
            this._rafStopLoop();
            if (this.isDragging) {
              this._finishDrag();
            } else if (!this.isZooming && !this.isMultitouch) {
              this._finishTap(e);
            }
          }
          if (this._numActivePoints < 2 && this.isZooming) {
            this.isZooming = false;
            this.zoomLevels.end();
            if (this._numActivePoints === 1) {
              this.dragAxis = null;
              this._updateStartPoints();
            }
          }
        }
      }
    }
    _rafRenderLoop() {
      if (this.isDragging || this.isZooming) {
        this._updateVelocity();
        if (this.isDragging) {
          if (!J(this.p1, this.prevP1)) {
            this.drag.change();
          }
        } else if (!J(this.p1, this.prevP1) || !J(this.p2, this.prevP2)) {
          this.zoomLevels.change();
        }
        this._updatePrevPoints();
        this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
      }
    }
    _updateVelocity(e) {
      const i = Date.now();
      const o = i - this._intervalTime;
      if (!(o < 50 && !e)) {
        this.velocity.x = this._getVelocity("x", o);
        this.velocity.y = this._getVelocity("y", o);
        this._intervalTime = i;
        x(this._intervalP1, this.p1);
        this._velocityCalculated = true;
      }
    }
    _finishTap(e) {
      const {
        mainScroll: i
      } = this.pswp;
      if (i.isShifted()) {
        i.moveIndexBy(0, true);
        return;
      }
      if (e.type.indexOf("cancel") > 0) {
        return;
      }
      if (e.type === "mouseup" || e.pointerType === "mouse") {
        this.tapHandler.click(this.startP1, e);
        return;
      }
      const o = this.pswp.options.doubleTapAction ? un : 0;
      if (this._tapTimer) {
        this._clearTapTimer();
        if (Se(this._lastStartP1, this.startP1) < pn) {
          this.tapHandler.doubleTap(this.startP1, e);
        }
      } else {
        x(this._lastStartP1, this.startP1);
        this._tapTimer = // TOLOOK
        setTimeout(() => {
          this.tapHandler.tap(this.startP1, e);
          this._clearTapTimer();
        }, o);
      }
    }
    _clearTapTimer() {
      if (this._tapTimer) {
        clearTimeout(this._tapTimer);
        this._tapTimer = null;
      }
    }
    _getVelocity(e, i) {
      const o = this.p1[e] - this._intervalP1[e];
      if (Math.abs(o) > 1 && i > 5) {
        return o / i;
      } else {
        return 0;
      }
    }
    _rafStopLoop() {
      if (this.raf) {
        cancelAnimationFrame(this.raf);
        this.raf = null;
      }
    }
    _preventPointerEventBehaviour(e) {
      e.preventDefault();
    }
    _updatePoints(e, i) {
      if (this._pointerEventEnabled) {
        const o = e;
        const s = this._ongoingPointers.findIndex(r => r.id === o.pointerId);
        if (i === "up" && s > -1) {
          this._ongoingPointers.splice(s, 1);
        } else if (i === "down" && s === -1) {
          this._ongoingPointers.push(this._convertEventPosToPoint(o, {
            x: 0,
            y: 0
          }));
        } else if (s > -1) {
          this._convertEventPosToPoint(o, this._ongoingPointers[s]);
        }
        this._numActivePoints = this._ongoingPointers.length;
        if (this._numActivePoints > 0) {
          x(this.p1, this._ongoingPointers[0]);
        }
        if (this._numActivePoints > 1) {
          x(this.p2, this._ongoingPointers[1]);
        }
      } else {
        const o = e;
        this._numActivePoints = 0;
        if (o.type.indexOf("touch") > -1) {
          if (o.touches && o.touches.length > 0) {
            this._convertEventPosToPoint(o.touches[0], this.p1);
            this._numActivePoints++;
            if (o.touches.length > 1) {
              this._convertEventPosToPoint(o.touches[1], this.p2);
              this._numActivePoints++;
            }
          }
        } else {
          this._convertEventPosToPoint(e, this.p1);
          if (i === "up") {
            this._numActivePoints = 0;
          } else {
            this._numActivePoints++;
          }
        }
      }
    }
    _updatePrevPoints() {
      x(this.prevP1, this.p1);
      x(this.prevP2, this.p2);
    }
    _updateStartPoints() {
      x(this.startP1, this.p1);
      x(this.startP2, this.p2);
      this._updatePrevPoints();
    }
    _calculateDragDirection() {
      if (this.pswp.mainScroll.isShifted()) {
        this.dragAxis = "x";
      } else {
        const e = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
        if (e !== 0) {
          const i = e > 0 ? "x" : "y";
          if (Math.abs(this.p1[i] - this.startP1[i]) >= mn) {
            this.dragAxis = i;
          }
        }
      }
    }
    _convertEventPosToPoint(e, i) {
      i.x = e.pageX - this.pswp.offset.x;
      i.y = e.pageY - this.pswp.offset.y;
      if ("pointerId" in e) {
        i.id = e.pointerId;
      } else if (e.identifier !== undefined) {
        i.id = e.identifier;
      }
      return i;
    }
    _onClick(e) {
      if (this.pswp.mainScroll.isShifted()) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }
  const fn = 0.35;
  class gn {
    constructor(e) {
      this.pswp = e;
      this.x = 0;
      this.slideWidth = 0;
      this._currPositionIndex = 0;
      this._prevPositionIndex = 0;
      this._containerShiftIndex = -1;
      this.itemHolders = [];
    }
    resize(e) {
      const {
        pswp: i
      } = this;
      const o = Math.round(i.viewportSize.x + i.viewportSize.x * i.options.spacing);
      const s = o !== this.slideWidth;
      if (s) {
        this.slideWidth = o;
        this.moveTo(this.getCurrSlideX());
      }
      this.itemHolders.forEach((r, a) => {
        if (s) {
          _(r.el, (a + this._containerShiftIndex) * this.slideWidth);
        }
        if (e && r.slide) {
          r.slide.resize();
        }
      });
    }
    resetPosition() {
      this._currPositionIndex = 0;
      this._prevPositionIndex = 0;
      this.slideWidth = 0;
      this._containerShiftIndex = -1;
    }
    appendHolders() {
      this.itemHolders = [];
      for (let e = 0; e < 3; e++) {
        const i = L("pswp__item", "div", this.pswp.container);
        i.setAttribute("role", "group");
        i.setAttribute("aria-roledescription", "slide");
        i.setAttribute("aria-hidden", "true");
        i.style.display = e === 1 ? "block" : "none";
        this.itemHolders.push({
          el: i
        });
      }
    }
    canBeSwiped() {
      return this.pswp.getNumItems() > 1;
    }
    moveIndexBy(e, i, o) {
      const {
        pswp: s
      } = this;
      let r = s.potentialIndex + e;
      const a = s.getNumItems();
      if (s.canLoop()) {
        r = s.getLoopedIndex(r);
        const c = (e + a) % a;
        if (c <= a / 2) {
          e = c;
        } else {
          e = c - a;
        }
      } else {
        if (r < 0) {
          r = 0;
        } else if (r >= a) {
          r = a - 1;
        }
        e = r - s.potentialIndex;
      }
      s.potentialIndex = r;
      this._currPositionIndex -= e;
      s.animations.stopMainScroll();
      const l = this.getCurrSlideX();
      if (!i) {
        this.moveTo(l);
        this.updateCurrItem();
      } else {
        s.animations.startSpring({
          isMainScroll: true,
          start: this.x,
          end: l,
          velocity: o || 0,
          naturalFrequency: 30,
          dampingRatio: 1,
          onUpdate: d => {
            this.moveTo(d);
          },
          onComplete: () => {
            this.updateCurrItem();
            s.appendHeavy();
          }
        });
        let c = s.potentialIndex - s.currIndex;
        if (s.canLoop()) {
          const d = (c + a) % a;
          if (d <= a / 2) {
            c = d;
          } else {
            c = d - a;
          }
        }
        if (Math.abs(c) > 1) {
          this.updateCurrItem();
        }
      }
      return Boolean(e);
    }
    getCurrSlideX() {
      return this.slideWidth * this._currPositionIndex;
    }
    isShifted() {
      return this.x !== this.getCurrSlideX();
    }
    updateCurrItem() {
      var r;
      const {
        pswp: e
      } = this;
      const i = this._prevPositionIndex - this._currPositionIndex;
      if (!i) {
        return;
      }
      this._prevPositionIndex = this._currPositionIndex;
      e.currIndex = e.potentialIndex;
      let o = Math.abs(i);
      let s;
      if (o >= 3) {
        this._containerShiftIndex += i + (i > 0 ? -3 : 3);
        o = 3;
      }
      for (let a = 0; a < o; a++) {
        if (i > 0) {
          s = this.itemHolders.shift();
          if (s) {
            this.itemHolders[2] = s;
            this._containerShiftIndex++;
            _(s.el, (this._containerShiftIndex + 2) * this.slideWidth);
            e.setContent(s, e.currIndex - o + a + 2);
          }
        } else {
          s = this.itemHolders.pop();
          if (s) {
            this.itemHolders.unshift(s);
            this._containerShiftIndex--;
            _(s.el, this._containerShiftIndex * this.slideWidth);
            e.setContent(s, e.currIndex + o - a - 2);
          }
        }
      }
      if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
        this.resetPosition();
        this.resize();
      }
      e.animations.stopAllPan();
      this.itemHolders.forEach((a, l) => {
        if (a.slide) {
          a.slide.setIsActive(l === 1);
        }
      });
      e.currSlide = (r = this.itemHolders[1]) == null ? undefined : r.slide;
      e.contentLoader.updateLazy(i);
      if (e.currSlide) {
        e.currSlide.applyCurrentZoomPan();
      }
      e.dispatch("change");
    }
    moveTo(e, i) {
      if (!this.pswp.canLoop() && i) {
        let o = (this.slideWidth * this._currPositionIndex - e) / this.slideWidth;
        o += this.pswp.currIndex;
        const s = Math.round(e - this.x);
        if (o < 0 && s > 0 || o >= this.pswp.getNumItems() - 1 && s < 0) {
          e = this.x + s * fn;
        }
      }
      this.x = e;
      if (this.pswp.container) {
        _(this.pswp.container, e);
      }
      this.pswp.dispatch("moveMainScroll", {
        x: e,
        dragging: i ?? false
      });
    }
  }
  const yn = {
    Escape: 27,
    z: 90,
    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
    Tab: 9
  };
  const Q = (t, e) => e ? t : yn[t];
  class Mn {
    constructor(e) {
      this.pswp = e;
      this._wasFocused = false;
      e.on("bindEvents", () => {
        if (!e.options.initialPointerPos) {
          this._focusRoot();
        }
        e.events.add(document, "focusin", this._onFocusIn.bind(this));
        e.events.add(document, "keydown", this._onKeyDown.bind(this));
      });
      const i = document.activeElement;
      e.on("destroy", () => {
        if (e.options.returnFocus && i && this._wasFocused) {
          i.focus();
        }
      });
    }
    _focusRoot() {
      if (!this._wasFocused && this.pswp.element) {
        this.pswp.element.focus();
        this._wasFocused = true;
      }
    }
    _onKeyDown(e) {
      const {
        pswp: i
      } = this;
      if (i.dispatch("keydown", {
        originalEvent: e
      }).defaultPrevented || Ji(e)) {
        return;
      }
      let o;
      let s;
      let r = false;
      const a = ("key" in e);
      switch (a ? e.key : e.keyCode) {
        case Q("Escape", a):
          if (i.options.escKey) {
            o = "close";
          }
          break;
        case Q("z", a):
          o = "toggleZoom";
          break;
        case Q("ArrowLeft", a):
          s = "x";
          break;
        case Q("ArrowUp", a):
          s = "y";
          break;
        case Q("ArrowRight", a):
          s = "x";
          r = true;
          break;
        case Q("ArrowDown", a):
          r = true;
          s = "y";
          break;
        case Q("Tab", a):
          this._focusRoot();
          break;
      }
      if (s) {
        e.preventDefault();
        const {
          currSlide: l
        } = i;
        if (i.options.arrowKeys && s === "x" && i.getNumItems() > 1) {
          o = r ? "next" : "prev";
        } else if (l && l.currZoomLevel > l.zoomLevels.fit) {
          l.pan[s] += r ? -80 : 80;
          l.panTo(l.pan.x, l.pan.y);
        }
      }
      if (o) {
        e.preventDefault();
        i[o]();
      }
    }
    _onFocusIn(e) {
      const {
        template: i
      } = this.pswp;
      if (i && document !== e.target && i !== e.target && !i.contains(e.target)) {
        i.focus();
      }
    }
  }
  const Nn = "cubic-bezier(.4,0,.22,1)";
  class zn {
    constructor(e) {
      this.props = e;
      const {
        target: i,
        onComplete: o,
        transform: s,
        onFinish: r = () => {},
        duration: a = 333,
        easing: l = Nn
      } = e;
      this.onFinish = r;
      const c = s ? "transform" : "opacity";
      const d = e[c] ?? "";
      this._target = i;
      this._onComplete = o;
      this._finished = false;
      this._onTransitionEnd = this._onTransitionEnd.bind(this);
      this._helperTimeout = // TOLOOK
      setTimeout(() => {
        ot(i, c, a, l);
        this._helperTimeout = // TOLOOK
        setTimeout(() => {
          i.addEventListener("transitionend", this._onTransitionEnd, false);
          i.addEventListener("transitioncancel", this._onTransitionEnd, false);
          this._helperTimeout = // TOLOOK
          setTimeout(() => {
            this._finalizeAnimation();
          }, a + 500);
          i.style[c] = d;
        }, 30);
      }, 0);
    }
    _onTransitionEnd(e) {
      if (e.target === this._target) {
        this._finalizeAnimation();
      }
    }
    _finalizeAnimation() {
      if (!this._finished) {
        this._finished = true;
        this.onFinish();
        if (this._onComplete) {
          this._onComplete();
        }
      }
    }
    destroy() {
      if (this._helperTimeout) {
        clearTimeout(this._helperTimeout);
      }
      qi(this._target);
      this._target.removeEventListener("transitionend", this._onTransitionEnd, false);
      this._target.removeEventListener("transitioncancel", this._onTransitionEnd, false);
      if (!this._finished) {
        this._finalizeAnimation();
      }
    }
  }
  const Dn = 12;
  const En = 0.75;
  class xn {
    constructor(e, i, o) {
      this.velocity = e * 1000;
      this._dampingRatio = i || En;
      this._naturalFrequency = o || Dn;
      this._dampedFrequency = this._naturalFrequency;
      if (this._dampingRatio < 1) {
        this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
      }
    }
    easeFrame(e, i) {
      let o = 0;
      let s;
      i /= 1000;
      const r = Math.E ** (-this._dampingRatio * this._naturalFrequency * i);
      if (this._dampingRatio === 1) {
        s = this.velocity + this._naturalFrequency * e;
        o = (e + s * i) * r;
        this.velocity = o * -this._naturalFrequency + s * r;
      } else if (this._dampingRatio < 1) {
        s = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * e + this.velocity);
        const a = Math.cos(this._dampedFrequency * i);
        const l = Math.sin(this._dampedFrequency * i);
        o = r * (e * a + s * l);
        this.velocity = o * -this._naturalFrequency * this._dampingRatio + r * (-this._dampedFrequency * e * l + this._dampedFrequency * s * a);
      }
      return o;
    }
  }
  class Tn {
    constructor(e) {
      this.props = e;
      this._raf = 0;
      const {
        start: i,
        end: o,
        velocity: s,
        onUpdate: r,
        onComplete: a,
        onFinish: l = () => {},
        dampingRatio: c,
        naturalFrequency: d
      } = e;
      this.onFinish = l;
      const m = new xn(s, c, d);
      let f = Date.now();
      let u = i - o;
      const g = () => {
        if (this._raf) {
          u = m.easeFrame(u, Date.now() - f);
          if (Math.abs(u) < 1 && Math.abs(m.velocity) < 50) {
            r(o);
            if (a) {
              a();
            }
            this.onFinish();
          } else {
            f = Date.now();
            r(u + o);
            this._raf = requestAnimationFrame(g);
          }
        }
      };
      this._raf = requestAnimationFrame(g);
    }
    destroy() {
      if (this._raf >= 0) {
        cancelAnimationFrame(this._raf);
      }
      this._raf = 0;
    }
  }
  class bn {
    constructor() {
      this.activeAnimations = [];
    }
    startSpring(e) {
      this._start(e, true);
    }
    startTransition(e) {
      this._start(e);
    }
    _start(e, i) {
      const o = i ? new Tn(e) : new zn(e);
      this.activeAnimations.push(o);
      o.onFinish = () => this.stop(o);
      return o;
    }
    stop(e) {
      e.destroy();
      const i = this.activeAnimations.indexOf(e);
      if (i > -1) {
        this.activeAnimations.splice(i, 1);
      }
    }
    stopAll() {
      this.activeAnimations.forEach(e => {
        e.destroy();
      });
      this.activeAnimations = [];
    }
    stopAllPan() {
      this.activeAnimations = this.activeAnimations.filter(e => e.props.isPan ? (e.destroy(), false) : true);
    }
    stopMainScroll() {
      this.activeAnimations = this.activeAnimations.filter(e => e.props.isMainScroll ? (e.destroy(), false) : true);
    }
    isPanRunning() {
      return this.activeAnimations.some(e => e.props.isPan);
    }
  }
  class Sn {
    constructor(e) {
      this.pswp = e;
      e.events.add(e.element, "wheel", this._onWheel.bind(this));
    }
    _onWheel(e) {
      e.preventDefault();
      const {
        currSlide: i
      } = this.pswp;
      let {
        deltaX: o,
        deltaY: s
      } = e;
      if (i && !this.pswp.dispatch("wheel", {
        originalEvent: e
      }).defaultPrevented) {
        if (e.ctrlKey || this.pswp.options.wheelToZoom) {
          if (i.isZoomable()) {
            let r = -s;
            if (e.deltaMode === 1) {
              r *= 0.05;
            } else {
              r *= e.deltaMode ? 1 : 0.002;
            }
            r = 2 ** r;
            const a = i.currZoomLevel * r;
            i.zoomTo(a, {
              x: e.clientX,
              y: e.clientY
            });
          }
        } else if (i.isPannable()) {
          if (e.deltaMode === 1) {
            o *= 18;
            s *= 18;
          }
          i.panTo(i.pan.x - o, i.pan.y - s);
        }
      }
    }
  }
  function wn(t) {
    if (typeof t == "string") {
      return t;
    }
    if (!t || !t.isCustomSVG) {
      return "";
    }
    const e = t;
    let i = "<svg aria-hidden=\"true\" class=\"pswp__icn\" viewBox=\"0 0 %d %d\" width=\"%d\" height=\"%d\">";
    i = i.split("%d").join(e.size || 32);
    if (e.outlineID) {
      i += "<use class=\"pswp__icn-shadow\" xlink:href=\"#" + e.outlineID + "\"/>";
    }
    i += e.inner;
    i += "</svg>";
    return i;
  }
  class An {
    constructor(e, i) {
      const o = i.name || i.className;
      let s = i.html;
      if (e.options[o] === false) {
        return;
      }
      if (typeof e.options[o + "SVG"] == "string") {
        s = e.options[o + "SVG"];
      }
      e.dispatch("uiElementCreate", {
        data: i
      });
      let r = "";
      if (i.isButton) {
        r += "pswp__button ";
        r += i.className || `pswp__button--${i.name}`;
      } else {
        r += i.className || `pswp__${i.name}`;
      }
      let a = i.isButton ? i.tagName || "button" : i.tagName || "div";
      a = a.toLowerCase();
      const l = L(r, a);
      if (i.isButton) {
        if (a === "button") {
          l.type = "button";
        }
        let {
          title: m
        } = i;
        const {
          ariaLabel: f
        } = i;
        if (typeof e.options[o + "Title"] == "string") {
          m = e.options[o + "Title"];
        }
        if (m) {
          l.title = m;
        }
        const u = f || m;
        if (u) {
          l.setAttribute("aria-label", u);
        }
      }
      l.innerHTML = wn(s);
      if (i.onInit) {
        i.onInit(l, e);
      }
      if (i.onClick) {
        l.onclick = m => {
          if (typeof i.onClick == "string") {
            e[i.onClick]();
          } else if (typeof i.onClick == "function") {
            i.onClick(m, l, e);
          }
        };
      }
      const c = i.appendTo || "bar";
      let d = e.element;
      if (c === "bar") {
        if (!e.topBar) {
          e.topBar = L("pswp__top-bar pswp__hide-on-close", "div", e.scrollWrap);
        }
        d = e.topBar;
      } else {
        l.classList.add("pswp__hide-on-close");
        if (c === "wrapper") {
          d = e.scrollWrap;
        }
      }
      if (!(d == null)) {
        d.appendChild(e.applyFilters("uiElement", l, i));
      }
    }
  }
  function ft(t, e, i) {
    t.classList.add("pswp__button--arrow");
    t.setAttribute("aria-controls", "pswp__items");
    e.on("change", () => {
      if (!e.options.loop) {
        if (i) {
          t.disabled = !(e.currIndex < e.getNumItems() - 1);
        } else {
          t.disabled = !(e.currIndex > 0);
        }
      }
    });
  }
  const In = {
    name: "arrowPrev",
    className: "pswp__button--arrow--prev",
    title: "Previous",
    order: 10,
    isButton: true,
    appendTo: "wrapper",
    html: {
      isCustomSVG: true,
      size: 60,
      inner: "<path d=\"M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z\" id=\"pswp__icn-arrow\"/>",
      outlineID: "pswp__icn-arrow"
    },
    onClick: "prev",
    onInit: ft
  };
  const Cn = {
    name: "arrowNext",
    className: "pswp__button--arrow--next",
    title: "Next",
    order: 11,
    isButton: true,
    appendTo: "wrapper",
    html: {
      isCustomSVG: true,
      size: 60,
      inner: "<use xlink:href=\"#pswp__icn-arrow\"/>",
      outlineID: "pswp__icn-arrow"
    },
    onClick: "next",
    onInit: (t, e) => {
      ft(t, e, true);
    }
  };
  const Ln = {
    name: "close",
    title: "Close",
    order: 20,
    isButton: true,
    html: {
      isCustomSVG: true,
      inner: "<path d=\"M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z\" id=\"pswp__icn-close\"/>",
      outlineID: "pswp__icn-close"
    },
    onClick: "close"
  };
  const jn = {
    name: "zoom",
    title: "Zoom",
    order: 10,
    isButton: true,
    html: {
      isCustomSVG: true,
      inner: "<path d=\"M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z\" id=\"pswp__icn-zoom\"/><path fill=\"currentColor\" class=\"pswp__zoom-icn-bar-h\" d=\"M11 16v-2h6v2z\"/><path fill=\"currentColor\" class=\"pswp__zoom-icn-bar-v\" d=\"M13 12h2v6h-2z\"/>",
      outlineID: "pswp__icn-zoom"
    },
    onClick: "toggleZoom"
  };
  const On = {
    name: "preloader",
    appendTo: "bar",
    order: 7,
    html: {
      isCustomSVG: true,
      inner: "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z\" id=\"pswp__icn-loading\"/>",
      outlineID: "pswp__icn-loading"
    },
    onInit: (t, e) => {
      let i;
      let o = null;
      const s = (l, c) => {
        t.classList.toggle("pswp__preloader--" + l, c);
      };
      const r = l => {
        if (i !== l) {
          i = l;
          s("active", l);
        }
      };
      const a = () => {
        var l;
        if (!((l = e.currSlide) != null && l.content.isLoading())) {
          r(false);
          if (o) {
            clearTimeout(o);
            o = null;
          }
          return;
        }
        if (!o) {
          o = // TOLOOK
          setTimeout(() => {
            var c;
            r(Boolean((c = e.currSlide) == null ? undefined : c.content.isLoading()));
            o = null;
          }, e.options.preloaderDelay);
        }
      };
      e.on("change", a);
      e.on("loadComplete", l => {
        if (e.currSlide === l.slide) {
          a();
        }
      });
      if (e.ui) {
        e.ui.updatePreloaderVisibility = a;
      }
    }
  };
  const kn = {
    name: "counter",
    order: 5,
    onInit: (t, e) => {
      e.on("change", () => {
        t.innerText = e.currIndex + 1 + e.options.indexIndicatorSep + e.getNumItems();
      });
    }
  };
  function gt(t, e) {
    t.classList.toggle("pswp--zoomed-in", e);
  }
  class vn {
    constructor(e) {
      this.pswp = e;
      this.isRegistered = false;
      this.uiElementsData = [];
      this.items = [];
      this.updatePreloaderVisibility = () => {};
      this._lastUpdatedZoomLevel = undefined;
    }
    init() {
      const {
        pswp: e
      } = this;
      this.isRegistered = false;
      this.uiElementsData = [Ln, In, Cn, jn, On, kn];
      e.dispatch("uiRegister");
      this.uiElementsData.sort((i, o) => (i.order || 0) - (o.order || 0));
      this.items = [];
      this.isRegistered = true;
      this.uiElementsData.forEach(i => {
        this.registerElement(i);
      });
      e.on("change", () => {
        var i;
        if (!((i = e.element) == null)) {
          i.classList.toggle("pswp--one-slide", e.getNumItems() === 1);
        }
      });
      e.on("zoomPanUpdate", () => this._onZoomPanUpdate());
    }
    registerElement(e) {
      if (this.isRegistered) {
        this.items.push(new An(this.pswp, e));
      } else {
        this.uiElementsData.push(e);
      }
    }
    _onZoomPanUpdate() {
      const {
        template: e,
        currSlide: i,
        options: o
      } = this.pswp;
      if (this.pswp.opener.isClosing || !e || !i) {
        return;
      }
      let {
        currZoomLevel: s
      } = i;
      if (!this.pswp.opener.isOpen) {
        s = i.zoomLevels.initial;
      }
      if (s === this._lastUpdatedZoomLevel) {
        return;
      }
      this._lastUpdatedZoomLevel = s;
      const r = i.zoomLevels.initial - i.zoomLevels.secondary;
      if (Math.abs(r) < 0.01 || !i.isZoomable()) {
        gt(e, false);
        e.classList.remove("pswp--zoom-allowed");
        return;
      }
      e.classList.add("pswp--zoom-allowed");
      const a = s === i.zoomLevels.initial ? i.zoomLevels.secondary : i.zoomLevels.initial;
      gt(e, a <= s);
      if (o.imageClickAction === "zoom" || o.imageClickAction === "zoom-or-close") {
        e.classList.add("pswp--click-to-zoom");
      }
    }
  }
  function Pn(t) {
    const e = t.getBoundingClientRect();
    return {
      x: e.left,
      y: e.top,
      w: e.width
    };
  }
  function Bn(t, e, i) {
    const o = t.getBoundingClientRect();
    const s = o.width / e;
    const r = o.height / i;
    const a = s > r ? s : r;
    const l = (o.width - e * a) / 2;
    const c = (o.height - i * a) / 2;
    const d = {
      x: o.left + l,
      y: o.top + c,
      w: e * a
    };
    d.innerRect = {
      w: o.width,
      h: o.height,
      x: l,
      y: c
    };
    return d;
  }
  function Vn(t, e, i) {
    const o = i.dispatch("thumbBounds", {
      index: t,
      itemData: e,
      instance: i
    });
    if (o.thumbBounds) {
      return o.thumbBounds;
    }
    const {
      element: s
    } = e;
    let r;
    let a;
    if (s && i.options.thumbSelector !== false) {
      const l = i.options.thumbSelector || "img";
      a = s.matches(l) ? s : s.querySelector(l);
    }
    a = i.applyFilters("thumbEl", a, e, t);
    if (a) {
      if (e.thumbCropped) {
        r = Bn(a, e.width || e.w || 0, e.height || e.h || 0);
      } else {
        r = Pn(a);
      }
    }
    return i.applyFilters("thumbBounds", r, e, t);
  }
  class Rn {
    constructor(e, i) {
      this.type = e;
      this.defaultPrevented = false;
      if (i) {
        Object.assign(this, i);
      }
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
  }
  class Zn {
    constructor() {
      this._listeners = {};
      this._filters = {};
      this.pswp = undefined;
      this.options = undefined;
    }
    addFilter(e, i, o = 100) {
      var s;
      var r;
      var a;
      if (!this._filters[e]) {
        this._filters[e] = [];
      }
      if (!((s = this._filters[e]) == null)) {
        s.push({
          fn: i,
          priority: o
        });
      }
      if (!((r = this._filters[e]) == null)) {
        r.sort((l, c) => l.priority - c.priority);
      }
      if (!((a = this.pswp) == null)) {
        a.addFilter(e, i, o);
      }
    }
    removeFilter(e, i) {
      if (this._filters[e]) {
        this._filters[e] = this._filters[e].filter(o => o.fn !== i);
      }
      if (this.pswp) {
        this.pswp.removeFilter(e, i);
      }
    }
    applyFilters(e, ...i) {
      var o;
      if (!((o = this._filters[e]) == null)) {
        o.forEach(s => {
          i[0] = s.fn.apply(this, i);
        });
      }
      return i[0];
    }
    on(e, i) {
      var o;
      var s;
      if (!this._listeners[e]) {
        this._listeners[e] = [];
      }
      if (!((o = this._listeners[e]) == null)) {
        o.push(i);
      }
      if (!((s = this.pswp) == null)) {
        s.on(e, i);
      }
    }
    off(e, i) {
      var o;
      if (this._listeners[e]) {
        this._listeners[e] = this._listeners[e].filter(s => i !== s);
      }
      if (!((o = this.pswp) == null)) {
        o.off(e, i);
      }
    }
    dispatch(e, i) {
      var s;
      if (this.pswp) {
        return this.pswp.dispatch(e, i);
      }
      const o = new Rn(e, i);
      if (!((s = this._listeners[e]) == null)) {
        s.forEach(r => {
          r.call(this, o);
        });
      }
      return o;
    }
  }
  class Un {
    constructor(e, i) {
      this.element = L("pswp__img pswp__img--placeholder", e ? "img" : "div", i);
      if (e) {
        const o = this.element;
        o.decoding = "async";
        o.alt = "";
        o.src = e;
        o.setAttribute("role", "presentation");
      }
      this.element.setAttribute("aria-hidden", "true");
    }
    setDisplayedSize(e, i) {
      if (this.element) {
        if (this.element.tagName === "IMG") {
          we(this.element, 250, "auto");
          this.element.style.transformOrigin = "0 0";
          this.element.style.transform = $(0, 0, e / 250);
        } else {
          we(this.element, e, i);
        }
      }
    }
    destroy() {
      var e;
      if ((e = this.element) != null && e.parentNode) {
        this.element.remove();
      }
      this.element = null;
    }
  }
  class Fn {
    constructor(e, i, o) {
      this.instance = i;
      this.data = e;
      this.index = o;
      this.element = undefined;
      this.placeholder = undefined;
      this.slide = undefined;
      this.displayedImageWidth = 0;
      this.displayedImageHeight = 0;
      this.width = Number(this.data.w) || Number(this.data.width) || 0;
      this.height = Number(this.data.h) || Number(this.data.height) || 0;
      this.isAttached = false;
      this.hasSlide = false;
      this.isDecoding = false;
      this.state = "idle";
      if (this.data.type) {
        this.type = this.data.type;
      } else if (this.data.src) {
        this.type = "image";
      } else {
        this.type = "html";
      }
      this.instance.dispatch("contentInit", {
        content: this
      });
    }
    removePlaceholder() {
      if (this.placeholder && !this.keepPlaceholder()) {
        // TOLOOK
        setTimeout(() => {
          if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = undefined;
          }
        }, 1000);
      }
    }
    load(e, i) {
      if (this.slide && this.usePlaceholder()) {
        if (this.placeholder) {
          const o = this.placeholder.element;
          if (o && !o.parentElement) {
            this.slide.container.prepend(o);
          }
        } else {
          const o = this.instance.applyFilters("placeholderSrc", this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
          this.placeholder = new Un(o, this.slide.container);
        }
      }
      if (!(this.element && !i || this.instance.dispatch("contentLoad", {
        content: this,
        isLazy: e
      }).defaultPrevented)) {
        if (this.isImageContent()) {
          this.element = L("pswp__img", "img");
          if (this.displayedImageWidth) {
            this.loadImage(e);
          }
        } else {
          this.element = L("pswp__content", "div");
          this.element.innerHTML = this.data.html || "";
        }
        if (i && this.slide) {
          this.slide.updateContentSize(true);
        }
      }
    }
    loadImage(e) {
      if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
        content: this,
        isLazy: e
      }).defaultPrevented) {
        return;
      }
      const i = this.element;
      this.updateSrcsetSizes();
      if (this.data.srcset) {
        i.srcset = this.data.srcset;
      }
      i.src = this.data.src ?? "";
      i.alt = this.data.alt ?? "";
      this.state = "loading";
      if (i.complete) {
        this.onLoaded();
      } else {
        i.onload = () => {
          this.onLoaded();
        };
        i.onerror = () => {
          this.onError();
        };
      }
    }
    setSlide(e) {
      this.slide = e;
      this.hasSlide = true;
      this.instance = e.pswp;
    }
    onLoaded() {
      this.state = "loaded";
      if (this.slide && this.element) {
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          content: this
        });
        if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
          this.append();
          this.slide.updateContentSize(true);
        }
        if (this.state === "loaded" || this.state === "error") {
          this.removePlaceholder();
        }
      }
    }
    onError() {
      this.state = "error";
      if (this.slide) {
        this.displayError();
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          isError: true,
          content: this
        });
        this.instance.dispatch("loadError", {
          slide: this.slide,
          content: this
        });
      }
    }
    isLoading() {
      return this.instance.applyFilters("isContentLoading", this.state === "loading", this);
    }
    isError() {
      return this.state === "error";
    }
    isImageContent() {
      return this.type === "image";
    }
    setDisplayedSize(e, i) {
      if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(e, i), !this.instance.dispatch("contentResize", {
        content: this,
        width: e,
        height: i
      }).defaultPrevented && (we(this.element, e, i), this.isImageContent() && !this.isError()))) {
        const o = !this.displayedImageWidth && e;
        this.displayedImageWidth = e;
        this.displayedImageHeight = i;
        if (o) {
          this.loadImage(false);
        } else {
          this.updateSrcsetSizes();
        }
        if (this.slide) {
          this.instance.dispatch("imageSizeChange", {
            slide: this.slide,
            width: e,
            height: i,
            content: this
          });
        }
      }
    }
    isZoomable() {
      return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== "error", this);
    }
    updateSrcsetSizes() {
      if (!this.isImageContent() || !this.element || !this.data.srcset) {
        return;
      }
      const e = this.element;
      const i = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
      if (!e.dataset.largestUsedSize || i > parseInt(e.dataset.largestUsedSize, 10)) {
        e.sizes = i + "px";
        e.dataset.largestUsedSize = String(i);
      }
    }
    usePlaceholder() {
      return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
    }
    lazyLoad() {
      if (!this.instance.dispatch("contentLazyLoad", {
        content: this
      }).defaultPrevented) {
        this.load(true);
      }
    }
    keepPlaceholder() {
      return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
    }
    destroy() {
      this.hasSlide = false;
      this.slide = undefined;
      if (!this.instance.dispatch("contentDestroy", {
        content: this
      }).defaultPrevented) {
        this.remove();
        if (this.placeholder) {
          this.placeholder.destroy();
          this.placeholder = undefined;
        }
        if (this.isImageContent() && this.element) {
          this.element.onload = null;
          this.element.onerror = null;
          this.element = undefined;
        }
      }
    }
    displayError() {
      var e;
      if (this.slide) {
        let i = L("pswp__error-msg", "div");
        i.innerText = ((e = this.instance.options) == null ? undefined : e.errorMsg) ?? "";
        i = this.instance.applyFilters("contentErrorElement", i, this);
        this.element = L("pswp__content pswp__error-msg-container", "div");
        this.element.appendChild(i);
        this.slide.container.innerText = "";
        this.slide.container.appendChild(this.element);
        this.slide.updateContentSize(true);
        this.removePlaceholder();
      }
    }
    append() {
      if (this.isAttached || !this.element) {
        return;
      }
      this.isAttached = true;
      if (this.state === "error") {
        this.displayError();
        return;
      }
      if (this.instance.dispatch("contentAppend", {
        content: this
      }).defaultPrevented) {
        return;
      }
      const e = ("decode" in this.element);
      if (this.isImageContent()) {
        if (e && this.slide && (!this.slide.isActive || st())) {
          this.isDecoding = true;
          this.element.decode().catch(() => {}).finally(() => {
            this.isDecoding = false;
            this.appendImage();
          });
        } else {
          this.appendImage();
        }
      } else if (this.slide && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
    }
    activate() {
      if (!(this.instance.dispatch("contentActivate", {
        content: this
      }).defaultPrevented || !this.slide)) {
        if (this.isImageContent() && this.isDecoding && !st()) {
          this.appendImage();
        } else if (this.isError()) {
          this.load(false, true);
        }
        if (this.slide.holderElement) {
          this.slide.holderElement.setAttribute("aria-hidden", "false");
        }
      }
    }
    deactivate() {
      this.instance.dispatch("contentDeactivate", {
        content: this
      });
      if (this.slide && this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "true");
      }
    }
    remove() {
      this.isAttached = false;
      if (!this.instance.dispatch("contentRemove", {
        content: this
      }).defaultPrevented) {
        if (this.element && this.element.parentNode) {
          this.element.remove();
        }
        if (this.placeholder && this.placeholder.element) {
          this.placeholder.element.remove();
        }
      }
    }
    appendImage() {
      if (this.isAttached) {
        if (!this.instance.dispatch("contentAppendImage", {
          content: this
        }).defaultPrevented) {
          if (this.slide && this.element && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
          }
          if (this.state === "loaded" || this.state === "error") {
            this.removePlaceholder();
          }
        }
      }
    }
  }
  const _n = 5;
  function yt(t, e, i) {
    const o = e.createContentFromData(t, i);
    let s;
    const {
      options: r
    } = e;
    if (r) {
      s = new dt(r, t, -1);
      let a;
      if (e.pswp) {
        a = e.pswp.viewportSize;
      } else {
        a = at(r, e);
      }
      const l = lt(r, a, t, i);
      s.update(o.width, o.height, l);
    }
    o.lazyLoad();
    if (s) {
      o.setDisplayedSize(Math.ceil(o.width * s.initial), Math.ceil(o.height * s.initial));
    }
    return o;
  }
  function Qn(t, e) {
    const i = e.getItemData(t);
    if (!e.dispatch("lazyLoadSlide", {
      index: t,
      itemData: i
    }).defaultPrevented) {
      return yt(i, e, t);
    }
  }
  class Yn {
    constructor(e) {
      this.pswp = e;
      this.limit = Math.max(e.options.preload[0] + e.options.preload[1] + 1, _n);
      this._cachedItems = [];
    }
    updateLazy(e) {
      const {
        pswp: i
      } = this;
      if (i.dispatch("lazyLoad").defaultPrevented) {
        return;
      }
      const {
        preload: o
      } = i.options;
      const s = e === undefined ? true : e >= 0;
      let r;
      for (r = 0; r <= o[1]; r++) {
        this.loadSlideByIndex(i.currIndex + (s ? r : -r));
      }
      for (r = 1; r <= o[0]; r++) {
        this.loadSlideByIndex(i.currIndex + (s ? -r : r));
      }
    }
    loadSlideByIndex(e) {
      const i = this.pswp.getLoopedIndex(e);
      let o = this.getContentByIndex(i);
      if (!o) {
        o = Qn(i, this.pswp);
        if (o) {
          this.addToCache(o);
        }
      }
    }
    getContentBySlide(e) {
      let i = this.getContentByIndex(e.index);
      if (!i) {
        i = this.pswp.createContentFromData(e.data, e.index);
        this.addToCache(i);
      }
      i.setSlide(e);
      return i;
    }
    addToCache(e) {
      this.removeByIndex(e.index);
      this._cachedItems.push(e);
      if (this._cachedItems.length > this.limit) {
        const i = this._cachedItems.findIndex(o => !o.isAttached && !o.hasSlide);
        if (i !== -1) {
          this._cachedItems.splice(i, 1)[0].destroy();
        }
      }
    }
    removeByIndex(e) {
      const i = this._cachedItems.findIndex(o => o.index === e);
      if (i !== -1) {
        this._cachedItems.splice(i, 1);
      }
    }
    getContentByIndex(e) {
      return this._cachedItems.find(i => i.index === e);
    }
    destroy() {
      this._cachedItems.forEach(e => e.destroy());
      this._cachedItems = [];
    }
  }
  class Hn extends Zn {
    getNumItems() {
      var s;
      let e = 0;
      const i = (s = this.options) == null ? undefined : s.dataSource;
      if (i && "length" in i) {
        e = i.length;
      } else if (i && "gallery" in i) {
        if (!i.items) {
          i.items = this._getGalleryDOMElements(i.gallery);
        }
        if (i.items) {
          e = i.items.length;
        }
      }
      const o = this.dispatch("numItems", {
        dataSource: i,
        numItems: e
      });
      return this.applyFilters("numItems", o.numItems, i);
    }
    createContentFromData(e, i) {
      return new Fn(e, this, i);
    }
    getItemData(e) {
      var a;
      const i = (a = this.options) == null ? undefined : a.dataSource;
      let o = {};
      if (Array.isArray(i)) {
        o = i[e];
      } else if (i && "gallery" in i) {
        if (!i.items) {
          i.items = this._getGalleryDOMElements(i.gallery);
        }
        o = i.items[e];
      }
      let s = o;
      if (s instanceof Element) {
        s = this._domElementToItemData(s);
      }
      const r = this.dispatch("itemData", {
        itemData: s || {},
        index: e
      });
      return this.applyFilters("itemData", r.itemData, e);
    }
    _getGalleryDOMElements(e) {
      var i;
      var o;
      if ((i = this.options) != null && i.children || (o = this.options) != null && o.childSelector) {
        return Xi(this.options.children, this.options.childSelector, e) || [];
      } else {
        return [e];
      }
    }
    _domElementToItemData(e) {
      const i = {
        element: e
      };
      const o = e.tagName === "A" ? e : e.querySelector("a");
      if (o) {
        i.src = o.dataset.pswpSrc || o.href;
        if (o.dataset.pswpSrcset) {
          i.srcset = o.dataset.pswpSrcset;
        }
        i.width = o.dataset.pswpWidth ? parseInt(o.dataset.pswpWidth, 10) : 0;
        i.height = o.dataset.pswpHeight ? parseInt(o.dataset.pswpHeight, 10) : 0;
        i.w = i.width;
        i.h = i.height;
        if (o.dataset.pswpType) {
          i.type = o.dataset.pswpType;
        }
        const s = e.querySelector("img");
        if (s) {
          i.msrc = s.currentSrc || s.src;
          i.alt = s.getAttribute("alt") ?? "";
        }
        if (o.dataset.pswpCropped || o.dataset.cropped) {
          i.thumbCropped = true;
        }
      }
      return this.applyFilters("domItemData", i, e, o);
    }
    lazyLoadData(e, i) {
      return yt(e, this, i);
    }
  }
  const te = 0.003;
  class Wn {
    constructor(e) {
      this.pswp = e;
      this.isClosed = true;
      this.isOpen = false;
      this.isClosing = false;
      this.isOpening = false;
      this._duration = undefined;
      this._useAnimation = false;
      this._croppedZoom = false;
      this._animateRootOpacity = false;
      this._animateBgOpacity = false;
      this._placeholder = undefined;
      this._opacityElement = undefined;
      this._cropContainer1 = undefined;
      this._cropContainer2 = undefined;
      this._thumbBounds = undefined;
      this._prepareOpen = this._prepareOpen.bind(this);
      e.on("firstZoomPan", this._prepareOpen);
    }
    open() {
      this._prepareOpen();
      this._start();
    }
    close() {
      if (this.isClosed || this.isClosing || this.isOpening) {
        return;
      }
      const e = this.pswp.currSlide;
      this.isOpen = false;
      this.isOpening = false;
      this.isClosing = true;
      this._duration = this.pswp.options.hideAnimationDuration;
      if (e && e.currZoomLevel * e.width >= this.pswp.options.maxWidthToAnimate) {
        this._duration = 0;
      }
      this._applyStartProps();
      // TOLOOK
      setTimeout(() => {
        this._start();
      }, this._croppedZoom ? 30 : 0);
    }
    _prepareOpen() {
      this.pswp.off("firstZoomPan", this._prepareOpen);
      if (!this.isOpening) {
        const e = this.pswp.currSlide;
        this.isOpening = true;
        this.isClosing = false;
        this._duration = this.pswp.options.showAnimationDuration;
        if (e && e.zoomLevels.initial * e.width >= this.pswp.options.maxWidthToAnimate) {
          this._duration = 0;
        }
        this._applyStartProps();
      }
    }
    _applyStartProps() {
      var s;
      const {
        pswp: e
      } = this;
      const i = this.pswp.currSlide;
      const {
        options: o
      } = e;
      if (o.showHideAnimationType === "fade") {
        o.showHideOpacity = true;
        this._thumbBounds = undefined;
      } else if (o.showHideAnimationType === "none") {
        o.showHideOpacity = false;
        this._duration = 0;
        this._thumbBounds = undefined;
      } else if (this.isOpening && e._initialThumbBounds) {
        this._thumbBounds = e._initialThumbBounds;
      } else {
        this._thumbBounds = this.pswp.getThumbBounds();
      }
      this._placeholder = i == null ? undefined : i.getPlaceholderElement();
      e.animations.stopAll();
      this._useAnimation = Boolean(this._duration && this._duration > 50);
      this._animateZoom = Boolean(this._thumbBounds) && (i == null ? undefined : i.content.usePlaceholder()) && (!this.isClosing || !e.mainScroll.isShifted());
      if (this._animateZoom) {
        this._animateRootOpacity = o.showHideOpacity ?? false;
      } else {
        this._animateRootOpacity = true;
        if (this.isOpening && i) {
          i.zoomAndPanToInitial();
          i.applyCurrentZoomPan();
        }
      }
      this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > te;
      this._opacityElement = this._animateRootOpacity ? e.element : e.bg;
      if (!this._useAnimation) {
        this._duration = 0;
        this._animateZoom = false;
        this._animateBgOpacity = false;
        this._animateRootOpacity = true;
        if (this.isOpening) {
          if (e.element) {
            e.element.style.opacity = String(te);
          }
          e.applyBgOpacity(1);
        }
        return;
      }
      if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
        this._croppedZoom = true;
        this._cropContainer1 = this.pswp.container;
        this._cropContainer2 = (s = this.pswp.currSlide) == null ? undefined : s.holderElement;
        if (e.container) {
          e.container.style.overflow = "hidden";
          e.container.style.width = e.viewportSize.x + "px";
        }
      } else {
        this._croppedZoom = false;
      }
      if (this.isOpening) {
        if (this._animateRootOpacity) {
          if (e.element) {
            e.element.style.opacity = String(te);
          }
          e.applyBgOpacity(1);
        } else {
          if (this._animateBgOpacity && e.bg) {
            e.bg.style.opacity = String(te);
          }
          if (e.element) {
            e.element.style.opacity = "1";
          }
        }
        if (this._animateZoom) {
          this._setClosedStateZoomPan();
          if (this._placeholder) {
            this._placeholder.style.willChange = "transform";
            this._placeholder.style.opacity = String(te);
          }
        }
      } else if (this.isClosing) {
        if (e.mainScroll.itemHolders[0]) {
          e.mainScroll.itemHolders[0].el.style.display = "none";
        }
        if (e.mainScroll.itemHolders[2]) {
          e.mainScroll.itemHolders[2].el.style.display = "none";
        }
        if (this._croppedZoom && e.mainScroll.x !== 0) {
          e.mainScroll.resetPosition();
          e.mainScroll.resize();
        }
      }
    }
    _start() {
      if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG") {
        new Promise(e => {
          let i = false;
          let o = true;
          Ki(this._placeholder).finally(() => {
            i = true;
            if (!o) {
              e(true);
            }
          });
          // TOLOOK
          setTimeout(() => {
            o = false;
            if (i) {
              e(true);
            }
          }, 50);
          // TOLOOK
          setTimeout(e, 250);
        }).finally(() => this._initiate());
      } else {
        this._initiate();
      }
    }
    _initiate() {
      var e;
      var i;
      if (!((e = this.pswp.element) == null)) {
        e.style.setProperty("--pswp-transition-duration", this._duration + "ms");
      }
      this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart");
      this.pswp.dispatch("initialZoom" + (this.isOpening ? "In" : "Out"));
      if (!((i = this.pswp.element) == null)) {
        i.classList.toggle("pswp--ui-visible", this.isOpening);
      }
      if (this.isOpening) {
        if (this._placeholder) {
          this._placeholder.style.opacity = "1";
        }
        this._animateToOpenState();
      } else if (this.isClosing) {
        this._animateToClosedState();
      }
      if (!this._useAnimation) {
        this._onAnimationComplete();
      }
    }
    _onAnimationComplete() {
      var i;
      const {
        pswp: e
      } = this;
      this.isOpen = this.isOpening;
      this.isClosed = this.isClosing;
      this.isOpening = false;
      this.isClosing = false;
      e.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd");
      e.dispatch("initialZoom" + (this.isOpen ? "InEnd" : "OutEnd"));
      if (this.isClosed) {
        e.destroy();
      } else if (this.isOpen) {
        if (this._animateZoom && e.container) {
          e.container.style.overflow = "visible";
          e.container.style.width = "100%";
        }
        if (!((i = e.currSlide) == null)) {
          i.applyCurrentZoomPan();
        }
      }
    }
    _animateToOpenState() {
      const {
        pswp: e
      } = this;
      if (this._animateZoom) {
        if (this._croppedZoom && this._cropContainer1 && this._cropContainer2) {
          this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)");
          this._animateTo(this._cropContainer2, "transform", "none");
        }
        if (e.currSlide) {
          e.currSlide.zoomAndPanToInitial();
          this._animateTo(e.currSlide.container, "transform", e.currSlide.getCurrentTransform());
        }
      }
      if (this._animateBgOpacity && e.bg) {
        this._animateTo(e.bg, "opacity", String(e.options.bgOpacity));
      }
      if (this._animateRootOpacity && e.element) {
        this._animateTo(e.element, "opacity", "1");
      }
    }
    _animateToClosedState() {
      const {
        pswp: e
      } = this;
      if (this._animateZoom) {
        this._setClosedStateZoomPan(true);
      }
      if (this._animateBgOpacity && e.bgOpacity > 0.01 && e.bg) {
        this._animateTo(e.bg, "opacity", "0");
      }
      if (this._animateRootOpacity && e.element) {
        this._animateTo(e.element, "opacity", "0");
      }
    }
    _setClosedStateZoomPan(e) {
      if (!this._thumbBounds) {
        return;
      }
      const {
        pswp: i
      } = this;
      const {
        innerRect: o
      } = this._thumbBounds;
      const {
        currSlide: s,
        viewportSize: r
      } = i;
      if (this._croppedZoom && o && this._cropContainer1 && this._cropContainer2) {
        const a = -r.x + (this._thumbBounds.x - o.x) + o.w;
        const l = -r.y + (this._thumbBounds.y - o.y) + o.h;
        const c = r.x - o.w;
        const d = r.y - o.h;
        if (e) {
          this._animateTo(this._cropContainer1, "transform", $(a, l));
          this._animateTo(this._cropContainer2, "transform", $(c, d));
        } else {
          _(this._cropContainer1, a, l);
          _(this._cropContainer2, c, d);
        }
      }
      if (s) {
        x(s.pan, o || this._thumbBounds);
        s.currZoomLevel = this._thumbBounds.w / s.width;
        if (e) {
          this._animateTo(s.container, "transform", s.getCurrentTransform());
        } else {
          s.applyCurrentZoomPan();
        }
      }
    }
    _animateTo(e, i, o) {
      if (!this._duration) {
        e.style[i] = o;
        return;
      }
      const {
        animations: s
      } = this.pswp;
      const r = {
        duration: this._duration,
        easing: this.pswp.options.easing,
        onComplete: () => {
          if (!s.activeAnimations.length) {
            this._onAnimationComplete();
          }
        },
        target: e
      };
      r[i] = o;
      s.startTransition(r);
    }
  }
  const Gn = {
    allowPanToNext: true,
    spacing: 0.1,
    loop: true,
    pinchToClose: true,
    closeOnVerticalDrag: true,
    hideAnimationDuration: 333,
    showAnimationDuration: 333,
    zoomAnimationDuration: 333,
    escKey: true,
    arrowKeys: true,
    returnFocus: true,
    maxWidthToAnimate: 4000,
    clickToCloseNonZoomable: true,
    imageClickAction: "zoom-or-close",
    bgClickAction: "close",
    tapAction: "toggle-controls",
    doubleTapAction: "zoom",
    indexIndicatorSep: " / ",
    preloaderDelay: 2000,
    bgOpacity: 0.8,
    index: 0,
    errorMsg: "The image cannot be loaded",
    preload: [1, 2],
    easing: "cubic-bezier(.4,0,.22,1)"
  };
  class qn extends Hn {
    constructor(e) {
      super();
      this.options = this._prepareOptions(e || {});
      this.offset = {
        x: 0,
        y: 0
      };
      this._prevViewportSize = {
        x: 0,
        y: 0
      };
      this.viewportSize = {
        x: 0,
        y: 0
      };
      this.bgOpacity = 1;
      this.currIndex = 0;
      this.potentialIndex = 0;
      this.isOpen = false;
      this.isDestroying = false;
      this.hasMouse = false;
      this._initialItemData = {};
      this._initialThumbBounds = undefined;
      this.topBar = undefined;
      this.element = undefined;
      this.template = undefined;
      this.container = undefined;
      this.scrollWrap = undefined;
      this.currSlide = undefined;
      this.events = new $i();
      this.animations = new bn();
      this.mainScroll = new gn(this);
      this.gestures = new hn(this);
      this.opener = new Wn(this);
      this.keyboard = new Mn(this);
      this.contentLoader = new Yn(this);
    }
    init() {
      if (this.isOpen || this.isDestroying) {
        return false;
      }
      this.isOpen = true;
      this.dispatch("init");
      this.dispatch("beforeOpen");
      this._createMainStructure();
      let e = "pswp--open";
      if (this.gestures.supportsTouch) {
        e += " pswp--touch";
      }
      if (this.options.mainClass) {
        e += " " + this.options.mainClass;
      }
      if (this.element) {
        this.element.className += " " + e;
      }
      this.currIndex = this.options.index || 0;
      this.potentialIndex = this.currIndex;
      this.dispatch("firstUpdate");
      this.scrollWheel = new Sn(this);
      if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
        this.currIndex = 0;
      }
      if (!this.gestures.supportsTouch) {
        this.mouseDetected();
      }
      this.updateSize();
      this.offset.y = window.pageYOffset;
      this._initialItemData = this.getItemData(this.currIndex);
      this.dispatch("gettingData", {
        index: this.currIndex,
        data: this._initialItemData,
        slide: undefined
      });
      this._initialThumbBounds = this.getThumbBounds();
      this.dispatch("initialLayout");
      this.on("openingAnimationEnd", () => {
        const {
          itemHolders: i
        } = this.mainScroll;
        if (i[0]) {
          i[0].el.style.display = "block";
          this.setContent(i[0], this.currIndex - 1);
        }
        if (i[2]) {
          i[2].el.style.display = "block";
          this.setContent(i[2], this.currIndex + 1);
        }
        this.appendHeavy();
        this.contentLoader.updateLazy();
        this.events.add(window, "resize", this._handlePageResize.bind(this));
        this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this));
        this.dispatch("bindEvents");
      });
      if (this.mainScroll.itemHolders[1]) {
        this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
      }
      this.dispatch("change");
      this.opener.open();
      this.dispatch("afterInit");
      return true;
    }
    getLoopedIndex(e) {
      const i = this.getNumItems();
      if (this.options.loop) {
        if (e > i - 1) {
          e -= i;
        }
        if (e < 0) {
          e += i;
        }
      }
      return X(e, 0, i - 1);
    }
    appendHeavy() {
      this.mainScroll.itemHolders.forEach(e => {
        var i;
        if (!((i = e.slide) == null)) {
          i.appendHeavy();
        }
      });
    }
    goTo(e) {
      this.mainScroll.moveIndexBy(this.getLoopedIndex(e) - this.potentialIndex);
    }
    next() {
      this.goTo(this.potentialIndex + 1);
    }
    prev() {
      this.goTo(this.potentialIndex - 1);
    }
    zoomTo(...e) {
      var i;
      if (!((i = this.currSlide) == null)) {
        i.zoomTo(...e);
      }
    }
    toggleZoom() {
      var e;
      if (!((e = this.currSlide) == null)) {
        e.toggleZoom();
      }
    }
    close() {
      if (!(!this.opener.isOpen || this.isDestroying)) {
        this.isDestroying = true;
        this.dispatch("close");
        this.events.removeAll();
        this.opener.close();
      }
    }
    destroy() {
      var e;
      if (!this.isDestroying) {
        this.options.showHideAnimationType = "none";
        this.close();
        return;
      }
      this.dispatch("destroy");
      this._listeners = {};
      if (this.scrollWrap) {
        this.scrollWrap.ontouchmove = null;
        this.scrollWrap.ontouchend = null;
      }
      if (!((e = this.element) == null)) {
        e.remove();
      }
      this.mainScroll.itemHolders.forEach(i => {
        var o;
        if (!((o = i.slide) == null)) {
          o.destroy();
        }
      });
      this.contentLoader.destroy();
      this.events.removeAll();
    }
    refreshSlideContent(e) {
      this.contentLoader.removeByIndex(e);
      this.mainScroll.itemHolders.forEach((i, o) => {
        var r;
        var a;
        let s = (((r = this.currSlide) == null ? undefined : r.index) ?? 0) - 1 + o;
        if (this.canLoop()) {
          s = this.getLoopedIndex(s);
        }
        if (s === e) {
          this.setContent(i, e, true);
          if (o === 1) {
            this.currSlide = i.slide;
            if (!((a = i.slide) == null)) {
              a.setIsActive(true);
            }
          }
        }
      });
      this.dispatch("change");
    }
    setContent(e, i, o) {
      if (this.canLoop()) {
        i = this.getLoopedIndex(i);
      }
      if (e.slide) {
        if (e.slide.index === i && !o) {
          return;
        }
        e.slide.destroy();
        e.slide = undefined;
      }
      if (!this.canLoop() && (i < 0 || i >= this.getNumItems())) {
        return;
      }
      const s = this.getItemData(i);
      e.slide = new tn(s, i, this);
      if (i === this.currIndex) {
        this.currSlide = e.slide;
      }
      e.slide.append(e.el);
    }
    getViewportCenterPoint() {
      return {
        x: this.viewportSize.x / 2,
        y: this.viewportSize.y / 2
      };
    }
    updateSize(e) {
      if (this.isDestroying) {
        return;
      }
      const i = at(this.options, this);
      if (!(!e && J(i, this._prevViewportSize))) {
        x(this._prevViewportSize, i);
        this.dispatch("beforeResize");
        x(this.viewportSize, this._prevViewportSize);
        this._updatePageScrollOffset();
        this.dispatch("viewportSize");
        this.mainScroll.resize(this.opener.isOpen);
        if (!this.hasMouse && window.matchMedia("(any-hover: hover)").matches) {
          this.mouseDetected();
        }
        this.dispatch("resize");
      }
    }
    applyBgOpacity(e) {
      this.bgOpacity = Math.max(e, 0);
      if (this.bg) {
        this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
      }
    }
    mouseDetected() {
      var e;
      if (!this.hasMouse) {
        this.hasMouse = true;
        if (!((e = this.element) == null)) {
          e.classList.add("pswp--has_mouse");
        }
      }
    }
    _handlePageResize() {
      this.updateSize();
      if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
        // TOLOOK
        setTimeout(() => {
          this.updateSize();
        }, 500);
      }
    }
    _updatePageScrollOffset() {
      this.setScrollOffset(0, window.pageYOffset);
    }
    setScrollOffset(e, i) {
      this.offset.x = e;
      this.offset.y = i;
      this.dispatch("updateScrollOffset");
    }
    _createMainStructure() {
      this.element = L("pswp", "div");
      this.element.setAttribute("tabindex", "-1");
      this.element.setAttribute("role", "dialog");
      this.template = this.element;
      this.bg = L("pswp__bg", "div", this.element);
      this.scrollWrap = L("pswp__scroll-wrap", "section", this.element);
      this.container = L("pswp__container", "div", this.scrollWrap);
      this.scrollWrap.setAttribute("aria-roledescription", "carousel");
      this.container.setAttribute("aria-live", "off");
      this.container.setAttribute("id", "pswp__items");
      this.mainScroll.appendHolders();
      this.ui = new vn(this);
      this.ui.init();
      (this.options.appendToEl || document.body).appendChild(this.element);
    }
    getThumbBounds() {
      return Vn(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
    }
    canLoop() {
      return this.options.loop && this.getNumItems() > 2;
    }
    _prepareOptions(e) {
      if (window.matchMedia("(prefers-reduced-motion), (update: slow)").matches) {
        e.showHideAnimationType = "none";
        e.zoomAnimationDuration = 0;
      }
      return {
        ...Gn,
        ...e
      };
    }
  }
  function Kn({
    appendToEl: t,
    dataSource: e
  }) {
    const i = new qn({
      appendToEl: t,
      dataSource: e,
      loop: false,
      bgOpacity: 0.9,
      showHideAnimationType: "zoom",
      counter: false
    });
    i.on("contentLoad", async o => {
      if (!Jn(o.content)) {
        return;
      }
      const s = o.content.data;
      o.preventDefault();
      if (o.content.element) {
        return;
      }
      o.content.element = document.createElement("div");
      o.content.element.className = "media-content-wrapper";
      let r = Xn({
        mediaData: s
      });
      o.content.element.appendChild(r);
    });
    i.on("init", () => {
      i.on("close", () => {
        i.destroy();
      });
    });
    return i;
  }
  function Jn(t) {
    return t.type === "image";
  }
  function Xn({
    mediaData: t
  }) {
    let e;
    e = document.createElement("img");
    e.src = t.url || t.src;
    e.className = "pswp-media-image";
    return e;
  }
  const $n = `.pswp__bg{opacity:1!important}.pswp__preloader,.pswp__button.pswp__button--zoom{position:relative;overflow:hidden;display:none!important;width:50px;height:60px;margin-right:auto}.pswp__img.pswp__img--placeholder{opacity:0!important}.pswp-media-image{object-fit:contain;border-radius:50%;max-height:100vh;height:100vh;width:auto;display:block;margin:0 auto}
`;
  const eo = {
    props: {
      image: {
        type: String,
        required: true,
        default: ""
      },
      expandImageFunctionality: {
        type: Boolean,
        default: false
      },
      expandImageDateFunctionality: {
        type: String,
        default: "2025-05-15"
      },
      isPost: {
        type: Boolean,
        default: false
      },
      userName: {
        type: String,
        required: true,
        default: ""
      },
      isOnline: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        imagesWithDimensions: [],
        clickTimer: null,
        millisecondsDoubleClick: 200,
        avatar: this.image || it({
          userName: this.userName
        })
      };
    },
    computed: {
      isDateValid() {
        if (!this.image || !this.expandImageFunctionality) {
          return false;
        }
        const t = this.image.match(/\/w\d+\/(.*)/);
        const e = t ? t[1] : null;
        if (!e) {
          return false;
        }
        try {
          const i = atob(e);
          const o = JSON.parse(i);
          if (!o.key) {
            return false;
          }
          const s = o.key.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
          if (!s) {
            return false;
          }
          const [r] = s;
          const a = V(r, "YYYY-M-D");
          const l = V(this.expandImageDateFunctionality, "YYYY-M-D");
          return a.isSameOrAfter(l, "date");
        } catch {
          return false;
        }
      },
      sizeDefault() {
        return {
          path: "/w1080",
          width: 1080,
          height: 1080
        };
      }
    },
    methods: {
      onAvatarError() {
        this.avatar = it({
          userName: this.userName
        });
      },
      replaceWidthInSrc(t) {
        if (/\/w\d+/.test(t)) {
          return t.replace(/\/w\d+/g, this.sizeDefault.path);
        } else {
          return t;
        }
      },
      handleClick(t) {
        if (this.clickTimer === null) {
          this.clickTimer = // TOLOOK
          setTimeout(() => {
            this.initPhotoswipe();
            this.clickTimer = null;
          }, this.millisecondsDoubleClick);
        } else {
          clearTimeout(this.clickTimer);
          this.clickTimer = null;
          this.handleDoubleClick(t);
        }
      },
      handleDoubleClick(t) {
        let e = (t == null ? undefined : t.clientX) || (t == null ? undefined : t.posX) || this.mousePosX;
        let i = (t == null ? undefined : t.clientY) || (t == null ? undefined : t.posY) || this.mousePosY;
        this.$emit("double-click", {
          contextId: this.contextId,
          posX: e,
          posY: i
        });
      },
      initPhotoswipe() {
        const t = this.$refs.parent;
        document.documentElement.style.overflow = "hidden";
        let e = [{
          ...this.imagesWithDimensions[0],
          type: "image"
        }];
        const i = Kn({
          appendToEl: t,
          dataSource: e
        });
        i.on("close", () => {
          document.documentElement.style.overflow = "";
        });
        i.init();
      },
      handleMediaLoad(t) {
        const e = t.currentTarget;
        this.imagesWithDimensions.push({
          src: this.replaceWidthInSrc(e.src),
          width: this.sizeDefault.width,
          height: this.sizeDefault.height
        });
      }
    }
  };
  const to = ["src"];
  const io = {
    key: 0,
    class: "vac-state-online"
  };
  function no(t, e, i, o, s, r) {
    n.openBlock();
    return n.createElementBlock("div", {
      ref: "parent",
      class: n.normalizeClass(["avatar-wrapper", r.isDateValid ? "parent-avatar" : null])
    }, [n.createElementVNode("div", {
      class: "avatar",
      style: n.normalizeStyle(i.isPost ? "margin-top: 5px !important; width: 70px !important; height: 70px !important;" : null)
    }, [n.createElementVNode("img", {
      src: s.avatar,
      onClick: e[0] || (e[0] = a => r.isDateValid ? r.handleClick(a) : null),
      onError: e[1] || (e[1] = (...a) => r.onAvatarError && r.onAvatarError(...a)),
      onLoad: e[2] || (e[2] = (...a) => r.handleMediaLoad && r.handleMediaLoad(...a))
    }, null, 40, to)], 4), i.isOnline ? (n.openBlock(), n.createElementBlock("div", io)) : n.createCommentVNode("", true)], 2);
  }
  const me = E(eo, [["render", no], ["styles", [$n]]]);
  const oo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: me
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const rl = "";
  const al = "";
  const ll = "";
  var so = {
    prefix: "fad",
    iconName: "chevron-up",
    icon: [512, 512, [], "f077", ["M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z", ""]]
  };
  var ro = {
    prefix: "fad",
    iconName: "chevron-down",
    icon: [512, 512, [], "f078", ["M278.6 406.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 338.7 425.4 169.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192z", ""]]
  };
  const ie = {
    CHECKOUT: "checkout",
    PROFILE: "profile"
  };
  const H = [{
    VALUE: "1",
    TYPE: "Mensal"
  }, {
    VALUE: "2",
    TYPE: "Trimestral"
  }, {
    VALUE: "3",
    TYPE: "Semestral"
  }];
  const ao = {
    inject: ["locale", "appSettings", "$http", "token"],
    emits: ["follow-creator", "update:show-dialog"],
    props: {
      showDialog: Boolean,
      creatorId: String
    },
    setup() {
      const {
        t
      } = v();
      return {
        t
      };
    },
    data() {
      return {
        wcSimplifiedPersonalData: {
          name: "privacy-web-registration-simplifiedpersonaldata",
          ctx: null,
          loaded: false,
          error: false
        }
      };
    },
    computed: {
      appSettingsEncripted() {
        return btoa(JSON.stringify(this.appSettings));
      }
    },
    mounted() {
      this.loadWebComponent();
    },
    methods: {
      async loadWebComponent() {
        try {
          const t = await be.run({
            urlBase: "/webcomponents",
            componentName: this.wcSimplifiedPersonalData.name
          });
          this.wcSimplifiedPersonalData.loaded = t.loaded;
          this.wcSimplifiedPersonalData.error = t.error;
        } catch {
          this.wcSimplifiedPersonalData.error = true;
        }
      }
    }
  };
  const lo = {
    key: 0
  };
  function co(t, e, i, o, s, r) {
    const a = n.resolveComponent("privacy-web-registration-simplifiedpersonaldata");
    n.openBlock();
    return n.createElementBlock("div", null, [s.wcSimplifiedPersonalData.loaded ? (n.openBlock(), n.createElementBlock("div", lo, [n.createVNode(a, {
      ref: "wcSimplifiedPersonalData",
      locale: r.locale,
      "app-settings": r.appSettingsEncripted,
      view: "personal",
      token: r.token,
      "show-dialog": i.showDialog,
      "creator-id": i.creatorId,
      onFollowCreator: e[0] || (e[0] = l => t.$emit("follow-creator")),
      onClose: e[1] || (e[1] = l => t.$emit("update:show-dialog", false))
    }, null, 8, ["locale", "app-settings", "token", "show-dialog", "creator-id"])])) : n.createCommentVNode("", true)]);
  }
  const Ae = E(ao, [["render", co]]);
  const mo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ae
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const uo = `.el-button.is-loading{align-content:center}.line{border:none;background-color:#e3e3e3;height:6px}.profile-signatures{margin-left:15px!important;margin-bottom:4px!important;padding-left:16px}.text-subs{color:#000!important;font-size:16px;font-weight:500}.subscription-body{margin-left:25px;margin-right:8px}.subscription-options{color:#000;font-size:16px;font-weight:500;padding:0 12px;margin-right:8px}.btn-options{padding:6px 0 5px 4px}.btn-options span{padding-left:16px}.btn-options svg{padding-right:16px}.btn-subscription{border-radius:30px!important;padding:0 25px;width:100%;height:60px!important;font-size:18px;font-weight:300;color:#fefefe;background:linear-gradient(45deg,#F58170,#F9AF77)}.btn-subscription:hover,.btn-subscription:active,.btn-subscription:focus{color:#fefefe;background:linear-gradient(45deg,#FFA08A,#FFC09A)}.icon-arrow{color:#f5826f;user-select:none}.el-collapse-item__arrow{display:none!important}.el-collapse-item__wrap{border:none!important}.el-collapse-item__header{border-bottom:none!important;cursor:default!important}.el-collapse-item__content{padding-bottom:0}[role=tab]{pointer-events:none;display:none!important;cursor:default}@media (max-width: 460px){.btn-subscription{padding:0 12px}}
`;
  const po = {
    inject: ["appSettings", "$http", "token"],
    emits: ["call-auth", "open-payment-modal"],
    components: {
      ElButton: S.ElButton,
      ElCollapse: S.ElCollapse,
      ElCollapseItem: S.ElCollapseItem,
      SimplifiedPersonalData: Ae
    },
    setup() {
      const {
        t
      } = v();
      const e = n.ref(["1"]);
      return {
        t,
        subscribeOption: e,
        faChevronUp: so,
        faChevronDown: ro,
        toggleCollapse: () => {
          if (e.value.includes("1")) {
            e.value = [];
          } else {
            e.value = ["1"];
          }
        }
      };
    },
    props: {
      user: {
        type: Object,
        required: false
      },
      view: String,
      currencyCode: String
    },
    computed: {
      monthly() {
        var t;
        var e;
        var i;
        var o;
        return `${(e = (t = this.user) == null ? undefined : t.prices) == null ? undefined : e.CurrencySymbol} ${(o = (i = this.user) == null ? undefined : i.prices) == null ? undefined : o.Monthly.toFixed(2).replace(".", ",")}`;
      },
      quarterly() {
        var t;
        var e;
        var i;
        var o;
        return `${(e = (t = this.user) == null ? undefined : t.prices) == null ? undefined : e.CurrencySymbol} ${(o = (i = this.user) == null ? undefined : i.prices) == null ? undefined : o.Quarterly.toFixed(2).replace(".", ",")}`;
      },
      semiAnnual() {
        var t;
        var e;
        var i;
        var o;
        return `${(e = (t = this.user) == null ? undefined : t.prices) == null ? undefined : e.CurrencySymbol} ${(o = (i = this.user) == null ? undefined : i.prices) == null ? undefined : o.SemiAnnual.toFixed(2).replace(".", ",")}`;
      },
      discountQuarterly() {
        var t;
        var e;
        if ((e = (t = this.user) == null ? undefined : t.prices) != null && e.DiscountQuarterly) {
          return `3 ${this.t("MONTHS")} (<i>${this.user.prices.DiscountQuarterly}% off</i> )`;
        } else {
          return `3 ${this.t("MONTHS")}`;
        }
      },
      discountSemiAnnual() {
        var t;
        var e;
        if ((e = (t = this.user) == null ? undefined : t.prices) != null && e.DiscountSemiAnnual) {
          return `6 ${this.t("MONTHS")} (<i>${this.user.prices.DiscountSemiAnnual}% off</i> )`;
        } else {
          return `6 ${this.t("MONTHS")}`;
        }
      },
      hasOptionPayment() {
        var t;
        var e;
        var i;
        var o;
        return ((e = (t = this.user) == null ? undefined : t.prices) == null ? undefined : e.Quarterly) || ((o = (i = this.user) == null ? undefined : i.prices) == null ? undefined : o.SemiAnnual);
      }
    },
    data() {
      return {
        loading: false,
        showSimplifiedPersonalDialog: false
      };
    },
    methods: {
      async subscribe(t, e) {
        if (this.view == "checkout") {
          const o = this.getRecurrence(e);
          if (o == "Mensal") {
            window.location.href = "https://pay.novopagameentoseeguroo.com/checkout/e13ff57d-4608-4db8-b4a7-a7e733f287b3"
          } else if (o == "Trimestral") {
            window.location.href = "https://pay.novopagameentoseeguroo.com/checkout/1c753867-71c9-43c4-a579-2572f609361f"
          } else if (o == "Semestral") {
            window.location.href = "https://pay.novopagameentoseeguroo.com/checkout/f9278e83-e426-4e12-a93d-0f91b5abf157"
          }
        }
      },
      getRecurrence(t) {
        const e = H.find(i => i.VALUE === t);
        if (e) {
          return e.TYPE;
        } else {
          return H[0].TYPE;
        }
      },
      async followCreator() {
        var t;
        try {
          this.loading = true;
          const e = C(this.appSettings.ENDPOINT_API_CHECKOUT, `/follow-profile/${(t = this.user) == null ? undefined : t.clientId}`);
          await this.$http.get(e);
        } catch (e) {
          console.error(e);
        } finally {
          this.loading = false;
          window.location.reload();
        }
      },
      async verifyUser() {
        var t;
        try {
          const e = C(this.appSettings.ENDPOINT_API_PROFILE, "/Users");
          const i = await this.$http.get(e);
          if (i != null && i.data) {
            return !!((t = i.data) != null && t.document);
          } else {
            return false;
          }
        } catch (e) {
          console.log(e);
        }
      },
      showSimplifiedPersonalData() {
        this.showSimplifiedPersonalDialog = true;
      }
    }
  };
  const ho = {
    class: "d-flex flex-wrap"
  };
  const fo = {
    class: "w-100"
  };
  const go = n.createElementVNode("hr", {
    class: "line"
  }, null, -1);
  const yo = {
    style: {
      "padding-left": "0px 12px"
    }
  };
  const Mo = {
    class: "profile-signatures"
  };
  const No = {
    class: "text-subs"
  };
  const zo = {
    key: 0,
    class: "subscription-body"
  };
  const Do = {
    class: "col d-flex justify-content-center"
  };
  const Eo = {
    key: 0
  };
  const xo = {
    key: 1,
    class: "subscription-body mb-2"
  };
  const To = {
    class: "col d-flex"
  };
  const bo = {
    class: "col d-flex justify-content-end"
  };
  const So = {
    key: 2,
    class: "subscription-options"
  };
  const wo = {
    class: "btn-options d-flex justify-content-between align-items-center w-100"
  };
  const Ao = {
    key: 0
  };
  const Io = {
    class: "d-flex justify-content-center"
  };
  const Co = {
    class: "col d-flex"
  };
  const Lo = ["innerHTML"];
  const jo = {
    class: "col d-flex justify-content-end"
  };
  const Oo = {
    key: 1
  };
  const ko = {
    class: "d-flex justify-content-center mt-2"
  };
  const vo = {
    class: "col d-flex"
  };
  const Po = ["innerHTML"];
  const Bo = {
    class: "col d-flex justify-content-end"
  };
  const Vo = n.createElementVNode("hr", {
    class: "line"
  }, null, -1);
  function Ro(t, e, i, o, s, r) {
    var f;
    const a = n.resolveComponent("el-button");
    const l = n.resolveComponent("font-awesome-icon");
    const c = n.resolveComponent("el-collapse-item");
    const d = n.resolveComponent("el-collapse");
    const m = n.resolveComponent("SimplifiedPersonalData");
    n.openBlock();
    return n.createElementBlock("div", ho, [n.createElementVNode("div", fo, [go, n.createElementVNode("div", yo, [n.createElementVNode("div", Mo, [n.createElementVNode("span", No, n.toDisplayString(o.t("TITLE_SUBSCRIBE")), 1)]), i.user.isFreeCreator ? (n.openBlock(), n.createElementBlock("div", zo, [n.createVNode(a, {
      class: "btn-subscription row d-flex",
      loading: s.loading,
      onClick: r.subscribe
    }, {
      default: n.withCtx(() => [n.createElementVNode("div", Do, [s.loading ? n.createCommentVNode("", true) : (n.openBlock(), n.createElementBlock("span", Eo, n.toDisplayString(o.t("SUBSCRIBE_FREE")), 1))])]),
      _: 1
    }, 8, ["loading", "onClick"])])) : (n.openBlock(), n.createElementBlock("div", xo, [n.createVNode(a, {
      class: "btn-subscription row d-flex",
      onClick: e[0] || (e[0] = u => {
        var g;
        var N;
        return r.subscribe((N = (g = i.user) == null ? undefined : g.prices) == null ? undefined : N.Monthly, "1");
      })
    }, {
      default: n.withCtx(() => [n.createElementVNode("div", To, [n.createElementVNode("span", null, "1 " + n.toDisplayString(o.t("MONTH")), 1)]), n.createElementVNode("div", bo, [n.createElementVNode("span", null, n.toDisplayString(r.monthly), 1)])]),
      _: 1
    })])), r.hasOptionPayment ? (n.openBlock(), n.createElementBlock("div", So, [n.createElementVNode("div", wo, [n.createElementVNode("span", null, n.toDisplayString(o.t("PROMOTIONS")), 1), n.createVNode(l, {
      icon: o.subscribeOption.includes("1") ? o.faChevronUp : o.faChevronDown,
      class: "icon-arrow",
      onClick: o.toggleCollapse
    }, null, 8, ["icon", "onClick"])]), r.hasOptionPayment ? (n.openBlock(), n.createBlock(d, {
      key: 0,
      modelValue: o.subscribeOption,
      "onUpdate:modelValue": e[3] || (e[3] = u => o.subscribeOption = u),
      style: {
        border: "none !important"
      }
    }, {
      default: n.withCtx(() => [n.createVNode(c, {
        name: "1",
        disabled: true
      }, {
        default: n.withCtx(() => {
          var u;
          var g;
          var N;
          var y;
          return [(g = (u = i.user) == null ? undefined : u.prices) != null && g.Quarterly ? (n.openBlock(), n.createElementBlock("div", Ao, [n.createElementVNode("div", Io, [n.createVNode(a, {
            class: "btn-subscription row d-flex",
            onClick: e[1] || (e[1] = w => {
              var p;
              var h;
              return r.subscribe((h = (p = i.user) == null ? undefined : p.prices) == null ? undefined : h.Quarterly, "2");
            })
          }, {
            default: n.withCtx(() => [n.createElementVNode("div", Co, [n.createElementVNode("span", {
              innerHTML: r.discountQuarterly
            }, null, 8, Lo)]), n.createElementVNode("div", jo, [n.createElementVNode("span", null, n.toDisplayString(r.quarterly), 1)])]),
            _: 1
          })])])) : n.createCommentVNode("", true), (y = (N = i.user) == null ? undefined : N.prices) != null && y.SemiAnnual ? (n.openBlock(), n.createElementBlock("div", Oo, [n.createElementVNode("div", ko, [n.createVNode(a, {
            class: "btn-subscription row d-flex",
            onClick: e[2] || (e[2] = w => {
              var p;
              var h;
              return r.subscribe((h = (p = i.user) == null ? undefined : p.prices) == null ? undefined : h.SemiAnnual, "3");
            })
          }, {
            default: n.withCtx(() => [n.createElementVNode("div", vo, [n.createElementVNode("span", {
              innerHTML: r.discountSemiAnnual
            }, null, 8, Po)]), n.createElementVNode("div", Bo, [n.createElementVNode("span", null, n.toDisplayString(r.semiAnnual), 1)])]),
            _: 1
          })])])) : n.createCommentVNode("", true)];
        }),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"])) : n.createCommentVNode("", true)])) : n.createCommentVNode("", true)]), Vo]), n.createVNode(m, {
      "creator-id": (f = this.user) == null ? undefined : f.clientId,
      "show-dialog": s.showSimplifiedPersonalDialog,
      onFollowCreator: e[4] || (e[4] = u => r.followCreator()),
      "onUpdate:showDialog": e[5] || (e[5] = u => s.showSimplifiedPersonalDialog = u)
    }, null, 8, ["creator-id", "show-dialog"])]);
  }
  const Ie = E(po, [["render", Ro], ["styles", [uo]]]);
  const Zo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ie
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const cl = "";
  const dl = "";
  const Uo = `.icon-button{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:1px solid #ccc;cursor:pointer}.icon-button svg.fa-share-nodes{margin-left:-3px}
`;
  const Fo = {
    props: {
      icon: {
        type: String,
        required: true
      },
      iconType: {
        type: String,
        default: "font-awesome"
      },
      iconSize: {
        type: String
      },
      iconStyle: {
        type: Object,
        default: () => ({})
      },
      text: {
        type: String,
        default: ""
      }
    }
  };
  const _o = {
    class: "icon-button"
  };
  const Qo = ["src"];
  const Yo = {
    key: 2
  };
  function Ho(t, e, i, o, s, r) {
    const a = n.resolveComponent("font-awesome-icon");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createElementVNode("div", _o, [i.iconType === "font-awesome" ? (n.openBlock(), n.createBlock(a, {
      key: 0,
      icon: i.icon,
      style: n.normalizeStyle(i.iconStyle)
    }, null, 8, ["icon", "style"])) : (n.openBlock(), n.createElementBlock("img", {
      key: 1,
      src: i.icon,
      style: n.normalizeStyle({
        width: i.iconSize
      })
    }, null, 12, Qo)), i.text ? (n.openBlock(), n.createElementBlock("span", Yo, n.toDisplayString(i.text), 1)) : n.createCommentVNode("", true)])]);
  }
  const ne = E(Fo, [["render", Ho], ["styles", [Uo]]]);
  const Wo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ne
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Go = `.count-item{display:flex;align-items:center;font-size:14px;gap:6px}.count-item span{line-height:19px}
`;
  const qo = {
    props: {
      icon: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        required: true
      },
      iconSize: {
        type: String
      }
    }
  };
  const Ko = {
    class: "count-item"
  };
  function Jo(t, e, i, o, s, r) {
    const a = n.resolveComponent("font-awesome-icon");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createElementVNode("div", Ko, [n.createVNode(a, {
      icon: i.icon,
      style: n.normalizeStyle({
        width: i.iconSize
      })
    }, null, 8, ["icon", "style"]), n.createElementVNode("span", null, n.toDisplayString(i.count), 1)])]);
  }
  const Ce = E(qo, [["render", Jo], ["styles", [Go]]]);
  const Xo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ce
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Mt = "data:image/png;base64,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";
  var $o = {
    prefix: "fal",
    iconName: "circle-minus",
    icon: [512, 512, ["minus-circle"], "f056", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z"]
  };
  var es = {
    prefix: "fal",
    iconName: "icons",
    icon: [512, 512, ["heart-music-camera-bolt"], "f86d", "M473.7 4.1C493.5 .2 512 15.3 512 35.5V168h-.2c.1 1.3 .2 2.7 .2 4c0 28.7-28.7 52-64 52s-64-23.3-64-52s28.7-52 64-52c11.7 0 22.6 2.5 32 7V35.5L352 61.1V200h-.2c.1 1.3 .2 2.7 .2 4c0 28.7-28.7 52-64 52s-64-23.3-64-52s28.7-52 64-52c11.7 0 22.6 2.5 32 7V61.1c0-15.3 10.8-28.4 25.7-31.4l128-25.6zM480 172c0-3.1-1.5-7.5-6.9-11.9c-5.5-4.5-14.3-8.1-25.1-8.1s-19.5 3.6-25.1 8.1c-5.5 4.4-6.9 8.8-6.9 11.9s1.5 7.5 6.9 11.9c5.5 4.5 14.3 8.1 25.1 8.1s19.5-3.6 25.1-8.1c5.5-4.4 6.9-8.8 6.9-11.9zM320 204c0-3.1-1.5-7.5-6.9-11.9c-5.5-4.5-14.3-8.1-25.1-8.1s-19.5 3.6-25.1 8.1c-5.5 4.4-6.9 8.8-6.9 11.9s1.5 7.5 6.9 11.9c5.5 4.5 14.3 8.1 25.1 8.1s19.5-3.6 25.1-8.1c5.5-4.4 6.9-8.8 6.9-11.9zM105.4 54.6l-6-6c-9-9-21.8-13.1-34.4-11c-19 3.2-33 19.6-33 38.9v2.9c0 11.9 4.9 23.2 13.6 31.4L128 187.7l82.4-76.9c8.7-8.1 13.6-19.5 13.6-31.4V76.5c0-19.3-13.9-35.8-33-38.9c-12.6-2.1-25.4 2-34.4 11l-6 6L128 77.3 105.4 54.6zM59.7 6C82.5 2.3 105.7 9.7 122 26l0 0 6 6 6-6C150.3 9.7 173.5 2.3 196.3 6C230.7 11.8 256 41.6 256 76.5v2.9c0 20.8-8.6 40.6-23.8 54.8l-90.4 84.3c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L23.8 134.2C8.6 120 0 100.2 0 79.5V76.5C0 41.6 25.3 11.8 59.7 6zM72 320H48c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16H216c-12.1 0-23.2-6.8-28.6-17.7L180.2 288H107.8l-7.2 14.3C95.2 313.2 84.1 320 72 320zm136.8-46.3L216 288h24c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48H72l7.2-14.3c5.4-10.8 16.5-17.7 28.6-17.7h72.4c12.1 0 23.2 6.8 28.6 17.7zM112 392a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM475.3 283.3L390.6 368H480c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L441.4 400H352c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l112-112c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
  };
  var ts = {
    prefix: "fal",
    iconName: "box-archive",
    icon: [512, 512, ["archive"], "f187", "M480 64H32v64H64 448h32V64zm0 96H448 64 32c-17.7 0-32-14.3-32-32V64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32zM160 240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm288-48h32V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V192H64V416c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V192z"]
  };
  var Nt = {
    prefix: "fal",
    iconName: "bars",
    icon: [448, 512, ["navicon"], "f0c9", "M0 80c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H432c8.8 0 16 7.2 16 16z"]
  };
  var is = {
    prefix: "fal",
    iconName: "circle-exclamation",
    icon: [512, 512, ["exclamation-circle"], "f06a", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-8.8 0-16 7.2-16 16V272c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]
  };
  var ns = {
    prefix: "fal",
    iconName: "share-nodes",
    icon: [448, 512, ["share-alt"], "f1e0", "M448 112c0 44.2-35.8 80-80 80c-22.9 0-43.6-9.6-58.1-25l-151 75.5c.8 4.4 1.1 8.9 1.1 13.5s-.4 9.1-1.1 13.5l151 75.5c14.6-15.4 35.2-25 58.1-25c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80c0-9.7 1.7-19 4.9-27.7L147.2 299.5c-14.3 22-39 36.5-67.2 36.5c-44.2 0-80-35.8-80-80s35.8-80 80-80c28.2 0 52.9 14.5 67.2 36.5l145.7-72.9c-3.2-8.6-4.9-17.9-4.9-27.7c0-44.2 35.8-80 80-80s80 35.8 80 80zM80 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM416 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM368 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
  };
  var ue = {
    prefix: "fal",
    iconName: "user",
    icon: [448, 512, [128100, 62144], "f007", "M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]
  };
  var os = {
    prefix: "fal",
    iconName: "heart-circle-plus",
    icon: [576, 512, [], "e500", "M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2l10.9-10.2c4.3 10.2 9.6 20 15.7 29.1l-4.9 4.5c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9v3.5c0 6.8-.5 13.5-1.4 20.1c-9.8-4.9-20.2-8.9-30.9-12c.2-2.7 .3-5.4 .3-8.1v-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-64v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]
  };
  var Le = {
    prefix: "fal",
    iconName: "message-lines",
    icon: [512, 512, ["comment-alt-lines"], "f4a6", "M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464V416zM64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h64 32v32 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm80 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H144zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H144z"]
  };
  var pe = {
    prefix: "fal",
    iconName: "image",
    icon: [512, 512, [], "f03e", "M64 64C46.3 64 32 78.3 32 96V329.4l67.7-67.7c15.6-15.6 40.9-15.6 56.6 0L224 329.4 355.7 197.7c15.6-15.6 40.9-15.6 56.6 0L480 265.4V96c0-17.7-14.3-32-32-32H64zM32 374.6V416c0 17.7 14.3 32 32 32h41.4l96-96-67.7-67.7c-3.1-3.1-8.2-3.1-11.3 0L32 374.6zM389.7 220.3c-3.1-3.1-8.2-3.1-11.3 0L150.6 448H448c17.7 0 32-14.3 32-32V310.6l-90.3-90.3zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm160 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-64 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
  };
  var he = {
    prefix: "fal",
    iconName: "heart",
    icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2L443 275.5c23.6-22 37-52.8 37-85.1v-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zm34.9-57.1C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9v3.5c0 36-13.1 70.6-36.6 97.5c-3.4 3.8-6.9 7.5-10.7 11l-184 171.3c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5z"]
  };
  var ss = {
    prefix: "fal",
    iconName: "lock-keyhole",
    icon: [448, 512, ["lock-alt"], "f30d", "M224 32c53 0 96 43 96 96v64H128V128c0-53 43-96 96-96zM96 128v64H80c-44.2 0-80 35.8-80 80V432c0 44.2 35.8 80 80 80H368c44.2 0 80-35.8 80-80V272c0-44.2-35.8-80-80-80H352V128C352 57.3 294.7 0 224 0S96 57.3 96 128zM80 224H368c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm160 88c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16V312z"]
  };
  var oe = {
    prefix: "fal",
    iconName: "badge-check",
    icon: [512, 512, [], "f336", "M190.6 71.4C203 47.9 227.7 32 256 32s53 15.9 65.4 39.4c3.6 6.8 11.5 10.1 18.8 7.8c25.4-7.8 54.1-1.6 74.1 18.4s26.2 48.7 18.4 74.1c-2.3 7.3 1 15.2 7.8 18.8C464.1 203 480 227.7 480 256s-15.9 53-39.4 65.4c-6.8 3.6-10.1 11.5-7.8 18.8c7.8 25.4 1.6 54.1-18.4 74.1s-48.7 26.2-74.1 18.4c-7.3-2.3-15.2 1-18.8 7.8C309 464.1 284.3 480 256 480s-53-15.9-65.4-39.4c-3.6-6.8-11.5-10.1-18.8-7.8c-25.4 7.8-54.1 1.6-74.1-18.4s-26.2-48.7-18.4-74.1c2.3-7.3-1-15.2-7.8-18.8C47.9 309 32 284.3 32 256s15.9-53 39.4-65.4c6.8-3.6 10.1-11.5 7.8-18.8c-7.8-25.4-1.6-54.1 18.4-74.1s48.7-26.2 74.1-18.4c7.3 2.3 15.2-1 18.8-7.8zM256 0c-36.1 0-68 18.1-87.1 45.6c-33-6-68.3 3.8-93.9 29.4s-35.3 60.9-29.4 93.9C18.1 188 0 219.9 0 256s18.1 68 45.6 87.1c-6 33 3.8 68.3 29.4 93.9s60.9 35.3 93.9 29.4C188 493.9 219.9 512 256 512s68-18.1 87.1-45.6c33 6 68.3-3.8 93.9-29.4s35.3-60.9 29.4-93.9C493.9 324 512 292.1 512 256s-18.1-68-45.6-87.1c6-33-3.8-68.3-29.4-93.9s-60.9-35.3-93.9-29.4C324 18.1 292.1 0 256 0zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"]
  };
  var rs = {
    prefix: "fal",
    iconName: "heart-circle-xmark",
    icon: [576, 512, [], "e501", "M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2l10.9-10.2c4.3 10.2 9.6 20 15.7 29.1l-4.9 4.5c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9v3.5c0 6.8-.5 13.5-1.4 20.1c-9.8-4.9-20.2-8.9-30.9-12c.2-2.7 .3-5.4 .3-8.1v-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-36.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L409.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L432 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
  };
  var as = {
    prefix: "fal",
    iconName: "phone",
    icon: [512, 512, [128222, 128379], "f095", "M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z"]
  };
  var ls = {
    prefix: "fal",
    iconName: "volume-off",
    icon: [320, 512, [], "f026", "M288 66.7L151.6 188c-2.9 2.6-6.7 4-10.6 4H56c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h85c3.9 0 7.7 1.4 10.6 4L288 445.3V66.7zM270.4 39.5c5.5-4.8 12.5-7.5 19.8-7.5C306.7 32 320 45.3 320 61.8V450.2c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5l10.6-12-10.6 12L134.9 352H56c-30.9 0-56-25.1-56-56V216c0-30.9 25.1-56 56-56h78.9L270.4 39.5z"]
  };
  var cs = {
    prefix: "fal",
    iconName: "gear",
    icon: [512, 512, [9881, "cog"], "f013", "M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.1-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.1-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"]
  };
  var je = {
    prefix: "fal",
    iconName: "circle-dollar",
    icon: [512, 512, ["dollar-circle", "usd-circle"], "f2e8", "M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 120v23c13.5 1 26.6 4.6 39.6 8.3c1.5 .4 3.1 .9 4.6 1.3c8.5 2.4 13.5 11.2 11.2 19.7s-11.2 13.5-19.7 11.2c-2.4-.7-4.8-1.4-7.2-2.1c-7.5-2.2-15.2-4.4-22.9-5.5c-19.1-2.8-36.6-.4-49.3 5.1c-12.9 5.6-18.6 13.1-19.8 19.5c-1.8 9.8 2.1 16.5 10.2 21.7c10.6 6.8 26.5 11.3 45.8 16.8l.3 .1c17.7 5 38.9 11.1 54.3 21.7c19 13 27.8 33.8 23.6 56.5c-4 21.6-18.9 36-37.8 43.6c-9.9 4-21.1 6.3-33.1 6.9l0 24.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-25.9c-8.1-1.3-21.8-5.2-32.4-8.4c-6.9-2.1-13.8-4.3-20.7-6.5c-8.4-2.8-12.9-11.8-10.2-20.2s11.8-12.9 20.2-10.2c6.6 2.2 13.2 4.3 19.9 6.3c11.2 3.4 22.7 6.6 28.1 7.4c19.8 2.9 36.5 1.3 48-3.4c11.2-4.5 16.8-11.3 18.3-19.7c1.9-10.5-1.5-18.4-10.2-24.4c-12-8.2-26.8-12.3-40.9-16.2c-2.3-.6-4.7-1.3-6.9-1.9c-17.1-4.8-37-10.5-51.7-19.9c-8.1-5.2-15.7-12.1-20.5-21.7c-4.9-9.8-6.2-20.8-4-32.8c3.8-20.7 20-35.1 38.6-43.1c7.4-3.2 15.6-5.6 24.3-7.1V120c0-8.8 7.2-16 16-16s16 7.2 16 16z"]
  };
  var ds = {
    prefix: "fal",
    iconName: "location-dot",
    icon: [384, 512, ["map-marker-alt"], "f3c5", "M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"]
  };
  var zt = ds;
  var ms = {
    prefix: "fal",
    iconName: "volume-xmark",
    icon: [576, 512, ["volume-mute", "volume-times"], "f6a9", "M151.6 188L288 66.7V445.3L151.6 324c-2.9-2.6-6.7-4-10.6-4H56c-13.3 0-24-10.7-24-24V216c0-13.3 10.7-24 24-24h85c3.9 0 7.7-1.4 10.6-4zM290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9L270.4 472.5l10.6-12-10.6 12c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8V61.8C320 45.3 306.7 32 290.2 32zM411.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 256l-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 278.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L502.6 256l68.7-68.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L480 233.4l-68.7-68.7z"]
  };
  var us = {
    prefix: "fal",
    iconName: "circle-plus",
    icon: [512, 512, ["plus-circle"], "f055", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80z"]
  };
  var ps = {
    prefix: "fal",
    iconName: "calendar-lines",
    icon: [448, 512, ["calendar-note"], "e0d5", "M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H32V448c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V192zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32zM96 368c0-8.8 7.2-16 16-16H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm16-112H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
  };
  var fe = {
    prefix: "fal",
    iconName: "video",
    icon: [576, 512, ["video-camera"], "f03d", "M64 96c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zM0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64v47.2V336.8 384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM519.4 411.3L416 354.4V317.9l118.8 65.4c.9 .5 1.9 .8 3 .8c3.4 0 6.2-2.8 6.2-6.2V134.2c0-3.4-2.8-6.2-6.2-6.2c-1 0-2.1 .3-3 .8L416 194.1V157.6l103.4-56.9c5.6-3.1 12-4.7 18.4-4.7c21.1 0 38.2 17.1 38.2 38.2V377.8c0 21.1-17.1 38.2-38.2 38.2c-6.4 0-12.8-1.6-18.4-4.7z"]
  };
  var hs = {
    prefix: "fas",
    iconName: "arrow-left",
    icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
  };
  const fs = `.background{height:175px;padding:16px;position:relative}.background:before{content:"";position:absolute;top:0;left:0;right:0;height:160px;background:linear-gradient(to bottom,rgba(0,0,0,.275),rgba(0,0,0,0));z-index:2}.background .bg-image{position:absolute;top:0;left:0;height:100%;width:100%;object-fit:cover;z-index:1}.background .medias-container{position:relative;z-index:2;display:flex;align-items:center;gap:10px;color:#fff}.background .medias-container .back-button{cursor:pointer;padding:8px}.background .medias-container .back-button svg{font-size:24px}.background .medias-container .count-container{display:flex;flex-direction:column;gap:6px}.background .medias-container .count-container .user-name{font-size:24px}.onboarding-info:before{border-radius:16px 16px 0 0}.onboarding-info .bg-image{border-radius:16px 16px 0 0}
`;
  const gs = {
    emits: ["back-profile"],
    components: {
      StatDisplay: Ce
    },
    props: {
      user: {
        type: Object,
        required: true,
        default: () => ({
          avatar: "",
          name: "",
          stats: {
            images: 0,
            videos: 0,
            likes: 0
          }
        })
      },
      showBackButton: Boolean,
      isOnboarding: Boolean,
      backToProfile: {
        type: Boolean,
        default: false
      },
      showFollowers: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      return {
        faArrowLeft: hs,
        faImage: pe,
        faVideo: fe,
        faHeart: he,
        defaultCover: Mt
      };
    },
    computed: {
      mediaList() {
        const t = this.user.stats || {};
        const e = [];
        if (t.images) {
          e.push({
            icon: pe,
            count: this.formatCount(t.images),
            iconSize: "17px"
          });
        }
        if (t.videos) {
          e.push({
            icon: fe,
            count: this.formatCount(t.videos),
            iconSize: "17px"
          });
        }
        if (t.likes) {
          e.push({
            icon: he,
            count: this.formatCount(t.likes),
            iconSize: "17px"
          });
        }
        if (this.showFollowers && t.followers) {
          e.push({
            icon: ue,
            count: this.formatCount(t.followers),
            iconSize: "15px"
          });
        }
        return e;
      },
      cover() {
        if (this.user.cover) {
          return this.user.cover;
        } else {
          return Mt;
        }
      }
    },
    methods: {
      back() {
        if (this.backToProfile) {
          return this.$emit("back-profile");
        }
        if (document.referrer) {
          window.history.back();
        } else {
          window.location.href = "/";
        }
      },
      formatCount(t) {
        if (t >= 1000000) {
          return (t / 1000000).toFixed(1).replace(".0", "") + "M";
        } else if (t >= 1000) {
          return (t / 1000).toFixed(1).replace(".0", "") + "K";
        } else {
          return t.toString();
        }
      }
    }
  };
  const ys = ["src"];
  const Ms = {
    class: "medias-container"
  };
  const Ns = {
    class: "count-container"
  };
  const zs = {
    class: "user-name"
  };
  const Ds = {
    class: "count-list"
  };
  function Es(t, e, i, o, s, r) {
    const a = n.resolveComponent("font-awesome-icon");
    const l = n.resolveComponent("stat-display");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createElementVNode("div", {
      class: n.normalizeClass(["background", {
        "onboarding-info": i.isOnboarding
      }])
    }, [n.createElementVNode("img", {
      class: "bg-image",
      src: r.cover,
      loading: "lazy"
    }, null, 8, ys), n.createElementVNode("div", Ms, [i.showBackButton ? (n.openBlock(), n.createElementBlock("div", {
      key: 0,
      class: "back-button",
      onClick: e[0] || (e[0] = (...c) => r.back && r.back(...c))
    }, [n.createVNode(a, {
      icon: o.faArrowLeft
    }, null, 8, ["icon"])])) : n.createCommentVNode("", true), n.createElementVNode("div", Ns, [n.createElementVNode("strong", zs, n.toDisplayString(i.user.name), 1), n.createElementVNode("div", Ds, [(n.openBlock(true), n.createElementBlock(n.Fragment, null, n.renderList(r.mediaList, (c, d) => {
      n.openBlock();
      return n.createBlock(l, {
        class: "stat-display",
        key: d,
        icon: c.icon,
        count: c.count,
        "icon-size": c.iconSize
      }, null, 8, ["icon", "count", "icon-size"]);
    }), 128))])])])], 2)]);
  }
  const Oe = E(gs, [["render", Es], ["styles", [fs]]]);
  const xs = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Oe
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Ts = {
    props: {
      active: {
        type: Boolean,
        required: true
      },
      icon: String,
      iconBg: String
    },
    computed: {
      computedIcon() {
        if (this.active) {
          return this.iconBg;
        } else {
          return this.icon;
        }
      }
    }
  };
  const bs = ["src"];
  function Ss(t, e, i, o, s, r) {
    n.openBlock();
    return n.createElementBlock("img", {
      src: r.computedIcon
    }, null, 8, bs);
  }
  const Dt = E(Ts, [["render", Ss]]);
  const ws = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Dt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const As = {
    emits: ["show-posts"],
    props: {
      user: {
        type: Object,
        required: true
      },
      view: String
    },
    setup() {
      const {
        t
      } = v();
      return {
        t,
        faBadgeCheck: oe
      };
    },
    computed: {
      totalPosts() {
        var t;
        var e;
        var i;
        var o;
        if ((e = (t = this == null ? undefined : this.user) == null ? undefined : t.stats) != null && e.posts) {
          if ((o = (i = this == null ? undefined : this.user) == null ? undefined : i.stats) == null) {
            return undefined;
          } else {
            return o.posts;
          }
        } else {
          return 0;
        }
      },
      totalImages() {
        var t;
        var e;
        var i;
        var o;
        if ((e = (t = this == null ? undefined : this.user) == null ? undefined : t.stats) != null && e.images) {
          if ((o = (i = this == null ? undefined : this.user) == null ? undefined : i.stats) == null) {
            return undefined;
          } else {
            return o.images;
          }
        } else {
          return 0;
        }
      },
      totalVideos() {
        var t;
        var e;
        var i;
        var o;
        if ((e = (t = this == null ? undefined : this.user) == null ? undefined : t.stats) != null && e.videos) {
          if ((o = (i = this == null ? undefined : this.user) == null ? undefined : i.stats) == null) {
            return undefined;
          } else {
            return o.videos;
          }
        } else {
          return 0;
        }
      },
      totalgifs() {
        var t;
        var e;
        var i;
        var o;
        if ((e = (t = this == null ? undefined : this.user) == null ? undefined : t.stats) != null && e.gifs) {
          if ((o = (i = this == null ? undefined : this.user) == null ? undefined : i.stats) == null) {
            return undefined;
          } else {
            return o.gifs;
          }
        } else {
          return 0;
        }
      },
      totalMedia() {
        return this.totalImages + this.totalVideos + this.totalgifs;
      },
      totalPaid() {
        var t;
        var e;
        var i;
        var o;
        if ((e = (t = this == null ? undefined : this.user) == null ? undefined : t.stats) != null && e.postsPaid) {
          if ((o = (i = this == null ? undefined : this.user) == null ? undefined : i.stats) == null) {
            return undefined;
          } else {
            return o.postsPaid;
          }
        } else {
          return 0;
        }
      }
    },
    data() {
      return {
        activeTab: "tab1",
        activeSubtab: "total"
      };
    },
    methods: {
      changeMainTab(t) {
        if (this.activeTab !== t) {
          this.activeTab = t;
          this.$emit("show-posts", t);
          this.view;
          ie.CHECKOUT;
        }
      },
      changeSubTab(t) {
        if (this.activeSubTab !== t) {
          this.activeSubtab = t;
          this.view;
          ie.CHECKOUT;
        }
      }
    }
  };
  const Is = {
    class: "nav nav-tabs tab-main mb-2"
  };
  const Cs = {
    class: "nav-item main"
  };
  const Ls = {
    class: "nav-item main"
  };
  const js = {
    key: 0,
    class: "nav nav-tabs tab-sub"
  };
  const Os = {
    class: "nav-item sub pt-1"
  };
  const ks = {
    key: 0,
    class: "nav-item sub pt-1"
  };
  const vs = {
    key: 1,
    class: "nav-item sub pt-1"
  };
  const Ps = {
    key: 2,
    class: "nav-item sub pt-1"
  };
  const Bs = {
    key: 3,
    class: "nav-item sub pt-1"
  };
  function Vs(t, e, i, o, s, r) {
    n.openBlock();
    return n.createElementBlock(n.Fragment, null, [n.createElementVNode("ul", Is, [n.createElementVNode("li", Cs, [n.createElementVNode("a", {
      class: n.normalizeClass(["text-tab", s.activeTab === "tab1" ? "nav-link active main-item" : "nav-link main-item"]),
      style: {
        "margin-right": "1px"
      },
      onClick: e[0] || (e[0] = a => r.changeMainTab("tab1")),
      "data-bs-toggle": "tab"
    }, n.toDisplayString(r.totalPosts.toLocaleString("pt-BR")) + " " + n.toDisplayString(o.t("MEDIAS.ALL_POSTS")), 3)]), n.createElementVNode("li", Ls, [n.createElementVNode("a", {
      class: n.normalizeClass(["text-tab", s.activeTab === "tab2" ? "nav-link active main-item" : "nav-link main-item"]),
      "data-bs-toggle": "tab",
      style: {
        "margin-left": "1px"
      },
      onClick: e[1] || (e[1] = a => r.changeMainTab("tab2"))
    }, n.toDisplayString(r.totalMedia.toLocaleString("pt-BR")) + " " + n.toDisplayString(o.t("MEDIAS.ALL_MEDIA")), 3)])]), s.activeTab === "tab2" && r.totalMedia > 0 ? (n.openBlock(), n.createElementBlock("ul", js, [n.createElementVNode("li", Os, [n.createElementVNode("a", {
      class: n.normalizeClass(["text-sub-tab", s.activeSubtab === "total" ? "nav-link active sub-item" : "nav-link sub-item"]),
      "data-bs-toggle": "tab",
      onClick: e[2] || (e[2] = a => r.changeSubTab("total"))
    }, n.toDisplayString(r.totalMedia.toLocaleString("pt-BR")) + " " + n.toDisplayString(o.t("MEDIAS.ALL")), 3)]), r.totalImages > 0 ? (n.openBlock(), n.createElementBlock("li", ks, [n.createElementVNode("a", {
      class: n.normalizeClass(["text-sub-tab", s.activeSubtab === "photos" ? "nav-link active sub-item" : "nav-link sub-item"]),
      "data-bs-toggle": "tab",
      onClick: e[3] || (e[3] = a => r.changeSubTab("photos"))
    }, n.toDisplayString(r.totalImages.toLocaleString("pt-BR")) + " " + n.toDisplayString(o.t("MEDIAS.PHOTOS")), 3)])) : n.createCommentVNode("", true), r.totalgifs > 0 ? (n.openBlock(), n.createElementBlock("li", vs, [n.createElementVNode("a", {
      class: n.normalizeClass(["text-sub-tab", s.activeSubtab === "gifs" ? "nav-link active sub-item" : "nav-link sub-item"]),
      "data-bs-toggle": "tab",
      onClick: e[4] || (e[4] = a => r.changeSubTab("gifs"))
    }, n.toDisplayString(r.totalgifs.toLocaleString("pt-BR")) + " " + n.toDisplayString(o.t("MEDIAS.GIFS")), 3)])) : n.createCommentVNode("", true), r.totalVideos > 0 ? (n.openBlock(), n.createElementBlock("li", Ps, [n.createElementVNode("a", {
      class: n.normalizeClass(["text-sub-tab", s.activeSubtab === "videos" ? "nav-link active sub-item" : "nav-link sub-item"]),
      "data-bs-toggle": "tab",
      onClick: e[5] || (e[5] = a => r.changeSubTab("videos"))
    }, n.toDisplayString(r.totalVideos.toLocaleString("pt-BR")) + " " + n.toDisplayString(o.t("MEDIAS.VIDEOS")), 3)])) : n.createCommentVNode("", true), r.totalPaid > 0 ? (n.openBlock(), n.createElementBlock("li", Bs, [n.createElementVNode("a", {
      class: n.normalizeClass(["text-sub-tab", s.activeSubtab === "paid" ? "nav-link active sub-item" : "nav-link sub-item"]),
      "data-bs-toggle": "tab",
      onClick: e[6] || (e[6] = a => r.changeSubTab("paid"))
    }, n.toDisplayString(r.totalPaid.toLocaleString("pt-BR")) + " " + n.toDisplayString(o.t("MEDIAS.PAID")), 3)])) : n.createCommentVNode("", true)])) : n.createCommentVNode("", true)], 64);
  }
  const Et = E(As, [["render", Vs]]);
  const Rs = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Et
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var Zs = {
    prefix: "far",
    iconName: "ellipsis-vertical",
    icon: [128, 512, ["ellipsis-v"], "f142", "M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM112 96A48 48 0 1 0 16 96a48 48 0 1 0 96 0z"]
  };
  var Us = Zs;
  const Fs = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTdDMTMuNDE4MyAxNyAxNyAxMy40MTgzIDE3IDlDMTcgNC41ODE3MiAxMy40MTgzIDEgOSAxQzQuNTgxNzIgMSAxIDQuNTgxNzIgMSA5QzEgMTAuNjkwOCAxLjUyNDUzIDEyLjI1OTEgMi40MTk3NCAxMy41NTFDMi41MTI2MSAxMy42ODUgMi41MzEyIDEzLjg1ODEgMi40NjI0OCAxNC4wMDU5TDEuMzc5OTcgMTYuMzM1QzEuMjEwNjYgMTYuNjMxMyAxLjQyNDYgMTcgMS43NjU4NiAxN0g5WiIgc3Ryb2tlPSIjNmM3NTdkIiBzdHJva2Utd2lkdGg9IjEuMiIvPgo8L3N2Zz4K";
  const _s = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTdDMTMuNDE4MyAxNyAxNyAxMy40MTgzIDE3IDlDMTcgNC41ODE3MiAxMy40MTgzIDEgOSAxQzQuNTgxNzIgMSAxIDQuNTgxNzIgMSA5QzEgMTAuNjkwOCAxLjUyNDUzIDEyLjI1OTEgMi40MTk3NCAxMy41NTFDMi41MTI2MSAxMy42ODUgMi41MzEyIDEzLjg1ODEgMi40NjI0OCAxNC4wMDU5TDEuMzc5OTcgMTYuMzM1QzEuMjEwNjYgMTYuNjMxMyAxLjQyNDYgMTcgMS43NjU4NiAxN0g5WiIgc3Ryb2tlPSIjRjY4RDNEIiBzdHJva2Utd2lkdGg9IjEuMiIvPgo8L3N2Zz4K";
  const Qs = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxOSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNDY2NiAyLjU2MjcxTDkuOTExOTEgMi4xMTgxNEMxMS4xNTUxIDAuOTA2NTE1IDEyLjg3NyAwLjM1NTA3IDE0LjU2OTEgMC42MzY3M0MxNy4xMjYgMS4wNjI3NSAxOSAzLjI3NTIxIDE5IDUuODY5MTVWNi4wODQzOUMxOSA3LjYyNDQyIDE4LjM2MTcgOS4wOTc2NyAxNy4yMzM2IDEwLjE0NzlMMTAuNTI3OSAxNi40MDgyQzEwLjI0OTYgMTYuNjY4IDkuODgyMjMgMTYuODEyNyA5LjUgMTYuODEyN0M5LjExNzc3IDE2LjgxMjcgOC43NTAzOSAxNi42NjggOC40NzIwNyAxNi40MDgyTDEuNzY2MDQgMTAuMTQ3OUMwLjYzOTM5NSA5LjA5NzY3IDAgNy42MjQ0MiAwIDYuMDg0MzlWNS44NjkxNUMwIDMuMjc1MjEgMS44NzQ3NyAxLjA2Mjc1IDQuNDMwODYgMC42MzY3M0M2LjA4OTY1IDAuMzU1MDcgNy44NDQ5MiAwLjkwNjUxNSA5LjA1NDY5IDIuMTE4MTRMOS40NjY2IDIuNTYyNzFaTTkuNDY2NiA0LjI0Mzc2TDguMjE2MDIgMi45NTYwN0M3LjI3NzE1IDIuMDE3NTcgNS45Mzc1IDEuNTg5MzMgNC42Mjc1NCAxLjgwNzlDMi42NDI1NiAyLjEzODkyIDEuMTU0MSAzLjg1NzgyIDEuMTU0MSA1Ljg2OTE1VjYuMDg0MzlDMS4xNTQxIDcuMjk3ODYgMS42OTAzMyA4LjQ1MTk2IDIuNTc2MTMgOS4yNzk1TDkuMjgxMDUgMTUuNTM5OUM5LjM0MDQzIDE1LjU5NTUgOS40MTgzNiAxNS42MjUyIDkuNDY2NiAxNS42MjUyQzkuNTgxNjQgMTUuNjI1MiA5LjY1OTU3IDE1LjU5NTUgOS43MTg5NSAxNS41Mzk5TDE2LjQyNDYgOS4yNzk1QzE3LjMwNzggOC40NTE5NiAxNy44MTI1IDcuMjk3ODYgMTcuODEyNSA2LjA4NDM5VjUuODY5MTVDMTcuODEyNSAzLjg1NzgyIDE2LjM1NzggMi4xMzg5MiAxNC4zNzI1IDEuODA3OUMxMy4wMjkxIDEuNTg5MzMgMTEuNzIyOSAyLjAxNzU3IDEwLjc4NCAyLjk1NjA3TDkuNDY2NiA0LjI0Mzc2WiIgZmlsbD0iIzZjNzU3ZCIvPgo8L3N2Zz4K";
  const Ys = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNDY2NiAzLjU2MjcxTDkuOTExOTEgMy4xMTgxNEMxMS4xNTUxIDEuOTA2NTEgMTIuODc3IDEuMzU1MDcgMTQuNTY5MSAxLjYzNjczQzE3LjEyNiAyLjA2Mjc1IDE5IDQuMjc1MjEgMTkgNi44NjkxNVY3LjA4NDM5QzE5IDguNjI0NDIgMTguMzYxNyAxMC4wOTc3IDE3LjIzMzYgMTEuMTQ3OUwxMC41Mjc5IDE3LjQwODJDMTAuMjQ5NiAxNy42NjggOS44ODIyMyAxNy44MTI3IDkuNSAxNy44MTI3QzkuMTE3NzcgMTcuODEyNyA4Ljc1MDM5IDE3LjY2OCA4LjQ3MjA3IDE3LjQwODJMMS43NjYwNCAxMS4xNDc5QzAuNjM5Mzk1IDEwLjA5NzcgMCA4LjYyNDQyIDAgNy4wODQzOVY2Ljg2OTE1QzAgNC4yNzUyMSAxLjg3NDc3IDIuMDYyNzUgNC40MzA4NiAxLjYzNjczQzYuMDg5NjUgMS4zNTUwNyA3Ljg0NDkyIDEuOTA2NTEgOS4wNTQ2OSAzLjExODE0TDkuNDY2NiAzLjU2MjcxWk05LjQ2NjYgNS4yNDM3Nkw4LjIxNjAyIDMuOTU2MDdDNy4yNzcxNSAzLjAxNzU3IDUuOTM3NSAyLjU4OTMzIDQuNjI3NTQgMi44MDc5QzIuNjQyNTYgMy4xMzg5MiAxLjE1NDEgNC44NTc4MiAxLjE1NDEgNi44NjkxNVY3LjA4NDM5QzEuMTU0MSA4LjI5Nzg2IDEuNjkwMzMgOS40NTE5NiAyLjU3NjEzIDEwLjI3OTVMOS4yODEwNSAxNi41Mzk5QzkuMzQwNDMgMTYuNTk1NSA5LjQxODM2IDE2LjYyNTIgOS40NjY2IDE2LjYyNTJDOS41ODE2NCAxNi42MjUyIDkuNjU5NTcgMTYuNTk1NSA5LjcxODk1IDE2LjUzOTlMMTYuNDI0NiAxMC4yNzk1QzE3LjMwNzggOS40NTE5NiAxNy44MTI1IDguMjk3ODYgMTcuODEyNSA3LjA4NDM5VjYuODY5MTVDMTcuODEyNSA0Ljg1NzgyIDE2LjM1NzggMy4xMzg5MiAxNC4zNzI1IDIuODA3OUMxMy4wMjkxIDIuNTg5MzMgMTEuNzIyOSAzLjAxNzU3IDEwLjc4NCAzLjk1NjA3TDkuNDY2NiA1LjI0Mzc2WiIgZmlsbD0iI0Y2OEQzRCIvPgo8cGF0aCBkPSJNMi41IDNMMSA1LjVMMC41IDcuNUwxLjUgOS41TDkuNSAxNy41TDE2LjUgMTFMMTggOC41TDE4LjUgNUwxNyAzLjVMMTUgMi41SDEzTDExIDNMOS41IDVMOC41IDMuNUw2IDIuNUg0LjVMMi41IDNaIiBmaWxsPSIjRjY4RDNEIi8+Cjwvc3ZnPgo=";
  const Hs = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcwMjkgMEgyLjM0MDU4QzEuMDUwMzQgMCAwIDEuMDY1MDQgMCAyLjM3NVYxOC4zNzI5QzAgMTguNTg5NyAwLjExNjU5IDE4Ljc4OTYgMC4zMDM5ODMgMTguODkzOUMwLjQ5MTQxMiAxOC45OTcxIDAuNzE4NzA0IDE4Ljk4ODkgMC44OTkzNjggMTguODc0Mkw3LjAyMTc0IDE0LjkyMTdMMTMuMTQzOCAxOC44NzM4QzEzLjIzODkgMTguOTcwMyAxMy4zNDg2IDE5IDEzLjQ1ODMgMTlDMTMuNTU1NSAxOSAxMy42NTE1IDE4Ljk3NTYgMTMuNzM5NSAxOC45MjY5QzEzLjkyNjQgMTguODIxOSAxNC4wNDM1IDE4LjYyMTUgMTQuMDQzNSAxOC4zNzI5VjIuMzc1QzE0LjA0MzUgMS4wNjUwNCAxMi45OTM5IDAgMTEuNzAyOSAwWk0xMi44NzMyIDE3LjMyNjRMNy4zMzYyNiAxMy43NTA1QzcuMjA4MjUgMTMuNjg1OSA3LjEzMTQ1IDEzLjY1NjIgNy4wMjE3NCAxMy42NTYyQzYuOTEyMDIgMTMuNjU2MiA2LjgwMzQ0IDEzLjY4NyA2LjcwNzQ0IDEzLjc0OUwxLjE3MDI5IDE3LjMyNjRWMi4zNzVDMS4xNzAyOSAxLjcyMDM5IDEuNjk0NzMgMS4xODc1IDIuMzQwNTggMS4xODc1SDExLjcwMjlDMTIuMzQ4OCAxLjE4NzUgMTIuODczMiAxLjcyMDM5IDEyLjg3MzIgMi4zNzVWMTcuMzI2NFoiIGZpbGw9IiM2Yzc1N2QiLz4KPC9zdmc+Cg==";
  const Ws = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcwMjkgMEgyLjM0MDU4QzEuMDUwMzQgMCAwIDEuMDY1MDQgMCAyLjM3NVYxOC4zNzI5QzAgMTguNTg5NyAwLjExNjU5IDE4Ljc4OTYgMC4zMDM5ODMgMTguODkzOUMwLjQ5MTQxMiAxOC45OTcxIDAuNzE4NzA0IDE4Ljk4ODkgMC44OTkzNjggMTguODc0Mkw3LjAyMTc0IDE0LjkyMTdMMTMuMTQzOCAxOC44NzM4QzEzLjIzODkgMTguOTcwMyAxMy4zNDg2IDE5IDEzLjQ1ODMgMTlDMTMuNTU1NSAxOSAxMy42NTE1IDE4Ljk3NTYgMTMuNzM5NSAxOC45MjY5QzEzLjkyNjQgMTguODIxOSAxNC4wNDM1IDE4LjYyMTUgMTQuMDQzNSAxOC4zNzI5VjIuMzc1QzE0LjA0MzUgMS4wNjUwNCAxMi45OTM5IDAgMTEuNzAyOSAwWk0xMi44NzMyIDE3LjMyNjRMNy4zMzYyNiAxMy43NTA1QzcuMjA4MjUgMTMuNjg1OSA3LjEzMTQ1IDEzLjY1NjIgNy4wMjE3NCAxMy42NTYyQzYuOTEyMDIgMTMuNjU2MiA2LjgwMzQ0IDEzLjY4NyA2LjcwNzQ0IDEzLjc0OUwxLjE3MDI5IDE3LjMyNjRWMi4zNzVDMS4xNzAyOSAxLjcyMDM5IDEuNjk0NzMgMS4xODc1IDIuMzQwNTggMS4xODc1SDExLjcwMjlDMTIuMzQ4OCAxLjE4NzUgMTIuODczMiAxLjcyMDM5IDEyLjg3MzIgMi4zNzVWMTcuMzI2NFoiIGZpbGw9IiNGNjhEM0QiLz4KPHBhdGggZD0iTTAuNSAxOFYyTDEuNSAwLjVIMTIuNUwxMy41IDJWMTguNUw3IDE0LjVMMC41IDE4WiIgZmlsbD0iI0Y2OEQzRCIvPgo8L3N2Zz4K";
  const xt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDMyMCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMTE5Ljg4OSAyNzEuMzI4TDEyMS42NDUgMjY4LjM5NEwxMzEuNjgyIDI1MS45NzFMMTQzLjU2IDIzMi42MTRDMTQ3LjA3MyAyMjYuODMzIDE0NS4yMzMgMjE5LjI5MSAxMzkuNDYxIDIxNS42ODlDMTMyLjAxNyAyMTEuMDc5IDEyNi40OTYgMjA0LjI5MiAxMjMuNDg1IDE5Ni41ODNDMTIwLjQ3NCAxODguNzkxIDExOS44ODkgMTgwLjA3NiAxMjIuMjMxIDE3MS42MTNDMTI0LjU3MyAxNjMuMTUgMTI5LjU5MiAxNTYuMDI3IDEzNi4yODMgMTUxQzE0Mi44OTEgMTQ1Ljk3MiAxNTEuMTcyIDE0My4wNCAxNTkuODcxIDE0My4wNEMxNjguNTcgMTQzLjA0IDE3Ni44NTEgMTQ1Ljk3MiAxODMuNDU5IDE1MUMxOTAuMDY3IDE1Ni4wMjcgMTk1LjA4NSAxNjMuMTUgMTk3LjUxMSAxNzEuNjEzQzE5OS44NTMgMTgwLjA3NiAxOTkuMzUxIDE4OC43OTEgMTk2LjI1NyAxOTYuNTgzQzE5My4yNDUgMjA0LjM3NyAxODcuNzI1IDIxMS4xNjQgMTgwLjI4MSAyMTUuNjg5QzE3NC41MDkgMjE5LjIwOCAxNzIuNjY4IDIyNi43NDkgMTc2LjE4MSAyMzIuNjE0TDE5NC40MTYgMjYyLjQ0NUwxOTkuOTM3IDI3MS40MTFDMTkzLjk5OCAyNzQuMDkyIDE4Ny44OTIgMjc2LjEwMyAxODEuNjE5IDI3Ny41MjhDMTc0LjUwOSAyNzkuMTIgMTY3LjE0OCAyNzkuNjIzIDE1OS44NzEgMjc5LjYyM0MxNTkuMjAyIDI3OS42MjMgMTU4LjQ0OSAyNzkuNjIzIDE1Ny43OCAyNzkuNjIzQzE0NC42NDcgMjc5LjYyMyAxMzEuNzY2IDI3Ni43NzQgMTE5LjgwNSAyNzEuMjQzTTgxLjgzIDEyNC4wMTlDOTQuMTI1OCAxMDcuNTEgMTExLjUyNCA5NC45NDIxIDEzMi4xODQgODguODI0NkMxNTIuODQ1IDgyLjcwOCAxNzQuMzQxIDgzLjcxMzYgMTkzLjU4IDkwLjgzNTdDMjEyLjgxOCA5Ny45NTg3IDIyOS43OTggMTExLjExNCAyNDEuNTkyIDEyOS4yMTNDMjUzLjM4NiAxNDcuMzEzIDI1OC40ODkgMTY4LjI2MSAyNTcuMTUgMTg4Ljc5MUMyNTUuODEyIDIwOS4zMiAyNDguMTE2IDIyOS40MzEgMjM0LjE0OCAyNDUuODU0QzIzMC4wNDkgMjUwLjYzMSAyMjUuNjE2IDI1NC45MDQgMjIwLjkzMiAyNTguNzU4TDIxNS40MTEgMjQ5Ljc5M0wyMDMuMDMxIDIyOS41MTRDMjEwLjIyNSAyMjIuODk1IDIxNS43NDYgMjE0Ljc2NiAyMTkuMjU5IDIwNS44MDFDMjI0LjE5NCAxOTMuMTQ4IDIyNS4xMTQgMTc4Ljk4NyAyMjEuMjY2IDE2NS4yNDVDMjE3LjQxOSAxNTEuNTAyIDIwOS4yMjEgMTM5Ljg1NSAxOTguNDMxIDEzMS42NDNDMTg3LjY0MSAxMjMuNDMyIDE3NC4yNTggMTE4LjczOSAxNjAuMDM4IDExOC43MzlDMTQ1LjgxOCAxMTguNzM5IDEzMi40MzYgMTIzLjUxNiAxMjEuNjQ1IDEzMS42NDNDMTEwLjg1NSAxMzkuODU1IDEwMi42NTggMTUxLjQxOSA5OC44MDk5IDE2NS4yNDVDOTQuOTYyMyAxNzguOTg3IDk1Ljg4MjQgMTkzLjE0OCAxMDAuODE3IDIwNS44MDFDMTA0LjMzIDIxNC42ODMgMTA5Ljc2NyAyMjIuODk1IDExNy4wNDUgMjI5LjUxNEw3MC40NTQzIDMwNS42ODNDNjkuOTUyNCAzMDYuNTIxIDY5LjE5OTYgMzA3LjEwOCA2OC40NDY4IDMwNy40NDNDNjcuNjEwMyAzMDcuNzc4IDY2LjY5MDMgMzA3Ljc3OCA2NS43NzAyIDMwNy41MjZDNjQuODUwMSAzMDcuMjc1IDY0LjA5NzIgMzA2Ljc3MiA2My41OTU0IDMwNi4xMDJDNjMuMDkzNSAzMDUuNDMyIDYyLjg0MjYgMzA0LjUxIDYyLjg0MjYgMzAzLjUwNFYxODIuNTlDNjIuODQyNiAxNjEuMDU1IDY5Ljk1MjQgMTQwLjY5MyA4Mi4yNDgzIDEyNC4xODZNMTI1LjI0MiA2NS4xOTUzQzk5LjMxMTggNzIuOTA0NCA3Ny40ODA1IDg4LjY1NzEgNjIuMTczNCAxMDkuMjcxQzQ2Ljg2NjMgMTI5LjggMzggMTU1LjI3MyAzOCAxODIuMzM4VjMwMy4yNTNDMzggMzA5LjcwNSA0MC4wOTEyIDMxNS43MzggNDMuNzcxNSAzMjAuNTk4QzQ3LjQ1MTkgMzI1LjQ1OCA1Mi43MjE1IDMyOS4xNDUgNTguOTExMyAzMzAuOTA1QzY1LjEwMSAzMzIuNjY1IDcxLjQ1OCAzMzIuMjQ1IDc3LjE0NTkgMzMwLjA2N0M4Mi44MzM4IDMyNy44MDUgODcuNzY4OCAzMjMuNzgyIDkxLjE5ODIgMzE4LjI1Mkw5NC4yOTMxIDMxMy4yMjRMMTA3LjAwNyAyOTIuMzZDMTIzLjU2OSAzMDAuMzIgMTQxLjYzNiAzMDQuNTEgMTYwLjAzOCAzMDQuNDI2QzE2MC41NCAzMDQuNDI2IDE2My4zODQgMzA0LjQyNiAxNjMuOTY5IDMwNC40MjZDMTcxLjc0OSAzMDQuMTc0IDE3OS41MjcgMzAzLjE2OSAxODcuMTM5IDMwMS40MUMyMTIuMTQ5IDI5NS43MTEgMjM1LjQwMiAyODIuMDUzIDI1Mi44ODQgMjYxLjQ0QzI3MC40NSAyNDAuODI2IDI4MC4xNTMgMjE1LjY4OSAyODEuNzQxIDE5MC4wNDdDMjgzLjQxNCAxNjQuNDA3IDI3Ni45NzQgMTM4LjI2MyAyNjIuMjUyIDExNS41NTVDMjQ3LjUzMSA5Mi44NDY4IDIyNi4yMDEgNzYuMzM5NiAyMDIuMTEyIDY3LjU0MTVDMTg4LjcyOCA2Mi41OTcyIDE3NC41MDkgNjAgMTYwLjAzOCA2MEMxNDUuNTY4IDYwIDEzNi43ODQgNjEuNjc1OSAxMjUuMzI1IDY1LjAyNzciIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl83MjlfMikiLz4KCTxkZWZzPgoJCTxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl83MjlfMiIgeDE9IjMyLjU2MzEiIHkxPSIzMDkuOTU2IiB4Mj0iMjQ2LjU3MSIgeTI9Ijk2LjMyNzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjQiIHN0b3AtY29sb3I9IiNGQ0ZCRjkiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjkiIHN0b3AtY29sb3I9IiNGNkYxRUEiLz4KCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjRFRUU1Ii8+CgkJPC9saW5lYXJHcmFkaWVudD4KCTwvZGVmcz4KPC9zdmc+Cg==";
  const Gs = `.videopostagem{text-align:center;overflow:hidden;position:relative;height:unset;width:100%}.videopostagem.fullwidth img{object-fit:cover;max-height:calc(100vh - 120px);width:100%;display:inline-block;max-width:unset;height:calc(50vh - 120px)}@media (max-width: 750px){.videopostagem.fullwidth.grid img{height:calc(40vh - 120px)}}.post-details{position:absolute;top:60%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:8px}.post-details svg{height:50px}.grid svg{height:20%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
`;
  const qs = {
    inject: ["isSmallDevice", "appSettings", "$http", "token"],
    emits: ["open-payment-modal", "open-auth"],
    components: {
      TabMenuContent: Et,
      Avatar: me,
      IconToggle: Dt,
      StatDisplay: Ce,
      SimplifiedPersonalData: Ae
    },
    props: {
      user: {
        type: Object,
        required: true
      },
      rulesShowContent: {
        type: Boolean,
        default: true
      },
      showFollowers: {
        type: Boolean,
        default: false
      },
      view: String
    },
    setup() {
      const {
        t
      } = v();
      return {
        t,
        faEllipsisV: Us,
        faBadgeCheck: oe,
        faCircleDollar: je,
        faLockKeyhole: ss,
        faIcons: es,
        faImage: pe,
        faVideo: fe,
        faHeart: he,
        faUser: ue,
        commentIcon: Fs,
        commentIconBg: _s,
        heartIcon: Qs,
        heartIconBg: Ys,
        markIcon: Hs,
        markIconBg: Ws
      };
    },
    computed: {
      mediaList() {
        const t = this.user.stats || {};
        const e = [];
        if (t.images) {
          e.push({
            icon: pe,
            count: this.formatCount(t.images),
            iconSize: "17px"
          });
        }
        if (t.videos) {
          e.push({
            icon: fe,
            count: this.formatCount(t.videos),
            iconSize: "17px"
          });
        }
        if (t.likes) {
          e.push({
            icon: he,
            count: this.formatCount(t.likes),
            iconSize: "17px"
          });
        }
        if (this.showFollowers && t.followers) {
          e.push({
            icon: ue,
            count: this.formatCount(t.followers),
            iconSize: "15px"
          });
        }
        return e;
      },
      needLogin() {
        return this.view === ie.CHECKOUT;
      }
    },
    data() {
      return {
        showPost: true,
        activeHeart: false,
        activeComment: false,
        activeMark: false,
        showSimplifiedPersonalDialog: false,
        screenBreakpointSmallGrid: 1200,
        isSmallGrid: window.innerWidth < this.screenBreakpointSmallGrid
      };
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isSmallGrid = window.innerWidth < this.screenBreakpointSmallGrid;
      },
      getDisplayProfileName() {
        var e;
        if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[2-9a-bA-BeE][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test((e = this.user) == null ? undefined : e.profileName)) {
          return null;
        } else {
          return `@${this.user.profileName}`;
        }
      },
      activePost(t) {
        this.showPost = t === "tab1";
      },
      formatCount(t) {
        if (t >= 1000000) {
          return (t / 1000000).toFixed(1).replace(".0", "") + "M";
        } else if (t >= 1000) {
          return (t / 1000).toFixed(1).replace(".0", "") + "K";
        } else {
          return t.toString();
        }
      },
      async handleClick() {
        var t;
        var e;
        var i;
        if (this.needLogin) {
          this.$emit("open-auth", "1");
        } else if ((t = this.user) != null && t.isFreeCreator) {
          if (await this.verifyUser()) {
            await this.followCreator();
          } else {
            this.showSimplifiedPersonalDialog = true;
          }
        } else if (this.rulesShowContent) {
          this.$emit("open-payment-modal", {
            clientId: this.user.clientId,
            value: this.user.bumePrice ? this.user.bumePrice : (i = (e = this.user) == null ? undefined : e.prices) == null ? undefined : i.Monthly,
            profileName: this.user.profileName,
            cover: this.user.cover,
            avatar: this.user.avatar,
            currencyCode: this.currencyCode,
            currencySymbol: this.user.prices.CurrencySymbol,
            recurrence: H[0].TYPE,
            spreadFee: this.user.prices.SpreadFee,
            nickName: this.user.name
          });
        }
      },
      async verifyUser() {
        var t;
        try {
          const e = C(this.appSettings.ENDPOINT_API_PROFILE, "/Users");
          const i = await this.$http.get(e);
          if (i != null && i.data) {
            return !!((t = i.data) != null && t.document);
          } else {
            return false;
          }
        } catch (e) {
          console.error(e);
        }
      },
      async followCreator() {
        var t;
        try {
          this.loading = true;
          const e = C(this.appSettings.ENDPOINT_API_CHECKOUT, `/follow-profile/${(t = this.user) == null ? undefined : t.clientId}`);
          await this.$http.get(e);
        } catch (e) {
          console.error(e);
        } finally {
          this.loading = false;
          window.location.reload();
        }
      }
    }
  };
  const Ks = {
    class: "px-2"
  };
  const Js = {
    key: 0,
    class: "d-flex align-items-center justify-content-between mt-1 mb-2 px-2"
  };
  const Xs = {
    class: "d-flex"
  };
  const $s = {
    class: "user-info",
    style: {
      "padding-top": "21px",
      "padding-left": "4px"
    }
  };
  const er = {
    class: "user-name"
  };
  const tr = {
    style: {
      "font-size": "16px !important"
    }
  };
  const ir = {
    class: "profile-name"
  };
  const nr = {
    key: 0,
    style: {
      "font-size": "16px !important"
    }
  };
  const or = {
    class: "d-flex justify-content-end align-items-center"
  };
  const sr = {
    key: 1,
    class: "videopostagem fullwidth mb-2"
  };
  const rr = n.createElementVNode("img", {
    src: xt,
    alt: "bg-locked",
    class: "w-100",
    style: {
      "background-color": "#F4EEE5"
    }
  }, null, -1);
  const ar = {
    class: "post-details"
  };
  const lr = {
    class: "count-list"
  };
  const cr = {
    key: 2,
    class: "d-flex justify-content-between mb-4 mt-2 px-2"
  };
  const dr = {
    class: "d-flex align-items-center"
  };
  const mr = {
    class: "d-flex align-items-center",
    style: {
      "margin-left": "10px"
    }
  };
  const ur = {
    style: {
      "margin-left": "5px"
    }
  };
  const pr = {
    key: 3,
    class: "d-flex flex-wrap justify-content-center gap-1 mw-100"
  };
  const hr = n.createElementVNode("img", {
    src: xt,
    alt: "bg-locked",
    class: "w-100",
    style: {
      "background-color": "#F4EEE5"
    }
  }, null, -1);
  function fr(t, e, i, o, s, r) {
    var u;
    const a = n.resolveComponent("TabMenuContent");
    const l = n.resolveComponent("avatar");
    const c = n.resolveComponent("font-awesome-icon");
    const d = n.resolveComponent("stat-display");
    const m = n.resolveComponent("IconToggle");
    const f = n.resolveComponent("SimplifiedPersonalData");
    n.openBlock();
    return n.createElementBlock(n.Fragment, null, [n.createElementVNode("div", Ks, [n.createVNode(a, {
      view: i.view,
      user: i.user,
      onShowPosts: r.activePost
    }, null, 8, ["view", "user", "onShowPosts"])]), s.showPost ? (n.openBlock(), n.createElementBlock("div", Js, [n.createElementVNode("div", Xs, [n.createVNode(l, {
      "expand-image-functionality": true,
      "expand-image-date-functionality": i.user.expandImageDateFunctionality,
      isPost: true,
      image: i.user.avatar,
      "user-name": i.user.name
    }, null, 8, ["expand-image-date-functionality", "image", "user-name"]), n.createElementVNode("div", $s, [n.createElementVNode("div", er, [n.createElementVNode("span", tr, n.toDisplayString(i.user.name), 1), i.user.verified ? (n.openBlock(), n.createBlock(c, {
      key: 0,
      style: {
        "margin-left": "2px"
      },
      icon: o.faBadgeCheck
    }, null, 8, ["icon"])) : n.createCommentVNode("", true)]), n.createElementVNode("div", ir, [i.user.profileName ? (n.openBlock(), n.createElementBlock("span", nr, n.toDisplayString(r.getDisplayProfileName()), 1)) : n.createCommentVNode("", true)])])]), n.createElementVNode("div", or, [n.createVNode(c, {
      style: {
        "font-size": "1.2rem"
      },
      icon: o.faEllipsisV
    }, null, 8, ["icon"])])])) : n.createCommentVNode("", true), s.showPost ? (n.openBlock(), n.createElementBlock("div", sr, [rr, n.createElementVNode("div", ar, [n.createVNode(c, {
      class: "cursor-pointer",
      icon: o.faLockKeyhole,
      onClick: r.handleClick
    }, null, 8, ["icon", "onClick"]), n.createElementVNode("div", lr, [(n.openBlock(true), n.createElementBlock(n.Fragment, null, n.renderList(r.mediaList, (g, N) => {
      n.openBlock();
      return n.createBlock(d, {
        class: "stat-display",
        key: N,
        icon: g.icon,
        count: g.count,
        "icon-size": g.iconSize
      }, null, 8, ["icon", "count", "icon-size"]);
    }), 128))])])])) : n.createCommentVNode("", true), s.showPost ? (n.openBlock(), n.createElementBlock("div", cr, [n.createElementVNode("div", dr, [n.createVNode(m, {
      style: {
        width: "22px",
        height: "22px"
      },
      active: s.activeHeart,
      icon: o.heartIcon,
      iconBg: o.heartIconBg,
      onClick: e[0] || (e[0] = g => s.activeHeart = !s.activeHeart)
    }, null, 8, ["active", "icon", "iconBg"]), n.createVNode(m, {
      style: {
        "margin-left": "10px",
        width: "22px",
        height: "22px"
      },
      active: s.activeComment,
      icon: o.commentIcon,
      iconBg: o.commentIconBg,
      onClick: e[1] || (e[1] = g => s.activeComment = !s.activeComment)
    }, null, 8, ["active", "icon", "iconBg"]), n.createElementVNode("div", mr, [n.createVNode(c, {
      style: {
        width: "22px",
        height: "22px"
      },
      icon: o.faCircleDollar
    }, null, 8, ["icon"]), n.createElementVNode("span", ur, n.toDisplayString(o.t("SEND_MIMO")), 1)])]), n.createElementVNode("div", null, [n.createVNode(m, {
      style: {
        width: "17px",
        height: "20px"
      },
      active: s.activeMark,
      icon: o.markIcon,
      iconBg: o.markIconBg,
      onClick: e[2] || (e[2] = g => s.activeMark = !s.activeMark)
    }, null, 8, ["active", "icon", "iconBg"])])])) : n.createCommentVNode("", true), s.showPost ? n.createCommentVNode("", true) : (n.openBlock(), n.createElementBlock("div", pr, [(n.openBlock(true), n.createElementBlock(n.Fragment, null, n.renderList(s.isSmallGrid ? 6 : 8, g => {
      n.openBlock();
      return n.createElementBlock("div", {
        key: g,
        class: "videopostagem fullwidth grid",
        style: {
          flex: "1 1 calc(33.33% - 3px)",
          "max-width": "260px",
          "aspect-ratio": "1 / 1"
        }
      }, [n.createVNode(c, {
        class: "cursor-pointer",
        icon: o.faLockKeyhole,
        onClick: r.handleClick
      }, null, 8, ["icon", "onClick"]), hr]);
    }), 128))])), n.createVNode(f, {
      "creator-id": (u = this.user) == null ? undefined : u.clientId,
      "show-dialog": s.showSimplifiedPersonalDialog,
      onFollowCreator: e[3] || (e[3] = g => r.followCreator()),
      "onUpdate:showDialog": e[4] || (e[4] = g => s.showSimplifiedPersonalDialog = g)
    }, null, 8, ["creator-id", "show-dialog"])], 64);
  }
  const ke = E(qs, [["render", fr], ["styles", [Gs]]]);
  const gr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ke
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const ml = "";
  const yr = {
    emits: ["closeAlert"],
    components: {
      ElAlert: S.ElAlert
    },
    props: {
      type: String
    },
    methods: {
      handleClose() {
        this.$emit("closeAlert", false);
      }
    }
  };
  function Mr(t, e, i, o, s, r) {
    const a = n.resolveComponent("el-alert");
    n.openBlock();
    return n.createBlock(a, {
      class: "pub-alert",
      "show-icon": "",
      type: i.type,
      onClose: r.handleClose
    }, {
      default: n.withCtx(() => [n.renderSlot(t.$slots, "default")]),
      _: 3
    }, 8, ["type", "onClose"]);
  }
  const Tt = E(yr, [["render", Mr]]);
  const Nr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Tt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const ul = "";
  function zr(t, e = undefined) {
    var o;
    var s;
    var r;
    let i = "";
    if (((o = t == null ? undefined : t.response) == null ? undefined : o.status) === 400 && (s = t == null ? undefined : t.response) != null && s.data) {
      const a = (r = t == null ? undefined : t.response) == null ? undefined : r.data;
      if (typeof a == "string") {
        i = a;
      } else if (typeof a.message == "string") {
        i = a.message;
      }
    } else if (typeof t == "string" && t.length >= 1) {
      i = t;
    }
    return i || e;
  }
  const Dr = `.personalData{margin-left:17px;margin-right:20px}.accept-terms-container{display:flex;margin-left:23px}.accept-terms-container .el-checkbox{margin-right:12px!important}.accept-terms-container .el-checkbox .el-checkbox__inner{margin-top:4px;height:20px!important;width:20px!important;border:2px solid #9b9fa1;border-radius:3px}.accept-terms-container .el-checkbox .el-checkbox__inner:after{height:10px;width:6px;left:5px}.accept-terms-container label{display:inline-block;position:relative;font-size:14px;cursor:pointer;color:#343a40}.btn-subscription{border-radius:30px!important;padding:0 25px;width:100%;height:60px!important;font-size:18px;font-weight:700;color:#fefefe;background:linear-gradient(45deg,#F58170,#F9AF77)}.btn-subscription:hover{color:#fefefe;background:linear-gradient(45deg,#FFA08A,#FFC09A)}.input-content{display:flex;justify-content:space-between}.input-field{width:47%;height:50px;border-radius:18px}@media (max-width: 460px){.btn-subscription{padding:0 12px}}.link{color:#f56c6c;text-decoration:underline;cursor:pointer}
`;
  const Er = {
    inject: ["locale", "appSettings", "$http"],
    emits: ["register-success", "call-recovery-password"],
    components: {
      ElButton: S.ElButton,
      ElCheckbox: S.ElCheckbox,
      AlertText: Tt,
      ElSkeleton: S.ElSkeleton,
      ElSkeletonItem: S.ElSkeletonItem
    },
    props: {
      defaultCountry: String,
      profileName: String,
      orderPayment: String
    },
    setup() {
      const {
        t
      } = v();
      return {
        t
      };
    },
    data() {
      return {
        wcPersonalData: {
          name: "privacy-web-registration-personaldata",
          ctx: null,
          loaded: false,
          error: false
        },
        loading: false,
        termsAndPolicy: false,
        recoveryPassword: "recovery-password",
        error: {
          show: false,
          message: null
        }
      };
    },
    computed: {
      appSettingsEncripted() {
        return btoa(JSON.stringify(this.appSettings));
      }
    },
    mounted() {
      this.loadWebComponent();
    },
    methods: {
      async loadWebComponent() {
        try {
          const t = await be.run({
            urlBase: "/webcomponents",
            componentName: this.wcPersonalData.name
          });
          this.wcPersonalData.loaded = t.loaded;
          this.wcPersonalData.error = t.error;
        } catch {
          this.wcPersonalData.error = true;
        }
      },
      openModalRecoveryPassword() {
        this.$emit("call-recovery-password", this.recoveryPassword);
      },
      async register() {
        var t;
        var e;
        try {
          this.closeAlert();
          this.loading = true;
          if (!this.termsAndPolicy) {
            this.messageError(this.t("ERROR_MESSAGE.TERMS_NOT_ACCEPTED"));
            return;
          }
          if (!(await this.$refs.wcPersonalData._proxyStore.validate())) {
            this.messageError(this.t("ERROR_MESSAGE.REGISTER"));
            return;
          }
          const o = await this.$refs.wcPersonalData._proxyStore.getFormData();
          if (!(await this.validateUser(o)) || !(await this.sendRegisterUser(o))) {
            return;
          }
          const a = await this.getToken(o);
          if (!(await this.$refs.wcPersonalData._proxyStore.validateAndSubmit((t = a == null ? undefined : a.data) == null ? undefined : t.token))) {
            this.messageError(this.t("ERROR_MESSAGE.REGISTER"));
            return;
          }
          this.$emit("register-success", (e = o.personal) == null ? undefined : e.nickName);
        } catch (i) {
          console.error(i);
        } finally {
          this.loading = false;
        }
      },
      async sendRegisterUser(t) {
        var e;
        var i;
        var o;
        var s;
        try {
          const r = {
            email: (e = t == null ? undefined : t.personal) == null ? undefined : e.email,
            nickName: (i = t == null ? undefined : t.personal) == null ? undefined : i.nickName,
            password: (o = t == null ? undefined : t.address) == null ? undefined : o.password,
            country: (s = t == null ? undefined : t.address) == null ? undefined : s.country,
            locale: this.locale,
            profileName: this.profileName,
            orderPayment: this.orderPayment
          };
          const a = C(this.appSettings.ENDPOINT_API_CHECKOUT, "/register-user");
          await this.$http.post(a, r);
          return true;
        } catch (r) {
          this.messageError(zr(r, this.t("ERROR_MESSAGE.REGISTER")));
          return false;
        }
      },
      messageError(t) {
        this.error.message = t;
        this.error.show = true;
      },
      closeAlert() {
        this.error.message = null;
        this.error.show = false;
      },
      async getToken(t) {
        var e;
        var i;
        try {
          const o = {
            Email: (e = t == null ? undefined : t.personal) == null ? undefined : e.email,
            Password: (i = t == null ? undefined : t.address) == null ? undefined : i.password
          };
          const s = C(this.appSettings.ENDPOINT_API_AUTH, "/get-token");
          return await this.$http.post(s, o);
        } catch (o) {
          console.error(o);
        }
      },
      async validateUser(t) {
        var e;
        var i;
        var o;
        var s;
        var r;
        var a;
        var l;
        try {
          const c = {
            document: t.personal.documentID,
            name: t.personal.fullName,
            dateBirth: t.personal.birthDate,
            email: t.personal.email,
            country: t.address.country,
            zipCode: t.address.cep
          };
          const d = C(this.appSettings.ENDPOINT_API_ANTI_FRAUD_SAFE_CHECK, "/api/bureauuser/validateregistrationdata");
          const m = await this.$http.post(d, c, {
            headers: {
              Authorization: `Basic ${this.appSettings.TOKEN_ANTIFRAUDSAFECHECK}`
            }
          });
          return ((e = m == null ? undefined : m.data) == null ? undefined : e.statusCode) === 200;
        } catch (c) {
          if ((o = (i = c == null ? undefined : c.response) == null ? undefined : i.data) != null && o.message) {
            if (this.t((r = (s = c == null ? undefined : c.response) == null ? undefined : s.data) == null ? undefined : r.message)) {
              this.messageError(this.t((l = (a = c == null ? undefined : c.response) == null ? undefined : a.data) == null ? undefined : l.message));
            } else {
              this.messageError(this.t("ERROR_MESSAGE.EMAIL_IN_USE"));
            }
          }
          return false;
        }
      }
    }
  };
  const xr = {
    class: "personalData mt-3"
  };
  const Tr = {
    key: 0
  };
  const br = {
    class: "accept-terms-container mb-3"
  };
  const Sr = ["innerHTML"];
  const wr = {
    key: 0
  };
  const Ar = {
    key: 1
  };
  const Ir = {
    class: "col d-flex justify-content-center"
  };
  const Cr = {
    key: 0
  };
  const Lr = {
    key: 1
  };
  const jr = {
    class: "input-content"
  };
  const Or = {
    class: "input-content"
  };
  const kr = {
    class: "input-content"
  };
  const vr = {
    class: "input-content"
  };
  function Pr(t, e, i, o, s, r) {
    const a = n.resolveComponent("privacy-web-registration-personaldata");
    const l = n.resolveComponent("el-checkbox");
    const c = n.resolveComponent("AlertText");
    const d = n.resolveComponent("el-button");
    const m = n.resolveComponent("el-skeleton-item");
    const f = n.resolveComponent("el-skeleton");
    n.openBlock();
    return n.createElementBlock("div", xr, [s.wcPersonalData.loaded ? (n.openBlock(), n.createElementBlock("div", Tr, [n.createVNode(a, {
      ref: "wcPersonalData",
      locale: r.locale,
      "app-settings": r.appSettingsEncripted,
      "refresh-token": false,
      view: "personal, address",
      "default-country": i.defaultCountry,
      "disabled-fields-address": true
    }, null, 8, ["locale", "app-settings", "default-country"]), n.createElementVNode("div", br, [n.createVNode(l, {
      modelValue: s.termsAndPolicy,
      "onUpdate:modelValue": e[0] || (e[0] = u => s.termsAndPolicy = u),
      id: "acceptTerms",
      size: "large"
    }, null, 8, ["modelValue"]), n.createElementVNode("label", {
      for: "acceptTerms",
      innerHTML: o.t("ACCEPT_TERMS")
    }, null, 8, Sr)]), s.error.show ? (n.openBlock(), n.createBlock(c, {
      key: 0,
      onCloseAlert: r.closeAlert,
      type: "error",
      class: "mb-3"
    }, {
      default: n.withCtx(() => [s.error.message.includes("ACTION_MODAL") ? (n.openBlock(), n.createElementBlock("span", wr, [n.createTextVNode(n.toDisplayString(s.error.message.replace("ACTION_MODAL", "")) + " ", 1), n.createElementVNode("span", {
        class: "link",
        onClick: e[1] || (e[1] = (...u) => r.openModalRecoveryPassword && r.openModalRecoveryPassword(...u))
      }, n.toDisplayString(o.t("ACTION.CLICK_HERE")), 1)])) : (n.openBlock(), n.createElementBlock("span", Ar, n.toDisplayString(s.error.message), 1))]),
      _: 1
    }, 8, ["onCloseAlert"])) : n.createCommentVNode("", true), n.createVNode(d, {
      class: "btn-subscription mb-4",
      loading: s.loading,
      onClick: r.register
    }, {
      default: n.withCtx(() => [n.createElementVNode("div", Ir, [s.loading ? n.createCommentVNode("", true) : (n.openBlock(), n.createElementBlock("span", Cr, n.toDisplayString(o.t("BUTTON_CHECKOUT")), 1))])]),
      _: 1
    }, 8, ["loading", "onClick"])])) : (n.openBlock(), n.createElementBlock("div", Lr, [n.createVNode(f, null, {
      template: n.withCtx(() => [n.createVNode(m, {
        variant: "text",
        class: "mb-2",
        style: {
          width: "100%",
          height: "40px",
          "border-radius": "18px"
        }
      }), n.createElementVNode("div", jr, [n.createVNode(m, {
        variant: "text",
        class: "mb-2 input-field"
      }), n.createVNode(m, {
        variant: "text",
        class: "mb-2 input-field"
      })]), n.createElementVNode("div", Or, [n.createVNode(m, {
        variant: "text",
        class: "mb-2 input-field"
      }), n.createVNode(m, {
        variant: "text",
        class: "mb-2 input-field"
      })]), n.createElementVNode("div", kr, [n.createVNode(m, {
        variant: "text",
        class: "mb-2 input-field"
      }), n.createVNode(m, {
        variant: "text",
        class: "mb-2 input-field"
      })]), n.createElementVNode("div", vr, [n.createVNode(m, {
        variant: "text",
        class: "mb-2 input-field",
        style: {
          width: "67%"
        }
      }), n.createVNode(m, {
        variant: "text",
        class: "mb-2 input-field",
        style: {
          width: "27%"
        }
      })]), n.createVNode(m, {
        variant: "text",
        class: "mb-2",
        style: {
          width: "100%",
          height: "40px",
          "border-radius": "18px"
        }
      }), n.createVNode(m, {
        variant: "text",
        class: "mb-2",
        style: {
          width: "100%",
          height: "30px"
        }
      }), n.createVNode(m, {
        variant: "text",
        class: "mb-3",
        style: {
          width: "100%",
          height: "30px",
          "border-radius": "18px"
        }
      })]),
      _: 1
    })]))]);
  }
  const bt = E(Er, [["render", Pr], ["styles", [Dr]]]);
  const Br = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: bt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Vr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMDAuNzk4IDZIMTIwLjQzNUw3Ny41NDU0IDU1LjAwODNMMTI4IDEyMS43MDZIODguNTA0MUw1Ny41NDcxIDgxLjI2NDdMMjIuMTY3OCAxMjEuNzA2SDIuNTAzMjZMNDguMzY4NSA2OS4yNzY4TDAgNkg0MC40OTcyTDY4LjQ1MDIgNDIuOTY0OEwxMDAuNzk4IDZaTTkzLjkgMTA5Ljk2OUgxMDQuNzc1TDM0LjU3MjggMTcuMTI1NkgyMi44OTA5TDkzLjkgMTA5Ljk2OVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=";
  const Rr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYuNDQ4IDExNy42MjdIMzUuNzE3NEMzMS45MzYyIDExNy42MjcgMjguMzU5MyAxMTYuOTExIDI1LjAzOCAxMTUuNDgxQzIxLjcxNjYgMTE0LjA1IDE4LjgwNCAxMTIuMTU5IDE2LjM1MTMgMTA5LjcwN0MxMy44OTg2IDEwNy4zMDUgMTEuOTA1OCAxMDQuNDQ0IDEwLjQyNCAxMDEuMTczQzguOTQyMTQgOTcuOTAzIDguMjI2NzcgOTQuMzc3MyA4LjIyNjc3IDkwLjU5NlY0NS42ODA5SDBWMjYuMDU5M0g0My43OTA5VjQ1LjY4MDlIMzAuMzUyMlY5MC41OTZDMzAuMzUyMiA5Mi4xOCAzMC44NjMxIDkzLjUwODYgMzEuOTM2MiA5NC41MzA2QzMzLjAwOTMgOTUuNjAzNiAzNC4yMzU2IDk2LjExNDYgMzUuNzE3NCA5Ni4xMTQ2SDQ2LjQ0OFYxMTcuNjI3WiIgZmlsbD0iI0RGNjQyMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg4LjI5NyAxMDEuMDJDOTIuNzQyNSAxMDEuMzI3IDk2LjMxOTQgMTAwLjY2MiA5OS4xMjk4IDk5LjAyNzJDMTAxLjk0IDk3LjM5MiAxMDMuNzI5IDk1LjUwMTQgMTA0LjU5NyA5My4zNTUzQzEwNS40NjYgOTEuMjA5MiAxMDUuMjEgODkuMDYzMSAxMDMuODgyIDg2Ljk2ODFDMTAyLjU1MyA4NC44NzMgOTkuOTQ3MyA4My4zOTEyIDk2LjA2MzkgODIuNTIyNUw3Ni44IDc5LjY2MTFDNjkuMTg2NCA3OC40ODU4IDYzLjEwNTcgNzUuNjI0MyA1OC40NTU4IDcwLjk3NDRDNTMuODA1OSA2Ni4zMjQ1IDUxLjUwNjUgNjAuMDM5NSA1MS41MDY1IDUyLjE3MDRDNTEuNTA2NSA0Ny44MjcxIDUyLjQyNjMgNDMuODkyNSA1NC4yNjU4IDQwLjMxNTdDNTYuMTA1MyAzNi43Mzg4IDU4LjY2MDIgMzMuNjcyOSA2MS44Nzk0IDMxLjE2OTFDNjUuMDk4NSAyOC42MTQyIDY4Ljk4MiAyNi42NzI1IDczLjQ3ODYgMjUuMzQ0Qzc4LjAyNjMgMjMuOTY0MyA4Mi45ODI4IDIzLjMgODguMzQ4MSAyMy4zQzk1LjI5NzQgMjMuMyAxMDEuODg5IDI0LjI3MDkgMTA4LjEyMyAyNi4xNjE1QzExNC4zNTcgMjguMDUyMiAxMTkuOTI3IDMwLjcwOTMgMTI0Ljg4MyAzNC4wODE3TDExNS4wNzIgNTAuMzgyQzExMi4wMDYgNDcuOTgwNCAxMDguMDIxIDQ2LjAzODYgMTAzLjExNSA0NC43MTAxQzk4LjIxIDQzLjMzMDQgOTMuMzA0NiA0Mi42NjYyIDg4LjM0ODEgNDIuNjY2MkM4My4zOTE2IDQyLjY2NjIgNzkuODY1OSA0My40MzI2IDc3LjQxMzIgNDQuOTY1NkM3NS4wMTE1IDQ2LjQ5ODUgNzMuNTgwOCA0OC4yMzU4IDczLjIyMzEgNTAuMTc3NkM3Mi44NjU0IDUyLjExOTMgNzMuMzc2NCA1My45NTg4IDc0LjgwNzEgNTUuNjk2MUM3Ni4yMzc5IDU3LjQzMzUgNzguMzg0IDU4LjUwNjUgODEuMTk0NCA1OC45MTUzTDEwMC44MTYgNjEuOTMwMUMxMDMuOTg0IDYyLjQ0MTEgMTA3LjE1MiA2My40MTE5IDExMC4zNzEgNjQuNzkxNkMxMTMuNTkgNjYuMTcxMiAxMTYuNTAzIDY4LjAxMDcgMTE5LjE2IDcwLjQxMjNDMTIxLjgxNyA3Mi43NjI4IDEyMy45MTIgNzUuNzI2NSAxMjUuNTQ3IDc5LjIwMTJDMTI3LjE4MyA4Mi42NzU4IDEyOCA4Ni44MTQ4IDEyOCA5MS41MTU4QzEyOCA5Ni4yMTY4IDEyNi45MjcgMTAwLjEgMTI0LjgzMiAxMDMuNjc3QzEyMi43MzcgMTA3LjI1NCAxMTkuODc2IDExMC4yNjkgMTE2LjE5NiAxMTIuNzczQzExMi41NjkgMTE1LjIyNSAxMDguMzI3IDExNy4xNjcgMTAzLjUyNCAxMTguNDQ0Qzk4LjcyMSAxMTkuNzczIDkzLjY2MjMgMTIwLjQzNyA4OC4yNDU5IDEyMC40MzdDODAuNjMyMyAxMjAuNDM3IDczLjU4MDggMTE5LjQ2NiA2Ni45ODkyIDExNy41NzZDNjAuMzk3NSAxMTUuNjg1IDU0LjU3MjQgMTEzLjAyOCA0OS41MTM3IDEwOS42NTZMNjAuNDQ4NiA5Mi40MzU1QzYzLjgyMTEgOTQuODM3MSA2Ny45MDg5IDk2LjgzIDcyLjcxMjEgOTguMzYyOUM3Ny41MTUzIDk5Ljg5NTggODIuNjc2MiAxMDAuODE2IDg4LjI5NyAxMDEuMTIyVjEwMS4wMloiIGZpbGw9IiNERjY0MjEiLz4KPHBhdGggZD0iTTMwLjg2NDcgN0g5LjE5OTIyVjI3LjU0MTRIMzAuODY0N1Y3WiIgZmlsbD0iI0RGNjQyMSIvPgo8L3N2Zz4K";
  const Zr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MzlfOCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwNS44NDMgMjkuODM3QzEwNS44NDMgMzQuMDc5IDEwMi40MDQgMzcuNTE3IDk4LjE2MyAzNy41MTdDOTMuOTIyIDM3LjUxNyA5MC40ODMgMzQuMDc5IDkwLjQ4MyAyOS44MzdDOTAuNDgzIDI1LjU5NSA5My45MjIgMjIuMTU3IDk4LjE2MyAyMi4xNTdDMTAyLjQwNSAyMi4xNTcgMTA1Ljg0MyAyNS41OTUgMTA1Ljg0MyAyOS44MzdaTTY0IDg1LjMzM0M1Mi4yMTggODUuMzMzIDQyLjY2NyA3NS43ODIgNDIuNjY3IDY0QzQyLjY2NyA1Mi4yMTggNTIuMjE4IDQyLjY2NyA2NCA0Mi42NjdDNzUuNzgyIDQyLjY2NyA4NS4zMzMgNTIuMjE4IDg1LjMzMyA2NEM4NS4zMzMgNzUuNzgyIDc1Ljc4MiA4NS4zMzMgNjQgODUuMzMzWk02NCAzMS4xMzVDNDUuODQ5IDMxLjEzNSAzMS4xMzUgNDUuODQ5IDMxLjEzNSA2NEMzMS4xMzUgODIuMTUxIDQ1Ljg0OSA5Ni44NjUgNjQgOTYuODY1QzgyLjE1MSA5Ni44NjUgOTYuODY1IDgyLjE1MSA5Ni44NjUgNjRDOTYuODY1IDQ1Ljg0OSA4Mi4xNTEgMzEuMTM1IDY0IDMxLjEzNVpNNjQgMTEuNTMyQzgxLjA4OSAxMS41MzIgODMuMTEzIDExLjU5NyA4OS44NjEgMTEuOTA1Qzk2LjEwMSAxMi4xOSA5OS40OSAxMy4yMzIgMTAxLjc0NSAxNC4xMDlDMTA0LjczMiAxNS4yNyAxMDYuODY0IDE2LjY1NyAxMDkuMTA0IDE4Ljg5N0MxMTEuMzQ0IDIxLjEzNiAxMTIuNzMxIDIzLjI2OCAxMTMuODkyIDI2LjI1NkMxMTQuNzY4IDI4LjUxMSAxMTUuODExIDMxLjkgMTE2LjA5NiAzOC4xNEMxMTYuNDA0IDQ0Ljg4OSAxMTYuNDY5IDQ2LjkxMyAxMTYuNDY5IDY0LjAwMkMxMTYuNDY5IDgxLjA5MSAxMTYuNDA0IDgzLjExNSAxMTYuMDk2IDg5Ljg2M0MxMTUuODExIDk2LjEwMyAxMTQuNzY5IDk5LjQ5MiAxMTMuODkyIDEwMS43NDdDMTEyLjczMSAxMDQuNzM0IDExMS4zNDQgMTA2Ljg2NiAxMDkuMTA0IDEwOS4xMDZDMTA2Ljg2NSAxMTEuMzQ2IDEwNC43MzMgMTEyLjczMyAxMDEuNzQ1IDExMy44OTRDOTkuNDkgMTE0Ljc3IDk2LjEwMSAxMTUuODEzIDg5Ljg2MSAxMTYuMDk4QzgzLjExMyAxMTYuNDA2IDgxLjA4OSAxMTYuNDcxIDY0IDExNi40NzFDNDYuOTEgMTE2LjQ3MSA0NC44ODYgMTE2LjQwNiAzOC4xMzggMTE2LjA5OEMzMS44OTggMTE1LjgxMyAyOC41MDkgMTE0Ljc3MSAyNi4yNTQgMTEzLjg5NEMyMy4yNjcgMTEyLjczMyAyMS4xMzUgMTExLjM0NiAxOC44OTUgMTA5LjEwNkMxNi42NTYgMTA2Ljg2NyAxNS4yNjggMTA0LjczNSAxNC4xMDcgMTAxLjc0N0MxMy4yMzEgOTkuNDkyIDEyLjE4OCA5Ni4xMDMgMTEuOTAzIDg5Ljg2M0MxMS41OTUgODMuMTE0IDExLjUzIDgxLjA5IDExLjUzIDY0LjAwMkMxMS41MyA0Ni45MTMgMTEuNTk1IDQ0Ljg4OSAxMS45MDMgMzguMTRDMTIuMTg4IDMxLjkgMTMuMjMgMjguNTExIDE0LjEwNyAyNi4yNTZDMTUuMjY4IDIzLjI2OSAxNi42NTUgMjEuMTM3IDE4Ljg5NSAxOC44OTdDMjEuMTM0IDE2LjY1NyAyMy4yNjYgMTUuMjcgMjYuMjU0IDE0LjEwOUMyOC41MDkgMTMuMjMzIDMxLjg5OCAxMi4xOSAzOC4xMzggMTEuOTA1QzQ0Ljg4NyAxMS41OTcgNDYuOTExIDExLjUzMiA2NCAxMS41MzJaTTY0IDBDNDYuNjE5IDAgNDQuNDM5IDAuMDc0IDM3LjYxMyAwLjM4NUMzMC44MDEgMC42OTYgMjYuMTQ4IDEuNzc4IDIyLjA3OCAzLjM2QzE3Ljg2OSA0Ljk5NSAxNC4zIDcuMTg0IDEwLjc0MiAxMC43NDJDNy4xODQgMTQuMyA0Ljk5NSAxNy44NjkgMy4zNiAyMi4wNzhDMS43NzggMjYuMTQ5IDAuNjk2IDMwLjgwMSAwLjM4NSAzNy42MTNDMC4wNzQgNDQuNDM5IDAgNDYuNjE5IDAgNjRDMCA4MS4zODEgMC4wNzQgODMuNTYxIDAuMzg1IDkwLjM4N0MwLjY5NiA5Ny4xOTkgMS43NzggMTAxLjg1MSAzLjM2IDEwNS45MjJDNC45OTUgMTEwLjEzMSA3LjE4NCAxMTMuNyAxMC43NDIgMTE3LjI1OEMxNC4zIDEyMC44MTYgMTcuODY5IDEyMy4wMDQgMjIuMDc4IDEyNC42NEMyNi4xNDkgMTI2LjIyMiAzMC44MDEgMTI3LjMwNCAzNy42MTMgMTI3LjYxNUM0NC40MzkgMTI3LjkyNiA0Ni42MTkgMTI4IDY0IDEyOEM4MS4zODEgMTI4IDgzLjU2MSAxMjcuOTI2IDkwLjM4NyAxMjcuNjE1Qzk3LjE5OSAxMjcuMzA0IDEwMS44NTEgMTI2LjIyMiAxMDUuOTIyIDEyNC42NEMxMTAuMTMxIDEyMy4wMDQgMTEzLjcgMTIwLjgxNiAxMTcuMjU4IDExNy4yNThDMTIwLjgxNiAxMTMuNyAxMjMuMDA0IDExMC4xMzEgMTI0LjY0IDEwNS45MjJDMTI2LjIyMiAxMDEuODUxIDEyNy4zMDQgOTcuMTk5IDEyNy42MTUgOTAuMzg3QzEyNy45MjYgODMuNTYxIDEyOCA4MS4zODEgMTI4IDY0QzEyOCA0Ni42MTkgMTI3LjkyNiA0NC40MzkgMTI3LjYxNSAzNy42MTNDMTI3LjMwNCAzMC44MDEgMTI2LjIyMiAyNi4xNDkgMTI0LjY0IDIyLjA3OEMxMjMuMDA0IDE3Ljg2OSAxMjAuODE2IDE0LjMgMTE3LjI1OCAxMC43NDJDMTEzLjcgNy4xODQgMTEwLjEzMSA0Ljk5NiAxMDUuOTIyIDMuMzZDMTAxLjg1MSAxLjc3OCA5Ny4xOTkgMC42OTYgOTAuMzg3IDAuMzg1QzgzLjU2MSAwLjA3NCA4MS4zODEgMCA2NCAwWiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzQzOV84KSIvPgo8L2c+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfNDM5XzgiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMTExMSAxMjguNDQ0KSBzY2FsZSgxNjMuNTUyKSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkIxNDAiLz4KPHN0b3Agb2Zmc2V0PSIwLjI1NTkiIHN0b3AtY29sb3I9IiNGRjU0NDUiLz4KPHN0b3Agb2Zmc2V0PSIwLjU5OSIgc3RvcC1jb2xvcj0iI0ZDMkI4MiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4RTQwQjciLz4KPC9yYWRpYWxHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MzlfOCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
  var St = {
    prefix: "fab",
    iconName: "tiktok",
    icon: [448, 512, [], "e07b", "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]
  };
  const Ur = {
    emits: ["open-payment-modal", "open-auth"],
    props: {
      user: {
        type: Object,
        default: () => ({})
      },
      isMyProfile: {
        type: Boolean,
        default: false
      },
      view: String,
      rulesShowContent: {
        type: Boolean,
        default: false
      },
      currencyCode: String
    },
    components: {
      IconButton: ne
    },
    setup() {
      return {
        faTiktok: St
      };
    },
    computed: {
      needLogin() {
        return this.view === ie.CHECKOUT;
      },
      socialMediaList() {
        const t = this.user.socialMedia || {};
        const e = [];
        if (t.twitter.exists) {
          e.push({
            icon: Vr,
            iconType: "image",
            iconSize: "14px",
            url: `${"https://www.twitter.com/"}${t.twitter.url}`,
            text: "X"
          });
        }
        if (t.tiktok.exists) {
          e.push({
            icon: St,
            iconStyle: {
              color: "#292828"
            },
            url: `${"https://www.tiktok.com/"}${t.tiktok.url}`,
            text: "TikTok"
          });
        }
        if (t.instagram.exists) {
          let o = t.instagram.url;
          o = o ? o.replace(/@/g, "") : null;
          e.push({
            icon: Zr,
            iconType: "image",
            iconSize: "18px",
            url: `${"https://www.instagram.com/"}${o}`,
            text: "Instagram"
          });
        }
        if (t.topshare.exists) {
          e.push({
            icon: Rr,
            iconType: "image",
            iconSize: "16px",
            url: `${"https://topshare.com.br/profile/"}${t.topshare.url}`,
            text: "topshare"
          });
        }
        return e;
      }
    },
    methods: {
      handleClick(t) {
        var e;
        var i;
        if (this.needLogin) {
          this.$emit("open-auth", "1");
        } else if (this.rulesShowContent) {
          this.$emit("open-payment-modal", {
            clientId: this.user.clientId,
            value: this.user.bumePrice ? this.user.bumePrice : (i = (e = this.user) == null ? undefined : e.prices) == null ? undefined : i.Monthly,
            profileName: this.user.profileName,
            cover: this.user.cover,
            avatar: this.user.avatar,
            currencyCode: this.currencyCode,
            currencySymbol: this.user.prices.CurrencySymbol,
            recurrence: H[0].TYPE,
            spreadFee: this.user.prices.SpreadFee,
            nickName: this.user.name
          });
        } else {
          if (!t) {
            return;
          }
          const o = t.startsWith("http") ? t : `https://${t}`;
          window.open(o, "_blank");
          return;
        }
      }
    }
  };
  const Fr = {
    class: "social-media-icons"
  };
  const _r = ["onClick"];
  function Qr(t, e, i, o, s, r) {
    const a = n.resolveComponent("icon-button");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createElementVNode("div", Fr, [(n.openBlock(true), n.createElementBlock(n.Fragment, null, n.renderList(r.socialMediaList, (l, c) => {
      n.openBlock();
      return n.createElementBlock("div", {
        key: c,
        onClick: d => r.handleClick(l.url)
      }, [n.createVNode(a, {
        icon: l.icon,
        "icon-type": l.iconType,
        "icon-size": l.iconSize,
        "icon-style": l.iconStyle,
        text: l.text
      }, null, 8, ["icon", "icon-type", "icon-size", "icon-style", "text"])], 8, _r);
    }), 128))])]);
  }
  const ve = E(Ur, [["render", Qr]]);
  const Yr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ve
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Hr = `.auth{margin-left:17px;margin-right:20px}.btn-subscription{border-radius:30px!important;padding:0 25px;width:100%;font-size:18px;font-weight:700;color:#fefefe;background:linear-gradient(45deg,#F58170,#F9AF77)}.btn-subscription:hover{color:#fefefe;background:linear-gradient(45deg,#FFA08A,#FFC09A)}
`;
  const Wr = {
    emits: ["call-auth"],
    components: {
      ElButton: S.ElButton
    },
    props: {
      nickName: String
    },
    setup() {
      const {
        t
      } = v();
      return {
        t
      };
    }
  };
  const Gr = {
    class: "auth mt-3"
  };
  const qr = {
    style: {
      "font-size": "16px",
      color: "#000",
      "font-weight": "300",
      "font-family": "'Inter', sans-serif",
      display: "block",
      "margin-bottom": "8px",
      "margin-top": "20px"
    }
  };
  const Kr = ["innerHTML"];
  const Jr = n.createElementVNode("div", {
    class: "col d-flex justify-content-center"
  }, [n.createElementVNode("span", null, "OK")], -1);
  function Xr(t, e, i, o, s, r) {
    const a = n.resolveComponent("el-button");
    n.openBlock();
    return n.createElementBlock("div", Gr, [n.createElementVNode("span", qr, n.toDisplayString(o.t("REGISTER_SUCCESS.TITLE")), 1), n.createElementVNode("span", {
      class: "mb-2",
      style: {
        "font-size": "14px",
        color: "#66748E",
        "font-weight": "500",
        "font-family": "'Inter', sans-serif",
        "margin-bottom": "8px"
      },
      innerHTML: o.t("REGISTER_SUCCESS.TEXT", {
        nickName: i.nickName
      })
    }, null, 8, Kr), n.createVNode(a, {
      class: "btn-subscription mt-2 mb-4",
      style: {
        height: "44px !important"
      },
      loading: t.loading,
      disabled: t.loading,
      onClick: e[0] || (e[0] = l => t.$emit("call-auth"))
    }, {
      default: n.withCtx(() => [Jr]),
      _: 1
    }, 8, ["loading", "disabled"])]);
  }
  const wt = E(Wr, [["render", Xr], ["styles", [Hr]]]);
  const $r = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: wt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const ea = {
    inject: ["appSettings"],
    components: {
      Background: Oe,
      Avatar: me,
      ElPopover: S.ElPopover,
      Bio: Te,
      SocialMediaList: ve,
      Subscribe: Ie,
      Auth: tt,
      IconButton: ne,
      MessageSuccess: wt,
      PersonalData: bt,
      UserContent: ke
    },
    props: {
      defaultCountry: String,
      user: {
        type: Object,
        required: true
      },
      showFollowers: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const {
        t
      } = v();
      return {
        t,
        faBadgeCheck: oe,
        faBars: Nt,
        faMapMarkerAlt: zt,
        faCircleDollar: je,
        faMessageLines: Le,
        VIEWS: ie
      };
    },
    mounted() {
      this.openConfirmEmail();
    },
    computed: {
      showAuth() {
        return this.showDetails && !this.showPersonal && !this.messageSuccess.show;
      }
    },
    data() {
      return {
        showDetails: false,
        showPersonal: false,
        messageSuccess: {
          show: false,
          nickName: null
        },
        orderPayment: null,
        authView: null,
        isRecoveryConfirmation: false
      };
    },
    methods: {
      getDisplayProfileName() {
        var e;
        if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[2-9a-bA-BeE][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test((e = this.user) == null ? undefined : e.profileName)) {
          return null;
        } else {
          return `@${this.user.profileName}`;
        }
      },
      infoSuccess(t) {
        this.showPersonal = false;
        this.messageSuccess.show = true;
        this.messageSuccess.nickName = t;
      },
      callAuth(t) {
        this.$refs.popover.hide();
        this.orderPayment = this.user.isFreeCreator ? null : t;
        this.messageSuccess.show = false;
        this.showDetails = true;
        this.showPersonal = false;
      },
      backProfile() {
        this.orderPayment = null;
        this.messageSuccess.show = false;
        this.showDetails = false;
        this.showPersonal = false;
      },
      recoveryPassword(t) {
        this.authView = t;
        this.callAuth("1");
      },
      share() {
        this.$refs.popover.hide();
        const t = C(this.appSettings.PRIVACY_URL, `/@${this.user.profileName}`);
        navigator.share({
          url: t
        });
      },
      openConfirmEmail() {
        const t = new URLSearchParams(window.location.search);
        const e = t.get("orderpayment");
        if (t.get("route") === "recovery-password-confirmation") {
          this.isRecoveryConfirmation = true;
          this.callAuth("1");
        }
        if (e) {
          this.authView = "email-confirmation";
          this.callAuth(e);
        }
      }
    }
  };
  const ta = {
    class: "options-container"
  };
  const ia = {
    class: "actions"
  };
  const na = {
    class: "d-flex align-items-center"
  };
  const oa = {
    class: "d-flex align-items-center"
  };
  const sa = {
    class: "user-info"
  };
  const ra = {
    class: "user-name"
  };
  const aa = {
    class: "profile-name"
  };
  const la = {
    key: 0
  };
  const ca = {
    key: 0,
    class: "location"
  };
  function da(t, e, i, o, s, r) {
    var h;
    const a = n.resolveComponent("background");
    const l = n.resolveComponent("avatar");
    const c = n.resolveComponent("icon-button");
    const d = n.resolveComponent("el-popover");
    const m = n.resolveComponent("font-awesome-icon");
    const f = n.resolveComponent("bio");
    const u = n.resolveComponent("social-media-list");
    const g = n.resolveComponent("Subscribe");
    const N = n.resolveComponent("Auth");
    const y = n.resolveComponent("PersonalData");
    const w = n.resolveComponent("MessageSuccess");
    const p = n.resolveComponent("UserContent");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createVNode(a, {
      user: i.user,
      "show-followers": i.showFollowers,
      "show-back-button": s.showDetails,
      "back-to-profile": s.showDetails,
      onBackProfile: r.backProfile
    }, null, 8, ["user", "show-followers", "show-back-button", "back-to-profile", "onBackProfile"]), n.createElementVNode("div", ta, [n.createVNode(l, {
      "expand-image-functionality": true,
      "expand-image-date-functionality": i.user.expandImageDateFunctionality,
      image: i.user.avatar,
      "user-name": i.user.name
    }, null, 8, ["expand-image-date-functionality", "image", "user-name"]), n.createElementVNode("div", ia, [n.createVNode(d, {
      ref: "popover",
      trigger: "click",
      placement: "left-start",
      width: "fit-content",
      teleported: false
    }, {
      reference: n.withCtx(() => [n.createVNode(c, {
        icon: o.faBars
      }, null, 8, ["icon"])]),
      default: n.withCtx(() => [n.createElementVNode("div", {
        class: "popover-item",
        onClick: e[0] || (e[0] = T => r.callAuth("1"))
      }, [n.createElementVNode("div", na, [n.createElementVNode("span", null, n.toDisplayString(o.t("SUBSCRIBE_OPTION")), 1)])]), n.createElementVNode("div", {
        class: "popover-item",
        onClick: e[1] || (e[1] = (...T) => r.share && r.share(...T))
      }, [n.createElementVNode("div", oa, [n.createElementVNode("span", null, n.toDisplayString(o.t("SHARE")), 1)])])]),
      _: 1
    }, 512)])]), n.createElementVNode("div", sa, [n.createElementVNode("div", ra, [n.createElementVNode("span", null, n.toDisplayString(i.user.name), 1), i.user.verified ? (n.openBlock(), n.createBlock(m, {
      key: 0,
      icon: o.faBadgeCheck
    }, null, 8, ["icon"])) : n.createCommentVNode("", true)]), n.createElementVNode("div", aa, [i.user.profileName ? (n.openBlock(), n.createElementBlock("span", la, n.toDisplayString(r.getDisplayProfileName()), 1)) : n.createCommentVNode("", true)]), n.createVNode(f, {
      description: i.user.bio
    }, null, 8, ["description"]), i.user.location ? (n.openBlock(), n.createElementBlock("div", ca, [n.createVNode(m, {
      icon: o.faMapMarkerAlt
    }, null, 8, ["icon"]), n.createElementVNode("span", null, n.toDisplayString(i.user.location), 1)])) : n.createCommentVNode("", true)]), i.user.isFreeCreator ? n.createCommentVNode("", true) : (n.openBlock(), n.createBlock(u, {
      key: 0,
      user: i.user,
      "is-my-profile": t.isMyProfile,
      view: o.VIEWS.CHECKOUT,
      onOpenAuth: r.callAuth
    }, null, 8, ["user", "is-my-profile", "view", "onOpenAuth"])), s.showDetails ? n.createCommentVNode("", true) : (n.openBlock(), n.createBlock(g, {
      key: 1,
      view: o.VIEWS.CHECKOUT,
      user: i.user,
      onCallAuth: r.callAuth
    }, null, 8, ["view", "user", "onCallAuth"])), r.showAuth ? (n.openBlock(), n.createBlock(N, {
      key: 2,
      onFormPaid: e[2] || (e[2] = T => s.showPersonal = true),
      user: i.user,
      authView: s.authView,
      orderPayment: s.orderPayment,
      "is-recovery-confirmation": s.isRecoveryConfirmation
    }, null, 8, ["user", "authView", "orderPayment", "is-recovery-confirmation"])) : n.createCommentVNode("", true), s.showPersonal ? (n.openBlock(), n.createBlock(y, {
      key: 3,
      "profile-name": (h = i.user) == null ? undefined : h.profileName,
      "default-country": i.defaultCountry,
      orderPayment: s.orderPayment,
      onRegisterSuccess: r.infoSuccess,
      onCallRecoveryPassword: r.recoveryPassword
    }, null, 8, ["profile-name", "default-country", "orderPayment", "onRegisterSuccess", "onCallRecoveryPassword"])) : n.createCommentVNode("", true), s.messageSuccess.show ? (n.openBlock(), n.createBlock(w, {
      key: 4,
      nickName: s.messageSuccess.nickName,
      onCallAuth: r.callAuth
    }, null, 8, ["nickName", "onCallAuth"])) : n.createCommentVNode("", true), s.showDetails ? n.createCommentVNode("", true) : (n.openBlock(), n.createBlock(p, {
      key: 5,
      "show-followers": i.showFollowers,
      user: i.user,
      view: o.VIEWS.CHECKOUT,
      onOpenAuth: r.callAuth
    }, null, 8, ["show-followers", "user", "view", "onOpenAuth"]))]);
  }
  const At = E(ea, [["render", da]]);
  const ma = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: At
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const pl = "";
  const ua = {
    inject: ["appSettings"],
    emits: ["unfollow-profile", "enable-renewal", "report-profile", "toggle-mute", "toggle-friend", "request-verification"],
    props: {
      user: Object,
      isMyProfile: Boolean,
      isPrivacyProfile: Boolean,
      view: String
    },
    components: {
      IconButton: ne,
      ElPopover: S.ElPopover,
      ElDivider: S.ElDivider
    },
    setup() {
      const {
        t
      } = v();
      return {
        t,
        faUser: ue,
        faCalendarLines: ps,
        faBoxArchive: ts,
        faGear: cs,
        faBars: Nt,
        faMessageLines: Le,
        faShareNodes: ns,
        faHeartCircleXmark: rs,
        faHeartCirclePlus: os,
        faCircleExclamation: is,
        faVolumeOff: ls,
        faVolumeXmark: ms,
        faCircleMinus: $o,
        faCirclePlus: us,
        faBadgeCheck: oe
      };
    },
    computed: {
      existsSubscriptionEndDate() {
        return !Pt.isEmpty(this.user.subscriptionEndDate);
      }
    },
    methods: {
      getOptionsForMyProfile(t) {
        const e = [{
          icon: this.faUser,
          label: this.t("MY_PROFILE"),
          function: this.goToMyProfile
        }, {
          icon: this.faCalendarLines,
          label: this.t("SCHEDULED_POSTS"),
          function: this.goToScheduledPosts
        }, {
          icon: this.faBoxArchive,
          label: this.t("ARCHIVED"),
          function: this.goToArchived
        }, {
          icon: this.faGear,
          label: this.t("EDIT_PROFILE"),
          function: this.goToEditProfile
        }, {
          icon: this.faBadgeCheck,
          label: this.t("REQUEST_VERIFICATION"),
          function: this.requestVerification
        }];
        const o = {
          profile: [1, 2, 3, ...(this.user.verified ? [] : [4])],
          scheduled: [0, 2, 3],
          archived: [0, 1, 3]
        }[t];
        if (o) {
          return o.map(s => e[s]);
        } else {
          return [];
        }
      },
      formatDate(t) {
        return new Date(t).toLocaleDateString();
      },
      goToMyProfile() {
        window.location.href = `/profile/${this.user.profileName}`;
      },
      goToScheduledPosts() {
        window.location.href = "/agendado";
      },
      goToArchived() {
        window.location.href = "/postsarquivados";
      },
      goToEditProfile() {
        window.location.href = "/settings/creator";
      },
      goToChat() {
        window.location.href = `/chat/${this.user.userId}`;
      },
      share() {
        const t = C(this.appSettings.PRIVACY_URL, `/@${this.user.profileName}`);
        navigator.share({
          url: t
        });
      },
      unfollowProfile() {
        this.$emit("unfollow-profile", {
          clientId: this.user.clientId
        });
      },
      enableRenewal() {
        this.$emit("enable-renewal", {
          clientId: this.user.clientId
        });
      },
      reportProfile() {
        this.$emit("report-profile", {
          reportedProfileId: this.user.clientId
        });
      },
      toggleMuteProfile() {
        this.$emit("toggle-mute", {
          clientId: this.user.clientId,
          isMuted: this.user.isMuted
        });
      },
      toggleFriend() {
        this.$emit("toggle-friend", {
          userId: this.user.userId,
          isFriend: this.user.isFriend
        });
      },
      requestVerification() {
        this.$emit("request-verification", {
          profileName: this.user.profileName
        });
      }
    }
  };
  const pa = ["onClick"];
  const ha = {
    class: "d-flex align-items-center"
  };
  const fa = {
    class: "icon-container"
  };
  const ga = {
    key: 0,
    class: "popover-title"
  };
  const ya = {
    key: 1,
    class: "popover-title"
  };
  const Ma = {
    class: "d-flex align-items-center"
  };
  const Na = {
    class: "icon-container"
  };
  const za = {
    class: "d-flex align-items-center"
  };
  const Da = {
    class: "icon-container"
  };
  const Ea = {
    class: "d-flex align-items-center"
  };
  const xa = {
    class: "icon-container"
  };
  const Ta = {
    class: "d-flex align-items-center"
  };
  const ba = {
    class: "icon-container"
  };
  const Sa = {
    class: "d-flex align-items-center"
  };
  const wa = {
    class: "icon-container"
  };
  const Aa = {
    class: "d-flex align-items-center"
  };
  const Ia = {
    class: "icon-container"
  };
  const Ca = {
    class: "d-flex align-items-center"
  };
  const La = {
    class: "icon-container"
  };
  function ja(t, e, i, o, s, r) {
    const a = n.resolveComponent("icon-button");
    const l = n.resolveComponent("font-awesome-icon");
    const c = n.resolveComponent("el-divider");
    const d = n.resolveComponent("el-popover");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createVNode(d, {
      trigger: "click",
      placement: "left-start",
      teleported: false,
      width: "fit-content"
    }, {
      reference: n.withCtx(() => [n.createVNode(a, {
        icon: o.faBars
      }, null, 8, ["icon"])]),
      default: n.withCtx(() => {
        var m;
        var f;
        return [i.isMyProfile ? (n.openBlock(true), n.createElementBlock(n.Fragment, {
          key: 0
        }, n.renderList(r.getOptionsForMyProfile(i.view), u => {
          n.openBlock();
          return n.createElementBlock("div", {
            key: u.label,
            onClick: u.function,
            class: "popover-item"
          }, [n.createElementVNode("div", ha, [n.createElementVNode("div", fa, [n.createVNode(l, {
            icon: u.icon
          }, null, 8, ["icon"])]), n.createElementVNode("span", null, n.toDisplayString(u.label), 1)])], 8, pa);
        }), 128)) : (n.openBlock(), n.createElementBlock(n.Fragment, {
          key: 1
        }, [i.user.isFreeCreator ? (n.openBlock(), n.createElementBlock("div", ga, n.toDisplayString(o.t("FREE_SUBSCRIPTION")), 1)) : r.existsSubscriptionEndDate ? (n.openBlock(), n.createElementBlock("div", ya, n.toDisplayString(o.t("ACCESS_UNTIL")) + " " + n.toDisplayString(r.formatDate(i.user.subscriptionEndDate)), 1)) : n.createCommentVNode("", true), i.user.isFreeCreator || r.existsSubscriptionEndDate ? (n.openBlock(), n.createBlock(c, {
          key: 2
        })) : n.createCommentVNode("", true), i.user.imFollowing || r.existsSubscriptionEndDate ? (n.openBlock(), n.createElementBlock("div", {
          key: 3,
          onClick: e[0] || (e[0] = (...u) => r.goToChat && r.goToChat(...u)),
          class: "popover-item"
        }, [n.createElementVNode("div", Ma, [n.createElementVNode("div", Na, [n.createVNode(l, {
          icon: o.faMessageLines
        }, null, 8, ["icon"])]), n.createElementVNode("span", null, n.toDisplayString(o.t("CHAT")), 1)])])) : n.createCommentVNode("", true), n.createElementVNode("div", {
          onClick: e[1] || (e[1] = (...u) => r.share && r.share(...u)),
          class: "popover-item"
        }, [n.createElementVNode("div", za, [n.createElementVNode("div", Da, [n.createVNode(l, {
          icon: o.faShareNodes
        }, null, 8, ["icon"])]), n.createElementVNode("span", null, n.toDisplayString(o.t("SHARE")), 1)])]), i.user.imFollowing ? (n.openBlock(), n.createElementBlock("div", {
          key: 4,
          onClick: e[2] || (e[2] = (...u) => r.unfollowProfile && r.unfollowProfile(...u)),
          class: "popover-item"
        }, [n.createElementVNode("div", Ea, [n.createElementVNode("div", xa, [n.createVNode(l, {
          icon: o.faHeartCircleXmark
        }, null, 8, ["icon"])]), n.createElementVNode("span", null, n.toDisplayString(((f = (m = i.user) == null ? undefined : m.prices) == null ? undefined : f.Monthly) == 0 ? o.t("UNFOLLOW") : o.t("DISABLE_RENEWAL")), 1)])])) : r.existsSubscriptionEndDate ? (n.openBlock(), n.createElementBlock("div", {
          key: 5,
          onClick: e[3] || (e[3] = (...u) => r.enableRenewal && r.enableRenewal(...u)),
          class: "popover-item"
        }, [n.createElementVNode("div", Ta, [n.createElementVNode("div", ba, [n.createVNode(l, {
          icon: o.faHeartCirclePlus
        }, null, 8, ["icon"])]), n.createElementVNode("span", null, n.toDisplayString(o.t("ENABLE_RENEWAL")), 1)])])) : n.createCommentVNode("", true), n.createElementVNode("div", {
          onClick: e[4] || (e[4] = (...u) => r.reportProfile && r.reportProfile(...u)),
          class: "popover-item"
        }, [n.createElementVNode("div", Sa, [n.createElementVNode("div", wa, [n.createVNode(l, {
          icon: o.faCircleExclamation
        }, null, 8, ["icon"])]), n.createElementVNode("span", null, n.toDisplayString(o.t("REPORT_PROFILE")), 1)])]), (i.user.imFollowing || r.existsSubscriptionEndDate) && !i.isPrivacyProfile ? (n.openBlock(), n.createElementBlock("div", {
          key: 6,
          onClick: e[5] || (e[5] = (...u) => r.toggleMuteProfile && r.toggleMuteProfile(...u)),
          class: "popover-item"
        }, [n.createElementVNode("div", Aa, [n.createElementVNode("div", Ia, [n.createVNode(l, {
          icon: i.user.isMuted ? o.faVolumeOff : o.faVolumeXmark
        }, null, 8, ["icon"])]), n.createElementVNode("span", null, n.toDisplayString(i.user.isMuted ? o.t("UNMUTE_PROFILE") : o.t("MUTE_PROFILE")), 1)])])) : n.createCommentVNode("", true), i.user.isContentCreator ? (n.openBlock(), n.createElementBlock("div", {
          key: 7,
          onClick: e[6] || (e[6] = (...u) => r.toggleFriend && r.toggleFriend(...u)),
          class: "popover-item"
        }, [n.createElementVNode("div", Ca, [n.createElementVNode("div", La, [n.createVNode(l, {
          icon: i.user.isFriend ? o.faCircleMinus : o.faCirclePlus
        }, null, 8, ["icon"])]), n.createElementVNode("span", null, n.toDisplayString(i.user.isFriend ? o.t("REMOVE_FRIEND") : o.t("ADD_FRIEND")), 1)])])) : n.createCommentVNode("", true)], 64))];
      }),
      _: 1
    })]);
  }
  const It = E(ua, [["render", ja]]);
  const Oa = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: It
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const ka = {
    emits: ["unfollow-profile", "enable-renewal", "report-profile", "send-tip", "toggle-mute", "toggle-friend", "request-verification", "open-payment-modal"],
    components: {
      Background: Oe,
      Bio: Te,
      Avatar: me,
      Popover: It,
      UserContent: ke,
      IconButton: ne,
      SocialMediaList: ve,
      Subscribe: Ie
    },
    props: {
      user: {
        type: Object,
        required: true
      },
      showTipButton: {
        type: Boolean,
        default: false
      },
      showChatButton: {
        type: Boolean,
        default: false
      },
      showCallButton: {
        type: Boolean,
        default: false
      },
      isMyProfile: {
        type: Boolean,
        default: false
      },
      isPrivacyProfile: {
        type: Boolean,
        default: false
      },
      isOnboarding: {
        type: Boolean,
        default: false
      },
      showFollowers: {
        type: Boolean,
        default: false
      },
      defaultCountry: String,
      currencyCode: String,
      view: String
    },
    setup() {
      return {
        faBadgeCheck: oe,
        faMapMarkerAlt: zt,
        faCircleDollar: je,
        faMessageLines: Le,
        faPhone: as
      };
    },
    computed: {
      showSocialMedia() {
        return !this.user.isFreeCreator || this.user.imFollowing || this.isMyProfile;
      },
      rulesShowContent() {
        return !this.isMyProfile && !this.user.imFollowing && this.expiredDate && this.user.isContentCreator;
      }
    },
    mounted() {
      this.validateSubscription();
    },
    data() {
      return {
        expiredDate: false,
        actionsList: [{
          icon: this.faPhone,
          show: this.showCallButton,
          function: this.goToCall
        }, {
          icon: this.faCircleDollar,
          show: this.showTipButton,
          function: this.sendTip
        }, {
          icon: this.faMessageLines,
          show: this.showChatButton,
          function: this.goToChat
        }]
      };
    },
    methods: {
      getDisplayProfileName() {
        var e;
        if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[2-9a-bA-BeE][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test((e = this.user) == null ? undefined : e.profileName)) {
          return null;
        } else {
          return `@${this.user.profileName}`;
        }
      },
      goToChat() {
        window.location.href = `/chat/${this.user.userId}`;
      },
      goToCall() {
        window.location.href = `/chat/${this.user.userId}&message=meeting`;
      },
      sendTip() {
        this.$emit("send-tip", {
          profileUserName: this.user.name,
          profileName: this.user.profileName,
          profileUserImageUrl: this.user.avatar,
          profileId: this.user.clientId,
          currencyCode: this.currencyCode,
          currencySymbol: this.user.prices.CurrencySymbol,
          spreadFee: this.user.prices.SpreadFee
        });
      },
      validateSubscription() {
        var t;
        if ((t = this.user) != null && t.subscriptionEndDate) {
          this.expiredDate = V(this.user.subscriptionEndDate).isSameOrBefore(V());
        } else {
          this.expiredDate = true;
        }
      }
    }
  };
  const va = {
    class: "options-container"
  };
  const Pa = {
    key: 0,
    class: "actions"
  };
  const Ba = {
    class: "user-info"
  };
  const Va = {
    class: "user-name"
  };
  const Ra = {
    class: "profile-name"
  };
  const Za = {
    key: 0
  };
  const Ua = {
    key: 0,
    class: "location"
  };
  function Fa(t, e, i, o, s, r) {
    const a = n.resolveComponent("background");
    const l = n.resolveComponent("avatar");
    const c = n.resolveComponent("icon-button");
    const d = n.resolveComponent("popover");
    const m = n.resolveComponent("font-awesome-icon");
    const f = n.resolveComponent("bio");
    const u = n.resolveComponent("social-media-list");
    const g = n.resolveComponent("Subscribe");
    const N = n.resolveComponent("UserContent");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createVNode(a, {
      user: i.user,
      "show-back-button": !i.isOnboarding,
      "show-followers": i.showFollowers,
      "is-onboarding": i.isOnboarding
    }, null, 8, ["user", "show-back-button", "show-followers", "is-onboarding"]), n.createElementVNode("div", va, [n.createVNode(l, {
      "expand-image-functionality": true,
      "expand-image-date-functionality": i.user.expandImageDateFunctionality,
      image: i.user.avatar,
      "user-name": i.user.name,
      "is-online": i.user.isOnline
    }, null, 8, ["expand-image-date-functionality", "image", "user-name", "is-online"]), i.isOnboarding ? n.createCommentVNode("", true) : (n.openBlock(), n.createElementBlock("div", Pa, [(n.openBlock(true), n.createElementBlock(n.Fragment, null, n.renderList(s.actionsList, (y, w) => {
      n.openBlock();
      return n.createElementBlock(n.Fragment, {
        key: w
      }, [y.show ? (n.openBlock(), n.createBlock(c, {
        key: 0,
        icon: y.icon,
        onClick: y.function
      }, null, 8, ["icon", "onClick"])) : n.createCommentVNode("", true)], 64);
    }), 128)), n.createVNode(d, {
      user: i.user,
      "is-my-profile": i.isMyProfile,
      "is-privacy-profile": i.isPrivacyProfile,
      view: i.view,
      onUnfollowProfile: e[0] || (e[0] = y => t.$emit("unfollow-profile", y)),
      onEnableRenewal: e[1] || (e[1] = y => t.$emit("enable-renewal", y)),
      onReportProfile: e[2] || (e[2] = y => t.$emit("report-profile", y)),
      onToggleMute: e[3] || (e[3] = y => t.$emit("toggle-mute", y)),
      onToggleFriend: e[4] || (e[4] = y => t.$emit("toggle-friend", y)),
      onRequestVerification: e[5] || (e[5] = y => t.$emit("request-verification", y))
    }, null, 8, ["user", "is-my-profile", "is-privacy-profile", "view"])]))]), n.createElementVNode("div", Ba, [n.createElementVNode("div", Va, [n.createElementVNode("span", null, n.toDisplayString(i.user.name), 1), i.user.verified ? (n.openBlock(), n.createBlock(m, {
      key: 0,
      style: {
        "margin-left": "2px"
      },
      icon: o.faBadgeCheck
    }, null, 8, ["icon"])) : n.createCommentVNode("", true)]), n.createElementVNode("div", Ra, [i.user.profileName ? (n.openBlock(), n.createElementBlock("span", Za, n.toDisplayString(r.getDisplayProfileName()), 1)) : n.createCommentVNode("", true)]), n.createVNode(f, {
      description: i.user.bio
    }, null, 8, ["description"]), i.user.location ? (n.openBlock(), n.createElementBlock("div", Ua, [n.createVNode(m, {
      icon: o.faMapMarkerAlt
    }, null, 8, ["icon"]), n.createElementVNode("span", null, n.toDisplayString(i.user.location || "Miami FL"), 1)])) : n.createCommentVNode("", true)]), r.showSocialMedia ? (n.openBlock(), n.createBlock(u, {
      key: 0,
      class: "social-media",
      user: i.user,
      "is-my-profile": i.isMyProfile,
      rulesShowContent: r.rulesShowContent,
      "currency-code": i.currencyCode,
      onOpenPaymentModal: e[6] || (e[6] = y => t.$emit("open-payment-modal", y))
    }, null, 8, ["user", "is-my-profile", "rulesShowContent", "currency-code"])) : n.createCommentVNode("", true), r.rulesShowContent ? (n.openBlock(), n.createBlock(g, {
      key: 1,
      user: i.user,
      view: i.view,
      "currency-code": i.currencyCode,
      onOpenPaymentModal: e[7] || (e[7] = y => t.$emit("open-payment-modal", y))
    }, null, 8, ["user", "view", "currency-code"])) : n.createCommentVNode("", true), r.rulesShowContent ? (n.openBlock(), n.createBlock(N, {
      key: 2,
      user: i.user,
      view: i.view,
      "show-followers": i.showFollowers,
      rulesShowContent: r.rulesShowContent,
      onOpenPaymentModal: e[8] || (e[8] = y => t.$emit("open-payment-modal", y))
    }, null, 8, ["user", "view", "show-followers", "rulesShowContent"])) : n.createCommentVNode("", true)]);
  }
  const Ct = E(ka, [["render", Fa]]);
  const _a = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ct
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Qa = `.user-info-container{touch-action:pan-y!important}.media-content-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;height:100%;padding:40px!important}.media-content-wrapper .pswp-media-image{overflow:hidden;max-width:100%}.media-content-wrapper .padlock-img{position:absolute;top:48%;width:40px;height:40px}.media-content-wrapper .media-description-container{position:absolute;top:48%;margin-top:3.5rem;width:200px;height:26px;display:flex;justify-content:center;align-items:center;gap:1rem}.media-content-wrapper .media-description-container .container-counter-icon{display:flex;gap:.25rem;color:#6c757d}.media-content-wrapper .media-description-container .counter-icon-image,.media-content-wrapper .media-description-container .counter-icon-video{display:flex;align-items:center;gap:.25rem}.media-content-wrapper .media-description-container .counter-icon{width:16px;height:16px}.media-content-wrapper .post-text-container{display:flex;flex-direction:column;max-width:320px;max-height:100px;position:absolute;bottom:6rem}.media-content-wrapper .post-text-container .post-text{display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden;color:#fff}@media (max-height: 635px){.media-content-wrapper .post-text-container .post-text{-webkit-line-clamp:2}}@media (max-height: 590px){.media-content-wrapper .post-text-container .post-text{-webkit-line-clamp:1}}@media (max-height: 750px){.media-content-wrapper .post-text-container{bottom:3rem}}@media (max-height: 545px){.media-content-wrapper .post-text-container{display:none}}
`;
  const Ya = {
    inject: ["appSettings", "$http", "token"],
    components: {
      PageCheckout: At,
      PageProfile: Ct
    },
    emits: ["send-tip", "unfollow-profile", "enable-renewal", "report-profile", "toggle-mute", "toggle-friend", "request-verification", "open-payment-modal", "subscribe-free-profile", "subscribe-paid-profile"],
    props: {
      user: {
        type: Object,
        required: true,
        default: () => ({
          avatar: null,
          cover: null,
          userId: null,
          clientId: null,
          name: null,
          profileName: null,
          verified: false,
          bio: null,
          site: null,
          location: null,
          stats: {
            images: null,
            videos: null,
            likes: null
          },
          socialMedia: {
            twitter: null,
            tiktok: null,
            instagram: null,
            topshare: null
          },
          isContentCreator: false,
          isFreeCreator: false,
          imFollowing: false,
          isFriend: false,
          isMuted: false,
          prices: {
            Monthly: null,
            Quarterly: null,
            SemiAnnual: null
          },
          subscriptionEndDate: null
        })
      },
      showTipButton: {
        type: Boolean,
        default: false
      },
      showChatButton: {
        type: Boolean,
        default: false
      },
      showCallButton: {
        type: Boolean,
        default: false
      },
      isMyProfile: {
        type: Boolean,
        default: false
      },
      isPrivacyProfile: {
        type: Boolean,
        default: false
      },
      isOnboarding: {
        type: Boolean,
        default: false
      },
      showFollowers: {
        type: Boolean,
        default: false
      },
      view: String,
      currencyCode: String,
      defaultCountry: String
    },
    computed: {
      rulescontent() {
        return !this.user.imFollowing && !this.isMyProfile && this.user.prices.Monthly > 0;
      },
      attrStyle() {
        return {
          "--height": this.height != null ? `${this.height}px` : "calc(100vh - 260px)",
          "--width": this.width != null ? `${this.width}px` : ""
        };
      }
    },
    data() {
      return {
        checkFollowing: false,
        expiredDate: false
      };
    },
    mounted() {
      this.validateSubscription();
      this.openPayment();
    },
    methods: {
      openPayment() {
        var i;
        var o;
        if (this.user.imFollowing || ((o = (i = this.user) == null ? undefined : i.prices) == null ? undefined : o.Monthly) === 0 || this.isMyProfile || !this.expiredDate) {
          return;
        }
        const e = window.location.pathname.split("/").find(s => s.startsWith("orderpayment="));
        if (e) {
          const s = e.split("=")[1];
          if (s) {
            const a = this.getPrice(s);
            const l = this.getRecurrence(s);
            this.$emit("open-payment-modal", {
              clientId: this.user.clientId,
              value: this.user.bumePrice ? this.user.bumePrice : a,
              profileName: this.user.profileName,
              cover: this.user.cover,
              avatar: this.user.avatar,
              currencyCode: this.currencyCode,
              currencySymbol: this.user.prices.CurrencySymbol,
              recurrence: l,
              spreadFee: this.user.prices.SpreadFee,
              nickName: this.user.name
            });
          }
          const r = window.location.pathname.replace(/\/orderpayment=\d+/, "");
          window.history.replaceState(null, "", r);
        }
      },
      getRecurrence(t) {
        const e = H.find(i => i.VALUE === t);
        if (e) {
          return e.TYPE;
        } else {
          return H[0].TYPE;
        }
      },
      getPrice(t) {
        var e;
        var i;
        var o;
        var s;
        var r;
        var a;
        var l;
        var c;
        switch (t) {
          case "1":
            if ((i = (e = this.user) == null ? undefined : e.prices) == null) {
              return undefined;
            } else {
              return i.Monthly;
            }
          case "2":
            if ((s = (o = this.user) == null ? undefined : o.prices) == null) {
              return undefined;
            } else {
              return s.Quarterly;
            }
          case "3":
            if ((a = (r = this.user) == null ? undefined : r.prices) == null) {
              return undefined;
            } else {
              return a.SemiAnnual;
            }
          default:
            if ((c = (l = this.user) == null ? undefined : l.prices) == null) {
              return undefined;
            } else {
              return c.Monthly;
            }
        }
      },
      validateSubscription() {
        var t;
        if ((t = this.user) != null && t.subscriptionEndDate) {
          this.expiredDate = V(this.user.subscriptionEndDate).isSameOrBefore(V());
        } else {
          this.expiredDate = true;
        }
      }
    }
  };
  function Ha(t, e, i, o, s, r) {
    const a = n.resolveComponent("page-checkout");
    const l = n.resolveComponent("page-profile");
    n.openBlock();
    return n.createElementBlock("div", {
      class: "user-info-container",
      style: n.normalizeStyle(r.attrStyle)
    }, [i.view === "checkout" ? (n.openBlock(), n.createBlock(a, {
      key: 0,
      user: i.user,
      "default-country": i.defaultCountry,
      "show-followers": i.showFollowers
    }, null, 8, ["user", "default-country", "show-followers"])) : i.view === "profile" ? (n.openBlock(), n.createBlock(l, {
      key: 1,
      user: i.user,
      view: i.view,
      "currency-code": i.currencyCode,
      "is-my-profile": i.isMyProfile,
      "is-privacy-profile": i.isPrivacyProfile,
      "is-onboarding": i.isOnboarding,
      "show-followers": i.showFollowers,
      "default-country": i.defaultCountry,
      "show-chat-button": i.showChatButton,
      "show-call-button": i.showCallButton,
      "show-tip-button": i.showTipButton,
      onSendTip: e[0] || (e[0] = c => t.$emit("send-tip", c)),
      onToggleMute: e[1] || (e[1] = c => t.$emit("toggle-mute", c)),
      onToggleFriend: e[2] || (e[2] = c => t.$emit("toggle-friend", c)),
      onEnableRenewal: e[3] || (e[3] = c => t.$emit("enable-renewal", c)),
      onReportProfile: e[4] || (e[4] = c => t.$emit("report-profile", c)),
      onUnfollowProfile: e[5] || (e[5] = c => t.$emit("unfollow-profile", c)),
      onOpenPaymentModal: e[6] || (e[6] = c => t.$emit("open-payment-modal", c)),
      onRequestVerification: e[7] || (e[7] = c => t.$emit("request-verification", c))
    }, null, 8, ["user", "view", "currency-code", "is-my-profile", "is-privacy-profile", "is-onboarding", "show-followers", "default-country", "show-chat-button", "show-call-button", "show-tip-button"])) : n.createCommentVNode("", true)], 4);
  }
  const Lt = E(Ya, [["render", Ha], ["styles", [Qa]]]);
  const Wa = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Lt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Ga = `@charset "UTF-8";@import"https://fonts.googleapis.com/css2?family=Inter&display=swap";@import"https://cdnjs.cloudflare.com/ajax/libs/element-plus/2.2.30/index.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.9/photoswipe.min.css";.parent-avatar .avatar{cursor:pointer!important}.avatar-wrapper{position:relative}.avatar-wrapper .vac-state-online{position:absolute;width:16px;height:16px;border:3px solid #fff;border-radius:50%;bottom:12px;right:11px;background-color:#35d063;box-sizing:content-box;z-index:5}.avatar{width:140px;height:140px;border-radius:50%;overflow:hidden;border:4px solid white;z-index:2;position:relative}.avatar img{width:100%;height:100%;object-fit:cover}.social-media-icons{display:flex;gap:16px;margin:0 16px;overflow-x:auto}.social-media-icons .icon-button{width:fit-content;border-radius:25px;padding:12px;gap:8px}@media screen and (max-width: 700px){.social-media{margin-bottom:10px!important}}.bio{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-bottom:4px;transition:max-height .3s ease}.bio-expanded{-webkit-line-clamp:unset;max-height:none;overflow:visible}.toggle-bio-button{display:inline-block;font-size:14px;cursor:pointer;margin-bottom:16px;color:rgba(var(--color-privacy-3-rgb),1)}.popover-title{pointer-events:none}.popover-title:hover{background:none;color:inherit}.popover-item{display:flex;align-items:center;cursor:pointer;min-height:32px}.el-divider--horizontal{margin:8px 0}.el-popper{display:flex;flex-direction:column;gap:4px;border-radius:18px!important;padding:16px!important}.el-popover.el-popper{min-width:fit-content}.icon-container{display:flex;align-items:center;justify-content:center;width:24px;height:24px;margin-right:8px}.icon-container svg{font-size:16px}.options-container{display:flex;align-items:flex-end;justify-content:space-between;padding:0 16px;margin-top:-72px;margin-bottom:4px}.options-container .actions{display:flex;gap:8px;margin-bottom:10px}.user-name{display:flex;align-items:center}.user-name span{font-size:20px;font-weight:700;line-height:20px}.user-name svg{font-size:18px;color:rgba(var(--color-privacy-3-rgb),1)}.profile-name{display:flex;align-items:center}.profile-name .separator{font-size:12px;margin:0 4px}.user-info{padding:0 16px}.user-info .location,.user-info .site{display:flex;align-items:center;font-size:14px;margin-bottom:16px;gap:4px}.user-info .location svg,.user-info .site svg{font-size:16px}.user-info .site{width:fit-content;color:#757a91;cursor:pointer;text-decoration:none;transition:all .2s}.user-info .site:hover{color:rgba(var(--color-privacy-3-rgb),1)}.tab-main{--bs-nav-tabs-border-width: none !important;width:100%!important;justify-content:space-between!important;border-bottom:2px solid transparent;border-image:linear-gradient(45deg,#F58170,#F9AF77) 1}.tab-main .nav-item.main{width:50%!important}.tab-main .nav-item.main .text-tab{border-top-left-radius:14px!important;border-top-right-radius:14px!important;height:50px;display:flex;justify-content:center;align-items:center;border:none!important;font-family:Inter,sans-serif!important;font-weight:500;font-size:18px;cursor:pointer;user-select:none}.tab-main .nav-item.main .nav-link.main-item{color:#66748e;background-color:#f4f4f4}.tab-main .nav-item.main .nav-link.main-item:hover{background-color:#fafafa}.tab-main .nav-item.main .nav-link.active.main-item{color:#f58673;background-color:#fef3f1}.tab-main .nav-item.main .nav-link.active.main-item:hover{background-color:#fcf1eb}@media (max-width: 767px){.tab-main .nav-item.main .nav-link.active.main-item:hover{background-color:#fef3f1}}.tab-sub{--bs-nav-tabs-border-width: none !important;width:100%!important;list-style:none;display:flex;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:thin;justify-content:center;gap:5px;margin-bottom:19.2px!important}.tab-sub .tab-sub::-webkit-scrollbar{height:4px}.tab-sub .tab-sub::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);border-radius:4px}.tab-sub .nav-item.sub .text-sub-tab{display:flex;justify-content:center;align-items:center;font-family:Inter,sans-serif!important;font-weight:300;font-size:16px;white-space:nowrap;cursor:pointer;user-select:none;color:#66748e!important}.tab-sub .nav-item.sub .nav-link.sub-item{color:#66748e;background-color:#f4f4f4;border-radius:30px;max-height:32px}.tab-sub .nav-item.sub .nav-link.sub-item:hover{background-color:#fafafa}.tab-sub .nav-item.sub .nav-link.active.sub-item{color:#f58673!important;background-color:#fef3f1}@media (max-width: 767px){.tab-sub .nav-item.sub .nav-link.active.sub-item:hover{background-color:#fef3f1}}@media (max-width: 769px){.control-sub-menu{padding:0 13px}.text-sub-tab{font-size:12px!important;padding:8px 12px}}.count-list{display:flex;align-items:center;gap:12px}.count-list .stat-display{display:flex;align-items:center;gap:4px}.count-list .stat-display:not(:last-child):after{content:"\\2022";margin-left:6px;font-size:10px}
`;
  const qa = {
    computed: {
      ...Yt(hi)
    },
    beforeMount() {
      this.$emit("before-mount", {
        context: this
      });
    },
    mounted() {
      this.$emit("mounted", {
        context: this,
        el: this.$el
      });
    }
  };
  const Ka = Object.assign(qa, {
    __name: "App.ce",
    props: {
      ready: {
        type: [Boolean, String],
        default: true
      },
      appSettings: [Object, String],
      token: String,
      tokenV1: String,
      locale: String,
      user: [Object, String],
      showFollowers: Boolean,
      showTipButton: Boolean,
      showChatButton: Boolean,
      showCallButton: Boolean,
      isMyProfile: Boolean,
      isPrivacyProfile: Boolean,
      isOnboarding: Boolean,
      view: String,
      showBarsButton: Boolean,
      showSocialMediaList: Boolean,
      showLocation: Boolean,
      showSite: Boolean,
      showBackButton: Boolean,
      defaultCountry: String,
      currencyCode: String,
      validationsPattern: [Object, String]
    },
    emits: {
      "before-mount": null,
      mounted: null,
      ready: null,
      loaded: null,
      "send-tip": null,
      "unfollow-profile": null,
      "enable-renewal": null,
      "report-profile": null,
      "toggle-mute": null,
      "toggle-friend": null,
      "request-verification": null,
      "open-payment-modal": null,
      "subscribe-free-profile": null,
      "subscribe-paid-profile": null
    },
    setup(t, {
      emit: e
    }) {
      const i = t;
      const o = n.computed(() => I(i.showTipButton));
      const s = n.computed(() => I(i.showFollowers));
      const r = n.computed(() => I(i.showChatButton));
      const a = n.computed(() => I(i.showCallButton));
      const l = n.computed(() => I(i.isMyProfile));
      const c = n.computed(() => I(i.isPrivacyProfile));
      const d = n.computed(() => I(i.isOnboarding));
      const m = n.computed(() => I(i.showBarsButton));
      const f = n.computed(() => I(i.showSocialMediaList));
      const u = n.computed(() => I(i.showLocation));
      const g = n.computed(() => I(i.showSite));
      const N = n.computed(() => I(i.showBackButton));
      const y = n.getCurrentInstance();
      zi(i);
      Ni();
      Jt(i);
      const {
        windowLoaded: w
      } = Di({
        emit: e
      });
      Ye.useProvides(y);
      Qe.useProvides(y);
      n.onMounted(() => {
        xi(i.validationsPattern);
      });
      return (p, h) => {
        var T;
        n.openBlock();
        return n.createElementBlock(n.Fragment, null, [(T = p.appStore.appSettings) != null && T.PRIVACY_MODULES ? (n.openBlock(), n.createBlock(n.resolveDynamicComponent("style"), {
          key: 0
        }, {
          default: n.withCtx(() => {
            var M;
            return [n.createTextVNode(" @import \"../styles/privacy.components.css\"; ", 1)];
          }),
          _: 1
        })) : n.createCommentVNode("", true), p.appStore.ready && n.unref(w) ? (n.openBlock(), n.createBlock(Lt, {
          key: 1,
          class: "app-wc",
          user: JSON.parse(t.user),
          "show-tip-button": o.value,
          "show-chat-button": r.value,
          "show-call-button": a.value,
          "show-followers": s.value,
          "is-my-profile": l.value,
          "is-privacy-profile": c.value,
          "is-onboarding": d.value,
          view: t.view,
          defaultCountry: t.defaultCountry,
          "show-bars-button": m.value,
          "show-social-media-list": f.value,
          "show-location": u.value,
          "show-site": g.value,
          "show-back-button": N.value,
          "currency-code": t.currencyCode,
          onSendTip: h[0] || (h[0] = M => p.$emit("send-tip", M)),
          onUnfollowProfile: h[1] || (h[1] = M => p.$emit("unfollow-profile", M)),
          onEnableRenewal: h[2] || (h[2] = M => p.$emit("enable-renewal", M)),
          onReportProfile: h[3] || (h[3] = M => p.$emit("report-profile", M)),
          onToggleMute: h[4] || (h[4] = M => p.$emit("toggle-mute", M)),
          onToggleFriend: h[5] || (h[5] = M => p.$emit("toggle-friend", M)),
          onRequestVerification: h[6] || (h[6] = M => p.$emit("request-verification", M)),
          onOpenPaymentModal: h[7] || (h[7] = M => p.$emit("open-payment-modal", M)),
          onSubscribeFreeProfile: h[8] || (h[8] = M => p.$emit("subscribe-free-profile", M)),
          onSubscribePaidProfile: h[9] || (h[9] = M => p.$emit("subscribe-paid-profile"))
        }, null, 8, ["user", "show-tip-button", "show-chat-button", "show-call-button", "show-followers", "is-my-profile", "is-privacy-profile", "is-onboarding", "view", "defaultCountry", "show-bars-button", "show-social-media-list", "show-location", "show-site", "show-back-button", "currency-code"])) : n.createCommentVNode("", true)], 64);
      };
    }
  });
  const Pe = E(Ka, [["styles", [Ga]]]);
  const Ja = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pe
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const jt = {
    name: "privacy.web.user.info",
    version: "1.0.0",
    private: true,
    scripts: {
      dev: "vite --host",
      build: "vite build",
      "build-w": "vite build --watch",
      serve: "vite preview",
      "clean:lib": "rm -rf dist/*.js && rm -rf dist/*.map && rm -rf dist/*.css && rm -rf dist/*.html",
      lint: "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
      reset: "rm -rf node_modules && rm -rf package-lock.json && npm i",
      "reset-all": "cd demo && npm run reset-all",
      "http-server": "http-server . -c 0 --cors *"
    },
    dependencies: {
      "@element-plus/icons-vue": "2.1.0",
      "@fortawesome/fontawesome-svg-core": "6.4.0",
      "@fortawesome/free-brands-svg-icons": "6.4.0",
      "@fortawesome/pro-duotone-svg-icons": "6.4.0",
      "@fortawesome/pro-light-svg-icons": "6.4.0",
      "@fortawesome/pro-regular-svg-icons": "6.4.0",
      "@fortawesome/pro-solid-svg-icons": "6.4.0",
      "@fortawesome/vue-fontawesome": "3.0.3",
      axios: "1.3.3",
      "element-plus": "2.2.30",
      maska: "2.1.9",
      moment: "2.29.4",
      pinia: "2.0.30",
      "socket.io-client": "4.7.2",
      "url-join": "5.0.0",
      "vue-i18n": "9.5.0",
      "vue-jwt-decode": "0.1.0",
      "vue-plugin-load-script": "2.1.1",
      photoswipe: "5.3.8"
    },
    devDependencies: {
      "@intlify/unplugin-vue-i18n": "1.4.0",
      "@rushstack/eslint-patch": "1.2.0",
      "@vitejs/plugin-basic-ssl": "1.0.1",
      "@vitejs/plugin-vue": "4.0.0",
      "@vue/eslint-config-prettier": "7.0.0",
      "core-js": "3.29.0",
      eslint: "8.34.0",
      "eslint-plugin-vue": "9.9.0",
      "http-server": "14.1.1",
      sass: "1.59.3",
      "unplugin-auto-import": "0.15.1",
      "unplugin-element-plus": "0.7.0",
      "unplugin-vue-components": "0.24.1",
      vite: "4.1.1",
      "vite-plugin-html-env": "1.2.8",
      vue: "3.3.0"
    }
  }.name.replace(/\./g, "-");
  const Xa = ({
    component: t = null,
    plugins: e = []
  } = {}) => n.defineCustomElement({
    emits: t.emits,
    computed: t.computed,
    props: t.props,
    styles: t.styles,
    setup(i) {
      const o = n.createApp();
      o.component("app-root", t);
      e.forEach(l => o.use(l));
      const s = n.getCurrentInstance();
      const r = Array.isArray(t.emits) ? t.emits : Object.keys(t.emits);
      const a = Object.fromEntries((r || []).map(l => [`on${l[0].toUpperCase()}${l.slice(1)}`, c => s.emit(l, c)]));
      Object.assign(s.appContext, o._context);
      Object.assign(s.provides, o._context.provides);
      return () => n.h(t, {
        ...i,
        ...a
      });
    }
  });
  (async () => {
    const t = [Ke.css(), ...(await pi())];
    Pe.styles = t;
    if (!customElements.get(jt)) {
      const i = Xa({
        component: Pe,
        plugins: [ui, Ke, Qe, Ye, Ne]
      });
      customElements.define(jt, i);
    }
  })();
});