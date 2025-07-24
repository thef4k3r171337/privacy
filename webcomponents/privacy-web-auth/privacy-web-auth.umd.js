(function (n, J) {
  if (typeof exports == "object" && typeof module < "u") {
    J(require("vue"), require("axios"), require("vue-i18n"), require("moment"), require("moment/dist/locale/pt-br"), require("moment/dist/locale/es"), require("element-plus"), require("element-plus/dist/locale/pt-br"), require("element-plus/dist/locale/es"), require("@fortawesome/fontawesome-svg-core"));
  } else if (typeof define == "function" && define.amd) {
    define(["vue", "axios", "vue-i18n", "moment", "moment/dist/locale/pt-br", "moment/dist/locale/es", "element-plus", "element-plus/dist/locale/pt-br", "element-plus/dist/locale/es", "@fortawesome/fontawesome-svg-core"], J);
  } else {
    n = typeof globalThis < "u" ? globalThis : n || self;
    J(n.Vue, n.axios, n.VueI18n, n.moment, null, null, n.ElementPlus, n.ElementPlusLocalePtBr, n.ElementPlusLocaleEs, n["fontawesome-svg-core"]);
  }
})(this, function (n, J, Rt, De, ci, ui, S, Ct, Nt, V) {
  "use strict";

  function Pe(e) {
    const t = Object.create(null, {
      [Symbol.toStringTag]: {
        value: "Module"
      }
    });
    if (e) {
      for (const o in e) if (o !== "default") {
        const r = Object.getOwnPropertyDescriptor(e, o);
        Object.defineProperty(t, o, r.get ? r : {
          enumerable: true,
          get: () => e[o]
        });
      }
    }
    t.default = e;
    return Object.freeze(t);
  }
  const le = Pe(Rt);
  const fe = Pe(S);
  const xe = {
    name: "privacy.web.auth",
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
      "http-server": "http-server . -c 0 --cors *",
      test: "vitest",
      "test:ui": "vitest --ui"
    },
    dependencies: {
      "@fortawesome/fontawesome-svg-core": "6.4.0",
      "@fortawesome/pro-light-svg-icons": "6.4.0",
      "@fortawesome/pro-regular-svg-icons": "6.4.0",
      "@fortawesome/pro-solid-svg-icons": "6.4.0",
      "@fortawesome/vue-fontawesome": "3.0.3",
      axios: "1.3.3",
      "element-plus": "2.2.30",
      maska: "2.1.9",
      moment: "2.29.4",
      pinia: "2.0.30",
      "url-join": "5.0.0",
      "vue-i18n": "9.5.0",
      "vue-jwt-decode": "0.1.0",
      "vue-plugin-load-script": "2.1.1"
    },
    devDependencies: {
      "@intlify/unplugin-vue-i18n": "1.4.0",
      "@rushstack/eslint-patch": "1.2.0",
      "@vitejs/plugin-basic-ssl": "1.0.1",
      "@vitejs/plugin-vue": "4.0.0",
      "@vitest/ui": "3.2.1",
      "@vue/eslint-config-prettier": "7.0.0",
      "core-js": "3.29.0",
      eslint: "8.34.0",
      "eslint-plugin-vue": "9.9.0",
      prettier: "2.8.4",
      sass: "1.59.3",
      "unplugin-auto-import": "0.15.1",
      "unplugin-element-plus": "0.7.0",
      "unplugin-vue-components": "0.24.1",
      vite: "4.1.1",
      "vite-plugin-html-env": "1.2.8",
      vitest: "3.2.1",
      vue: "3.3.0",
      "vue-test-utils": "0.5.0"
    }
  }.name.replace(/\./g, "-");
  const At = ({
    component: e = null,
    plugins: t = []
  } = {}) => n.defineCustomElement({
    emits: e.emits,
    computed: e.computed,
    props: e.props,
    styles: e.styles,
    setup(o) {
      const r = n.createApp();
      r.component("app-root", e);
      t.forEach(a => r.use(a));
      const i = n.getCurrentInstance();
      const s = Array.isArray(e.emits) ? e.emits : Object.keys(e.emits);
      const l = Object.fromEntries((s || []).map(a => [`on${a[0].toUpperCase()}${a.slice(1)}`, u => i.emit(a, u)]));
      Object.assign(i.appContext, r._context);
      Object.assign(i.provides, r._context.provides);
      return () => n.h(e, {
        ...o,
        ...l
      });
    }
  });
  /*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
  const Ve = Symbol();
  var $;
  (function (e) {
    e.direct = "direct";
    e.patchObject = "patch object";
    e.patchFunction = "patch function";
  })($ || ($ = {}));
  function wt() {
    const e = n.effectScope(true);
    const t = e.run(() => n.ref({}));
    let o = [];
    let r = [];
    const i = n.markRaw({
      install(s) {
        e;
        i._a = s;
        s.provide(Ve, i);
        s.config.globalProperties.$pinia = i;
        r.forEach(l => o.push(l));
        r = [];
      },
      use(s) {
        if (!this._a && true) {
          r.push(s);
        } else {
          o.push(s);
        }
        return this;
      },
      _p: o,
      _a: null,
      _e: e,
      _s: new Map(),
      state: t
    });
    return i;
  }
  const Be = () => {};
  function Ge(e, t, o, r = Be) {
    e.push(t);
    const i = () => {
      const s = e.indexOf(t);
      if (s > -1) {
        e.splice(s, 1);
        r();
      }
    };
    if (!o && n.getCurrentScope()) {
      n.onScopeDispose(i);
    }
    return i;
  }
  function Y(e, ...t) {
    e.slice().forEach(o => {
      o(...t);
    });
  }
  function _e(e, t) {
    if (e instanceof Map && t instanceof Map) {
      t.forEach((o, r) => e.set(r, o));
    }
    if (e instanceof Set && t instanceof Set) {
      t.forEach(e.add, e);
    }
    for (const o in t) {
      if (!t.hasOwnProperty(o)) {
        continue;
      }
      const r = t[o];
      const i = e[o];
      if (i && typeof i == "object" && Object.prototype.toString.call(i) === "[object Object]" && typeof i.toJSON != "function" && r && typeof r == "object" && Object.prototype.toString.call(r) === "[object Object]" && typeof r.toJSON != "function" && e.hasOwnProperty(o) && !n.isRef(r) && !n.isReactive(r)) {
        e[o] = _e(i, r);
      } else {
        e[o] = r;
      }
    }
    return e;
  }
  const zt = Symbol();
  const {
    assign: j
  } = Object;
  function Lt(e, t, o, r) {
    const {
      state: i,
      actions: s,
      getters: l
    } = t;
    const a = o.state.value[e];
    let u;
    function m() {
      if (!a) {
        o.state.value[e] = i ? i() : {};
      }
      const c = n.toRefs(o.state.value[e]);
      return j(c, s, Object.keys(l || {}).reduce((p, f) => (p[f] = n.markRaw(n.computed(() => {
        e;
        const _ = o._s.get(e);
        return l[f].call(_, _);
      })), p), {}));
    }
    u = je(e, m, t, o, r, true);
    u.$reset = function () {
      const p = i ? i() : {};
      this.$patch(f => {
        j(f, p);
      });
    };
    return u;
  }
  function je(e, t, o = {}, r, i, s) {
    let l;
    const a = j({
      actions: {}
    }, o);
    const u = {
      deep: true
    };
    let m;
    let c;
    let p = n.markRaw([]);
    let f = n.markRaw([]);
    let _;
    const g = r.state.value[e];
    if (!s && !g) {
      r.state.value[e] = {};
    }
    n.ref({});
    let M;
    function y(I) {
      let R;
      m = c = false;
      if (typeof I == "function") {
        I(r.state.value[e]);
        R = {
          type: $.patchFunction,
          storeId: e,
          events: _
        };
      } else {
        _e(r.state.value[e], I);
        R = {
          type: $.patchObject,
          payload: I,
          storeId: e,
          events: _
        };
      }
      const H = M = Symbol();
      n.nextTick().then(() => {
        if (M === H) {
          m = true;
        }
      });
      c = true;
      Y(p, R, r.state.value[e]);
    }
    function h() {
      l.stop();
      p = [];
      f = [];
      r._s.delete(e);
    }
    function A(I, R) {
      return function () {
        e;
        const H = Array.from(arguments);
        const ie = [];
        const se = [];
        function ai(U) {
          ie.push(U);
        }
        function li(U) {
          se.push(U);
        }
        Y(f, {
          args: H,
          name: I,
          store: O,
          after: ai,
          onError: li
        });
        let ae;
        try {
          ae = R.apply(this && this.$id === e ? this : O, H);
        } catch (U) {
          Y(se, U);
          throw U;
        }
        return ae instanceof Promise ? ae.then(U => (Y(ie, U), U)).catch(U => (Y(se, U), Promise.reject(U))) : (Y(ie, ae), ae);
      };
    }
    const N = {
      _p: r,
      $id: e,
      $onAction: Ge.bind(null, f),
      $patch: y,
      $reset: Be,
      $subscribe(I, R = {}) {
        const H = Ge(p, I, R.detached, () => ie());
        const ie = l.run(() => n.watch(() => r.state.value[e], se => {
          if (R.flush === "sync" ? c : m) {
            I({
              storeId: e,
              type: $.direct,
              events: _
            }, se);
          }
        }, j({}, u, R)));
        return H;
      },
      $dispose: h
    };
    const O = n.reactive(N);
    r._s.set(e, O);
    const v = r._e.run(() => (l = n.effectScope(), l.run(() => t())));
    for (const I in v) {
      const R = v[I];
      if (n.isRef(R) && !!!(n.isRef(R) && R.effect) || n.isReactive(R)) {
        if (!s) {
          if (g && (!(R && typeof R == "object" && Object.prototype.toString.call(R) === "[object Object]" && typeof R.toJSON != "function") || !R.hasOwnProperty(zt))) {
            if (n.isRef(R)) {
              R.value = g[I];
            } else {
              _e(R, g[I]);
            }
          }
          r.state.value[e][I] = R;
        }
      } else if (typeof R == "function") {
        const H = A(I, R);
        v[I] = H;
        a.actions[I] = R;
      }
    }
    j(O, v);
    j(n.toRaw(O), v);
    Object.defineProperty(O, "$state", {
      get: () => r.state.value[e],
      set: I => {
        y(R => {
          j(R, I);
        });
      }
    });
    r._p.forEach(I => {
      j(O, l.run(() => I({
        store: O,
        app: r._a,
        pinia: r,
        options: a
      })));
    });
    if (g && s && o.hydrate) {
      o.hydrate(O.$state, g);
    }
    m = true;
    c = true;
    return O;
  }
  function Fe(e, t, o) {
    let r;
    let i;
    const s = typeof t == "function";
    if (typeof e == "string") {
      r = e;
      i = s ? o : t;
    } else {
      i = e;
      r = e.id;
    }
    function l(a, u) {
      const m = n.getCurrentInstance();
      a = a || m && n.inject(Ve, null);
      if (a) {
        e;
      }
      a = e;
      if (!a._s.has(r)) {
        if (s) {
          je(r, t, i, a);
        } else {
          Lt(r, i, a);
        }
      }
      return a._s.get(r);
    }
    l.$id = r;
    return l;
  }
  function Ut(...e) {
    return e.reduce((t, o) => (t[o.$id + "Store"] = function () {
      return o(this.$pinia);
    }, t), {});
  }
  const Dt = {
    BASE: {
      EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail"]);
      },
      CPF: e => {
        const {
          normalize: t
        } = e;
        return t(["CPF"]);
      },
      PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Senha"]);
      },
      NEWPASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Nova senha"]);
      },
      GENERIC_ERROR: e => {
        const {
          normalize: t
        } = e;
        return t(["Ocorreu um erro, tente novamente mais tarde"]);
      },
      SUPPORT: e => {
        const {
          normalize: t
        } = e;
        return t(["Solicitar ajuda ao suporte"]);
      }
    },
    VALIDATION: {
      REQUIRED_FIELD: e => {
        const {
          normalize: t
        } = e;
        return t(["Campo obrigatÃ³rio"]);
      },
      EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail invÃ¡lido"]);
      },
      PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Sua senha deve conter no mÃ­nimo 8 caracteres entre letras(minÃºscula/maiÃºscula), nÃºmeros e caracteres especiais!"]);
      }
    },
    SIGN_IN: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Acesse sua conta"]);
      },
      TITLE_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Acesse sua conta"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Entrar"]);
      },
      WITH_EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar com e-mail"]);
      },
      WITH_DOCUMENT: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar com CPF"]);
      },
      BUTTON_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Continuar"]);
      },
      ERROR: {
        UNAUTHORIZED: e => {
          const {
            normalize: t
          } = e;
          return t(["Senha invÃ¡lida. VocÃª tem mais USER_REMAINING_ATTEMPTS tentativas antes do bloqueio temporÃ¡rio."]);
        },
        UNAUTHORIZED_LAST_TRY: e => {
          const {
            normalize: t
          } = e;
          return t(["Senha invÃ¡lida. Essa serÃ¡ sua Ãºltima tentativa antes do bloqueio temporÃ¡rio da sua conta. <a href='/auth?route=recovery-password'>Clique aqui e recupere sua senha.</a>"]);
        },
        UNAUTHORIZED_VERIFY_EMAIL: e => {
          const {
            normalize: t
          } = e;
          return t([" Verifique sua caixa de entrada de email ou <a href='/auth?route=recovery-password'>recupere sua senha.</a>"]);
        },
        UNAUTHORIZED_DOCUMENT: e => {
          const {
            normalize: t
          } = e;
          return t(["CPF ou senha invÃ¡lidos. Verifique os dados digitados e tente novamente. LINK_SUPPORT"]);
        },
        FORBIDDEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Seu acesso foi temporariamente bloqueado. Enviamos as instruÃ§Ãµes de reativaÃ§Ã£o para seu email cadastrado. Caso prefira, <a href='/auth?route=recovery-password'>desbloqueie sua conta.</a>"]);
        },
        NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["E-mail nÃ£o encontrado. Verifique o e-mail digitado e tente novamente."]);
        },
        LOCKED: e => {
          const {
            normalize: t
          } = e;
          return t(["Enviamos um e-mail para confirmar sua conta! VocÃª poderÃ¡ solicitar o e-mail novamente apÃ³s 5 minutos caso nÃ£o tenha recebido. Por favor, verifique sua caixa de entrada e prossiga com a confirmaÃ§Ã£o"]);
        },
        INTERNAL_ERROR: e => {
          const {
            normalize: t
          } = e;
          return t(["Erro interno 001"]);
        },
        SERVICE_UNAVAILABLE: e => {
          const {
            normalize: t
          } = e;
          return t(["Erro interno 002"]);
        }
      },
      TWO_FACTOR: {
        TITLE: e => {
          const {
            normalize: t
          } = e;
          return t(["AutenticaÃ§Ã£o de Dois Fatores"]);
        },
        DESCRIPTION: e => {
          const {
            normalize: t
          } = e;
          return t(["Abra o seu aplicativo autenticador para obter o cÃ³digo"]);
        },
        BUTTON: e => {
          const {
            normalize: t
          } = e;
          return t(["Verificar"]);
        },
        INVALID_CODE: e => {
          const {
            normalize: t
          } = e;
          return t(["CÃ³digo invÃ¡lido"]);
        }
      }
    },
    SIGN_UP: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Crie sua conta"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Crie sua conta e tenha acesso a conteÃºdos exclusivos dos seus criadores favoritos!"]);
      },
      USERNAME: e => {
        const {
          normalize: t
        } = e;
        return t(["Nome de UsuÃ¡rio"]);
      },
      ACCEPT_TERMS: e => {
        const {
          normalize: t
        } = e;
        return t(["Ao se cadastrar na Privacy, vocÃª atesta que leu e concorda com nossos <a href=\"/termos\">Termos</a> e <a href=\"/privacidade\">Privacidade</a> e confirma que tem pelo menos 18 anos de idade . <span style=\"color: #f57c97;\">*</span>"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirmar"]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Cadastro efetuado, enviamos um e-mail para confirmaÃ§Ã£o da sua conta, por favor valide o e-mail para prosseguir!"]);
      },
      ERROR: {
        TERMS_NOT_ACCEPTED: e => {
          const {
            normalize: t
          } = e;
          return t(["Os Termos e a Privacidade sÃ£o obrigatÃ³rios"]);
        },
        EMAIL_IN_USE: e => {
          const {
            normalize: t
          } = e;
          return t(["Uma conta com este e-mail jÃ¡ existe"]);
        },
        EMAIL_NOT_SENT: e => {
          const {
            normalize: t
          } = e;
          return t(["Cadastro realizado com sucesso! Caso vocÃª nÃ£o receba o e-mail de confirmaÃ§Ã£o, vocÃª poderÃ¡ fazer login normalmente. Um novo e-mail de confirmaÃ§Ã£o serÃ¡ enviado assim que vocÃª tentar realizar o login."]);
        }
      }
    },
    RECOVERY_PASSWORD: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirme seu e-mail"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Em seguida enviaremos um e-mail para sua caixa de entrada, para redefinir sua senha ou desbloquear sua conta."]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Enviar por e-mail"]);
      },
      SUPPORT_TEXT: e => {
        const {
          normalize: t
        } = e;
        return t(["Caso vocÃª nÃ£o receba o link de redefiniÃ§Ã£o de senha por e-mail, ou tenha outras dÃºvidas com relaÃ§Ã£o Ã  Privacy:"]);
      },
      TRY_AGAIN: e => {
        const {
          normalize: t
        } = e;
        return t(["Envie o e-mail novamente em"]);
      },
      EMAIL_SENT: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail enviado com sucesso! Verifique sua caixa de entrada e siga as instruÃ§Ãµes para continuar."]);
      },
      WAIT_FOR_TRY_AGAIN: e => {
        const {
          normalize: t
        } = e;
        return t(["VocÃª poderÃ¡ enviar o e-mail de recuperaÃ§Ã£o novamente dentro de alguns segundos"]);
      },
      ERROR: {
        NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["E-mail nÃ£o encontrado. Verifique o endereÃ§o digitado e tente novamente."]);
        },
        FORBIDDEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Seu acesso estÃ¡ temporariamente bloqueado."]);
        }
      }
    },
    RECOVERY_PASSWORD_CONFIRMATION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Redefina sua senha"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Digite uma nova senha para alterÃ¡-la ou desbloquear sua conta, garantindo o acesso com seguranÃ§a."]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirmar"]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Senha atualizada com sucesso. Redirecionando para tela de login"]);
      },
      RULES: {
        MIN_LENGTH: e => {
          const {
            normalize: t
          } = e;
          return t(["Sua senha deve conter no mÃ­nimo 8 caracteres"]);
        },
        UPPER_AND_LOWER_CASE: e => {
          const {
            normalize: t
          } = e;
          return t(["Letras(maiÃºsculas/minÃºsculas)"]);
        },
        NUMBER_AND_SPECIAL_CHARACTERS: e => {
          const {
            normalize: t
          } = e;
          return t(["NÃºmeros e caracteres especiais"]);
        },
        EQUAL_PASSWORDS: e => {
          const {
            normalize: t
          } = e;
          return t(["As senhas devem ser iguais"]);
        }
      },
      ERROR: {
        SAME_PASSWORD: e => {
          const {
            normalize: t
          } = e;
          return t(["A nova senha deve ser diferente da anterior. Por favor, digite uma nova senha."]);
        },
        INVALID_TOKEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Link expirado. Por favor, solicite um novo e-mail de recuperaÃ§Ã£o de senha."]);
        }
      }
    },
    LINK: {
      SIGN_IN: e => {
        const {
          normalize: t
        } = e;
        return t(["Acessar minha conta"]);
      },
      SIGN_UP: e => {
        const {
          normalize: t
        } = e;
        return t(["Inscreva-se"]);
      },
      REGISTER_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Fazer Cadastro"]);
      },
      RECOVERY_PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Esqueceu sua senha?"]);
      },
      RECOVERY_PASSWORD_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Esqueci minha senha"]);
      }
    },
    OAUTH: {
      TWITTER_BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar com X"]);
      },
      GOOGLE_BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar com Google"]);
      },
      VALIDATING_ACCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Por favor aguarde, validando acesso..."]);
      },
      CONFLICT_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["Uma conta com este e-mail jÃ¡ existe"]);
      },
      TWITTER: {
        EMAIL_NOT_PROVIDED: e => {
          const {
            normalize: t
          } = e;
          return t(["O X nÃ£o forneceu um e-mail durante a validaÃ§Ã£o dos dados. Por favor, tente novamente com outro mÃ©todo ou preencha seu e-mail no X"]);
        },
        USER_NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["UsuÃ¡rio nÃ£o encontrado no X"]);
        }
      },
      GOOGLE: {
        USER_NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["UsuÃ¡rio nÃ£o encontrado no Google"]);
        }
      }
    },
    EMAIL_CONFIRMATION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["ConfirmaÃ§Ã£o de conta"]);
      },
      VALIDATING: e => {
        const {
          normalize: t
        } = e;
        return t(["Aguarde, validando sua conta..."]);
      },
      SUCCESS_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["Conta validada com sucesso!"]);
      },
      ERROR_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["NÃ£o foi possÃ­vel realizar a validaÃ§Ã£o do seu e-mail, tente novamente ou entre em contato com Ã  Privacy:"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Reenviar e-mail"]);
      },
      WAIT_TO_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["Enviamos um e-mail de confirmaÃ§Ã£o para vocÃª hÃ¡ menos de 5 minutos. Caso nÃ£o tenha recebido, vocÃª poderÃ¡ solicitar o reenvio. Por favor, verifique sua caixa de entrada e prossiga com a confirmaÃ§Ã£o"]);
      },
      SUCCESS_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["Enviamos um e-mail para confirmar sua conta! Por favor, verifique sua caixa de entrada e prossiga com a confirmaÃ§Ã£o"]);
      },
      ERROR_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["Ocorreu um erro durante o reenvio do e-mail de confirmaÃ§Ã£o, tente novamente mais tarde"]);
      }
    },
    ACCOUNT_EXCLUSION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["ExclusÃ£o de conta"]);
      },
      VALIDATING: e => {
        const {
          normalize: t
        } = e;
        return t(["Finalizando a exclusÃ£o de sua conta..."]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Conta excluida com sucesso!"]);
      },
      ERROR: e => {
        const {
          normalize: t
        } = e;
        return t(["Houve um erro, verifique se o link estÃ¡ certo. Tente a exclusÃ£o novamente"]);
      }
    },
    TWITTER_ERROR_MESSAGE_SIGN_IN: e => {
      const {
        normalize: t,
        interpolate: o,
        named: r
      } = e;
      return t(["O X estÃ¡ enfrentando instabilidades. <br /> <br /> Utilize seu email do X para redefinir sua senha de acesso e realizar o login - Caso tenha dÃºvidas, acesse nosso ", o(r("linkFaq")), " ou envie um e-mail para ", o(r("email"))]);
    },
    TWITTER_ERROR_MESSAGE_SIGN_UP: e => {
      const {
        normalize: t
      } = e;
      return t(["O X estÃ¡ enfrentando instabilidades, utilize outro mÃ©todo de cadastro"]);
    },
    FAQ_LINK_TEXT: e => {
      const {
        normalize: t
      } = e;
      return t(["canal de atendimento"]);
    },
    RESET_PASSWORD: e => {
      const {
        normalize: t
      } = e;
      return t(["Redefinir senha"]);
    },
    CLOSE_DIALOG: e => {
      const {
        normalize: t
      } = e;
      return t(["Fechar"]);
    },
    SUPPORT: {
      SUPPORT_CONTACT: e => {
        const {
          normalize: t
        } = e;
        return t(["Solicitar ajuda ao suporte"]);
      },
      SUPPORT_ZENDESK: e => {
        const {
          normalize: t
        } = e;
        return t(["Caso vocÃª ainda permaneÃ§a com problemas, <span style='cursor: pointer; text-decoration: underline;'>clique aqui</span> e solicite ajuda ao suporte."]);
      }
    }
  };
  const Pt = {
    BASE: {
      EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["Email"]);
      },
      CPF: e => {
        const {
          normalize: t
        } = e;
        return t(["CPF"]);
      },
      PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Password"]);
      },
      NEWPASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["New password"]);
      },
      GENERIC_ERROR: e => {
        const {
          normalize: t
        } = e;
        return t(["An error occurred, please try again later"]);
      },
      SUPPORT: e => {
        const {
          normalize: t
        } = e;
        return t(["Request support assistance"]);
      }
    },
    VALIDATION: {
      REQUIRED_FIELD: e => {
        const {
          normalize: t
        } = e;
        return t(["Required field"]);
      },
      EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["Invalid email"]);
      },
      PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Your password must be at least 8 characters including letters (lower/upper case), numbers, and special characters."]);
      }
    },
    SIGN_IN: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Sign In"]);
      },
      TITLE_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Access your account"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Sign In"]);
      },
      WITH_EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["Sign in with email"]);
      },
      WITH_DOCUMENT: e => {
        const {
          normalize: t
        } = e;
        return t(["Sign in with CPF"]);
      },
      BUTTON_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Continue"]);
      },
      ERROR: {
        UNAUTHORIZED: e => {
          const {
            normalize: t
          } = e;
          return t(["Invalid password. You have USER_REMAINING_ATTEMPTS attempts left before temporary lockout."]);
        },
        UNAUTHORIZED_LAST_TRY: e => {
          const {
            normalize: t
          } = e;
          return t(["Invalid password. This is your last attempt before your account is temporarily locked. <a href='/auth?route=recovery-password'>Click here to recover your password.</a>"]);
        },
        UNAUTHORIZED_VERIFY_EMAIL: e => {
          const {
            normalize: t
          } = e;
          return t([" Check your email inbox or <a href='/auth?route=recovery-password'>recover your password.</a>"]);
        },
        UNAUTHORIZED_DOCUMENT: e => {
          const {
            normalize: t
          } = e;
          return t(["Invalid CPF or password. Please check the entered details and try again. LINK_SUPPORT"]);
        },
        FORBIDDEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Your access has been temporarily blocked. We have sent reactivation instructions to your registered email. If you prefer, <a href='/auth?route=recovery-password'>unlock your account.</a>"]);
        },
        NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["Email not found. Please check the entered email and try again."]);
        },
        LOCKED: e => {
          const {
            normalize: t
          } = e;
          return t(["We've sent you an email to confirm your account! You can request the email again after 5 minutes if you have not received it. Please check your inbox and proceed with confirmation"]);
        },
        INTERNAL_ERROR: e => {
          const {
            normalize: t
          } = e;
          return t(["Internal error 001"]);
        },
        SERVICE_UNAVAILABLE: e => {
          const {
            normalize: t
          } = e;
          return t(["Internal error 002"]);
        }
      },
      TWO_FACTOR: {
        TITLE: e => {
          const {
            normalize: t
          } = e;
          return t(["Two-Factor Authentication"]);
        },
        DESCRIPTION: e => {
          const {
            normalize: t
          } = e;
          return t(["Open your authenticator app to get the code"]);
        },
        BUTTON: e => {
          const {
            normalize: t
          } = e;
          return t(["Verify"]);
        },
        INVALID_CODE: e => {
          const {
            normalize: t
          } = e;
          return t(["Invalid code"]);
        }
      }
    },
    SIGN_UP: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Create your account"]);
      },
      USERNAME: e => {
        const {
          normalize: t
        } = e;
        return t(["Username"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Create your account and get access to exclusive content from your favorite creators!"]);
      },
      ACCEPT_TERMS: e => {
        const {
          normalize: t
        } = e;
        return t(["By signing up with Privacy, you confirm that you have read and agree to our <a href=\"/termos\">Terms</a> and <a href=\"/privacidade\">Privacy</a> and that you are at least 18 years old. <span style=\"color: #f57c97;\">*</span>"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirm"]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Registration successful, we have sent an email to confirm your account, please validate the email to proceed!"]);
      },
      ERROR: {
        TERMS_NOT_ACCEPTED: e => {
          const {
            normalize: t
          } = e;
          return t(["Terms and Privacy are mandatory"]);
        },
        EMAIL_IN_USE: e => {
          const {
            normalize: t
          } = e;
          return t(["An account with this email already exists"]);
        },
        EMAIL_NOT_SENT: e => {
          const {
            normalize: t
          } = e;
          return t(["Registration successful! If you do not receive the confirmation email, you can log in normally. A new confirmation email will be sent as soon as you attempt to log in."]);
        }
      }
    },
    RECOVERY_PASSWORD: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirm your email"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Next, we will send an email to your inbox to reset your password or unlock your account."]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Send by email"]);
      },
      SUPPORT_TEXT: e => {
        const {
          normalize: t
        } = e;
        return t(["If you don't receive the password reset link via email or have other questions about Privacy:"]);
      },
      TRY_AGAIN: e => {
        const {
          normalize: t
        } = e;
        return t(["Send the email again at"]);
      },
      EMAIL_SENT: e => {
        const {
          normalize: t
        } = e;
        return t(["Email sent successfully! Check your inbox and follow the instructions to continue."]);
      },
      WAIT_FOR_TRY_AGAIN: e => {
        const {
          normalize: t
        } = e;
        return t(["You can send the recovery email again in a few seconds."]);
      },
      ERROR: {
        NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["Email not found. Please check the entered address and try again."]);
        },
        FORBIDDEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Your access is temporarily blocked."]);
        }
      }
    },
    RECOVERY_PASSWORD_CONFIRMATION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Reset your password"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Enter a new password to change it or unlock your account, ensuring secure access."]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirm"]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Password successfully updated. Redirecting to the login screen"]);
      },
      RULES: {
        MIN_LENGTH: e => {
          const {
            normalize: t
          } = e;
          return t(["Your password must be at least 8 characters long"]);
        },
        UPPER_AND_LOWER_CASE: e => {
          const {
            normalize: t
          } = e;
          return t(["Letters(uppercase/lowercase)"]);
        },
        NUMBER_AND_SPECIAL_CHARACTERS: e => {
          const {
            normalize: t
          } = e;
          return t(["Numbers and special characters"]);
        },
        EQUAL_PASSWORDS: e => {
          const {
            normalize: t
          } = e;
          return t(["Passwords must match"]);
        }
      },
      ERROR: {
        SAME_PASSWORD: e => {
          const {
            normalize: t
          } = e;
          return t(["The new password must be different from the previous one. Please enter a new password."]);
        },
        INVALID_TOKEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Expired link. Please request a new password recovery email."]);
        }
      }
    },
    LINK: {
      SIGN_IN: e => {
        const {
          normalize: t
        } = e;
        return t(["Access my account"]);
      },
      SIGN_UP: e => {
        const {
          normalize: t
        } = e;
        return t(["Sign Up"]);
      },
      REGISTER_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Create account"]);
      },
      RECOVERY_PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Forgot your password?"]);
      },
      RECOVERY_PASSWORD_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Forgot my password"]);
      }
    },
    OAUTH: {
      TWITTER_BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Sign in with X"]);
      },
      GOOGLE_BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Sign in with Google"]);
      },
      VALIDATING_ACCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Please wait, validating access..."]);
      },
      GENERIC_ERROR: e => {
        const {
          normalize: t
        } = e;
        return t(["An error occurred during access validation"]);
      },
      CONFLICT_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["An account with this email already exists"]);
      },
      TWITTER: {
        EMAIL_NOT_PROVIDED: e => {
          const {
            normalize: t
          } = e;
          return t(["X did not provide an email during data validation. Please try again with another method or fill in your email on X"]);
        },
        USER_NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["User not found on X"]);
        }
      },
      GOOGLE: {
        USER_NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["User not found on Google"]);
        }
      }
    },
    EMAIL_CONFIRMATION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Account Confirmation"]);
      },
      VALIDATING: e => {
        const {
          normalize: t
        } = e;
        return t(["Please wait, validating your account..."]);
      },
      SUCCESS_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["Account successfully validated!"]);
      },
      ERROR_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["Unable to validate your email, please try again or contact Privacy:"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Resend Email"]);
      },
      WAIT_TO_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["We sent you a confirmation email less than 5 minutes ago. If you haven't received it, you may request it to be resent. Please check your inbox and proceed with the confirmation"]);
      },
      SUCCESS_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["We have sent an email to confirm your account! Please check your inbox and proceed with the confirmation"]);
      },
      ERROR_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["There was an error during the resending of the confirmation email, please try again later"]);
      }
    },
    ACCOUNT_EXCLUSION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Account Exclusion"]);
      },
      VALIDATING: e => {
        const {
          normalize: t
        } = e;
        return t(["Finalizing the deletion of your account..."]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Account successfully deleted"]);
      },
      ERROR: e => {
        const {
          normalize: t
        } = e;
        return t(["An error occurred while deleting your account, please try again later"]);
      }
    },
    TWITTER_ERROR_MESSAGE_SIGN_IN: e => {
      const {
        normalize: t,
        interpolate: o,
        named: r
      } = e;
      return t(["X is experiencing instabilities. <br /> <br /> Use your X email to reset your password and log in - If you have any questions, visit our ", o(r("linkFaq")), " or send an email to ", o(r("email"))]);
    },
    TWITTER_ERROR_MESSAGE_SIGN_UP: e => {
      const {
        normalize: t
      } = e;
      return t(["X is experiencing instabilities, use another registration method"]);
    },
    FAQ_LINK_TEXT: e => {
      const {
        normalize: t
      } = e;
      return t(["support channel"]);
    },
    RESET_PASSWORD: e => {
      const {
        normalize: t
      } = e;
      return t(["Reset password"]);
    },
    CLOSE_DIALOG: e => {
      const {
        normalize: t
      } = e;
      return t(["Close"]);
    },
    SUPPORT: {
      SUPPORT_CONTACT: e => {
        const {
          normalize: t
        } = e;
        return t(["Request support assistance"]);
      },
      SUPPORT_ZENDESK: e => {
        const {
          normalize: t
        } = e;
        return t(["If you are still experiencing issues, <span style='cursor: pointer; text-decoration: underline;'>click here</span> to request support assistance."]);
      }
    }
  };
  const xt = {
    BASE: {
      EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["Correo electrÃ³nico"]);
      },
      CPF: e => {
        const {
          normalize: t
        } = e;
        return t(["CPF"]);
      },
      PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["ContraseÃ±a"]);
      },
      NEWPASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Nueva contraseÃ±a"]);
      },
      GENERIC_ERROR: e => {
        const {
          normalize: t
        } = e;
        return t(["Se produjo un error, intÃ©ntalo de nuevo mÃ¡s tarde."]);
      },
      SUPPORT: e => {
        const {
          normalize: t
        } = e;
        return t(["Solicitar ayuda al soporte"]);
      }
    },
    VALIDATION: {
      REQUIRED_FIELD: e => {
        const {
          normalize: t
        } = e;
        return t(["Campo obligatorio"]);
      },
      EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["Correo electrÃ³nico no vÃ¡lido"]);
      },
      PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Tu contraseÃ±a debe tener al menos 8 caracteres, incluyendo letras (minÃºsculas/mayÃºsculas), nÃºmeros y caracteres especiales."]);
      }
    },
    SIGN_IN: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar sesiÃ³n"]);
      },
      TITLE_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Accede a tu cuenta"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Ingresar"]);
      },
      WITH_EMAIL: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar con correo electrÃ³nico"]);
      },
      WITH_DOCUMENT: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar con CPF"]);
      },
      BUTTON_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Continuar"]);
      },
      ERROR: {
        UNAUTHORIZED: e => {
          const {
            normalize: t
          } = e;
          return t(["ContraseÃ±a invÃ¡lida. Te quedan USER_REMAINING_ATTEMPTS intentos antes del bloqueo temporal."]);
        },
        UNAUTHORIZED_LAST_TRY: e => {
          const {
            normalize: t
          } = e;
          return t(["ContraseÃ±a invÃ¡lida. Este es tu Ãºltimo intento antes de que tu cuenta sea bloqueada temporalmente. <a href='/auth?route=recovery-password'>Haz clic aquÃ­ para recuperar tu contraseÃ±a.</a>"]);
        },
        UNAUTHORIZED_VERIFY_EMAIL: e => {
          const {
            normalize: t
          } = e;
          return t([" Revisa tu bandeja de entrada o <a href='/auth?route=recovery-password'>recupera tu contraseÃ±a.</a>"]);
        },
        UNAUTHORIZED_DOCUMENT: e => {
          const {
            normalize: t
          } = e;
          return t(["CPF o contraseÃ±a invÃ¡lidos. Verifique los datos ingresados y vuelva a intentarlo. LINK_SUPPORT"]);
        },
        FORBIDDEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Tu acceso ha sido bloqueado temporalmente. Hemos enviado instrucciones de reactivaciÃ³n a tu correo registrado. Si lo prefieres, <a href='/auth?route=recovery-password'>desbloquea tu cuenta.</a>"]);
        },
        NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["Correo electrÃ³nico no encontrado. Verifica el correo ingresado e intÃ©ntalo de nuevo."]);
        },
        LOCKED: e => {
          const {
            normalize: t
          } = e;
          return t(["Te hemos enviado un correo electrÃ³nico para confirmar tu cuenta! Puedes solicitar el correo electrÃ³nico nuevamente despuÃ©s de 5 minutos si no lo has recibido. Por favor revisa tu bandeja de entrada y continÃºa con la confirmaciÃ³n."]);
        },
        INTERNAL_ERROR: e => {
          const {
            normalize: t
          } = e;
          return t(["Error interno 001"]);
        },
        SERVICE_UNAVAILABLE: e => {
          const {
            normalize: t
          } = e;
          return t(["Error interno 002"]);
        }
      },
      TWO_FACTOR: {
        TITLE: e => {
          const {
            normalize: t
          } = e;
          return t(["AutenticaciÃ³n de Dos Factores"]);
        },
        DESCRIPTION: e => {
          const {
            normalize: t
          } = e;
          return t(["Abre tu aplicaciÃ³n de autenticaciÃ³n para obtener el cÃ³digo"]);
        },
        BUTTON: e => {
          const {
            normalize: t
          } = e;
          return t(["Verificar"]);
        },
        INVALID_CODE: e => {
          const {
            normalize: t
          } = e;
          return t(["Codigo invalido"]);
        }
      }
    },
    SIGN_UP: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Crea tu cuenta"]);
      },
      USERNAME: e => {
        const {
          normalize: t
        } = e;
        return t(["Nombre de usuario"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Crie su cuenta y tenga acceso a contenido exclusivos de sus criadores favoritos!"]);
      },
      ACCEPT_TERMS: e => {
        const {
          normalize: t
        } = e;
        return t(["Al registrarte en Privacy, confirmas que has leÃ­do y aceptas nuestros <a href=\"/termos\">TÃ©rminos</a> y <a href=\"/privacidade\">Privacidad</a> y que tienes al menos 18 aÃ±os de edad. <span style=\"color: #f57c97;\">*</span>"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirmar"]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Registro exitoso, hemos enviado un correo electrÃ³nico para confirmar su cuenta, Â¡por favor valide el correo electrÃ³nico para continuar!"]);
      },
      ERROR: {
        TERMS_NOT_ACCEPTED: e => {
          const {
            normalize: t
          } = e;
          return t(["Los TÃ©rminos y La Privacidad son obligatorios"]);
        },
        EMAIL_IN_USE: e => {
          const {
            normalize: t
          } = e;
          return t(["Ya existe una cuenta con este correo electrÃ³nico"]);
        },
        EMAIL_NOT_SENT: e => {
          const {
            normalize: t
          } = e;
          return t(["Â¡Registro exitoso! Si no recibes el correo de confirmaciÃ³n, puedes iniciar sesiÃ³n normalmente. Se enviarÃ¡ un nuevo correo de confirmaciÃ³n tan pronto como intentes iniciar sesiÃ³n."]);
        }
      }
    },
    RECOVERY_PASSWORD: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirma tu correo electrÃ³nico"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["A continuaciÃ³n, te enviaremos un correo a tu bandeja de entrada para restablecer tu contraseÃ±a o desbloquear tu cuenta."]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Enviar por correo electrÃ³nico"]);
      },
      SUPPORT_TEXT: e => {
        const {
          normalize: t
        } = e;
        return t(["Si no recibes el enlace para restablecer la contraseÃ±a por correo electrÃ³nico o tienes otras preguntas sobre Privacy:"]);
      },
      TRY_AGAIN: e => {
        const {
          normalize: t
        } = e;
        return t(["Volver a enviar el correo electrÃ³nico en"]);
      },
      EMAIL_SENT: e => {
        const {
          normalize: t
        } = e;
        return t(["Â¡Correo electrÃ³nico enviado con Ã©xito! Revisa tu bandeja de entrada y sigue las instrucciones para continuar."]);
      },
      WAIT_FOR_TRY_AGAIN: e => {
        const {
          normalize: t
        } = e;
        return t(["PodrÃ¡s enviar el correo de recuperaciÃ³n nuevamente en unos segundos."]);
      },
      ERROR: {
        NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["Correo electrÃ³nico no encontrado. Verifica la direcciÃ³n ingresada e intÃ©ntalo de nuevo."]);
        },
        FORBIDDEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Su acceso estÃ¡ bloqueado temporalmente."]);
        }
      }
    },
    RECOVERY_PASSWORD_CONFIRMATION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Restablece tu contraseÃ±a"]);
      },
      SUBTITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["Ingresa una nueva contraseÃ±a para cambiarla o desbloquear tu cuenta, garantizando un acceso seguro."]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirmar"]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["ContraseÃ±a actualizada con Ã©xito. Redirigiendo a la pantalla de inicio de sesiÃ³n"]);
      },
      RULES: {
        MIN_LENGTH: e => {
          const {
            normalize: t
          } = e;
          return t(["Tu contraseÃ±a debe tener al menos 8 caracteres"]);
        },
        UPPER_AND_LOWER_CASE: e => {
          const {
            normalize: t
          } = e;
          return t(["Letras(mayÃºsculas/minÃºsculas)"]);
        },
        NUMBER_AND_SPECIAL_CHARACTERS: e => {
          const {
            normalize: t
          } = e;
          return t(["NÃºmeros y caracteres especiales"]);
        },
        EQUAL_PASSWORDS: e => {
          const {
            normalize: t
          } = e;
          return t(["Las contraseÃ±as deben coincidir"]);
        }
      },
      ERROR: {
        SAME_PASSWORD: e => {
          const {
            normalize: t
          } = e;
          return t(["La nueva contraseÃ±a debe ser diferente de la anterior. Por favor, ingresa una nueva contraseÃ±a."]);
        },
        INVALID_TOKEN: e => {
          const {
            normalize: t
          } = e;
          return t(["Enlace expirado. Por favor, solicite un nuevo correo de recuperaciÃ³n de contraseÃ±a."]);
        }
      }
    },
    LINK: {
      SIGN_IN: e => {
        const {
          normalize: t
        } = e;
        return t(["Acceder a mi cuenta"]);
      },
      SIGN_UP: e => {
        const {
          normalize: t
        } = e;
        return t(["Registrarse"]);
      },
      REGISTER_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["Crear cuenta"]);
      },
      RECOVERY_PASSWORD: e => {
        const {
          normalize: t
        } = e;
        return t(["Â¿Olvidaste tu contraseÃ±a?"]);
      },
      RECOVERY_PASSWORD_CHECKOUT: e => {
        const {
          normalize: t
        } = e;
        return t(["OlvidÃ© mi contraseÃ±a"]);
      }
    },
    OAUTH: {
      TWITTER_BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar con X"]);
      },
      GOOGLE_BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Iniciar con Google"]);
      },
      VALIDATING_ACCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Por favor, espere, validando acceso..."]);
      },
      GENERIC_ERROR: e => {
        const {
          normalize: t
        } = e;
        return t(["Se produjo un error durante la validaciÃ³n de acceso"]);
      },
      CONFLICT_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["Ya existe una cuenta con este correo electrÃ³nico"]);
      },
      TWITTER: {
        EMAIL_NOT_PROVIDED: e => {
          const {
            normalize: t
          } = e;
          return t(["X no proporcionÃ³ un correo electrÃ³nico durante la validaciÃ³n de datos. Por favor, intÃ©ntalo de nuevo con otro mÃ©todo o completa tu correo electrÃ³nico en X"]);
        },
        USER_NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["Usuario no encontrado en X"]);
        }
      },
      GOOGLE: {
        USER_NOT_FOUND: e => {
          const {
            normalize: t
          } = e;
          return t(["Usuario no encontrado en Google"]);
        }
      }
    },
    EMAIL_CONFIRMATION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["ConfirmaciÃ³n de Cuenta"]);
      },
      VALIDATING: e => {
        const {
          normalize: t
        } = e;
        return t(["Espere, validando su cuenta..."]);
      },
      SUCCESS_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["Â¡Cuenta validada con Ã©xito!"]);
      },
      ERROR_MESSAGE: e => {
        const {
          normalize: t
        } = e;
        return t(["No fue posible validar su correo electrÃ³nico, intente nuevamente o contacte a Privacy:"]);
      },
      BUTTON: e => {
        const {
          normalize: t
        } = e;
        return t(["Reenviar correo electrÃ³nico"]);
      },
      WAIT_TO_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["Enviamos un correo de confirmaciÃ³n hace menos de 5 minutos. Si no lo ha recibido, puede solicitar su reenvÃ­o. Por favor, revise su bandeja de entrada y proceda con la confirmaciÃ³n"]);
      },
      SUCCESS_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["Â¡Hemos enviado un correo electrÃ³nico para confirmar su cuenta! Por favor, revise su bandeja de entrada y proceda con la confirmaciÃ³n"]);
      },
      ERROR_RESEND: e => {
        const {
          normalize: t
        } = e;
        return t(["OcurriÃ³ un error durante el reenvÃ­o del correo de confirmaciÃ³n, intente nuevamente mÃ¡s tarde"]);
      }
    },
    ACCOUNT_EXCLUSION: {
      TITLE: e => {
        const {
          normalize: t
        } = e;
        return t(["ExclusiÃ³n de cuenta"]);
      },
      VALIDATING: e => {
        const {
          normalize: t
        } = e;
        return t(["Finalizando la exclusiÃ³n de su cuenta..."]);
      },
      SUCCESS: e => {
        const {
          normalize: t
        } = e;
        return t(["Cuenta excluida con Ã©xito"]);
      },
      ERROR: e => {
        const {
          normalize: t
        } = e;
        return t(["Hubo un error, verifique si el enlace es correcto. Intente la exclusiÃ³n nuevamente"]);
      }
    },
    TWITTER_ERROR_MESSAGE_SIGN_IN: e => {
      const {
        normalize: t,
        interpolate: o,
        named: r
      } = e;
      return t(["X estÃ¡ experimentando inestabilidades. <br /> <br /> Utilice su correo electrÃ³nico de X para restablecer su contraseÃ±a y acceder - Si tiene dudas, visite nuestro ", o(r("linkFaq")), " o envÃ­e un correo electrÃ³nico a ", o(r("email"))]);
    },
    TWITTER_ERROR_MESSAGE_SIGN_UP: e => {
      const {
        normalize: t
      } = e;
      return t(["X estÃ¡ experimentando inestabilidades, utilice otro mÃ©todo de registro"]);
    },
    FAQ_LINK_TEXT: e => {
      const {
        normalize: t
      } = e;
      return t(["canal de atenciÃ³n"]);
    },
    RESET_PASSWORD: e => {
      const {
        normalize: t
      } = e;
      return t(["Restablecer contraseÃ±a"]);
    },
    CLOSE_DIALOG: e => {
      const {
        normalize: t
      } = e;
      return t(["Cerrar"]);
    },
    SUPPORT: {
      SUPPORT_CONTACT: e => {
        const {
          normalize: t
        } = e;
        return t(["Solicitar ayuda al soporte"]);
      },
      SUPPORT_ZENDESK: e => {
        const {
          normalize: t
        } = e;
        return t(["Si aÃºn tienes problemas, <span style='cursor: pointer; text-decoration: underline;'>haz clic aquÃ­</span> para solicitar ayuda al soporte."]);
      }
    }
  };
  let ee = null;
  const ge = {
    install(e) {
      ee = le.createI18n({
        legacy: false,
        locale: "pt",
        fallbackLocale: "pt",
        globalInjection: false
      });
      e.use(ee);
      vt();
      return ee;
    },
    get global() {
      return ee.global;
    }
  };
  function vt() {
    if (!n.inject(le.I18nInjectionKey)) {
      n.provide(le.I18nInjectionKey, ee);
    }
  }
  function k() {
    var r;
    var i;
    const e = n.getCurrentInstance();
    if (!n.inject((i = (r = e == null ? undefined : e.appContext) == null ? undefined : r.app) == null ? undefined : i.__VUE_I18N_SYMBOL__)) {
      e.isCE = true;
    }
    const {
      t: o
    } = le.useI18n({
      messages: {
        pt: Dt,
        en: Pt,
        es: xt
      }
    });
    return {
      t: o
    };
  }
  De.locale("pt-br");
  function Vt(e) {
    De.locale(e);
  }
  const E = {
    get defaultLocale() {
      return "pt";
    },
    set currentLocale(e) {
      e = e && e.split("-")[0];
      ge.global.locale.value = e;
    },
    get currentLocale() {
      return ge.global.locale.value;
    },
    setTranslate({
      t: e
    }) {
      this.t = e;
    },
    getUserLocale() {
      const e = window.navigator.language || window.navigator.userLanguage || E.defaultLocale;
      return {
        locale: e,
        localeNoRegion: e.split("-")[0]
      };
    },
    getMessage(e) {
      return this.t(e);
    },
    async switchLanguage(e) {
      E.currentLocale = e;
      Vt(e);
    }
  };
  function Bt(e) {
    const {
      t
    } = k();
    E.setTranslate({
      t
    });
    n.watch(e.locale, o => {
      E.switchLanguage(o || e.locale);
    }, {
      immediate: true
    });
  }
  const x = {
    value: null,
    provides: null,
    emit: null
  };
  const We = {
    install(e, t) {
      if (!e.config.globalProperties.$http) {
        x.value = J.create({
          baseURL: t == null ? undefined : t.baseUrl
        });
        null.interceptors.request.use(o => (o.includeAppAuthorization != false && null.token.value && !o.headers.Authorization && (o.apiAuth == "v1" ? o.headers.Authorization = `Bearer ${null.tokenV1.value}` : o.headers.Authorization = `Bearer ${null.token.value}`), o.headers["Accept-Language"] || (o.headers["Accept-Language"] = null.locale.value || E.defaultLocale), o), o => Promise.reject(o));
        e.config.globalProperties.$http = null;
      }
    },
    useProvides(e) {
      x.provides = e.provides;
      x.emit = e.emit;
    }
  };
  const C = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [r, i] of t) o[r] = i;
    return o;
  };
  const jt = {
    props: {
      description: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      }
    }
  };
  const Ft = {
    class: "mb-2"
  };
  const Wt = {
    class: "title",
    style: {
      "font-size": "18px"
    }
  };
  const Ht = {
    class: "mb-2"
  };
  const Kt = {
    class: "sub-title"
  };
  function qt(e, t, o, r, i, s) {
    n.openBlock();
    return n.createElementBlock(n.Fragment, null, [n.createElementVNode("div", Ft, [n.createElementVNode("span", Wt, n.toDisplayString(o.description), 1)]), n.createElementVNode("div", Ht, [n.createElementVNode("span", Kt, n.toDisplayString(o.subtitle), 1)])], 64);
  }
  const F = C(jt, [["render", qt], ["styles", [`.sub-title{font-size:16px;color:#70707e}
`]]]);
  const Yt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: F
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Qt = {
    directives: {
      loading: S.vLoading
    },
    props: {
      isLoading: {
        type: Boolean,
        required: true
      }
    }
  };
  const Xt = {
    class: "loader"
  };
  function Jt(e, t, o, r, i, s) {
    const l = n.resolveDirective("loading");
    n.openBlock();
    return n.withDirectives(n.createElementBlock("div", Xt, null, 512), [[l, o.isLoading]]);
  }
  const ue = C(Qt, [["render", Jt], ["styles", [`.loader{width:28px;height:28px}.loader .el-loading-spinner{width:100%;height:100%;margin:0;position:relative;top:0}.loader .el-loading-spinner .circular{width:100%;height:100%}
`]]]);
  const $t = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ue
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const b = {
    ROUTE: "route",
    RETURN_URL: "ReturnUrl",
    REFERRAL: "referral",
    RECOVERY_CODE: "token",
    RECOVERY_EMAIL: "email",
    CONFIRMATION_EMAIL: "email",
    CONFIRMATION_CODE: "token",
    TWITTER: {
      OAUTH_TOKEN: "oauth_token",
      OAUTH_VERIFIER: "oauth_verifier"
    },
    GOOGLE: {
      CODE: "code"
    },
    OAUTH_STATE: "state",
    ACCOUNT_EXCLUSION: {
      TOKEN: "token"
    }
  };
  const ne = {
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",
    TWITTER: "TWITTER",
    GOOGLE: "GOOGLE"
  };
  const W = {
    TWITTER: "twitter",
    GOOGLE: "google"
  };
  const en = {
    SIGN_IN: [{
      CODE: 401,
      MESSAGE: () => this.t("SIGN_IN.ERROR.UNAUTHORIZED")
    }, {
      CODE: 403,
      MESSAGE: () => this.t("SIGN_IN.ERROR.FORBIDDEN")
    }, {
      CODE: 404,
      MESSAGE: () => this.t("SIGN_IN.ERROR.NOT_FOUND")
    }, {
      CODE: 423,
      MESSAGE: () => this.t("SIGN_IN.ERROR.LOCKED"),
      type: "warning"
    }, {
      CODE: 500,
      MESSAGE: () => this.t("SIGN_IN.ERROR.INTERNAL_ERROR")
    }, {
      CODE: 503,
      MESSAGE: () => this.t("SIGN_IN.ERROR.SERVICE_UNAVAILABLE")
    }],
    TWITTER: [{
      CODE: 400,
      MESSAGE: () => this.t("BASE.GENERIC_ERROR")
    }, {
      CODE: 404,
      MESSAGE: () => this.t("OAUTH.TWITTER.USER_NOT_FOUND")
    }, {
      CODE: 409,
      MESSAGE: () => this.t("OAUTH.CONFLICT_MESSAGE")
    }, {
      CODE: 422,
      MESSAGE: () => this.t("OAUTH.TWITTER.EMAIL_NOT_PROVIDED")
    }, {
      CODE: 500,
      MESSAGE: () => this.t("BASE.GENERIC_ERROR")
    }, {
      CODE: 503,
      MESSAGE: () => this.t("BASE.GENERIC_ERROR")
    }],
    GOOGLE: [{
      CODE: 400,
      MESSAGE: () => this.t("BASE.GENERIC_ERROR")
    }, {
      CODE: 404,
      MESSAGE: () => this.t("OAUTH.GOOGLE.USER_NOT_FOUND")
    }, {
      CODE: 409,
      MESSAGE: () => this.t("OAUTH.CONFLICT_MESSAGE")
    }, {
      CODE: 500,
      MESSAGE: () => this.t("BASE.GENERIC_ERROR")
    }, {
      CODE: 503,
      MESSAGE: () => this.t("BASE.GENERIC_ERROR")
    }]
  };
  const Ke = {
    404: () => this.t("RECOVERY_PASSWORD.ERROR.NOT_FOUND"),
    403: () => this.t("RECOVERY_PASSWORD.ERROR.FORBIDDEN"),
    DEFAULT: () => this.t("BASE.GENERIC_ERROR")
  };
  const tn = {
    "EMAIL-NOT-FOUND": () => this.t("RECOVERY_PASSWORD.ERROR.NOT_FOUND"),
    "PASSWORD-SAME-AS-OLD": () => this.t("RECOVERY_PASSWORD_CONFIRMATION.ERROR.SAME_PASSWORD"),
    "INVALID-TOKEN": () => this.t("RECOVERY_PASSWORD_CONFIRMATION.ERROR.INVALID_TOKEN"),
    "INVALID TOKEN.": () => this.t("RECOVERY_PASSWORD_CONFIRMATION.ERROR.INVALID_TOKEN")
  };
  const nn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function on(e) {
    var t = [];
    if (e.length === 0) {
      return "";
    }
    if (typeof e[0] != "string") {
      throw new TypeError("Url must be a string. Received " + e[0]);
    }
    if (e[0].match(/^[^/:]+:\/*$/) && e.length > 1) {
      var o = e.shift();
      e[0] = o + e[0];
    }
    if (e[0].match(/^file:\/\/\//)) {
      e[0] = e[0].replace(/^([^/:]+):\/*/, "$1:///");
    } else {
      e[0] = e[0].replace(/^([^/:]+):\/*/, "$1://");
    }
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      if (typeof i != "string") {
        throw new TypeError("Url must be a string. Received " + i);
      }
      if (i !== "") {
        if (r > 0) {
          i = i.replace(/^[\/]+/, "");
        }
        if (r < e.length - 1) {
          i = i.replace(/[\/]+$/, "");
        } else {
          i = i.replace(/[\/]+$/, "/");
        }
        t.push(i);
      }
    }
    var s = t.join("/");
    s = s.replace(/\/(\?|&|#[^!])/g, "$1");
    var l = s.split("?");
    s = l.shift() + (l.length > 0 ? "?" : "") + l.join("&");
    return s;
  }
  function z() {
    var e;
    if (typeof arguments[0] == "object") {
      e = arguments[0];
    } else {
      e = [].slice.call(arguments);
    }
    return on(e);
  }
  function an(e) {
    const t = e ? atob(e) : undefined;
    return t ? typeof t == "object" ? t : JSON.parse(t) : {};
  }
  function ln(e) {
    for (const t in e) if (e[t] && typeof e[t] == "string" && e[t].startsWith("http")) {
      e[t] = e[t].replace(/\?&/g, "");
    }
  }
  function un({
    statusCode: e,
    type: t,
    remainingAttempts: o,
    loginWithDocument: r = false
  }) {
    if (!ne[t]) {
      return;
    }
    const i = en[t];
    if (!i) {
      return;
    }
    let s;
    let l;
    i.forEach(a => {
      var u;
      if (a.CODE === e && (s = (u = a.MESSAGE) == null ? undefined : u.call(a), l = a.type || null, e === 401)) {
        if (r) {
          s = this.t("SIGN_IN.ERROR.UNAUTHORIZED_DOCUMENT");
          return;
        }
        s = s.replace("USER_REMAINING_ATTEMPTS", o);
        if (o === 1) {
          s = this.t("SIGN_IN.ERROR.UNAUTHORIZED_LAST_TRY");
        } else if (o > 1 && o < 4) {
          s += this.t("SIGN_IN.ERROR.UNAUTHORIZED_VERIFY_EMAIL");
        }
      }
    });
    return {
      message: s,
      alertType: l
    };
  }
  function Ye({
    error: e,
    type: t,
    remainingAttempts: o,
    loginWithDocument: r = false
  }) {
    var a;
    if (!e || !ne[t]) {
      return;
    }
    const i = (a = e == null ? undefined : e.response) == null ? undefined : a.status;
    const {
      message: s,
      alertType: l
    } = un({
      statusCode: i,
      type: t,
      remainingAttempts: o,
      loginWithDocument: r
    });
    return {
      statusCode: i,
      message: s,
      alertType: l || "error"
    };
  }
  function Ee(e) {
    const t = {
      email: e,
      date: new Date().toISOString()
    };
    localStorage.setItem("privacy_last_confirmation_email", JSON.stringify(t));
  }
  function Ze(e) {
    const o = localStorage.getItem("privacy_last_confirmation_email");
    if (o) {
      const {
        email: r,
        date: i
      } = JSON.parse(o);
      return pn(i) < 5 && r === e ? false : (localStorage.removeItem("privacy_last_confirmation_email"), Ee(e), true);
    } else {
      Ee(e);
      return true;
    }
  }
  function mn() {
    let e = document.createElement("script");
    e.id = "ze-snippet";
    e.src = "https://static.zdassets.com/ekr/snippet.js?key=2e8b148e-901b-4f1a-882b-779ac0157e14";
    document.body.appendChild(e);
  }
  function Qe() {
    if (document.getElementById("launcher")) {
      Xe();
    } else {
      mn();
      setTimeout(() => {
        Xe();
      }, 1500);
    }
  }
  function dn(e) {
    const t = document.cookie.split(";");
    for (let o of t) {
      const [r, i] = o.trim().split("=");
      if (r === e && i !== undefined) {
        try {
          return decodeURIComponent(i);
        } catch {
          return null;
        }
      }
    }
    return null;
  }
  function Xe() {
    var t;
    const e = document.getElementById("launcher");
    if ((t = e == null ? undefined : e.contentWindow) != null && t.document) {
      const o = e.contentWindow.document.querySelector("button");
      if (o) {
        o.click();
      }
    }
  }
  function pn(e) {
    const t = new Date(e);
    const r = new Date() - t;
    return Math.floor(r / 60000);
  }
  const ye = async ({
    appSettings: e,
    $http: t,
    tokenV1: o,
    tokenV2: r
  }) => {
    try {
      const i = z(e == null ? undefined : e.PRIVACY_URL, `/strangler/Authorize?TokenV1=${o}&TokenV2=${r}`);
      return await t.get(i);
    } catch (i) {
      return i == null ? undefined : i.response;
    }
  };
  const fn = async ({
    appSettings: e,
    $http: t
  }) => {
    try {
      const o = z(e == null ? undefined : e.PRIVACY_URL, "/strangler/Signout");
      return await t.get(o);
    } catch (o) {
      return o == null ? undefined : o.response;
    }
  };
  const hn = e => {
    if (e) {
      return encodeURIComponent(btoa(e));
    }
  };
  const Je = e => {
    if (e) {
      return atob(decodeURIComponent(e));
    }
  };
  const Ie = () => {
    var t;
    if (document.querySelector(".el-alert--success") || document.querySelector("#privacy-web-auth").shadowRoot.querySelector(".el-alert--success")) {
      if (!((t = window == null ? undefined : window.dataLayer) == null)) {
        t.push({
          event: "shadowElementViewed"
        });
      }
    }
  };
  const Sn = {
    components: {
      ElAlert: S.ElAlert
    },
    emits: ["update:message"],
    props: {
      type: String,
      message: String,
      timer: {
        type: Number,
        default: 1e4
      }
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e
      };
    },
    data() {
      return {
        visible: false,
        timerId: null,
        showSupportLink: false,
        formattedMessage: ""
      };
    },
    watch: {
      message(e) {
        if (e) {
          this.formattedMessage = e;
          if (e.includes("LINK_SUPPORT")) {
            this.showSupportLink = true;
            this.formattedMessage = e.replace("LINK_SUPPORT", "");
          }
          this.showAlert();
        } else {
          this.visible = false;
        }
      },
      visible(e) {
        if (!e) {
          this.showSupportLink = false;
          this.$emit("update:message", null);
        }
      }
    },
    methods: {
      showSupportComponent: Qe,
      showAlert() {
        this.visible = true;
        if (this.timerId) {
          clearTimeout(this.timerId);
        }
        if (this.type === "success") {
          this.timerId = setTimeout(() => {
            this.visible = false;
          }, this.timer);
        }
      }
    }
  };
  const Tn = {
    key: 0,
    class: "alert-text fade-in"
  };
  const Rn = ["innerHTML"];
  const Cn = ["innerHTML"];
  function Nn(e, t, o, r, i, s) {
    const l = n.resolveComponent("el-alert");
    return i.visible ? (n.openBlock(), n.createElementBlock("div", Tn, [n.createVNode(l, {
      type: o.type,
      "show-icon": "",
      onClose: t[1] || (t[1] = a => i.visible = false)
    }, {
      default: n.withCtx(() => [n.createElementVNode("span", {
        innerHTML: i.formattedMessage
      }, null, 8, Rn), i.showSupportLink ? (n.openBlock(), n.createElementBlock("span", {
        key: 0,
        innerHTML: r.t("SUPPORT.SUPPORT_ZENDESK"),
        onClick: t[0] || (t[0] = (...a) => s.showSupportComponent && s.showSupportComponent(...a))
      }, null, 8, Cn)) : n.createCommentVNode("", true)]),
      _: 1
    }, 8, ["type"])])) : n.createCommentVNode("", true);
  }
  const B = C(Sn, [["render", Nn], ["styles", [`.el-alert--error.is-light{background-color:#feeff0!important;color:#ae3d3c!important}.el-alert--error.is-light .el-alert__description{color:#ae3d3c!important}.el-alert--error.is-light .el-alert__description a{color:#ae3d3c!important;text-decoration:underline!important}.alert-text{margin-bottom:8px}.fade-in{animation:fadeInAnimation .3s forwards}@keyframes fadeInAnimation{0%{opacity:0}to{opacity:1}}
`]]]);
  const An = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: B
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const T = {
    signIn: "sign-in",
    signUp: "sign-up",
    recoveryPassword: "recovery-password",
    signUpPaid: "signUpPaid",
    recoveryConfirmation: "recovery-password-confirmation",
    emailConfirmation: "email-confirmation",
    accountExclusion: "account-exclusion-confirmation",
    twitter: "twitter",
    google: "google"
  };
  const Se = ["sign-in", "sign-up", "recovery-password"];
  const On = {
    inject: ["$http", "appSettings", "locale"],
    emits: ["redirect"],
    components: {
      TitleComponent: F,
      Loader: ue,
      AlertText: B
    },
    props: {
      title: String,
      callback: Object,
      redirectTimerAfterError: {
        type: Number,
        default: 1e4
      }
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e
      };
    },
    mounted() {
      const {
        getRequestParams: e,
        getRequestEndpoint: t
      } = this;
      this.onCallback({
        payload: e(),
        endpoint: t()
      });
    },
    data() {
      return {
        isLoading: true,
        isError: false,
        elAlert: {
          type: null,
          message: null
        },
        dataLayerPushExecuted: false,
        token: null
      };
    },
    computed: {
      isTwitterCallback() {
        var e;
        return ((e = this.callback) == null ? undefined : e.method) === "twitter";
      },
      isGoogleCallback() {
        var e;
        return ((e = this.callback) == null ? undefined : e.method) === "google";
      }
    },
    methods: {
      getRequestParams() {
        const {
          isTwitterCallback: e,
          isGoogleCallback: t
        } = this;
        if (e) {
          const {
            OAuthToken: o,
            OAuthVerifier: r,
            state: i
          } = this.callback;
          return {
            OAuthToken: o,
            OAuthVerifier: r,
            Locale: this.locale,
            state: i
          };
        } else if (t) {
          const {
            code: o,
            state: r
          } = this.callback;
          return {
            Code: o,
            Locale: this.locale,
            state: r
          };
        }
        return null;
      },
      getRequestEndpoint() {
        const {
          isTwitterCallback: e
        } = this;
        let t = e ? "/twitter" : "/google";
        return z(this.appSettings.ENDPOINT_API_AUTH, t);
      },
      async onCallback({
        payload: e,
        endpoint: t
      }) {
        var r;
        var i;
        var s;
        const {
          isTwitterCallback: o
        } = this;
        try {
          const l = await this.$http.post(t, e);
          const a = await ye({
            appSettings: this.appSettings,
            $http: this.$http,
            tokenV1: (r = l == null ? undefined : l.data) == null ? undefined : r.tokenV1,
            tokenV2: (i = l == null ? undefined : l.data) == null ? undefined : i.token
          });
          if ((a == null ? undefined : a.status) != 200) {
            this.sendMessageToAlert({
              type: "error"
            });
            return;
          }
          setTimeout(() => {
            if (!this.dataLayerPushExecuted) {
              Ie();
              this.dataLayerPushExecuted = true;
            }
          });
          this.token = (s = l == null ? undefined : l.data) == null ? undefined : s.token;
          if (!(e != null && e.state)) {
            this.$emit("success-login", l == null ? undefined : l.data);
          }
          const u = e.state;
          const m = await this.verifyUser();
          if (u && m) {
            localStorage.setItem("privacy_oauth_profile_return", u);
          }
          this.redirect(u);
        } catch (l) {
          this.isError = true;
          const a = Ye({
            error: l,
            type: o ? "TWITTER" : "GOOGLE"
          });
          this.sendMessageToAlert({
            type: "error",
            message: a == null ? undefined : a.message
          });
          setTimeout(() => {
            this.$emit("redirect", "sign-in");
          }, this.redirectTimerAfterError);
        } finally {
          this.isLoading = false;
        }
      },
      sendMessageToAlert({
        type: e,
        message: t = this.t("BASE.GENERIC_ERROR")
      }) {
        this.elAlert.type = null;
        this.elAlert.message = null;
        this.$nextTick(() => {
          this.elAlert.type = e;
          this.elAlert.message = t;
        });
      },
      redirect(e) {
        let t;
        if (e) {
          t = z(this.appSettings.PRIVACY_URL, `/profile/${e}`);
        } else {
          t = z(this.appSettings.PRIVACY_URL, "/");
        }
        window.location.href = t;
      },
      async verifyUser() {
        var e;
        try {
          const t = z(this.appSettings.ENDPOINT_API_PROFILE, "/Users");
          const o = await this.$http.get(t, {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          });
          return o != null && o.data ? !!((e = o.data) != null && e.document) : false;
        } catch (t) {
          console.error(t);
        }
      }
    }
  };
  const wn = {
    key: 0,
    class: "validating-container"
  };
  function zn(e, t, o, r, i, s) {
    const l = n.resolveComponent("TitleComponent");
    const a = n.resolveComponent("Loader");
    const u = n.resolveComponent("AlertText");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createElementVNode("div", null, [n.createVNode(l, {
      description: o.title
    }, null, 8, ["description"]), i.isLoading ? (n.openBlock(), n.createElementBlock("div", wn, [n.createVNode(a, {
      isLoading: i.isLoading
    }, null, 8, ["isLoading"]), n.createElementVNode("span", null, n.toDisplayString(r.t("OAUTH.VALIDATING_ACCESS")), 1)])) : n.createCommentVNode("", true)]), n.createVNode(u, {
      class: "mt-3",
      type: i.elAlert.type,
      message: i.elAlert.message,
      "onUpdate:message": t[0] || (t[0] = m => i.elAlert.message = m)
    }, null, 8, ["type", "message"])]);
  }
  const $e = C(On, [["render", zn]]);
  const kn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: $e
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var bn = {
    prefix: "fal",
    iconName: "eye-slash",
    icon: [640, 512, [], "f070", "M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-51.2 0-96 14.8-133.9 36.8l27.3 21.5C244.6 74.2 280.2 64 320 64c70.4 0 127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-9.2 22.1-25.9 52-49.5 81.5l25.1 19.8c25.6-32 43.7-64.4 53.9-89zM88.4 154.7c-25.6 32-43.7 64.4-53.9 89c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c51.2 0 96-14.8 133.9-36.8l-27.3-21.5C395.4 437.8 359.8 448 320 448c-70.4 0-127.7-32-170.8-72C106.1 336 77.3 288 64 256c9.2-22.1 25.9-52 49.5-81.5L88.4 154.7zM320 384c16.7 0 32.7-3.2 47.4-9.1l-30.9-24.4c-5.4 .9-10.9 1.4-16.5 1.4c-51 0-92.8-39.8-95.8-90.1l-30.9-24.4c-.9 6-1.3 12.2-1.3 18.5c0 70.7 57.3 128 128 128zM448 256c0-70.7-57.3-128-128-128c-16.7 0-32.7 3.2-47.4 9.1l30.9 24.4c5.4-.9 10.9-1.4 16.5-1.4c51 0 92.8 39.8 95.8 90.1l30.9 24.4c.9-6 1.3-12.2 1.3-18.5z"]
  };
  var Ln = {
    prefix: "fal",
    iconName: "user",
    icon: [448, 512, [128100, 62144], "f007", "M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]
  };
  var et = {
    prefix: "fal",
    iconName: "file-signature",
    icon: [576, 512, [], "f573", "M320 480c17.7 0 32-14.3 32-32V437.3l23.8-5.9c2.8-.7 5.6-1.6 8.2-2.7V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H220.1c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9v39.8l-32 32V192H240c-26.5 0-48-21.5-48-48V32H64C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32H320zM240 160H351.5c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zM144 349l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l12.6 42.1c7.1-8.3 17.5-13.1 28.5-13.1c14.2 0 27.2 8 33.5 20.7l5.6 11.3h41.7l15.7-62.6c2.1-8.4 6.5-16.1 12.6-22.3L473.5 145.4c18.7-18.7 49.1-18.7 67.9 0l17.4 17.4c18.7 18.7 18.7 49.1 0 67.9L405.1 384.3c-6.2 6.2-13.9 10.5-22.3 12.6l-74.9 18.7c-2 .5-4.1 .6-6.1 .3H240c-6.1 0-11.6-3.4-14.3-8.8L215.6 387c-.9-1.8-2.8-3-4.9-3c-1.7 0-3.3 .8-4.4 2.2l-17.6 23.4c-3.6 4.8-9.7 7.2-15.6 6.2s-10.8-5.4-12.5-11.2L144 349zM518.8 168c-6.2-6.2-16.4-6.2-22.6 0l-24.8 24.8 40 40L536.2 208c6.2-6.2 6.2-16.4 0-22.6L518.8 168zM342.5 321.7c-2.1 2.1-3.5 4.6-4.2 7.4l-12.3 49 49-12.3c2.8-.7 5.4-2.2 7.4-4.2L488.7 255.4l-40-40L342.5 321.7z"]
  };
  var Mn = {
    prefix: "fal",
    iconName: "lock-keyhole",
    icon: [448, 512, ["lock-alt"], "f30d", "M224 32c53 0 96 43 96 96v64H128V128c0-53 43-96 96-96zM96 128v64H80c-44.2 0-80 35.8-80 80V432c0 44.2 35.8 80 80 80H368c44.2 0 80-35.8 80-80V272c0-44.2-35.8-80-80-80H352V128C352 57.3 294.7 0 224 0S96 57.3 96 128zM80 224H368c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm160 88c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16V312z"]
  };
  var Dn = {
    prefix: "fal",
    iconName: "eye",
    icon: [576, 512, [128065], "f06e", "M117.2 136C160.3 96 217.6 64 288 64s127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-13.3 32-42.1 80-85.2 120c-43.1 40-100.4 72-170.8 72s-127.7-32-170.8-72C74.1 336 45.3 288 32 256c13.3-32 42.1-80 85.2-120zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
  };
  var Pn = {
    prefix: "fal",
    iconName: "envelope",
    icon: [512, 512, [128386, 9993, 61443], "f0e0", "M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
  };
  const xn = new RegExp("^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9._%+-]+)(?<!\\.)@(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,}$");
  const vn = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/]).{8,}$/;
  const Q = {
    requiredField: {
      required: true,
      message: () => this.t("VALIDATION.REQUIRED_FIELD"),
      trigger: ["blur", "change"]
    },
    email: {
      validator: (e, t) => {
        if (t) {
          if (!xn.test(t)) {
            return Promise.reject(this.t("VALIDATION.EMAIL"));
          }
        } else {
          return Promise.reject(this.t("VALIDATION.REQUIRED_FIELD"));
        }
        return Promise.resolve();
      },
      trigger: ["blur"]
    },
    password: {
      validator: (e, t) => {
        if (t) {
          if (!vn.test(t)) {
            return Promise.reject(this.t("VALIDATION.PASSWORD"));
          }
        } else {
          return Promise.reject(this.t("VALIDATION.REQUIRED_FIELD"));
        }
        return Promise.resolve();
      },
      trigger: ["blur", "change"]
    }
  };
  const Vn = {
    install(e) {
      e.directive("loading", fe.vLoading);
      for (const t in fe) if (t.startsWith("El")) {
        e.component(t, fe[t]);
      }
    }
  };
  n.computed(() => {
    var e;
    var t;
    if ((e = E.currentLocale) != null && e.startsWith("pt")) {
      return Ct;
    }
    if ((t = E.currentLocale) != null && t.startsWith("es")) {
      return Nt;
    }
  });
  const Bn = {
    emits: ["mounted"],
    components: {
      ElFormItem: S.ElFormItem,
      ElInput: S.ElInput,
      ElIcon: S.ElIcon
    },
    props: {
      email: String,
      showIcon: {
        type: Boolean,
        default: true
      },
      showAutocomplete: {
        type: Boolean
      }
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        faEnvelope: Pn,
        rules: Q
      };
    },
    data(e) {
      return {
        value: e.email
      };
    },
    mounted() {
      this.$emit("mounted", {
        input: this.$refs.emailInput
      });
    }
  };
  function Gn(e, t, o, r, i, s) {
    const l = n.resolveComponent("font-awesome-icon");
    const a = n.resolveComponent("el-icon");
    const u = n.resolveComponent("el-input");
    const m = n.resolveComponent("el-form-item");
    n.openBlock();
    return n.createBlock(m, {
      prop: "email",
      rules: [r.rules.email]
    }, {
      default: n.withCtx(() => [n.createVNode(u, {
        ref: "emailInput",
        modelValue: i.value,
        "onUpdate:modelValue": t[0] || (t[0] = c => i.value = c),
        size: "large",
        type: "email",
        placeholder: r.t("BASE.EMAIL"),
        "validate-event": false,
        autocomplete: o.showAutocomplete ? "email" : "off",
        onInput: t[1] || (t[1] = c => e.$emit("update:email", c))
      }, n.createSlots({
        _: 2
      }, [o.showIcon ? {
        name: "prefix",
        fn: n.withCtx(() => [n.createVNode(a, {
          class: "el-input__icon"
        }, {
          default: n.withCtx(() => [n.createVNode(l, {
            icon: r.faEnvelope
          }, null, 8, ["icon"])]),
          _: 1
        })]),
        key: "0"
      } : undefined]), 1032, ["modelValue", "placeholder", "autocomplete"])]),
      _: 1
    }, 8, ["rules"]);
  }
  const me = C(Bn, [["render", Gn]]);
  const jn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: me
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  /*! maska v2.1.9 | (c) Alexander Shabunevich | Released under the MIT license */
  var Fn = Object.defineProperty;
  var Wn = (e, t, o) => t in e ? Fn(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: o
  }) : e[t] = o;
  var oe = (e, t, o) => (Wn(e, typeof t != "symbol" ? t + "" : t, o), o);
  const tt = {
    "#": {
      pattern: /[0-9]/
    },
    "@": {
      pattern: /[a-zA-Z]/
    },
    "*": {
      pattern: /[a-zA-Z0-9]/
    }
  };
  class Te {
    constructor(t = {}) {
      oe(this, "opts", {});
      oe(this, "memo", new Map());
      const o = {
        ...t
      };
      if (o.tokens != null) {
        o.tokens = o.tokensReplace ? {
          ...o.tokens
        } : {
          ...tt,
          ...o.tokens
        };
        for (const r of Object.values(o.tokens)) if (typeof r.pattern == "string") {
          r.pattern = new RegExp(r.pattern);
        }
      } else {
        o.tokens = tt;
      }
      if (Array.isArray(o.mask)) {
        if (o.mask.length > 1) {
          o.mask = [...o.mask].sort((r, i) => r.length - i.length);
        } else {
          o.mask = o.mask[0] ?? "";
        }
      }
      if (o.mask === "") {
        o.mask = null;
      }
      this.opts = o;
    }
    masked(t) {
      return this.process(t, this.findMask(t));
    }
    unmasked(t) {
      return this.process(t, this.findMask(t), false);
    }
    isEager() {
      return this.opts.eager === true;
    }
    isReversed() {
      return this.opts.reversed === true;
    }
    completed(t) {
      const o = this.findMask(t);
      if (this.opts.mask == null || o == null) {
        return false;
      }
      const r = this.process(t, o).length;
      return typeof this.opts.mask == "string" ? r >= this.opts.mask.length : typeof this.opts.mask == "function" ? r >= o.length : this.opts.mask.filter(i => r >= i.length).length === this.opts.mask.length;
    }
    findMask(t) {
      const o = this.opts.mask;
      if (o == null) {
        return null;
      }
      if (typeof o == "string") {
        return o;
      }
      if (typeof o == "function") {
        return o(t);
      }
      const r = this.process(t, o.slice(-1).pop() ?? "", false);
      return o.find(i => this.process(t, i, false).length >= r.length) ?? "";
    }
    escapeMask(t) {
      const o = [];
      const r = [];
      t.split("").forEach((i, s) => {
        if (i === "!" && t[s - 1] !== "!") {
          r.push(s - r.length);
        } else {
          o.push(i);
        }
      });
      return {
        mask: o.join(""),
        escaped: r
      };
    }
    process(t, o, r = true) {
      var i;
      if (o == null) {
        return t;
      }
      if (this.memo.has(`value=${t},mask=${o},masked=${r ? 1 : 0}`)) {
        return this.memo.get(`value=${t},mask=${o},masked=${r ? 1 : 0}`);
      }
      const {
        mask: l,
        escaped: a
      } = this.escapeMask(o);
      const u = [];
      const m = this.opts.tokens != null ? this.opts.tokens : {};
      const c = this.isReversed() ? -1 : 1;
      const p = this.isReversed() ? "unshift" : "push";
      const f = this.isReversed() ? 0 : l.length - 1;
      const _ = this.isReversed() ? () => d > -1 && h > -1 : () => d < l.length && h < t.length;
      let M;
      let y = -1;
      let d = this.isReversed() ? l.length - 1 : 0;
      let h = this.isReversed() ? t.length - 1 : 0;
      for (; _();) {
        const A = l.charAt(d);
        const N = m[A];
        const O = (N == null ? undefined : N.transform) != null ? N.transform(t.charAt(h)) : t.charAt(h);
        if (!a.includes(d) && N != null) {
          if (O.match(N.pattern) != null) {
            u[p](O);
            if (N.repeated) {
              if (y === -1) {
                y = d;
              } else if (d === f && d !== y) {
                d = y - c;
              }
              if (f === y) {
                d -= c;
              }
            } else if (N.multiple) {
              d -= c;
            }
            d += c;
          } else if (N.multiple) {
            const v = ((i = u[h - c]) == null ? undefined : i.match(N.pattern)) != null;
            const I = l.charAt(d + c);
            if (v && I !== "" && m[I] == null) {
              d += c;
              h -= c;
            } else {
              u[p]("");
            }
          } else if (O === M) {
            M = undefined;
          } else if (N.optional) {
            d += c;
            h -= c;
          }
          h += c;
        } else {
          if (r && !this.isEager()) {
            u[p](A);
          }
          if (O === A && !this.isEager()) {
            h += c;
          } else {
            M = A;
          }
          if (!this.isEager()) {
            d += c;
          }
        }
        if (this.isEager()) {
          for (; (!this.isReversed() && d <= f || this.isReversed() && d >= f) && (m[l.charAt(d)] == null || a.includes(d));) {
            if (r) {
              u[p](l.charAt(d));
            } else if (l.charAt(d) === t.charAt(h)) {
              h += c;
            }
            d += c;
          }
        }
      }
      this.memo.set(`value=${t},mask=${o},masked=${r ? 1 : 0}`, u.join(""));
      return this.memo.get(`value=${t},mask=${o},masked=${r ? 1 : 0}`);
    }
  }
  const ot = (e, t = {}) => {
    const o = {
      ...t
    };
    if (e.dataset.maska != null && e.dataset.maska !== "") {
      o.mask = e.dataset.maska.startsWith("[") && e.dataset.maska.endsWith("]") ? JSON.parse(e.dataset.maska.replaceAll("'", "\"")) : e.dataset.maska;
    }
    if (e.dataset.maskaEager != null) {
      o.eager = e.dataset.maskaEager !== "" ? !!JSON.parse(e.dataset.maskaEager) : true;
    }
    if (e.dataset.maskaReversed != null) {
      o.reversed = e.dataset.maskaReversed !== "" ? !!JSON.parse(e.dataset.maskaReversed) : true;
    }
    if (e.dataset.maskaTokensReplace != null) {
      o.tokensReplace = e.dataset.maskaTokensReplace !== "" ? !!JSON.parse(e.dataset.maskaTokensReplace) : true;
    }
    if (e.dataset.maskaTokens != null) {
      o.tokens = Kn(e.dataset.maskaTokens);
    }
    return o;
  };
  const Kn = e => {
    if (e.startsWith("{") && e.endsWith("}")) {
      return JSON.parse(e.replaceAll("'", "\""));
    }
    const t = {};
    e.split("|").forEach(o => {
      const r = o.split(":");
      t[r[0]] = {
        pattern: new RegExp(r[1]),
        optional: r[2] === "optional",
        multiple: r[2] === "multiple",
        repeated: r[2] === "repeated"
      };
    });
    return t;
  };
  class qn {
    constructor(t, o = {}) {
      oe(this, "items", new Map());
      oe(this, "beforeinputEvent", r => {
        const i = r.target;
        const s = this.items.get(i);
        if (s.isEager() && "inputType" in r && r.inputType.startsWith("delete") && s.unmasked(i.value).length <= 1) {
          this.setMaskedValue(i, "");
        }
      });
      oe(this, "inputEvent", r => {
        if (r instanceof CustomEvent && r.type === "input" && r.detail != null && typeof r.detail == "object" && "masked" in r.detail) {
          return;
        }
        const i = r.target;
        const s = this.items.get(i);
        const l = i.value;
        const a = i.selectionStart;
        const u = i.selectionEnd;
        let m = l;
        if (s.isEager()) {
          const c = s.masked(l);
          const p = s.unmasked(l);
          if (p === "" && "data" in r && r.data != null) {
            m = r.data;
          } else if (p !== s.unmasked(c)) {
            m = p;
          }
        }
        this.setMaskedValue(i, m);
        if ("inputType" in r && (r.inputType.startsWith("delete") || a != null && a < l.length)) {
          try {
            i.setSelectionRange(a, u);
          } catch {}
        }
      });
      this.options = o;
      if (typeof t == "string") {
        this.init(Array.from(document.querySelectorAll(t)), this.getMaskOpts(o));
      } else {
        this.init("length" in t ? Array.from(t) : [t], this.getMaskOpts(o));
      }
    }
    destroy() {
      for (const t of this.items.keys()) {
        t.removeEventListener("input", this.inputEvent);
        t.removeEventListener("beforeinput", this.beforeinputEvent);
      }
      this.items.clear();
    }
    needUpdateOptions(t, o) {
      const r = this.items.get(t);
      const i = new Te(ot(t, this.getMaskOpts(o)));
      return JSON.stringify(r.opts) !== JSON.stringify(i.opts);
    }
    needUpdateValue(t) {
      const o = t.dataset.maskaValue;
      return o == null && t.value !== "" || o != null && o !== t.value;
    }
    getMaskOpts(t) {
      const {
        onMaska: o,
        preProcess: r,
        postProcess: i,
        ...s
      } = t;
      return s;
    }
    init(t, o) {
      for (const r of t) {
        const i = new Te(ot(r, o));
        this.items.set(r, i);
        if (r.value !== "") {
          this.setMaskedValue(r, r.value);
        }
        r.addEventListener("input", this.inputEvent);
        r.addEventListener("beforeinput", this.beforeinputEvent);
      }
    }
    setMaskedValue(t, o) {
      const r = this.items.get(t);
      if (this.options.preProcess != null) {
        o = this.options.preProcess(o);
      }
      const i = r.masked(o);
      const s = r.unmasked(r.isEager() ? i : o);
      const l = r.completed(o);
      const a = {
        masked: i,
        unmasked: s,
        completed: l
      };
      o = i;
      if (this.options.postProcess != null) {
        o = this.options.postProcess(o);
      }
      t.value = o;
      t.dataset.maskaValue = o;
      if (this.options.onMaska != null) {
        if (Array.isArray(this.options.onMaska)) {
          this.options.onMaska.forEach(u => u(a));
        } else {
          this.options.onMaska(a);
        }
      }
      t.dispatchEvent(new CustomEvent("maska", {
        detail: a
      }));
      t.dispatchEvent(new CustomEvent("input", {
        detail: a
      }));
    }
  }
  const Ce = new WeakMap();
  const Yn = e => {
    setTimeout(() => {
      var t;
      if (((t = Ce.get(e)) == null ? undefined : t.needUpdateValue(e)) === true) {
        e.dispatchEvent(new CustomEvent("input"));
      }
    });
  };
  const Zn = (e, t) => {
    const o = e instanceof HTMLInputElement ? e : e.querySelector("input");
    const r = {
      ...t.arg
    };
    if (o == null) {
      return;
    }
    Yn(o);
    const i = Ce.get(o);
    if (i != null) {
      if (!i.needUpdateOptions(o, r)) {
        return;
      }
      i.destroy();
    }
    if (t.value != null) {
      const s = t.value;
      const l = a => {
        s.masked = a.masked;
        s.unmasked = a.unmasked;
        s.completed = a.completed;
      };
      r.onMaska = r.onMaska == null ? l : Array.isArray(r.onMaska) ? [...r.onMaska, l] : [r.onMaska, l];
    }
    Ce.set(o, new qn(o, r));
  };
  const Qn = {
    cpf: {
      value: "###.###.###-##",
      instance: new Te({
        mask: "###.###.###-##"
      })
    }
  };
  const Xn = {
    emits: ["mounted"],
    components: {
      ElFormItem: S.ElFormItem,
      ElInput: S.ElInput,
      ElIcon: S.ElIcon
    },
    props: {
      document: String,
      showIcon: {
        type: Boolean,
        default: true
      }
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        faUser: Ln
      };
    },
    directives: {
      maska: Zn
    },
    data(e) {
      return {
        value: e.document,
        masks: Qn
      };
    },
    mounted() {
      this.$emit("mounted", {
        input: this.$refs.documentInput
      });
    }
  };
  function Jn(e, t, o, r, i, s) {
    const l = n.resolveComponent("font-awesome-icon");
    const a = n.resolveComponent("el-icon");
    const u = n.resolveComponent("el-input");
    const m = n.resolveComponent("el-form-item");
    const c = n.resolveDirective("maska");
    n.openBlock();
    return n.createBlock(m, {
      prop: "document"
    }, {
      default: n.withCtx(() => [n.withDirectives((n.openBlock(), n.createBlock(u, {
        modelValue: i.value,
        "onUpdate:modelValue": t[0] || (t[0] = p => i.value = p),
        ref: "documentInput",
        size: "large",
        maxlength: 14,
        "validate-event": false,
        placeholder: r.t("BASE.CPF"),
        "data-maska": i.masks.cpf.value,
        onInput: t[1] || (t[1] = p => e.$emit("update:document", p))
      }, n.createSlots({
        _: 2
      }, [o.showIcon ? {
        name: "prefix",
        fn: n.withCtx(() => [n.createVNode(a, {
          class: "el-input__icon"
        }, {
          default: n.withCtx(() => [n.createVNode(l, {
            icon: r.faUser
          }, null, 8, ["icon"])]),
          _: 1
        })]),
        key: "0"
      } : undefined]), 1032, ["modelValue", "placeholder", "data-maska"])), [[c]])]),
      _: 1
    });
  }
  const rt = C(Xn, [["render", Jn]]);
  const $n = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: rt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const eo = {
    emits: ["update:password"],
    components: {
      ElFormItem: S.ElFormItem,
      ElInput: S.ElInput,
      ElIcon: S.ElIcon
    },
    props: {
      password: String,
      showPrefixIcon: {
        type: Boolean,
        default: true
      },
      showSuffixIcon: {
        type: Boolean,
        default: true
      },
      validatePassword: {
        type: Boolean,
        default: true
      },
      showAutocomplete: {
        type: Boolean
      },
      changeTextNew: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        faLockAlt: Mn,
        faEyeSlash: bn,
        faEye: Dn,
        rules: Q
      };
    },
    computed: {
      passwordRule() {
        const {
          validatePassword: e
        } = this;
        return e ? [Q.password] : [Q.requiredField];
      },
      inputType() {
        return this.passwordVisible ? "text" : "password";
      }
    },
    data(e) {
      return {
        value: e.password,
        passwordVisible: false
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
      },
      clearInput() {
        this.value = null;
        this.$emit("update:password", null);
      }
    }
  };
  function to(e, t, o, r, i, s) {
    const l = n.resolveComponent("font-awesome-icon");
    const a = n.resolveComponent("el-icon");
    const u = n.resolveComponent("el-input");
    const m = n.resolveComponent("el-form-item");
    n.openBlock();
    return n.createBlock(m, {
      prop: "password",
      rules: s.passwordRule
    }, {
      default: n.withCtx(() => [n.createVNode(u, {
        modelValue: i.value,
        "onUpdate:modelValue": t[0] || (t[0] = c => i.value = c),
        size: "large",
        placeholder: o.changeTextNew ? r.t("BASE.NEWPASSWORD") : r.t("BASE.PASSWORD"),
        type: s.inputType,
        autocomplete: o.showAutocomplete ? "current-password" : "off",
        "validate-event": false,
        disabled: o.disabled,
        onInput: t[1] || (t[1] = c => e.$emit("update:password", c))
      }, n.createSlots({
        _: 2
      }, [o.showPrefixIcon ? {
        name: "prefix",
        fn: n.withCtx(() => [n.createVNode(a, {
          class: "el-input__icon"
        }, {
          default: n.withCtx(() => [n.createVNode(l, {
            icon: r.faLockAlt
          }, null, 8, ["icon"])]),
          _: 1
        })]),
        key: "0"
      } : undefined, o.showSuffixIcon ? {
        name: "suffix",
        fn: n.withCtx(() => [n.createVNode(a, {
          class: "el-input__icon",
          onClick: s.togglePasswordVisibility
        }, {
          default: n.withCtx(() => [n.createVNode(l, {
            icon: i.passwordVisible ? r.faEye : r.faEyeSlash
          }, null, 8, ["icon"])]),
          _: 1
        }, 8, ["onClick"])]),
        key: "1"
      } : undefined]), 1032, ["modelValue", "placeholder", "type", "autocomplete", "disabled"])]),
      _: 1
    }, 8, ["rules"]);
  }
  const de = C(eo, [["render", to]]);
  const no = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: de
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const oo = {
    components: {
      ElInput: S.ElInput
    },
    emits: ["code-change", "send-code"],
    data() {
      return {
        code: {
          input1: "",
          input2: "",
          input3: "",
          input4: "",
          input5: "",
          input6: ""
        }
      };
    },
    computed: {
      concatenatedCode() {
        return Object.values(this.code).join("");
      }
    },
    watch: {
      concatenatedCode(e) {
        this.$emit("code-change", e);
        if (this.validate()) {
          this.$emit("send-code");
        }
      }
    },
    methods: {
      handleInput(e, t) {
        if (/^\d$/.test(e)) {
          if (t < 6) {
            this.$refs[`input-${t + 1}`].focus();
          }
        } else {
          this.code[`input${t}`] = "";
        }
      },
      handleKeyDown(e, t) {
        if (e.key === "Backspace" && t === 1) {
          return;
        }
        if (this.$refs[`input-${t}`].input.value && t < 6) {
          const i = this.$refs[`input-${t + 1}`];
          if (!(i == null)) {
            i.focus();
          }
        }
      },
      handlePaste(e) {
        var s;
        const t = e.clipboardData;
        const o = (s = t == null ? undefined : t.getData("text")) == null ? undefined : s.trim();
        const r = o == null ? undefined : o.split("");
        if (!o || (r == null ? undefined : r.length) !== 6 || isNaN(o)) {
          return;
        }
        let i;
        r.forEach((l, a) => {
          i = a + 1;
          this.code[`input${i}`] = l;
        });
        this.$refs["input-6"].focus();
      },
      validate() {
        let e = true;
        Object.values(this.code).forEach(t => {
          if (!t) {
            e = false;
          }
          if (typeof Number(t) != "number") {
            e = false;
          }
        });
        return e;
      },
      setFocusFirstInput() {
        this.$refs["input-1"].focus();
      }
    },
    mounted() {
      this.setFocusFirstInput();
      Object.keys(this.$refs).forEach((e, t) => {
        if (!e.includes("input") || !this.$refs[e].input) {
          return;
        }
        this.$refs[e].input.addEventListener("keydown", r => {
          var s;
          var l;
          if (r.key != "Backspace") {
            return;
          }
          this.code[`input${t + 1}`] = "";
          if (t + 1 > 1) {
            let u = (l = (s = this.$refs) == null ? undefined : s[`input-${t}`]) == null ? undefined : l.input;
            if (!(u == null)) {
              u.focus();
            }
            r.preventDefault();
          }
        });
      });
    }
  };
  const ro = {
    class: "code-container d-flex mb-3"
  };
  function io(e, t, o, r, i, s) {
    const l = n.resolveComponent("el-input");
    n.openBlock();
    return n.createElementBlock("div", ro, [n.createVNode(l, {
      modelValue: i.code.input1,
      "onUpdate:modelValue": t[0] || (t[0] = a => i.code.input1 = a),
      ref: "input-1",
      type: "text",
      "input-mode": "numeric",
      maxlength: "1",
      onInput: t[1] || (t[1] = a => s.handleInput(a, 1)),
      onKeydown: t[2] || (t[2] = a => s.handleKeyDown(a, 1)),
      onPaste: s.handlePaste
    }, null, 8, ["modelValue", "onPaste"]), n.createVNode(l, {
      modelValue: i.code.input2,
      "onUpdate:modelValue": t[3] || (t[3] = a => i.code.input2 = a),
      ref: "input-2",
      type: "text",
      "input-mode": "numeric",
      maxlength: "1",
      onInput: t[4] || (t[4] = a => s.handleInput(a, 2)),
      onKeydown: t[5] || (t[5] = a => s.handleKeyDown(a, 2)),
      onPaste: s.handlePaste
    }, null, 8, ["modelValue", "onPaste"]), n.createVNode(l, {
      modelValue: i.code.input3,
      "onUpdate:modelValue": t[6] || (t[6] = a => i.code.input3 = a),
      ref: "input-3",
      type: "text",
      "input-mode": "numeric",
      maxlength: "1",
      onInput: t[7] || (t[7] = a => s.handleInput(a, 3)),
      onKeydown: t[8] || (t[8] = a => s.handleKeyDown(a, 3)),
      onPaste: s.handlePaste
    }, null, 8, ["modelValue", "onPaste"]), n.createVNode(l, {
      modelValue: i.code.input4,
      "onUpdate:modelValue": t[9] || (t[9] = a => i.code.input4 = a),
      ref: "input-4",
      type: "text",
      "input-mode": "numeric",
      maxlength: "1",
      onInput: t[10] || (t[10] = a => s.handleInput(a, 4)),
      onKeydown: t[11] || (t[11] = a => s.handleKeyDown(a, 4)),
      onPaste: s.handlePaste
    }, null, 8, ["modelValue", "onPaste"]), n.createVNode(l, {
      modelValue: i.code.input5,
      "onUpdate:modelValue": t[12] || (t[12] = a => i.code.input5 = a),
      ref: "input-5",
      type: "text",
      "input-mode": "numeric",
      maxlength: "1",
      onInput: t[13] || (t[13] = a => s.handleInput(a, 5)),
      onKeydown: t[14] || (t[14] = a => s.handleKeyDown(a, 5)),
      onPaste: s.handlePaste
    }, null, 8, ["modelValue", "onPaste"]), n.createVNode(l, {
      modelValue: i.code.input6,
      "onUpdate:modelValue": t[15] || (t[15] = a => i.code.input6 = a),
      ref: "input-6",
      type: "text",
      "input-mode": "numeric",
      maxlength: "1",
      onInput: t[16] || (t[16] = a => s.handleInput(a, 6)),
      onKeydown: t[17] || (t[17] = a => s.handleKeyDown(a, 6)),
      onPaste: s.handlePaste
    }, null, 8, ["modelValue", "onPaste"])]);
  }
  const it = C(oo, [["render", io]]);
  const so = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: it
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const lo = {
    directives: {
      loading: S.vLoading
    },
    props: {
      text: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "primary",
        validator: function (e) {
          return ["primary", "secondary", "filled", "outline"].includes(e);
        }
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["click"]
  };
  function co(e, t, o, r, i, s) {
    const l = n.resolveDirective("loading");
    n.openBlock();
    return n.withDirectives(n.createElementBlock("div", {
      class: n.normalizeClass(["base-button", {
        primary: o.type === "primary",
        secondary: o.type === "secondary",
        filled: o.type === "filled",
        outline: o.type === "outline",
        disabled: o.isDisabled || o.isLoading
      }]),
      onClick: t[0] || (t[0] = a => e.$emit("click", a))
    }, [n.renderSlot(e.$slots, "prefix"), n.createTextVNode(" " + n.toDisplayString(o.text), 1)], 2), [[l, o.isLoading]]);
  }
  const G = C(lo, [["render", co], ["styles", [`.base-button{position:relative;display:flex;align-items:center;justify-content:center;height:44px;font-size:14px;padding:8px 14px;text-transform:uppercase;user-select:none;text-align:center;border-radius:30px;cursor:pointer}.base-button.primary{color:#fefefe;background:linear-gradient(45deg,#f58170,#f9af77)}.base-button.primary:hover{background:linear-gradient(45deg,#ffa08a,#ffc09a)}.base-button.secondary{color:#80868b;background:#fbf5ef}.base-button.filled{color:#f0783b;background:rgb(253,241,235);font-size:16px;text-transform:none!important}.base-button.outline{color:#858b8e;background:rgb(255,255,255);border:1px solid rgb(217,217,217);font-size:14px;text-transform:none!important}.base-button.disabled{pointer-events:none;opacity:.2}@media (max-width: 1270px){.base-button{font-size:12px}}.base-button .el-loading-spinner .circular{width:25px}
`]]]);
  const uo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: G
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const po = {
    name: "AuthLinks"
  };
  const fo = {
    class: "aux-links d-flex align-items-center justify-content-between mt-3 px-3"
  };
  function ho(e, t, o, r, i, s) {
    n.openBlock();
    return n.createElementBlock("div", fo, [n.renderSlot(e.$slots, "default")]);
  }
  const q = C(po, [["render", ho], ["styles", [`.aux-links a{color:#80868b!important;cursor:pointer}.aux-links a:hover{color:rgba(var(--color-privacy-3-rgb),1)!important}.aux-links a:active{color:#80868b!important}
`]]]);
  const _o = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: q
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Eo = {
    inject: ["$http", "appSettings", "locale"],
    emits: ["redirect", "success-login", "form-paid"],
    components: {
      ElForm: S.ElForm,
      TitleComponent: F,
      EmailInput: me,
      DocumentInput: rt,
      PasswordInput: de,
      CodeInput: it,
      SignInButton: G,
      AlertText: B,
      AuxiliaryLinks: q,
      ToggleLoginTypeButton: G
    },
    props: {
      showTitle: Boolean,
      showAuxiliaryLinks: Boolean,
      profileName: String,
      returnUrl: String,
      isCheckout: Boolean,
      isFreeCreator: Boolean
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        routes: T
      };
    },
    data() {
      return {
        signIn: {
          email: null,
          password: null,
          isLoading: false,
          document: null
        },
        twoFactor: {
          code: null,
          enabled: false,
          isLoading: false
        },
        elAlert: {
          message: null,
          type: "error"
        },
        loggedUser: false,
        loginWithDocument: false
      };
    },
    computed: {
      formattedDocument() {
        var e;
        return (e = this.signIn) != null && e.document ? this.signIn.document.trim().replace(/\D/g, "") : null;
      },
      signInEndpoint() {
        var e;
        return z((e = this.appSettings) == null ? undefined : e.ENDPOINT_API_AUTH, "login");
      },
      signInModel() {
        var r;
        const {
          locale: e,
          signIn: t,
          twoFactor: o
        } = this;
        return {
          Email: this.loginWithDocument ? null : t.email.trim(),
          Document: this.loginWithDocument ? this.formattedDocument : null,
          Password: t.password.trim(),
          Locale: e == null ? undefined : e.trim(),
          TwoFactorCode: (r = o.code) == null ? undefined : r.trim()
        };
      },
      disableSignInButton() {
        return !!((!this.signIn.email || !nn.test(this.signIn.email.trim())) && (!this.signIn.document || !/^\d{11}$/.test(this.signIn.document.replace(/\D/g, ""))) || !this.signIn.password || this.signIn.password.trim().length === 0);
      },
      toggleLoginTypeButtonText() {
        return this.loginWithDocument ? this.t("SIGN_IN.WITH_EMAIL") : this.t("SIGN_IN.WITH_DOCUMENT");
      }
    },
    watch: {
      "signIn.email": {
        immediate: true,
        handler(e) {
          if (e) {
            this.clearAlert();
          }
        }
      },
      "signIn.password": {
        immediate: true,
        handler(e) {
          if (e) {
            this.clearAlert();
          }
        }
      }
    },
    methods: {
      async submitSignInForm() {
        var t;
        var o;
        var r;
        var i;
        var s;
        var l;
        var a;
        var u;
        if (await ((o = (t = this.$refs.signInForm).validate) == null ? undefined : o.call(t))) {
          try {
            this.signIn.isLoading = true;
            const m = await this.$http.post(this.signInEndpoint, {
              ...this.signInModel,
              CanReceiveEmail: Ze(this.signIn.email),
              ProfileName: this.profileName
            });
            if ((r = m == null ? undefined : m.data) == null ? undefined : r.isEnabledTwoFactor) {
              this.clearAlert();
              this.twoFactor.enabled = true;
              return;
            }
            const p = await ye({
              appSettings: this.appSettings,
              $http: this.$http,
              tokenV1: (i = m == null ? undefined : m.data) == null ? undefined : i.tokenV1,
              tokenV2: (s = m == null ? undefined : m.data) == null ? undefined : s.token
            });
            if ((p == null ? undefined : p.status) != 200) {
              this.sendMessageToAlert();
              return;
            }
            this.loggedUser = true;
            if (!this.returnUrl) {
              this.$emit("success-login", m == null ? undefined : m.data);
              return;
            }
            window.location.href = z((l = this.appSettings) == null ? undefined : l.PRIVACY_URL, this.returnUrl);
          } catch (m) {
            const c = (u = (a = m.response) == null ? undefined : a.data) == null ? undefined : u.remainingAttempts;
            const p = Ye({
              error: m,
              type: "SIGN_IN",
              remainingAttempts: c,
              loginWithDocument: this.loginWithDocument
            });
            let {
              message: f,
              alertType: _,
              statusCode: g
            } = p;
            if (g === 403) {
              f = await this.handleUserBlockReason(f);
            }
            this.sendMessageToAlert({
              message: f,
              alertType: _
            });
            this.signIn.password = null;
            this.$refs.passwordInputRef.clearInput();
          } finally {
            if (!this.loggedUser) {
              this.signIn.isLoading = false;
            }
          }
        }
      },
      async handleUserBlockReason(e) {
        var t;
        try {
          const o = this.loginWithDocument ? null : this.signIn.email.trim();
          const r = this.loginWithDocument ? this.formattedDocument : null;
          const i = z((t = this.appSettings) == null ? undefined : t.ENDPOINT_API_AUTH, `user-block-reason/${o}/${r}`);
          const {
            status: s,
            data: l
          } = await this.$http.get(i);
          if (s === 200 && l) {
            return l;
          }
        } catch (o) {
          console.error(o);
        }
        return e;
      },
      async submitTwoFactorForm() {
        var r;
        var i;
        var s;
        const {
          validate: e
        } = this.$refs.codeInputRef;
        const t = this.t("SIGN_IN.TWO_FACTOR.INVALID_CODE");
        if (!(e == null ? undefined : e())) {
          this.sendMessageToAlert({
            message: t
          });
          return;
        }
        try {
          this.twoFactor.isLoading = true;
          const l = await this.$http.post(this.signInEndpoint, this.signInModel);
          if ((l == null ? undefined : l.status) != 200) {
            this.sendMessageToAlert({
              message: t
            });
            return;
          }
          const a = await ye({
            appSettings: this.appSettings,
            $http: this.$http,
            tokenV1: (r = l == null ? undefined : l.data) == null ? undefined : r.tokenV1,
            tokenV2: (i = l == null ? undefined : l.data) == null ? undefined : i.token
          });
          if ((a == null ? undefined : a.status) != 200) {
            this.sendMessageToAlert();
            return;
          }
          this.loggedUser = true;
          if (!this.returnUrl) {
            this.$emit("success-login", l == null ? undefined : l.data);
            return;
          }
          window.location.href = z((s = this.appSettings) == null ? undefined : s.PRIVACY_URL, this.returnUrl);
        } catch {
          this.sendMessageToAlert({
            message: t
          });
        } finally {
          if (!this.loggedUser) {
            this.twoFactor.isLoading = false;
          }
        }
      },
      ToggleLoginType() {
        this.clearUserInputs();
        this.loginWithDocument = !this.loginWithDocument;
      },
      clearUserInputs() {
        this.signIn.email = null;
        this.signIn.document = null;
      },
      sendMessageToAlert({
        message: e = this.t("BASE.GENERIC_ERROR"),
        alertType: t = "error"
      }) {
        this.clearAlert();
        this.$nextTick(() => {
          this.elAlert.message = e;
          this.elAlert.type = t;
        });
      },
      clearAlert() {
        this.elAlert.message = null;
        this.elAlert.type = null;
      },
      callFormPaid() {
        this.$emit("redirect", "signUpPaid");
        this.$emit("form-paid");
      }
    }
  };
  const yo = {
    key: 0
  };
  const Io = {
    key: 1
  };
  function So(e, t, o, r, i, s) {
    const l = n.resolveComponent("TitleComponent");
    const a = n.resolveComponent("DocumentInput");
    const u = n.resolveComponent("EmailInput");
    const m = n.resolveComponent("PasswordInput");
    const c = n.resolveComponent("AuxiliaryLinks");
    const p = n.resolveComponent("SignInButton");
    const f = n.resolveComponent("el-form");
    const _ = n.resolveComponent("CodeInput");
    const g = n.resolveComponent("AlertText");
    const M = n.resolveComponent("ToggleLoginTypeButton");
    n.openBlock();
    return n.createElementBlock("div", null, [i.twoFactor.enabled ? (n.openBlock(), n.createElementBlock("div", Io, [o.showTitle ? (n.openBlock(), n.createBlock(l, {
      key: 0,
      description: r.t("SIGN_IN.TWO_FACTOR.TITLE")
    }, null, 8, ["description"])) : n.createCommentVNode("", true), n.createElementVNode("p", null, n.toDisplayString(r.t("SIGN_IN.TWO_FACTOR.DESCRIPTION")), 1), n.createVNode(f, {
      ref: "twoFactorForm",
      model: i.twoFactor,
      onKeyup: n.withKeys(s.submitTwoFactorForm, ["enter"])
    }, {
      default: n.withCtx(() => [n.createVNode(_, {
        ref: "codeInputRef",
        onCodeChange: t[4] || (t[4] = y => i.twoFactor.code = y),
        onSendCode: s.submitTwoFactorForm
      }, null, 8, ["onSendCode"]), n.createVNode(p, {
        text: r.t("SIGN_IN.TWO_FACTOR.BUTTON"),
        isLoading: i.twoFactor.isLoading,
        onClick: s.submitTwoFactorForm
      }, null, 8, ["text", "isLoading", "onClick"])]),
      _: 1
    }, 8, ["model", "onKeyup"])])) : (n.openBlock(), n.createElementBlock("div", yo, [o.showTitle ? (n.openBlock(), n.createBlock(l, {
      key: 0,
      style: n.normalizeStyle(o.isCheckout ? "padding-left: 16px; margin-top: 20px; font-weight: 500;" : null),
      description: r.t("SIGN_IN.TITLE")
    }, null, 8, ["style", "description"])) : n.createCommentVNode("", true), n.createVNode(f, {
      ref: "signInForm",
      model: i.signIn,
      onKeyup: n.withKeys(s.submitSignInForm, ["enter"])
    }, {
      default: n.withCtx(() => [i.loginWithDocument ? (n.openBlock(), n.createBlock(a, {
        key: 0,
        document: i.signIn.document,
        "onUpdate:document": t[0] || (t[0] = y => i.signIn.document = y)
      }, null, 8, ["document"])) : (n.openBlock(), n.createBlock(u, {
        key: 1,
        email: i.signIn.email,
        "onUpdate:email": t[1] || (t[1] = y => i.signIn.email = y),
        showAutocomplete: true
      }, null, 8, ["email"])), n.createVNode(m, {
        ref: "passwordInputRef",
        style: n.normalizeStyle(o.isCheckout ? "margin-bottom: 1px;" : null),
        password: i.signIn.password,
        "onUpdate:password": t[2] || (t[2] = y => i.signIn.password = y),
        validatePassword: false,
        showAutocomplete: true
      }, null, 8, ["style", "password"]), o.showAuxiliaryLinks && o.isCheckout ? (n.openBlock(), n.createBlock(c, {
        key: 2,
        class: "auxiliar-checkout-sign"
      }, {
        default: n.withCtx(() => [n.createElementVNode("a", {
          class: "recovery-checkout",
          onClick: t[3] || (t[3] = n.withModifiers(y => e.$emit("redirect", r.routes.recoveryPassword), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.RECOVERY_PASSWORD_CHECKOUT")), 1)]),
        _: 1
      })) : n.createCommentVNode("", true), n.createVNode(p, {
        text: o.isCheckout ? r.t("SIGN_IN.BUTTON_CHECKOUT") : r.t("SIGN_IN.BUTTON"),
        isLoading: i.signIn.isLoading,
        isDisabled: s.disableSignInButton,
        onClick: s.submitSignInForm
      }, null, 8, ["text", "isLoading", "isDisabled", "onClick"])]),
      _: 1
    }, 8, ["model", "onKeyup"])])), o.showAuxiliaryLinks && o.isCheckout ? (n.openBlock(), n.createBlock(c, {
      key: 2,
      style: {
        "justify-content": "center !important"
      }
    }, {
      default: n.withCtx(() => [n.createElementVNode("a", {
        class: "sign-checkout",
        onClick: t[5] || (t[5] = n.withModifiers(y => o.isFreeCreator ? e.$emit("redirect", r.routes.signUp) : s.callFormPaid(), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.REGISTER_CHECKOUT")), 1)]),
      _: 1
    })) : n.createCommentVNode("", true), n.createVNode(g, {
      class: "mt-3",
      type: i.elAlert.type,
      message: i.elAlert.message,
      "onUpdate:message": t[6] || (t[6] = y => i.elAlert.message = y)
    }, null, 8, ["type", "message"]), o.showAuxiliaryLinks && !o.isCheckout ? (n.openBlock(), n.createBlock(c, {
      key: 3
    }, {
      default: n.withCtx(() => [n.createElementVNode("a", {
        onClick: t[7] || (t[7] = n.withModifiers(y => e.$emit("redirect", r.routes.signUp), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.SIGN_UP")), 1), n.createElementVNode("a", {
        onClick: t[8] || (t[8] = n.withModifiers(y => e.$emit("redirect", r.routes.recoveryPassword), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.RECOVERY_PASSWORD")), 1)]),
      _: 1
    })) : n.createCommentVNode("", true), n.createVNode(M, {
      class: "mt-5",
      type: "filled",
      text: s.toggleLoginTypeButtonText,
      onClick: s.ToggleLoginType
    }, null, 8, ["text", "onClick"])]);
  }
  const st = C(Eo, [["render", So], ["styles", [`.recovery-checkout{font-size:14px;font-weight:400;font-family:Inter,sans-serif;padding-left:16px}.sign-checkout{font-size:16px;font-weight:600;font-family:Inter,sans-serif;color:#7f7f7f}.auxiliar-checkout-sign{justify-content:end!important;margin-top:1px!important;margin-bottom:1.5rem!important}
`]]]);
  const To = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: st
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Ro = {
    components: {
      ElFormItem: S.ElFormItem,
      ElInput: S.ElInput,
      ElIcon: S.ElIcon
    },
    props: {
      username: String,
      showIcon: {
        type: Boolean,
        default: true
      }
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        faFileSignature: et,
        rules: Q
      };
    },
    data(e) {
      return {
        value: e.username
      };
    },
    mounted() {
      this.$emit("mounted", {
        input: this.$refs.usernameInput
      });
    }
  };
  function Co(e, t, o, r, i, s) {
    const l = n.resolveComponent("font-awesome-icon");
    const a = n.resolveComponent("el-icon");
    const u = n.resolveComponent("el-input");
    const m = n.resolveComponent("el-form-item");
    n.openBlock();
    return n.createBlock(m, {
      prop: "username",
      rules: [r.rules.requiredField]
    }, {
      default: n.withCtx(() => [n.createVNode(u, {
        ref: "usernameInput",
        modelValue: i.value,
        "onUpdate:modelValue": t[0] || (t[0] = c => i.value = c),
        placeholder: r.t("SIGN_UP.USERNAME"),
        size: "large",
        type: "text",
        onInput: t[1] || (t[1] = c => e.$emit("update:username", c))
      }, n.createSlots({
        _: 2
      }, [o.showIcon ? {
        name: "prefix",
        fn: n.withCtx(() => [n.createVNode(a, {
          class: "el-input__icon"
        }, {
          default: n.withCtx(() => [n.createVNode(l, {
            icon: r.faFileSignature
          }, null, 8, ["icon"])]),
          _: 1
        })]),
        key: "0"
      } : undefined]), 1032, ["modelValue", "placeholder"])]),
      _: 1
    }, 8, ["rules"]);
  }
  const at = C(Ro, [["render", Co]]);
  const No = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: at
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const lt = Fe("queryString", {
    state: () => ({
      referral: ""
    }),
    actions: {
      setReferral(e) {
        this.referral = e;
      }
    }
  });
  var Ne = {
    prefix: "fas",
    iconName: "circle-check",
    icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
  };
  const Ao = {
    props: {
      password: {
        type: String,
        default: ""
      },
      passwordConfirmation: {
        type: String,
        default: ""
      },
      excludeValidations: []
    },
    components: {
      ElIcon: S.ElIcon
    },
    emits: ["enable-btn"],
    setup() {
      const {
        t: e
      } = k();
      return {
        faCircleCheck: Ne,
        t: e
      };
    },
    computed: {
      minLength() {
        var e;
        return ((e = this.password) == null ? undefined : e.trim().length) >= 8;
      },
      upperAndLowerCase() {
        return /[a-z]/.test(this.password) && /[A-Z]/.test(this.password);
      },
      numberAndSpecialCharacters() {
        var e;
        var t;
        return /\d/.test((e = this.password) == null ? undefined : e.trim()) && /[\W_]/.test((t = this.password) == null ? undefined : t.trim());
      },
      equalPasswords() {
        var e;
        var t;
        var o;
        var r;
        return ((e = this.password) == null ? undefined : e.trim()) && ((t = this.passwordConfirmation) == null ? undefined : t.trim()) && ((o = this.password) == null ? undefined : o.trim()) === ((r = this.passwordConfirmation) == null ? undefined : r.trim()) || false;
      },
      rules() {
        const e = [{
          title: this.t("RECOVERY_PASSWORD_CONFIRMATION.RULES.MIN_LENGTH"),
          rule: this.minLength,
          name: "minLength"
        }, {
          title: this.t("RECOVERY_PASSWORD_CONFIRMATION.RULES.UPPER_AND_LOWER_CASE"),
          rule: this.upperAndLowerCase,
          name: "upperAndLowerCase"
        }, {
          title: this.t("RECOVERY_PASSWORD_CONFIRMATION.RULES.NUMBER_AND_SPECIAL_CHARACTERS"),
          rule: this.numberAndSpecialCharacters,
          name: "numberAndSpecialCharacters"
        }, {
          title: this.t("RECOVERY_PASSWORD_CONFIRMATION.RULES.EQUAL_PASSWORDS"),
          rule: this.equalPasswords,
          name: "equalPasswords"
        }].filter(o => {
          var r;
          return !((r = this.excludeValidations) != null && r.includes(o.name));
        });
        if (e.reduce((o, r) => !(o && o.rule) && !(r && r.rule))) {
          this.$emit("enable-btn", true);
        } else {
          this.$emit("enable-btn", false);
        }
        return e;
      }
    }
  };
  const Oo = {
    class: "mb-3 px-3"
  };
  const wo = {
    class: "d-flex align-items-center mb-1"
  };
  const zo = {
    class: "ms-2"
  };
  function ko(e, t, o, r, i, s) {
    const l = n.resolveComponent("font-awesome-icon");
    const a = n.resolveComponent("el-icon");
    n.openBlock();
    n.openBlock(true);
    return n.createElementBlock("div", Oo, [n.createElementBlock(n.Fragment, null, n.renderList(s.rules, u => (n.openBlock(), n.createElementBlock("div", wo, [n.createVNode(a, {
      class: "el-input__icon"
    }, {
      default: n.withCtx(() => [(n.openBlock(), n.createBlock(l, {
        icon: r.faCircleCheck,
        key: u.name,
        color: u.rule ? "#4AA700" : "#D9D9D9"
      }, null, 8, ["icon", "color"]))]),
      _: 2
    }, 1024), n.createElementVNode("span", zo, n.toDisplayString(u.title), 1)]))), 256)]);
  }
  const Ae = C(Ao, [["render", ko]]);
  const bo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ae
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Mo = {
    inject: ["$http", "appSettings", "locale"],
    emits: ["redirect"],
    components: {
      ElForm: S.ElForm,
      ElCheckbox: S.ElCheckbox,
      TitleComponent: F,
      UsernameInput: at,
      EmailInput: me,
      PasswordInput: de,
      SignUpButton: G,
      AlertText: B,
      AuxiliaryLinks: q,
      PasswordTest: Ae
    },
    props: {
      showTitle: Boolean,
      showAuxiliaryLinks: Boolean,
      isCheckout: Boolean,
      profileName: String
    },
    setup() {
      const {
        t: e
      } = k();
      const t = lt();
      return {
        t: e,
        faFileSignature: et,
        faCircleCheck: Ne,
        rules: Q,
        routes: T,
        queryStringStore: t
      };
    },
    data() {
      return {
        signUp: {
          userId: null,
          username: null,
          email: null,
          password: null,
          acceptTerms: false
        },
        isLoading: false,
        elAlert: {
          type: null,
          message: null
        },
        dataLayerPushExecuted: false
      };
    },
    watch: {
      "signUp.acceptTerms"(e) {
        const t = this.elAlert.message;
        const o = this.t("SIGN_UP.ERROR.TERMS_NOT_ACCEPTED");
        if (e && t === o) {
          this.clearElAlert();
        }
      }
    },
    computed: {
      userAcceptedTerms() {
        return this.signUp.acceptTerms;
      }
    },
    methods: {
      async handleSubmitSignUp() {
        var t;
        var o;
        if (await ((o = (t = this.$refs.signUpForm).validate) == null ? undefined : o.call(t))) {
          try {
            if (!this.userAcceptedTerms) {
              this.sendMessageToAlert({
                type: "error",
                message: this.t("SIGN_UP.ERROR.TERMS_NOT_ACCEPTED")
              });
              return;
            }
            this.isLoading = true;
            const r = this.getAnonynousId();
            const i = await this.onRegisterAsync({
              email: this.signUp.email,
              password: this.signUp.password,
              locale: this.locale,
              nickname: this.signUp.username,
              anonymousId: r
            });
            if (!(i != null && i.success)) {
              this.sendMessageToAlert({
                type: "error",
                message: this.getErrorMessageByErrorKey(i == null ? undefined : i.errorKey)
              });
              return;
            }
            Ee(this.signUp.email);
            const s = this.getReferralCode();
            if (s) {
              await this.onReferAsync(s, i.userId);
            }
            const l = i == null ? undefined : i.errorKey;
            let a;
            if (l === "EMAIL_NOT_SENT") {
              a = this.t("SIGN_UP.ERROR.EMAIL_NOT_SENT");
            } else {
              a = this.t("SIGN_UP.SUCCESS");
            }
            this.sendMessageToAlert({
              type: "success",
              message: a
            });
            setTimeout(() => {
              if (!this.dataLayerPushExecuted) {
                Ie();
                this.dataLayerPushExecuted = true;
              }
            });
            setTimeout(() => {
              this.$emit("redirect", "sign-in");
            }, 6e3);
          } catch {
            this.sendMessageToAlert({
              type: "error",
              message: this.t("BASE.GENERIC_ERROR")
            });
          } finally {
            this.isLoading = false;
            this.signUp.acceptTerms = false;
          }
        }
      },
      async onRegisterAsync({
        email: e,
        password: t,
        locale: o,
        nickname: r,
        anonymousId: i
      }) {
        var s;
        var l;
        var a;
        var u;
        var m;
        try {
          if (!e || !t || !o || !r) {
            return;
          }
          const c = z((s = this.appSettings) == null ? undefined : s.ENDPOINT_API_AUTH, "/register");
          const p = {
            Email: e,
            Password: t,
            Locale: o,
            NickName: r,
            ProfileName: this.profileName,
            AnonymousId: i
          };
          const f = await this.$http.post(c, p);
          const _ = (l = f == null ? undefined : f.data) == null ? undefined : l.errorKey;
          const g = (a = f == null ? undefined : f.data) == null ? undefined : a.userId;
          return _ ? {
            success: true,
            errorKey: _,
            userId: g
          } : {
            success: true,
            errorKey: null,
            userId: g
          };
        } catch (c) {
          return {
            success: false,
            errorKey: (m = (u = c == null ? undefined : c.response) == null ? undefined : u.data) == null ? undefined : m.errorKey
          };
        }
      },
      getReferralCode() {
        return this.queryStringStore.referral ? this.queryStringStore.referral : null;
      },
      getAnonynousId() {
        const e = dn("mm_tracker");
        if (!e) {
          return null;
        }
        try {
          const t = JSON.parse(e);
          return (t == null ? undefined : t.anonymous_id) ?? null;
        } catch {
          return null;
        }
      },
      async onReferAsync(e, t) {
        var r;
        if (!e || !t) {
          return;
        }
        const o = z((r = this.appSettings) == null ? undefined : r.ENDPOINT_API_REFER, `/me/acquisitions/${e}/${t}`);
        await this.$http.post(o);
      },
      sendMessageToAlert({
        type: e,
        message: t
      }) {
        this.clearElAlert();
        this.$nextTick(() => {
          this.elAlert.type = e;
          this.elAlert.message = t;
        });
      },
      clearElAlert() {
        this.elAlert.type = null;
        this.elAlert.message = null;
      },
      getErrorMessageByErrorKey(e) {
        switch (e) {
          case "INVALID_EMAIL":
            return this.t("VALIDATION.EMAIL");
          case "EMAIL_IN_USE":
            return this.t("SIGN_UP.ERROR.EMAIL_IN_USE");
          default:
            return this.t("BASE.GENERIC_ERROR");
        }
      }
    }
  };
  const Uo = {
    class: "accept-terms-container mb-3"
  };
  const Do = ["innerHTML"];
  function Po(e, t, o, r, i, s) {
    const l = n.resolveComponent("TitleComponent");
    const a = n.resolveComponent("UsernameInput");
    const u = n.resolveComponent("EmailInput");
    const m = n.resolveComponent("PasswordInput");
    const c = n.resolveComponent("PasswordTest");
    const p = n.resolveComponent("AuxiliaryLinks");
    const f = n.resolveComponent("el-checkbox");
    const _ = n.resolveComponent("SignUpButton");
    const g = n.resolveComponent("AlertText");
    const M = n.resolveComponent("el-form");
    n.openBlock();
    return n.createBlock(M, {
      ref: "signUpForm",
      model: i.signUp,
      onKeyup: n.withKeys(s.handleSubmitSignUp, ["enter"])
    }, {
      default: n.withCtx(() => [o.showTitle ? (n.openBlock(), n.createBlock(l, {
        key: 0,
        style: n.normalizeStyle(o.isCheckout ? "padding-left: 16px; margin-top: 20px; font-weight: 500;" : null),
        description: r.t("SIGN_UP.TITLE"),
        subtitle: r.t("SIGN_UP.SUBTITLE")
      }, null, 8, ["style", "description", "subtitle"])) : n.createCommentVNode("", true), n.createVNode(a, {
        username: i.signUp.username,
        "onUpdate:username": t[0] || (t[0] = y => i.signUp.username = y)
      }, null, 8, ["username"]), n.createVNode(u, {
        email: i.signUp.email,
        "onUpdate:email": t[1] || (t[1] = y => i.signUp.email = y)
      }, null, 8, ["email"]), n.createVNode(m, {
        password: i.signUp.password,
        "onUpdate:password": t[2] || (t[2] = y => i.signUp.password = y),
        style: n.normalizeStyle(o.isCheckout ? "margin-bottom: 1px" : null)
      }, null, 8, ["password", "style"]), n.createVNode(c, {
        password: i.signUp.password,
        excludeValidations: ["equalPasswords"]
      }, null, 8, ["password"]), o.showAuxiliaryLinks && o.isCheckout ? (n.openBlock(), n.createBlock(p, {
        key: 1,
        class: "auxiliar-checkout"
      }, {
        default: n.withCtx(() => [n.createElementVNode("a", {
          class: "checkout",
          onClick: t[3] || (t[3] = n.withModifiers(y => e.$emit("redirect", r.routes.recoveryPassword), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.RECOVERY_PASSWORD_CHECKOUT")), 1), n.createElementVNode("a", {
          class: "checkout",
          onClick: t[4] || (t[4] = n.withModifiers(y => e.$emit("redirect", r.routes.signIn), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.SIGN_IN")), 1)]),
        _: 1
      })) : n.createCommentVNode("", true), n.createElementVNode("div", Uo, [n.createVNode(f, {
        modelValue: i.signUp.acceptTerms,
        "onUpdate:modelValue": t[5] || (t[5] = y => i.signUp.acceptTerms = y),
        id: "acceptTerms",
        size: "large"
      }, null, 8, ["modelValue"]), n.createElementVNode("label", {
        for: "acceptTerms",
        innerHTML: r.t("SIGN_UP.ACCEPT_TERMS")
      }, null, 8, Do)]), n.createVNode(_, {
        text: r.t("SIGN_UP.BUTTON"),
        isLoading: i.isLoading,
        onClick: s.handleSubmitSignUp
      }, null, 8, ["text", "isLoading", "onClick"]), n.createVNode(g, {
        class: "mt-3",
        type: i.elAlert.type,
        message: i.elAlert.message,
        "onUpdate:message": t[6] || (t[6] = y => i.elAlert.message = y)
      }, null, 8, ["type", "message"]), o.showAuxiliaryLinks && !o.isCheckout ? (n.openBlock(), n.createBlock(p, {
        key: 2,
        class: "d-flex justify-content-around"
      }, {
        default: n.withCtx(() => [n.createElementVNode("a", {
          onClick: t[7] || (t[7] = n.withModifiers(y => e.$emit("redirect", r.routes.signIn), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.SIGN_IN")), 1)]),
        _: 1
      })) : n.createCommentVNode("", true)]),
      _: 1
    }, 8, ["model", "onKeyup"]);
  }
  const ct = C(Mo, [["render", Po], ["styles", [`.accept-terms-container{display:flex}.accept-terms-container .el-checkbox{margin-right:12px!important}.accept-terms-container .el-checkbox .el-checkbox__inner{margin-top:4px;height:20px!important;width:20px!important;border:2px solid #9b9fa1;border-radius:3px}.accept-terms-container .el-checkbox .el-checkbox__inner:after{height:10px;width:6px;left:5px}.accept-terms-container label{display:inline-block;position:relative;font-size:14px;cursor:pointer;color:#343a40}.checkout{font-size:14px;font-weight:400;font-family:"Inter" sans-serif}.auxiliar-checkout{justify-content:space-between;margin-top:1px!important;margin-bottom:1.5rem!important}
`]]]);
  const xo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ct
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const vo = {
    components: {
      SupportButton: G
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e
      };
    },
    methods: {
      showSupportComponent: Qe
    }
  };
  const Vo = {
    class: "mt-3"
  };
  function Bo(e, t, o, r, i, s) {
    const l = n.resolveComponent("SupportButton");
    n.openBlock();
    return n.createElementBlock("div", Vo, [n.createVNode(l, {
      type: "secondary",
      text: r.t("SUPPORT.SUPPORT_CONTACT"),
      onClick: s.showSupportComponent
    }, null, 8, ["text", "onClick"])]);
  }
  const Oe = C(vo, [["render", Bo]]);
  const Go = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Oe
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Fo = {
    inject: ["$http", "appSettings", "locale"],
    emits: ["redirect"],
    components: {
      ElForm: S.ElForm,
      TitleComponent: F,
      EmailInput: me,
      RecoveryPasswordButton: G,
      AlertText: B,
      PrivacySupport: Oe,
      AuxiliaryLinks: q
    },
    props: {
      showTitle: Boolean,
      showAuxiliaryLinks: Boolean,
      profileName: String,
      isCheckout: Boolean,
      isFreeCreator: Boolean
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        routes: T
      };
    },
    data() {
      return {
        recoveryPassword: {
          email: null
        },
        isLoading: false,
        isDisabled: false,
        elAlert: {
          type: null,
          message: null
        },
        countdownTimer: 0,
        countdownInterval: null,
        defaultInterval: 60
      };
    },
    watch: {
      "recoveryPassword.email": {
        immediate: true,
        handler() {
          this.clearAlert();
        }
      }
    },
    methods: {
      async submitRecoveryForm(e) {
        var i;
        var s;
        var l;
        var a;
        var u;
        var m;
        if (!(e == null)) {
          e.preventDefault();
        }
        if (!(await ((s = (i = this.$refs.recoveryForm).validate) == null ? undefined : s.call(i)))) {
          return;
        }
        const {
          hasActiveCounter: o,
          seconds: r
        } = this.checkHasActiveCounter();
        if (o) {
          this.startCountdown(r);
          return;
        }
        try {
          this.isLoading = true;
          this.clearAlert();
          const {
            locale: c
          } = this;
          const p = z((l = this.appSettings) == null ? undefined : l.ENDPOINT_API_AUTH, `/recovery-password/${c}`);
          await this.$http.post(p, {
            Email: (a = this.recoveryPassword.email) == null ? undefined : a.trim(),
            ProfileName: this.profileName
          });
          this.sendMessageToAlert({
            type: "success",
            message: this.t("RECOVERY_PASSWORD.EMAIL_SENT")
          });
          this.saveLastRecoveryEmailSent((u = this.recoveryPassword.email) == null ? undefined : u.trim());
          this.startCountdown(this.defaultInterval);
        } catch (c) {
          const p = Ke[(m = c.response) == null ? undefined : m.status] || Ke.DEFAULT;
          this.sendMessageToAlert({
            type: "error",
            message: p()
          });
        } finally {
          this.isLoading = false;
        }
      },
      sendMessageToAlert({
        type: e,
        message: t
      }) {
        this.elAlert.type = null;
        this.elAlert.message = null;
        this.$nextTick(() => {
          this.elAlert.type = e;
          this.elAlert.message = t;
        });
      },
      saveLastRecoveryEmailSent(e) {
        const t = {
          email: e,
          date: new Date().toISOString()
        };
        localStorage.setItem("privacy_last_recovery_email", JSON.stringify(t));
      },
      startCountdown(e) {
        this.isDisabled = true;
        this.countdownTimer = e;
        this.countdownInterval = setInterval(() => {
          this.countdownTimer -= 1;
          if (this.countdownTimer <= 0) {
            clearInterval(this.countdownInterval);
            this.isDisabled = false;
          }
        }, 1e3);
      },
      checkHasActiveCounter() {
        var t;
        const e = localStorage.getItem("privacy_last_recovery_email");
        if (e) {
          const {
            email: o,
            date: r
          } = JSON.parse(e);
          if (o === ((t = this.recoveryPassword.email) == null ? undefined : t.trim())) {
            const i = this.getSecondsDifference(r);
            if (i < this.defaultInterval) {
              return {
                hasActiveCounter: true,
                seconds: this.defaultInterval - i
              };
            }
          }
        }
        return {
          hasActiveCounter: false,
          seconds: null
        };
      },
      getSecondsDifference(e) {
        const t = new Date();
        const o = new Date(e);
        const r = t.getTime() - o.getTime();
        return Math.floor(r / 1e3);
      },
      clearAlert() {
        this.elAlert.message = null;
        this.elAlert.type = null;
      },
      callFormPaid() {
        this.$emit("redirect", "signUpPaid");
        this.$emit("form-paid");
      }
    },
    beforeUnmount() {
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }
    }
  };
  const Wo = {
    class: "mb-2"
  };
  const Ho = {
    class: "support-text"
  };
  const Ko = {
    key: 3,
    class: "d-block my-2 text-center"
  };
  const qo = {
    key: 0,
    class: "mt-2"
  };
  const Yo = {
    class: "support-text"
  };
  const Zo = {
    class: "mt-2"
  };
  const Qo = {
    class: "base-button secondary"
  };
  function Xo(e, t, o, r, i, s) {
    const l = n.resolveComponent("TitleComponent");
    const a = n.resolveComponent("EmailInput");
    const u = n.resolveComponent("AuxiliaryLinks");
    const m = n.resolveComponent("RecoveryPasswordButton");
    const c = n.resolveComponent("AlertText");
    const p = n.resolveComponent("PrivacySupport");
    const f = n.resolveComponent("el-form");
    n.openBlock();
    return n.createBlock(f, {
      ref: "recoveryForm",
      model: i.recoveryPassword,
      onSubmit: t[7] || (t[7] = _ => s.submitRecoveryForm(_))
    }, {
      default: n.withCtx(() => [n.createElementVNode("div", null, [o.showTitle ? (n.openBlock(), n.createBlock(l, {
        key: 0,
        style: n.normalizeStyle(o.isCheckout ? "padding-left: 16px; margin-top: 20px; font-weight: 500;" : null),
        description: r.t("RECOVERY_PASSWORD.TITLE")
      }, null, 8, ["style", "description"])) : n.createCommentVNode("", true), n.createElementVNode("div", Wo, [n.createElementVNode("span", Ho, n.toDisplayString(r.t("RECOVERY_PASSWORD.SUBTITLE")), 1)]), n.createVNode(a, {
        email: i.recoveryPassword.email,
        "onUpdate:email": t[0] || (t[0] = _ => i.recoveryPassword.email = _),
        style: n.normalizeStyle(o.isCheckout ? "margin-bottom: 1px" : null)
      }, null, 8, ["email", "style"]), o.showAuxiliaryLinks && o.isCheckout ? (n.openBlock(), n.createBlock(u, {
        key: 1,
        class: "auxiliar-checkout"
      }, {
        default: n.withCtx(() => [n.createElementVNode("a", {
          class: "checkout",
          onClick: t[1] || (t[1] = n.withModifiers(_ => o.isFreeCreator ? e.$emit("redirect", r.routes.signUp) : s.callFormPaid(), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.REGISTER_CHECKOUT")), 1), n.createElementVNode("a", {
          class: "checkout",
          onClick: t[2] || (t[2] = n.withModifiers(_ => e.$emit("redirect", r.routes.signIn), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.SIGN_IN")), 1)]),
        _: 1
      })) : n.createCommentVNode("", true), i.isDisabled ? n.createCommentVNode("", true) : (n.openBlock(), n.createBlock(m, {
        key: 2,
        text: r.t("RECOVERY_PASSWORD.BUTTON"),
        isLoading: i.isLoading,
        isDisabled: i.isDisabled,
        onClick: s.submitRecoveryForm
      }, null, 8, ["text", "isLoading", "isDisabled", "onClick"])), i.isDisabled ? (n.openBlock(), n.createElementBlock("span", Ko, n.toDisplayString(r.t("RECOVERY_PASSWORD.TRY_AGAIN")) + " " + n.toDisplayString(Math.ceil(i.countdownTimer)) + "s ", 1)) : n.createCommentVNode("", true), n.createVNode(c, {
        class: "mt-2 mb-0",
        type: i.elAlert.type,
        message: i.elAlert.message,
        "onUpdate:message": t[3] || (t[3] = _ => i.elAlert.message = _)
      }, null, 8, ["type", "message"])]), o.isCheckout ? n.createCommentVNode("", true) : (n.openBlock(), n.createElementBlock("div", qo, [n.createElementVNode("span", Yo, n.toDisplayString(r.t("RECOVERY_PASSWORD.SUPPORT_TEXT")), 1), n.createVNode(p), n.createElementVNode("div", Zo, [n.createElementVNode("a", {
        onClick: t[4] || (t[4] = n.withModifiers(_ => e.$emit("redirect", r.routes.signIn), ["prevent"]))
      }, [n.createElementVNode("div", Qo, n.toDisplayString(r.t("SIGN_IN.TITLE")), 1)])])])), o.showAuxiliaryLinks && !o.isCheckout ? (n.openBlock(), n.createBlock(u, {
        key: 1
      }, {
        default: n.withCtx(() => [n.createElementVNode("a", {
          onClick: t[5] || (t[5] = n.withModifiers(_ => e.$emit("redirect", r.routes.signUp), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.SIGN_UP")), 1), n.createElementVNode("a", {
          onClick: t[6] || (t[6] = n.withModifiers(_ => e.$emit("redirect", r.routes.signIn), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.SIGN_IN")), 1)]),
        _: 1
      })) : n.createCommentVNode("", true)]),
      _: 1
    }, 8, ["model"]);
  }
  const ut = C(Fo, [["render", Xo], ["styles", [`.checkout{font-size:14px;font-weight:400;font-family:Inter,sans-serif}.auxiliar-checkout{justify-content:space-between;margin-top:1px!important;margin-bottom:1.5rem!important}
`]]]);
  const Jo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ut
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const er = {
    inject: ["$http", "appSettings", "locale"],
    emits: ["redirect"],
    components: {
      ElForm: S.ElForm,
      TitleComponent: F,
      PasswordInput: de,
      RecoveryButton: G,
      AlertText: B,
      AuxiliaryLinks: q,
      PasswordTest: Ae
    },
    props: {
      showTitle: Boolean,
      showAuxiliaryLinks: Boolean,
      recoveryCode: String,
      recoveryEmail: String,
      isCheckout: Boolean
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        routes: T,
        faCircleCheck: Ne
      };
    },
    data(e) {
      return {
        recovery: {
          email: e.recoveryEmail,
          password: "",
          passwordConfirmation: "",
          token: e.recoveryCode
        },
        isLoading: false,
        elAlert: {
          type: null,
          message: null
        },
        disableInput: false,
        disableRecoveryButton: false,
        showRecoveryButton: true
      };
    },
    watch: {
      "recovery.password": {
        immediate: true,
        handler() {
          this.clearAlert();
        }
      },
      "recovery.passwordConfirmation": {
        immediate: true,
        handler() {
          this.clearAlert();
        }
      }
    },
    methods: {
      async submitRecoveryConfirmationForm() {
        var t;
        var o;
        var r;
        var i;
        var s;
        var l;
        var a;
        var u;
        var m;
        var c;
        var p;
        var f;
        if (await ((o = (t = this.$refs.recoveryConfirmation).validate) == null ? undefined : o.call(t))) {
          try {
            this.isLoading = true;
            this.disableInput = true;
            const {
              locale: _
            } = this;
            const g = z((r = this.appSettings) == null ? undefined : r.ENDPOINT_API_AUTH, `/recovery-password-confirmation/${_}`);
            await this.$http.post(g, {
              Email: this.recovery.email.trim(),
              Password: this.recovery.password.trim(),
              Token: encodeURIComponent(this.recovery.token)
            });
            this.sendMessageToAlert({
              type: "success",
              message: this.t("RECOVERY_PASSWORD_CONFIRMATION.SUCCESS")
            });
            this.showRecoveryButton = false;
            setTimeout(() => {
              this.$emit("redirect", "sign-in");
            }, 6e3);
          } catch (_) {
            this.isLoading = false;
            this.disableInput = false;
            const g = (l = (s = (i = _.response) == null ? undefined : i.data) == null ? undefined : s.InvalidToken) != null && l[0] ? (m = (u = (a = _.response) == null ? undefined : a.data) == null ? undefined : u.InvalidToken) == null ? undefined : m[0].toUpperCase() : (f = (p = (c = _.response) == null ? undefined : c.data) == null ? undefined : p.errorKeys) == null ? undefined : f[0].toUpperCase();
            this.sendMessageToAlert({
              type: "error",
              message: tn[g]() || this.t("BASE.GENERIC_ERROR")
            });
          }
        }
      },
      sendMessageToAlert({
        type: e,
        message: t
      }) {
        this.elAlert.type = null;
        this.elAlert.message = null;
        this.$nextTick(() => {
          this.elAlert.type = e;
          this.elAlert.message = t;
        });
      },
      clearAlert() {
        this.elAlert.message = null;
        this.elAlert.type = null;
      },
      handleEnableSubmitButton(e) {
        this.disableRecoveryButton = e;
      }
    }
  };
  const tr = {
    class: "mb-2"
  };
  const nr = {
    class: "support-text"
  };
  function or(e, t, o, r, i, s) {
    const l = n.resolveComponent("TitleComponent");
    const a = n.resolveComponent("PasswordInput");
    const u = n.resolveComponent("PasswordTest");
    const m = n.resolveComponent("AuxiliaryLinks");
    const c = n.resolveComponent("RecoveryButton");
    const p = n.resolveComponent("el-form");
    const f = n.resolveComponent("AlertText");
    n.openBlock();
    return n.createElementBlock(n.Fragment, null, [n.createElementVNode("div", null, [o.showTitle ? (n.openBlock(), n.createBlock(l, {
      key: 0,
      style: n.normalizeStyle(o.isCheckout ? "padding-left: 16px; margin-top: 20px; font-weight: 500;" : null),
      description: r.t("RECOVERY_PASSWORD_CONFIRMATION.TITLE")
    }, null, 8, ["style", "description"])) : n.createCommentVNode("", true), n.createElementVNode("div", tr, [n.createElementVNode("span", nr, n.toDisplayString(r.t("RECOVERY_PASSWORD_CONFIRMATION.SUBTITLE")), 1)]), n.createVNode(p, {
      ref: "recoveryConfirmation",
      model: i.recovery,
      onKeyup: n.withKeys(s.submitRecoveryConfirmationForm, ["enter"])
    }, {
      default: n.withCtx(() => [n.createVNode(a, {
        password: i.recovery.password,
        "onUpdate:password": t[0] || (t[0] = _ => i.recovery.password = _),
        changeTextNew: true,
        disabled: i.disableInput
      }, null, 8, ["password", "disabled"]), n.createVNode(a, {
        password: i.recovery.passwordConfirmation,
        "onUpdate:password": t[1] || (t[1] = _ => i.recovery.passwordConfirmation = _),
        changeTextNew: true,
        disabled: i.disableInput
      }, null, 8, ["password", "disabled"]), n.createVNode(u, {
        password: i.recovery.password,
        passwordConfirmation: i.recovery.passwordConfirmation,
        onEnableBtn: s.handleEnableSubmitButton
      }, null, 8, ["password", "passwordConfirmation", "onEnableBtn"]), o.showAuxiliaryLinks && o.isCheckout ? (n.openBlock(), n.createBlock(m, {
        key: 0,
        class: "auxiliar-checkout-sign"
      }, {
        default: n.withCtx(() => [n.createElementVNode("a", {
          class: "recovery-confirmation",
          onClick: t[2] || (t[2] = n.withModifiers(_ => e.$emit("redirect", r.routes.signIn), ["prevent"]))
        }, n.toDisplayString(r.t("LINK.SIGN_IN")), 1)]),
        _: 1
      })) : n.createCommentVNode("", true), i.showRecoveryButton ? (n.openBlock(), n.createBlock(c, {
        key: 1,
        text: r.t("RECOVERY_PASSWORD_CONFIRMATION.BUTTON"),
        isLoading: i.isLoading,
        isDisabled: i.disableRecoveryButton || i.disableInput,
        onClick: s.submitRecoveryConfirmationForm
      }, null, 8, ["text", "isLoading", "isDisabled", "onClick"])) : n.createCommentVNode("", true)]),
      _: 1
    }, 8, ["model", "onKeyup"])]), n.createVNode(f, {
      class: "mt-2",
      type: i.elAlert.type,
      message: i.elAlert.message,
      "onUpdate:message": t[3] || (t[3] = _ => i.elAlert.message = _)
    }, null, 8, ["type", "message"])], 64);
  }
  const mt = C(er, [["render", or], ["styles", [`.recovery-confirmation{font-size:14px;font-weight:400;font-family:Inter,sans-serif;padding-left:16px}.auxiliar-checkout-sign{justify-content:end!important;margin-top:1px!important;margin-bottom:1.5rem!important}
`]]]);
  const rr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const sr = {
    inject: ["$http", "appSettings", "locale"],
    emits: ["redirect"],
    components: {
      TitleComponent: F,
      Loader: ue,
      ResendEmailButton: G,
      PrivacySupport: Oe,
      AlertText: B,
      AuxiliaryLinks: q
    },
    props: {
      showTitle: Boolean,
      showAuxiliaryLinks: Boolean,
      profileName: String,
      isCheckout: Boolean,
      email: String,
      code: String
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        routes: T
      };
    },
    data(e) {
      return {
        confirmation: {
          email: e.email,
          code: e.code
        },
        isLoading: true,
        isError: false,
        button: {
          isLoading: false
        },
        elAlert: {
          type: null,
          message: null
        },
        dataLayerPushExecuted: false
      };
    },
    async mounted() {
      await this.confirmAccountCreation();
    },
    methods: {
      async confirmAccountCreation() {
        var e;
        try {
          const {
            email: t,
            code: o
          } = this.confirmation;
          const {
            locale: r
          } = this;
          const i = z((e = this.appSettings) == null ? undefined : e.ENDPOINT_API_AUTH, `confirm-email-confirmation/${t}/${o}/${r}`);
          const s = await this.$http.post(i);
          if ((s == null ? undefined : s.status) === 204) {
            this.sendMessageToAlert({
              type: "success",
              message: this.t("EMAIL_CONFIRMATION.SUCCESS_MESSAGE")
            });
            setTimeout(() => {
              if (!this.dataLayerPushExecuted) {
                Ie();
                this.dataLayerPushExecuted = true;
              }
            });
            setTimeout(() => {
              this.$emit("redirect", "sign-in");
            }, 1e4);
          }
        } catch {
          this.isError = true;
        } finally {
          this.isLoading = false;
        }
      },
      async handleResendEmail() {
        var e;
        if (Ze(this.confirmation.email)) {
          try {
            this.button.isLoading = true;
            const {
              email: t,
              code: o
            } = this.confirmation;
            const {
              profileName: r,
              locale: i
            } = this;
            const s = z((e = this.appSettings) == null ? undefined : e.ENDPOINT_API_AUTH, `resend-confirm-email/${t}/${o}/${r}/${i}`);
            await this.$http.post(s);
            this.sendMessageToAlert({
              type: "success",
              message: this.t("EMAIL_CONFIRMATION.SUCCESS_RESEND")
            });
          } catch {
            this.sendMessageToAlert({
              type: "error",
              message: this.t("EMAIL_CONFIRMATION.ERROR_RESEND")
            });
          } finally {
            this.button.isLoading = false;
          }
          return;
        }
        this.sendMessageToAlert({
          type: "error",
          message: this.t("EMAIL_CONFIRMATION.WAIT_TO_RESEND")
        });
      },
      sendMessageToAlert({
        type: e,
        message: t
      }) {
        this.elAlert.type = null;
        this.elAlert.message = null;
        this.$nextTick(() => {
          this.elAlert.type = e;
          this.elAlert.message = t;
        });
      }
    }
  };
  const ar = {
    key: 1,
    class: "validating-container"
  };
  const lr = {
    key: 3
  };
  function cr(e, t, o, r, i, s) {
    const l = n.resolveComponent("TitleComponent");
    const a = n.resolveComponent("Loader");
    const u = n.resolveComponent("AuxiliaryLinks");
    const m = n.resolveComponent("ResendEmailButton");
    const c = n.resolveComponent("PrivacySupport");
    const p = n.resolveComponent("AlertText");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createElementVNode("div", null, [o.showTitle ? (n.openBlock(), n.createBlock(l, {
      key: 0,
      style: n.normalizeStyle(o.isCheckout ? "padding-left: 16px; margin-top: 20px; font-weight: 500;" : null),
      description: r.t("EMAIL_CONFIRMATION.TITLE")
    }, null, 8, ["style", "description"])) : n.createCommentVNode("", true), i.isLoading ? (n.openBlock(), n.createElementBlock("div", ar, [n.createVNode(a, {
      isLoading: i.isLoading
    }, null, 8, ["isLoading"]), n.createElementVNode("span", null, n.toDisplayString(r.t("EMAIL_CONFIRMATION.VALIDATING")), 1)])) : n.createCommentVNode("", true), o.showAuxiliaryLinks && o.isCheckout ? (n.openBlock(), n.createBlock(u, {
      key: 2,
      class: "auxiliar-checkout"
    }, {
      default: n.withCtx(() => [n.createElementVNode("a", {
        class: "checkout",
        onClick: t[0] || (t[0] = n.withModifiers(f => e.$emit("redirect", r.routes.recoveryPassword), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.RECOVERY_PASSWORD_CHECKOUT")), 1), n.createElementVNode("a", {
        class: "checkout",
        onClick: t[1] || (t[1] = n.withModifiers(f => e.$emit("redirect", r.routes.signIn), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.SIGN_IN")), 1)]),
      _: 1
    })) : i.isError ? (n.openBlock(), n.createElementBlock("div", lr, [n.createElementVNode("span", null, n.toDisplayString(r.t("EMAIL_CONFIRMATION.ERROR_MESSAGE")), 1), n.createVNode(m, {
      class: "mt-4",
      text: r.t("EMAIL_CONFIRMATION.BUTTON"),
      isLoading: i.button.isLoading,
      onClick: s.handleResendEmail
    }, null, 8, ["text", "isLoading", "onClick"]), n.createVNode(c)])) : n.createCommentVNode("", true)]), n.createVNode(p, {
      class: "mt-3",
      type: i.elAlert.type,
      message: i.elAlert.message,
      "onUpdate:message": t[2] || (t[2] = f => i.elAlert.message = f)
    }, null, 8, ["type", "message"]), o.showAuxiliaryLinks && !o.isCheckout ? (n.openBlock(), n.createBlock(u, {
      key: 0
    }, {
      default: n.withCtx(() => [n.createElementVNode("a", {
        onClick: t[3] || (t[3] = n.withModifiers(f => e.$emit("redirect", r.routes.signUp), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.SIGN_UP")), 1), n.createElementVNode("a", {
        onClick: t[4] || (t[4] = n.withModifiers(f => e.$emit("redirect", r.routes.recoveryPassword), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.RECOVERY_PASSWORD")), 1), n.createElementVNode("a", {
        onClick: t[5] || (t[5] = n.withModifiers(f => e.$emit("redirect", r.routes.signIn), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.SIGN_IN")), 1)]),
      _: 1
    })) : n.createCommentVNode("", true)]);
  }
  const dt = C(sr, [["render", cr], ["styles", [`.checkout{font-size:14px;font-weight:400;font-family:"Inter" sans-serif}.auxiliar-checkout{justify-content:space-between;margin-top:1px!important;margin-bottom:1.5rem!important}
`]]]);
  const ur = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const mr = {
    inject: ["$http", "appSettings", "locale"],
    emits: ["redirect"],
    props: {
      showTitle: Boolean,
      showAuxiliaryLinks: Boolean,
      token: String
    },
    components: {
      TitleComponent: F,
      AlertText: B,
      Loader: ue,
      AuxiliaryLinks: q
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        routes: T
      };
    },
    data(e) {
      return {
        exclusionToken: e.token,
        isLoading: true,
        isError: false,
        elAlert: {
          type: null,
          message: null
        }
      };
    },
    watch: {
      isError(e) {
        if (e) {
          setTimeout(() => {
            this.$emit("redirect", "sign-in");
          }, 1e4);
        }
      }
    },
    async mounted() {
      await this.confirmAccountExclusion();
    },
    methods: {
      async confirmAccountExclusion() {
        var e;
        try {
          this.isLoading = true;
          const {
            exclusionToken: t
          } = this;
          const o = z((e = this.appSettings) == null ? undefined : e.ENDPOINT_API_AUTH, `account-exclusion-confirmation/${t}`);
          const r = await this.$http.delete(o);
          if ((r == null ? undefined : r.status) === 204) {
            await fn({
              appSettings: this.appSettings,
              $http: this.$http
            });
            this.sendMessageToAlert({
              type: "success",
              message: this.t("ACCOUNT_EXCLUSION.SUCCESS")
            });
            setTimeout(() => {
              this.$emit("redirect", "sign-in");
            }, 1e4);
          } else {
            this.isError = true;
          }
        } catch {
          this.isError = true;
        } finally {
          this.isLoading = false;
        }
      },
      sendMessageToAlert({
        type: e,
        message: t
      }) {
        this.elAlert.type = null;
        this.elAlert.message = null;
        this.$nextTick(() => {
          this.elAlert.type = e;
          this.elAlert.message = t;
        });
      }
    }
  };
  const dr = {
    key: 1,
    class: "validating-container"
  };
  const pr = {
    key: 2
  };
  function fr(e, t, o, r, i, s) {
    const l = n.resolveComponent("TitleComponent");
    const a = n.resolveComponent("Loader");
    const u = n.resolveComponent("AlertText");
    const m = n.resolveComponent("AuxiliaryLinks");
    n.openBlock();
    return n.createElementBlock("div", null, [n.createElementVNode("div", null, [o.showTitle ? (n.openBlock(), n.createBlock(l, {
      key: 0,
      description: r.t("ACCOUNT_EXCLUSION.TITLE")
    }, null, 8, ["description"])) : n.createCommentVNode("", true), i.isLoading ? (n.openBlock(), n.createElementBlock("div", dr, [n.createVNode(a, {
      isLoading: i.isLoading
    }, null, 8, ["isLoading"]), n.createElementVNode("span", null, n.toDisplayString(r.t("ACCOUNT_EXCLUSION.VALIDATING")), 1)])) : i.isError ? (n.openBlock(), n.createElementBlock("span", pr, n.toDisplayString(r.t("ACCOUNT_EXCLUSION.ERROR")), 1)) : n.createCommentVNode("", true)]), n.createVNode(u, {
      class: "mt-3",
      type: i.elAlert.type,
      message: i.elAlert.message,
      "onUpdate:message": t[0] || (t[0] = c => i.elAlert.message = c)
    }, null, 8, ["type", "message"]), o.showAuxiliaryLinks ? (n.openBlock(), n.createBlock(m, {
      key: 0
    }, {
      default: n.withCtx(() => [n.createElementVNode("a", {
        onClick: t[1] || (t[1] = n.withModifiers(c => e.$emit("redirect", r.routes.signUp), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.SIGN_UP")), 1), n.createElementVNode("a", {
        onClick: t[2] || (t[2] = n.withModifiers(c => e.$emit("redirect", r.routes.recoveryPassword), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.RECOVERY_PASSWORD")), 1), n.createElementVNode("a", {
        onClick: t[3] || (t[3] = n.withModifiers(c => e.$emit("redirect", r.routes.signIn), ["prevent"]))
      }, n.toDisplayString(r.t("LINK.SIGN_IN")), 1)]),
      _: 1
    })) : n.createCommentVNode("", true)]);
  }
  const pt = C(mr, [["render", fr]]);
  const hr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: pt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const yr = {
    inject: ["appSettings", "$http"],
    props: {
      profileName: String,
      view: String,
      isCheckout: Boolean
    },
    components: {
      ElDialog: S.ElDialog,
      ElButton: S.ElButton,
      SocialButton: G,
      AlertText: B
    },
    setup() {
      const {
        t: e
      } = k();
      return {
        t: e,
        SIGN_IN_METHODS: W
      };
    },
    data() {
      return {
        twitter: {
          isLoading: false
        },
        google: {
          isLoading: false
        },
        elAlert: {
          message: null
        },
        visible: false
      };
    },
    computed: {
      formattedTwitterErrorMessage() {
        return this.view === "sign-up" ? this.t("TWITTER_ERROR_MESSAGE_SIGN_UP") : this.t("TWITTER_ERROR_MESSAGE_SIGN_IN", {
          linkFaq: `<a href='https://privacy.com.br/faq' target='_blank'>${this.t("FAQ_LINK_TEXT")}</a>`,
          email: "<a href='mailto:contato@privacy.com.br'>contato@privacy.com.br</a>"
        });
      }
    },
    methods: {
      async handleSocialSignIn({
        method: e
      }) {
        const {
          getRequestEndpoint: t,
          isValidMethod: o
        } = this;
        try {
          if (!o(e)) {
            return;
          }
          if (e === "twitter" && !(await this.fetchX("https://x.com", {
            method: "GET"
          }, 1e3))) {
            this.visible = true;
            return;
          }
          this[e].isLoading = true;
          const r = t(e);
          const i = await this.$http.get(r);
          const s = i == null ? undefined : i.data;
          if (!s) {
            this.sendMessageToAlert();
            return;
          }
          window.location.href = s;
        } catch {
          if (e === "twitter") {
            this.visible = true;
            return;
          }
          this.sendMessageToAlert();
        } finally {
          this[e].isLoading = false;
        }
      },
      async fetchX(e, t = {}, o = 5e3) {
        try {
          await Promise.race([fetch(e, t), new Promise((r, i) => setTimeout(() => i(new Error("Request timed out")), o))]);
        } catch (r) {
          return r instanceof TypeError;
        }
      },
      getRequestEndpoint(e) {
        const {
          isValidMethod: t,
          profileName: o
        } = this;
        if (!t(e)) {
          return;
        }
        const r = this.appSettings.ENDPOINT_API_AUTH;
        let i;
        if (e === "twitter") {
          i = z(r, "/twitter-get-url");
        } else {
          i = z(r, "/google-get-url");
        }
        if (o) {
          i += `/${hn(o)}`;
        }
        return i;
      },
      isValidMethod(e) {
        return Object.values(W).includes(e);
      },
      sendMessageToAlert(e = this.t("BASE.GENERIC_ERROR")) {
        this.elAlert.message = null;
        this.$nextTick(() => {
          this.elAlert.message = e;
        });
      },
      redirectUserToResetPassword() {
        window.location.href = "/redefinesenha";
      }
    }
  };
  const Ir = {
    class: "row"
  };
  const Sr = {
    class: "col-12 col-sm-6 pe-sm-1"
  };
  const Tr = n.createElementVNode("img", {
    class: "social-media-icon",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTE2IiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUxNiA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF82XzEwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTA3LjgxMyAyNTUuNjgzQzUwNy44MTMgMjM3Ljk1NiA1MDYuMTg5IDIyMC45MTEgNTAzLjE3NSAyMDQuNTQ3SDI2Mi45MTRWMzAxLjI1Mkg0MDAuMjA2QzM5NC4yOTIgMzMyLjUwMiAzNzYuMzE5IDM1OC45NzggMzQ5LjMwMiAzNzYuNzA2VjQzOS40MzNINDMxLjc0NUM0NzkuOTgzIDM5NS45MTEgNTA3LjgxMyAzMzEuODIgNTA3LjgxMyAyNTUuNjgzWiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2Mi45MTQgNTAwQzMzMS43OTIgNTAwIDM4OS41MzggNDc3LjYxNiA0MzEuNzQ1IDQzOS40MzNMMzQ5LjMwMiAzNzYuNzA2QzMyNi40NTggMzkxLjcwNiAyOTcuMjM4IDQwMC41NjcgMjYyLjkxNCA0MDAuNTY3QzE5Ni40NzIgNDAwLjU2NyAxNDAuMjM0IDM1Ni41OTEgMTIwLjE3NCAyOTcuNUgzNC45NDYzVjM2Mi4yNzJDNzYuOTIyMiA0NDMuOTc3IDE2My4xOTQgNTAwIDI2Mi45MTQgNTAwWiIgZmlsbD0iIzM0QTg1MyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyMC4xNzQgMjk3LjVDMTE1LjA3MiAyODIuNSAxMTIuMTcyIDI2Ni40NzggMTEyLjE3MiAyNTAuMDAyQzExMi4xNzIgMjMzLjUyMyAxMTUuMDcxIDIxNy41MDIgMTIwLjE3MyAyMDIuNTAyVjEzNy43MjlIMzQuOTQ2MUMxNy42Njg4IDE3MS40NzggNy44MTI1IDIwOS42NjEgNy44MTI1IDI1MC4wMDJDNy44MTI1IDI5MC4zNDIgMTcuNjY4OSAzMjguNTIyIDM0Ljk0NjMgMzYyLjI3MkwxMjAuMTc0IDI5Ny41WiIgZmlsbD0iI0ZCQkMwNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2Mi45MTQgOTkuNDMyMkMzMDAuMzY5IDk5LjQzMjIgMzMzLjk5NSAxMTIuMDQ2IDM2MC40MzMgMTM2LjgxOEw0MzMuNjAyIDY1LjExNDFDMzg5LjQyMiAyNC43NzMxIDMzMS42NzcgMC4wMDA0ODgyODEgMjYyLjkxNCAwLjAwMDQ4ODI4MUMxNjMuMTk0IDAuMDAwNDg4MjgxIDc2LjkyMiA1Ni4wMjQ0IDM0Ljk0NiAxMzcuNzI5TDEyMC4xNzMgMjAyLjUwMkMxNDAuMjM0IDE0My40MTEgMTk2LjQ3MiA5OS40MzIyIDI2Mi45MTQgOTkuNDMyMloiIGZpbGw9IiNFQTQzMzUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82XzEwIj4KPHJlY3Qgd2lkdGg9IjUxNS42MjUiIGhlaWdodD0iNTAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    alt: "Google"
  }, null, -1);
  const Rr = {
    class: "col-12 col-sm-6 ps-sm-1"
  };
  const Cr = n.createElementVNode("img", {
    class: "social-media-icon",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTM1IiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUzNSA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjMwMjQ2IDBMMjA3LjU1NSAyNzUuNzhMMCA1MDBINDYuNzEyNEwyMjguNDI3IDMwMy42OTJMMzc1LjI0NyA1MDBINTM0LjIxMUwzMTYuMzUzIDIwOC43MDhMNTA5LjU0NCAwSDQ2Mi44MzJMMjk1LjQ4MiAxODAuNzk2TDE2MC4yNjYgMEgxLjMwMjQ2Wk02OS45OTY1IDM0LjQwODRIMTQzLjAyNUw0NjUuNTA2IDQ2NS41ODZIMzkyLjQ3OEw2OS45OTY1IDM0LjQwODRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",
    alt: "Twitter"
  }, null, -1);
  const Nr = ["innerHTML"];
  const Ar = {
    class: "dialog-footer"
  };
  function Or(e, t, o, r, i, s) {
    const l = n.resolveComponent("SocialButton");
    const a = n.resolveComponent("AlertText");
    const u = n.resolveComponent("el-button");
    const m = n.resolveComponent("ElDialog");
    n.openBlock();
    return n.createElementBlock("div", {
      class: n.normalizeClass(o.isCheckout ? "social-sign-in-container pt-4" : "social-sign-in-container")
    }, [n.createElementVNode("div", Ir, [n.createElementVNode("div", Sr, [n.createVNode(l, {
      text: r.t("OAUTH.GOOGLE_BUTTON"),
      type: "outline",
      isLoading: i.google.isLoading,
      onClick: t[0] || (t[0] = c => s.handleSocialSignIn({
        method: r.SIGN_IN_METHODS.GOOGLE
      }))
    }, {
      prefix: n.withCtx(() => [Tr]),
      _: 1
    }, 8, ["text", "isLoading"])]), n.createElementVNode("div", Rr, [n.createVNode(l, {
      type: "outline",
      text: r.t("OAUTH.TWITTER_BUTTON"),
      isLoading: i.twitter.isLoading,
      onClick: t[1] || (t[1] = c => s.handleSocialSignIn({
        method: r.SIGN_IN_METHODS.TWITTER
      }))
    }, {
      prefix: n.withCtx(() => [Cr]),
      _: 1
    }, 8, ["text", "isLoading"])])]), n.createVNode(a, {
      class: "mt-3",
      type: "error",
      message: i.elAlert.message,
      "onUpdate:message": t[2] || (t[2] = c => i.elAlert.message = c)
    }, null, 8, ["message"]), n.createVNode(m, {
      "align-center": "",
      "append-to-body": false,
      width: "100%",
      style: {
        "max-width": "500px"
      },
      "model-value": i.visible,
      "show-close": false,
      center: "",
      onClose: t[4] || (t[4] = c => i.visible = false)
    }, {
      footer: n.withCtx(() => [n.createElementVNode("div", Ar, [o.view === "sign-in" ? (n.openBlock(), n.createBlock(u, {
        key: 0,
        class: "btn btn-privacy btn-primary",
        onClick: s.redirectUserToResetPassword
      }, {
        default: n.withCtx(() => [n.createTextVNode(n.toDisplayString(r.t("RESET_PASSWORD")), 1)]),
        _: 1
      }, 8, ["onClick"])) : n.createCommentVNode("", true), n.createVNode(u, {
        class: "btn btn-privacy btn-secondary",
        onClick: t[3] || (t[3] = c => i.visible = false)
      }, {
        default: n.withCtx(() => [n.createTextVNode(n.toDisplayString(r.t("CLOSE_DIALOG")), 1)]),
        _: 1
      })])]),
      default: n.withCtx(() => [n.createElementVNode("span", {
        class: "d-block text-center",
        innerHTML: s.formattedTwitterErrorMessage
      }, null, 8, Nr)]),
      _: 1
    }, 8, ["model-value"])], 2);
  }
  const ft = C(yr, [["render", Or], ["styles", [`.social-sign-in-container{display:flex;flex-direction:column;gap:16px;padding-top:16px;padding-bottom:1rem}.social-sign-in-container .social-media-icon{margin-top:2px;margin-right:10px;max-width:22px}@media (max-width: 1270px){.social-sign-in-container .social-media-icon{max-width:20px;margin-top:0}}@media screen and (max-width: 575px){.social-sign-in-container .row{gap:16px}}@media screen and (max-width: 500px){.social-sign-in-container .el-dialog.is-align-center{margin:auto 10px}}.social-sign-in-container .el-button span{text-transform:capitalize}
`]]]);
  const wr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ft
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function we() {
    return new URL(window.location.href);
  }
  function ze(e) {
    window.history.replaceState({}, "", e);
  }
  const D = {
    getUrl: we,
    replace: ze,
    qs: {
      get(e) {
        return new URLSearchParams(window.location.search).get(e);
      },
      set(e, t) {
        const o = new URL(window.location.href);
        o.searchParams.set(e, t);
        ze(o);
      },
      delete(e) {
        const t = new URL(window.location.href);
        t.searchParams.delete(e);
        ze(t);
      }
    }
  };
  const X = () => {
    const e = D.qs.get("route");
    if (!e) {
      ke(null);
    }
    return e;
  };
  const ke = e => {
    if (e) {
      D.qs.set("route", e);
    } else if (D.qs.get("route")) {
      D.qs.delete("route");
    }
  };
  const zr = () => {
    new URL(window.location.href).searchParams.forEach((o, r) => {
      if (r !== "route" && !r.startsWith("utm_")) {
        D.qs.delete(r);
      }
    });
  };
  function kr() {
    const {
      OAUTH_TOKEN: e,
      OAUTH_VERIFIER: t
    } = b.TWITTER;
    const {
      OAUTH_STATE: o
    } = b;
    const r = new URLSearchParams(window.location.search);
    const i = r.get(e);
    const s = r.get(t);
    const l = Je(r.get(o));
    return i && s ? {
      OAuthToken: i,
      OAuthVerifier: s,
      state: l
    } : null;
  }
  function br() {
    const {
      CODE: e
    } = b.GOOGLE;
    const {
      OAUTH_STATE: t
    } = b;
    const o = new URLSearchParams(window.location.search);
    const r = o.get(e);
    const i = Je(o.get(t));
    return r ? {
      code: r,
      state: i
    } : null;
  }
  function Lr() {
    const e = kr();
    const t = br();
    return e ? {
      title: "Twitter",
      params: {
        ...e,
        method: "twitter"
      }
    } : t ? {
      title: "Google",
      params: {
        ...t,
        method: "google"
      }
    } : null;
  }
  const Ur = {
    emits: ["success-login", "form-paid"],
    components: {
      AuthCallback: $e,
      SignIn: st,
      SignUp: ct,
      RecoveryPassword: ut,
      RecoveryConfirmation: mt,
      EmailConfirmation: dt,
      AccountExclusion: pt,
      SocialLogin: ft
    },
    props: {
      view: String,
      showTitle: Boolean,
      showAuxiliaryLinks: Boolean,
      showLoginSocial: Boolean,
      allowRouteManipulation: Boolean,
      profileName: String,
      returnUrl: String,
      isCheckout: Boolean,
      isFreeCreator: Boolean,
      orderPayment: String
    },
    watch: {
      view: {
        immediate: true,
        handler(e) {
          if (Se.includes(e)) {
            this.handleRoute({
              route: e
            });
          }
        }
      }
    },
    setup() {
      const {
        t: e
      } = k();
      const t = lt();
      return {
        t: e,
        routes: T,
        allowedRoutes: Se,
        getRoute: X,
        setRoute: ke,
        queryStringStore: t
      };
    },
    data(e) {
      return {
        viewRoute: e.view,
        callback: {
          title: null,
          params: null
        },
        isCallback: false,
        isRecoveryConfirmation: false,
        recoveryCode: null,
        recoveryEmail: null,
        isEmailConfirmation: false,
        confirmationEmail: null,
        confirmationCode: null,
        isAccountExclusion: false,
        accountExclusionToken: null
      };
    },
    mounted() {
      if (this.checkCallback()) {
        this.isCallback = true;
      } else if (this.checkRecoveryConfirmation()) {
        this.isRecoveryConfirmation = true;
      } else if (this.checkEmailConfirmation()) {
        this.isEmailConfirmation = true;
      } else if (this.checkAccountExclusion()) {
        this.isAccountExclusion = true;
      } else {
        this.handleAllowedRoutes();
      }
      if (this.viewRoute === this.routes.signUpPaid) {
        this.$emit("form-paid");
      }
    },
    methods: {
      checkCallback() {
        const e = Lr();
        return this.checkCallbackRoute(X()) && e ? (this.callback = e, true) : false;
      },
      checkCallbackRoute(e) {
        return e === "twitter" || e === "google";
      },
      checkRecoveryConfirmation() {
        if (X() != "recovery-password-confirmation") {
          return false;
        }
        const t = D.qs.get("token");
        if (!t) {
          return false;
        }
        const o = this.isCheckout ? D.qs.get("emailUser") : D.qs.get("email");
        this.recoveryCode = t;
        this.recoveryEmail = o;
        return true;
      },
      checkEmailConfirmation() {
        if (X() != "email-confirmation") {
          return false;
        }
        const t = D.qs.get("email");
        const o = D.qs.get("token");
        return !t || !o ? false : (this.confirmationEmail = t, this.confirmationCode = o, true);
      },
      checkAccountExclusion() {
        if (X() != "account-exclusion-confirmation") {
          return false;
        }
        const t = D.qs.get(b.ACCOUNT_EXCLUSION.TOKEN);
        return t ? (this.accountExclusionToken = t, true) : false;
      },
      handleAllowedRoutes() {
        const e = X() || this.view;
        if (Se.includes(e)) {
          this.handleRoute({
            route: e
          });
          return;
        }
        this.handleRoute({
          route: "sign-in"
        });
      },
      handleRoute({
        route: e
      }) {
        this.viewRoute = e;
        this.storeQueryString();
        zr();
        if (this.allowRouteManipulation) {
          ke(e);
        }
        this.isCallback = false;
      },
      storeQueryString() {
        const t = new URLSearchParams(window.location.search).get("referral");
        if (t) {
          this.queryStringStore.setReferral(t.trim().toUpperCase());
        }
      }
    }
  };
  function Dr(e, t, o, r, i, s) {
    const l = n.resolveComponent("AuthCallback");
    const a = n.resolveComponent("SignIn");
    const u = n.resolveComponent("SignUp");
    const m = n.resolveComponent("RecoveryPassword");
    const c = n.resolveComponent("RecoveryConfirmation");
    const p = n.resolveComponent("EmailConfirmation");
    const f = n.resolveComponent("AccountExclusion");
    const _ = n.resolveComponent("SocialLogin");
    n.openBlock();
    return n.createElementBlock("div", null, [i.isCallback ? (n.openBlock(), n.createBlock(l, {
      key: 0,
      title: i.callback.title,
      callback: i.callback.params,
      onRedirect: t[0] || (t[0] = g => s.handleRoute({
        route: g
      }))
    }, null, 8, ["title", "callback"])) : (n.openBlock(), n.createElementBlock(n.Fragment, {
      key: 1
    }, [i.viewRoute === r.routes.signIn ? (n.openBlock(), n.createBlock(a, {
      key: 0,
      showTitle: o.showTitle,
      showAuxiliaryLinks: o.showAuxiliaryLinks,
      profileName: o.profileName,
      isCheckout: o.isCheckout,
      "order-payment": o.orderPayment,
      isFreeCreator: o.isFreeCreator,
      returnUrl: o.returnUrl,
      onRedirect: t[1] || (t[1] = g => s.handleRoute({
        route: g
      })),
      onSuccessLogin: t[2] || (t[2] = g => e.$emit("success-login", g)),
      onFormPaid: t[3] || (t[3] = g => e.$emit("form-paid"))
    }, null, 8, ["showTitle", "showAuxiliaryLinks", "profileName", "isCheckout", "order-payment", "isFreeCreator", "returnUrl"])) : i.viewRoute === r.routes.signUp ? (n.openBlock(), n.createBlock(u, {
      key: 1,
      isCheckout: o.isCheckout,
      profileName: o.profileName,
      showTitle: o.showTitle,
      showAuxiliaryLinks: o.showAuxiliaryLinks,
      onRedirect: t[4] || (t[4] = g => s.handleRoute({
        route: g
      }))
    }, null, 8, ["isCheckout", "profileName", "showTitle", "showAuxiliaryLinks"])) : i.viewRoute === r.routes.recoveryPassword ? (n.openBlock(), n.createBlock(m, {
      key: 2,
      showTitle: o.showTitle,
      isCheckout: o.isCheckout,
      isFreeCreator: o.isFreeCreator,
      showAuxiliaryLinks: o.showAuxiliaryLinks,
      profileName: o.profileName,
      onRedirect: t[5] || (t[5] = g => s.handleRoute({
        route: g
      })),
      onFormPaid: t[6] || (t[6] = g => e.$emit("form-paid"))
    }, null, 8, ["showTitle", "isCheckout", "isFreeCreator", "showAuxiliaryLinks", "profileName"])) : i.isRecoveryConfirmation ? (n.openBlock(), n.createBlock(c, {
      key: 3,
      showTitle: o.showTitle,
      recoveryCode: i.recoveryCode,
      isCheckout: o.isCheckout,
      showAuxiliaryLinks: o.showAuxiliaryLinks,
      recoveryEmail: i.recoveryEmail,
      onRedirect: t[7] || (t[7] = g => s.handleRoute({
        route: g
      }))
    }, null, 8, ["showTitle", "recoveryCode", "isCheckout", "showAuxiliaryLinks", "recoveryEmail"])) : i.isEmailConfirmation ? (n.openBlock(), n.createBlock(p, {
      key: 4,
      showTitle: o.showTitle,
      showAuxiliaryLinks: o.showAuxiliaryLinks,
      profileName: o.profileName,
      email: i.confirmationEmail,
      code: i.confirmationCode,
      isCheckout: o.isCheckout,
      onRedirect: t[8] || (t[8] = g => s.handleRoute({
        route: g
      }))
    }, null, 8, ["showTitle", "showAuxiliaryLinks", "profileName", "email", "code", "isCheckout"])) : i.isAccountExclusion ? (n.openBlock(), n.createBlock(f, {
      key: 5,
      showTitle: o.showTitle,
      showAuxiliaryLinks: o.showAuxiliaryLinks,
      token: i.accountExclusionToken,
      onRedirect: t[9] || (t[9] = g => s.handleRoute({
        route: g
      }))
    }, null, 8, ["showTitle", "showAuxiliaryLinks", "token"])) : n.createCommentVNode("", true)], 64)), o.showLoginSocial && i.viewRoute !== r.routes.recoveryPassword && i.viewRoute !== r.routes.isRecoveryConfirmation && i.viewRoute !== r.routes.signUpPaid && i.viewRoute !== r.routes.signUp ? (n.openBlock(), n.createBlock(_, {
      key: 2,
      profileName: o.profileName,
      view: i.viewRoute,
      isCheckout: o.isCheckout
    }, null, 8, ["profileName", "view", "isCheckout"])) : n.createCommentVNode("", true)]);
  }
  const ht = C(Ur, [["render", Dr], ["styles", [`body{color:#212529!important;line-height:28px!important}h1.title{color:#212529;font-size:28px!important;font-weight:700!important}a{text-decoration:none!important}span.title{color:#212529;font-weight:700}.el-input .el-input__wrapper{font-size:16px;height:44px;border-radius:18px;border:2px solid #f5f5f7;background:#f5f5f7!important}.el-input .el-input__wrapper input::placeholder{color:#6c757d!important}.el-input .el-input__wrapper:focus-within{border:2px solid var(--color-privacy-2)}.el-input .el-input__wrapper:focus-within input::placeholder{color:var(--color-privacy-2)!important}.el-input .el-input__wrapper:focus-within .el-input__icon{color:var(--color-privacy-2)}.el-input .el-input__icon{color:#6c757d}.el-input .el-input__suffix{cursor:pointer}.el-input__wrapper{box-shadow:none!important}.el-form-item__error{position:initial!important}.el-alert .el-alert__description{font-size:14px;margin:0!important}.code-container{gap:.5rem}.code-container .el-input__wrapper.is-focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color)!important}.code-container .el-input__inner{text-align:center}.validating-container{display:flex;align-items:center;gap:8px}
`]]]);
  const Pr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ht
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const _t = wt();
  const gt = {
    install(e) {
      e.use(_t);
    },
    useProvides(e) {
      const t = () => {
        var o;
        var r;
        var i;
        return {
          global: {
            instance: e,
            ready: e.provides.ready,
            appSettings: e.provides.appSettings,
            token: e.provides.token,
            $http: e.provides.$http,
            locale: e.provides.locale,
            log: (i = (r = (o = e.appContext) == null ? undefined : o.config) == null ? undefined : r.globalProperties) == null ? undefined : i.log
          }
        };
      };
      _t.use(t);
    }
  };
  const xr = Fe("app", {
    getters: {
      ready: e => e.global.ready,
      appSettings: e => e.global.appSettings,
      token: e => e.global.token,
      $http: e => e.global.$http,
      locale: e => e.global.locale
    }
  });
  const vr = () => {
    const e = n.ref(window.innerWidth < 900);
    const t = new ResizeObserver(() => {
      e.value = window.innerWidth < 900;
    });
    n.onMounted(() => {
      t.observe(document.body);
      n.provide("isSmallDevice", e);
    });
    n.onBeforeUnmount(() => {
      if (t) {
        t.unobserve(document.body);
        t.disconnect(document.body);
      }
    });
  };
  const Vr = e => {
    n.provide("ready", n.computed(() => e.ready == null ? true : (e.ready == null ? undefined : e.ready.toString().toLocaleLowerCase()) === "true" || e.ready === true));
    n.provide("appSettings", n.computed(() => {
      const t = an(e.appSettings);
      ln(t);
      return t;
    }));
    n.provide("token", n.computed(() => e.token));
    n.provide("$http", n.computed(() => null));
    n.provide("locale", n.computed(() => e.locale));
  };
  const Br = ({
    emit: e
  }) => {
    const t = n.ref(false);
    n.onMounted(() => {
      if (document.readyState === "complete") {
        t.value = true;
        e("ready");
      } else {
        const o = window.addEventListener("load", () => {
          t.value = true;
          window.removeEventListener("load", o);
          e("ready");
        });
      }
    });
    return {
      windowLoaded: t
    };
  };
  const Gr = () => {
    const e = n.getCurrentInstance();
    e.appContext.config.globalProperties.log = (...t) => {};
  };
  const Fr = {
    computed: {
      ...Ut(xr)
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
  const Wr = Object.assign(Fr, {
    __name: "App.ce",
    props: {
      ready: {
        type: [Boolean, String],
        default: true
      },
      appSettings: [Object, String],
      locale: String,
      view: String,
      showTitle: {
        type: [Boolean, String],
        default: true
      },
      showLoginSocial: {
        type: [Boolean, String],
        default: true
      },
      showAuxiliaryLinks: {
        type: [Boolean, String],
        default: true
      },
      allowRouteManipulation: {
        type: [Boolean, String],
        default: true
      },
      isCheckout: {
        type: Boolean,
        default: false
      },
      isFreeCreator: {
        type: Boolean,
        default: false
      },
      profileName: String,
      returnUrl: String,
      orderPayment: String
    },
    emits: {
      "before-mount": null,
      mounted: null,
      ready: null,
      loaded: null,
      "success-login": null,
      "form-paid": null
    },
    setup(e, {
      emit: t
    }) {
      const r = (e.showTitle == null ? undefined : e.showTitle.toString().toLocaleLowerCase()) === "true" || e.showTitle === true;
      const i = (e.showAuxiliaryLinks == null ? undefined : e.showAuxiliaryLinks.toString().toLocaleLowerCase()) === "true" || e.showAuxiliaryLinks === true;
      const s = (e.showLoginSocial == null ? undefined : e.showLoginSocial.toString().toLocaleLowerCase()) === "true" || e.showLoginSocial === true;
      const l = (e.allowRouteManipulation == null ? undefined : e.allowRouteManipulation.toString().toLocaleLowerCase()) === "true" || e.allowRouteManipulation === true;
      const a = (e.isCheckout == null ? undefined : e.isCheckout.toString().toLocaleLowerCase()) === "true" || e.isCheckout === true;
      const u = (e.isFreeCreator == null ? undefined : e.isFreeCreator.toString().toLocaleLowerCase()) === "true" || e.isFreeCreator === true;
      const m = n.getCurrentInstance();
      Gr();
      Vr(e);
      vr();
      Bt(e);
      const {
        windowLoaded: c
      } = Br({
        emit: t
      });
      We.useProvides(m);
      gt.useProvides(m);
      return (p, f) => {
        var _;
        n.openBlock();
        return n.createElementBlock(n.Fragment, null, [(_ = p.appStore.appSettings) != null && _.PRIVACY_MODULES ? (n.openBlock(), n.createBlock(n.resolveDynamicComponent("style"), {
          key: 0
        }, {
          default: n.withCtx(() => {
            var g;
            return [n.createTextVNode(" @import \"" + n.toDisplayString((g = p.appStore.appSettings) == null ? undefined : g.PRIVACY_MODULES) + "/styles/privacy.components.css\"; ", 1)];
          }),
          _: 1
        })) : n.createCommentVNode("", true), p.appStore.ready && n.unref(c) ? (n.openBlock(), n.createBlock(ht, {
          key: 1,
          class: "app-wc mb-4",
          view: e.view,
          showTitle: n.unref(r),
          showAuxiliaryLinks: n.unref(i),
          showLoginSocial: n.unref(s),
          allowRouteManipulation: n.unref(l),
          profileName: e.profileName,
          isFreeCreator: n.unref(u),
          returnUrl: e.returnUrl,
          isCheckout: n.unref(a),
          "order-payment": e.orderPayment,
          onSuccessLogin: f[0] || (f[0] = g => p.$emit("success-login", g)),
          onFormPaid: f[1] || (f[1] = g => p.$emit("form-paid"))
        }, null, 8, ["view", "showTitle", "showAuxiliaryLinks", "showLoginSocial", "allowRouteManipulation", "profileName", "isFreeCreator", "returnUrl", "isCheckout", "order-payment"])) : n.createCommentVNode("", true)], 64);
      };
    }
  });
  const be = C(Wr, [["styles", [`@import"https://fonts.googleapis.com/css2?family=Inter&display=swap";@import"https://cdnjs.cloudflare.com/ajax/libs/element-plus/2.2.30/index.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css";
`]]]);
  const Hr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: be
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  async function Kr() {
    const e = Object.assign({
      "../App.ce.vue": () => Promise.resolve().then(() => Hr),
      "../components/AccountExclusion.vue": () => Promise.resolve().then(() => hr),
      "../components/AuthCallback.vue": () => Promise.resolve().then(() => kn),
      "../components/EmailConfirmation.vue": () => Promise.resolve().then(() => ur),
      "../components/Index.vue": () => Promise.resolve().then(() => Pr),
      "../components/PrivacySupport.vue": () => Promise.resolve().then(() => Go),
      "../components/RecoveryConfirmation.vue": () => Promise.resolve().then(() => rr),
      "../components/RecoveryPassword.vue": () => Promise.resolve().then(() => Jo),
      "../components/SignIn.vue": () => Promise.resolve().then(() => To),
      "../components/SignUp.vue": () => Promise.resolve().then(() => xo),
      "../components/base/AlertText.vue": () => Promise.resolve().then(() => An),
      "../components/base/AuxiliaryLinks.vue": () => Promise.resolve().then(() => _o),
      "../components/base/Button.vue": () => Promise.resolve().then(() => uo),
      "../components/base/CodeInput.vue": () => Promise.resolve().then(() => so),
      "../components/base/DocumentInput.vue": () => Promise.resolve().then(() => $n),
      "../components/base/EmailInput.vue": () => Promise.resolve().then(() => jn),
      "../components/base/Loader.vue": () => Promise.resolve().then(() => $t),
      "../components/base/PasswordInput.vue": () => Promise.resolve().then(() => no),
      "../components/base/PasswordTest.vue": () => Promise.resolve().then(() => bo),
      "../components/base/SocialLogin.vue": () => Promise.resolve().then(() => wr),
      "../components/base/Title.vue": () => Promise.resolve().then(() => Yt),
      "../components/base/UsernameInput.vue": () => Promise.resolve().then(() => No)
    });
    const t = [];
    for (const o in e) {
      const r = await e[o]();
      t.push(r.default.styles);
    }
    return [t.flat().join("")];
  }
  function Et(e, t) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        });
      }
      o.push.apply(o, r);
    }
    return o;
  }
  function P(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t] != null ? arguments[t] : {};
      if (t % 2) {
        Et(Object(o), true).forEach(function (r) {
          L(e, r, o[r]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(o));
      } else {
        Et(Object(o)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
        });
      }
    }
    return e;
  }
  function pe(e) {
    pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
      return typeof t;
    } : function (t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    return pe(e);
  }
  function L(e, t, o) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  function qr(e, t) {
    if (e == null) {
      return {};
    }
    var o = {};
    var r = Object.keys(e);
    var i;
    var s;
    for (s = 0; s < r.length; s++) {
      i = r[s];
      if (!(t.indexOf(i) >= 0)) {
        o[i] = e[i];
      }
    }
    return o;
  }
  function Yr(e, t) {
    if (e == null) {
      return {};
    }
    var o = qr(e, t);
    var r;
    var i;
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) {
        r = s[i];
        if (!(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r)) {
          o[r] = e[r];
        }
      }
    }
    return o;
  }
  function Zr(e) {
    if (Array.isArray(e)) {
      return Me(e);
    }
  }
  function Qr(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
      return Array.from(e);
    }
  }
  function Xr(e, t) {
    if (e) {
      if (typeof e == "string") {
        return Me(e, t);
      }
      var o = Object.prototype.toString.call(e).slice(8, -1);
      if (o === "Object" && e.constructor) {
        o = e.constructor.name;
      }
      if (o === "Map" || o === "Set") {
        return Array.from(e);
      }
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) {
        return Me(e, t);
      }
    }
  }
  function Me(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var o = 0;
    for (var r = new Array(t); o < t; o++) {
      r[o] = e[o];
    }
    return r;
  }
  function Jr() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  var yt = {
    exports: {}
  };
  (function (e) {
    (function (t) {
      var o = function (d, h, A) {
        if (!(h === Object(h)) || a.call(h) == "[object Date]" || a.call(h) == "[object RegExp]" || a.call(h) == "[object Boolean]" || typeof h == "function") {
          return h;
        }
        var N;
        var O = 0;
        var v = 0;
        if (a.call(h) == "[object Array]") {
          N = [];
          for (v = h.length; O < v; O++) {
            N.push(o(d, h[O], A));
          }
        } else {
          N = {};
          for (var I in h) if (Object.prototype.hasOwnProperty.call(h, I)) {
            N[d(I, A)] = o(d, h[I], A);
          }
        }
        return N;
      };
      var r = function (d, h) {
        h = h || {};
        var A = h.separator || "_";
        var N = h.split || /(?=[A-Z])/;
        return d.split(N).join(A);
      };
      var i = function (d) {
        return g(d) ? d : (d = d.replace(/[\-_\s]+(.)?/g, function (h, A) {
          return A ? A.toUpperCase() : "";
        }), d.substr(0, 1).toLowerCase() + d.substr(1));
      };
      var s = function (d) {
        var h = i(d);
        return h.substr(0, 1).toUpperCase() + h.substr(1);
      };
      var l = function (d, h) {
        return r(d, h).toLowerCase();
      };
      var a = Object.prototype.toString;
      var g = function (d) {
        d = d - 0;
        return d === d;
      };
      var M = function (d, h) {
        var A = h && "process" in h ? h.process : h;
        return typeof A != "function" ? d : function (N, O) {
          return A(N, d, O);
        };
      };
      var y = {
        camelize: i,
        decamelize: l,
        pascalize: s,
        depascalize: l,
        camelizeKeys: function (d, h) {
          return o(M(i, h), d);
        },
        decamelizeKeys: function (d, h) {
          return o(M(l, h), d, h);
        },
        pascalizeKeys: function (d, h) {
          return o(M(s, h), d);
        },
        depascalizeKeys: function () {
          return this.decamelizeKeys.apply(this, arguments);
        }
      };
      if (e.exports) {
        e.exports = y;
      } else {
        t.humps = y;
      }
    })($r);
  })(yt);
  var ei = yt.exports;
  var ti = ["class", "style"];
  function ni(e) {
    return e.split(";").map(function (t) {
      return t.trim();
    }).filter(function (t) {
      return t;
    }).reduce(function (t, o) {
      var r = o.indexOf(":");
      var i = ei.camelize(o.slice(0, r));
      var s = o.slice(r + 1).trim();
      t[i] = s;
      return t;
    }, {});
  }
  function oi(e) {
    return e.split(/\s+/).reduce(function (t, o) {
      t[o] = true;
      return t;
    }, {});
  }
  function Ue(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof e == "string") {
      return e;
    }
    var r = (e.children || []).map(function (u) {
      return Ue(u);
    });
    var i = Object.keys(e.attributes || {}).reduce(function (u, m) {
      var c = e.attributes[m];
      switch (m) {
        case "class":
          u.class = oi(c);
          break;
        case "style":
          u.style = ni(c);
          break;
        default:
          u.attrs[m] = c;
      }
      return u;
    }, {
      attrs: {},
      class: {},
      style: {}
    });
    o.class;
    var s = o.style;
    var l = s === undefined ? {} : s;
    var a = Yr(o, ti);
    return n.h(e.tag, P(P(P({}, t), {}, {
      class: i.class,
      style: P(P({}, i.style), l)
    }, i.attrs), a), r);
  }
  var It = false;
  try {
    It = true;
  } catch {}
  function ri() {
    if (!It && console && typeof console.error == "function") {
      console.error.apply(console, arguments);
    }
  }
  function ii(e) {
    var t;
    t = {
      "fa-spin": e.spin,
      "fa-pulse": e.pulse,
      "fa-fw": e.fixedWidth,
      "fa-border": e.border,
      "fa-li": e.listItem,
      "fa-inverse": e.inverse,
      "fa-flip": e.flip === true,
      "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
      "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
    };
    L(t, "fa-".concat(e.size), e.size !== null);
    L(t, "fa-rotate-".concat(e.rotation), e.rotation !== null);
    L(t, "fa-pull-".concat(e.pull), e.pull !== null);
    L(t, "fa-swap-opacity", e.swapOpacity);
    L(t, "fa-bounce", e.bounce);
    L(t, "fa-shake", e.shake);
    L(t, "fa-beat", e.beat);
    L(t, "fa-fade", e.fade);
    L(t, "fa-beat-fade", e.beatFade);
    L(t, "fa-flash", e.flash);
    L(t, "fa-spin-pulse", e.spinPulse);
    L(t, "fa-spin-reverse", e.spinReverse);
    return Object.keys(t).map(function (r) {
      return t[r] ? r : null;
    }).filter(function (r) {
      return r;
    });
  }
  function St(e) {
    if (e && pe(e) === "object" && e.prefix && e.iconName && e.icon) {
      return e;
    }
    if (V.parse.icon) {
      return V.parse.icon(e);
    }
    if (e === null) {
      return null;
    }
    if (pe(e) === "object" && e.prefix && e.iconName) {
      return e;
    }
    if (Array.isArray(e) && e.length === 2) {
      return {
        prefix: e[0],
        iconName: e[1]
      };
    }
    if (typeof e == "string") {
      return {
        prefix: "fas",
        iconName: e
      };
    }
  }
  var si = n.defineComponent({
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
        validator: function (t) {
          return [true, false, "horizontal", "vertical", "both"].indexOf(t) > -1;
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
        validator: function (t) {
          return ["right", "left"].indexOf(t) > -1;
        }
      },
      pulse: {
        type: Boolean,
        default: false
      },
      rotation: {
        type: [String, Number],
        default: null,
        validator: function (t) {
          return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
        }
      },
      swapOpacity: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: null,
        validator: function (t) {
          return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
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
    setup: function (t, o) {
      var r = o.attrs;
      var i = n.computed(function () {
        return St(t.icon);
      });
      var s = n.computed(function () {
        return Array.isArray(ii(t)) && ii(t).length > 0 || !Array.isArray(ii(t)) && ii(t) ? L({}, "classes", ii(t)) : {};
      });
      var l = n.computed(function () {
        return Array.isArray(typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform) && (typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform).length > 0 || !Array.isArray(typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform) && (typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform) ? L({}, "transform", typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform) : {};
      });
      var a = n.computed(function () {
        return Array.isArray(St(t.mask)) && St(t.mask).length > 0 || !Array.isArray(St(t.mask)) && St(t.mask) ? L({}, "mask", St(t.mask)) : {};
      });
      var u = n.computed(function () {
        return V.icon(i.value, P(P(P(P({}, s.value), l.value), a.value), {}, {
          symbol: t.symbol,
          title: t.title
        }));
      });
      n.watch(u, function (c) {
        if (!c) {
          return ri("Could not find one or more icon(s)", i.value, a.value);
        }
      }, {
        immediate: true
      });
      var m = n.computed(function () {
        return u.value ? Ue(u.value.abstract[0], {}, r) : null;
      });
      return function () {
        return m.value;
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
    setup: function (t, o) {
      var r = o.slots;
      var i = V.config.familyPrefix;
      var s = n.computed(function () {
        return ["".concat(i, "-layers")].concat(Zr(t.fixedWidth ? ["".concat(i, "-fw")] : []) || Qr(t.fixedWidth ? ["".concat(i, "-fw")] : []) || Xr(t.fixedWidth ? ["".concat(i, "-fw")] : []) || Jr());
      });
      return function () {
        return n.h("div", {
          class: s.value
        }, r.default ? r.default() : []);
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
        validator: function (t) {
          return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
        }
      }
    },
    setup: function (t, o) {
      var r = o.attrs;
      var i = V.config.familyPrefix;
      var s = n.computed(function () {
        return Array.isArray([].concat(Zr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Qr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Xr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Jr(), Zr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Qr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Xr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Jr())) && [].concat(Zr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Qr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Xr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Jr(), Zr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Qr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Xr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Jr()).length > 0 || !Array.isArray([].concat(Zr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Qr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Xr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Jr(), Zr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Qr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Xr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Jr())) && [].concat(Zr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Qr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Xr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Jr(), Zr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Qr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Xr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Jr()) ? L({}, "classes", [].concat(Zr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Qr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Xr(t.counter ? ["".concat(i, "-layers-counter")] : []) || Jr(), Zr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Qr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Xr(t.position ? ["".concat(i, "-layers-").concat(t.position)] : []) || Jr())) : {};
      });
      var l = n.computed(function () {
        return Array.isArray(typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform) && (typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform).length > 0 || !Array.isArray(typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform) && (typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform) ? L({}, "transform", typeof t.transform == "string" ? V.parse.transform(t.transform) : t.transform) : {};
      });
      var a = n.computed(function () {
        var m = V.text(t.value.toString(), P(P({}, l.value), s.value));
        var c = m.abstract;
        if (t.counter) {
          c[0].attributes.class = c[0].attributes.class.replace("fa-layers-text", "");
        }
        return c[0];
      });
      var u = n.computed(function () {
        return Ue(a.value, {}, r);
      });
      return function () {
        return u.value;
      };
    }
  });
  const Tt = {
    css: V.dom.css,
    install(e) {
      e.component("font-awesome-icon", si);
    }
  };
  (async () => {
    const e = [Tt.css(), ...(await Kr())];
    be.styles = e;
    if (!customElements.get(xe)) {
      const o = At({
        component: be,
        plugins: [Vn, Tt, gt, We, ge]
      });
      customElements.define(xe, o);
    }
  })();
});