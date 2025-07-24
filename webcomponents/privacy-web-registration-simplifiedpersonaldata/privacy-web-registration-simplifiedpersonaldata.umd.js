(function (a, A) {
  if (typeof exports == "object" && typeof module !== "undefined") {
    A(require("vue"), require("moment"), require("axios"), require("vue-i18n"), require("element-plus"), require("lodash"), require("element-plus/dist/locale/pt-br"), require("element-plus/dist/locale/es"), require("@fortawesome/fontawesome-svg-core"));
  } else if (typeof define == "function" && define.amd) {
    define(["vue", "moment", "axios", "vue-i18n", "element-plus", "lodash", "element-plus/dist/locale/pt-br", "element-plus/dist/locale/es", "@fortawesome/fontawesome-svg-core"], A);
  } else {
    a = typeof globalThis !== "undefined" ? globalThis : a || self;
    A(a.Vue, a.moment, a.axios, a.VueI18n, a.ElementPlus, a._, a.ElementPlusLocalePtBr, a.ElementPlusLocaleEs, a["fontawesome-svg-core"]);
  }
})(this, function (a, A, qe, We, D, he, Ye, Je, P) {
  "use strict";

  function Ke(e) {
    const t = Object.create(null, {
      [Symbol.toStringTag]: {
        value: "Module"
      }
    });
    if (e) {
      for (const n in e) {
        if (n !== "default") {
          const o = Object.getOwnPropertyDescriptor(e, n);
          Object.defineProperty(t, n, o.get ? o : {
            enumerable: true,
            get: () => e[n]
          });
        }
      }
    }
    t.default = e;
    return Object.freeze(t);
  }
  const X = Ke(We);
  const ye = {
    name: "privacy.web.registration.simplifiedpersonaldata",
    version: "1.0.0",
    private: true,
    scripts: {
      dev: "vite --host",
      build: "vite build --mode=production",
      "build-watch": "vite build --mode=production -w",
      "http-server": "http-server . -c 0 --cors *"
    },
    dependencies: {
      "@element-plus/icons-vue": "2.1.0",
      "@fortawesome/fontawesome-svg-core": "6.4.0",
      "@fortawesome/free-brands-svg-icons": "6.5.1",
      "@fortawesome/pro-light-svg-icons": "6.4.0",
      "@fortawesome/pro-solid-svg-icons": "6.5.1",
      "@fortawesome/pro-thin-svg-icons": "6.5.1",
      "@fortawesome/vue-fontawesome": "3.0.3",
      axios: "1.3.3",
      bootstrap: "5.3.2",
      "element-plus": "2.2.30",
      lodash: "4.17.21",
      maska: "2.1.9",
      moment: "2.29.4",
      pinia: "2.0.30",
      "url-join": "5.0.0",
      "vue-i18n": "9.5.0",
      "vue-jwt-decode": "0.1.0"
    },
    devDependencies: {
      "@intlify/unplugin-vue-i18n": "1.4.0",
      "@rushstack/eslint-patch": "1.2.0",
      "@vitejs/plugin-basic-ssl": "^1.0.2",
      "@vitejs/plugin-vue": "4.0.0",
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
      vue: "3.3.0"
    }
  }.name.replace(/\./g, "-");
  const Ge = ({
    component: e = null,
    plugins: t = []
  } = {}) => a.defineCustomElement({
    emits: e.emits,
    computed: e.computed,
    props: e.props,
    styles: e.styles,
    setup(n) {
      const o = a.createApp();
      o.component("app-root", e);
      t.forEach(l => o.use(l));
      const r = a.getCurrentInstance();
      const s = Array.isArray(e.emits) ? e.emits : Object.keys(e.emits);
      const i = Object.fromEntries((s || []).map(l => [`on${l[0].toUpperCase()}${l.slice(1)}`, d => r.emit(l, d)]));
      Object.assign(r.appContext, o._context);
      Object.assign(r.provides, o._context.provides);
      return () => a.h(e, {
        ...n,
        ...i
      });
    }
  });
  A.locale("pt-br");
  function Ze(e) {
    A.locale(e);
  }
  const Xe = {
    loading: {
      messageNotFound: e => {
        const {
          normalize: t
        } = e;
        return t(["Sem resultados para sua pesquisa."]);
      }
    },
    base: {
      btnSend: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirmar"]);
      },
      btnCancel: e => {
        const {
          normalize: t
        } = e;
        return t(["Cancelar"]);
      },
      btnSave: e => {
        const {
          normalize: t
        } = e;
        return t(["Salvar"]);
      },
      btnBack: e => {
        const {
          normalize: t
        } = e;
        return t(["Voltar"]);
      },
      btnMyLink: e => {
        const {
          normalize: t
        } = e;
        return t(["Copiar meu link Privacy"]);
      },
      defaultErrorMsg: e => {
        const {
          normalize: t
        } = e;
        return t(["Desculpe, ocorreu um erro ao processar sua solicitaÃ§Ã£o."]);
      }
    },
    personalData: {
      title: e => {
        const {
          normalize: t
        } = e;
        return t(["Dados Pessoais"]);
      },
      nickName: e => {
        const {
          normalize: t
        } = e;
        return t(["Apelido"]);
      },
      email: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail"]);
      },
      fullName: e => {
        const {
          normalize: t
        } = e;
        return t(["Nome Completo"]);
      },
      documentId: e => {
        const {
          normalize: t
        } = e;
        return t(["Documento de IdentificaÃ§Ã£o"]);
      },
      documentCPF: e => {
        const {
          normalize: t
        } = e;
        return t(["CPF"]);
      },
      birthDate: e => {
        const {
          normalize: t
        } = e;
        return t(["Data de Nascimento"]);
      },
      phoneNumber: e => {
        const {
          normalize: t
        } = e;
        return t(["Celular"]);
      },
      password: e => {
        const {
          normalize: t
        } = e;
        return t(["Senha"]);
      },
      documentType: e => {
        const {
          normalize: t
        } = e;
        return t(["Tipo de Documento"]);
      }
    },
    personalAddress: {
      country: e => {
        const {
          normalize: t
        } = e;
        return t(["PaÃ­s"]);
      }
    },
    validation: {
      requiredField: e => {
        const {
          normalize: t
        } = e;
        return t(["Campo obrigatÃ³rio"]);
      },
      invalidCpf: e => {
        const {
          normalize: t
        } = e;
        return t(["CPF invÃ¡lido"]);
      },
      invalidAge: e => {
        const {
          normalize: t
        } = e;
        return t(["Precisa ser maior de 18 anos"]);
      },
      invalidDate: e => {
        const {
          normalize: t
        } = e;
        return t(["Data invÃ¡lida"]);
      },
      invalidEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail invÃ¡lido"]);
      },
      invalidCpfDate: e => {
        const {
          normalize: t
        } = e;
        return t(["A data de nascimento informada nÃ£o corresponde ao CPF"]);
      },
      invalidCpfName: e => {
        const {
          normalize: t
        } = e;
        return t(["O nome informado nÃ£o corresponde com o CPF"]);
      },
      invalidCpfInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["O CPF fornecido jÃ¡ estÃ¡ cadastrado. Para recuperar a senha ACTION_MODAL"]);
      },
      invalidDocumentInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["O documento fornecido jÃ¡ estÃ¡ cadastrado."]);
      },
      invalidEmailInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["O email fornecido jÃ¡ estÃ¡ cadastrado"]);
      },
      invalidPrice: e => {
        const {
          normalize: t,
          interpolate: n,
          named: o
        } = e;
        return t(["O valor mÃ­nimo da assinatura Ã© R$ ", n(o("MIN_VALUE")), " e o valor mÃ¡ximo Ã© R$ ", n(o("MAX_VALUE"))]);
      },
      invalidZipCode: e => {
        const {
          normalize: t
        } = e;
        return t(["CEP invÃ¡lido"]);
      },
      emptyDocument: e => {
        const {
          normalize: t
        } = e;
        return t(["Documento invÃ¡lido"]);
      }
    },
    information: {
      password: e => {
        const {
          normalize: t
        } = e;
        return t(["Sua senha deve conter no mÃ­nimo 8 caracteres entre letras(minÃºscula/maiÃºscula), nÃºmeros e caracteres especiais"]);
      },
      recoveryPassword: e => {
        const {
          normalize: t
        } = e;
        return t(["Para continuar a recuperaÃ§Ã£o de senha, <br> confirme que este Ã© seu e-mail."]);
      }
    },
    alertText: {
      success: e => {
        const {
          normalize: t
        } = e;
        return t(["Dados salvos com sucesso"]);
      },
      error: e => {
        const {
          normalize: t
        } = e;
        return t(["NÃ£o foi possÃ­vel salvar os dados"]);
      },
      copyLink: e => {
        const {
          normalize: t
        } = e;
        return t(["Link Copiado"]);
      },
      sentEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail enviado com sucesso"]);
      },
      errorEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["NÃ£o foi possÃ­vel enviar o e-mail"]);
      }
    },
    title: {
      personalConfigPerfil: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirme suas informaÃ§Ãµes"]);
      },
      recoveryPassword: e => {
        const {
          normalize: t
        } = e;
        return t(["Recuperar senha"]);
      }
    },
    action: {
      clickHere: e => {
        const {
          normalize: t
        } = e;
        return t(["clique aqui"]);
      }
    }
  };
  const Qe = {
    loading: {
      messageNotFound: e => {
        const {
          normalize: t
        } = e;
        return t(["No results for your search."]);
      }
    },
    base: {
      btnSend: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirm"]);
      },
      btnCancel: e => {
        const {
          normalize: t
        } = e;
        return t(["Cancel"]);
      },
      btnSave: e => {
        const {
          normalize: t
        } = e;
        return t(["Save"]);
      },
      btnBack: e => {
        const {
          normalize: t
        } = e;
        return t(["Back"]);
      },
      btnMyLink: e => {
        const {
          normalize: t
        } = e;
        return t(["Copy my link Privacy"]);
      },
      defaultErrorMsg: e => {
        const {
          normalize: t
        } = e;
        return t(["Sorry, there was an error processing your request."]);
      }
    },
    personalData: {
      title: e => {
        const {
          normalize: t
        } = e;
        return t(["Personal Data"]);
      },
      nickName: e => {
        const {
          normalize: t
        } = e;
        return t(["Nick name"]);
      },
      email: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail"]);
      },
      fullName: e => {
        const {
          normalize: t
        } = e;
        return t(["Full Name"]);
      },
      documentId: e => {
        const {
          normalize: t
        } = e;
        return t(["Identification Document"]);
      },
      documentCPF: e => {
        const {
          normalize: t
        } = e;
        return t(["CPF"]);
      },
      birthDate: e => {
        const {
          normalize: t
        } = e;
        return t(["Date of Birth"]);
      },
      phoneNumber: e => {
        const {
          normalize: t
        } = e;
        return t(["Cell Phone"]);
      },
      password: e => {
        const {
          normalize: t
        } = e;
        return t(["Password"]);
      },
      documentType: e => {
        const {
          normalize: t
        } = e;
        return t(["Document Type"]);
      }
    },
    personalAddress: {
      country: e => {
        const {
          normalize: t
        } = e;
        return t(["Country"]);
      }
    },
    validation: {
      requiredField: e => {
        const {
          normalize: t
        } = e;
        return t(["Required Field"]);
      },
      invalidCpf: e => {
        const {
          normalize: t
        } = e;
        return t(["Invalid CPF"]);
      },
      invalidAge: e => {
        const {
          normalize: t
        } = e;
        return t(["Must be over 18 years old"]);
      },
      invalidDate: e => {
        const {
          normalize: t
        } = e;
        return t(["invalid date"]);
      },
      invalidEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["Invalid Email"]);
      },
      invalidCpfDate: e => {
        const {
          normalize: t
        } = e;
        return t(["The date of birth provided does not correspond to the CPF"]);
      },
      invalidCpfName: e => {
        const {
          normalize: t
        } = e;
        return t(["The name provided does not correspond to the CPF"]);
      },
      invalidCpfInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["The CPF provided is already registered. To recover the password ACTION_MODAL"]);
      },
      invalidDocumentInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["The document provided is already registered."]);
      },
      invalidEmailInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["The email provided is already registered"]);
      },
      invalidPrice: e => {
        const {
          normalize: t,
          interpolate: n,
          named: o
        } = e;
        return t(["The minimum subscription value is R$ ", n(o("MIN_VALUE")), " and the maximum subscription value is R$ ", n(o("MAX_VALUE"))]);
      },
      invalidZipCode: e => {
        const {
          normalize: t
        } = e;
        return t(["Invalid ZIP code"]);
      },
      emptyDocument: e => {
        const {
          normalize: t
        } = e;
        return t(["Invalid Document"]);
      }
    },
    information: {
      password: e => {
        const {
          normalize: t
        } = e;
        return t(["Your password must contain at least 8 characters including letters (lowercase/uppercase), numbers and special characters"]);
      },
      recoveryPassword: e => {
        const {
          normalize: t
        } = e;
        return t(["To continue the password recovery process, <br> please confirm that this is your email."]);
      }
    },
    alertText: {
      success: e => {
        const {
          normalize: t
        } = e;
        return t(["Data saved successfully"]);
      },
      error: e => {
        const {
          normalize: t
        } = e;
        return t(["Unable to save data"]);
      },
      copyLink: e => {
        const {
          normalize: t
        } = e;
        return t(["Copy Link"]);
      },
      sentEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["Email successfully sent"]);
      },
      errorEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["Unable to send the email"]);
      }
    },
    title: {
      personalConfigPerfil: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirm your information"]);
      },
      recoveryPassword: e => {
        const {
          normalize: t
        } = e;
        return t(["Recover Password"]);
      }
    },
    action: {
      clickHere: e => {
        const {
          normalize: t
        } = e;
        return t(["click here"]);
      }
    }
  };
  const et = {
    loading: {
      messageNotFound: e => {
        const {
          normalize: t
        } = e;
        return t(["No hay resultados para su bÃºsqueda."]);
      }
    },
    base: {
      btnSend: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirmar"]);
      },
      btnCancel: e => {
        const {
          normalize: t
        } = e;
        return t(["Cancelar"]);
      },
      btnSave: e => {
        const {
          normalize: t
        } = e;
        return t(["Guardar"]);
      },
      btnBack: e => {
        const {
          normalize: t
        } = e;
        return t(["Volver"]);
      },
      btnMyLink: e => {
        const {
          normalize: t
        } = e;
        return t(["Copiar mi enlace Privacy"]);
      },
      defaultErrorMsg: e => {
        const {
          normalize: t
        } = e;
        return t(["Lo sentimos, hubo un error al procesar su solicitud"]);
      }
    },
    personalData: {
      title: e => {
        const {
          normalize: t
        } = e;
        return t(["Datos Personales"]);
      },
      nickName: e => {
        const {
          normalize: t
        } = e;
        return t(["Apellido"]);
      },
      email: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail"]);
      },
      fullName: e => {
        const {
          normalize: t
        } = e;
        return t(["Nombre Completo"]);
      },
      documentId: e => {
        const {
          normalize: t
        } = e;
        return t(["Documento de identificaciÃ³n"]);
      },
      documentCPF: e => {
        const {
          normalize: t
        } = e;
        return t(["CPF"]);
      },
      birthDate: e => {
        const {
          normalize: t
        } = e;
        return t(["Fecha de Nacimiento"]);
      },
      phoneNumber: e => {
        const {
          normalize: t
        } = e;
        return t(["TelÃ©fono MÃ³vil"]);
      },
      password: e => {
        const {
          normalize: t
        } = e;
        return t(["ContraseÃ±a"]);
      },
      documentType: e => {
        const {
          normalize: t
        } = e;
        return t(["Tipo de Documento"]);
      }
    },
    personalAddress: {
      country: e => {
        const {
          normalize: t
        } = e;
        return t(["PaÃ­s"]);
      }
    },
    validation: {
      requiredField: e => {
        const {
          normalize: t
        } = e;
        return t(["Campo obrigatÃ³rio"]);
      },
      invalidCpf: e => {
        const {
          normalize: t
        } = e;
        return t(["CPF invÃ¡lido"]);
      },
      invalidAge: e => {
        const {
          normalize: t
        } = e;
        return t(["Debe ser mayor de 18 aÃ±os."]);
      },
      invalidDate: e => {
        const {
          normalize: t
        } = e;
        return t(["Fecha Invalida"]);
      },
      invalidEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["E-mail InvÃ¡lido"]);
      },
      invalidCpfDate: e => {
        const {
          normalize: t
        } = e;
        return t(["La fecha de nacimiento proporcionada no corresponde al CPF"]);
      },
      invalidCpfName: e => {
        const {
          normalize: t
        } = e;
        return t(["El nombre proporcionado no corresponde al CPF"]);
      },
      invalidCpfInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["El CPF proporcionado ya estÃ¡ registrado. Para recuperar la contraseÃ±a ACTION_MODAL"]);
      },
      invalidDocumentInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["El documento proporcionado ya estÃ¡ registrado."]);
      },
      invalidEmailInUse: e => {
        const {
          normalize: t
        } = e;
        return t(["El correo electrÃ³nico proporcionado ya estÃ¡ registrado"]);
      },
      invalidPrice: e => {
        const {
          normalize: t,
          interpolate: n,
          named: o
        } = e;
        return t(["El valor mÃ­nimo de suscripciÃ³n es R$ ", n(o("MIN_VALUE")), " y el valor mÃ¡ximo de suscripciÃ³n es R$ ", n(o("MAX_VALUE"))]);
      },
      invalidZipCode: e => {
        const {
          normalize: t
        } = e;
        return t(["CÃ³digo postal invÃ¡lido"]);
      },
      emptyDocument: e => {
        const {
          normalize: t
        } = e;
        return t(["Documento invÃ¡lido"]);
      }
    },
    information: {
      password: e => {
        const {
          normalize: t
        } = e;
        return t(["Su contraseÃ±a debe contener al menos 8 caracteres, incluidas letras (minÃºsculas/mayÃºsculas), nÃºmeros y caracteres especiales"]);
      },
      recoveryPassword: e => {
        const {
          normalize: t
        } = e;
        return t(["Para continuar con la recuperaciÃ³n de contraseÃ±a, <br> confirma que este es tu correo electrÃ³nico."]);
      }
    },
    alertText: {
      success: e => {
        const {
          normalize: t
        } = e;
        return t(["Datos guardados exitosamente"]);
      },
      error: e => {
        const {
          normalize: t
        } = e;
        return t(["No se pueden guardar datos"]);
      },
      copyLink: e => {
        const {
          normalize: t
        } = e;
        return t(["Enlace copiado"]);
      },
      sentEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["Email enviado con Ã©xito"]);
      },
      errorEmail: e => {
        const {
          normalize: t
        } = e;
        return t(["No fue posible enviar el correo electrÃ³nico"]);
      }
    },
    title: {
      personalConfigPerfil: e => {
        const {
          normalize: t
        } = e;
        return t(["Confirme su informaciÃ³n"]);
      },
      recoveryPassword: e => {
        const {
          normalize: t
        } = e;
        return t(["Recuperar contraseÃ±a"]);
      }
    },
    action: {
      clickHere: e => {
        const {
          normalize: t
        } = e;
        return t(["haga clic aquÃ­"]);
      }
    }
  };
  let q = null;
  const ne = {
    install(e) {
      q = X.createI18n({
        legacy: false,
        locale: "pt",
        fallbackLocale: "pt",
        globalInjection: false
      });
      e.use(q);
      tt();
      return q;
    },
    get global() {
      return q.global;
    }
  };
  function tt() {
    if (!a.inject(X.I18nInjectionKey)) {
      a.provide(X.I18nInjectionKey, q);
    }
  }
  function B() {
    var o;
    var r;
    const e = a.getCurrentInstance();
    if (!a.inject((r = (o = e == null ? undefined : e.appContext) == null ? undefined : o.app) == null ? undefined : r.__VUE_I18N_SYMBOL__)) {
      e.isCE = true;
    }
    const {
      t: n
    } = X.useI18n({
      messages: {
        pt: Xe,
        en: Qe,
        es: et
      }
    });
    return {
      t: n
    };
  }
  const E = {
    get defaultLocale() {
      return "pt";
    },
    set currentLocale(e) {
      e = e && e.split("-")[0];
      ne.global.locale.value = e;
    },
    get currentLocale() {
      return ne.global.locale.value;
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
    getMessage(e, t) {
      return this.t(e, t);
    },
    async switchLanguage(e) {
      E.currentLocale = e;
      Ze(e);
    }
  };
  function nt(e) {
    const {
      t
    } = B();
    E.setTranslate({
      t
    });
    a.watch(e.locale, n => {
      E.switchLanguage(n || e.locale);
    }, {
      immediate: true
    });
  }
  const V = {
    value: null,
    provides: null
  };
  const ge = {
    install(e, t) {
      if (!e.config.globalProperties.$http) {
        V.value = qe.create({
          baseURL: t == null ? undefined : t.baseUrl
        });
        V.value.interceptors.request.use(n => {
          if (V.provides.token.value && !n.headers.Authorization) {
            if (n.apiAuth == "v1") {
              n.headers.Authorization = `Bearer ${V.provides.tokenV1.value}`;
            } else {
              n.headers.Authorization = `Bearer ${V.provides.token.value}`;
            }
          }
          if (!n.headers["Accept-Language"]) {
            n.headers["Accept-Language"] = V.provides.locale.value || E.defaultLocale;
          }
          return n;
        }, n => Promise.reject(n));
        e.config.globalProperties.$http = V.value;
      }
    },
    useProvides(e) {
      V.provides = e.provides;
    }
  };
  var ot = false; /*!
                  * pinia v2.0.30
                  * (c) 2023 Eduardo San Martin Morote
                  * @license MIT
                  */
  let _e;
  const Q = e => _e = e;
  const be = Symbol();
  function oe(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var W;
  (function (e) {
    e.direct = "direct";
    e.patchObject = "patch object";
    e.patchFunction = "patch function";
  })(W || (W = {}));
  function rt() {
    const e = a.effectScope(true);
    const t = e.run(() => a.ref({}));
    let n = [];
    let o = [];
    const r = a.markRaw({
      install(s) {
        Q(r);
        r._a = s;
        s.provide(be, r);
        s.config.globalProperties.$pinia = r;
        o.forEach(i => n.push(i));
        o = [];
      },
      use(s) {
        if (!this._a && !ot) {
          o.push(s);
        } else {
          n.push(s);
        }
        return this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: new Map(),
      state: t
    });
    return r;
  }
  const ve = () => {};
  function ze(e, t, n, o = ve) {
    e.push(t);
    const r = () => {
      const s = e.indexOf(t);
      if (s > -1) {
        e.splice(s, 1);
        o();
      }
    };
    if (!n && a.getCurrentScope()) {
      a.onScopeDispose(r);
    }
    return r;
  }
  function U(e, ...t) {
    e.slice().forEach(n => {
      n(...t);
    });
  }
  function re(e, t) {
    if (e instanceof Map && t instanceof Map) {
      t.forEach((n, o) => e.set(o, n));
    }
    if (e instanceof Set && t instanceof Set) {
      t.forEach(e.add, e);
    }
    for (const n in t) {
      if (!t.hasOwnProperty(n)) {
        continue;
      }
      const o = t[n];
      const r = e[n];
      if (oe(r) && oe(o) && e.hasOwnProperty(n) && !a.isRef(o) && !a.isReactive(o)) {
        e[n] = re(r, o);
      } else {
        e[n] = o;
      }
    }
    return e;
  }
  const at = Symbol();
  function st(e) {
    return !oe(e) || !e.hasOwnProperty(at);
  }
  const {
    assign: j
  } = Object;
  function it(e) {
    return !!(a.isRef(e) && e.effect);
  }
  function lt(e, t, n, o) {
    const {
      state: r,
      actions: s,
      getters: i
    } = t;
    const l = n.state.value[e];
    let d;
    function u() {
      if (!l) {
        n.state.value[e] = r ? r() : {};
      }
      const c = a.toRefs(n.state.value[e]);
      return j(c, s, Object.keys(i || {}).reduce((m, g) => {
        m[g] = a.markRaw(a.computed(() => {
          Q(n);
          const y = n._s.get(e);
          return i[g].call(y, y);
        }));
        return m;
      }, {}));
    }
    d = we(e, u, t, n, o, true);
    d.$reset = function () {
      const m = r ? r() : {};
      this.$patch(g => {
        j(g, m);
      });
    };
    return d;
  }
  function we(e, t, n = {}, o, r, s) {
    let i;
    const l = j({
      actions: {}
    }, n);
    const d = {
      deep: true
    };
    let u;
    let c;
    let m = a.markRaw([]);
    let g = a.markRaw([]);
    let y;
    const b = o.state.value[e];
    if (!s && !b) {
      o.state.value[e] = {};
    }
    a.ref({});
    let h;
    function S(_) {
      let z;
      u = c = false;
      if (typeof _ == "function") {
        _(o.state.value[e]);
        z = {
          type: W.patchFunction,
          storeId: e,
          events: y
        };
      } else {
        re(o.state.value[e], _);
        z = {
          type: W.patchObject,
          payload: _,
          storeId: e,
          events: y
        };
      }
      const x = h = Symbol();
      a.nextTick().then(() => {
        if (h === x) {
          u = true;
        }
      });
      c = true;
      U(m, z, o.state.value[e]);
    }
    const p = ve;
    function f() {
      i.stop();
      m = [];
      g = [];
      o._s.delete(e);
    }
    function v(_, z) {
      return function () {
        Q(o);
        const x = Array.from(arguments);
        const F = [];
        const T = [];
        function te(N) {
          F.push(N);
        }
        function fe(N) {
          T.push(N);
        }
        U(g, {
          args: x,
          name: _,
          store: C,
          after: te,
          onError: fe
        });
        let Z;
        try {
          Z = z.apply(this && this.$id === e ? this : C, x);
        } catch (N) {
          U(T, N);
          throw N;
        }
        if (Z instanceof Promise) {
          return Z.then(N => {
            U(F, N);
            return N;
          }).catch(N => {
            U(T, N);
            return Promise.reject(N);
          });
        } else {
          U(F, Z);
          return Z;
        }
      };
    }
    const w = {
      _p: o,
      $id: e,
      $onAction: ze.bind(null, g),
      $patch: S,
      $reset: p,
      $subscribe(_, z = {}) {
        const x = ze(m, _, z.detached, () => F());
        const F = i.run(() => a.watch(() => o.state.value[e], T => {
          if (z.flush === "sync" ? c : u) {
            _({
              storeId: e,
              type: W.direct,
              events: y
            }, T);
          }
        }, j({}, d, z)));
        return x;
      },
      $dispose: f
    };
    const C = a.reactive(w);
    o._s.set(e, C);
    const k = o._e.run(() => {
      i = a.effectScope();
      return i.run(() => t());
    });
    for (const _ in k) {
      const z = k[_];
      if (a.isRef(z) && !it(z) || a.isReactive(z)) {
        if (!s) {
          if (b && st(z)) {
            if (a.isRef(z)) {
              z.value = b[_];
            } else {
              re(z, b[_]);
            }
          }
          o.state.value[e][_] = z;
        }
      } else if (typeof z == "function") {
        const x = v(_, z);
        k[_] = x;
        l.actions[_] = z;
      }
    }
    j(C, k);
    j(a.toRaw(C), k);
    Object.defineProperty(C, "$state", {
      get: () => o.state.value[e],
      set: _ => {
        S(z => {
          j(z, _);
        });
      }
    });
    o._p.forEach(_ => {
      j(C, i.run(() => _({
        store: C,
        app: o._a,
        pinia: o,
        options: l
      })));
    });
    if (b && s && n.hydrate) {
      n.hydrate(C.$state, b);
    }
    u = true;
    c = true;
    return C;
  }
  function ae(e, t, n) {
    let o;
    let r;
    const s = typeof t == "function";
    if (typeof e == "string") {
      o = e;
      r = s ? n : t;
    } else {
      r = e;
      o = e.id;
    }
    function i(l, d) {
      const u = a.getCurrentInstance();
      l = l || u && a.inject(be, null);
      if (l) {
        Q(l);
      }
      l = _e;
      if (!l._s.has(o)) {
        if (s) {
          we(o, t, r, l);
        } else {
          lt(o, r, l);
        }
      }
      return l._s.get(o);
    }
    i.$id = o;
    return i;
  }
  function ct(e) {
    var t = [];
    if (e.length === 0) {
      return "";
    }
    if (typeof e[0] != "string") {
      throw new TypeError("Url must be a string. Received " + e[0]);
    }
    if (e[0].match(/^[^/:]+:\/*$/) && e.length > 1) {
      var n = e.shift();
      e[0] = n + e[0];
    }
    if (e[0].match(/^file:\/\/\//)) {
      e[0] = e[0].replace(/^([^/:]+):\/*/, "$1:///");
    } else {
      e[0] = e[0].replace(/^([^/:]+):\/*/, "$1://");
    }
    for (var o = 0; o < e.length; o++) {
      var r = e[o];
      if (typeof r != "string") {
        throw new TypeError("Url must be a string. Received " + r);
      }
      if (r !== "") {
        if (o > 0) {
          r = r.replace(/^[\/]+/, "");
        }
        if (o < e.length - 1) {
          r = r.replace(/[\/]+$/, "");
        } else {
          r = r.replace(/[\/]+$/, "/");
        }
        t.push(r);
      }
    }
    var s = t.join("/");
    s = s.replace(/\/(\?|&|#[^!])/g, "$1");
    var i = s.split("?");
    s = i.shift() + (i.length > 0 ? "?" : "") + i.join("&");
    return s;
  }
  function O() {
    var e;
    if (typeof arguments[0] == "object") {
      e = arguments[0];
    } else {
      e = [].slice.call(arguments);
    }
    return ct(e);
  }
  const se = ae("app", {
    state: () => ({
      alert: {
        text: null,
        show: false,
        type: ""
      }
    }),
    getters: {
      ready: e => e.global.ready,
      appSettings: e => e.global.appSettings,
      token: e => e.global.token,
      $http: e => e.global.$http,
      locale: e => e.global.locale,
      isAuthenticated: e => !!e.token
    },
    actions: {
      async refreshJWT(e) {
        try {
          const t = O(this.global.appSettings.ENDPOINT_API_AUTH, "/refresh-token");
          const n = await this.global.$http.get(t);
          if (n.data) {
            const {
              token: o,
              tokenV1: r
            } = n.data;
            let s = `${this.global.appSettings.PRIVACY_URL}/strangler/Login?token=${r}&tokenV2=${o}`;
            if (e) {
              s = O(`${s}&returnUrl=`, ut(e));
            }
            window.location.href = s;
          }
        } catch (t) {
          console.error(t);
        }
      },
      showAlertSuccess(e) {
        this.alert.text = e;
        this.alert.type = "success";
        this.alert.show = true;
        // TOLOOK
        setTimeout(() => {
          this.alert.show = false;
        }, 2000);
      },
      showAlertError() {
        this.alert.type = "error";
        this.alert.show = true;
      },
      clearAlert() {
        this.alert.type = "";
        this.alert.text = "";
        this.alert.show = false;
      }
    }
  });
  function ut(e) {
    return e && (e = decodeURIComponent(e), e.charAt(0) === "/" && (e = e.substring(1)), encodeURIComponent(e));
  }
  function Ce(e, t = undefined) {
    var o;
    var r;
    var s;
    var i;
    var l;
    var d;
    let n = "";
    if (((o = e == null ? undefined : e.response) == null ? undefined : o.status) === 400 && typeof ((s = (r = e == null ? undefined : e.response) == null ? undefined : r.data) == null ? undefined : s.message) == "string") {
      n = (l = (i = e == null ? undefined : e.response) == null ? undefined : i.data) == null ? undefined : l.message;
    } else if ((d = e == null ? undefined : e.message) != null && d.includes("DOCUMENT_IN_USE")) {
      n = E.getMessage("validation.invalidDocumentInUse");
    }
    return n || t || E.getMessage("base.defaultErrorMsg");
  }
  const dt = () => ({
    id: "",
    nickName: "",
    email: "",
    fullName: "",
    documentID: null,
    birthDate: null,
    phoneNumber: null,
    password: null,
    documentType: null
  });
  const mt = () => ({
    id: null,
    userId: null,
    country: ""
  });
  const H = ae("personalDataStore", {
    state: () => ({
      loading: false,
      loaded: false,
      countryLoading: false,
      countryLoaded: false,
      model: dt(),
      countryModel: mt(),
      validateDocuments: {
        birthDate: false,
        fullName: false,
        isActivated: false,
        cpfInUse: null,
        emailInUse: false
      },
      appStore: se()
    }),
    getters: {
      hasDocumentId() {
        return !!this.model.documentID;
      },
      isBrazilCountry() {
        return this.countryModel.country === "BR";
      }
    },
    actions: {
      async getInfoIfNotLoaded({
        force: e
      } = {}) {
        if (!(this.model.id && !e)) {
          await this.getInfo();
        }
      },
      async getInfo() {
        if (!this.loading) {
          try {
            this.loading = true;
            const e = O(this.global.appSettings.ENDPOINT_API_PROFILE, "/Users");
            const t = await this.global.$http.get(e);
            if (t.data) {
              this.fillOutForm(this.model, t.data);
            }
            this.loaded = true;
          } catch (e) {
            console.error(e);
          } finally {
            this.loading = false;
          }
        }
      },
      isDocumentTypeCnpj(e) {
        var t;
        return e == "BR" && ((t = this.model.documentID) == null ? undefined : t.replace(/[^\d]/g, "").length) == 14;
      },
      async loadProfileAddressIfNotLoaded({
        force: e
      } = {}) {
        if (!(this.countryModel.id && !e)) {
          await this.loadProfileAddress();
        }
      },
      async loadProfileAddress() {
        if (!this.countryLoading) {
          try {
            this.countryLoading = true;
            const e = O(this.global.appSettings.ENDPOINT_API_PROFILE, "/Addresses");
            const t = await this.global.$http.get(e);
            if (t.data) {
              this.fillOutCountryForm(this.countryModel, t.data);
            }
            this.countryLoaded = true;
          } catch (e) {
            console.error(e);
          } finally {
            this.countryLoading = false;
          }
        }
      },
      async submitForm() {
        try {
          this.hideAlert();
          const e = O(this.global.appSettings.ENDPOINT_API_PROFILE, "/Users");
          if (!this.formattedDocument()) {
            this.appStore.alert.text = E.getMessage("validation.emptyDocument");
            this.showAlert();
            return false;
          }
          const n = {
            id: this.model.id,
            nickName: this.model.nickName,
            name: this.model.fullName,
            documentType: this.model.documentType,
            document: this.formattedDocument(),
            birthdayDate: A(this.model.birthDate || A(), "DD/MM/YYYY").format("YYYY-MM-DDTHH:mm:ss"),
            ignorePhoneNumber: true
          };
          await this.updateCountry();
          await this.global.$http.put(e, n);
          return true;
        } catch (e) {
          this.appStore.alert.text = Ce(e);
          this.showAlert();
          return false;
        }
      },
      async updateCountry() {
        try {
          const e = O(this.global.appSettings.ENDPOINT_API_PROFILE, `/Addresses/${this.countryModel.id}`);
          const t = {
            id: this.countryModel.id,
            country: this.countryModel.country,
            onlyUpdateCountry: true
          };
          await this.global.$http.put(e, t);
        } catch (e) {
          this.appStore.alert.text = Ce(e);
          this.showAlert();
        }
      },
      async validateDocumentInUse(e) {
        var t;
        var n;
        try {
          this.validateDocuments.cpfInUse = null;
          const o = this.formattedDocument();
          if (!o) {
            return;
          }
          const r = O(this.global.appSettings.ENDPOINT_API_PROFILE, `/Users/verify-document/${o}/${e}`);
          await this.global.$http.get(r);
          return false;
        } catch (o) {
          if (((t = o == null ? undefined : o.response) == null ? undefined : t.status) === 302) {
            this.validateDocuments.cpfInUse = this.model.documentID;
            if ((n = o == null ? undefined : o.response) == null) {
              return undefined;
            } else {
              return n.data;
            }
          } else {
            return false;
          }
        }
      },
      async sendRecoveryPassword(e, t) {
        try {
          const n = this.formattedDocument();
          if (!n) {
            return;
          }
          const o = {
            document: n,
            country: e,
            locale: t
          };
          const r = O(this.global.appSettings.ENDPOINT_API_PROFILE, "/Users/recovery-password");
          await this.global.$http.post(r, o);
          return "success";
        } catch (n) {
          console.error(n);
          return "error";
        }
      },
      fillOutForm(e, t) {
        e.id = t.id;
        e.fullName = t.name;
        e.nickName = t.nickName;
        e.birthDate = t.birthdayDate ? A(t.birthdayDate).format("DD/MM/YYYY") : null;
        e.documentID = t.document;
        e.phoneNumber = t.phoneNumber;
      },
      fillOutCountryForm(e, t) {
        e.id = t.id;
        e.userId = t.userId;
        e.country = t.country;
      },
      formattedDocument() {
        if (this.model.documentID != null) {
          return this.model.documentID.replace(/[^\w\s]/g, "");
        } else {
          return null;
        }
      },
      showAlert() {
        this.appStore.alert.show = true;
      },
      hideAlert() {
        this.appStore.alert.show = false;
      }
    }
  });
  const Yn = "";
  const Jn = "";
  const Kn = "";
  const Gn = "";
  const Zn = "";
  const pt = `.pub-alert.el-alert{--el-alert-description-font-size: 13px;--el-alert-close-font-size: 18px}.pub-alert.el-alert .el-alert__description{margin:0}.pub-alert.el-alert .el-alert__content{padding-right:20px}.pub-alert.el-alert .el-alert__icon svg{height:.7em;width:.7em}.pub-alert.el-alert .el-alert__close-btn{top:14px}
`;
  const L = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, r] of t) {
      n[o] = r;
    }
    return n;
  };
  const ft = {
    components: {
      ElAlert: D.ElAlert
    },
    props: {
      type: String
    }
  };
  function ht(e, t, n, o, r, s) {
    const i = a.resolveComponent("el-alert");
    a.openBlock();
    return a.createBlock(i, {
      type: n.type,
      class: "pub-alert",
      "show-icon": "",
      closable: n.type != "success"
    }, {
      default: a.withCtx(() => [a.renderSlot(e.$slots, "default")]),
      _: 3
    }, 8, ["type", "closable"]);
  }
  const ie = L(ft, [["render", ht], ["styles", [pt]]]);
  const yt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ie
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  /*! maska v2.1.9 | (c) Alexander Shabunevich | Released under the MIT license */
  var gt = Object.defineProperty;
  var _t = (e, t, n) => t in e ? gt(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n;
  var Y = (e, t, n) => {
    _t(e, typeof t != "symbol" ? t + "" : t, n);
    return n;
  };
  const De = {
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
  class R {
    constructor(t = {}) {
      Y(this, "opts", {});
      Y(this, "memo", new Map());
      const n = {
        ...t
      };
      if (n.tokens != null) {
        n.tokens = n.tokensReplace ? {
          ...n.tokens
        } : {
          ...De,
          ...n.tokens
        };
        for (const o of Object.values(n.tokens)) {
          if (typeof o.pattern == "string") {
            o.pattern = new RegExp(o.pattern);
          }
        }
      } else {
        n.tokens = De;
      }
      if (Array.isArray(n.mask)) {
        if (n.mask.length > 1) {
          n.mask = [...n.mask].sort((o, r) => o.length - r.length);
        } else {
          n.mask = n.mask[0] ?? "";
        }
      }
      if (n.mask === "") {
        n.mask = null;
      }
      this.opts = n;
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
      const n = this.findMask(t);
      if (this.opts.mask == null || n == null) {
        return false;
      }
      const o = this.process(t, n).length;
      if (typeof this.opts.mask == "string") {
        return o >= this.opts.mask.length;
      } else if (typeof this.opts.mask == "function") {
        return o >= n.length;
      } else {
        return this.opts.mask.filter(r => o >= r.length).length === this.opts.mask.length;
      }
    }
    findMask(t) {
      const n = this.opts.mask;
      if (n == null) {
        return null;
      }
      if (typeof n == "string") {
        return n;
      }
      if (typeof n == "function") {
        return n(t);
      }
      const o = this.process(t, n.slice(-1).pop() ?? "", false);
      return n.find(r => this.process(t, r, false).length >= o.length) ?? "";
    }
    escapeMask(t) {
      const n = [];
      const o = [];
      t.split("").forEach((r, s) => {
        if (r === "!" && t[s - 1] !== "!") {
          o.push(s - o.length);
        } else {
          n.push(r);
        }
      });
      return {
        mask: n.join(""),
        escaped: o
      };
    }
    process(t, n, o = true) {
      var r;
      if (n == null) {
        return t;
      }
      const s = `value=${t},mask=${n},masked=${o ? 1 : 0}`;
      if (this.memo.has(s)) {
        return this.memo.get(s);
      }
      const {
        mask: i,
        escaped: l
      } = this.escapeMask(n);
      const d = [];
      const u = this.opts.tokens != null ? this.opts.tokens : {};
      const c = this.isReversed() ? -1 : 1;
      const m = this.isReversed() ? "unshift" : "push";
      const g = this.isReversed() ? 0 : i.length - 1;
      const y = this.isReversed() ? () => p > -1 && f > -1 : () => p < i.length && f < t.length;
      const b = v => !this.isReversed() && v <= g || this.isReversed() && v >= g;
      let h;
      let S = -1;
      let p = this.isReversed() ? i.length - 1 : 0;
      let f = this.isReversed() ? t.length - 1 : 0;
      for (; y();) {
        const v = i.charAt(p);
        const w = u[v];
        const C = (w == null ? undefined : w.transform) != null ? w.transform(t.charAt(f)) : t.charAt(f);
        if (!l.includes(p) && w != null) {
          if (C.match(w.pattern) != null) {
            d[m](C);
            if (w.repeated) {
              if (S === -1) {
                S = p;
              } else if (p === g && p !== S) {
                p = S - c;
              }
              if (g === S) {
                p -= c;
              }
            } else if (w.multiple) {
              p -= c;
            }
            p += c;
          } else if (w.multiple) {
            const k = ((r = d[f - c]) == null ? undefined : r.match(w.pattern)) != null;
            const _ = i.charAt(p + c);
            if (k && _ !== "" && u[_] == null) {
              p += c;
              f -= c;
            } else {
              d[m]("");
            }
          } else if (C === h) {
            h = undefined;
          } else if (w.optional) {
            p += c;
            f -= c;
          }
          f += c;
        } else {
          if (o && !this.isEager()) {
            d[m](v);
          }
          if (C === v && !this.isEager()) {
            f += c;
          } else {
            h = v;
          }
          if (!this.isEager()) {
            p += c;
          }
        }
        if (this.isEager()) {
          for (; b(p) && (u[i.charAt(p)] == null || l.includes(p));) {
            if (o) {
              d[m](i.charAt(p));
            } else if (i.charAt(p) === t.charAt(f)) {
              f += c;
            }
            p += c;
          }
        }
      }
      this.memo.set(s, d.join(""));
      return this.memo.get(s);
    }
  }
  const ke = e => JSON.parse(e.replaceAll("'", "\""));
  const Se = (e, t = {}) => {
    const n = {
      ...t
    };
    if (e.dataset.maska != null && e.dataset.maska !== "") {
      n.mask = bt(e.dataset.maska);
    }
    if (e.dataset.maskaEager != null) {
      n.eager = le(e.dataset.maskaEager);
    }
    if (e.dataset.maskaReversed != null) {
      n.reversed = le(e.dataset.maskaReversed);
    }
    if (e.dataset.maskaTokensReplace != null) {
      n.tokensReplace = le(e.dataset.maskaTokensReplace);
    }
    if (e.dataset.maskaTokens != null) {
      n.tokens = vt(e.dataset.maskaTokens);
    }
    return n;
  };
  const le = e => e !== "" ? !!JSON.parse(e) : true;
  const bt = e => e.startsWith("[") && e.endsWith("]") ? ke(e) : e;
  const vt = e => {
    if (e.startsWith("{") && e.endsWith("}")) {
      return ke(e);
    }
    const t = {};
    e.split("|").forEach(n => {
      const o = n.split(":");
      t[o[0]] = {
        pattern: new RegExp(o[1]),
        optional: o[2] === "optional",
        multiple: o[2] === "multiple",
        repeated: o[2] === "repeated"
      };
    });
    return t;
  };
  class zt {
    constructor(t, n = {}) {
      Y(this, "items", new Map());
      Y(this, "beforeinputEvent", o => {
        const r = o.target;
        const s = this.items.get(r);
        if (s.isEager() && "inputType" in o && o.inputType.startsWith("delete") && s.unmasked(r.value).length <= 1) {
          this.setMaskedValue(r, "");
        }
      });
      Y(this, "inputEvent", o => {
        if (o instanceof CustomEvent && o.type === "input" && o.detail != null && typeof o.detail == "object" && "masked" in o.detail) {
          return;
        }
        const r = o.target;
        const s = this.items.get(r);
        const i = r.value;
        const l = r.selectionStart;
        const d = r.selectionEnd;
        let u = i;
        if (s.isEager()) {
          const c = s.masked(i);
          const m = s.unmasked(i);
          if (m === "" && "data" in o && o.data != null) {
            u = o.data;
          } else if (m !== s.unmasked(c)) {
            u = m;
          }
        }
        this.setMaskedValue(r, u);
        if ("inputType" in o && (o.inputType.startsWith("delete") || l != null && l < i.length)) {
          try {
            r.setSelectionRange(l, d);
          } catch {}
        }
      });
      this.options = n;
      if (typeof t == "string") {
        this.init(Array.from(document.querySelectorAll(t)), this.getMaskOpts(n));
      } else {
        this.init("length" in t ? Array.from(t) : [t], this.getMaskOpts(n));
      }
    }
    destroy() {
      for (const t of this.items.keys()) {
        t.removeEventListener("input", this.inputEvent);
        t.removeEventListener("beforeinput", this.beforeinputEvent);
      }
      this.items.clear();
    }
    needUpdateOptions(t, n) {
      const o = this.items.get(t);
      const r = new R(Se(t, this.getMaskOpts(n)));
      return JSON.stringify(o.opts) !== JSON.stringify(r.opts);
    }
    needUpdateValue(t) {
      const n = t.dataset.maskaValue;
      return n == null && t.value !== "" || n != null && n !== t.value;
    }
    getMaskOpts(t) {
      const {
        onMaska: n,
        preProcess: o,
        postProcess: r,
        ...s
      } = t;
      return s;
    }
    init(t, n) {
      for (const o of t) {
        const r = new R(Se(o, n));
        this.items.set(o, r);
        if (o.value !== "") {
          this.setMaskedValue(o, o.value);
        }
        o.addEventListener("input", this.inputEvent);
        o.addEventListener("beforeinput", this.beforeinputEvent);
      }
    }
    setMaskedValue(t, n) {
      const o = this.items.get(t);
      if (this.options.preProcess != null) {
        n = this.options.preProcess(n);
      }
      const r = o.masked(n);
      const s = o.unmasked(o.isEager() ? r : n);
      const i = o.completed(n);
      const l = {
        masked: r,
        unmasked: s,
        completed: i
      };
      n = r;
      if (this.options.postProcess != null) {
        n = this.options.postProcess(n);
      }
      t.value = n;
      t.dataset.maskaValue = n;
      if (this.options.onMaska != null) {
        if (Array.isArray(this.options.onMaska)) {
          this.options.onMaska.forEach(d => d(l));
        } else {
          this.options.onMaska(l);
        }
      }
      t.dispatchEvent(new CustomEvent("maska", {
        detail: l
      }));
      t.dispatchEvent(new CustomEvent("input", {
        detail: l
      }));
    }
  }
  const ce = new WeakMap();
  const wt = e => {
    // TOLOOK
    setTimeout(() => {
      var t;
      if (((t = ce.get(e)) == null ? undefined : t.needUpdateValue(e)) === true) {
        e.dispatchEvent(new CustomEvent("input"));
      }
    });
  };
  const xe = (e, t) => {
    const n = e instanceof HTMLInputElement ? e : e.querySelector("input");
    const o = {
      ...t.arg
    };
    if (n == null) {
      return;
    }
    wt(n);
    const r = ce.get(n);
    if (r != null) {
      if (!r.needUpdateOptions(n, o)) {
        return;
      }
      r.destroy();
    }
    if (t.value != null) {
      const s = t.value;
      const i = l => {
        s.masked = l.masked;
        s.unmasked = l.unmasked;
        s.completed = l.completed;
      };
      o.onMaska = o.onMaska == null ? i : Array.isArray(o.onMaska) ? [...o.onMaska, i] : [o.onMaska, i];
    }
    ce.set(n, new zt(n, o));
  };
  const Xn = "";
  const Qn = "";
  const eo = "";
  const Ie = {
    cpf: {
      value: "###.###.###-##",
      instance: new R({
        mask: "###.###.###-##"
      })
    },
    cnpj: {
      value: "##.###.###/####-##",
      instance: new R({
        mask: "##.###.###/####-##"
      })
    },
    phone: {
      value: "(##) #####-####",
      instance: new R({
        mask: "(##) #####-####"
      })
    },
    cep: {
      value: "#####-###",
      instance: new R({
        mask: "#####-###"
      })
    },
    calendar: {
      value: "##/##/####",
      instance: new R({
        mask: "##/##/####"
      })
    }
  };
  var Ct = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function Dt(e) {
    if (e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")) {
      return e.default;
    } else {
      return e;
    }
  }
  var ue = {};
  var kt = {
    get exports() {
      return ue;
    },
    set exports(e) {
      ue = e;
    }
  };
  (function (e, t) {
    (function (n, o) {
      e.exports = o();
    })(Ct, function () {
      return function (n) {
        function o(s) {
          if (r[s]) {
            return r[s].exports;
          }
          var i = r[s] = {
            i: s,
            l: false,
            exports: {}
          };
          n[s].call(i.exports, i, i.exports, o);
          i.l = true;
          return i.exports;
        }
        var r = {};
        o.m = n;
        o.c = r;
        o.i = function (s) {
          return s;
        };
        o.d = function (s, i, l) {
          if (!o.o(s, i)) {
            Object.defineProperty(s, i, {
              configurable: false,
              enumerable: true,
              get: l
            });
          }
        };
        o.n = function (s) {
          var i = s && s.__esModule ? function () {
            return s.default;
          } : function () {
            return s;
          };
          o.d(i, "a", i);
          return i;
        };
        o.o = function (s, i) {
          return Object.prototype.hasOwnProperty.call(s, i);
        };
        o.p = "/vue-jwt-decode/dist";
        return o(o.s = 10);
      }([function (n, o, r) {
        n.exports = !r(1)(function () {
          return Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            }
          }).a != 7;
        });
      }, function (n, o) {
        n.exports = function (r) {
          try {
            return !!r();
          } catch {
            return true;
          }
        };
      }, function (n, o) {
        var r = n.exports = typeof window !== "undefined" && window.Math == Math ? window : typeof self !== "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") {
          __g = r;
        }
      }, function (n, o) {
        n.exports = function (r) {
          if (typeof r == "object") {
            return r !== null;
          } else {
            return typeof r == "function";
          }
        };
      }, function (n, o) {
        var r = n.exports = {
          version: "2.5.3"
        };
        if (typeof __e == "number") {
          __e = r;
        }
      }, function (n, o) {
        n.exports = function (r) {
          if (r == null) {
            throw TypeError("Can't call method on  " + r);
          }
          return r;
        };
      }, function (n, o, r) {
        var s = r(16);
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (i) {
          if (s(i) == "String") {
            return i.split("");
          } else {
            return Object(i);
          }
        };
      }, function (n, o) {
        var r = Math.ceil;
        var s = Math.floor;
        n.exports = function (i) {
          if (isNaN(i = +i)) {
            return 0;
          } else {
            return (i > 0 ? s : r)(i);
          }
        };
      }, function (n, o, r) {
        var s = r(6);
        var i = r(5);
        n.exports = function (l) {
          return s(i(l));
        };
      }, function (n, o, r) {
        var s = r(11);
        var i = r.n(s);
        o.a = {
          install: function (l) {
            l.prototype.$jwtDec = this;
            l.jwtDec = this;
          },
          decode: function (l) {
            if (typeof l != "string" & !l instanceof String) {
              return null;
            }
            var d = l.split(".");
            if (d.length < 2) {
              return null;
            }
            var u = JSON.parse(atob(d[0]));
            var c = JSON.parse(atob(d[1]));
            return i()({}, u, c);
          }
        };
      }, function (n, o, r) {
        Object.defineProperty(o, "__esModule", {
          value: true
        });
        var s = r(9);
        o.default = s.a;
      }, function (n, o, r) {
        n.exports = {
          default: r(12),
          __esModule: true
        };
      }, function (n, o, r) {
        r(38);
        n.exports = r(4).Object.assign;
      }, function (n, o) {
        n.exports = function (r) {
          if (typeof r != "function") {
            throw TypeError(r + " is not a function!");
          }
          return r;
        };
      }, function (n, o, r) {
        var s = r(3);
        n.exports = function (i) {
          if (!s(i)) {
            throw TypeError(i + " is not an object!");
          }
          return i;
        };
      }, function (n, o, r) {
        var s = r(8);
        var i = r(34);
        var l = r(33);
        n.exports = function (d) {
          return function (u, c, m) {
            var g;
            var y = s(u);
            var b = i(y.length);
            var h = l(m, b);
            if (d && c != c) {
              for (; b > h;) {
                if ((g = y[h++]) != g) {
                  return true;
                }
              }
            } else {
              for (; b > h; h++) {
                if ((d || h in y) && y[h] === c) {
                  return d || h || 0;
                }
              }
            }
            return !d && -1;
          };
        };
      }, function (n, o) {
        var r = {}.toString;
        n.exports = function (s) {
          return r.call(s).slice(8, -1);
        };
      }, function (n, o, r) {
        var s = r(13);
        n.exports = function (i, l, d) {
          s(i);
          if (l === undefined) {
            return i;
          }
          switch (d) {
            case 1:
              return function (u) {
                return i.call(l, u);
              };
            case 2:
              return function (u, c) {
                return i.call(l, u, c);
              };
            case 3:
              return function (u, c, m) {
                return i.call(l, u, c, m);
              };
          }
          return function () {
            return i.apply(l, arguments);
          };
        };
      }, function (n, o, r) {
        var s = r(3);
        var i = r(2).document;
        var l = s(i) && s(i.createElement);
        n.exports = function (d) {
          if (l) {
            return i.createElement(d);
          } else {
            return {};
          }
        };
      }, function (n, o) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      }, function (n, o, r) {
        var s = r(2);
        var i = r(4);
        var l = r(17);
        var d = r(22);
        function u(c, m, g) {
          var y;
          var b;
          var h;
          var S = c & u.F;
          var p = c & u.G;
          var f = c & u.S;
          var v = c & u.P;
          var w = c & u.B;
          var C = c & u.W;
          var k = p ? i : i[m] || (i[m] = {});
          var _ = k.prototype;
          var z = p ? s : f ? s[m] : (s[m] || {}).prototype;
          if (p) {
            g = m;
          }
          for (y in g) {
            if (!((b = !S && z && z[y] !== undefined) && y in k)) {
              h = b ? z[y] : g[y];
              k[y] = p && typeof z[y] != "function" ? g[y] : w && b ? l(h, s) : C && z[y] == h ? function (x) {
                function F(T, te, fe) {
                  if (this instanceof x) {
                    switch (arguments.length) {
                      case 0:
                        return new x();
                      case 1:
                        return new x(T);
                      case 2:
                        return new x(T, te);
                    }
                    return new x(T, te, fe);
                  }
                  return x.apply(this, arguments);
                }
                F.prototype = x.prototype;
                return F;
              }(h) : v && typeof h == "function" ? l(Function.call, h) : h;
              if (v) {
                (k.virtual || (k.virtual = {}))[y] = h;
                if (c & u.R && _ && !_[y]) {
                  d(_, y, h);
                }
              }
            }
          }
        }
        u.F = 1;
        u.G = 2;
        u.S = 4;
        u.P = 8;
        u.B = 16;
        u.W = 32;
        u.U = 64;
        u.R = 128;
        n.exports = u;
      }, function (n, o) {
        var r = {}.hasOwnProperty;
        n.exports = function (s, i) {
          return r.call(s, i);
        };
      }, function (n, o, r) {
        var s = r(25);
        var i = r(30);
        n.exports = r(0) ? function (l, d, u) {
          return s.f(l, d, i(1, u));
        } : function (l, d, u) {
          l[d] = u;
          return l;
        };
      }, function (n, o, r) {
        n.exports = !r(0) && !r(1)(function () {
          return Object.defineProperty(r(18)("div"), "a", {
            get: function () {
              return 7;
            }
          }).a != 7;
        });
      }, function (n, o, r) {
        var s = r(28);
        var i = r(26);
        var l = r(29);
        var d = r(35);
        var u = r(6);
        var c = Object.assign;
        n.exports = !c || r(1)(function () {
          var m = {};
          var g = {};
          var y = Symbol();
          var b = "abcdefghijklmnopqrst";
          m[y] = 7;
          b.split("").forEach(function (h) {
            g[h] = h;
          });
          return c({}, m)[y] != 7 || Object.keys(c({}, g)).join("") != b;
        }) ? function (m, g) {
          for (var y = d(m), b = arguments.length, h = 1, S = i.f, p = l.f; b > h;) {
            for (var f, v = u(arguments[h++]), w = S ? s(v).concat(S(v)) : s(v), C = w.length, k = 0; C > k;) {
              if (p.call(v, f = w[k++])) {
                y[f] = v[f];
              }
            }
          }
          return y;
        } : c;
      }, function (n, o, r) {
        var s = r(14);
        var i = r(23);
        var l = r(36);
        var d = Object.defineProperty;
        o.f = r(0) ? Object.defineProperty : function (u, c, m) {
          s(u);
          c = l(c, true);
          s(m);
          if (i) {
            try {
              return d(u, c, m);
            } catch {}
          }
          if ("get" in m || "set" in m) {
            throw TypeError("Accessors not supported!");
          }
          if ("value" in m) {
            u[c] = m.value;
          }
          return u;
        };
      }, function (n, o) {
        o.f = Object.getOwnPropertySymbols;
      }, function (n, o, r) {
        var s = r(21);
        var i = r(8);
        var l = r(15)(false);
        var d = r(31)("IE_PROTO");
        n.exports = function (u, c) {
          var m;
          var g = i(u);
          var y = 0;
          var b = [];
          for (m in g) {
            if (m != d && s(g, m)) {
              b.push(m);
            }
          }
          for (; c.length > y;) {
            if (s(g, m = c[y++])) {
              if (!~l(b, m)) {
                b.push(m);
              }
            }
          }
          return b;
        };
      }, function (n, o, r) {
        var s = r(27);
        var i = r(19);
        n.exports = Object.keys || function (l) {
          return s(l, i);
        };
      }, function (n, o) {
        o.f = {}.propertyIsEnumerable;
      }, function (n, o) {
        n.exports = function (r, s) {
          return {
            enumerable: !(r & 1),
            configurable: !(r & 2),
            writable: !(r & 4),
            value: s
          };
        };
      }, function (n, o, r) {
        var s = r(32)("keys");
        var i = r(37);
        n.exports = function (l) {
          return s[l] || (s[l] = i(l));
        };
      }, function (n, o, r) {
        var s = r(2);
        var i = s["__core-js_shared__"] || (s["__core-js_shared__"] = {});
        n.exports = function (l) {
          return i[l] || (i[l] = {});
        };
      }, function (n, o, r) {
        var s = r(7);
        var i = Math.max;
        var l = Math.min;
        n.exports = function (d, u) {
          d = s(d);
          if (d < 0) {
            return i(d + u, 0);
          } else {
            return l(d, u);
          }
        };
      }, function (n, o, r) {
        var s = r(7);
        var i = Math.min;
        n.exports = function (l) {
          if (l > 0) {
            return i(s(l), 9007199254740991);
          } else {
            return 0;
          }
        };
      }, function (n, o, r) {
        var s = r(5);
        n.exports = function (i) {
          return Object(s(i));
        };
      }, function (n, o, r) {
        var s = r(3);
        n.exports = function (i, l) {
          if (!s(i)) {
            return i;
          }
          var d;
          var u;
          if (l && typeof (d = i.toString) == "function" && !s(u = d.call(i)) || typeof (d = i.valueOf) == "function" && !s(u = d.call(i)) || !l && typeof (d = i.toString) == "function" && !s(u = d.call(i))) {
            return u;
          }
          throw TypeError("Can't convert object to primitive value");
        };
      }, function (n, o) {
        var r = 0;
        var s = Math.random();
        n.exports = function (i) {
          return `Symbol(${i === undefined ? "" : i})_${(++r + s).toString(36)}`;
        };
      }, function (n, o, r) {
        var s = r(20);
        s(s.S + s.F, "Object", {
          assign: r(24)
        });
      }]);
    });
  })(kt);
  const St = Dt(ue);
  const Ee = ae("auth", {
    getters: {
      jwt: e => St.decode(e.global.token),
      currentUserId() {
        var e;
        return parseInt((e = this.jwt) == null ? undefined : e.uid);
      },
      currentUseName() {
        var e;
        return parseInt((e = this.jwt) == null ? undefined : e.uid);
      },
      roles() {
        var e;
        return he.castArray((e = this.jwt) == null ? undefined : e.role).filter(t => t);
      },
      isCreator() {
        return this.roles.includes("Creator") && this.claims.includes("HasTraditionalBankAccount");
      },
      claims() {
        var t;
        var n;
        var o;
        var r;
        return ((t = this.jwt) != null && t.claim && Array.isArray((n = this.jwt) == null ? undefined : n.claim) ? (o = this.jwt) == null ? undefined : o.claim : [(r = this.jwt) == null ? undefined : r.claim]).filter(s => s);
      }
    }
  });
  const xt = 576;
  function It(e, t = true) {
    if (!e) {
      return !t;
    }
    e = e.toString();
    e = e.replace(/\D/g, "");
    if (e.toString().length != 11 || /^(\d)\1{10}$/.test(e)) {
      return false;
    }
    var n = true;
    [9, 10].forEach(function (o) {
      var r = 0;
      var s;
      e.split(/(?=)/).splice(0, o).forEach(function (i, l) {
        r += parseInt(i) * (o + 2 - (l + 1));
      });
      s = r % 11;
      s = s < 2 ? 0 : 11 - s;
      if (s != e.substring(o, o + 1)) {
        n = false;
      }
    });
    return n;
  }
  function Ne() {
    return window.innerWidth < xt;
  }
  function J(e) {
    return (e == null ? undefined : e.toString().toLocaleLowerCase()) === "true" || e === true;
  }
  function Et(e) {
    if (e) {
      if (typeof e == "object") {
        return e;
      } else {
        return JSON.parse(e);
      }
    } else {
      return {};
    }
  }
  function Nt(e) {
    const t = e ? atob(e) : undefined;
    return Et(t);
  }
  function Pt(e) {
    for (const t in e) {
      if (Ot(e[t])) {
        e[t] = e[t].replace(/\?&/g, "");
      }
    }
  }
  function Ot(e) {
    return e && typeof e == "string" && e.startsWith("http");
  }
  const $ = {
    requiredField: {
      required: true,
      message: () => E.getMessage("validation.requiredField"),
      trigger: ["blur", "change"]
    },
    validateCPF: ({
      required: e
    } = {}) => ({
      validator: (t, n) => It(n, e),
      message: () => E.getMessage("validation.invalidCpf")
    }),
    validateSameCpfInUse: ({
      validateDocuments: e
    } = {}) => ({
      validator: (t, n) => n ? e.cpfInUse != n : true,
      message: () => E.getMessage("validation.invalidCpfInUse")
    })
  };
  a.computed(() => {
    var e;
    var t;
    if ((e = E.currentLocale) != null && e.startsWith("pt")) {
      return Ye;
    }
    if ((t = E.currentLocale) != null && t.startsWith("es")) {
      return Je;
    }
  });
  var Mt = {
    prefix: "fat",
    iconName: "calendar-days",
    icon: [448, 512, ["calendar-alt"], "f073", "M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8V64H64C28.7 64 0 92.7 0 128v48 16 96 16 96 16 32c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V416 400 304 288 192 176 128c0-35.3-28.7-64-64-64H336V8c0-4.4-3.6-8-8-8s-8 3.6-8 8V64H128V8zM432 288H304V192H432v96zM288 192v96H160V192H288zm-144 0v96H16V192H144zM16 304H144v96H16V304zm0 112H144v80H64c-26.5 0-48-21.5-48-48V416zm144 80V416H288v80H160zm144 0V416H432v32c0 26.5-21.5 48-48 48H304zm128-96H304V304H432v96zM112 80v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80H320v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H16V128c0-26.5 21.5-48 48-48h48zM288 400H160V304H288v96z"]
  };
  var At = {
    prefix: "fat",
    iconName: "file-signature",
    icon: [576, 512, [], "f573", "M64 496H320c26.5 0 48-21.5 48-48V433.3l7.5-1.9c2.9-.7 5.8-1.7 8.5-2.8V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H204.1c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c9 9 14.1 21.2 14.1 33.9v23.5l-16 16V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64C37.5 16 16 37.5 16 64V448c0 26.5 21.5 48 48 48zM358.6 157.3L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4V136c0 13.3 10.7 24 24 24H361.1c-.8-1-1.6-1.9-2.4-2.7zM128 328c-1.1 0-2.1 .7-2.4 1.8l-15.5 56.7C105.4 403.9 89.6 416 71.6 416H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h7.6c10.8 0 20.3-7.2 23.2-17.7l15.5-56.7c2.2-8 9.5-13.6 17.8-13.6s15.6 5.6 17.8 13.6l19.4 71.1 21.9-38.3c5.1-8.9 14.6-14.5 24.9-14.5s19.8 5.5 24.9 14.5l16.8 29.5C258 395.4 266 400 274.6 400H288c0-1.3 .1-2.7 .5-4l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L493.2 139.7c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L382.9 391.9c-4.1 4.1-9.2 7-14.9 8.4l-3.4-13.6 3.4 13.6-60.1 15c-.6 .1-1.1 .3-1.7 .3c-.7 .2-1.4 .3-2.2 .3H274.6c-14.4 0-27.6-7.7-34.7-20.2L223 366.4c-2.3-3.9-6.5-6.4-11-6.4s-8.8 2.4-11 6.4L176.7 409c-2.5 4.3-7.1 7-12.1 7c-6.3 0-11.8-4.2-13.5-10.3l-20.7-75.9c-.3-1.1-1.3-1.8-2.4-1.8zm180.4 54.3L304 399.8l17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2L514.4 237.7l-48.3-48.3L323.2 332.3c-2 2.1-3.5 4.6-4.2 7.4l-10.6 42.5zM552.8 199.4c9.4-9.4 9.4-24.6 0-33.9L538.4 151c-9.4-9.4-24.6-9.4-33.9 0l-27.1 27.1 48.3 48.3 27.1-27.1z"]
  };
  var Pe = {
    prefix: "fat",
    iconName: "id-card",
    icon: [576, 512, [62147, "drivers-license"], "f2c2", "M64 48C37.5 48 16 69.5 16 96v16H560V96c0-26.5-21.5-48-48-48H64zM16 128V416c0 26.5 21.5 48 48 48H512c26.5 0 48-21.5 48-48V128H16zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM192 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM152 352c-30.9 0-56 25.1-56 56c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72h80c39.8 0 72 32.2 72 72c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9-25.1-56-56-56H152zM352 232c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8z"]
  };
  var Vt = {
    prefix: "fat",
    iconName: "earth-americas",
    icon: [512, 512, [127758, "earth", "earth-america", "globe-americas"], "f57d", "M256 496C123.5 496 16 388.5 16 256c0-23.3 3.3-45.8 9.5-67.1l19.2 38.3c8.8 17.5 24.2 30.7 42.9 36.5l68.8 21.5c16.4 5.1 27.6 20.3 27.6 37.5v11.3c0 14 7.9 26.8 20.4 33c7.1 3.5 11.6 10.8 11.6 18.7v39c0 21.6 17.5 39.1 39.1 39.1c18.3 0 34.2-12.7 38.1-30.6l4.9-22.1c3.1-14.1 12.1-26.2 24.6-33.4l9-5.2c17.4-10 28.2-28.5 28.2-48.6v-8.3c0-14.9-5.9-29.1-16.4-39.6l-3.9-3.9C329.2 261.9 315 256 300.1 256H251.3c-6.2 0-12.3-1.4-17.9-4.2l-45.9-22.9c-3.6-1.8-6.6-4.8-8.4-8.4l-.7-1.4c-4.3-8.5-.8-18.9 7.7-23.2c4.1-2.1 8.9-2.4 13.2-.9l24.2 8.1c11.6 3.9 24.3-.5 31.1-10.7c6.7-10 6-23.2-1.7-32.4l-17.9-21.5c-5-6-4.9-14.7 .1-20.7l21-24.5c10.5-12.2 12.6-29.5 5.4-43.9L245.1 16.2c3.6-.2 7.3-.2 10.9-.2c87.2 0 163.5 46.5 205.5 116l-54.6 24.8c-18.6 8.5-27.9 29.6-21.4 49.1L403 258.3c4.2 12.7 14.5 22.4 27.4 25.9L491.8 301C470.7 412 373.2 496 256 496zM32.8 167.7C64.7 87.2 138.8 28 227.9 17.6l19.5 38.9c4.3 8.6 3 19-3.2 26.4l-21 24.5c-10.2 11.9-10.3 29.3-.3 41.3l17.9 21.5c3.1 3.8 3.4 9.2 .7 13.3c-2.8 4.2-8 6-12.7 4.4l-24.2-8.1c-8.4-2.8-17.5-2.1-25.4 1.8c-16.4 8.2-23.1 28.2-14.9 44.7l.7 1.4c3.4 6.7 8.8 12.2 15.6 15.6l45.9 22.9c7.8 3.9 16.4 5.9 25 5.9h48.8c10.6 0 20.8 4.2 28.3 11.7l3.9 3.9c7.5 7.5 11.7 17.7 11.7 28.3v8.3c0 14.4-7.7 27.6-20.2 34.7l-9.1 5.2c-16.5 9.4-28.2 25.3-32.3 43.8l-4.9 22.1c-2.3 10.6-11.7 18.1-22.5 18.1c-12.7 0-23.1-10.3-23.1-23.1v-39c0-14-7.9-26.8-20.4-33c-7.1-3.5-11.6-10.8-11.6-18.7V322.8c0-24.2-15.7-45.6-38.8-52.8L92.4 248.5c-14.5-4.5-26.6-14.8-33.4-28.4L32.8 167.7zM434.6 268.8c-7.7-2.1-13.9-8-16.5-15.6l-17.5-52.4c-3.9-11.7 1.7-24.4 12.8-29.4L469.4 146c17 33 26.6 70.4 26.6 110c0 9.8-.6 19.5-1.7 29.1l-59.6-16.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]
  };
  const to = "";
  const no = "";
  const oo = "";
  const ro = "";
  const ao = "";
  const so = "";
  const Tt = {
    inject: ["appSettings", "$http", "ready"],
    emits: ["country-updated"],
    props: {
      defaultCountry: String,
      allCountries: {
        type: Boolean,
        default: false
      },
      disabledCountry: {
        type: Boolean,
        default: false
      }
    },
    components: {
      ElFormItem: D.ElFormItem,
      ElSelect: D.ElSelect,
      ElOption: D.ElOption
    },
    setup() {
      const {
        t: e
      } = B();
      const t = H();
      return {
        t: e,
        faEarthAmericas: Vt,
        personalDataStore: t
      };
    },
    data() {
      return {
        disabled: false,
        optionsCountries: []
      };
    },
    computed: {
      allDataLoaded() {
        return this.personalDataStore.loaded && this.personalDataStore.countryLoaded;
      }
    },
    watch: {
      allDataLoaded: {
        immediate: true,
        async handler(e, t) {
          if (e && !t) {
            this.disabled = this.personalDataStore.isBrazilCountry && this.personalDataStore.hasDocumentId;
          }
        }
      },
      defaultCountry: {
        immediate: true,
        handler(e) {
          if (e === "BR") {
            this.personalDataStore.countryModel.country = e;
          }
        }
      },
      "personalDataStore.countryModel.country": {
        immediate: true,
        handler(e) {
          this.$emit("country-updated", {
            country: e
          });
        }
      }
    },
    mounted() {
      if (this.ready) {
        this.getAllCountries();
      }
    },
    methods: {
      async getAllCountries() {
        try {
          const e = O(this.appSettings.ENDPOINT_API_UTIL, "/location/getallcountries");
          const t = await this.$http.get(e);
          this.optionsCountries = (t == null ? undefined : t.data) || [];
        } catch (e) {
          console.error(e);
        }
      }
    }
  };
  const jt = {
    class: "col-12 mt-3"
  };
  function Lt(e, t, n, o, r, s) {
    const i = a.resolveComponent("el-option");
    const l = a.resolveComponent("font-awesome-icon");
    const d = a.resolveComponent("el-select");
    const u = a.resolveComponent("el-form-item");
    a.openBlock();
    return a.createElementBlock("div", jt, [a.createVNode(u, {
      prop: "country",
      class: "form-group",
      label: o.t("personalAddress.country")
    }, {
      default: a.withCtx(() => [a.createVNode(d, {
        modelValue: o.personalDataStore.countryModel.country,
        "onUpdate:modelValue": t[0] || (t[0] = c => o.personalDataStore.countryModel.country = c),
        filterable: "",
        size: "large",
        teleported: false,
        disabled: r.disabled || n.disabledCountry,
        placeholder: o.t("personalAddress.country")
      }, {
        prefix: a.withCtx(() => [a.createVNode(l, {
          class: "icon-font",
          icon: o.faEarthAmericas
        }, null, 8, ["icon"])]),
        default: a.withCtx(() => [(a.openBlock(true), a.createElementBlock(a.Fragment, null, a.renderList(r.optionsCountries, (c, m) => {
          a.openBlock();
          return a.createBlock(i, {
            label: c,
            key: m,
            value: m
          }, null, 8, ["label", "value"]);
        }), 128))]),
        _: 1
      }, 8, ["modelValue", "disabled", "placeholder"])]),
      _: 1
    }, 8, ["label"])]);
  }
  const Oe = L(Tt, [["render", Lt]]);
  const Ft = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Oe
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Bt = `.el-dialog__body{padding-top:0;padding-bottom:0}.el-form-item__label{font-size:12.8px!important}
`;
  const Rt = {
    inject: ["locale"],
    components: {
      ElButton: D.ElButton,
      ElDialog: D.ElDialog,
      ElInput: D.ElInput,
      ElFormItem: D.ElFormItem,
      AlertText: ie
    },
    emits: ["update:modelValue"],
    props: {
      modelValue: Boolean,
      email: String,
      currentCountry: String
    },
    setup() {
      const {
        t: e
      } = B();
      const t = H();
      return {
        t: e,
        faEnvelope: P.faEnvelope,
        personalDataStore: t
      };
    },
    data() {
      return {
        loading: false,
        remainingTime: 0,
        interval: null,
        type: null
      };
    },
    methods: {
      close() {
        this.$emit("update:modelValue", false);
        this.type = null;
      },
      async send() {
        this.loading = true;
        this.remainingTime = 30;
        this.type = await this.personalDataStore.sendRecoveryPassword(this.currentCountry, this.locale);
        this.interval = // TOLOOK
        setInterval(() => {
          if (this.remainingTime > 0) {
            this.remainingTime -= 1;
          } else {
            this.loading = false;
          }
        }, 1000);
      }
    }
  };
  const Ut = {
    class: "text-center mb-3"
  };
  const Ht = ["innerHTML"];
  const $t = {
    class: "dialog-footer"
  };
  function qt(e, t, n, o, r, s) {
    const i = a.resolveComponent("font-awesome-icon");
    const l = a.resolveComponent("el-input");
    const d = a.resolveComponent("el-form-item");
    const u = a.resolveComponent("el-button");
    const c = a.resolveComponent("AlertText");
    const m = a.resolveComponent("el-dialog");
    a.openBlock();
    return a.createBlock(m, {
      "lock-scroll": "",
      width: "100%",
      style: {
        "max-width": "400px"
      },
      title: o.t("title.recoveryPassword"),
      modelValue: n.modelValue,
      "align-center": true,
      "onUpdate:modelValue": t[0] || (t[0] = g => s.close())
    }, {
      footer: a.withCtx(() => [a.createElementVNode("div", $t, [a.createVNode(u, {
        class: "btn-primary mt-1 mt-sm-0",
        style: {
          height: "42px"
        },
        disabled: r.loading,
        loading: r.loading,
        onClick: s.send
      }, {
        default: a.withCtx(() => [a.createElementVNode("span", null, a.toDisplayString(r.loading ? `${r.remainingTime} seg` : o.t("base.btnSend")), 1)]),
        _: 1
      }, 8, ["disabled", "loading", "onClick"]), a.createVNode(u, {
        class: "btn-secondary mt-1 mt-sm-0",
        style: {
          height: "42px"
        },
        onClick: s.close
      }, {
        default: a.withCtx(() => [a.createElementVNode("span", null, a.toDisplayString(o.t("base.btnCancel")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      default: a.withCtx(() => [a.createElementVNode("div", Ut, [a.createElementVNode("span", {
        innerHTML: o.t("information.recoveryPassword")
      }, null, 8, Ht)]), a.createVNode(d, {
        class: "form-group",
        label: o.t("personalData.email")
      }, {
        default: a.withCtx(() => [a.createVNode(l, {
          placeholder: n.email,
          disabled: true
        }, {
          prefix: a.withCtx(() => [a.createVNode(i, {
            icon: o.faEnvelope
          }, null, 8, ["icon"])]),
          _: 1
        }, 8, ["placeholder"])]),
        _: 1
      }, 8, ["label"]), r.type ? (a.openBlock(), a.createBlock(c, {
        key: 0,
        type: r.type
      }, {
        default: a.withCtx(() => [a.createTextVNode(a.toDisplayString(r.type == "success" ? o.t("alertText.sentEmail") : o.t("alertText.errorEmail")), 1)]),
        _: 1
      }, 8, ["type"])) : a.createCommentVNode("", true)]),
      _: 1
    }, 8, ["title", "modelValue"]);
  }
  const Me = L(Rt, [["render", qt], ["styles", [Bt]]]);
  const Wt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Me
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Yt = `.link{color:#f56c6c;text-decoration:underline;cursor:pointer}
`;
  const Jt = {
    emits: ["validate-document"],
    components: {
      ElFormItem: D.ElFormItem,
      ElInput: D.ElInput,
      ModalRecoveryPassword: Me
    },
    props: {
      disabledField: Boolean,
      inputLabel: String,
      currentCountry: String
    },
    setup() {
      const {
        t: e
      } = B();
      const t = H();
      return {
        t: e,
        personalDataStore: t,
        faIdCard: Pe
      };
    },
    directives: {
      maska: xe
    },
    data() {
      return {
        masks: Ie,
        disabled: false,
        showDialog: false,
        email: ""
      };
    },
    computed: {
      allDataLoaded() {
        return this.personalDataStore.loaded && this.personalDataStore.countryLoaded;
      },
      isCNPJ() {
        return this.personalDataStore.isDocumentTypeCnpj(this.personalDataStore.countryModel.country);
      },
      formModel() {
        return this.personalDataStore.model;
      },
      documentInputLabel() {
        const e = this.inputLabel || this.t("personalData.documentId");
        if (this.personalDataStore.isBrazilCountry && this.isCNPJ) {
          return "CNPJ";
        } else {
          return e;
        }
      }
    },
    methods: {
      openModalRecoveryPassword() {
        this.showDialog = true;
      },
      async callValidateDocument() {
        this.email = await this.personalDataStore.validateDocumentInUse(this.currentCountry);
        if (this.email) {
          this.$emit("validate-document");
        }
      }
    }
  };
  const Kt = {
    class: "col-12"
  };
  const Gt = ["innerHTML"];
  const Zt = {
    class: "el-form-item__error"
  };
  const Xt = {
    key: 0
  };
  const Qt = {
    key: 1
  };
  function en(e, t, n, o, r, s) {
    const i = a.resolveComponent("font-awesome-icon");
    const l = a.resolveComponent("el-input");
    const d = a.resolveComponent("el-form-item");
    const u = a.resolveComponent("ModalRecoveryPassword");
    const c = a.resolveDirective("maska");
    a.openBlock();
    return a.createElementBlock(a.Fragment, null, [a.createElementVNode("div", Kt, [a.createVNode(d, {
      class: "form-group",
      prop: "documentID"
    }, {
      label: a.withCtx(() => [a.createElementVNode("span", {
        innerHTML: s.documentInputLabel
      }, null, 8, Gt)]),
      error: a.withCtx(m => [a.createElementVNode("div", Zt, [m.error && m.error.includes("ACTION_MODAL") ? (a.openBlock(), a.createElementBlock("span", Xt, [a.createTextVNode(a.toDisplayString(m.error.replace("ACTION_MODAL", "")) + " ", 1), a.createElementVNode("span", {
        class: "link",
        onClick: t[1] || (t[1] = (...g) => s.openModalRecoveryPassword && s.openModalRecoveryPassword(...g))
      }, a.toDisplayString(o.t("action.clickHere")), 1)])) : (a.openBlock(), a.createElementBlock("span", Qt, a.toDisplayString(m.error), 1))])]),
      default: a.withCtx(() => [a.withDirectives((a.openBlock(), a.createBlock(l, {
        modelValue: s.formModel.documentID,
        "onUpdate:modelValue": t[0] || (t[0] = m => s.formModel.documentID = m),
        size: "large",
        maxlength: 14,
        disabled: n.disabledField,
        "data-maska": o.personalDataStore.isBrazilCountry ? r.masks.cpf.value : "",
        placeholder: o.personalDataStore.isBrazilCountry ? "000.000.000-00" : "000 000 000",
        formatter: o.personalDataStore.isBrazilCountry ? m => `${m}`.replace(/[^\d/.-]/g, "") : m => `${m}`.replace(/[^\w]/g, ""),
        onBlur: s.callValidateDocument
      }, {
        prefix: a.withCtx(() => [a.createVNode(i, {
          icon: o.faIdCard
        }, null, 8, ["icon"])]),
        _: 1
      }, 8, ["modelValue", "disabled", "data-maska", "placeholder", "formatter", "onBlur"])), [[c]])]),
      _: 1
    })]), a.createVNode(u, {
      modelValue: r.showDialog,
      "onUpdate:modelValue": t[2] || (t[2] = m => r.showDialog = m),
      email: r.email,
      currentCountry: n.currentCountry
    }, null, 8, ["modelValue", "email", "currentCountry"])], 64);
  }
  const Ae = L(Jt, [["render", en], ["styles", [Yt]]]);
  const tn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ae
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const nn = {
    inject: ["appSettings", "$http", "ready", "tokenRulesEngine"],
    emits: ["update:document-label", "update:show-document-type-input"],
    props: {
      currentCountry: String
    },
    components: {
      ElFormItem: D.ElFormItem,
      ElSelect: D.ElSelect,
      ElOption: D.ElOption
    },
    setup() {
      const {
        t: e
      } = B();
      const t = H();
      const n = Ee();
      return {
        t: e,
        personalDataStore: t,
        authStore: n,
        faIdCard: Pe
      };
    },
    data() {
      return {
        documentTypes: [],
        showInput: false
      };
    },
    computed: {
      disableInput() {
        let e = false;
        if (this.documentTypes.length <= 1 || this.authStore.isCreator) {
          e = true;
        }
        return e;
      },
      formModel() {
        return this.personalDataStore.model;
      }
    },
    watch: {
      currentCountry: {
        immediate: true,
        async handler(e, t) {
          if (e) {
            if (e !== t) {
              await this.getCountryDocumentTypes(true);
            } else {
              await this.getCountryDocumentTypes();
            }
          }
        }
      }
    },
    methods: {
      async getCountryDocumentTypes(e = false) {
        var t;
        try {
          this.loading = true;
          const n = O(this.appSettings.ENDPOINT_API_RULES_ENGINE, "rulesengine/documentCountriesAllowed");
          const o = {
            countryCode: this.currentCountry
          };
          const r = await this.$http.get(n, {
            params: o
          });
          if ((t = r == null ? undefined : r.data) != null && t.length) {
            this.documentTypes = r.data.map(s => s.documentType);
            if (this.documentTypes.length === 1) {
              this.showInput = false;
              this.formModel.documentType = this.documentTypes[0];
              this.$emit("update:document-label", this.documentTypes[0]);
              this.$emit("update:show-document-type-input", false);
            } else {
              this.personalDataStore.model.documentType = this.personalDataStore.model.documentType && !e ? this.personalDataStore.model.documentType : this.documentTypes[0];
              this.$emit("update:document-label", null);
              this.showInput = true;
              this.$emit("update:show-document-type-input", true);
            }
          } else {
            this.$emit("update:document-label", null);
            this.formModel.documentType = null;
            this.showInput = false;
            this.$emit("update:show-document-type-input", false);
          }
        } catch (n) {
          console.error(n);
        } finally {
          this.loading = false;
        }
      }
    }
  };
  const on = {
    key: 0,
    class: "col-12 col-sm-6"
  };
  function rn(e, t, n, o, r, s) {
    const i = a.resolveComponent("el-option");
    const l = a.resolveComponent("font-awesome-icon");
    const d = a.resolveComponent("el-select");
    const u = a.resolveComponent("el-form-item");
    if (r.showInput) {
      a.openBlock();
      return a.createElementBlock("div", on, [a.createVNode(u, {
        prop: "documentType",
        class: "form-group",
        label: o.t("personalData.documentType")
      }, {
        default: a.withCtx(() => [a.createVNode(d, {
          modelValue: s.formModel.documentType,
          "onUpdate:modelValue": t[0] || (t[0] = c => s.formModel.documentType = c),
          size: "large",
          loading: e.loading,
          teleported: false,
          disabled: s.disableInput,
          placeholder: o.t("personalData.documentType")
        }, {
          prefix: a.withCtx(() => [a.createVNode(l, {
            class: "icon-font",
            icon: o.faIdCard
          }, null, 8, ["icon"])]),
          default: a.withCtx(() => [(a.openBlock(true), a.createElementBlock(a.Fragment, null, a.renderList(r.documentTypes, (c, m) => {
            a.openBlock();
            return a.createBlock(i, {
              label: c,
              key: m,
              value: c
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "loading", "disabled", "placeholder"])]),
        _: 1
      }, 8, ["label"])]);
    } else {
      return a.createCommentVNode("", true);
    }
  }
  const Ve = L(nn, [["render", rn]]);
  const an = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ve
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const sn = `.el-loading-mask{z-index:2!important}
`;
  const ln = {
    inject: ["appSettings", "$http", "ready", "token"],
    emits: ["country-updated"],
    components: {
      ElForm: D.ElForm,
      ElFormItem: D.ElFormItem,
      ElInput: D.ElInput,
      CountryInput: Oe,
      DocumentInput: Ae,
      DocumentTypeInput: Ve
    },
    props: {
      disabled: Boolean,
      isFreeProfile: Boolean,
      defaultCountry: String
    },
    setup() {
      const {
        t: e
      } = B();
      const t = a.ref();
      const n = Ee();
      const o = H();
      return {
        t: e,
        formRef: t,
        authStore: n,
        personalDataStore: o,
        faFileSignature: At,
        faCalendarDays: Mt
      };
    },
    directives: {
      maska: xe,
      loading: D.vLoading
    },
    data() {
      return {
        masks: Ie,
        loading: false,
        documentLabel: null,
        showDocumentTypeInput: false,
        disabledField: {
          documentID: false
        },
        formRules: {
          country: [],
          documentID: [$.requiredField],
          fullName: [$.requiredField],
          birthDate: [$.requiredField]
        }
      };
    },
    computed: {
      isLoading() {
        return !this.isFreeProfile && !this.allDataLoaded || this.loading;
      },
      formModel() {
        return this.personalDataStore.model;
      },
      recoveryModel() {
        return this.personalDataStore.recoveryModel;
      },
      validateDocuments() {
        return this.personalDataStore.validateDocuments;
      },
      allDataLoaded() {
        return this.personalDataStore.loaded && this.personalDataStore.countryLoaded;
      },
      disableCountryInput() {
        return this.authStore.isCreator;
      }
    },
    watch: {
      loading(e) {
        this.$emit("loading", e);
      },
      allDataLoaded: {
        immediate: true,
        async handler(e, t) {
          if (e && !t) {
            await this.initForm({
              disableFields: true
            });
          }
        }
      },
      "personalDataStore.countryModel.country": {
        immediate: true,
        async handler(e, t) {
          if (t) {
            if (e == "BR" && t != "BR") {
              this.personalDataStore.model.documentID = null;
            }
            await this.initForm({
              disableFields: false,
              runValidation: false
            });
          }
        }
      }
    },
    mounted() {
      if (this.isFreeProfile) {
        this.updateDocumentIdRule();
      } else {
        this.loadData();
      }
    },
    methods: {
      async loadData({
        force: e
      } = {}) {
        try {
          this.loading = true;
          await this.personalDataStore.loadProfileAddressIfNotLoaded({
            force: e
          });
          await this.personalDataStore.getInfoIfNotLoaded({
            force: e
          });
        } finally {
          this.loading = false;
        }
      },
      async initForm({
        disableFields: e,
        runValidation: t = true
      }) {
        var n;
        var o;
        this.updateDocumentIdRule();
        this.updateFieldVisibility();
        await this.validateAntiFraud(e);
        if (t) {
          if (!((n = this.formRef) == null)) {
            n.clearValidate();
          }
          await ((o = this.formRef) == null ? undefined : o.validate());
        }
      },
      updateDocumentIdRule() {
        var e;
        this.formRules.documentID = [$.requiredField];
        if (this.personalDataStore.isBrazilCountry && !this.isCNPJ) {
          this.formRules.documentID.push($.validateCPF(), $.validateSameCpfInUse({
            validateDocuments: this.validateDocuments
          }));
        }
        if (!((e = this.formRef) == null)) {
          e.clearValidate();
        }
      },
      async validateAntiFraud() {
        try {
          if (this.isCNPJ || !this.personalDataStore.isBrazilCountry || !this.formModel.documentID) {
            return;
          }
          const e = O(this.appSettings.ENDPOINT_API_ANTI_FRAUD_SAFE_CHECK, "/api/BureauUser/CheckPersonalInfo");
          const t = {
            document: this.formModel.documentID,
            fullName: this.formModel.fullName,
            birthDate: A(this.formModel.birthDate, "DD/MM/YYYY").format("DD/MM/YYYY HH:mm:ss")
          };
          const n = await this.$http.post(e, t);
          if (n.data) {
            return n.data.isValidateDate && n.data.isValidateName;
          } else {
            return undefined;
          }
        } catch (e) {
          console.error(e);
          return false;
        }
      },
      updateFieldVisibility() {
        const e = this.personalDataStore.model;
        if (this.personalDataStore.isBrazilCountry) {
          this.disabledField.documentID = e.documentID || this.isCNPJ;
        } else {
          this.disabledField.documentID = false;
        }
      },
      async validate() {
        var t;
        var n;
        var o;
        if (await ((t = this.formRef) == null ? undefined : t.validate(r => r))) {
          await this.validateAntiFraud(false);
          if (!((n = this.formRef) == null)) {
            n.clearValidate();
          }
          return await ((o = this.formRef) == null ? undefined : o.validate(r => r));
        }
      },
      async submitForm() {
        var t;
        this.loading = true;
        const e = await this.personalDataStore.submitForm();
        this.loading = false;
        if (e) {
          return true;
        } else {
          await ((t = this.formRef) == null ? undefined : t.validate());
          return false;
        }
      },
      async validateDocumentId() {
        var e;
        await ((e = this.formRef) == null ? undefined : e.validate());
      },
      clearForm() {
        this.formModel.documentID = this.recoveryModel.documentID;
      },
      getFormData() {
        return this.formModel;
      }
    }
  };
  const cn = {
    class: "row"
  };
  const un = {
    class: "col-12"
  };
  const dn = {
    class: "col-12 col-sm-6"
  };
  const mn = {
    class: "col-12 col-sm-6"
  };
  function pn(e, t, n, o, r, s) {
    const i = a.resolveComponent("CountryInput");
    const l = a.resolveComponent("DocumentTypeInput");
    const d = a.resolveComponent("DocumentInput");
    const u = a.resolveComponent("font-awesome-icon");
    const c = a.resolveComponent("el-input");
    const m = a.resolveComponent("el-form-item");
    const g = a.resolveComponent("el-form");
    const y = a.resolveDirective("maska");
    const b = a.resolveDirective("loading");
    return a.withDirectives((a.openBlock(), a.createBlock(g, {
      ref: "formRef",
      "scroll-to-error": "",
      "label-position": "top",
      "require-asterisk-position": "right",
      model: s.formModel,
      rules: r.formRules,
      disabled: n.disabled,
      "validate-on-rule-change": false
    }, {
      default: a.withCtx(() => [a.createElementVNode("div", cn, [a.createElementVNode("div", un, [a.createVNode(i, {
        disabledCountry: s.disableCountryInput,
        onCountryUpdated: t[0] || (t[0] = h => e.$emit("country-updated", h))
      }, null, 8, ["disabledCountry"])]), a.createVNode(l, {
        currentCountry: o.personalDataStore.countryModel.country,
        "onUpdate:documentLabel": t[1] || (t[1] = h => r.documentLabel = h),
        "onUpdate:showDocumentTypeInput": t[2] || (t[2] = h => r.showDocumentTypeInput = h)
      }, null, 8, ["currentCountry"]), a.createElementVNode("div", {
        class: a.normalizeClass(["col-12", r.showDocumentTypeInput ? "col-sm-6" : "col-sm-12"])
      }, [a.createVNode(d, {
        inputLabel: r.documentLabel,
        disabledField: r.disabledField.documentID,
        currentCountry: o.personalDataStore.countryModel.country,
        onValidateDocument: s.validateDocumentId
      }, null, 8, ["inputLabel", "disabledField", "currentCountry", "onValidateDocument"])], 2), a.createElementVNode("div", dn, [a.createVNode(m, {
        prop: "fullName",
        class: "form-group",
        label: o.t("personalData.fullName")
      }, {
        default: a.withCtx(() => [a.createVNode(c, {
          modelValue: s.formModel.fullName,
          "onUpdate:modelValue": t[3] || (t[3] = h => s.formModel.fullName = h),
          size: "large",
          maxlength: 100,
          disabled: r.disabledField.fullName,
          placeholder: o.t("personalData.fullName"),
          formatter: h => `${h}`.replace(/[^A-Za-z\u00C0-\u00FF\s]/gu, "")
        }, {
          prefix: a.withCtx(() => [a.createVNode(u, {
            icon: o.faFileSignature
          }, null, 8, ["icon"])]),
          _: 1
        }, 8, ["modelValue", "disabled", "placeholder", "formatter"])]),
        _: 1
      }, 8, ["label"])]), a.createElementVNode("div", mn, [a.createVNode(m, {
        label: o.t("personalData.birthDate"),
        prop: "birthDate",
        class: "form-group"
      }, {
        default: a.withCtx(() => [a.withDirectives((a.openBlock(), a.createBlock(c, {
          modelValue: s.formModel.birthDate,
          "onUpdate:modelValue": t[4] || (t[4] = h => s.formModel.birthDate = h),
          size: "large",
          placeholder: "dd/mm/yyyy",
          "data-maska": r.masks.calendar.value,
          disabled: r.disabledField.birthDate,
          maxlength: r.masks.calendar.value.length,
          formatter: h => `${h}`.replace(/[^\d/]/g, "")
        }, {
          prefix: a.withCtx(() => [a.createVNode(u, {
            icon: o.faCalendarDays
          }, null, 8, ["icon"])]),
          _: 1
        }, 8, ["modelValue", "data-maska", "disabled", "maxlength", "formatter"])), [[y]])]),
        _: 1
      }, 8, ["label"])])])]),
      _: 1
    }, 8, ["model", "rules", "disabled"])), [[b, s.isLoading]]);
  }
  const Te = L(ln, [["render", pn], ["styles", [sn]]]);
  const fn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Te
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const hn = `.spd-dialog-form{max-width:500px;background-color:#fff!important}.spd-dialog-form .el-dialog__header{margin:0;padding:14px 16px;border-bottom:1px solid #eeeeee}.spd-dialog-form .el-dialog__header .el-dialog__title{text-transform:uppercase;font-size:14px;font-weight:600}.el-input__prefix svg{margin-right:0!important}.icon-font{margin-top:20px!important;width:16.63px!important;height:19px!important}.el-select .el-input{height:60px!important}.el-select .el-input__inner{font-size:16px!important;padding:20px 0 0 3px!important}.el-textarea__inner{padding:30px 20px!important}.el-input__suffix{position:absolute!important;right:10px!important}.btn+.btn{margin-left:10px!important}.form-grid{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:var(--grid-template-areas)}.form-grid .form-item-personal{grid-area:personal}.form-grid .el-form.separator{width:100%;margin-bottom:24px;padding-bottom:6px;border-bottom:1px #dcdfe6 solid}.el-form .form-group .input-inner,.el-form .form-group>.el-form-item__content>.el-input>.el-input__wrapper>input.el-input__inner{border-radius:inherit!important}.confirmation-dialog{max-width:400px}.confirmation-dialog .el-dialog__body{padding-top:8px;padding-bottom:8px}
`;
  const yn = {
    name: "index",
    components: {
      PersonalData: Te,
      ElButton: D.ElButton,
      ElDialog: D.ElDialog,
      AlertText: ie
    },
    inject: ["token"],
    emits: ["country-updated", "close", "follow-creator"],
    setup() {
      const e = se();
      const t = H();
      const {
        t: n
      } = B();
      return {
        t: n,
        appStore: e,
        personalDataStore: t
      };
    },
    props: {
      view: Array,
      confirmAction: {
        type: Object,
        default: () => ({
          text: "",
          visible: true
        })
      },
      cancelAction: {
        type: Object,
        default: () => ({
          text: "",
          visible: false
        })
      },
      showAlerts: {
        type: Boolean,
        default: true
      },
      showAboutInput: {
        type: Boolean,
        default: true
      },
      disabledCountry: {
        type: Boolean,
        default: false
      },
      showDialog: Boolean,
      defaultCountry: String
    },
    data() {
      return {
        disabled: false,
        sending: false,
        viewData: {
          personal: {
            priority: 1,
            loading: false
          }
        },
        confirmationDialogTitle: "",
        confirmationDialogText: ""
      };
    },
    computed: {
      isFreeProfile() {
        return !this.appStore.token;
      },
      loading() {
        for (const e in this.viewData) {
          if (this.viewData[e].loading) {
            return true;
          }
        }
        return false;
      },
      viewAsPriority() {
        return he.sortBy(this.view, e => this.viewData[e].priority);
      },
      lastView() {
        return this.view[this.view.length - 1];
      },
      alertText() {
        if (this.appStore.alert.type === "success") {
          return this.appStore.alert.text || this.t("alertText.success");
        } else {
          return this.appStore.alert.text || this.t("alertText.error");
        }
      }
    },
    methods: {
      async validateAndSubmit() {
        this.sending = true;
        try {
          if (await this.submitAll()) {
            this.appStore.showAlertSuccess();
            this.$emit("follow-creator");
            return true;
          } else {
            this.sending = false;
            this.appStore.showAlertError();
            return false;
          }
        } catch {
          this.sending = false;
        }
      },
      async submitAll() {
        let e = false;
        e = await this.personalDataStore.submitForm();
        return e;
      },
      clearForm() {
        var e;
        for (const t of this.view) {
          const n = this.$refs[t];
          if (!((e = n.clearForm) == null)) {
            e.call(n);
          }
        }
      },
      closeDialog() {
        this.sending = false;
        this.$emit("close");
        this.appStore.clearAlert();
      }
    }
  };
  const gn = {
    class: "form-grouping"
  };
  function _n(e, t, n, o, r, s) {
    const i = a.resolveComponent("PersonalData");
    const l = a.resolveComponent("AlertText");
    const d = a.resolveComponent("el-button");
    const u = a.resolveComponent("el-dialog");
    a.openBlock();
    return a.createElementBlock("main", null, [a.createVNode(u, {
      persistent: "",
      width: "80%",
      class: "spd-dialog-form",
      "show-close": false,
      "align-center": true,
      "model-value": n.showDialog,
      "close-on-click-modal": false,
      title: e.title || o.t("title.personalConfigPerfil"),
      onClose: t[4] || (t[4] = c => s.closeDialog())
    }, {
      footer: a.withCtx(() => [a.createElementVNode("span", null, [a.createVNode(d, {
        class: "btn btn-primary",
        loading: s.loading || r.sending,
        onClick: t[2] || (t[2] = c => s.validateAndSubmit())
      }, {
        default: a.withCtx(() => [a.createElementVNode("span", null, a.toDisplayString(n.confirmAction.text || o.t("base.btnSend")), 1)]),
        _: 1
      }, 8, ["loading"]), a.createVNode(d, {
        class: "btn btn-privacy btn-secondary",
        loading: s.loading || r.sending,
        onClick: t[3] || (t[3] = c => s.closeDialog())
      }, {
        default: a.withCtx(() => [a.createElementVNode("span", null, a.toDisplayString(n.cancelAction.text || o.t("base.btnCancel")), 1)]),
        _: 1
      }, 8, ["loading"])])]),
      default: a.withCtx(() => [a.createElementVNode("div", gn, [a.createElementVNode("div", {
        class: "form-grid",
        style: a.normalizeStyle(e.formGridStyle)
      }, [n.view.includes("personal") ? (a.openBlock(), a.createBlock(i, {
        key: 0,
        ref: "personal",
        class: a.normalizeClass(["form-item-personal", {
          separator: s.lastView != "personal"
        }]),
        disabled: r.sending,
        isFreeProfile: s.isFreeProfile,
        defaultCountry: n.defaultCountry,
        onLoading: t[0] || (t[0] = c => r.viewData.personal.loading = c),
        onCountryUpdated: t[1] || (t[1] = c => e.$emit("country-updated", c))
      }, null, 8, ["class", "disabled", "isFreeProfile", "defaultCountry"])) : a.createCommentVNode("", true)], 4)]), o.appStore.alert.show && n.showAlerts ? (a.openBlock(), a.createBlock(l, {
        key: 0,
        type: o.appStore.alert.type
      }, {
        default: a.withCtx(() => [a.createTextVNode(a.toDisplayString(s.alertText), 1)]),
        _: 1
      }, 8, ["type"])) : a.createCommentVNode("", true)]),
      _: 1
    }, 8, ["model-value", "title"])]);
  }
  const je = L(yn, [["render", _n], ["styles", [hn]]]);
  const bn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: je
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Le = rt();
  const Fe = {
    install(e) {
      e.use(Le);
    },
    useProvides(e) {
      const t = e;
      const n = () => ({
        global: {
          instance: t,
          ready: t.provides.ready,
          appSettings: t.provides.appSettings,
          token: t.provides.token,
          $http: t.provides.$http,
          locale: t.provides.locale
        }
      });
      Le.use(n);
    }
  };
  const vn = () => {
    const e = a.ref(Ne());
    const t = new ResizeObserver(() => {
      e.value = Ne();
    });
    a.onMounted(() => {
      t.observe(document.body);
      a.provide("isSmallDevice", e);
    });
    a.onBeforeUnmount(() => {
      if (t) {
        t.unobserve(document.body);
        t.disconnect(document.body);
      }
    });
  };
  const zn = e => {
    a.provide("ready", a.computed(() => e.ready == null ? true : J(e.ready)));
    a.provide("appSettings", a.computed(() => {
      const t = Nt(e.appSettings);
      Pt(t);
      return t;
    }));
    a.provide("token", a.computed(() => e.token));
    a.provide("$http", a.computed(() => V.value));
    a.provide("locale", a.computed(() => e.locale));
  };
  const wn = ({
    emit: e
  }) => {
    const t = a.ref(false);
    a.onMounted(() => {
      if (document.readyState === "complete") {
        t.value = true;
        e("ready");
      } else {
        const n = window.addEventListener("load", () => {
          t.value = true;
          window.removeEventListener("load", n);
          e("ready");
        });
      }
    });
    return {
      windowLoaded: t
    };
  };
  const Cn = `@import"https://fonts.googleapis.com/css2?family=Inter&display=swap";@import"https://cdnjs.cloudflare.com/ajax/libs/element-plus/2.2.30/index.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css";
`;
  const Dn = Object.assign({
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
    },
    watch: {
      showDialog: {
        immediate: true,
        handler(e) {
          this.showDialogCasted = J(e);
        }
      }
    }
  }, {
    __name: "App.ce",
    props: {
      ready: {
        type: [Boolean, String],
        default: true
      },
      appSettings: [Object, String],
      token: String,
      locale: String,
      view: String,
      title: String,
      page: {
        type: String,
        default: ""
      },
      showAboutInput: {
        type: Boolean,
        default: true
      },
      disabledCountry: {
        type: Boolean,
        default: false
      },
      confirmAction: {
        type: Object,
        default: () => ({
          text: "",
          visible: true
        })
      },
      disabledFieldsAddress: {
        type: Boolean,
        default: false
      },
      showDialog: {
        type: Boolean,
        default: false
      },
      defaultCountry: String,
      creatorId: String
    },
    emits: {
      "before-mount": null,
      mounted: null,
      ready: null,
      "country-updated": null,
      close: null,
      "follow-creator": null
    },
    setup(e, {
      emit: t
    }) {
      const n = e;
      const o = J(n.disabledFieldsAddress);
      const r = J(n.disabledCountry);
      const s = J(n.showAboutInput);
      const i = n.view.split(",").map(c => c == null ? undefined : c.trim());
      const l = a.getCurrentInstance();
      zn(n);
      vn();
      const {
        windowLoaded: d
      } = wn({
        emit: t
      });
      nt(n);
      ge.useProvides(l);
      Fe.useProvides(l);
      const u = se();
      return (c, m) => {
        var g;
        a.openBlock();
        return a.createElementBlock(a.Fragment, null, [(g = a.unref(u).appSettings) != null && g.PRIVACY_MODULES ? (a.openBlock(), a.createBlock(a.resolveDynamicComponent("style"), {
          key: 0
        }, {
          default: a.withCtx(() => {
            var y;
            return [a.createTextVNode(" @import \"" + a.toDisplayString((y = a.unref(u).appSettings) == null ? undefined : y.PRIVACY_MODULES) + "/styles/privacy.components.css\"; ", 1)];
          }),
          _: 1
        })) : a.createCommentVNode("", true), a.unref(u).ready && a.unref(d) ? (a.openBlock(), a.createBlock(je, {
          key: 1,
          class: "app-wc",
          createMode: c.castCreateMode,
          title: e.title,
          view: a.unref(i),
          page: e.page,
          defaultCountry: e.defaultCountry,
          showAboutInput: a.unref(s),
          confirmAction: e.confirmAction,
          disabledCountry: a.unref(r),
          disabledFieldsAddress: a.unref(o),
          showDialog: c.showDialogCasted,
          onCountryUpdated: m[0] || (m[0] = y => c.$emit("country-updated", y)),
          onClose: m[1] || (m[1] = y => c.$emit("close")),
          onFollowCreator: m[2] || (m[2] = y => c.$emit("follow-creator", e.creatorId))
        }, null, 8, ["createMode", "title", "view", "page", "defaultCountry", "showAboutInput", "confirmAction", "disabledCountry", "disabledFieldsAddress", "showDialog"])) : a.createCommentVNode("", true)], 64);
      };
    }
  });
  const K = L(Dn, [["styles", [Cn]]]);
  const kn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: K
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  async function Sn() {
    const e = Object.assign({
      "../App.ce.vue": () => Promise.resolve().then(() => kn),
      "../components/Base/AlertText.vue": () => Promise.resolve().then(() => yt),
      "../components/Base/CountryInput.vue": () => Promise.resolve().then(() => Ft),
      "../components/Base/DocumentInput.vue": () => Promise.resolve().then(() => tn),
      "../components/Base/DocumentTypeInput.vue": () => Promise.resolve().then(() => an),
      "../components/Base/ModalRecoveryPassword.vue": () => Promise.resolve().then(() => Wt),
      "../components/Forms/PersonalForm.vue": () => Promise.resolve().then(() => fn),
      "../components/Index.vue": () => Promise.resolve().then(() => bn)
    });
    const t = [];
    for (const n in e) {
      const o = await e[n]();
      t.push(o.default.styles);
    }
    return [t.flat().join("")];
  }
  function Be(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      if (t) {
        o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        });
      }
      n.push.apply(n, o);
    }
    return n;
  }
  function M(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      if (t % 2) {
        Be(Object(n), true).forEach(function (o) {
          I(e, o, n[o]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        Be(Object(n)).forEach(function (o) {
          Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
        });
      }
    }
    return e;
  }
  function ee(e) {
    ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
      return typeof t;
    } : function (t) {
      if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof t;
      }
    };
    return ee(e);
  }
  function I(e, t, n) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  function xn(e, t) {
    if (e == null) {
      return {};
    }
    var n = {};
    var o = Object.keys(e);
    var r;
    var s;
    for (s = 0; s < o.length; s++) {
      r = o[s];
      if (!(t.indexOf(r) >= 0)) {
        n[r] = e[r];
      }
    }
    return n;
  }
  function In(e, t) {
    if (e == null) {
      return {};
    }
    var n = xn(e, t);
    var o;
    var r;
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) {
        o = s[r];
        if (!(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o)) {
          n[o] = e[o];
        }
      }
    }
    return n;
  }
  function de(e) {
    return En(e) || Nn(e) || Pn(e) || On();
  }
  function En(e) {
    if (Array.isArray(e)) {
      return me(e);
    }
  }
  function Nn(e) {
    if (typeof Symbol !== "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
      return Array.from(e);
    }
  }
  function Pn(e, t) {
    if (e) {
      if (typeof e == "string") {
        return me(e, t);
      }
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor) {
        n = e.constructor.name;
      }
      if (n === "Map" || n === "Set") {
        return Array.from(e);
      }
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
        return me(e, t);
      }
    }
  }
  function me(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var n = 0, o = new Array(t); n < t; n++) {
      o[n] = e[n];
    }
    return o;
  }
  function On() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var Mn = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var Re = {
    exports: {}
  };
  (function (e) {
    (function (t) {
      function n(p, f, v) {
        if (!u(f) || m(f) || g(f) || y(f) || d(f)) {
          return f;
        }
        var w;
        var C = 0;
        var k = 0;
        if (c(f)) {
          w = [];
          k = f.length;
          w = [];
          k = f.length;
          for (; C < k; C++) {
            w.push(n(p, f[C], v));
          }
        } else {
          w = {};
          for (var _ in f) {
            if (Object.prototype.hasOwnProperty.call(f, _)) {
              w[p(_, v)] = n(p, f[_], v);
            }
          }
        }
        return w;
      }
      function o(p, f) {
        f = f || {};
        var v = f.separator || "_";
        var w = f.split || /(?=[A-Z])/;
        return p.split(w).join(v);
      }
      function r(p) {
        if (b(p)) {
          return p;
        } else {
          p = p.replace(/[\-_\s]+(.)?/g, function (f, v) {
            if (v) {
              return v.toUpperCase();
            } else {
              return "";
            }
          });
          return p.substr(0, 1).toLowerCase() + p.substr(1);
        }
      }
      function s(p) {
        var f = r(p);
        return f.substr(0, 1).toUpperCase() + f.substr(1);
      }
      function i(p, f) {
        return o(p, f).toLowerCase();
      }
      var l = Object.prototype.toString;
      function d(p) {
        return typeof p == "function";
      }
      function u(p) {
        return p === Object(p);
      }
      function c(p) {
        return l.call(p) == "[object Array]";
      }
      function m(p) {
        return l.call(p) == "[object Date]";
      }
      function g(p) {
        return l.call(p) == "[object RegExp]";
      }
      function y(p) {
        return l.call(p) == "[object Boolean]";
      }
      function b(p) {
        p = p - 0;
        return p === p;
      }
      function h(p, f) {
        var v = f && "process" in f ? f.process : f;
        if (typeof v != "function") {
          return p;
        } else {
          return function (w, C) {
            return v(w, p, C);
          };
        }
      }
      var S = {
        camelize: r,
        decamelize: i,
        pascalize: s,
        depascalize: i,
        camelizeKeys: function (p, f) {
          return n(h(r, f), p);
        },
        decamelizeKeys: function (p, f) {
          return n(h(i, f), p, f);
        },
        pascalizeKeys: function (p, f) {
          return n(h(s, f), p);
        },
        depascalizeKeys: function () {
          return this.decamelizeKeys.apply(this, arguments);
        }
      };
      if (e.exports) {
        e.exports = S;
      } else {
        t.humps = S;
      }
    })(Mn);
  })(Re);
  var An = Re.exports;
  var Vn = ["class", "style"];
  function Tn(e) {
    return e.split(";").map(function (t) {
      return t.trim();
    }).filter(function (t) {
      return t;
    }).reduce(function (t, n) {
      var o = n.indexOf(":");
      var r = An.camelize(n.slice(0, o));
      var s = n.slice(o + 1).trim();
      t[r] = s;
      return t;
    }, {});
  }
  function jn(e) {
    return e.split(/\s+/).reduce(function (t, n) {
      t[n] = true;
      return t;
    }, {});
  }
  function pe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof e == "string") {
      return e;
    }
    var o = (e.children || []).map(function (d) {
      return pe(d);
    });
    var r = Object.keys(e.attributes || {}).reduce(function (d, u) {
      var c = e.attributes[u];
      switch (u) {
        case "class":
          d.class = jn(c);
          break;
        case "style":
          d.style = Tn(c);
          break;
        default:
          d.attrs[u] = c;
      }
      return d;
    }, {
      attrs: {},
      class: {},
      style: {}
    });
    n.class;
    var s = n.style;
    var i = s === undefined ? {} : s;
    var l = In(n, Vn);
    return a.h(e.tag, M(M(M({}, t), {}, {
      class: r.class,
      style: M(M({}, r.style), i)
    }, r.attrs), l), o);
  }
  var Ue = false;
  try {
    Ue = true;
  } catch {}
  function Ln() {
    if (!Ue && console && typeof console.error == "function") {
      var e;
      (e = console).error.apply(e, arguments);
    }
  }
  function G(e, t) {
    if (Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t) {
      return I({}, e, t);
    } else {
      return {};
    }
  }
  function Fn(e) {
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
    I(t, `fa-${e.size}`, e.size !== null);
    I(t, `fa-rotate-${e.rotation}`, e.rotation !== null);
    I(t, `fa-pull-${e.pull}`, e.pull !== null);
    I(t, "fa-swap-opacity", e.swapOpacity);
    I(t, "fa-bounce", e.bounce);
    I(t, "fa-shake", e.shake);
    I(t, "fa-beat", e.beat);
    I(t, "fa-fade", e.fade);
    I(t, "fa-beat-fade", e.beatFade);
    I(t, "fa-flash", e.flash);
    I(t, "fa-spin-pulse", e.spinPulse);
    I(t, "fa-spin-reverse", e.spinReverse);
    var n = t;
    return Object.keys(n).map(function (o) {
      if (n[o]) {
        return o;
      } else {
        return null;
      }
    }).filter(function (o) {
      return o;
    });
  }
  function He(e) {
    if (e && ee(e) === "object" && e.prefix && e.iconName && e.icon) {
      return e;
    }
    if (P.parse.icon) {
      return P.parse.icon(e);
    }
    if (e === null) {
      return null;
    }
    if (ee(e) === "object" && e.prefix && e.iconName) {
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
  var Bn = a.defineComponent({
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
    setup: function (t, n) {
      var o = n.attrs;
      var r = a.computed(function () {
        return He(t.icon);
      });
      var s = a.computed(function () {
        return G("classes", Fn(t));
      });
      var i = a.computed(function () {
        return G("transform", typeof t.transform == "string" ? P.parse.transform(t.transform) : t.transform);
      });
      var l = a.computed(function () {
        return G("mask", He(t.mask));
      });
      var d = a.computed(function () {
        return P.icon(r.value, M(M(M(M({}, s.value), i.value), l.value), {}, {
          symbol: t.symbol,
          title: t.title
        }));
      });
      a.watch(d, function (c) {
        if (!c) {
          return Ln("Could not find one or more icon(s)", r.value, l.value);
        }
      }, {
        immediate: true
      });
      var u = a.computed(function () {
        if (d.value) {
          return pe(d.value.abstract[0], {}, o);
        } else {
          return null;
        }
      });
      return function () {
        return u.value;
      };
    }
  });
  a.defineComponent({
    name: "FontAwesomeLayers",
    props: {
      fixedWidth: {
        type: Boolean,
        default: false
      }
    },
    setup: function (t, n) {
      var o = n.slots;
      var r = P.config.familyPrefix;
      var s = a.computed(function () {
        return [`${r}-layers`].concat(de(t.fixedWidth ? [`${r}-fw`] : []));
      });
      return function () {
        return a.h("div", {
          class: s.value
        }, o.default ? o.default() : []);
      };
    }
  });
  a.defineComponent({
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
    setup: function (t, n) {
      var o = n.attrs;
      var r = P.config.familyPrefix;
      var s = a.computed(function () {
        return G("classes", [].concat(de(t.counter ? [`${r}-layers-counter`] : []), de(t.position ? [`${r}-layers-${t.position}`] : [])));
      });
      var i = a.computed(function () {
        return G("transform", typeof t.transform == "string" ? P.parse.transform(t.transform) : t.transform);
      });
      var l = a.computed(function () {
        var u = P.text(t.value.toString(), M(M({}, i.value), s.value));
        var c = u.abstract;
        if (t.counter) {
          c[0].attributes.class = c[0].attributes.class.replace("fa-layers-text", "");
        }
        return c[0];
      });
      var d = a.computed(function () {
        return pe(l.value, {}, o);
      });
      return function () {
        return d.value;
      };
    }
  });
  P.dom.watch();
  const $e = {
    css: P.dom.css,
    install(e) {
      e.component("font-awesome-icon", Bn);
    }
  };
  (async () => {
    const e = [$e.css(), ...(await Sn())];
    K.styles = e;
    if (!customElements.get(ye)) {
      const t = {
        component: K,
        props: K.props,
        plugins: [$e, Fe, ge, ne],
        renderOptions: {
          props: K.props,
          ref: "component"
        }
      };
      const n = Ge(t);
      customElements.define(ye, n);
    }
  })();
});