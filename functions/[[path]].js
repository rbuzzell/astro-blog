globalThis.process = {
	argv: [],
	env: {}
}
var gm = Object.create
var wr = Object.defineProperty
var Fm = Object.getOwnPropertyDescriptor
var bm = Object.getOwnPropertyNames
var wm = Object.getPrototypeOf,
	vm = Object.prototype.hasOwnProperty
var m = (n, e) => () => (n && (e = n((n = 0))), e)
var ne = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports),
	f = (n, e) => {
		for (var r in e) wr(n, r, { get: e[r], enumerable: !0 })
	},
	Em = (n, e, r, s) => {
		if ((e && typeof e == 'object') || typeof e == 'function')
			for (let o of bm(e))
				!vm.call(n, o) &&
					o !== r &&
					wr(n, o, { get: () => e[o], enumerable: !(s = Fm(e, o)) || s.enumerable })
		return n
	}
var cn = (n, e, r) => (
	(r = n != null ? gm(wm(n)) : {}),
	Em(e || !n || !n.__esModule ? wr(r, 'default', { value: n, enumerable: !0 }) : r, n)
)
function to(n) {
	return n.endsWith('/') ? n : n + '/'
}
function nt(n) {
	return n[0] === '/' ? n : '/' + n
}
function vr(n) {
	return n.replace(/(?<!:)\/\/+/g, '/')
}
function dn(n) {
	return n.endsWith('/') ? n.slice(0, n.length - 1) : n
}
function Cm(n) {
	return n.startsWith('/') ? n.substring(1) : n
}
function Er(n) {
	return n.replace(/^\/|\/$/g, '')
}
function xm(n) {
	return typeof n == 'string' || n instanceof String
}
function rt(...n) {
	return n
		.filter(xm)
		.map((e, r) => (r === 0 ? dn(e) : r === n.length - 1 ? Cm(e) : Er(e)))
		.join('/')
}
function wt(n) {
	return /^(http|ftp|https|ws):?\/\//.test(n) || n.startsWith('data:')
}
function Cr(n) {
	return n.replace(/\\/g, '/')
}
var vt = m(() => {})
var Sr = ne((xr) => {
	'use strict'
	xr.parse = Am
	xr.serialize = km
	var Sm = Object.prototype.toString,
		pn = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
	function Am(n, e) {
		if (typeof n != 'string') throw new TypeError('argument str must be a string')
		for (var r = {}, s = e || {}, o = s.decode || Bm, l = 0; l < n.length; ) {
			var a = n.indexOf('=', l)
			if (a === -1) break
			var i = n.indexOf(';', l)
			if (i === -1) i = n.length
			else if (i < a) {
				l = n.lastIndexOf(';', a - 1) + 1
				continue
			}
			var c = n.slice(l, a).trim()
			if (r[c] === void 0) {
				var p = n.slice(a + 1, i).trim()
				p.charCodeAt(0) === 34 && (p = p.slice(1, -1)), (r[c] = Pm(p, o))
			}
			l = i + 1
		}
		return r
	}
	function km(n, e, r) {
		var s = r || {},
			o = s.encode || _m
		if (typeof o != 'function') throw new TypeError('option encode is invalid')
		if (!pn.test(n)) throw new TypeError('argument name is invalid')
		var l = o(e)
		if (l && !pn.test(l)) throw new TypeError('argument val is invalid')
		var a = n + '=' + l
		if (s.maxAge != null) {
			var i = s.maxAge - 0
			if (isNaN(i) || !isFinite(i)) throw new TypeError('option maxAge is invalid')
			a += '; Max-Age=' + Math.floor(i)
		}
		if (s.domain) {
			if (!pn.test(s.domain)) throw new TypeError('option domain is invalid')
			a += '; Domain=' + s.domain
		}
		if (s.path) {
			if (!pn.test(s.path)) throw new TypeError('option path is invalid')
			a += '; Path=' + s.path
		}
		if (s.expires) {
			var c = s.expires
			if (!Tm(c) || isNaN(c.valueOf())) throw new TypeError('option expires is invalid')
			a += '; Expires=' + c.toUTCString()
		}
		if (
			(s.httpOnly && (a += '; HttpOnly'),
			s.secure && (a += '; Secure'),
			s.partitioned && (a += '; Partitioned'),
			s.priority)
		) {
			var p = typeof s.priority == 'string' ? s.priority.toLowerCase() : s.priority
			switch (p) {
				case 'low':
					a += '; Priority=Low'
					break
				case 'medium':
					a += '; Priority=Medium'
					break
				case 'high':
					a += '; Priority=High'
					break
				default:
					throw new TypeError('option priority is invalid')
			}
		}
		if (s.sameSite) {
			var d = typeof s.sameSite == 'string' ? s.sameSite.toLowerCase() : s.sameSite
			switch (d) {
				case !0:
					a += '; SameSite=Strict'
					break
				case 'lax':
					a += '; SameSite=Lax'
					break
				case 'strict':
					a += '; SameSite=Strict'
					break
				case 'none':
					a += '; SameSite=None'
					break
				default:
					throw new TypeError('option sameSite is invalid')
			}
		}
		return a
	}
	function Bm(n) {
		return n.indexOf('%') !== -1 ? decodeURIComponent(n) : n
	}
	function _m(n) {
		return encodeURIComponent(n)
	}
	function Tm(n) {
		return Sm.call(n) === '[object Date]' || n instanceof Date
	}
	function Pm(n, e) {
		try {
			return e(n)
		} catch {
			return n
		}
	}
})
function q(n, e) {
	let r = new RegExp(`\\x1b\\[${e}m`, 'g'),
		s = `\x1B[${n}m`,
		o = `\x1B[${e}m`
	return function (l) {
		return !Mm.enabled || l == null ? l : s + (~('' + l).indexOf(o) ? l.replace(r, o + s) : l) + o
	}
}
var Ar,
	no,
	ro,
	so,
	oo,
	Mm,
	D9,
	hn,
	kr,
	f9,
	g9,
	F9,
	b9,
	w9,
	v9,
	lo,
	E9,
	un,
	ao,
	C9,
	x9,
	S9,
	A9,
	k9,
	B9,
	_9,
	T9,
	P9,
	M9,
	I9,
	j9,
	L9,
	je = m(() => {
		oo = !0
		typeof process < 'u' &&
			(({ FORCE_COLOR: Ar, NODE_DISABLE_COLORS: no, NO_COLOR: ro, TERM: so } = process.env || {}),
			(oo = process.stdout && process.stdout.isTTY))
		Mm = { enabled: !no && ro == null && so !== 'dumb' && ((Ar != null && Ar !== '0') || oo) }
		;(D9 = q(0, 0)),
			(hn = q(1, 22)),
			(kr = q(2, 22)),
			(f9 = q(3, 23)),
			(g9 = q(4, 24)),
			(F9 = q(7, 27)),
			(b9 = q(8, 28)),
			(w9 = q(9, 29)),
			(v9 = q(30, 39)),
			(lo = q(31, 39)),
			(E9 = q(32, 39)),
			(un = q(33, 39)),
			(ao = q(34, 39)),
			(C9 = q(35, 39)),
			(x9 = q(36, 39)),
			(S9 = q(37, 39)),
			(A9 = q(90, 39)),
			(k9 = q(90, 39)),
			(B9 = q(40, 49)),
			(_9 = q(41, 49)),
			(T9 = q(42, 49)),
			(P9 = q(43, 49)),
			(M9 = q(44, 49)),
			(I9 = q(45, 49)),
			(j9 = q(46, 49)),
			(L9 = q(47, 49))
	})
function io(n) {
	var e,
		r,
		s = ''
	if (typeof n == 'string' || typeof n == 'number') s += n
	else if (typeof n == 'object')
		if (Array.isArray(n))
			for (e = 0; e < n.length; e++) n[e] && (r = io(n[e])) && (s && (s += ' '), (s += r))
		else for (e in n) n[e] && (s && (s += ' '), (s += e))
	return s
}
function Lt() {
	for (var n, e, r = 0, s = ''; r < arguments.length; )
		(n = arguments[r++]) && (e = io(n)) && (s && (s += ' '), (s += e))
	return s
}
var V = m(() => {})
var Im,
	jm,
	Lm,
	$m,
	co,
	po = m(() => {
		;({ replace: Im } = ''),
			(jm = /[&<>'"]/g),
			(Lm = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }),
			($m = (n) => Lm[n]),
			(co = (n) => Im.call(n, jm, $m))
	})
function Om(n) {
	return n.replace(
		/\r\n|\r(?!\n)|\n/g,
		`
`
	)
}
function Rm(n, e) {
	if (!e || e.line === void 0 || e.column === void 0) return ''
	let r = Om(n)
			.split(
				`
`
			)
			.map((a) => a.replace(/\t/g, '  ')),
		s = []
	for (let a = -2; a <= 2; a++) r[e.line + a] && s.push(e.line + a)
	let o = 0
	for (let a of s) {
		let i = `> ${a}`
		i.length > o && (o = i.length)
	}
	let l = ''
	for (let a of s) {
		let i = a === e.line - 1
		;(l += i ? '> ' : '  '),
			(l += `${a + 1} | ${r[a]}
`),
			i &&
				(l += `${Array.from({ length: o }).join(' ')}  | ${Array.from({ length: e.column }).join(
					' '
				)}^
`)
	}
	return l
}
function Nm(n) {
	return !(n.length !== 3 || !n[0] || typeof n[0] != 'object')
}
function jo(n, e, r) {
	let s = e?.split('/').pop()?.replace('.astro', '') ?? '',
		o = (...l) => {
			if (!Nm(l)) throw new k({ ...yo, message: yo.message(s) })
			return n(...l)
		}
	return (
		Object.defineProperty(o, 'name', { value: s, writable: !1 }),
		(o.isAstroComponentFactory = !0),
		(o.moduleId = e),
		(o.propagation = r),
		o
	)
}
function Hm(n) {
	return jo(n.factory, n.moduleId, n.propagation)
}
function A(n, e, r) {
	return typeof n == 'function' ? jo(n, e, r) : Hm(n)
}
function zm() {
	return (e) => {
		if (typeof e == 'string') throw new k({ ...Do, message: Do.message(JSON.stringify(e)) })
		let r = [...Object.values(e)]
		if (r.length === 0) throw new k({ ...fo, message: fo.message(JSON.stringify(e)) })
		return Promise.all(r.map((s) => s()))
	}
}
function B(n) {
	return { site: n ? new URL(n) : void 0, generator: `Astro v${es}`, glob: zm() }
}
async function ts(n, e, r, s) {
	let { request: o, url: l } = e,
		a = o.method.toUpperCase(),
		i = n[a] ?? n.ALL
	return (
		!r &&
			r === !1 &&
			a !== 'GET' &&
			s.warn(
				'router',
				`${l.pathname} ${hn(
					a
				)} requests are not available for a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` to enable.`
			),
		typeof i != 'function'
			? (s.warn(
					'router',
					`No API Route handler exists for the method "${a}" for the route ${l.pathname}.
Found handlers: ${Object.keys(n)
						.map((c) => JSON.stringify(c))
						.join(', ')}
` +
						('all' in n
							? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?
`
							: '')
				),
				new Response(null, { status: 404, headers: { 'X-Astro-Response': 'Not-Found' } }))
			: i.call(n, e)
	)
}
function ns(n) {
	return !!n && typeof n == 'object' && typeof n.then == 'function'
}
async function* Wm(n) {
	let e = n.getReader()
	try {
		for (;;) {
			let { done: r, value: s } = await e.read()
			if (r) return
			yield s
		}
	} finally {
		e.releaseLock()
	}
}
function Gm(n) {
	return Object.prototype.toString.call(n) === '[object HTMLString]'
}
function Vm(n) {
	return new mn(n)
}
function Lo(n) {
	return typeof n.getReader == 'function'
}
async function* go(n) {
	if (Lo(n)) for await (let e of Wm(n)) yield xt(e)
	else for await (let e of n) yield xt(e)
}
function* Xm(n) {
	for (let e of n) yield xt(e)
}
function xt(n) {
	if (n && typeof n == 'object') {
		if (n instanceof Uint8Array) return Vm(n)
		if (n instanceof Response && n.body) {
			let e = n.body
			return go(e)
		} else {
			if (typeof n.then == 'function') return Promise.resolve(n).then((e) => xt(e))
			if (Symbol.iterator in n) return Xm(n)
			if (Symbol.asyncIterator in n || Lo(n)) return go(n)
		}
	}
	return X(n)
}
function rs(n) {
	return Object.defineProperty(n, $o, { value: !0 })
}
function Jm(n) {
	return n && typeof n == 'object' && n[$o]
}
function Pr(n, e = {}, r = new WeakSet()) {
	if (r.has(n))
		throw new Error(`Cyclic reference detected while serializing props for <${e.displayName} client:${e.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`)
	r.add(n)
	let s = n.map((o) => Ro(o, e, r))
	return r.delete(n), s
}
function Oo(n, e = {}, r = new WeakSet()) {
	if (r.has(n))
		throw new Error(`Cyclic reference detected while serializing props for <${e.displayName} client:${e.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`)
	r.add(n)
	let s = Object.fromEntries(Object.entries(n).map(([o, l]) => [o, Ro(l, e, r)]))
	return r.delete(n), s
}
function Ro(n, e = {}, r = new WeakSet()) {
	switch (Object.prototype.toString.call(n)) {
		case '[object Date]':
			return [pe.Date, n.toISOString()]
		case '[object RegExp]':
			return [pe.RegExp, n.source]
		case '[object Map]':
			return [pe.Map, Pr(Array.from(n), e, r)]
		case '[object Set]':
			return [pe.Set, Pr(Array.from(n), e, r)]
		case '[object BigInt]':
			return [pe.BigInt, n.toString()]
		case '[object URL]':
			return [pe.URL, n.toString()]
		case '[object Array]':
			return [pe.JSON, Pr(n, e, r)]
		case '[object Uint8Array]':
			return [pe.Uint8Array, Array.from(n)]
		case '[object Uint16Array]':
			return [pe.Uint16Array, Array.from(n)]
		case '[object Uint32Array]':
			return [pe.Uint32Array, Array.from(n)]
		default:
			return n !== null && typeof n == 'object'
				? [pe.Value, Oo(n, e, r)]
				: n === void 0
					? [pe.Value]
					: [pe.Value, n]
	}
}
function Uo(n, e) {
	return JSON.stringify(Oo(n, e))
}
function qm(n, e) {
	let r = { isPage: !1, hydration: null, props: {}, propsWithoutTransitionAttributes: {} }
	for (let [s, o] of Object.entries(n))
		if (
			(s.startsWith('server:') && s === 'server:root' && (r.isPage = !0), s.startsWith('client:'))
		)
			switch (
				(r.hydration ||
					(r.hydration = {
						directive: '',
						value: '',
						componentUrl: '',
						componentExport: { value: '' }
					}),
				s)
			) {
				case 'client:component-path': {
					r.hydration.componentUrl = o
					break
				}
				case 'client:component-export': {
					r.hydration.componentExport.value = o
					break
				}
				case 'client:component-hydration':
					break
				case 'client:display-name':
					break
				default: {
					if (
						((r.hydration.directive = s.split(':')[1]),
						(r.hydration.value = o),
						!e.has(r.hydration.directive))
					) {
						let l = Array.from(e.keys())
							.map((a) => `client:${a}`)
							.join(', ')
						throw new Error(
							`Error: invalid hydration directive "${s}". Supported hydration methods: ${l}`
						)
					}
					if (r.hydration.directive === 'media' && typeof r.hydration.value != 'string')
						throw new k(Um)
					break
				}
			}
		else (r.props[s] = o), No.includes(s) || (r.propsWithoutTransitionAttributes[s] = o)
	for (let s of Object.getOwnPropertySymbols(n))
		(r.props[s] = n[s]), (r.propsWithoutTransitionAttributes[s] = n[s])
	return r
}
async function Zm(n, e) {
	let { renderer: r, result: s, astroId: o, props: l, attrs: a } = n,
		{ hydrate: i, componentUrl: c, componentExport: p } = e
	if (!p.value) throw new k({ ...mo, message: mo.message(e.displayName) })
	let d = { children: '', props: { uid: o } }
	if (a) for (let [u, g] of Object.entries(a)) d.props[u] = $t(g)
	;(d.props['component-url'] = await s.resolve(decodeURI(c))),
		r.clientEntrypoint &&
			((d.props['component-export'] = p.value),
			(d.props['renderer-url'] = await s.resolve(decodeURI(r.clientEntrypoint))),
			(d.props.props = $t(Uo(l, e)))),
		(d.props.ssr = ''),
		(d.props.client = i)
	let h = await s.resolve('astro:scripts/before-hydration.js')
	return (
		h.length && (d.props['before-hydration-url'] = h),
		(d.props.opts = $t(JSON.stringify({ name: e.displayName, value: e.hydrateArgs || '' }))),
		No.forEach((u) => {
			l[u] && (d.props[u] = l[u])
		}),
		d
	)
}
function Ym(n) {
	let e = 0
	if (n.length === 0) return e
	for (let r = 0; r < n.length; r++) {
		let s = n.charCodeAt(r)
		;(e = (e << 5) - e + s), (e = e & e)
	}
	return e
}
function Km(n) {
	let e,
		r = '',
		s = Ym(n),
		o = s < 0 ? 'Z' : ''
	for (s = Math.abs(s); s >= Mr; ) (e = s % Mr), (s = Math.floor(s / Mr)), (r = jr[e] + r)
	return s > 0 && (r = jr[s] + r), o + r
}
function Ho(n) {
	return n == null ? !1 : n.isAstroComponentFactory === !0
}
function Qm(n, e) {
	let r = e.propagation || 'none'
	return (
		e.moduleId &&
			n.componentMetadata.has(e.moduleId) &&
			r === 'none' &&
			(r = n.componentMetadata.get(e.moduleId).propagation),
		r === 'in-tree' || r === 'self'
	)
}
function ss(n) {
	return typeof n == 'object' && !!n[zo]
}
function Wo(n, e) {
	return { [zo]: !0, head: n, content: e }
}
function ny(n) {
	return n._metadata.hasHydrationScript ? !1 : (n._metadata.hasHydrationScript = !0)
}
function ry(n, e) {
	return n._metadata.hasDirectives.has(e) ? !1 : (n._metadata.hasDirectives.add(e), !0)
}
function Fo(n, e) {
	let s = n.clientDirectives.get(e)
	if (!s) throw new Error(`Unknown directive: ${e}`)
	return s
}
function sy(n, e, r) {
	switch (e) {
		case 'both':
			return `${ty}<script>${Fo(n, r)};${ey}<\/script>`
		case 'directive':
			return `<script>${Fo(n, r)}<\/script>`
	}
	return ''
}
function ls(n) {
	let e = ''
	for (let [r, s] of Object.entries(n))
		e += `const ${cy(r)} = ${JSON.stringify(s)?.replace(/<\/script>/g, '\\x3C/script>')};
`
	return X(e)
}
function wo(n) {
	return n.length === 1 ? n[0] : `${n.slice(0, -1).join(', ')} or ${n[n.length - 1]}`
}
function _(n, e, r = !0) {
	if (n == null) return ''
	if (n === !1) return ly.test(e) || ay.test(e) ? X(` ${e}="false"`) : ''
	if (iy.has(e))
		return (
			console.warn(`[astro] The "${e}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${e}={value}\`) instead of the dynamic spread syntax (\`{...{ "${e}": value }}\`).`),
			''
		)
	if (e === 'class:list') {
		let s = Et(Lt(n), r)
		return s === '' ? '' : X(` ${e.slice(0, -5)}="${s}"`)
	}
	if (e === 'style' && !(n instanceof ot)) {
		if (Array.isArray(n) && n.length === 2) return X(` ${e}="${Et(`${bo(n[0])};${n[1]}`, r)}"`)
		if (typeof n == 'object') return X(` ${e}="${Et(bo(n), r)}"`)
	}
	return e === 'className'
		? X(` class="${Et(n, r)}"`)
		: n === !0 && (e.startsWith('data-') || oy.test(e))
			? X(` ${e}`)
			: X(` ${e}="${Et(n, r)}"`)
}
function Lr(n, e = !0) {
	let r = ''
	for (let [s, o] of Object.entries(n)) r += _(o, s, e)
	return X(r)
}
function Le(n, { props: e, children: r = '' }, s = !0) {
	let { lang: o, 'data-astro-id': l, 'define:vars': a, ...i } = e
	return (
		a &&
			(n === 'style' && (delete i['is:global'], delete i['is:scoped']),
			n === 'script' &&
				(delete i.hoist,
				(r =
					ls(a) +
					`
` +
					r))),
		(r == null || r == '') && os.test(n) ? `<${n}${Lr(i, s)} />` : `<${n}${Lr(i, s)}>${r}</${n}>`
	)
}
function Go(n) {
	let e = [],
		r = { write: (o) => e.push(o) },
		s = n(r)
	return {
		async renderToFinalDestination(o) {
			for (let l of e) o.write(l)
			;(r.write = (l) => o.write(l)), await s
		}
	}
}
function vo(n) {
	n._metadata.hasRenderedHead = !0
	let e = Array.from(n.styles)
		.filter(Ir)
		.map((l) => (l.props.rel === 'stylesheet' ? Le('link', l) : Le('style', l)))
	n.styles.clear()
	let r = Array.from(n.scripts)
			.filter(Ir)
			.map((l) => Le('script', l, !1)),
		s = Array.from(n.links)
			.filter(Ir)
			.map((l) => Le('link', l, !1)),
		o =
			e.join(`
`) +
			s.join(`
`) +
			r.join(`
`)
	if (n._metadata.extraHead.length > 0) for (let l of n._metadata.extraHead) o += l
	return X(o)
}
function* Vo() {
	yield rs({ type: 'head' })
}
function* L() {
	yield rs({ type: 'maybe-head' })
}
function py(n) {
	return !!n[$r]
}
function ve(n, e, r) {
	return !e && r
		? ve(n, r)
		: {
				async render(s) {
					await Ct(s, typeof e == 'function' ? e(n) : e)
				}
			}
}
async function lt(n, e, r) {
	let s = '',
		o = null,
		l = {
			write(i) {
				i instanceof Response ||
					(typeof i == 'object' && 'type' in i && typeof i.type == 'string'
						? (o === null && (o = []), o.push(i))
						: (s += $e(n, i)))
			}
		}
	return await ve(n, e, r).render(l), X(new yn(s, o))
}
async function Xo(n, e = {}) {
	let r = null,
		s = {}
	return (
		e &&
			(await Promise.all(
				Object.entries(e).map(([o, l]) =>
					lt(n, l).then((a) => {
						a.instructions && (r === null && (r = []), r.push(...a.instructions)), (s[o] = a)
					})
				)
			)),
		{ slotInstructions: r, children: s }
	)
}
function as(n, e) {
	if (Jm(e)) {
		let r = e
		switch (r.type) {
			case 'directive': {
				let { hydration: s } = r,
					o = s && ny(n),
					l = s && ry(n, s.directive),
					a = o ? 'both' : l ? 'directive' : null
				if (a) {
					let i = sy(n, a, s.directive)
					return X(i)
				} else return ''
			}
			case 'head':
				return n._metadata.hasRenderedHead || n.partial ? '' : vo(n)
			case 'maybe-head':
				return n._metadata.hasRenderedHead || n._metadata.headInTree || n.partial ? '' : vo(n)
			default:
				throw new Error(`Unknown chunk type: ${e.type}`)
		}
	} else {
		if (e instanceof Response) return ''
		if (py(e)) {
			let r = '',
				s = e
			if (s.instructions) for (let o of s.instructions) r += as(n, o)
			return (r += e.toString()), r
		}
	}
	return e.toString()
}
function $e(n, e) {
	return ArrayBuffer.isView(e) ? hy.decode(e) : as(n, e)
}
function uy(n, e) {
	if (ArrayBuffer.isView(e)) return e
	{
		let r = as(n, e)
		return fn.encode(r.toString())
	}
}
function my(n) {
	return !!n && typeof n == 'object' && 'render' in n && typeof n.render == 'function'
}
async function Ct(n, e) {
	if (((e = await e), e instanceof yn)) n.write(e)
	else if (Gm(e)) n.write(e)
	else if (Array.isArray(e)) {
		let r = e.map((s) => Go((o) => Ct(o, s)))
		for (let s of r) s && (await s.renderToFinalDestination(n))
	} else if (typeof e == 'function') await Ct(n, e())
	else if (typeof e == 'string') n.write(X($t(e)))
	else if (!(!e && e !== 0))
		if (my(e)) await e.render(n)
		else if (Zo(e)) await e.render(n)
		else if (fy(e)) await e.render(n)
		else if (ArrayBuffer.isView(e)) n.write(e)
		else if (typeof e == 'object' && (Symbol.asyncIterator in e || Symbol.iterator in e))
			for await (let r of e) await Ct(n, r)
		else n.write(e)
}
function yy(n, e) {
	if (n != null)
		for (let r of Object.keys(n))
			r.startsWith('client:') &&
				console.warn(
					`You are attempting to render <${e} ${r} />, but ${e} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
				)
}
function Dy(n, e, r, s, o = {}) {
	yy(s, e)
	let l = new Or(n, s, o, r)
	return Qm(n, r) && n._metadata.propagators.add(l), l
}
function fy(n) {
	return typeof n == 'object' && !!n[Jo]
}
function Zo(n) {
	return typeof n == 'object' && !!n[qo]
}
function D(n, ...e) {
	return new Rr(n, e)
}
async function Yo(n, e, r, s, o = !1, l) {
	let a = await Ko(n, e, r, s, l)
	if (a instanceof Response) return a
	let i = '',
		c = !1,
		p = {
			write(d) {
				if (o && !c && ((c = !0), !n.partial && !/<!doctype html/i.test(String(d)))) {
					let h = n.compressHTML
						? '<!DOCTYPE html>'
						: `<!DOCTYPE html>
`
					i += h
				}
				d instanceof Response || (i += $e(n, d))
			}
		}
	return await a.render(p), i
}
async function gy(n, e, r, s, o = !1, l) {
	let a = await Ko(n, e, r, s, l)
	if (a instanceof Response) return a
	let i = !1
	return (
		o && (await Fy(n)),
		new ReadableStream({
			start(c) {
				let p = {
					write(d) {
						if (o && !i && ((i = !0), !n.partial && !/<!doctype html/i.test(String(d)))) {
							let u = n.compressHTML
								? '<!DOCTYPE html>'
								: `<!DOCTYPE html>
`
							c.enqueue(fn.encode(u))
						}
						if (d instanceof Response) throw new k({ ...bn })
						let h = uy(n, d)
						c.enqueue(h)
					}
				}
				;(async () => {
					try {
						await a.render(p), c.close()
					} catch (d) {
						k.is(d) && !d.loc && d.setLocation({ file: l?.component }),
							setTimeout(() => c.error(d), 0)
					}
				})()
			}
		})
	)
}
async function Ko(n, e, r, s, o) {
	let l = await e(n, r, s)
	if (l instanceof Response) return l
	if (!Zo(l))
		throw new k({
			...ho,
			message: ho.message(o?.route, typeof l),
			location: { file: o?.component }
		})
	return ss(l) ? l.content : l
}
async function Fy(n) {
	let e = n._metadata.propagators.values()
	for (;;) {
		let { value: r, done: s } = e.next()
		if (s) break
		let o = await r.init(n)
		ss(o) && n._metadata.extraHead.push(o.head)
	}
}
function by(n) {
	return typeof HTMLElement < 'u' && HTMLElement.isPrototypeOf(n)
}
async function wy(n, e, r, s) {
	let o = vy(e),
		l = ''
	for (let a in r) l += ` ${a}="${Et(await r[a])}"`
	return X(`<${o}${l}>${await lt(n, s?.default)}</${o}>`)
}
function vy(n) {
	let e = customElements.getName(n)
	return (
		e ||
		n.name
			.replace(/^HTML|Element$/g, '')
			.replace(/[A-Z]/g, '-$&')
			.toLowerCase()
			.replace(/^-/, 'html-')
	)
}
function Cy(n) {
	switch (n?.split('.').pop()) {
		case 'svelte':
			return ['@astrojs/svelte']
		case 'vue':
			return ['@astrojs/vue']
		case 'jsx':
		case 'tsx':
			return ['@astrojs/react', '@astrojs/preact', '@astrojs/solid-js', '@astrojs/vue (jsx)']
		default:
			return [
				'@astrojs/react',
				'@astrojs/preact',
				'@astrojs/solid-js',
				'@astrojs/vue',
				'@astrojs/svelte',
				'@astrojs/lit'
			]
	}
}
function xy(n) {
	return n === F
}
function Sy(n) {
	return n && n['astro:html'] === !0
}
function By(n, e) {
	let r = e ? ky : Ay
	return n.replace(r, '')
}
async function _y(n, e, r, s, o = {}) {
	if (!r && !s['client:only'])
		throw new Error(`Unable to render ${e} because it is ${r}!
Did you forget to import the component or is it possible there is a typo?`)
	let { renderers: l, clientDirectives: a } = n,
		i = { astroStaticSlot: !0, displayName: e },
		{ hydration: c, isPage: p, props: d, propsWithoutTransitionAttributes: h } = qm(s, a),
		u = '',
		g
	c &&
		((i.hydrate = c.directive),
		(i.hydrateArgs = c.value),
		(i.componentExport = c.componentExport),
		(i.componentUrl = c.componentUrl))
	let E = Cy(i.componentUrl),
		C = l.filter((j) => j.name !== 'astro:jsx'),
		{ children: v, slotInstructions: N } = await Xo(n, o),
		M
	if (i.hydrate !== 'only') {
		let j = !1
		try {
			j = r && r[Dn]
		} catch {}
		if (j) {
			let G = r[Dn]
			M = l.find(({ name: K }) => K === G)
		}
		if (!M) {
			let G
			for (let K of l)
				try {
					if (await K.ssr.check.call({ result: n }, r, d, v)) {
						M = K
						break
					}
				} catch (Ae) {
					G ??= Ae
				}
			if (!M && G) throw G
		}
		if (!M && typeof HTMLElement == 'function' && by(r)) {
			let G = await wy(n, r, s, o)
			return {
				render(K) {
					K.write(G)
				}
			}
		}
	} else {
		if (i.hydrateArgs) {
			let j = i.hydrateArgs,
				G = Eo.has(j) ? Eo.get(j) : j
			M = l.find(({ name: K }) => K === `@astrojs/${G}` || K === G)
		}
		if ((!M && C.length === 1 && (M = C[0]), !M)) {
			let j = i.componentUrl?.split('.').pop()
			M = l.filter(({ name: G }) => G === `@astrojs/${j}` || G === j)[0]
		}
	}
	if (M)
		i.hydrate === 'only'
			? (u = await lt(n, o?.fallback))
			: ({ html: u, attrs: g } = await M.ssr.renderToStaticMarkup.call({ result: n }, r, h, v, i))
	else {
		if (i.hydrate === 'only')
			throw new k({
				...Tr,
				message: Tr.message(i.displayName),
				hint: Tr.hint(E.map((j) => j.replace('@astrojs/', '')).join('|'))
			})
		if (typeof r != 'string') {
			let j = C.filter((K) => E.includes(K.name)),
				G = C.length > 1
			if (j.length === 0)
				throw new k({
					..._r,
					message: _r.message(i.displayName, i?.componentUrl?.split('.').pop(), G, C.length),
					hint: _r.hint(wo(E.map((K) => '`' + K + '`')))
				})
			if (j.length === 1)
				(M = j[0]),
					({ html: u, attrs: g } = await M.ssr.renderToStaticMarkup.call({ result: n }, r, h, v, i))
			else
				throw new Error(`Unable to render ${i.displayName}!

This component likely uses ${wo(E)},
but Astro encountered an error during server-side rendering.

Please ensure that ${i.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)
		}
	}
	if (M && !M.clientEntrypoint && M.name !== '@astrojs/lit' && i.hydrate)
		throw new k({ ...uo, message: uo.message(e, i.hydrate, M.name) })
	if (!u && typeof r == 'string') {
		let j = Ty(r),
			G = Object.values(v).join(''),
			K = D`<${j}${Lr(d)}${X(G === '' && os.test(j) ? '/>' : `>${G}</${j}>`)}`
		u = ''
		let Ae = {
			write(bt) {
				bt instanceof Response || (u += $e(n, bt))
			}
		}
		await K.render(Ae)
	}
	if (!c)
		return {
			render(j) {
				if (N) for (let G of N) j.write(G)
				p || M?.name === 'astro:jsx'
					? j.write(u)
					: u && u.length > 0 && j.write(X(By(u, M?.ssr?.supportsAstroStaticSlot ?? !1)))
			}
		}
	let ee = Km(`<!--${i.componentExport.value}:${i.componentUrl}-->
${u}
${Uo(d, i)}`),
		oe = await Zm({ renderer: M, result: n, astroId: ee, props: d, attrs: g }, i),
		ge = []
	if (u) {
		if (Object.keys(v).length > 0)
			for (let j of Object.keys(v)) {
				let G = M?.ssr?.supportsAstroStaticSlot
						? i.hydrate
							? 'astro-slot'
							: 'astro-static-slot'
						: 'astro-slot',
					K = j === 'default' ? `<${G}>` : `<${G} name="${j}">`
				u.includes(K) || ge.push(j)
			}
	} else ge = Object.keys(v)
	let he =
		ge.length > 0
			? ge
					.map(
						(j) =>
							`<template data-astro-template${j !== 'default' ? `="${j}"` : ''}>${v[j]}</template>`
					)
					.join('')
			: ''
	return (
		(oe.children = `${u ?? ''}${he}`),
		oe.children && ((oe.props['await-children'] = ''), (oe.children += '<!--astro:end-->')),
		{
			render(j) {
				if (N) for (let G of N) j.write(G)
				j.write(rs({ type: 'directive', hydration: c })), j.write(X(Le('astro-island', oe, !1)))
			}
		}
	)
}
function Ty(n) {
	let e = /[&<>'"\s]+/g
	return e.test(n) ? n.trim().split(e)[0].trim() : n
}
async function Py(n, e = {}) {
	let r = await lt(n, e?.default)
	return {
		render(s) {
			r != null && s.write(r)
		}
	}
}
async function My(n, e, r, s = {}) {
	let { slotInstructions: o, children: l } = await Xo(n, s),
		a = e({ slots: l }),
		i = o ? o.map((c) => $e(n, c)).join('') : ''
	return {
		render(c) {
			c.write(X(i + a))
		}
	}
}
function Iy(n, e, r, s, o = {}) {
	let l = Dy(n, e, r, s, o)
	return {
		async render(a) {
			await l.render(a)
		}
	}
}
async function S(n, e, r, s, o = {}) {
	return (
		ns(r) && (r = await r),
		xy(r)
			? await Py(n, o)
			: ((s = jy(s)),
				Sy(r) ? await My(n, r, s, o) : Ho(r) ? Iy(n, e, r, s, o) : await _y(n, e, r, s, o))
	)
}
function jy(n) {
	if (n['class:list'] !== void 0) {
		let e = n['class:list']
		delete n['class:list'], (n.class = Lt(n.class, e)), n.class === '' && delete n.class
	}
	return n
}
async function Ur(n, e, r, s, o = {}, l = !1, a) {
	let i = '',
		c = !1,
		p = ''
	if (Ly(r)) for (let d of L()) p += $e(n, d)
	try {
		let d = {
			write(u) {
				if (l && !c && ((c = !0), !n.partial && !/<!doctype html/i.test(String(u)))) {
					let g = n.compressHTML
						? '<!DOCTYPE html>'
						: `<!DOCTYPE html>
`
					i += g + p
				}
				u instanceof Response || (i += $e(n, u))
			}
		}
		await (await S(n, e, r, s, o)).render(d)
	} catch (d) {
		throw (k.is(d) && !d.loc && d.setLocation({ file: a?.component }), d)
	}
	return i
}
function Ly(n) {
	return !!n?.[Ey]
}
async function we(n, e) {
	switch (!0) {
		case e instanceof ot:
			return e.toString().trim() === '' ? '' : e
		case typeof e == 'string':
			return X($t(e))
		case typeof e == 'function':
			return e
		case !e && e !== 0:
			return ''
		case Array.isArray(e):
			return X((await Promise.all(e.map((s) => we(n, s)))).join(''))
	}
	let r
	return (
		e.props ? (e.props[st.symbol] ? (r = e.props[st.symbol]) : (r = new st(e))) : (r = new st(e)),
		Hr(n, e, r)
	)
}
async function Hr(n, e, r) {
	if (Ot(e)) {
		switch (!0) {
			case !e.type:
				throw new Error(`Unable to render ${n.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`)
			case e.type === Symbol.for('astro:fragment'):
				return we(n, e.props.children)
			case e.type.isAstroComponentFactory: {
				let s = {},
					o = {}
				for (let [i, c] of Object.entries(e.props ?? {}))
					i === 'children' || (c && typeof c == 'object' && c.$$slot)
						? (o[i === 'children' ? 'default' : i] = () => we(n, c))
						: (s[i] = c)
				let l = await Yo(n, e.type, s, o)
				if (l instanceof Response) throw l
				return X(l)
			}
			case !e.type && e.type !== 0:
				return ''
			case typeof e.type == 'string' && e.type !== Co:
				return X(await $y(n, e.type, e.props ?? {}))
		}
		if (e.type) {
			let s = function (d) {
				if (Array.isArray(d)) return d.map((h) => s(h))
				if (!Ot(d)) {
					a.default.push(d)
					return
				}
				if ('slot' in d.props) {
					;(a[d.props.slot] = [...(a[d.props.slot] ?? []), d]), delete d.props.slot
					return
				}
				a.default.push(d)
			}
			if (
				(typeof e.type == 'function' && e.type['astro:renderer'] && r.increment(),
				typeof e.type == 'function' && e.props['server:root'])
			) {
				let d = await e.type(e.props ?? {})
				return await we(n, d)
			}
			if (typeof e.type == 'function')
				if (r.haveNoTried() || r.isCompleted()) {
					Ry()
					try {
						let d = await e.type(e.props ?? {}),
							h
						if (d?.[Ut]) return (h = await Hr(n, d, r)), h
						if (!d) return (h = await Hr(n, d, r)), h
					} catch (d) {
						if (r.isCompleted()) throw d
						r.increment()
					} finally {
						Uy()
					}
				} else r.increment()
			let { children: o = null, ...l } = e.props ?? {},
				a = { default: [] }
			s(o)
			for (let [d, h] of Object.entries(l)) h.$$slot && ((a[d] = h), delete l[d])
			let i = [],
				c = {}
			for (let [d, h] of Object.entries(a))
				i.push(
					we(n, h).then((u) => {
						u.toString().trim().length !== 0 && (c[d] = () => u)
					})
				)
			await Promise.all(i), (l[st.symbol] = r)
			let p
			return (
				e.type === Co && e.props['client:only']
					? (p = await Ur(n, e.props['client:display-name'] ?? '', null, l, c))
					: (p = await Ur(n, typeof e.type == 'function' ? e.type.name : e.type, e.type, l, c)),
				X(p)
			)
		}
	}
	return X(`${e}`)
}
async function $y(n, e, { children: r, ...s }) {
	return X(
		`<${e}${Ee(s)}${X(
			(r == null || r == '') && os.test(e)
				? '/>'
				: `>${r == null ? '' : await we(n, Oy(e, r))}</${e}>`
		)}`
	)
}
function Oy(n, e) {
	return typeof e == 'string' && (n === 'style' || n === 'script') ? X(e) : e
}
function Ry() {
	if ((is++, !Nr)) {
		Nr = console.error
		try {
			console.error = Ny
		} catch {}
	}
}
function Uy() {
	is--
}
function Ny(n, ...e) {
	;(is > 0 &&
		typeof n == 'string' &&
		n.includes('Warning: Invalid hook call.') &&
		n.includes('https://reactjs.org/link/invalid-hook-call')) ||
		Nr(n, ...e)
}
async function Qo(n, e, r, s, o, l) {
	if (!Ho(e)) {
		n._metadata.headInTree = n.componentMetadata.get(e.moduleId)?.containsHead ?? !1
		let d = { ...(r ?? {}), 'server:root': !0 },
			h = await Ur(n, e.name, e, d, {}, !0, l),
			u = fn.encode(h)
		return new Response(u, {
			headers: new Headers([
				['Content-Type', 'text/html; charset=utf-8'],
				['Content-Length', u.byteLength.toString()]
			])
		})
	}
	n._metadata.headInTree = n.componentMetadata.get(e.moduleId)?.containsHead ?? !1
	let a
	if (
		(o ? (a = await gy(n, e, r, s, !0, l)) : (a = await Yo(n, e, r, s, !0, l)),
		a instanceof Response)
	)
		return a
	let i = n.response,
		c = new Headers(i.headers)
	return (
		!o &&
			typeof a == 'string' &&
			((a = fn.encode(a)), c.set('Content-Length', a.byteLength.toString())),
		l?.component.endsWith('.md') && c.set('Content-Type', 'text/html; charset=utf-8'),
		new Response(a, { ...i, headers: c })
	)
}
function el({ props: n, children: e }) {
	return Le('script', { props: n, children: e })
}
function cs(n, e) {
	if (e.type === 'external')
		return Array.from(n.styles).some((r) => r.props.href === e.src)
			? ''
			: Le('link', { props: { rel: 'stylesheet', href: e.src }, children: '' })
	if (e.type === 'inline')
		return Array.from(n.styles).some((r) => r.children.includes(e.content))
			? ''
			: Le('style', { props: {}, children: e.content })
}
function b(n, e) {
	n &&
		typeof n == 'function' &&
		Object.defineProperty(n, Dn, { value: e, enumerable: !1, writable: !1 })
}
function Ee(n = {}, e, { class: r } = {}) {
	let s = ''
	r &&
		(typeof n.class < 'u'
			? (n.class += ` ${r}`)
			: typeof n['class:list'] < 'u'
				? (n['class:list'] = [n['class:list'], r])
				: (n.class = r))
	for (let [o, l] of Object.entries(n)) s += _(l, o, !0)
	return X(s)
}
function Ot(n) {
	return n && typeof n == 'object' && n[Ut]
}
function Hy(n) {
	if (typeof n.type == 'string') return n
	let e = {}
	if (Ot(n.props.children)) {
		let r = n.props.children
		if (!Ot(r) || !('slot' in r.props)) return
		let s = So(r.props.slot)
		;(e[s] = [r]), (e[s].$$slot = !0), delete r.props.slot, delete n.props.children
	}
	Array.isArray(n.props.children) &&
		(n.props.children = n.props.children
			.map((r) => {
				if (!Ot(r) || !('slot' in r.props)) return r
				let s = So(r.props.slot)
				return (
					Array.isArray(e[s]) ? e[s].push(r) : ((e[s] = [r]), (e[s].$$slot = !0)),
					delete r.props.slot,
					xo
				)
			})
			.filter((r) => r !== xo)),
		Object.assign(n.props, e)
}
function tl(n) {
	return typeof n == 'string' ? X(n) : Array.isArray(n) ? n.map((e) => tl(e)) : n
}
function zy(n) {
	if ('set:html' in n.props || 'set:text' in n.props) {
		if ('set:html' in n.props) {
			let e = tl(n.props['set:html'])
			delete n.props['set:html'], Object.assign(n.props, { children: e })
			return
		}
		if ('set:text' in n.props) {
			let e = n.props['set:text']
			delete n.props['set:text'], Object.assign(n.props, { children: e })
			return
		}
	}
}
function t(n, e) {
	let r = { [Dn]: 'astro:jsx', [Ut]: !0, type: n, props: e ?? {} }
	return zy(r), Hy(r), r
}
var k,
	Rt,
	zr,
	gn,
	ho,
	Um,
	_r,
	uo,
	Tr,
	Wr,
	Gr,
	Ao,
	Vr,
	ko,
	Xr,
	mo,
	yo,
	Jr,
	qr,
	Bo,
	Zr,
	Yr,
	_o,
	Fn,
	St,
	Kr,
	To,
	bn,
	Po,
	wn,
	vn,
	Qr,
	Do,
	fo,
	Mo,
	Io,
	es,
	$t,
	mn,
	ot,
	X,
	$o,
	pe,
	No,
	jr,
	Mr,
	zo,
	ey,
	ty,
	os,
	oy,
	ly,
	ay,
	iy,
	cy,
	Et,
	dy,
	bo,
	Ir,
	$r,
	yn,
	F,
	Dn,
	fn,
	hy,
	Jo,
	Or,
	qo,
	Rr,
	Ey,
	Eo,
	Ay,
	ky,
	Co,
	st,
	Nr,
	is,
	Ut,
	xo,
	So,
	W = m(() => {
		'use strict'
		je()
		V()
		po()
		;(k = class extends Error {
			loc
			title
			hint
			frame
			type = 'AstroError'
			constructor(e, r) {
				let { name: s, title: o, message: l, stack: a, location: i, hint: c, frame: p } = e
				super(l, r),
					(this.title = o),
					(this.name = s),
					l && (this.message = l),
					(this.stack = a || this.stack),
					(this.loc = i),
					(this.hint = c),
					(this.frame = p)
			}
			setLocation(e) {
				this.loc = e
			}
			setName(e) {
				this.name = e
			}
			setMessage(e) {
				this.message = e
			}
			setHint(e) {
				this.hint = e
			}
			setFrame(e, r) {
				this.frame = Rm(e, r)
			}
			static is(e) {
				return e.type === 'AstroError'
			}
		}),
			(Rt = {
				name: 'ClientAddressNotAvailable',
				title: '`Astro.clientAddress` is not available in current adapter.',
				message: (n) =>
					`\`Astro.clientAddress\` is not available in the \`${n}\` adapter. File an issue with the adapter to add support.`
			}),
			(zr = {
				name: 'StaticClientAddressNotAvailable',
				title: '`Astro.clientAddress` is not available in static mode.',
				message:
					"`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
				hint: 'See https://docs.astro.build/en/guides/server-side-rendering/ for more information on how to enable SSR.'
			}),
			(gn = {
				name: 'NoMatchingStaticPathFound',
				title: 'No static path found for requested path.',
				message: (n) =>
					`A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${n}\`.`,
				hint: (n) => `Possible dynamic routes being matched: ${n.join(', ')}.`
			}),
			(ho = {
				name: 'OnlyResponseCanBeReturned',
				title: 'Invalid type returned by Astro page.',
				message: (n, e) =>
					`Route \`${
						n || ''
					}\` returned a \`${e}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
				hint: 'See https://docs.astro.build/en/guides/server-side-rendering/#response for more information.'
			}),
			(Um = {
				name: 'MissingMediaQueryDirective',
				title: 'Missing value for `client:media` directive.',
				message:
					'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
			}),
			(_r = {
				name: 'NoMatchingRenderer',
				title: 'No matching renderer found.',
				message: (n, e, r, s) => `Unable to render \`${n}\`.

${
	s > 0
		? `There ${r ? 'are' : 'is'} ${s} renderer${
				r ? 's' : ''
			} configured in your \`astro.config.mjs\` file,
but ${r ? 'none were' : 'it was not'} able to server-side render \`${n}\`.`
		: `No valid renderer was found ${
				e ? `for the \`.${e}\` file extension.` : 'for this file extension.'
			}`
}`,
				hint: (n) => `Did you mean to enable the ${n} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
			}),
			(uo = {
				name: 'NoClientEntrypoint',
				title: 'No client entrypoint specified in renderer.',
				message: (n, e, r) =>
					`\`${n}\` component has a \`client:${e}\` directive, but no client entrypoint was provided by \`${r}\`.`,
				hint: 'See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer.'
			}),
			(Tr = {
				name: 'NoClientOnlyHint',
				title: 'Missing hint on client:only directive.',
				message: (n) =>
					`Unable to render \`${n}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
				hint: (n) =>
					`Did you mean to pass \`client:only="${n}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
			}),
			(Wr = {
				name: 'InvalidGetStaticPathsEntry',
				title: "Invalid entry inside getStaticPath's return value",
				message: (n) =>
					`Invalid entry returned by getStaticPaths. Expected an object, got \`${n}\``,
				hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
			}),
			(Gr = {
				name: 'InvalidGetStaticPathsReturn',
				title: 'Invalid value returned by getStaticPaths.',
				message: (n) =>
					`Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${n}\``,
				hint: 'See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.'
			}),
			(Ao = {
				name: 'GetStaticPathsExpectedParams',
				title: 'Missing params property on `getStaticPaths` route.',
				message: 'Missing or empty required `params` property on `getStaticPaths` route.',
				hint: 'See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.'
			}),
			(Vr = {
				name: 'GetStaticPathsInvalidRouteParam',
				title: 'Invalid value for `getStaticPaths` route parameter.',
				message: (n, e, r) =>
					`Invalid getStaticPaths route parameter for \`${n}\`. Expected undefined, a string or a number, received \`${r}\` (\`${e}\`)`,
				hint: 'See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.'
			}),
			(ko = {
				name: 'GetStaticPathsRequired',
				title: '`getStaticPaths()` function required for dynamic routes.',
				message:
					'`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.',
				hint: 'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` or `output: "hybrid"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.'
			}),
			(Xr = {
				name: 'ReservedSlotName',
				title: 'Invalid slot name.',
				message: (n) =>
					`Unable to create a slot named \`${n}\`. \`${n}\` is a reserved slot name. Please update the name of this slot.`
			}),
			(mo = {
				name: 'NoMatchingImport',
				title: 'No import found for component.',
				message: (n) =>
					`Could not render \`${n}\`. No matching import has been found for \`${n}\`.`,
				hint: 'Please make sure the component is properly imported.'
			}),
			(yo = {
				name: 'InvalidComponentArgs',
				title: 'Invalid component arguments.',
				message: (n) => `Invalid arguments passed to${n ? ` <${n}>` : ''} component.`,
				hint: 'Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`.'
			}),
			(Jr = {
				name: 'PageNumberParamNotFound',
				title: 'Page number param not found.',
				message: (n) => `[paginate()] page number param \`${n}\` not found in your filepath.`,
				hint: 'Rename your file to `[page].astro` or `[...page].astro`.'
			}),
			(qr = {
				name: 'ImageMissingAlt',
				title: 'Image missing required "alt" property.',
				message:
					'Image missing "alt" property. "alt" text is required to describe important images on the page.',
				hint: 'Use an empty string ("") for decorative images.'
			}),
			(Bo = {
				name: 'InvalidImageService',
				title: 'Error while loading image service.',
				message:
					'There was an error loading the configured image service. Please see the stack trace for more information.'
			}),
			(Zr = {
				name: 'MissingImageDimension',
				title: 'Missing image dimensions',
				message: (n, e) =>
					`Missing ${
						n === 'both' ? 'width and height attributes' : `${n} attribute`
					} for ${e}. When using remote images, both dimensions are always required in order to avoid CLS.`,
				hint: 'If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets).'
			}),
			(Yr = {
				name: 'UnsupportedImageFormat',
				title: 'Unsupported image format',
				message: (n, e, r) =>
					`Received unsupported format \`${n}\` from \`${e}\`. Currently only ${r.join(
						', '
					)} are supported by our image services.`,
				hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for."
			}),
			(_o = {
				name: 'UnsupportedImageConversion',
				title: 'Unsupported image conversion',
				message:
					'Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported.'
			}),
			(Fn = {
				name: 'PrerenderDynamicEndpointPathCollide',
				title: 'Prerendered dynamic endpoint has path collision.',
				message: (n) =>
					`Could not render \`${n}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
				hint: (n) => `Rename \`${n}\` to \`${n.replace(/\.(js|ts)/, (e) => '.json' + e)}\``
			}),
			(St = {
				name: 'ExpectedImage',
				title: 'Expected src to be an image.',
				message: (
					n,
					e,
					r
				) => `Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${n}\` (type: \`${e}\`).

Full serialized options received: \`${r}\`.`,
				hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."
			}),
			(Kr = {
				name: 'ExpectedImageOptions',
				title: 'Expected image options.',
				message: (n) => `Expected getImage() parameter to be an object. Received \`${n}\`.`
			}),
			(To = {
				name: 'IncompatibleDescriptorOptions',
				title: 'Cannot set both `densities` and `widths`',
				message:
					"Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",
				hint: 'Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors.'
			}),
			(bn = {
				name: 'ResponseSentError',
				title: 'Unable to set response.',
				message: 'The response has already been sent to the browser and cannot be altered.'
			}),
			(Po = {
				name: 'MiddlewareNoDataOrNextCalled',
				title: "The middleware didn't return a `Response`.",
				message:
					'Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function.'
			}),
			(wn = {
				name: 'MiddlewareNotAResponse',
				title: 'The middleware returned something that is not a `Response` object.',
				message: 'Any data returned from middleware must be a valid `Response` object.'
			}),
			(vn = {
				name: 'LocalsNotAnObject',
				title: 'Value assigned to `locals` is not accepted.',
				message:
					'`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.',
				hint: 'If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`.'
			}),
			(Qr = {
				name: 'LocalImageUsedWrongly',
				title: 'Local images must be imported.',
				message: (n) =>
					`\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${n}\`.`,
				hint: 'If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections) See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property.'
			}),
			(Do = {
				name: 'AstroGlobUsedOutside',
				title: 'Astro.glob() used outside of an Astro file.',
				message: (n) =>
					`\`Astro.glob(${n})\` can only be used in \`.astro\` files. \`import.meta.glob(${n})\` can be used instead to achieve a similar result.`,
				hint: "See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"
			}),
			(fo = {
				name: 'AstroGlobNoMatch',
				title: 'Astro.glob() did not match any files.',
				message: (n) =>
					`\`Astro.glob(${n})\` did not return any matching files. Check the pattern for typos.`
			}),
			(Mo = { name: 'UnknownContentCollectionError', title: 'Unknown Content Collection Error.' }),
			(Io = {
				name: 'CantRenderPage',
				title: "Astro can't render the route.",
				message:
					'Astro cannot find any content to render for this route. There is no file or redirect associated with this route.',
				hint: 'If you expect to find a route here, this may be an Astro bug. Please file an issue/restart the dev server'
			})
		es = '4.0.8'
		;($t = co), (mn = class extends Uint8Array {})
		Object.defineProperty(mn.prototype, Symbol.toStringTag, {
			get() {
				return 'HTMLBytes'
			}
		})
		;(ot = class extends String {
			get [Symbol.toStringTag]() {
				return 'HTMLString'
			}
		}),
			(X = (n) => (n instanceof ot ? n : typeof n == 'string' ? new ot(n) : n))
		$o = Symbol.for('astro:render')
		pe = {
			Value: 0,
			JSON: 1,
			RegExp: 2,
			Date: 3,
			Map: 4,
			Set: 5,
			BigInt: 6,
			URL: 7,
			Uint8Array: 8,
			Uint16Array: 9,
			Uint32Array: 10
		}
		No = Object.freeze(['data-astro-transition-scope', 'data-astro-transition-persist'])
		;(jr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY'), (Mr = jr.length)
		zo = Symbol.for('astro.headAndContent')
		;(ey =
			'(()=>{var b=Object.defineProperty;var f=(c,o,i)=>o in c?b(c,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[o]=i;var l=(c,o,i)=>(f(c,typeof o!="symbol"?o+"":o,i),i);var p;{let c={0:t=>m(t),1:t=>i(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(i(t)),5:t=>new Set(i(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let[e,r]=t;return e in c?c[e](r):void 0},i=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,r])=>[e,o(r)]));customElements.get("astro-island")||customElements.define("astro-island",(p=class extends HTMLElement{constructor(){super(...arguments);l(this,"Component");l(this,"hydrator");l(this,"hydrate",async()=>{var d;if(!this.hydrator||!this.isConnected)return;let e=(d=this.parentElement)==null?void 0:d.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let r=this.querySelectorAll("astro-slot"),a={},h=this.querySelectorAll("template[data-astro-template]");for(let n of h){let s=n.closest(this.tagName);s!=null&&s.isSameNode(this)&&(a[n.getAttribute("data-astro-template")||"default"]=n.innerHTML,n.remove())}for(let n of r){let s=n.closest(this.tagName);s!=null&&s.isSameNode(this)&&(a[n.getAttribute("name")||"default"]=n.innerHTML)}let u;try{u=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(n){let s=this.getAttribute("component-url")||"<unknown>",y=this.getAttribute("component-export");throw y&&(s+=` (export ${y})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),n),n}await this.hydrator(this)(this.Component,u,a,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});l(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),r.disconnect(),this.childrenConnectedCallback()},r=new MutationObserver(()=>{var a;((a=this.lastChild)==null?void 0:a.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});r.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),r=this.getAttribute("client");if(Astro[r]===void 0){window.addEventListener(`astro:${r}`,()=>this.start(),{once:!0});return}Astro[r](async()=>{let a=this.getAttribute("renderer-url"),[h,{default:u}]=await Promise.all([import(this.getAttribute("component-url")),a?import(a):()=>()=>{}]),d=this.getAttribute("component-export")||"default";if(!d.includes("."))this.Component=h[d];else{this.Component=h;for(let n of d.split("."))this.Component=this.Component[n]}return this.hydrator=u,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},l(p,"observedAttributes",["props"]),p))}})();'),
			(ty = '<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>')
		;(os =
			/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i),
			(oy =
				/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i),
			(ly = /^(contenteditable|draggable|spellcheck|value)$/i),
			(ay = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i),
			(iy = new Set(['set:html', 'set:text'])),
			(cy = (n) =>
				n
					.trim()
					.replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (e, r) =>
						/[^\w]|\s/.test(e) ? '' : r === 0 ? e : e.toUpperCase()
					)),
			(Et = (n, e = !0) => (e ? String(n).replace(/&/g, '&#38;').replace(/"/g, '&#34;') : n)),
			(dy = (n) => (n.toLowerCase() === n ? n : n.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`))),
			(bo = (n) =>
				Object.entries(n)
					.filter(([e, r]) => (typeof r == 'string' && r.trim()) || typeof r == 'number')
					.map(([e, r]) => (e[0] !== '-' && e[1] !== '-' ? `${dy(e)}:${r}` : `${e}:${r}`))
					.join(';'))
		Ir = (n, e, r) => {
			let s = JSON.stringify(n.props),
				o = n.children
			return e === r.findIndex((l) => JSON.stringify(l.props) === s && l.children == o)
		}
		;($r = Symbol.for('astro:slot-string')),
			(yn = class extends ot {
				instructions;
				[$r]
				constructor(e, r) {
					super(e), (this.instructions = r), (this[$r] = !0)
				}
			})
		;(F = Symbol.for('astro:fragment')),
			(Dn = Symbol.for('astro:renderer')),
			(fn = new TextEncoder()),
			(hy = new TextDecoder())
		;(Jo = Symbol.for('astro.componentInstance')),
			(Or = class {
				[Jo] = !0
				result
				props
				slotValues
				factory
				returnValue
				constructor(e, r, s, o) {
					;(this.result = e), (this.props = r), (this.factory = o), (this.slotValues = {})
					for (let l in s) {
						let a = !1,
							i = s[l](e)
						this.slotValues[l] = () => (a ? s[l](e) : ((a = !0), i))
					}
				}
				async init(e) {
					return this.returnValue !== void 0
						? this.returnValue
						: ((this.returnValue = this.factory(e, this.props, this.slotValues)), this.returnValue)
				}
				async render(e) {
					this.returnValue === void 0 && (await this.init(this.result))
					let r = this.returnValue
					ns(r) && (r = await r), ss(r) ? await r.content.render(e) : await Ct(e, r)
				}
			})
		;(qo = Symbol.for('astro.renderTemplateResult')),
			(Rr = class {
				[qo] = !0
				htmlParts
				expressions
				error
				constructor(e, r) {
					;(this.htmlParts = e),
						(this.error = void 0),
						(this.expressions = r.map((s) =>
							ns(s)
								? Promise.resolve(s).catch((o) => {
										if (!this.error) throw ((this.error = o), o)
									})
								: s
						))
				}
				async render(e) {
					let r = this.expressions.map((s) =>
						Go((o) => {
							if (s || s === 0) return Ct(o, s)
						})
					)
					for (let s = 0; s < this.htmlParts.length; s++) {
						let o = this.htmlParts[s],
							l = r[s]
						e.write(X(o)), l && (await l.renderToFinalDestination(e))
					}
				}
			})
		;(Ey = Symbol.for('astro.needsHeadRendering')), (Eo = new Map([['solid', 'solid-js']]))
		;(Ay = /\<\/?astro-slot\b[^>]*>/g), (ky = /\<\/?astro-static-slot\b[^>]*>/g)
		;(Co = 'astro-client-only'),
			(st = class {
				constructor(e) {
					;(this.vnode = e), (this.count = 0)
				}
				count
				increment() {
					this.count++
				}
				haveNoTried() {
					return this.count === 0
				}
				isCompleted() {
					return this.count > 2
				}
				static symbol = Symbol('astro:jsx:skip')
			}),
			(is = 0)
		;(Ut = 'astro:jsx'), (xo = Symbol('empty')), (So = (n) => n)
	})
async function Qy(n, e, { default: r = null, ...s } = {}) {
	if (typeof n != 'function') return !1
	let o = {}
	for (let [l, a] of Object.entries(s)) {
		let i = cl(l)
		o[i] = a
	}
	try {
		return (await n({ ...e, ...o, children: r }))[Ut]
	} catch (l) {
		let a = l
		if (n[Symbol.for('mdx-component')])
			throw new k({
				message: a.message,
				title: a.name,
				hint: 'This issue often occurs when your MDX component encounters runtime errors.',
				name: a.name,
				stack: a.stack
			})
	}
	return !1
}
async function eD(n, e = {}, { default: r = null, ...s } = {}) {
	let o = {}
	for (let [i, c] of Object.entries(s)) {
		let p = cl(i)
		o[p] = c
	}
	let { result: l } = this
	return { html: await we(l, t(n, { ...e, ...o, children: r })) }
}
var cl,
	tD,
	re,
	ke = m(() => {
		'use strict'
		W()
		cl = (n) => n.trim().replace(/[-_]([a-z])/g, (e, r) => r.toUpperCase())
		;(tD = { check: Qy, renderToStaticMarkup: eD }),
			(re = [
				Object.assign(
					{ name: 'astro:jsx', serverEntrypoint: 'astro/jsx/server.js', jsxImportSource: 'astro' },
					{ ssr: tD }
				)
			])
	})
var ae,
	Oe = m(() => {
		'use strict'
		ae = void 0
	})
var pl = ne((wC, dl) => {
	'use strict'
	function xn() {
		;(this._types = Object.create(null)), (this._extensions = Object.create(null))
		for (let n = 0; n < arguments.length; n++) this.define(arguments[n])
		;(this.define = this.define.bind(this)),
			(this.getType = this.getType.bind(this)),
			(this.getExtension = this.getExtension.bind(this))
	}
	xn.prototype.define = function (n, e) {
		for (let r in n) {
			let s = n[r].map(function (o) {
				return o.toLowerCase()
			})
			r = r.toLowerCase()
			for (let o = 0; o < s.length; o++) {
				let l = s[o]
				if (l[0] !== '*') {
					if (!e && l in this._types)
						throw new Error(
							'Attempt to change mapping for "' +
								l +
								'" extension from "' +
								this._types[l] +
								'" to "' +
								r +
								'". Pass `force=true` to allow this, otherwise remove "' +
								l +
								'" from the list of extensions for "' +
								r +
								'".'
						)
					this._types[l] = r
				}
			}
			if (e || !this._extensions[r]) {
				let o = s[0]
				this._extensions[r] = o[0] !== '*' ? o : o.substr(1)
			}
		}
	}
	xn.prototype.getType = function (n) {
		n = String(n)
		let e = n.replace(/^.*[/\\]/, '').toLowerCase(),
			r = e.replace(/^.*\./, '').toLowerCase(),
			s = e.length < n.length
		return ((r.length < e.length - 1 || !s) && this._types[r]) || null
	}
	xn.prototype.getExtension = function (n) {
		return (
			(n = /^\s*([^;\s]*)/.test(n) && RegExp.$1), (n && this._extensions[n.toLowerCase()]) || null
		)
	}
	dl.exports = xn
})
var ul = ne((vC, hl) => {
	hl.exports = {
		'application/andrew-inset': ['ez'],
		'application/applixware': ['aw'],
		'application/atom+xml': ['atom'],
		'application/atomcat+xml': ['atomcat'],
		'application/atomdeleted+xml': ['atomdeleted'],
		'application/atomsvc+xml': ['atomsvc'],
		'application/atsc-dwd+xml': ['dwd'],
		'application/atsc-held+xml': ['held'],
		'application/atsc-rsat+xml': ['rsat'],
		'application/bdoc': ['bdoc'],
		'application/calendar+xml': ['xcs'],
		'application/ccxml+xml': ['ccxml'],
		'application/cdfx+xml': ['cdfx'],
		'application/cdmi-capability': ['cdmia'],
		'application/cdmi-container': ['cdmic'],
		'application/cdmi-domain': ['cdmid'],
		'application/cdmi-object': ['cdmio'],
		'application/cdmi-queue': ['cdmiq'],
		'application/cu-seeme': ['cu'],
		'application/dash+xml': ['mpd'],
		'application/davmount+xml': ['davmount'],
		'application/docbook+xml': ['dbk'],
		'application/dssc+der': ['dssc'],
		'application/dssc+xml': ['xdssc'],
		'application/ecmascript': ['es', 'ecma'],
		'application/emma+xml': ['emma'],
		'application/emotionml+xml': ['emotionml'],
		'application/epub+zip': ['epub'],
		'application/exi': ['exi'],
		'application/express': ['exp'],
		'application/fdt+xml': ['fdt'],
		'application/font-tdpfr': ['pfr'],
		'application/geo+json': ['geojson'],
		'application/gml+xml': ['gml'],
		'application/gpx+xml': ['gpx'],
		'application/gxf': ['gxf'],
		'application/gzip': ['gz'],
		'application/hjson': ['hjson'],
		'application/hyperstudio': ['stk'],
		'application/inkml+xml': ['ink', 'inkml'],
		'application/ipfix': ['ipfix'],
		'application/its+xml': ['its'],
		'application/java-archive': ['jar', 'war', 'ear'],
		'application/java-serialized-object': ['ser'],
		'application/java-vm': ['class'],
		'application/javascript': ['js', 'mjs'],
		'application/json': ['json', 'map'],
		'application/json5': ['json5'],
		'application/jsonml+json': ['jsonml'],
		'application/ld+json': ['jsonld'],
		'application/lgr+xml': ['lgr'],
		'application/lost+xml': ['lostxml'],
		'application/mac-binhex40': ['hqx'],
		'application/mac-compactpro': ['cpt'],
		'application/mads+xml': ['mads'],
		'application/manifest+json': ['webmanifest'],
		'application/marc': ['mrc'],
		'application/marcxml+xml': ['mrcx'],
		'application/mathematica': ['ma', 'nb', 'mb'],
		'application/mathml+xml': ['mathml'],
		'application/mbox': ['mbox'],
		'application/mediaservercontrol+xml': ['mscml'],
		'application/metalink+xml': ['metalink'],
		'application/metalink4+xml': ['meta4'],
		'application/mets+xml': ['mets'],
		'application/mmt-aei+xml': ['maei'],
		'application/mmt-usd+xml': ['musd'],
		'application/mods+xml': ['mods'],
		'application/mp21': ['m21', 'mp21'],
		'application/mp4': ['mp4s', 'm4p'],
		'application/msword': ['doc', 'dot'],
		'application/mxf': ['mxf'],
		'application/n-quads': ['nq'],
		'application/n-triples': ['nt'],
		'application/node': ['cjs'],
		'application/octet-stream': [
			'bin',
			'dms',
			'lrf',
			'mar',
			'so',
			'dist',
			'distz',
			'pkg',
			'bpk',
			'dump',
			'elc',
			'deploy',
			'exe',
			'dll',
			'deb',
			'dmg',
			'iso',
			'img',
			'msi',
			'msp',
			'msm',
			'buffer'
		],
		'application/oda': ['oda'],
		'application/oebps-package+xml': ['opf'],
		'application/ogg': ['ogx'],
		'application/omdoc+xml': ['omdoc'],
		'application/onenote': ['onetoc', 'onetoc2', 'onetmp', 'onepkg'],
		'application/oxps': ['oxps'],
		'application/p2p-overlay+xml': ['relo'],
		'application/patch-ops-error+xml': ['xer'],
		'application/pdf': ['pdf'],
		'application/pgp-encrypted': ['pgp'],
		'application/pgp-signature': ['asc', 'sig'],
		'application/pics-rules': ['prf'],
		'application/pkcs10': ['p10'],
		'application/pkcs7-mime': ['p7m', 'p7c'],
		'application/pkcs7-signature': ['p7s'],
		'application/pkcs8': ['p8'],
		'application/pkix-attr-cert': ['ac'],
		'application/pkix-cert': ['cer'],
		'application/pkix-crl': ['crl'],
		'application/pkix-pkipath': ['pkipath'],
		'application/pkixcmp': ['pki'],
		'application/pls+xml': ['pls'],
		'application/postscript': ['ai', 'eps', 'ps'],
		'application/provenance+xml': ['provx'],
		'application/pskc+xml': ['pskcxml'],
		'application/raml+yaml': ['raml'],
		'application/rdf+xml': ['rdf', 'owl'],
		'application/reginfo+xml': ['rif'],
		'application/relax-ng-compact-syntax': ['rnc'],
		'application/resource-lists+xml': ['rl'],
		'application/resource-lists-diff+xml': ['rld'],
		'application/rls-services+xml': ['rs'],
		'application/route-apd+xml': ['rapd'],
		'application/route-s-tsid+xml': ['sls'],
		'application/route-usd+xml': ['rusd'],
		'application/rpki-ghostbusters': ['gbr'],
		'application/rpki-manifest': ['mft'],
		'application/rpki-roa': ['roa'],
		'application/rsd+xml': ['rsd'],
		'application/rss+xml': ['rss'],
		'application/rtf': ['rtf'],
		'application/sbml+xml': ['sbml'],
		'application/scvp-cv-request': ['scq'],
		'application/scvp-cv-response': ['scs'],
		'application/scvp-vp-request': ['spq'],
		'application/scvp-vp-response': ['spp'],
		'application/sdp': ['sdp'],
		'application/senml+xml': ['senmlx'],
		'application/sensml+xml': ['sensmlx'],
		'application/set-payment-initiation': ['setpay'],
		'application/set-registration-initiation': ['setreg'],
		'application/shf+xml': ['shf'],
		'application/sieve': ['siv', 'sieve'],
		'application/smil+xml': ['smi', 'smil'],
		'application/sparql-query': ['rq'],
		'application/sparql-results+xml': ['srx'],
		'application/srgs': ['gram'],
		'application/srgs+xml': ['grxml'],
		'application/sru+xml': ['sru'],
		'application/ssdl+xml': ['ssdl'],
		'application/ssml+xml': ['ssml'],
		'application/swid+xml': ['swidtag'],
		'application/tei+xml': ['tei', 'teicorpus'],
		'application/thraud+xml': ['tfi'],
		'application/timestamped-data': ['tsd'],
		'application/toml': ['toml'],
		'application/trig': ['trig'],
		'application/ttml+xml': ['ttml'],
		'application/ubjson': ['ubj'],
		'application/urc-ressheet+xml': ['rsheet'],
		'application/urc-targetdesc+xml': ['td'],
		'application/voicexml+xml': ['vxml'],
		'application/wasm': ['wasm'],
		'application/widget': ['wgt'],
		'application/winhlp': ['hlp'],
		'application/wsdl+xml': ['wsdl'],
		'application/wspolicy+xml': ['wspolicy'],
		'application/xaml+xml': ['xaml'],
		'application/xcap-att+xml': ['xav'],
		'application/xcap-caps+xml': ['xca'],
		'application/xcap-diff+xml': ['xdf'],
		'application/xcap-el+xml': ['xel'],
		'application/xcap-ns+xml': ['xns'],
		'application/xenc+xml': ['xenc'],
		'application/xhtml+xml': ['xhtml', 'xht'],
		'application/xliff+xml': ['xlf'],
		'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
		'application/xml-dtd': ['dtd'],
		'application/xop+xml': ['xop'],
		'application/xproc+xml': ['xpl'],
		'application/xslt+xml': ['*xsl', 'xslt'],
		'application/xspf+xml': ['xspf'],
		'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
		'application/yang': ['yang'],
		'application/yin+xml': ['yin'],
		'application/zip': ['zip'],
		'audio/3gpp': ['*3gpp'],
		'audio/adpcm': ['adp'],
		'audio/amr': ['amr'],
		'audio/basic': ['au', 'snd'],
		'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
		'audio/mobile-xmf': ['mxmf'],
		'audio/mp3': ['*mp3'],
		'audio/mp4': ['m4a', 'mp4a'],
		'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
		'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
		'audio/s3m': ['s3m'],
		'audio/silk': ['sil'],
		'audio/wav': ['wav'],
		'audio/wave': ['*wav'],
		'audio/webm': ['weba'],
		'audio/xm': ['xm'],
		'font/collection': ['ttc'],
		'font/otf': ['otf'],
		'font/ttf': ['ttf'],
		'font/woff': ['woff'],
		'font/woff2': ['woff2'],
		'image/aces': ['exr'],
		'image/apng': ['apng'],
		'image/avif': ['avif'],
		'image/bmp': ['bmp'],
		'image/cgm': ['cgm'],
		'image/dicom-rle': ['drle'],
		'image/emf': ['emf'],
		'image/fits': ['fits'],
		'image/g3fax': ['g3'],
		'image/gif': ['gif'],
		'image/heic': ['heic'],
		'image/heic-sequence': ['heics'],
		'image/heif': ['heif'],
		'image/heif-sequence': ['heifs'],
		'image/hej2k': ['hej2'],
		'image/hsj2': ['hsj2'],
		'image/ief': ['ief'],
		'image/jls': ['jls'],
		'image/jp2': ['jp2', 'jpg2'],
		'image/jpeg': ['jpeg', 'jpg', 'jpe'],
		'image/jph': ['jph'],
		'image/jphc': ['jhc'],
		'image/jpm': ['jpm'],
		'image/jpx': ['jpx', 'jpf'],
		'image/jxr': ['jxr'],
		'image/jxra': ['jxra'],
		'image/jxrs': ['jxrs'],
		'image/jxs': ['jxs'],
		'image/jxsc': ['jxsc'],
		'image/jxsi': ['jxsi'],
		'image/jxss': ['jxss'],
		'image/ktx': ['ktx'],
		'image/ktx2': ['ktx2'],
		'image/png': ['png'],
		'image/sgi': ['sgi'],
		'image/svg+xml': ['svg', 'svgz'],
		'image/t38': ['t38'],
		'image/tiff': ['tif', 'tiff'],
		'image/tiff-fx': ['tfx'],
		'image/webp': ['webp'],
		'image/wmf': ['wmf'],
		'message/disposition-notification': ['disposition-notification'],
		'message/global': ['u8msg'],
		'message/global-delivery-status': ['u8dsn'],
		'message/global-disposition-notification': ['u8mdn'],
		'message/global-headers': ['u8hdr'],
		'message/rfc822': ['eml', 'mime'],
		'model/3mf': ['3mf'],
		'model/gltf+json': ['gltf'],
		'model/gltf-binary': ['glb'],
		'model/iges': ['igs', 'iges'],
		'model/mesh': ['msh', 'mesh', 'silo'],
		'model/mtl': ['mtl'],
		'model/obj': ['obj'],
		'model/step+xml': ['stpx'],
		'model/step+zip': ['stpz'],
		'model/step-xml+zip': ['stpxz'],
		'model/stl': ['stl'],
		'model/vrml': ['wrl', 'vrml'],
		'model/x3d+binary': ['*x3db', 'x3dbz'],
		'model/x3d+fastinfoset': ['x3db'],
		'model/x3d+vrml': ['*x3dv', 'x3dvz'],
		'model/x3d+xml': ['x3d', 'x3dz'],
		'model/x3d-vrml': ['x3dv'],
		'text/cache-manifest': ['appcache', 'manifest'],
		'text/calendar': ['ics', 'ifb'],
		'text/coffeescript': ['coffee', 'litcoffee'],
		'text/css': ['css'],
		'text/csv': ['csv'],
		'text/html': ['html', 'htm', 'shtml'],
		'text/jade': ['jade'],
		'text/jsx': ['jsx'],
		'text/less': ['less'],
		'text/markdown': ['markdown', 'md'],
		'text/mathml': ['mml'],
		'text/mdx': ['mdx'],
		'text/n3': ['n3'],
		'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
		'text/richtext': ['rtx'],
		'text/rtf': ['*rtf'],
		'text/sgml': ['sgml', 'sgm'],
		'text/shex': ['shex'],
		'text/slim': ['slim', 'slm'],
		'text/spdx': ['spdx'],
		'text/stylus': ['stylus', 'styl'],
		'text/tab-separated-values': ['tsv'],
		'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
		'text/turtle': ['ttl'],
		'text/uri-list': ['uri', 'uris', 'urls'],
		'text/vcard': ['vcard'],
		'text/vtt': ['vtt'],
		'text/xml': ['*xml'],
		'text/yaml': ['yaml', 'yml'],
		'video/3gpp': ['3gp', '3gpp'],
		'video/3gpp2': ['3g2'],
		'video/h261': ['h261'],
		'video/h263': ['h263'],
		'video/h264': ['h264'],
		'video/iso.segment': ['m4s'],
		'video/jpeg': ['jpgv'],
		'video/jpm': ['*jpm', 'jpgm'],
		'video/mj2': ['mj2', 'mjp2'],
		'video/mp2t': ['ts'],
		'video/mp4': ['mp4', 'mp4v', 'mpg4'],
		'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
		'video/ogg': ['ogv'],
		'video/quicktime': ['qt', 'mov'],
		'video/webm': ['webm']
	}
})
var yl = ne((EC, ml) => {
	'use strict'
	var nD = pl()
	ml.exports = new nD(ul())
})
var Sn = m(() => {})
function rD(n) {
	let e = oD(n),
		{ conflictingClassGroups: r, conflictingClassGroupModifiers: s } = n
	function o(a) {
		let i = a.split(hs)
		return i[0] === '' && i.length !== 1 && i.shift(), gl(i, e) || sD(a)
	}
	function l(a, i) {
		let c = r[a] || []
		return i && s[a] ? [...c, ...s[a]] : c
	}
	return { getClassGroupId: o, getConflictingClassGroupIds: l }
}
function gl(n, e) {
	if (n.length === 0) return e.classGroupId
	let r = n[0],
		s = e.nextPart.get(r),
		o = s ? gl(n.slice(1), s) : void 0
	if (o) return o
	if (e.validators.length === 0) return
	let l = n.join(hs)
	return e.validators.find(({ validator: a }) => a(l))?.classGroupId
}
function sD(n) {
	if (Dl.test(n)) {
		let e = Dl.exec(n)[1],
			r = e?.substring(0, e.indexOf(':'))
		if (r) return 'arbitrary..' + r
	}
}
function oD(n) {
	let { theme: e, prefix: r } = n,
		s = { nextPart: new Map(), validators: [] }
	return (
		aD(Object.entries(n.classGroups), r).forEach(([l, a]) => {
			ps(a, s, l, e)
		}),
		s
	)
}
function ps(n, e, r, s) {
	n.forEach((o) => {
		if (typeof o == 'string') {
			let l = o === '' ? e : fl(e, o)
			l.classGroupId = r
			return
		}
		if (typeof o == 'function') {
			if (lD(o)) {
				ps(o(s), e, r, s)
				return
			}
			e.validators.push({ validator: o, classGroupId: r })
			return
		}
		Object.entries(o).forEach(([l, a]) => {
			ps(a, fl(e, l), r, s)
		})
	})
}
function fl(n, e) {
	let r = n
	return (
		e.split(hs).forEach((s) => {
			r.nextPart.has(s) || r.nextPart.set(s, { nextPart: new Map(), validators: [] }),
				(r = r.nextPart.get(s))
		}),
		r
	)
}
function lD(n) {
	return n.isThemeGetter
}
function aD(n, e) {
	return e
		? n.map(([r, s]) => {
				let o = s.map((l) =>
					typeof l == 'string'
						? e + l
						: typeof l == 'object'
							? Object.fromEntries(Object.entries(l).map(([a, i]) => [e + a, i]))
							: l
				)
				return [r, o]
			})
		: n
}
function iD(n) {
	if (n < 1) return { get: () => {}, set: () => {} }
	let e = 0,
		r = new Map(),
		s = new Map()
	function o(l, a) {
		r.set(l, a), e++, e > n && ((e = 0), (s = r), (r = new Map()))
	}
	return {
		get(l) {
			let a = r.get(l)
			if (a !== void 0) return a
			if ((a = s.get(l)) !== void 0) return o(l, a), a
		},
		set(l, a) {
			r.has(l) ? r.set(l, a) : o(l, a)
		}
	}
}
function cD(n) {
	let e = n.separator,
		r = e.length === 1,
		s = e[0],
		o = e.length
	return function (a) {
		let i = [],
			c = 0,
			p = 0,
			d
		for (let C = 0; C < a.length; C++) {
			let v = a[C]
			if (c === 0) {
				if (v === s && (r || a.slice(C, C + o) === e)) {
					i.push(a.slice(p, C)), (p = C + o)
					continue
				}
				if (v === '/') {
					d = C
					continue
				}
			}
			v === '[' ? c++ : v === ']' && c--
		}
		let h = i.length === 0 ? a : a.substring(p),
			u = h.startsWith(Fl),
			g = u ? h.substring(1) : h,
			E = d && d > p ? d - p : void 0
		return {
			modifiers: i,
			hasImportantModifier: u,
			baseClassName: g,
			maybePostfixModifierPosition: E
		}
	}
}
function dD(n) {
	if (n.length <= 1) return n
	let e = [],
		r = []
	return (
		n.forEach((s) => {
			s[0] === '[' ? (e.push(...r.sort(), s), (r = [])) : r.push(s)
		}),
		e.push(...r.sort()),
		e
	)
}
function pD(n) {
	return { cache: iD(n.cacheSize), splitModifiers: cD(n), ...rD(n) }
}
function uD(n, e) {
	let { splitModifiers: r, getClassGroupId: s, getConflictingClassGroupIds: o } = e,
		l = new Set()
	return n
		.trim()
		.split(hD)
		.map((a) => {
			let {
					modifiers: i,
					hasImportantModifier: c,
					baseClassName: p,
					maybePostfixModifierPosition: d
				} = r(a),
				h = s(d ? p.substring(0, d) : p),
				u = !!d
			if (!h) {
				if (!d) return { isTailwindClass: !1, originalClassName: a }
				if (((h = s(p)), !h)) return { isTailwindClass: !1, originalClassName: a }
				u = !1
			}
			let g = dD(i).join(':')
			return {
				isTailwindClass: !0,
				modifierId: c ? g + Fl : g,
				classGroupId: h,
				originalClassName: a,
				hasPostfixModifier: u
			}
		})
		.reverse()
		.filter((a) => {
			if (!a.isTailwindClass) return !0
			let { modifierId: i, classGroupId: c, hasPostfixModifier: p } = a,
				d = i + c
			return l.has(d) ? !1 : (l.add(d), o(c, p).forEach((h) => l.add(i + h)), !0)
		})
		.reverse()
		.map((a) => a.originalClassName)
		.join(' ')
}
function mD() {
	let n = 0,
		e,
		r,
		s = ''
	for (; n < arguments.length; ) (e = arguments[n++]) && (r = bl(e)) && (s && (s += ' '), (s += r))
	return s
}
function bl(n) {
	if (typeof n == 'string') return n
	let e,
		r = ''
	for (let s = 0; s < n.length; s++) n[s] && (e = bl(n[s])) && (r && (r += ' '), (r += e))
	return r
}
function yD(n, ...e) {
	let r,
		s,
		o,
		l = a
	function a(c) {
		let p = e.reduce((d, h) => h(d), n())
		return (r = pD(p)), (s = r.cache.get), (o = r.cache.set), (l = i), i(c)
	}
	function i(c) {
		let p = s(c)
		if (p) return p
		let d = uD(c, r)
		return o(c, d), d
	}
	return function () {
		return l(mD.apply(null, arguments))
	}
}
function Z(n) {
	let e = (r) => r[n] || []
	return (e.isThemeGetter = !0), e
}
function Fe(n) {
	return at(n) || fD.has(n) || DD.test(n)
}
function Re(n) {
	return At(n, 'length', BD)
}
function at(n) {
	return !!n && !Number.isNaN(Number(n))
}
function An(n) {
	return At(n, 'number', at)
}
function zt(n) {
	return !!n && Number.isInteger(Number(n))
}
function vD(n) {
	return n.endsWith('%') && at(n.slice(0, -1))
}
function H(n) {
	return wl.test(n)
}
function Ue(n) {
	return gD.test(n)
}
function CD(n) {
	return At(n, ED, vl)
}
function xD(n) {
	return At(n, 'position', vl)
}
function AD(n) {
	return At(n, SD, TD)
}
function kD(n) {
	return At(n, '', _D)
}
function Wt() {
	return !0
}
function At(n, e, r) {
	let s = wl.exec(n)
	return s ? (s[1] ? (typeof e == 'string' ? s[1] === e : e.has(s[1])) : r(s[2])) : !1
}
function BD(n) {
	return FD.test(n)
}
function vl() {
	return !1
}
function _D(n) {
	return bD.test(n)
}
function TD(n) {
	return wD.test(n)
}
function PD() {
	let n = Z('colors'),
		e = Z('spacing'),
		r = Z('blur'),
		s = Z('brightness'),
		o = Z('borderColor'),
		l = Z('borderRadius'),
		a = Z('borderSpacing'),
		i = Z('borderWidth'),
		c = Z('contrast'),
		p = Z('grayscale'),
		d = Z('hueRotate'),
		h = Z('invert'),
		u = Z('gap'),
		g = Z('gradientColorStops'),
		E = Z('gradientColorStopPositions'),
		C = Z('inset'),
		v = Z('margin'),
		N = Z('opacity'),
		M = Z('padding'),
		ee = Z('saturate'),
		oe = Z('scale'),
		ge = Z('sepia'),
		he = Z('skew'),
		j = Z('space'),
		G = Z('translate'),
		K = () => ['auto', 'contain', 'none'],
		Ae = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
		bt = () => ['auto', H, e],
		Y = () => [H, e],
		Ys = () => ['', Fe, Re],
		on = () => ['auto', at, H],
		Ks = () => [
			'bottom',
			'center',
			'left',
			'left-bottom',
			'left-top',
			'right',
			'right-bottom',
			'right-top',
			'top'
		],
		ln = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
		Qs = () => [
			'normal',
			'multiply',
			'screen',
			'overlay',
			'darken',
			'lighten',
			'color-dodge',
			'color-burn',
			'hard-light',
			'soft-light',
			'difference',
			'exclusion',
			'hue',
			'saturation',
			'color',
			'luminosity',
			'plus-lighter'
		],
		br = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
		It = () => ['', '0', H],
		eo = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
		jt = () => [at, An],
		an = () => [at, H]
	return {
		cacheSize: 500,
		separator: ':',
		theme: {
			colors: [Wt],
			spacing: [Fe, Re],
			blur: ['none', '', Ue, H],
			brightness: jt(),
			borderColor: [n],
			borderRadius: ['none', '', 'full', Ue, H],
			borderSpacing: Y(),
			borderWidth: Ys(),
			contrast: jt(),
			grayscale: It(),
			hueRotate: an(),
			invert: It(),
			gap: Y(),
			gradientColorStops: [n],
			gradientColorStopPositions: [vD, Re],
			inset: bt(),
			margin: bt(),
			opacity: jt(),
			padding: Y(),
			saturate: jt(),
			scale: jt(),
			sepia: It(),
			skew: an(),
			space: Y(),
			translate: Y()
		},
		classGroups: {
			aspect: [{ aspect: ['auto', 'square', 'video', H] }],
			container: ['container'],
			columns: [{ columns: [Ue] }],
			'break-after': [{ 'break-after': eo() }],
			'break-before': [{ 'break-before': eo() }],
			'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
			'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
			box: [{ box: ['border', 'content'] }],
			display: [
				'block',
				'inline-block',
				'inline',
				'flex',
				'inline-flex',
				'table',
				'inline-table',
				'table-caption',
				'table-cell',
				'table-column',
				'table-column-group',
				'table-footer-group',
				'table-header-group',
				'table-row-group',
				'table-row',
				'flow-root',
				'grid',
				'inline-grid',
				'contents',
				'list-item',
				'hidden'
			],
			float: [{ float: ['right', 'left', 'none'] }],
			clear: [{ clear: ['left', 'right', 'both', 'none'] }],
			isolation: ['isolate', 'isolation-auto'],
			'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
			'object-position': [{ object: [...Ks(), H] }],
			overflow: [{ overflow: Ae() }],
			'overflow-x': [{ 'overflow-x': Ae() }],
			'overflow-y': [{ 'overflow-y': Ae() }],
			overscroll: [{ overscroll: K() }],
			'overscroll-x': [{ 'overscroll-x': K() }],
			'overscroll-y': [{ 'overscroll-y': K() }],
			position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
			inset: [{ inset: [C] }],
			'inset-x': [{ 'inset-x': [C] }],
			'inset-y': [{ 'inset-y': [C] }],
			start: [{ start: [C] }],
			end: [{ end: [C] }],
			top: [{ top: [C] }],
			right: [{ right: [C] }],
			bottom: [{ bottom: [C] }],
			left: [{ left: [C] }],
			visibility: ['visible', 'invisible', 'collapse'],
			z: [{ z: ['auto', zt, H] }],
			basis: [{ basis: bt() }],
			'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
			'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
			flex: [{ flex: ['1', 'auto', 'initial', 'none', H] }],
			grow: [{ grow: It() }],
			shrink: [{ shrink: It() }],
			order: [{ order: ['first', 'last', 'none', zt, H] }],
			'grid-cols': [{ 'grid-cols': [Wt] }],
			'col-start-end': [{ col: ['auto', { span: ['full', zt, H] }, H] }],
			'col-start': [{ 'col-start': on() }],
			'col-end': [{ 'col-end': on() }],
			'grid-rows': [{ 'grid-rows': [Wt] }],
			'row-start-end': [{ row: ['auto', { span: [zt, H] }, H] }],
			'row-start': [{ 'row-start': on() }],
			'row-end': [{ 'row-end': on() }],
			'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
			'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', H] }],
			'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', H] }],
			gap: [{ gap: [u] }],
			'gap-x': [{ 'gap-x': [u] }],
			'gap-y': [{ 'gap-y': [u] }],
			'justify-content': [{ justify: ['normal', ...br()] }],
			'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
			'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			'align-content': [{ content: ['normal', ...br(), 'baseline'] }],
			'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
			'place-content': [{ 'place-content': [...br(), 'baseline'] }],
			'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			p: [{ p: [M] }],
			px: [{ px: [M] }],
			py: [{ py: [M] }],
			ps: [{ ps: [M] }],
			pe: [{ pe: [M] }],
			pt: [{ pt: [M] }],
			pr: [{ pr: [M] }],
			pb: [{ pb: [M] }],
			pl: [{ pl: [M] }],
			m: [{ m: [v] }],
			mx: [{ mx: [v] }],
			my: [{ my: [v] }],
			ms: [{ ms: [v] }],
			me: [{ me: [v] }],
			mt: [{ mt: [v] }],
			mr: [{ mr: [v] }],
			mb: [{ mb: [v] }],
			ml: [{ ml: [v] }],
			'space-x': [{ 'space-x': [j] }],
			'space-x-reverse': ['space-x-reverse'],
			'space-y': [{ 'space-y': [j] }],
			'space-y-reverse': ['space-y-reverse'],
			w: [{ w: ['auto', 'min', 'max', 'fit', H, e] }],
			'min-w': [{ 'min-w': ['min', 'max', 'fit', H, Fe] }],
			'max-w': [
				{ 'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [Ue] }, Ue, H] }
			],
			h: [{ h: [H, e, 'auto', 'min', 'max', 'fit'] }],
			'min-h': [{ 'min-h': ['min', 'max', 'fit', Fe, H] }],
			'max-h': [{ 'max-h': [H, e, 'min', 'max', 'fit'] }],
			'font-size': [{ text: ['base', Ue, Re] }],
			'font-smoothing': ['antialiased', 'subpixel-antialiased'],
			'font-style': ['italic', 'not-italic'],
			'font-weight': [
				{
					font: [
						'thin',
						'extralight',
						'light',
						'normal',
						'medium',
						'semibold',
						'bold',
						'extrabold',
						'black',
						An
					]
				}
			],
			'font-family': [{ font: [Wt] }],
			'fvn-normal': ['normal-nums'],
			'fvn-ordinal': ['ordinal'],
			'fvn-slashed-zero': ['slashed-zero'],
			'fvn-figure': ['lining-nums', 'oldstyle-nums'],
			'fvn-spacing': ['proportional-nums', 'tabular-nums'],
			'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
			tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', H] }],
			'line-clamp': [{ 'line-clamp': ['none', at, An] }],
			leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', Fe, H] }],
			'list-image': [{ 'list-image': ['none', H] }],
			'list-style-type': [{ list: ['none', 'disc', 'decimal', H] }],
			'list-style-position': [{ list: ['inside', 'outside'] }],
			'placeholder-color': [{ placeholder: [n] }],
			'placeholder-opacity': [{ 'placeholder-opacity': [N] }],
			'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
			'text-color': [{ text: [n] }],
			'text-opacity': [{ 'text-opacity': [N] }],
			'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
			'text-decoration-style': [{ decoration: [...ln(), 'wavy'] }],
			'text-decoration-thickness': [{ decoration: ['auto', 'from-font', Fe, Re] }],
			'underline-offset': [{ 'underline-offset': ['auto', Fe, H] }],
			'text-decoration-color': [{ decoration: [n] }],
			'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
			'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
			indent: [{ indent: Y() }],
			'vertical-align': [
				{
					align: [
						'baseline',
						'top',
						'middle',
						'bottom',
						'text-top',
						'text-bottom',
						'sub',
						'super',
						H
					]
				}
			],
			whitespace: [
				{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }
			],
			break: [{ break: ['normal', 'words', 'all', 'keep'] }],
			hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
			content: [{ content: ['none', H] }],
			'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
			'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
			'bg-opacity': [{ 'bg-opacity': [N] }],
			'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
			'bg-position': [{ bg: [...Ks(), xD] }],
			'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
			'bg-size': [{ bg: ['auto', 'cover', 'contain', CD] }],
			'bg-image': [
				{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, AD] }
			],
			'bg-color': [{ bg: [n] }],
			'gradient-from-pos': [{ from: [E] }],
			'gradient-via-pos': [{ via: [E] }],
			'gradient-to-pos': [{ to: [E] }],
			'gradient-from': [{ from: [g] }],
			'gradient-via': [{ via: [g] }],
			'gradient-to': [{ to: [g] }],
			rounded: [{ rounded: [l] }],
			'rounded-s': [{ 'rounded-s': [l] }],
			'rounded-e': [{ 'rounded-e': [l] }],
			'rounded-t': [{ 'rounded-t': [l] }],
			'rounded-r': [{ 'rounded-r': [l] }],
			'rounded-b': [{ 'rounded-b': [l] }],
			'rounded-l': [{ 'rounded-l': [l] }],
			'rounded-ss': [{ 'rounded-ss': [l] }],
			'rounded-se': [{ 'rounded-se': [l] }],
			'rounded-ee': [{ 'rounded-ee': [l] }],
			'rounded-es': [{ 'rounded-es': [l] }],
			'rounded-tl': [{ 'rounded-tl': [l] }],
			'rounded-tr': [{ 'rounded-tr': [l] }],
			'rounded-br': [{ 'rounded-br': [l] }],
			'rounded-bl': [{ 'rounded-bl': [l] }],
			'border-w': [{ border: [i] }],
			'border-w-x': [{ 'border-x': [i] }],
			'border-w-y': [{ 'border-y': [i] }],
			'border-w-s': [{ 'border-s': [i] }],
			'border-w-e': [{ 'border-e': [i] }],
			'border-w-t': [{ 'border-t': [i] }],
			'border-w-r': [{ 'border-r': [i] }],
			'border-w-b': [{ 'border-b': [i] }],
			'border-w-l': [{ 'border-l': [i] }],
			'border-opacity': [{ 'border-opacity': [N] }],
			'border-style': [{ border: [...ln(), 'hidden'] }],
			'divide-x': [{ 'divide-x': [i] }],
			'divide-x-reverse': ['divide-x-reverse'],
			'divide-y': [{ 'divide-y': [i] }],
			'divide-y-reverse': ['divide-y-reverse'],
			'divide-opacity': [{ 'divide-opacity': [N] }],
			'divide-style': [{ divide: ln() }],
			'border-color': [{ border: [o] }],
			'border-color-x': [{ 'border-x': [o] }],
			'border-color-y': [{ 'border-y': [o] }],
			'border-color-t': [{ 'border-t': [o] }],
			'border-color-r': [{ 'border-r': [o] }],
			'border-color-b': [{ 'border-b': [o] }],
			'border-color-l': [{ 'border-l': [o] }],
			'divide-color': [{ divide: [o] }],
			'outline-style': [{ outline: ['', ...ln()] }],
			'outline-offset': [{ 'outline-offset': [Fe, H] }],
			'outline-w': [{ outline: [Fe, Re] }],
			'outline-color': [{ outline: [n] }],
			'ring-w': [{ ring: Ys() }],
			'ring-w-inset': ['ring-inset'],
			'ring-color': [{ ring: [n] }],
			'ring-opacity': [{ 'ring-opacity': [N] }],
			'ring-offset-w': [{ 'ring-offset': [Fe, Re] }],
			'ring-offset-color': [{ 'ring-offset': [n] }],
			shadow: [{ shadow: ['', 'inner', 'none', Ue, kD] }],
			'shadow-color': [{ shadow: [Wt] }],
			opacity: [{ opacity: [N] }],
			'mix-blend': [{ 'mix-blend': Qs() }],
			'bg-blend': [{ 'bg-blend': Qs() }],
			filter: [{ filter: ['', 'none'] }],
			blur: [{ blur: [r] }],
			brightness: [{ brightness: [s] }],
			contrast: [{ contrast: [c] }],
			'drop-shadow': [{ 'drop-shadow': ['', 'none', Ue, H] }],
			grayscale: [{ grayscale: [p] }],
			'hue-rotate': [{ 'hue-rotate': [d] }],
			invert: [{ invert: [h] }],
			saturate: [{ saturate: [ee] }],
			sepia: [{ sepia: [ge] }],
			'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
			'backdrop-blur': [{ 'backdrop-blur': [r] }],
			'backdrop-brightness': [{ 'backdrop-brightness': [s] }],
			'backdrop-contrast': [{ 'backdrop-contrast': [c] }],
			'backdrop-grayscale': [{ 'backdrop-grayscale': [p] }],
			'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
			'backdrop-invert': [{ 'backdrop-invert': [h] }],
			'backdrop-opacity': [{ 'backdrop-opacity': [N] }],
			'backdrop-saturate': [{ 'backdrop-saturate': [ee] }],
			'backdrop-sepia': [{ 'backdrop-sepia': [ge] }],
			'border-collapse': [{ border: ['collapse', 'separate'] }],
			'border-spacing': [{ 'border-spacing': [a] }],
			'border-spacing-x': [{ 'border-spacing-x': [a] }],
			'border-spacing-y': [{ 'border-spacing-y': [a] }],
			'table-layout': [{ table: ['auto', 'fixed'] }],
			caption: [{ caption: ['top', 'bottom'] }],
			transition: [
				{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', H] }
			],
			duration: [{ duration: an() }],
			ease: [{ ease: ['linear', 'in', 'out', 'in-out', H] }],
			delay: [{ delay: an() }],
			animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', H] }],
			transform: [{ transform: ['', 'gpu', 'none'] }],
			scale: [{ scale: [oe] }],
			'scale-x': [{ 'scale-x': [oe] }],
			'scale-y': [{ 'scale-y': [oe] }],
			rotate: [{ rotate: [zt, H] }],
			'translate-x': [{ 'translate-x': [G] }],
			'translate-y': [{ 'translate-y': [G] }],
			'skew-x': [{ 'skew-x': [he] }],
			'skew-y': [{ 'skew-y': [he] }],
			'transform-origin': [
				{
					origin: [
						'center',
						'top',
						'top-right',
						'right',
						'bottom-right',
						'bottom',
						'bottom-left',
						'left',
						'top-left',
						H
					]
				}
			],
			accent: [{ accent: ['auto', n] }],
			appearance: ['appearance-none'],
			cursor: [
				{
					cursor: [
						'auto',
						'default',
						'pointer',
						'wait',
						'text',
						'move',
						'help',
						'not-allowed',
						'none',
						'context-menu',
						'progress',
						'cell',
						'crosshair',
						'vertical-text',
						'alias',
						'copy',
						'no-drop',
						'grab',
						'grabbing',
						'all-scroll',
						'col-resize',
						'row-resize',
						'n-resize',
						'e-resize',
						's-resize',
						'w-resize',
						'ne-resize',
						'nw-resize',
						'se-resize',
						'sw-resize',
						'ew-resize',
						'ns-resize',
						'nesw-resize',
						'nwse-resize',
						'zoom-in',
						'zoom-out',
						H
					]
				}
			],
			'caret-color': [{ caret: [n] }],
			'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
			resize: [{ resize: ['none', 'y', 'x', ''] }],
			'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
			'scroll-m': [{ 'scroll-m': Y() }],
			'scroll-mx': [{ 'scroll-mx': Y() }],
			'scroll-my': [{ 'scroll-my': Y() }],
			'scroll-ms': [{ 'scroll-ms': Y() }],
			'scroll-me': [{ 'scroll-me': Y() }],
			'scroll-mt': [{ 'scroll-mt': Y() }],
			'scroll-mr': [{ 'scroll-mr': Y() }],
			'scroll-mb': [{ 'scroll-mb': Y() }],
			'scroll-ml': [{ 'scroll-ml': Y() }],
			'scroll-p': [{ 'scroll-p': Y() }],
			'scroll-px': [{ 'scroll-px': Y() }],
			'scroll-py': [{ 'scroll-py': Y() }],
			'scroll-ps': [{ 'scroll-ps': Y() }],
			'scroll-pe': [{ 'scroll-pe': Y() }],
			'scroll-pt': [{ 'scroll-pt': Y() }],
			'scroll-pr': [{ 'scroll-pr': Y() }],
			'scroll-pb': [{ 'scroll-pb': Y() }],
			'scroll-pl': [{ 'scroll-pl': Y() }],
			'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
			'snap-stop': [{ snap: ['normal', 'always'] }],
			'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
			'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
			touch: [{ touch: ['auto', 'none', 'manipulation'] }],
			'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
			'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
			'touch-pz': ['touch-pinch-zoom'],
			select: [{ select: ['none', 'text', 'all', 'auto'] }],
			'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', H] }],
			fill: [{ fill: [n, 'none'] }],
			'stroke-w': [{ stroke: [Fe, Re, An] }],
			stroke: [{ stroke: [n, 'none'] }],
			sr: ['sr-only', 'not-sr-only']
		},
		conflictingClassGroups: {
			overflow: ['overflow-x', 'overflow-y'],
			overscroll: ['overscroll-x', 'overscroll-y'],
			inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
			'inset-x': ['right', 'left'],
			'inset-y': ['top', 'bottom'],
			flex: ['basis', 'grow', 'shrink'],
			gap: ['gap-x', 'gap-y'],
			p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
			px: ['pr', 'pl'],
			py: ['pt', 'pb'],
			m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
			mx: ['mr', 'ml'],
			my: ['mt', 'mb'],
			'font-size': ['leading'],
			'fvn-normal': [
				'fvn-ordinal',
				'fvn-slashed-zero',
				'fvn-figure',
				'fvn-spacing',
				'fvn-fraction'
			],
			'fvn-ordinal': ['fvn-normal'],
			'fvn-slashed-zero': ['fvn-normal'],
			'fvn-figure': ['fvn-normal'],
			'fvn-spacing': ['fvn-normal'],
			'fvn-fraction': ['fvn-normal'],
			rounded: [
				'rounded-s',
				'rounded-e',
				'rounded-t',
				'rounded-r',
				'rounded-b',
				'rounded-l',
				'rounded-ss',
				'rounded-se',
				'rounded-ee',
				'rounded-es',
				'rounded-tl',
				'rounded-tr',
				'rounded-br',
				'rounded-bl'
			],
			'rounded-s': ['rounded-ss', 'rounded-es'],
			'rounded-e': ['rounded-se', 'rounded-ee'],
			'rounded-t': ['rounded-tl', 'rounded-tr'],
			'rounded-r': ['rounded-tr', 'rounded-br'],
			'rounded-b': ['rounded-br', 'rounded-bl'],
			'rounded-l': ['rounded-tl', 'rounded-bl'],
			'border-spacing': ['border-spacing-x', 'border-spacing-y'],
			'border-w': [
				'border-w-s',
				'border-w-e',
				'border-w-t',
				'border-w-r',
				'border-w-b',
				'border-w-l'
			],
			'border-w-x': ['border-w-r', 'border-w-l'],
			'border-w-y': ['border-w-t', 'border-w-b'],
			'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
			'border-color-x': ['border-color-r', 'border-color-l'],
			'border-color-y': ['border-color-t', 'border-color-b'],
			'scroll-m': [
				'scroll-mx',
				'scroll-my',
				'scroll-ms',
				'scroll-me',
				'scroll-mt',
				'scroll-mr',
				'scroll-mb',
				'scroll-ml'
			],
			'scroll-mx': ['scroll-mr', 'scroll-ml'],
			'scroll-my': ['scroll-mt', 'scroll-mb'],
			'scroll-p': [
				'scroll-px',
				'scroll-py',
				'scroll-ps',
				'scroll-pe',
				'scroll-pt',
				'scroll-pr',
				'scroll-pb',
				'scroll-pl'
			],
			'scroll-px': ['scroll-pr', 'scroll-pl'],
			'scroll-py': ['scroll-pt', 'scroll-pb'],
			touch: ['touch-x', 'touch-y', 'touch-pz'],
			'touch-x': ['touch'],
			'touch-y': ['touch'],
			'touch-pz': ['touch']
		},
		conflictingClassGroupModifiers: { 'font-size': ['leading'] }
	}
}
var hs,
	Dl,
	Fl,
	hD,
	wl,
	DD,
	fD,
	gD,
	FD,
	bD,
	wD,
	ED,
	SD,
	El,
	Cl = m(() => {
		hs = '-'
		Dl = /^\[(.+)\]$/
		Fl = '!'
		hD = /\s+/
		;(wl = /^\[(?:([a-z-]+):)?(.+)\]$/i),
			(DD = /^\d+\/\d+$/),
			(fD = new Set(['px', 'full', 'screen'])),
			(gD = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/),
			(FD =
				/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/),
			(bD = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/),
			(wD =
				/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/)
		ED = new Set(['length', 'size', 'percentage'])
		SD = new Set(['image', 'url'])
		El = yD(PD)
	})
var Bl = {}
f(Bl, { D: () => Bn, a: () => ms, b: () => us, c: () => _n, i: () => Ne, n: () => RD })
function Ne(n) {
	return typeof n == 'object'
}
function us(n) {
	return typeof n == 'string'
}
function MD(n, e) {
	return jD(n, e.protocol) && kl(n, e.hostname, !0) && ID(n, e.port) && LD(n, e.pathname, !0)
}
function ID(n, e) {
	return !e || e === n.port
}
function jD(n, e) {
	return !e || e === n.protocol.slice(0, -1)
}
function kl(n, e, r) {
	if (e) {
		if (!r || !e.startsWith('*')) return e === n.hostname
		if (e.startsWith('**.')) {
			let s = e.slice(2)
			return s !== n.hostname && n.hostname.endsWith(s)
		} else if (e.startsWith('*.')) {
			let s = e.slice(1)
			return n.hostname.replace(s, '').split('.').filter(Boolean).length === 1
		}
	} else return !0
	return !1
}
function LD(n, e, r) {
	if (e) {
		if (!r || !e.endsWith('*')) return e === n.pathname
		if (e.endsWith('/**')) {
			let s = e.slice(0, -2)
			return s !== n.pathname && n.pathname.startsWith(s)
		} else if (e.endsWith('/*')) {
			let s = e.slice(0, -1)
			return n.pathname.replace(s, '').split('/').filter(Boolean).length === 1
		}
	} else return !0
	return !1
}
function _n(n, { domains: e = [], remotePatterns: r = [] }) {
	if (!wt(n)) return !1
	let s = new URL(n)
	return e.some((o) => kl(s, o)) || r.some((o) => MD(s, o))
}
function ms(n) {
	return n ? 'transform' in n : !1
}
function Al(n) {
	let e = n.width,
		r = n.height
	if (Ne(n.src)) {
		let s = n.src.width / n.src.height
		r && !e
			? (e = Math.round(r * s))
			: e && !r
				? (r = Math.round(e / s))
				: !e && !r && ((e = n.src.width), (r = n.src.height))
	}
	return { targetWidth: e, targetHeight: r }
}
var xl,
	Sl,
	Bn,
	kn,
	$D,
	OD,
	RD,
	Tn = m(() => {
		'use strict'
		vt()
		W()
		;(xl = ['jpeg', 'jpg', 'png', 'tiff', 'webp', 'gif', 'svg', 'avif']),
			(Sl = 'webp'),
			(Bn = ['src', 'width', 'height', 'format', 'quality'])
		kn = {
			propertiesToHash: Bn,
			validateOptions(n) {
				if (!n.src || (typeof n.src != 'string' && typeof n.src != 'object'))
					throw new k({
						...St,
						message: St.message(
							JSON.stringify(n.src),
							typeof n.src,
							JSON.stringify(n, (e, r) => (r === void 0 ? null : r))
						)
					})
				if (Ne(n.src)) {
					if (!xl.includes(n.src.format))
						throw new k({ ...Yr, message: Yr.message(n.src.format, n.src.src, xl) })
					if (n.widths && n.densities) throw new k(To)
					if (
						(n.src.format === 'svg' && (n.format = 'svg'),
						(n.src.format === 'svg' && n.format !== 'svg') ||
							(n.src.format !== 'svg' && n.format === 'svg'))
					)
						throw new k(_o)
				} else {
					if (n.src.startsWith('/@fs/') || (!wt(n.src) && !n.src.startsWith('/')))
						throw new k({ ...Qr, message: Qr.message(n.src) })
					let e
					if (
						(!n.width && !n.height
							? (e = 'both')
							: !n.width && n.height
								? (e = 'width')
								: n.width && !n.height && (e = 'height'),
						e)
					)
						throw new k({ ...Zr, message: Zr.message(e, n.src) })
				}
				return (
					n.format || (n.format = Sl),
					n.width && (n.width = Math.round(n.width)),
					n.height && (n.height = Math.round(n.height)),
					n
				)
			},
			getHTMLAttributes(n) {
				let { targetWidth: e, targetHeight: r } = Al(n),
					{
						src: s,
						width: o,
						height: l,
						format: a,
						quality: i,
						densities: c,
						widths: p,
						formats: d,
						...h
					} = n
				return {
					...h,
					width: e,
					height: r,
					loading: h.loading ?? 'lazy',
					decoding: h.decoding ?? 'async'
				}
			},
			getSrcSet(n) {
				let e = [],
					{ targetWidth: r } = Al(n),
					{ widths: s, densities: o } = n,
					l = n.format ?? Sl,
					a = n.width,
					i = 1 / 0
				Ne(n.src) && ((a = n.src.width), (i = a))
				let { width: c, height: p, ...d } = n,
					h = []
				if (o) {
					let u = o.map((E) => (typeof E == 'number' ? E : parseFloat(E))),
						g = u.sort().map((E) => Math.round(r * E))
					h.push(...g.map((E, C) => ({ maxTargetWidth: Math.min(E, i), descriptor: `${u[C]}x` })))
				} else
					s && h.push(...s.map((u) => ({ maxTargetWidth: Math.min(u, i), descriptor: `${u}w` })))
				for (let { maxTargetWidth: u, descriptor: g } of h) {
					let E = { ...d }
					u !== a
						? (E.width = u)
						: n.width && n.height && ((E.width = n.width), (E.height = n.height)),
						e.push({ transform: E, descriptor: g, attributes: { type: `image/${l}` } })
				}
				return e
			},
			getURL(n, e) {
				let r = new URLSearchParams()
				if (Ne(n.src)) r.append('href', n.src.src)
				else if (_n(n.src, e)) r.append('href', n.src)
				else return n.src
				return (
					Object.entries({ w: 'width', h: 'height', q: 'quality', f: 'format' }).forEach(
						([l, a]) => {
							n[a] && r.append(l, n[a].toString())
						}
					),
					`${rt('/', '/_image')}?${r}`
				)
			},
			parseURL(n) {
				let e = n.searchParams
				return e.has('href')
					? {
							src: e.get('href'),
							width: e.has('w') ? parseInt(e.get('w')) : void 0,
							height: e.has('h') ? parseInt(e.get('h')) : void 0,
							format: e.get('f'),
							quality: e.get('q')
						}
					: void 0
			}
		}
		;($D = {
			propertiesToHash: ['src'],
			validateOptions: kn.validateOptions,
			getURL: kn.getURL,
			parseURL: kn.parseURL,
			getHTMLAttributes: kn.getHTMLAttributes,
			async transform(n, e) {
				return { data: n, format: e.format }
			}
		}),
			(OD = $D),
			(RD = Object.freeze(
				Object.defineProperty({ __proto__: null, default: OD }, Symbol.toStringTag, {
					value: 'Module'
				})
			))
	})
var _l = {}
f(_l, {
	_internal: () => GD,
	body: () => zD,
	collection: () => ND,
	data: () => WD,
	id: () => UD,
	slug: () => HD
})
var UD,
	ND,
	HD,
	zD,
	WD,
	GD,
	Tl = m(() => {
		'use strict'
		;(UD = 'A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx'),
			(ND = 'blog'),
			(HD = 'a-slightly-hidden-limitation-of-hybrid-cloud-trust'),
			(zD = `
There's a dependency tree in the MS documentation that's slightly buried in the\r
MS Documentation. The page [Hybrid Cloud Trust Deployment](https://docs.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-hybrid-cloud-trust)\r
has a pre-req that links back to the setup directions to Enable passwordless\r
security key [sign-in to on-premises resources by using Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-authentication-passwordless-security-key-on-premises#install-the-azure-ad-kerberos-powershell-module). That page in turn has a link over to the FAQs for FIDO2. [Deployment frequently\r
asked questions (FAQs) for hybrid FIDO2 security keys in Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-authentication-passwordless-faqs#fido2-security-key-sign-in-isnt-working-for-my-domain-admin-or-other-high-privilege-accounts-why)

At the bottom of that FAQ is a question with an easy answer:

> FIDO2 security key sign-in isn't working for my Domain Admin or other high\r
> privilege accounts. Why?\r
> The default security policy doesn't grant Azure AD permission to sign high\r
> privilege accounts on to on-premises resources.

What does a random FIDO2 FAQ have to do with a Kerberos trust? Well as it turns\r
out, that answer also applicable to Hybrid Cloud trust because it's an RODC\r
limitation, and both the question and answer are painfully far away from the\r
Hybrid Cloud Trust page.

TL;DR:\r
Don't expect HCT to work on an account in Domain Admins, Enterprise Admins, or\r
Schema Admins.
`),
			(WD = {
				title: 'A slightly hidden limitation of Hybrid Cloud Trust',
				description: 'A slightly hidden limitation of Hybrid Cloud Trust',
				pubDate: new Date(16588944e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'EntraID',
				tags: ['hybrid trust'],
				draft: !1
			}),
			(GD = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx',
				rawData: void 0
			})
	})
var Pl = {}
f(Pl, {
	_internal: () => YD,
	body: () => qD,
	collection: () => XD,
	data: () => ZD,
	id: () => VD,
	slug: () => JD
})
var VD,
	XD,
	JD,
	qD,
	ZD,
	YD,
	Ml = m(() => {
		'use strict'
		;(VD = 'CodeClimate-in-GitLab-CI.mdx'),
			(XD = 'blog'),
			(JD = 'codeclimate-in-gitlab-ci'),
			(qD = `\r
Recently  I tried pulling code climate into GitLab CE's CI. This became slightly problematic since docker-in-docker wasn't working properly. I installed it according to the site directions, but the config didn't work. After about a day of tinkering, configuring it this way appears to work pretty well.\r
\r
\`.gitlab-vi.yml\`\r
\r
\`\`\`\r
codeclimate:\r
  image: docker:latest\r
  variables:\r
    DOCKER_DRIVER: overlay\r
  services:\r
    - docker:dind\r
  script:\r
    - docker pull codeclimate/codeclimate\r
    - VOLUME_PATH=/tmp/builds"$(echo $PWD | sed 's|^/[^/]*||')"\r
    - docker run -v /tmp/cc:/tmp/cc -v $VOLUME_PATH:/code -v /var/run/docker.sock:/var/run/docker.sock codeclimate/codeclimate validate-config\r
    - ls -lash $PWD\r
    - echo $PWD\r
    - docker run --env CODECLIMATE_CODE="$VOLUME_PATH" -v /tmp/cc:/tmp/cc -v $VOLUME_PATH:/code -v /var/run/docker.sock:/var/run/docker.sock codeclimate/codeclimate analyze\r
  artifacts:\r
    paths: [codeclimate.json]%\r
\`\`\`\r
\r
\`/etc/gitlab-runner/config.toml\`\r
\r
\`\`\`\r
concurrent = 1\r
check_interval = 0\r
\r
[[runners]]\r
  name = "gitlabrunner-01"\r
  url = "https://gitlab.gqdn/"\r
  token = "token"\r
  executor = "docker"\r
  [runners.docker]\r
    tls_verify = false\r
    image = "docker:latest"\r
    privileged = true\r
    disable_cache = false\r
    volumes = ["/cache"]\r
    shm_size = 0\r
  [runners.cache]\r
\r
[[runners]]\r
  name = "Ubuntu 16.04 Runner 01"\r
  url = "https://gitlab.fqdn/"\r
  token = "token"\r
  executor = "docker"\r
  [runners.docker]\r
    tls_verify = false\r
    image = "docker:latest"\r
    privileged = true\r
    disable_cache = false\r
    cache_dir = "cache"\r
    volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock", "/tmp/builds:/builds"]\r
    shm_size = 0\r
  [runners.cache]\r
\`\`\`\r
`),
			(ZD = {
				title: 'CodeClimate in GitLab CI',
				description: 'CodeClimate in GitLab CI',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'CI-CD',
				tags: ['gitlab'],
				draft: !1
			}),
			(YD = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/CodeClimate-in-GitLab-CI.mdx',
				rawData: void 0
			})
	})
var Il = {}
f(Il, {
	_internal: () => rf,
	body: () => tf,
	collection: () => QD,
	data: () => nf,
	id: () => KD,
	slug: () => ef
})
var KD,
	QD,
	ef,
	tf,
	nf,
	rf,
	jl = m(() => {
		'use strict'
		;(KD = 'Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx'),
			(QD = 'blog'),
			(ef = 'creating-a-scep-service-for-munki-using-micromdms-scep-project'),
			(tf = `
# The Story

Recently I was tasked with using migrating a [Munki](https://github.com/munki/munki) repository to use SSL and to be accessible external to an organization. Since at it's simplest, Munki is just some folders accessible over http, and most supporting services for it are LAMP or LNMP stacks, this is pretty simple. The harder part is running client verifications. You can use a pre-shared key, though scripting that implies every machine use the same key, or has something on the server communicating with the client to provide a unique htpasswd entry for each machine. You could choose to not verify your clients as well. The final option is to secure it using SSL client certificates. That is the option I chose.

There are two common methods I know of for getting Client certificates to endpoints. They are sneakernet and Simple Client Enrollment Protocol, or SCEP. Sneakernet doesn't scale well beyond a handful of machines, so SCEP it is.\r
The first step with SCEP was to identify which SCEP service to use. Active Directory Certificate Services would be my first choice, given my environment has a very large AD deployment. Unfortunately that doesn't appear to be offered. After looking I came to three solutions. Dogtag, originally an AOL project that has since been rolled into FreeIPA, OpenXPKI, an old project without packaging for my distribution of Linux, and the SCEP component of the MicroMDM project. Even though I needed to compile it, I went with the SCEP component of the MicroMDM project because it was the simplest of the solutions, with the least overhead and extra features I didn't need. @groob will be adding a CI component to the [micromdm/scep](https://github.com/micromdm/scep) project soon, so the manual compilation can be replaced with a docker container in the future.

Since that docker container doesn't work yet, the first thing when configuring SCEP was to figure out how to compile it, then configure it, then secure it.

# The steps

## Compiling

1. Create the $GOPATH variable in your shell for go to use.

* \`export GOPATH=~/Projects/GoProjects\`

1. Install the Go compiler.

* \`apt install golang\`
* \`brew install go\`
* \`yum install golang\`

1. Install [Glide](https://github.com/Masterminds/glide) for dependency resolution. Glide is the Go equivalent to pip, cpan, or npm.

* curl [https://glide.sh/get](https://glide.sh/get) | sh

1. Install the dependancies

* \`cd $GOPATH/src/github.com/micromdm/scep/\`
* \`glide install\`

1. Compile the client or server binary. Note that you will have to compile the client and server separately on each OS you plan to run it on

* cd \`$GOPATH/src/github.com/micromdm/scep/cmd/scepserver\`
* \`go build\`

## Server

1. Place the binary in a useful location

* \`cp scepserver /usr/sbin\`

1. Create the depot for the server to store the certificate information in

* \`mkdir -p /var/lib/scep/depot\`
* \`cd /var/lib/scep/depot; scepserver -ca init\`
* This should be run with some more flags as provided by the [micromdm/scep](https://github.com/micromdm/scep) documentation.

1. I'm running the server on Ubuntu 16.04, so I have systemd available. I wrote a systemd file similar to this one for so systemd could start and stop the service automatically. This should be modified to include a \`-challenge\` to suit your environment.

\`\`\`ini
    [Unit]\r
    Description=Micromdm SCEP Server\r
    After=syslog.target network.target\r
    [Service]\r
    Type=simple\r
    ExecStart=/usr/sbin/scepserver -depot /var/lib/scep/depot\r
    Restart=always\r
    [Install]\r
    WantedBy=multi-user.target
\`\`\`

That should get the server running on port 8080 at \`https://localhost:8080/scep\`. I use a proxy rule in apache to accept requests over https made to /scep and pass them to the scep server.\r
\`ProxyPass /scep http://localhost:8080/scep\`

I also have a block into the config that adds support to apache for this

\`\`\`apache
SSLCACertificateFile    /var/lib/scep/depot/ca.pem\r
<Directory /var/www/munki_repo>\r
    Options -Indexes\r
    # Make Client auth optional while internal\r
    SSLVerifyClient optional\r
    Require ip 172.16.0.0/12\r
    Satisfy any\r
</Directory>
\`\`\`

Next is the client.

## Client

1. Compile the client

* \`$GOPATH/src/github.com/micromdm/scep/cmd/scepclient\`
* \`go build\`

1. Place the binary in a useful location

* \`cp scepclient /usr/local/sbin\`

1. Write a script that makes a SCEP request using your freshly compiled client. I package the script, the public CA, and the client up and install them at image time, placing the script in the munki preflight.d directory installed by munkireport-php, the client in \`/usr/local/sbin/\`, and the cert in \`/Library Managed Installs/certs\`

\`\`\`bash
#!/usr/bin/env bash\r
\r
HOSTNAME=\`scutil --get ComputerName\`.company.fqdn\r
SCEP_URL="http://scepserver.company.fqdn/scep" # Your scep server here\r
ORGANIZATION="Your Org Here" # This should match what you created the CA certificate with\r
MUNKI_CERT_DIR="/Library/Managed Installs/certs"\r
CERT_STATUS=255\r
\r
do_scep_request() {\r
    echo "Generating Client SSL Certificate"\r
    /usr/local/sbin/scepclient -private-key ./client.key -server-url $SCEP_URL -organization $ORGANIZATION -cn $HOSTNAME\r
\r
    echo "Modifying certifcate"\r
    cat ./client.key >> ./client.pem\r
\r
    echo "Installing Certificate to munki folder"\r
    cp ./client.key "$MUNKI_CERT_DIR"\r
    cp ./client.pem "$MUNKI_CERT_DIR"\r
\r
    echo "Importing SCEP CA"\r
    sudo security add-trusted-cert -d -r trustRoot -k "/Library/Keychains/System.keychain" "$MUNKI_CERT_DIR"/ca.pem\r
\r
    echo "Done"\r
    exit 0\r
}\r
\r
if [ ! -f "$MUNKI_CERT_DIR"/client.pem ]; then\r
    echo "File doesn't exist"\r
    do_scep_request\r
else\r
    openssl x509 -noout -checkend 1209600 -in "$MUNKI_CERT_DIR"/client.pem\r
    STATUS=$?\r
    if [ $STATUS -ne 0 ]; then\r
        echo $STATUS\r
        echo "file exists and is expiring"\r
        do_scep_request\r
    fi\r
fi
\`\`\`

The client script outlined here will check for a new client certificate every time munki runs, and will attempt to receive a new one if it is two weeks or less from the current expiration.

# Conclusion

This was my first attempt at setting up SSL client auth, for anything. It took about a week of research, trial, and error to figure out. Without the help of \`@groob\` & the Mac Admins Slack I never would have gotten the project working.

Did I miss something? Reach out by emailing \`ryan@buzzell.io\` or \`@rbuzzell\` on the Mac Admins Slack and I'll put in a correction."
`),
			(nf = {
				title: "Creating a SCEP service for Munki using MicroMDM's SCEP Project",
				description: "Creating a SCEP service for Munki using MicroMDM's SCEP Project",
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'macOS',
				tags: ['certificate client auth', 'certificates', 'certificate authority'],
				draft: !1
			}),
			(rf = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx',
				rawData: void 0
			})
	})
var Ll = {}
f(Ll, {
	_internal: () => df,
	body: () => af,
	collection: () => of,
	data: () => cf,
	id: () => sf,
	slug: () => lf
})
var sf,
	of,
	lf,
	af,
	cf,
	df,
	$l = m(() => {
		'use strict'
		;(sf = 'Cylance-Deployment-on-macOS.mdx'),
			(of = 'blog'),
			(lf = 'cylance-deployment-on-macos'),
			(af = `
I at one point had a Cylance package and needed to figure out how to mass deploy it.

The manual install directions it came with were

1. Download the package
2. Open terminal and run

\`\`\`
cd ~/Downloads/\r
cat > cyagent_install_token <<EOF\r
B39D7692-572F-41D4-BBC8-3D8F39E542DE\r
Other-Bit-Of-Info\r
EOF\r
sudo installer -pkg CylancePROTECT.pkg -target /
\`\`\`

1. Profit

This was an overly manual process for what needs to be a Munki based deployment. Upon using [Suspicous Package](http://www.mothersruin.com/software/SuspiciousPackage/) to look at the postinstall script I noticed these blocks of code

\`\`\`
#!/bin/sh\r
\r
INSTALL_TOKEN_FILE="/tmp/YvUnIpzc2omyt1ln"\r
if ! [ -e "$INSTALL_TOKEN_FILE" ]\r
then\r
	INSTALL_TOKEN_FILE="$(/usr/bin/dirname "$PACKAGE_PATH")/cyagent_install_token"\r
fi
\`\`\`

\`\`\`
if [ -e "/tmp/YvUnIpzc2omyt1ln" ]\r
then\r
   /bin/rm /tmp/YvUnIpzc2omyt1ln\r
fi
\`\`\`

Ah-ha! It has a hardcoded location where it expects that file to exist. All we have to do is write a preinstall script in Munki that makes that file exist.

\`\`\`
#!/bin/sh\r
\r
cat > /tmp/YvUnIpzc2omyt1ln << EOF\r
B39D7692-572F-41D4-BBC8-3D8F39E542DE\r
Other-Bit-Of-Info\r
EOF
\`\`\`

After testing it appers this was all it took to get it to deploy with Munki.
`),
			(cf = {
				title: 'Cylance Deployment on macOS',
				description: 'Cylance Deployment on macOS',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'macOS',
				tags: ['cylance', 'security'],
				draft: !1
			}),
			(df = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Cylance-Deployment-on-macOS.mdx',
				rawData: void 0
			})
	})
var Ol = {}
f(Ol, {
	_internal: () => Df,
	body: () => mf,
	collection: () => hf,
	data: () => yf,
	id: () => pf,
	slug: () => uf
})
var pf,
	hf,
	uf,
	mf,
	yf,
	Df,
	Rl = m(() => {
		'use strict'
		;(pf = 'Fedora-25-in-iPXE-.mdx'),
			(hf = 'blog'),
			(uf = 'fedora-25-in-ipxe-'),
			(mf = `
As a followup to my earlier brief post about Fedora 25 in syslinux pxe, this one adds Fedora 25 as a function in ipxe.

\`\`\`
    :fedora25\r
    initrd http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/initrd.img\r
    chain http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/vmlinuz\r
    inst.stage2=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os ip=dhcp
\`\`\`
`),
			(yf = {
				title: 'Fedora 25 in iPXE ',
				description: 'Fedora 25 in iPXE ',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Linux',
				tags: ['pxe boot'],
				draft: !1
			}),
			(Df = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-iPXE-.mdx',
				rawData: void 0
			})
	})
var Ul = {}
f(Ul, {
	_internal: () => vf,
	body: () => bf,
	collection: () => gf,
	data: () => wf,
	id: () => ff,
	slug: () => Ff
})
var ff,
	gf,
	Ff,
	bf,
	wf,
	vf,
	Nl = m(() => {
		'use strict'
		;(ff = 'Fedora-25-in-pxe.mdx'),
			(gf = 'blog'),
			(Ff = 'fedora-25-in-pxe'),
			(bf = `
Just a brief entry about what the pxelinux.cfg related to your newer fedora installs should look like. I make the assumption that everything should be pulled from an http(s) mirror server, and nothing should be on the local server, as that is how I tend to setup my pxeboot environments.

\`\`\`
LABEL fedora-linux\r
    MENU LABEL Install Fedora 25\r
    KERNEL http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/vmlinuz\r
    APPEND initrd=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/initrd.img inst.stage2=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os ip=dhcp
\`\`\`
`),
			(wf = {
				title: 'Fedora 25 in Syslinux PXE',
				description: 'Fedora 25 in Syslinux PXE',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Linux',
				tags: ['pxe boot'],
				draft: !1
			}),
			(vf = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-pxe.mdx',
				rawData: void 0
			})
	})
var Hl = {}
f(Hl, {
	_internal: () => kf,
	body: () => Sf,
	collection: () => Cf,
	data: () => Af,
	id: () => Ef,
	slug: () => xf
})
var Ef,
	Cf,
	xf,
	Sf,
	Af,
	kf,
	zl = m(() => {
		'use strict'
		;(Ef = 'Jamf-DEP-workflow.mdx'),
			(Cf = 'blog'),
			(xf = 'jamf-dep-workflow'),
			(Sf = `
Recently we've started implementing Jamf Pro as an MDM. I'm still far more\r
familiar with Munki and a thin imaging based workflow. We're still going to be\r
using Munki for the majority of our software management, but Jamf will be the\r
tool used for DEP and bootstrapping.

I'll open this be describing the intended workflow. We're an AD shop. As part of\r
deployment, we need to name the machine to something acceptable to AD and\r
unique. We then need to preform an AD bind. We also need the time server set and\r
Managed Software Center installed. After that Munki has historically\r
bootstrapped all the software and configuration needed. We do not provide our\r
users admin rights, and we require a local administrator account setup. We also\r
require FV2 enabled on all machines.

After quite a while of trying to get DEP set for our purchasing, we finally got\r
our first shipment of DEP enabled machines (also the first time we've wanted to\r
move past 10.12, since UAMDM became very important after 10.12). The first\r
roadblock we encountered was that after rolling through setup assistant, we\r
would need to manually create the admin account to make sure it got a working\r
secure token. The second roadblock was that we would need to manually name the\r
machine and bind it to AD.

The decision was made to utilize SplashBuddy to gather the hostname information\r
and feed it back into Jamf to name the machine and bind to AD. The workflow for\r
doing this in Jamf evolved a few times. The final decision was to tag the steps\r
with custom event triggers, and have a script run on DEP enrolled devices at\r
enrollment. For policies and scripts, running these requires a "ghost package"\r
to run in front of and behind the policy/script to declare that it is being run\r
and it has completed. These ghost packages are just another pair of scripts.

The final workflow works something like this:

1. At enrollment deploy a script
2. That script spends almost it's entire life calling jamf policy -event\r
   sb\\_step\\_name
3. The first step is to install splash buddy
4. The second step sets a time server once splashbuddy is installed
5. The third step is run a script to collect the information dropped off by the\r
   splashbuddy form and insert it into a plist. It will sit here and wait in an\r
   until loop for the information to arrive, holding up the parent script. It\r
   will wait forever
6. The fourth step takes that hostname and sets on the machine, then binds to\r
   AD
7. The final step just installs munki, demands a reboot, and tells munki to run\r
   on reboot

Behind the scenes, JAMF has been installing all of the configuration profiles to\r
automate the other setup. We also have Jamf install all of our VPP apps after\r
Munki is installed, as it was previously trying to do that during the initial\r
provisioning workflow and that was problematic. In our environment, this has\r
resulted in a consistent and workable flow to get a machine configured for end\r
users.
`),
			(Af = {
				title: 'Jamf DEP workflow',
				description: 'Jamf DEP workflow',
				pubDate: new Date(15559056e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'macOS',
				tags: ['DEP'],
				draft: !1
			}),
			(kf = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Jamf-DEP-workflow.mdx',
				rawData: void 0
			})
	})
var Wl = {}
f(Wl, {
	_internal: () => If,
	body: () => Pf,
	collection: () => _f,
	data: () => Mf,
	id: () => Bf,
	slug: () => Tf
})
var Bf,
	_f,
	Tf,
	Pf,
	Mf,
	If,
	Gl = m(() => {
		'use strict'
		;(Bf = 'My-experience-replacing-a-modem.mdx'),
			(_f = 'blog'),
			(Tf = 'my-experience-replacing-a-modem'),
			(Pf = `
I thought I might talk about that time I replaced my modem with one that only did DOCSIS 3.0 -> Ethernet conversion, and how that was a mess for a very long time.

About a year ago I was looking to get IPv6 into my home, and I needed to replace my modem to do that. So I bought one on Amazon that had good reviews, got on the phone with Time Warner Cable, and got it fully replaced. Unfortunately I didn't expect it to not do any routing, NAT, firewall features, or not provide DHCP/DNS, and I suddenly had a house full of roommates and IoT devices that didn't get a network connection. I really didn't want to move backwards, so I grabbed a pfSense firewall I had between the rest of the house and my homelab, and put it as the WAN firewall. Problem Solved.

However, there were some issues with this setup. First and foremost being that I hadn't planned to make pfSense the WAN firewall for a while, so it was running a Beta or Alpha of pfSense 2.3, and was also not configured correctly for use as a WAN router. I quickly put all the wired ports in the house on the VLAN I had been using for my lab, and restored internet to those. I then had to shore up the firewall and get the NAT rules working correctly, which took a little bit some time and eventually a "Oh, I have to allow traffic out. Whoops."

Wireless was a different issue. For those I needed to reconfigure a pair of Ubiquiti APs to use the new network instead of the old one that went away when I swapped the modem. The network then proceeded to chug along for a while, having few issues for several weeks.

Then the power went out.

Services were having a bit of a time coming back up. I came to discover that this was due to my using static addresses only for DHCP/DNS/AD and gateways. I didn't use static IPs on my storage or on my VM hosts, so when those went to reboot they couldn't talk until the DHCP servers were up, which couldn't come up until the hypervisors and storage were up. After fixing that, and giving static IPs to all of my infrastructure, I haven't had any issues after power outages.

So what did I learn?

* Do some research on hardware if I'm putting it into place on a production network. Make sure it has the features I expect it to have when I install it.
* Static IP ***anything*** that is infrastructure. Have a physical stand-by of any critical infrastructure. When I wrote this post I used a clustered DNS / DHCP setup, with one host being physical.
* Make sure I have a plan B. That pfSense firewall wasn't ready for where I put it. I was still trying to learn the interface and get some of the services working the way I wanted them to. I lucked out by having it, but I could have been more prepared.
`),
			(Mf = {
				title: 'My experience replacing a modem',
				description: 'My experience replacing a modem',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['homelab'],
				draft: !1
			}),
			(If = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/My-experience-replacing-a-modem.mdx',
				rawData: void 0
			})
	})
var Vl = {}
f(Vl, {
	_internal: () => Uf,
	body: () => Of,
	collection: () => Lf,
	data: () => Rf,
	id: () => jf,
	slug: () => $f
})
var jf,
	Lf,
	$f,
	Of,
	Rf,
	Uf,
	Xl = m(() => {
		'use strict'
		;(jf = 'SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx'),
			(Lf = 'blog'),
			($f = 'ssso-to-adfs-with-hybrid-cloud-trust-and-intune'),
			(Of = `
Really quick one today. As you start migrating to Azure AD, you may find the\r
occasional legacy application that's ADFS dependent. In my environment, we have\r
an application that's using Windows session login and ADFS to enter the\r
application, and we can't move it away from that yet. We are however moving to\r
pure AADJ joins and as a result, needed to get SSSO functional with this legacy\r
app. We stood up HCT earlier, and that made it really simple to complete: we\r
just needed to set up a trusted site list in Intune.

The first step is to enter Intune, and create a "Settings Catalog" configuration\r
profile for a "Site to Zone Assignment List".

Once there, you'll need to enable it, then start adding sites to the zone\r
assignments list, and for the SSSO it worked for me on the Intranet setting.

There is a guide available here from Microsoft on the formats they accept for\r
the name, and which zone each of the values is associated with.

[Policy CSP - InternetExplorer - Windows Client Management](https://docs.microsoft.com/en-us/windows/client-management/mdm/policy-csp-internetexplorer?WT.mc_id=Portal-Microsoft_Intune_Workflows#internetexplorer-allowsitetozoneassignmentlist)
`),
			(Rf = {
				title: 'SSSO to ADFS with Hybrid Cloud Trust and Intune',
				description: 'SSSO to ADFS with Hybrid Cloud Trust and Intune',
				pubDate: new Date(1501128e6),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'EntraID',
				tags: ['adfs'],
				draft: !1
			}),
			(Uf = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx',
				rawData: void 0
			})
	})
var Jl = {}
f(Jl, {
	_internal: () => Vf,
	body: () => Wf,
	collection: () => Hf,
	data: () => Gf,
	id: () => Nf,
	slug: () => zf
})
var Nf,
	Hf,
	zf,
	Wf,
	Gf,
	Vf,
	ql = m(() => {
		'use strict'
		;(Nf = 'Secure-SSD-Erase-options-for-Apple-and-Windows.mdx'),
			(Hf = 'blog'),
			(zf = 'secure-ssd-erase-options-for-apple-and-windows'),
			(Wf = `
In the modern era of SSDs in everything, I'm seeing many many questions about\r
how to securely erase them. Some folks aren't even asking, just assuming that\r
DBAN works or that their magnetic erasers work still. In truth, neither of those\r
is going to be a reliable method for SSDs.

# DBAN

DBAN will not reliably function on an SSD due to the way SSDs function. An SSD\r
will preform wear leveling. When preforming a write there is no guarantee that\r
it won't shuffle the writes around or get all of your data, even if you run DBAN\r
multiple times. The storage isn't even physically indexable the same way a\r
traditional HDD is.

# HDD Degausser

A degausser is also ineffective on an SSD. The degausser is used to scramble the\r
magnetic storage of a traditional HDD, but SSDs have no magnetic storage and are\r
unaffected by a degausser.

# Embedded Components

Making this an even greater challenge is manufacturers such as Apple embedding\r
storage directly on the motherboard or logic board, and in Apple's case\r
restricting the ability to boot to non-apple external boot media. No longer can\r
a drive just be removed from a computer and plugged into another one or run\r
through a degausser.

# Solutions

## Full Disk Encryption

One option is to turn on full disk encryption. Most OSes have a native option\r
for this: BitLocker on Windows, FileVault 2 on macOS, the native encryption a T2\r
chip provides on newer Apple hardware, and LUKS on Linux. This protects your\r
data in a few ways, but it also leaves you in a position where you can delete\r
the volume and be reasonably assured that the data is safe. On a Mac with T2, it\r
deletes the keys used to encrypt the volume when you delete the volume. On\r
Windows you can delete the keys from the TPM. I'm not at all certain on Linux\r
what the interactions are, I don't personally use LUKS there.

## Physical shredding

Another option is to physically shred the SSD or computer. This will guarantee\r
the data is gone and ground to a powder.

## SSD Secure erase

There is a standard in place for secure erasure of SSDs bootable tools such as\r
parted magic have the ability to utilize. This option is enabled on the SSD\r
hardware, and if it isn't there no software can make it exist. But this option\r
will tell the SSD to flash all storage to blank and takes a few seconds."
`),
			(Gf = {
				title: 'Secure SSD Erase options for Apple and Windows',
				description: 'Secure SSD Erase options for Apple and Windows',
				pubDate: new Date(15586704e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['security', 'data disposal'],
				draft: !1
			}),
			(Vf = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx',
				rawData: void 0
			})
	})
var Zl = {}
f(Zl, {
	_internal: () => Kf,
	body: () => Zf,
	collection: () => Jf,
	data: () => Yf,
	id: () => Xf,
	slug: () => qf
})
var Xf,
	Jf,
	qf,
	Zf,
	Yf,
	Kf,
	Yl = m(() => {
		'use strict'
		;(Xf = 'Terminal-tricks-Handy-Shortcuts.mdx'),
			(Jf = 'blog'),
			(qf = 'terminal-tricks-handy-shortcuts'),
			(Zf =
				"\nOver the years I've collected a few favorite time saving tricks for working in bash or terminal work in general.\n\nThis is one I use pretty often while doing support work. `w` is  all the fun of `uptime` and `last` in the space of one letter. `user` is the username of the logged in user. `tty` shows how they're logged in. `from` shows the hostname or ip address they're connected from if over ssh. `login` shows the time or date of the login. `idle`, `jcpu` and `pcpu` are useful for seeing how much cpu time a user is taking up, and the `what` field shows the current command the user is using.\n\n\\[root\\@machine \\~]# w\r\n20:56:50 up 2 days,  1:39,  1 user,  load average: 0.12, 0.28, 0.42\r\nUSER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT\r\nroot     pts/0    machine2.local.t Thu22    2.00s  0.09s  0.06s -bash\n\nThis group is super useful if you're like me and make mistakes while typing things out.\n\n* `ctrl + w` will remove whatever word your cursor is in.\n* `ctrl + u` will clear from the cursor all the way back to the start of the line\n* `ctrl + l` will clear any lines above the one you're working in and bring your working line to the top of the screen.\n\n`!!` is an excellent shortcut for appending or prefixing some bit of command you forgot.\n\nbash-4.3$ cat /var/log/secure\r\ncat: /var/log/secure: Permission denied\r\nbash-4.3$ suod !!\r\nbash: suod: command not found\n\n`^^` is a great way to fix the typo in that last command. It will replace everything after the first `^` and replace it with everything after the second.\n\nbash-4.3$ ^od^do\r\nsudo cat /var/log/secure\n"),
			(Yf = {
				title: 'Terminal tricks: Handy Shortcuts',
				description: 'Terminal tricks: Handy Shortcuts',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['shell tricks'],
				draft: !1
			}),
			(Kf = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx',
				rawData: void 0
			})
	})
var Kl = {}
f(Kl, {
	_internal: () => sg,
	body: () => ng,
	collection: () => eg,
	data: () => rg,
	id: () => Qf,
	slug: () => tg
})
var Qf,
	eg,
	tg,
	ng,
	rg,
	sg,
	Ql = m(() => {
		'use strict'
		;(Qf = 'The-87-United-States.mdx'),
			(eg = 'blog'),
			(tg = 'the-87-united-states'),
			(ng = `
fdsasdffvdvcx
`),
			(rg = {
				title: 'The 87 United States',
				description: 'The 87 United States',
				pubDate: new Date(1704258e6),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['humor'],
				draft: !0
			}),
			(sg = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/The-87-United-States.mdx',
				rawData: void 0
			})
	})
var ea = {}
f(ea, {
	_internal: () => dg,
	body: () => ig,
	collection: () => lg,
	data: () => cg,
	id: () => og,
	slug: () => ag
})
var og,
	lg,
	ag,
	ig,
	cg,
	dg,
	ta = m(() => {
		'use strict'
		;(og = 'Useful-Links.mdx'),
			(lg = 'blog'),
			(ag = 'useful-links'),
			(ig = `
Below is a collection of other posts I've found very useful and frequently refer\r
to when doing infrequent tasks. Hopefully y'all will find them useful too.

Bash Cheatsheet \\[[https://ss64.com/bash/syntax-keyboard.html](https://ss64.com/bash/syntax-keyboard.html)]\r
Apple Notarization Info\r
\\[[https://mrmacintosh.com/updated-list-of-macos-notarization-links/](https://mrmacintosh.com/updated-list-of-macos-notarization-links/)]\r
Linux Partition Alignment Guide\r
\\[[http://rainbow.chard.org/2013/01/30/how-to-align-partitions-for-best-performance-using-parted/](http://rainbow.chard.org/2013/01/30/how-to-align-partitions-for-best-performance-using-parted/)]\r
Shell Scripting Matters \\[[https://dev.to/thiht/shell-scripts-matter](https://dev.to/thiht/shell-scripts-matter)]\r
MDADM Cheatsheet \\[[http://www.ducea.com/2009/03/08/mdadm-cheat-sheet/](http://www.ducea.com/2009/03/08/mdadm-cheat-sheet/)]"
`),
			(cg = {
				title: 'Useful Links',
				description: 'Useful Links',
				pubDate: new Date(15669648e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['links'],
				draft: !1
			}),
			(dg = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Useful-Links.mdx',
				rawData: void 0
			})
	})
var na = {}
f(na, {
	_internal: () => Dg,
	body: () => mg,
	collection: () => hg,
	data: () => yg,
	id: () => pg,
	slug: () => ug
})
var pg,
	hg,
	ug,
	mg,
	yg,
	Dg,
	ra = m(() => {
		'use strict'
		;(pg = 'Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx'),
			(hg = 'blog'),
			(ug = 'using-ad-cs-for-machine-based-eap-tls-on-macos'),
			(mg = `\r
\`\`\`xml\r
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\r
<plist version="1.0">\r
<dict>\r
	<key>PayloadContent</key>\r
	<array>\r
		<dict>\r
			<key>PayloadContent</key>\r
			<data>\r
			YOUR X509/PEM RADIUS CERT HERE\r
			</data>\r
			<key>PayloadDisplayName</key>\r
			<string>Certificate</string>\r
			<key>PayloadIdentifier</key>\r
			<string>GUID</string>\r
			<key>PayloadOrganization</key>\r
			<string></string>\r
			<key>PayloadType</key>\r
			<string>com.apple.security.pkcs1</string>\r
			<key>PayloadUUID</key>\r
			<string>60EDDC99-F33D-4D91-A93C-601977638A13</string>\r
			<key>PayloadVersion</key>\r
			<integer>1</integer>\r
		</dict>\r
		<dict>\r
			<key>AllowAllAppsAccess</key>\r
			<true/>\r
			<key>CertServer</key>\r
			<string>YOUR CERT SERVER FQDN HERE</string>\r
			<key>CertTemplate</key>\r
			<string>NAME_OF_CERT_TEMPLATE_HERE_REQUIRES_NO_SPACES</string>\r
			<key>CertificateAcquisitionMechanism</key>\r
			<string>RPC</string>\r
			<key>CertificateAuthority</key>\r
			<string>YOUR CA NAME HERE</string>\r
			<key>CertificateRenewalTimeInterval</key>\r
			<integer>14</integer>\r
			<key>Description</key>\r
			<string>AD Machine Cert</string>\r
			<key>EnableAutoRenewal</key>\r
			<true/>\r
			<key>KeyIsExtractable</key>\r
			<false/>\r
			<key>Keysize</key>\r
			<integer>2048</integer>\r
			<key>PayloadDisplayName</key>\r
			<string>AD Certificate</string>\r
			<key>PayloadIdentifier</key>\r
			<string>com.company.fqdn.24B78032-17F2-4705-86C1-D36ABE51273C.com.apple.ADCertificate.managed.44169206-CBE1-43FD-BD03-C1F7533CC2CA</string>\r
			<key>PayloadOrganization</key>\r
			<string></string>\r
			<key>PayloadType</key>\r
			<string>com.apple.ADCertificate.managed</string>\r
			<key>PayloadUUID</key>\r
			<string>44169206-CBE1-43FD-BD03-C1F7533CC2CA</string>\r
			<key>PayloadVersion</key>\r
			<integer>1</integer>\r
		</dict>\r
		<dict>\r
			<key>AutoJoin</key>\r
			<true/>\r
			<key>EAPClientConfiguration</key>\r
			<dict>\r
				<key>AcceptEAPTypes</key>\r
				<array>\r
					<integer>13</integer>\r
				</array>\r
				<key>PayloadCertificateAnchorUUID</key>\r
				<array>\r
					<string>60EDDC99-F33D-4D91-A93C-601977638A13</string>\r
				</array>\r
				<key>TLSTrustedServerNames</key>\r
				<array>\r
					<string>YOUR TRUSTED SERVER NAME HERE</string>\r
				</array>\r
			</dict>\r
			<key>EncryptionType</key>\r
			<string>WPA2</string>\r
			<key>PayloadCertificateUUID</key>\r
			<string>44169206-CBE1-43FD-BD03-C1F7533CC2CA</string>\r
			<key>PayloadDisplayName</key>\r
			<string>Wi-Fi</string>\r
			<key>PayloadIdentifier</key>\r
			<string>com.company.fqdn.24B78032-17F2-4705-86C1-D36ABE51273C.com.apple.wifi.managed.24B78032-17F2-4705-86C1-D36ABE51273C</string>\r
			<key>PayloadOrganization</key>\r
			<string></string>\r
			<key>PayloadType</key>\r
			<string>com.apple.wifi.managed</string>\r
			<key>PayloadUUID</key>\r
			<string>24B78032-17F2-4705-86C1-D36ABE51273C</string>\r
			<key>PayloadVersion</key>\r
			<integer>1</integer>\r
			<key>SSID_STR</key>\r
			<string>YOU_WIFI_SSID_HERE</string>\r
			<key>SetupModes</key>\r
			<array>\r
				<string>System</string>\r
			</array>\r
			<key>TLSCertificateRequired</key>\r
			<true/>\r
		</dict>\r
	</array>\r
	<key>PayloadDisplayName</key>\r
	<string>Machine Cert Request w/ WiFi Configuration</string>\r
	<key>PayloadIdentifier</key>\r
	<string>com.company.fqdn.40C664B3-63F3-4E28-9204-9579DB0DC8DC</string>\r
	<key>PayloadOrganization</key>\r
	<string>YOUR ORG | DEPT NAME HERE</string>\r
	<key>PayloadScope</key>\r
	<string>System</string>\r
	<key>PayloadType</key>\r
	<string>Configuration</string>\r
	<key>PayloadUUID</key>\r
	<string>40C664B3-63F3-4E28-9204-9579DB0DC8DC</string>\r
	<key>PayloadVersion</key>\r
	<integer>1</integer>\r
</dict>\r
</plist>\r
\`\`\`\r
\r
# 2024 Note:\r
\r
When copying this over I realized I just dropped the plist file and nothing else.\r
\r
This is a sanitized version of the plist file/profile that allowed macOS to pull a certificate from ADCS in my old envionment.\r
There may be updates to the format, this may no longer work. Unfortuantely, there's no macOS or 802.1x in my new environment so I'm unable to check up on it.\r
`),
			(yg = {
				title: 'Using AD CS for machine-based EAP-TLS on macOS',
				description: 'Using AD CS for machine-based EAP-TLS on macOS',
				pubDate: new Date(15669648e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'macOS',
				tags: ['certs', 'macos'],
				draft: !1
			}),
			(Dg = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx',
				rawData: void 0
			})
	})
var sa = {}
f(sa, {
	_internal: () => vg,
	body: () => bg,
	collection: () => gg,
	data: () => wg,
	id: () => fg,
	slug: () => Fg
})
var fg,
	gg,
	Fg,
	bg,
	wg,
	vg,
	oa = m(() => {
		'use strict'
		;(fg = 'Vim-Tricks-Increment-or-decrement-numbers.mdx'),
			(gg = 'blog'),
			(Fg = 'vim-tricks-increment-or-decrement-numbers'),
			(bg = `
Another one of my favorite vim tricks is for the quick decrement or increment of numbers.

While in Normal mode, if you bring the cursor to a number, you can use ctrl+a to increment it or ctrl+x to decrement it. As with all vim commands, you can enter a number first and it will do the action that many times. So 400 ctrl+a will add 400 to the highlighted number.

The other fun thing this will do is automatically hop to the first number on a line, so if you have the letter "f" highlighted, but the number "418" is 50 characters to the right, ctrl+a or ctrl+x will hop 50 characters to the right and apply the action to the number.
`),
			(wg = {
				title: 'Vim Tricks: Increment or decrement numbers',
				description: 'Vim Tricks: Increment or decrement numbers',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Linux',
				tags: ['shortcuts', 'vim'],
				draft: !1
			}),
			(vg = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx',
				rawData: void 0
			})
	})
var la = {}
f(la, {
	_internal: () => kg,
	body: () => Sg,
	collection: () => Cg,
	data: () => Ag,
	id: () => Eg,
	slug: () => xg
})
var Eg,
	Cg,
	xg,
	Sg,
	Ag,
	kg,
	aa = m(() => {
		'use strict'
		;(Eg = 'Vim-Tricks-Visual-Block-Mode.mdx'),
			(Cg = 'blog'),
			(xg = 'vim-tricks-visual-block-mode'),
			(Sg = `
I thought I'd write down one of my favorite vim tricks. This one is to change or comment a vertical block of text all at once, instead of one line at a time.

* Step One
  * Enter Visual Block mode with <kbd><kbd>Ctrl</kbd>+<kbd>v</kbd></kbd>, then highlight a single character wide slice you wish to add comment characters to.
* Step two
  * Press <kbd><kbd>Shift</kbd>+<kbd>i</kbd></kbd> to enter insert mode, then enter your comment character. Don't worry, this will only effect one line at first.
* Step three
  * Press <kbd>Esc</kbd> to apply your change to all lines you previously had highlighted.
`),
			(Ag = {
				title: 'Vim Tricks: Visual Block Mode',
				description: 'Vim Tricks: Visual Block Mode',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Linux',
				tags: ['shortcuts', 'vim'],
				draft: !1
			}),
			(kg = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx',
				rawData: void 0
			})
	})
var ia = {}
f(ia, {
	_internal: () => Ig,
	body: () => Pg,
	collection: () => _g,
	data: () => Mg,
	id: () => Bg,
	slug: () => Tg
})
var Bg,
	_g,
	Tg,
	Pg,
	Mg,
	Ig,
	ca = m(() => {
		'use strict'
		;(Bg = 'What-is-DEP.mdx'),
			(_g = 'blog'),
			(Tg = 'what-is-dep'),
			(Pg = `
After a stakeholders meeting yesterday, I was left with the realization that many of us in the IT community may be saying "Hey, you need this DEP thing if you want to keep managing Apple devices correctly and efficently". But we may not be explaining what this DEP thing is, and some of us may not be fully understanding it. So this is meant to be a overview of what DEP is and the background needed to understand why you want it without going too deep into the weeds.

# Background

To start, let's talk about what Apple is doing with configuration. Apple is slowly moving away from the classic tried-and-true methods for configuration such as imaging, modifications to the default user profile, and the \`defaults\` command. [They're removing imaging entirely on new hardware](https://scriptingosx.com/2017/12/imac-pro-implications-for-mac-admins/), [protecting the default user profile from modification](https://discussions.apple.com/thread/7855765?answerId=31510451022#31510451022), and [pushing configuration profiles](https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html) and the preference hierarchy.

## Imaging

Monolithic imaging has been going away for a very long time, they've been pushing thin image workflows for longer than I've been in the industry. They've now stopped supporting thin imaging as well with the [removal of netboot from the iMac Pro](https://support.apple.com/en-gb/HT202770) and [netboot components from Server.app](https://support.apple.com/en-us/HT208312).

## SIP

With the introduction of SIP, Apple started locking down critical parts of the operating system so no user can touch them. Not even with \`sudo\` or by being root. If you're familliar with \`selinux\` or \`AppArmor\` it's a similar concept, but only modifiable by Apple. This included most of \`/System\`, and the default user profile is in there. With APFS, all of \`/System\` is expected to become read-only, no more modifications to default profile or any other system directory allowed.

## Configuration Profiles

Apple introduced configuration profiles in 10.8. Since then they've been at the top of the preference domain hierarchy. A setting set with a profile cannot be overridden by \`defaults\` or \`sudo defaults\`. [They can control many things by default](https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html) and [you can configure existing configurations](https://github.com/timsutton/mcxToProfile) to be compatible. Many softwares are compatible with them as well. [Microsoft Office 2016](https://docs.google.com/spreadsheets/d/1ESX5td0y0OP3jdzZ-C2SItm-TUi-iA_bcHCBvaoCumw/edit) is one of many examples.

## MDM

Apple has historically been pushing MDM as a way to create and issue Configuration Profiles. They have a reference implementation called Profile Manager, a component of Server.app. This is just for reference, there exists more than one story of profile manager just imploding and everything being lost even with backups. Apple themselves uses Jamf Pro. This has led to a "friends don't let friends use Profile Manager" attitude within the mac admins community. Many options exist for this, [Jamf](https://www.jamf.com/), [SimpleMDM](https://simplemdm.com/), and [MicroMDM](https://micromdm.io/) being just three options.

# How this ties together

With a proper thin imaging workflow a machine would be unboxed, a vanilla copy of the OS installed using a tool like DeployStudio or Imagr, part of that workflow would bind to a directory service, install some bootstrapping tools, complete any MDM enrollment, and pass the software installation and OS configuration on to the bootstrapping tools like Jamf Self Service or Munki. The bootstrapping tool would then download any software from a managed repository and install it, and add any configuration profiles it's configured to.

Without the ability to image a machine, these bootstrapping tools and any mdm enrollment have to be manually added after the OOBE (out of box experience) is completed. This presents two issues: Having to manually walk through the OOBE on every machine you deploy, and the introduction of [UAMDM](https://simplemdm.com/2017/11/01/user-approved-mdm-enrollment/) disabling features of your MDM until a person physically moves the cursor to the "Approve" button on the end-user's machine. There's also [UAKEL](https://developer.apple.com/library/content/technotes/tn2459/_index.html) for your kernel extensions. This *also* needs to be preformed by a person physically at the machine.

## DEP, Finally

Sounds like a pain? It is, and Apple recognizes this. DEP exists to make this process easier. DEP is an Apple program where they will work with a vendor to integrate their PoS system with Apple's backend. Apple also works with you to create a DEP account that your business purchases can be tied to. Once your account exists, and provided your vendor of choice is DEP approved, any purchases made going forwards can be automatically tied to your DEP account.

DEP will integrate with your MDM solution(s) and automatically enroll the machine during the OOBE. If you have multiple MDMs, you can choose the MDM you want devices to be configured to go to in the DEP portal, using the serial of a specific device for one, an order number for multiple devices, or several other options. DEP allows you to configure the OOBE as well. After DEP enrolls the machine into your MDM (optionally this can require authentication), the MDM will optionally send a payload with software like Jamf's Self Service, the Munki Project's Managed Software Center, or SplashBuddy, which can then be used to bootstrap the rest of the machine's software and configuration. This process is regularly advertised as able to get you to a "zero-touch" environment: the ability to provide a factory shrinkwrapped box to an end-user and know that the machine can configure itself.

DEP also comes with the benefit that MDM it enrolls the machine in is automatically considered user-approved, and a user-approved MDM can issue a configuration profile that whitelists kernel extensions, thus getting you around UAKEL in the same stroke.

### Security addendum

DEP isn't something that can be gotten around by simply wiping the machine. If a laptop is stolen then wiped, during the OOBE it will check in with Apple to see if there is a DEP configuration available, and if there is it will pull it down again or block the process waiting for authentication. If your device is marked as stolen or placed in lost mode, it will also sit at the OOBE until unlocked or returned.
`),
			(Mg = {
				title: 'What is DEP?',
				description: 'What is DEP?',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'macOS',
				tags: ['dep'],
				draft: !1
			}),
			(Ig = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/What-is-DEP.mdx',
				rawData: void 0
			})
	})
var da = {}
f(da, {
	_internal: () => Ug,
	body: () => Og,
	collection: () => Lg,
	data: () => Rg,
	id: () => jg,
	slug: () => $g
})
var jg,
	Lg,
	$g,
	Og,
	Rg,
	Ug,
	pa = m(() => {
		'use strict'
		;(jg = 'astro copy 2.mdx'),
			(Lg = 'blog'),
			($g = 'astro-copy-2'),
			(Og = `
# Title

**If you know HTML, you already know enough to write your first Astro component.**

Astro component syntax is a superset of HTML. The syntax was [designed to feel familiar to anyone with experience writing HTML or JSX](#differences-between-astro-and-jsx), and adds support for including components and JavaScript expressions.

## JSX-like Expressions

You can define local JavaScript variables inside of the frontmatter component script between the two code fences (\`---\`) of an Astro component. You can then inject these variables into the component's HTML template using JSX-like expressions!

note\\[dynamic vs reactive]\r
Using this approach, you can include **dynamic** values that are calculated in the frontmatter. But once included, these values are not **reactive** and will never change. Astro components are templates that only run once, during the rendering step.

See below for more examples of [differences between Astro and JSX](#differences-between-astro-and-jsx).

### Variables

Local variables can be added into the HTML using the curly braces syntax:

\`\`\`html
---\r
const name = 'Astro'\r
---\r
\r
<div>\r
	<h1>Hello {name}!</h1>\r
	<!-- Outputs <h1>Hello Astro!</h1> -->\r
</div>
\`\`\`

### Dynamic Attributes

Local variables can be used in curly braces to pass attribute values to both HTML elements and components:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<h1 class={name}>Attribute expressions are supported</h1>\r
\r
<MyComponent templateLiteralNameAttribute={\`MyNameIs\${name}\`} />
\`\`\`

caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can't assign an event handler to an HTML element in an Astro component:

\`\`\`astro
---\r
// dont-do-this.astro\r
function handleClick() {\r
	console.log('button clicked!')\r
}\r
---\r
\r
<!-- \u274C This doesn't work! \u274C -->\r
<button onClick={handleClick}>Nothing will happen when you click me!</button>
\`\`\`

Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:

\`\`\`astro
---\r
// do-this-instead.astro\r
---\r
\r
<button id='button'>Click Me</button>\r
<script>\r
	function handleClick() {\r
		console.log('button clicked!')\r
	}\r
	document.getElementById('button').addEventListener('click', handleClick)\r
<\/script>
\`\`\`

## ressions

### Dynamic HTML

Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:

\`\`\`astro
---\r
const items = ['Dog', 'Cat', 'Platypus']\r
---\r
\r
<ul>\r
	{items.map((item) => <li>{item}</li>)}\r
</ul>
\`\`\`

Astro can conditionally display HTML using JSX logical operators and ternary expressions.

\`\`\`astro
---\r
const visible = true\r
---\r
\r
{visible && <p>Show me!</p>}\r
\r
{visible ? <p>Show me!</p> : <p>Else show me!</p>}
\`\`\`

### Dynamic Tags

You can also use dynamic tags by setting a variable to an HTML tag name or a component import:

\`\`\`astro
---\r
import MyComponent from './MyComponent.astro'\r
const Element = 'div'\r
const Component = MyComponent\r
---\r
\r
<Element>Hello!</Element>\r
<!-- renders as <div>Hello!</div> -->\r
<Component />\r
<!-- renders as <MyComponent /> -->
\`\`\`

When using dynamic tags:

* **Variable names must be capitalized.** For example, use \`Element\`, not \`element\`. Otherwise, Astro will try to render your variable name as a literal HTML tag.
* **Hydration directives are not supported.** When using [\`client:*\` hydration directives](/en/core-concepts/framework-components/#hydrating-interactive-components), Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.

### Fragments

Astro supports using either \`<Fragment> </Fragment>\` or the shorthand \`<> </>\`.

Fragments can be useful to avoid wrapper elements when adding [\`set:*\` directives](/en/reference/directives-reference/#sethtml), as in the following example:

\`\`\`astro
---\r
const htmlString = '<p>Raw HTML content</p>'\r
---\r
\r
<Fragment set:html={htmlString} />
\`\`\`

### Differences between Astro and JSX

Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between \`.astro\` files and JSX.

#### Attributes

In Astro, you use the standard \`kebab-case\` format for all HTML attributes instead of the \`camelCase\` used in JSX. This even works for \`class\`, which is not supported by React.

\`\`\`jsx
<div className="box" dataValue="3" />\r
<div class="box" data-value="3" />
\`\`\`

#### Multiple Elements

An Astro component template can render multiple elements with no need to wrap everything in a single \`<div>\` or \`<>\`, unlike JavaScript or JSX.

\`\`\`astro
---\r
// Template with multiple elements\r
---\r
\r
<p>No need to wrap elements in a single containing element.</p>\r
<p>Astro supports multiple root elements in a template.</p>
\`\`\`

#### Comments

In Astro, you can use standard HTML comments or JavaScript-style comments.

\`\`\`astro
---\r
\r
---\r
\r
<!-- HTML comment syntax is valid in .astro files -->{/* JS comment syntax is also valid */}
\`\`\`

HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.
`),
			(Rg = {
				title: 'MacBook Pro 2022',
				description:
					'The new MacBook Pro 2022 is here. With the Apple M2 chip, a new design, and more, the new MacBook Pro is the best laptop Apple has ever made.',
				pubDate: new Date(16567128e5),
				heroImage: new Proxy(
					{ src: '/_astro/bg.S5lDKigC.jpg', width: 2400, height: 1920, format: 'jpg' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['JavaScript', 'css', 'HTML5', 'GitHub'],
				draft: !0
			}),
			(Ug = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 2.mdx',
				rawData: void 0
			})
	})
var ha = {}
f(ha, {
	_internal: () => Vg,
	body: () => Wg,
	collection: () => Hg,
	data: () => Gg,
	id: () => Ng,
	slug: () => zg
})
var Ng,
	Hg,
	zg,
	Wg,
	Gg,
	Vg,
	ua = m(() => {
		'use strict'
		;(Ng = 'astro copy 3.mdx'),
			(Hg = 'blog'),
			(zg = 'astro-copy-3'),
			(Wg = `
**If you know HTML, you already know enough to write your first Astro component.**

Astro component syntax is a superset of HTML. The syntax was [designed to feel familiar to anyone with experience writing HTML or JSX](#differences-between-astro-and-jsx), and adds support for including components and JavaScript expressions.

## JSX-like Expressions

You can define local JavaScript variables inside of the frontmatter component script between the two code fences (\`---\`) of an Astro component. You can then inject these variables into the component's HTML template using JSX-like expressions!

\\:::note\\[dynamic vs reactive]\r
Using this approach, you can include **dynamic** values that are calculated in the frontmatter. But once included, these values are not **reactive** and will never change. Astro components are templates that only run once, during the rendering step.

See below for more examples of [differences between Astro and JSX](#differences-between-astro-and-jsx).\r
\\:::

### Variables

Local variables can be added into the HTML using the curly braces syntax:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<div>\r
	<h1>Hello {name}!</h1>\r
	<!-- Outputs <h1>Hello Astro!</h1> -->\r
</div>
\`\`\`

### Dynamic Attributes

Local variables can be used in curly braces to pass attribute values to both HTML elements and components:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<h1 class={name}>Attribute expressions are supported</h1>\r
\r
<MyComponent templateLiteralNameAttribute={\`MyNameIs\${name}\`} />
\`\`\`

\\:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can't assign an event handler to an HTML element in an Astro component:

\`\`\`astro
---\r
// dont-do-this.astro\r
function handleClick() {\r
	console.log('button clicked!')\r
}\r
---\r
\r
<!-- \u274C This doesn't work! \u274C -->\r
<button onClick={handleClick}>Nothing will happen when you click me!</button>
\`\`\`

Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:

\`\`\`astro
---\r
// do-this-instead.astro\r
---\r
\r
<button id='button'>Click Me</button>\r
<script>\r
	function handleClick() {\r
		console.log('button clicked!')\r
	}\r
	document.getElementById('button').addEventListener('click', handleClick)\r
<\/script>
\`\`\`

\\:::

### Dynamic HTML

Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:

\`\`\`astro
---\r
const items = ['Dog', 'Cat', 'Platypus']\r
---\r
\r
<ul>\r
	{items.map((item) => <li>{item}</li>)}\r
</ul>
\`\`\`

Astro can conditionally display HTML using JSX logical operators and ternary expressions.

\`\`\`astro
---\r
const visible = true\r
---\r
\r
{visible && <p>Show me!</p>}\r
\r
{visible ? <p>Show me!</p> : <p>Else show me!</p>}
\`\`\`

### Dynamic Tags

You can also use dynamic tags by setting a variable to an HTML tag name or a component import:

\`\`\`astro
---\r
import MyComponent from './MyComponent.astro'\r
const Element = 'div'\r
const Component = MyComponent\r
---\r
\r
<Element>Hello!</Element>\r
<!-- renders as <div>Hello!</div> -->\r
<Component />\r
<!-- renders as <MyComponent /> -->
\`\`\`

When using dynamic tags:

* **Variable names must be capitalized.** For example, use \`Element\`, not \`element\`. Otherwise, Astro will try to render your variable name as a literal HTML tag.
* **Hydration directives are not supported.** When using [\`client:*\` hydration directives](/en/core-concepts/framework-components/#hydrating-interactive-components), Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.

### Fragments

Astro supports using either \`<Fragment> </Fragment>\` or the shorthand \`<> </>\`.

Fragments can be useful to avoid wrapper elements when adding [\`set:*\` directives](/en/reference/directives-reference/#sethtml), as in the following example:

\`\`\`astro
---\r
const htmlString = '<p>Raw HTML content</p>'\r
---\r
\r
<Fragment set:html={htmlString} />
\`\`\`

### Differences between Astro and JSX

Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between \`.astro\` files and JSX.

#### Attributes

In Astro, you use the standard \`kebab-case\` format for all HTML attributes instead of the \`camelCase\` used in JSX. This even works for \`class\`, which is not supported by React.

\`\`\`jsx
<div className="box" dataValue="3" />\r
<div class="box" data-value="3" />
\`\`\`

#### Multiple Elements

An Astro component template can render multiple elements with no need to wrap everything in a single \`<div>\` or \`<>\`, unlike JavaScript or JSX.

\`\`\`astro
---\r
// Template with multiple elements\r
---\r
\r
<p>No need to wrap elements in a single containing element.</p>\r
<p>Astro supports multiple root elements in a template.</p>
\`\`\`

#### Comments

In Astro, you can use standard HTML comments or JavaScript-style comments.

\`\`\`astro
---\r
\r
---\r
\r
<!-- HTML comment syntax is valid in .astro files -->{/* JS comment syntax is also valid */}
\`\`\`

\\:::caution\r
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\r
\\:::
`),
			(Gg = {
				title: 'Astro Components',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dia',
				pubDate: new Date(16567344e5),
				heroImage: new Proxy(
					{ src: '/_astro/te.7nM7T2s1.jpg', width: 3648, height: 5472, format: 'jpg' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['JavaScript', 'css', 'HTML5', 'GitHub'],
				draft: !0
			}),
			(Vg = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 3.mdx',
				rawData: void 0
			})
	})
var ma = {}
f(ma, {
	_internal: () => Kg,
	body: () => Zg,
	collection: () => Jg,
	data: () => Yg,
	id: () => Xg,
	slug: () => qg
})
var Xg,
	Jg,
	qg,
	Zg,
	Yg,
	Kg,
	ya = m(() => {
		'use strict'
		;(Xg = 'astro copy 4.mdx'),
			(Jg = 'blog'),
			(qg = 'astro-copy-4'),
			(Zg = `
**If you know HTML, you already know enough to write your first Astro component.**

Astro component syntax is a superset of HTML. The syntax was [designed to feel familiar to anyone with experience writing HTML or JSX](#differences-between-astro-and-jsx), and adds support for including components and JavaScript expressions.

## JSX-like Expressions

You can define local JavaScript variables inside of the frontmatter component script between the two code fences (\`---\`) of an Astro component. You can then inject these variables into the component's HTML template using JSX-like expressions!

\\:::note\\[dynamic vs reactive]\r
Using this approach, you can include **dynamic** values that are calculated in the frontmatter. But once included, these values are not **reactive** and will never change. Astro components are templates that only run once, during the rendering step.

See below for more examples of [differences between Astro and JSX](#differences-between-astro-and-jsx).\r
\\:::

### Variables

Local variables can be added into the HTML using the curly braces syntax:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<div>\r
	<h1>Hello {name}!</h1>\r
	<!-- Outputs <h1>Hello Astro!</h1> -->\r
</div>
\`\`\`

### Dynamic Attributes

Local variables can be used in curly braces to pass attribute values to both HTML elements and components:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<h1 class={name}>Attribute expressions are supported</h1>\r
\r
<MyComponent templateLiteralNameAttribute={\`MyNameIs\${name}\`} />
\`\`\`

\\:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can't assign an event handler to an HTML element in an Astro component:

\`\`\`astro
---\r
// dont-do-this.astro\r
function handleClick() {\r
	console.log('button clicked!')\r
}\r
---\r
\r
<!-- \u274C This doesn't work! \u274C -->\r
<button onClick={handleClick}>Nothing will happen when you click me!</button>
\`\`\`

Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:

\`\`\`astro
---\r
// do-this-instead.astro\r
---\r
\r
<button id='button'>Click Me</button>\r
<script>\r
	function handleClick() {\r
		console.log('button clicked!')\r
	}\r
	document.getElementById('button').addEventListener('click', handleClick)\r
<\/script>
\`\`\`

\\:::

### Dynamic HTML

Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:

\`\`\`astro
---\r
const items = ['Dog', 'Cat', 'Platypus']\r
---\r
\r
<ul>\r
	{items.map((item) => <li>{item}</li>)}\r
</ul>
\`\`\`

Astro can conditionally display HTML using JSX logical operators and ternary expressions.

\`\`\`astro
---\r
const visible = true\r
---\r
\r
{visible && <p>Show me!</p>}\r
\r
{visible ? <p>Show me!</p> : <p>Else show me!</p>}
\`\`\`

### Dynamic Tags

You can also use dynamic tags by setting a variable to an HTML tag name or a component import:

\`\`\`astro
---\r
import MyComponent from './MyComponent.astro'\r
const Element = 'div'\r
const Component = MyComponent\r
---\r
\r
<Element>Hello!</Element>\r
<!-- renders as <div>Hello!</div> -->\r
<Component />\r
<!-- renders as <MyComponent /> -->
\`\`\`

When using dynamic tags:

* **Variable names must be capitalized.** For example, use \`Element\`, not \`element\`. Otherwise, Astro will try to render your variable name as a literal HTML tag.
* **Hydration directives are not supported.** When using [\`client:*\` hydration directives](/en/core-concepts/framework-components/#hydrating-interactive-components), Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.

### Fragments

Astro supports using either \`<Fragment> </Fragment>\` or the shorthand \`<> </>\`.

Fragments can be useful to avoid wrapper elements when adding [\`set:*\` directives](/en/reference/directives-reference/#sethtml), as in the following example:

\`\`\`astro
---\r
const htmlString = '<p>Raw HTML content</p>'\r
---\r
\r
<Fragment set:html={htmlString} />
\`\`\`

### Differences between Astro and JSX

Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between \`.astro\` files and JSX.

#### Attributes

In Astro, you use the standard \`kebab-case\` format for all HTML attributes instead of the \`camelCase\` used in JSX. This even works for \`class\`, which is not supported by React.

\`\`\`jsx
<div className="box" dataValue="3" />\r
<div class="box" data-value="3" />
\`\`\`

#### Multiple Elements

An Astro component template can render multiple elements with no need to wrap everything in a single \`<div>\` or \`<>\`, unlike JavaScript or JSX.

\`\`\`astro
---\r
// Template with multiple elements\r
---\r
\r
<p>No need to wrap elements in a single containing element.</p>\r
<p>Astro supports multiple root elements in a template.</p>
\`\`\`

#### Comments

In Astro, you can use standard HTML comments or JavaScript-style comments.

\`\`\`astro
---\r
\r
---\r
\r
<!-- HTML comment syntax is valid in .astro files -->{/* JS comment syntax is also valid */}
\`\`\`

\\:::caution\r
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\r
\\:::
`),
			(Yg = {
				title: 'Components',
				description:
					'Astro components are HTML templates with superpowers. They are a superset of HTML, with support for including components and JavaScript expressions.',
				pubDate: new Date(16567344e5),
				heroImage: new Proxy(
					{ src: '/_astro/banner.XpSPdX8n.jpg', width: 3902, height: 3015, format: 'jpg' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['JavaScript', 'css', 'HTML5', 'GitHub', 'Ordenador'],
				draft: !0
			}),
			(Kg = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 4.mdx',
				rawData: void 0
			})
	})
var Da = {}
f(Da, {
	_internal: () => sF,
	body: () => nF,
	collection: () => eF,
	data: () => rF,
	id: () => Qg,
	slug: () => tF
})
var Qg,
	eF,
	tF,
	nF,
	rF,
	sF,
	fa = m(() => {
		'use strict'
		;(Qg = 'astro.mdx'),
			(eF = 'blog'),
			(tF = 'astro'),
			(nF = `
**If you know HTML, you already know enough to write your first Astro component.**

Astro component syntax is a superset of HTML. The syntax was [designed to feel familiar to anyone with experience writing HTML or JSX](#differences-between-astro-and-jsx), and adds support for including components and JavaScript expressions.

## JSX-like Expressions

You can define local JavaScript variables inside of the frontmatter component script between the two code fences (\`---\`) of an Astro component. You can then inject these variables into the component's HTML template using JSX-like expressions!

\\:::note\\[dynamic vs reactive]\r
Using this approach, you can include **dynamic** values that are calculated in the frontmatter. But once included, these values are not **reactive** and will never change. Astro components are templates that only run once, during the rendering step.

See below for more examples of [differences between Astro and JSX](#differences-between-astro-and-jsx).\r
\\:::

### Variables

Local variables can be added into the HTML using the curly braces syntax:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<div>\r
	<h1>Hello {name}!</h1>\r
	<!-- Outputs <h1>Hello Astro!</h1> -->\r
</div>
\`\`\`

### Dynamic Attributes

Local variables can be used in curly braces to pass attribute values to both HTML elements and components:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<h1 class={name}>Attribute expressions are supported</h1>\r
\r
<MyComponent templateLiteralNameAttribute={\`MyNameIs\${name}\`} />
\`\`\`

\\:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can't assign an event handler to an HTML element in an Astro component:

\`\`\`astro
---\r
// dont-do-this.astro\r
function handleClick() {\r
	console.log('button clicked!')\r
}\r
---\r
\r
<!-- \u274C This doesn't work! \u274C -->\r
<button onClick={handleClick}>Nothing will happen when you click me!</button>
\`\`\`

Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:

\`\`\`astro
---\r
// do-this-instead.astro\r
---\r
\r
<button id='button'>Click Me</button>\r
<script>\r
	function handleClick() {\r
		console.log('button clicked!')\r
	}\r
	document.getElementById('button').addEventListener('click', handleClick)\r
<\/script>
\`\`\`

\\:::

### Dynamic HTML

Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:

\`\`\`astro
---\r
const items = ['Dog', 'Cat', 'Platypus']\r
---\r
\r
<ul>\r
	{items.map((item) => <li>{item}</li>)}\r
</ul>
\`\`\`

Astro can conditionally display HTML using JSX logical operators and ternary expressions.

\`\`\`astro
---\r
const visible = true\r
---\r
\r
{visible && <p>Show me!</p>}\r
\r
{visible ? <p>Show me!</p> : <p>Else show me!</p>}
\`\`\`

### Dynamic Tags

You can also use dynamic tags by setting a variable to an HTML tag name or a component import:

\`\`\`astro
---\r
import MyComponent from './MyComponent.astro'\r
const Element = 'div'\r
const Component = MyComponent\r
---\r
\r
<Element>Hello!</Element>\r
<!-- renders as <div>Hello!</div> -->\r
<Component />\r
<!-- renders as <MyComponent /> -->
\`\`\`

When using dynamic tags:

* **Variable names must be capitalized.** For example, use \`Element\`, not \`element\`. Otherwise, Astro will try to render your variable name as a literal HTML tag.
* **Hydration directives are not supported.** When using [\`client:*\` hydration directives](/en/core-concepts/framework-components/#hydrating-interactive-components), Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.

### Fragments

Astro supports using either \`<Fragment> </Fragment>\` or the shorthand \`<> </>\`.

Fragments can be useful to avoid wrapper elements when adding [\`set:*\` directives](/en/reference/directives-reference/#sethtml), as in the following example:

\`\`\`astro
---\r
const htmlString = '<p>Raw HTML content</p>'\r
---\r
\r
<Fragment set:html={htmlString} />
\`\`\`

### Differences between Astro and JSX

Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between \`.astro\` files and JSX.

#### Attributes

In Astro, you use the standard \`kebab-case\` format for all HTML attributes instead of the \`camelCase\` used in JSX. This even works for \`class\`, which is not supported by React.

\`\`\`jsx
<div className="box" dataValue="3" />\r
<div class="box" data-value="3" />
\`\`\`

#### Multiple Elements

An Astro component template can render multiple elements with no need to wrap everything in a single \`<div>\` or \`<>\`, unlike JavaScript or JSX.

\`\`\`astro
---\r
// Template with multiple elements\r
---\r
\r
<p>No need to wrap elements in a single containing element.</p>\r
<p>Astro supports multiple root elements in a template.</p>
\`\`\`

#### Comments

In Astro, you can use standard HTML comments or JavaScript-style comments.

\`\`\`astro
---\r
\r
---\r
\r
<!-- HTML comment syntax is valid in .astro files -->{/* JS comment syntax is also valid */}
\`\`\`

\\:::caution\r
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\r
\\:::
`),
			(rF = {
				title: 'TypeScript2',
				description: 'TypeScript2 description here 2',
				pubDate: new Date(16567344e5),
				heroImage: new Proxy(
					{
						src: '/_astro/placeholder-about.wqyabTIj.jpg',
						width: 4500,
						height: 2532,
						format: 'jpg'
					},
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['JavaScript', 'css', 'HTML5', 'GitHub'],
				draft: !0
			}),
			(sF = {
				type: 'content',
				filePath: 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro.mdx',
				rawData: void 0
			})
	})
var ga = {}
f(ga, {
	_internal: () => dF,
	body: () => iF,
	collection: () => lF,
	data: () => cF,
	id: () => oF,
	slug: () => aF
})
var oF,
	lF,
	aF,
	iF,
	cF,
	dF,
	Fa = m(() => {
		'use strict'
		;(oF = 'create-astro-component.mdx'),
			(lF = 'blog'),
			(aF = 'create-astro-component'),
			(iF = `
**If you know HTML, you already know enough to write your first Astro component.**

Astro component syntax is a superset of HTML. The syntax was [designed to feel familiar to anyone with experience writing HTML or JSX](#differences-between-astro-and-jsx), and adds support for including components and JavaScript expressions.

## JSX-like Expressions

You can define local JavaScript variables inside of the frontmatter component script between the two code fences (\`---\`) of an Astro component. You can then inject these variables into the component's HTML template using JSX-like expressions!

\\:::note\\[dynamic vs reactive]\r
Using this approach, you can include **dynamic** values that are calculated in the frontmatter. But once included, these values are not **reactive** and will never change. Astro components are templates that only run once, during the rendering step.

See below for more examples of [differences between Astro and JSX](#differences-between-astro-and-jsx).\r
\\:::

### Variables

Local variables can be added into the HTML using the curly braces syntax:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<div>\r
	<h1>Hello {name}!</h1>\r
	<!-- Outputs <h1>Hello Astro!</h1> -->\r
</div>
\`\`\`

### Dynamic Attributes

Local variables can be used in curly braces to pass attribute values to both HTML elements and components:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<h1 class={name}>Attribute expressions are supported</h1>\r
\r
<MyComponent templateLiteralNameAttribute={\`MyNameIs\${name}\`} />
\`\`\`

\\:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can't assign an event handler to an HTML element in an Astro component:

\`\`\`astro
---\r
// dont-do-this.astro\r
function handleClick() {\r
	console.log('button clicked!')\r
}\r
---\r
\r
<!-- \u274C This doesn't work! \u274C -->\r
<button onClick={handleClick}>Nothing will happen when you click me!</button>
\`\`\`

Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:

\`\`\`astro
---\r
// do-this-instead.astro\r
---\r
\r
<button id='button'>Click Me</button>\r
<script>\r
	function handleClick() {\r
		console.log('button clicked!')\r
	}\r
	document.getElementById('button').addEventListener('click', handleClick)\r
<\/script>
\`\`\`
`),
			(cF = {
				title: 'Tutorial: Create an Astro Component',
				description: 'Learn how to create your first Astro component.',
				pubDate: new Date(16567344e5),
				heroImage: new Proxy(
					{ src: '/_astro/placeholder-hero.GamGidh7.jpg', width: 720, height: 360, format: 'jpg' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'Misc Ramblings',
				tags: ['JavaScript', 'css', 'HTML5', 'GitHub'],
				draft: !0
			}),
			(dF = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/create-astro-component.mdx',
				rawData: void 0
			})
	})
var ba = {}
f(ba, {
	_internal: () => DF,
	body: () => mF,
	collection: () => hF,
	data: () => yF,
	id: () => pF,
	slug: () => uF
})
var pF,
	hF,
	uF,
	mF,
	yF,
	DF,
	wa = m(() => {
		'use strict'
		;(pF = 'macOS-Login-Window-WiFi-Profile.mdx'),
			(hF = 'blog'),
			(uF = 'macos-login-window-wifi-profile'),
			(mF = `
Recently I was tasked with writing a profile to allow users to log in without needing a wired connection. The only posts I could find for doing this involve using the now inaccessible iPhone configurator, or reference snippets and images that are inaccessible.

We solved this problem at my last job, and after an afternoon of beating my head against the wall trying to recreate it, I admitted defeat and reached out and asked for a sanitized copy of their profile, which I received the next morning. There are a few "gotchas" in the profile I've noted with the \`#\` character.

1. You need to have a Base64 copy of the SSL certificate for your RADIUS server. The certificate won't even install without it.
2. You need to have a friendly display name here, it will appear on the login screen in a drop down.
3. The SSID of the network you wish them to connect to.

Those three changes should give you everything you be all you need to change to get it working, but you should probably provide reasonable identifiers and descriptions. You should make sure the WiFi is switched on, and that you install this as a system profile using Munki (or an MDM) or by using \`sudo profiles -IF ./com.org.loginWindowWirelessProfile.mobileconfig\`

\`\`\`xml
<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\r
<!DOCTYPE plist PUBLIC "- Apple DTD PLIST 1.0 EN" \r
"http://www.apple.com/DTDs/PropertyList-1.0.dtd\\">\r
<plist version=\\"1.0\\">\r
<dict>\r
    <key>PayloadContent</key>\r
    <array>\r
        <dict>\r
            <key>PayloadContent</key>\r
            <data>\r
                # The Base64 Encoded SSL Certificate for your radius server goes here. This is required.\r
            </data>\r
            <key>PayloadEnabled</key>\r
            <true/>\r
            <key>PayloadIdentifier</key>\r
            <string>com.org.radiuscert</string>\r
            <key>PayloadType</key>\r
            <string>com.apple.security.root</string>\r
            <key>PayloadUUID</key>\r
            <string>368DD7D6-DB79-4339-96F8-AA37A5277EE9</string>\r
            <key>PayloadVersion</key>\r
            <integer>1</integer>\r
            <key>updated_at_xid</key>\r
            <integer>270993</integer>\r
        </dict>\r
        <dict>\r
            <key>AuthenticationMethod</key>\r
            <string>directory</string>\r
            <key>AutoJoin</key>\r
            <true/>\r
            <key>EAPClientConfiguration</key>\r
            <dict>\r
                <key>AcceptEAPTypes</key>\r
                <array>\r
                    <integer>25</integer>\r
                </array>\r
                <key>OneTimeUserPassword</key>\r
                <false/>\r
                <key>PayloadCertificateAnchorUUID</key>\r
                <array>\r
                    <string>F8D886A8-7A0F-4062-88B2-BFB189047C66</string>\r
                </array>\r
                <key>SystemModeCredentialsSource</key>\r
                <string>ActiveDirectory</string>\r
                <key>UserName</key>\r
                <string></string>\r
                <key>UserPassword</key>\r
                <string></string>\r
            </dict>\r
            <key>EncryptionType</key>\r
            <string>WPA2</string>\r
            <key>HIDDEN_NETWORK</key>\r
            <false/>\r
            <key>Interface</key>\r
            <string>BuiltInWireless</string>\r
            <key>PayloadDisplayName</key>\r
            <string>#This displays on the login window</string>\r
            <key>PayloadEnabled</key>\r
            <true/>\r
            <key>PayloadIdentifier</key>\r
            <string>com.org.loginWindowWirelessConfig</string>\r
            <key>PayloadType</key>\r
            <string>com.apple.wifi.managed</string>\r
            <key>PayloadUUID</key>\r
            <string>39762509-B0BE-4152-AE94-C143DAB56DA6</string>\r
            <key>PayloadVersion</key>\r
            <integer>1</integer>\r
            <key>ProxyType</key>\r
            <string>None</string>\r
            <key>SSID_STR</key>\r
            <string>#yourSSIDHere</string>\r
            <key>SetupModes</key>\r
            <array>\r
                <string>Loginwindow</string>\r
            </array>\r
        </dict>\r
    </array>\r
    <key>PayloadDisplayName</key>\r
    <string>WiFi Settings</string>\r
    <key>PayloadIdentifier</key>\r
    <string>com.org.loginWindowWirelessProfile</string>\r
    <key>PayloadOrganization</key>\r
    <string>#Your org name here</string>\r
    <key>PayloadRemovalDisallowed</key>\r
    <true/>\r
    <key>PayloadScope</key>\r
    <string>LoginWindow</string>\r
    <key>PayloadType</key>\r
    <string>Configuration</string>\r
    <key>PayloadUUID</key>\r
    <string>2F8A16E8-513A-493B-AD61-0CB8A0B2DE23</string>\r
    <key>PayloadVersion</key>\r
    <integer>1</integer>\r
</dict>\r
</plist>\r
\r

\`\`\`

#### Update 1/23/2018:

As a note to myself: If I forget what a base64 encoded certificate is again and it's an emergency again, this profile specifically wants the bits in a PEM certificate that are between \`-----BEGIN CERTIFICATE-----\` and \`-----END CERTIFICATE-----\`

#### Update 1/3/2024:

I'm not sure Munki does profile installation anymore. macOS fell off my radar and was looking at this post while moving to Astro
`),
			(yF = {
				title: 'macOS Login Window WiFi Profile',
				description: 'macOS Login Window WiFi Profile',
				pubDate: new Date(15017328e5),
				heroImage: new Proxy(
					{ src: '/_astro/Untitled.vTFCdCCP.png', width: 2560, height: 1707, format: 'png' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'macOS',
				tags: ['certificates', '802.1x'],
				draft: !1
			}),
			(DF = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx',
				rawData: void 0
			})
	})
var va = {}
f(va, {
	_internal: () => vF,
	body: () => bF,
	collection: () => gF,
	data: () => wF,
	id: () => fF,
	slug: () => FF
})
var fF,
	gF,
	FF,
	bF,
	wF,
	vF,
	Ea = m(() => {
		'use strict'
		;(fF = 'macbook.mdx'),
			(gF = 'blog'),
			(FF = 'macbook'),
			(bF = `
**If you know HTML, you already know enough to write your first Astro component.**

Astro component syntax is a superset of HTML. The syntax was [designed to feel familiar to anyone with experience writing HTML or JSX](#differences-between-astro-and-jsx), and adds support for including components and JavaScript expressions.

## JSX-like Expressions

You can define local JavaScript variables inside of the frontmatter component script between the two code fences (\`---\`) of an Astro component. You can then inject these variables into the component's HTML template using JSX-like expressions!

\\:::note\\[dynamic vs reactive]\r
Using this approach, you can include **dynamic** values that are calculated in the frontmatter. But once included, these values are not **reactive** and will never change. Astro components are templates that only run once, during the rendering step.

See below for more examples of [differences between Astro and JSX](#differences-between-astro-and-jsx).\r
\\:::

### Variables

Local variables can be added into the HTML using the curly braces syntax:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<div>\r
	<h1>Hello {name}!</h1>\r
	<!-- Outputs <h1>Hello Astro!</h1> -->\r
</div>
\`\`\`

### Dynamic Attributes

Local variables can be used in curly braces to pass attribute values to both HTML elements and components:

\`\`\`astro
---\r
const name = 'Astro'\r
---\r
\r
<h1 class={name}>Attribute expressions are supported</h1>\r
\r
<MyComponent templateLiteralNameAttribute={\`MyNameIs\${name}\`} />
\`\`\`

\\:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can't assign an event handler to an HTML element in an Astro component:

\`\`\`astro
---\r
// dont-do-this.astro\r
function handleClick() {\r
	console.log('button clicked!')\r
}\r
---\r
\r
<!-- \u274C This doesn't work! \u274C -->\r
<button onClick={handleClick}>Nothing will happen when you click me!</button>
\`\`\`

Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:

\`\`\`astro
---\r
// do-this-instead.astro\r
---\r
\r
<button id='button'>Click Me</button>\r
<script>\r
	function handleClick() {\r
		console.log('button clicked!')\r
	}\r
	document.getElementById('button').addEventListener('click', handleClick)\r
<\/script>
\`\`\`

\\:::

### Dynamic HTML

Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:

\`\`\`astro
---\r
const items = ['Dog', 'Cat', 'Platypus']\r
---\r
\r
<ul>\r
	{items.map((item) => <li>{item}</li>)}\r
</ul>
\`\`\`

Astro can conditionally display HTML using JSX logical operators and ternary expressions.

\`\`\`astro
---\r
const visible = true\r
---\r
\r
{visible && <p>Show me!</p>}\r
\r
{visible ? <p>Show me!</p> : <p>Else show me!</p>}
\`\`\`

### Dynamic Tags

You can also use dynamic tags by setting a variable to an HTML tag name or a component import:

\`\`\`astro
---\r
import MyComponent from './MyComponent.astro'\r
const Element = 'div'\r
const Component = MyComponent\r
---\r
\r
<Element>Hello!</Element>\r
<!-- renders as <div>Hello!</div> -->\r
<Component />\r
<!-- renders as <MyComponent /> -->
\`\`\`

When using dynamic tags:

* **Variable names must be capitalized.** For example, use \`Element\`, not \`element\`. Otherwise, Astro will try to render your variable name as a literal HTML tag.
* **Hydration directives are not supported.** When using [\`client:*\` hydration directives](/en/core-concepts/framework-components/#hydrating-interactive-components), Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.

### Fragments

Astro supports using either \`<Fragment> </Fragment>\` or the shorthand \`<> </>\`.

Fragments can be useful to avoid wrapper elements when adding [\`set:*\` directives](/en/reference/directives-reference/#sethtml), as in the following example:

\`\`\`astro
---\r
const htmlString = '<p>Raw HTML content</p>'\r
---\r
\r
<Fragment set:html={htmlString} />
\`\`\`

### Differences between Astro and JSX

Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between \`.astro\` files and JSX.

#### Attributes

In Astro, you use the standard \`kebab-case\` format for all HTML attributes instead of the \`camelCase\` used in JSX. This even works for \`class\`, which is not supported by React.

\`\`\`jsx
<div className="box" dataValue="3" />\r
<div class="box" data-value="3" />
\`\`\`

#### Multiple Elements

An Astro component template can render multiple elements with no need to wrap everything in a single \`<div>\` or \`<>\`, unlike JavaScript or JSX.

\`\`\`astro
---\r
// Template with multiple elements\r
---\r
\r
<p>No need to wrap elements in a single containing element.</p>\r
<p>Astro supports multiple root elements in a template.</p>
\`\`\`

#### Comments

In Astro, you can use standard HTML comments or JavaScript-style comments.

\`\`\`astro
---\r
\r
---\r
\r
<!-- HTML comment syntax is valid in .astro files -->{/* JS comment syntax is also valid */}
\`\`\`

\\:::caution\r
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\r
\\:::
`),
			(wF = {
				title: 'MacBook',
				description:
					'The new MacBook Pro 2022 is here. With the Apple M2 chip, a new design, and more, the new MacBook Pro is the best laptop Apple has ever made.',
				pubDate: new Date(16567344e5),
				heroImage: new Proxy(
					{ src: '/_astro/book.9iQvwl4M.jpg', width: 7952, height: 5304, format: 'jpg' },
					{
						get(n, e, r) {
							return e === 'clone' ? structuredClone(n) : n[e]
						}
					}
				),
				category: 'macOS',
				tags: ['PC'],
				draft: !0
			}),
			(vF = {
				type: 'content',
				filePath:
					'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macbook.mdx',
				rawData: void 0
			})
	})
var ka = {}
f(ka, {
	Content: () => Pn,
	__usesAstroImage: () => EF,
	default: () => Pn,
	file: () => xF,
	frontmatter: () => xa,
	getHeadings: () => Sa,
	url: () => CF
})
function Sa() {
	return []
}
function Ca(n) {
	let e = { a: 'a', blockquote: 'blockquote', p: 'p', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children: [
					`There\u2019s a dependency tree in the MS documentation that\u2019s slightly buried in the\r
MS Documentation. The page `,
					t(e.a, {
						href: 'https://docs.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-hybrid-cloud-trust',
						children: 'Hybrid Cloud Trust Deployment'
					}),
					`\r
has a pre-req that links back to the setup directions to Enable passwordless\r
security key `,
					t(e.a, {
						href: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-authentication-passwordless-security-key-on-premises#install-the-azure-ad-kerberos-powershell-module',
						children: 'sign-in to on-premises resources by using Azure AD'
					}),
					'. That page in turn has a link over to the FAQs for FIDO2. ',
					t(e.a, {
						href: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-authentication-passwordless-faqs#fido2-security-key-sign-in-isnt-working-for-my-domain-admin-or-other-high-privilege-accounts-why',
						children: `Deployment frequently\r
asked questions (FAQs) for hybrid FIDO2 security keys in Azure AD`
					})
				]
			}),
			`
`,
			t(e.p, { children: 'At the bottom of that FAQ is a question with an easy answer:' }),
			`
`,
			t(e.blockquote, {
				children: [
					`
`,
					t(e.p, {
						children: `FIDO2 security key sign-in isn\u2019t working for my Domain Admin or other high\r
privilege accounts. Why?\r
The default security policy doesn\u2019t grant Azure AD permission to sign high\r
privilege accounts on to on-premises resources.`
					}),
					`
`
				]
			}),
			`
`,
			t(e.p, {
				children: `What does a random FIDO2 FAQ have to do with a Kerberos trust? Well as it turns\r
out, that answer also applicable to Hybrid Cloud trust because it\u2019s an RODC\r
limitation, and both the question and answer are painfully far away from the\r
Hybrid Cloud Trust page.`
			}),
			`
`,
			t(e.p, {
				children: `TL;DR:\r
Don\u2019t expect HCT to work on an account in Domain Admins, Enterprise Admins, or\r
Schema Admins.`
			})
		]
	})
}
function Aa(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Ca, { ...n }) }) : Ca(n)
}
var xa,
	EF,
	CF,
	xF,
	Pn,
	Ba = m(() => {
		'use strict'
		W()
		J()
		V()
		xa = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'EntraID',
			description: 'A slightly hidden limitation of Hybrid Cloud Trust',
			pubDate: '2022-07-27T04:00:00.000Z',
			tags: ['hybrid trust'],
			title: 'A slightly hidden limitation of Hybrid Cloud Trust'
		}
		EF = !0
		b(Sa, 'astro:jsx')
		b(Aa, 'astro:jsx')
		;(CF = 'src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx'),
			(xF =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx'),
			(Pn = (n = {}) =>
				Aa({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Pn[Symbol.for('mdx-component')] = !0
		Pn[Symbol.for('astro.needsHeadRendering')] = !xa.layout
		Pn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx'
	})
var _a = {}
f(_a, { default: () => _F })
async function SF() {
	return Promise.resolve().then(() => (Ba(), ka))
}
var AF,
	kF,
	BF,
	_F,
	Ta = m(() => {
		'use strict'
		;(AF = []),
			(kF = []),
			(BF = []),
			(_F = {
				__astroPropagation: !0,
				getMod: SF,
				collectedLinks: AF,
				collectedStyles: kF,
				collectedScripts: BF
			})
	})
var La = {}
f(La, {
	Content: () => Mn,
	__usesAstroImage: () => TF,
	default: () => Mn,
	file: () => MF,
	frontmatter: () => Ma,
	getHeadings: () => Ia,
	url: () => PF
})
function Ia() {
	return []
}
function Pa(n) {
	let e = { code: 'code', p: 'p', pre: 'pre', span: 'span', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children:
					'Recently  I tried pulling code climate into GitLab CE\u2019s CI. This became slightly problematic since docker-in-docker wasn\u2019t working properly. I installed it according to the site directions, but the config didn\u2019t work. After about a day of tinkering, configuring it this way appears to work pretty well.'
			}),
			`
`,
			t(e.p, { children: t(e.code, { children: '.gitlab-vi.yml' }) }),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, { class: 'line', children: t(e.span, { children: 'codeclimate:' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '  image: docker:latest' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  variables:' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    DOCKER_DRIVER: overlay' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  services:' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '    - docker:dind' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  script:' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    - docker pull codeclimate/codeclimate' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children: `    - VOLUME_PATH=/tmp/builds"$(echo $PWD | sed 's|^/[^/]*||')"`
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'    - docker run -v /tmp/cc:/tmp/cc -v $VOLUME_PATH:/code -v /var/run/docker.sock:/var/run/docker.sock codeclimate/codeclimate validate-config'
							})
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '    - ls -lash $PWD' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '    - echo $PWD' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'    - docker run --env CODECLIMATE_CODE="$VOLUME_PATH" -v /tmp/cc:/tmp/cc -v $VOLUME_PATH:/code -v /var/run/docker.sock:/var/run/docker.sock codeclimate/codeclimate analyze'
							})
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  artifacts:' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    paths: [codeclimate.json]%' })
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: t(e.code, { children: '/etc/gitlab-runner/config.toml' }) }),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, { class: 'line', children: t(e.span, { children: 'concurrent = 1' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'check_interval = 0' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, {}) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '[[runners]]' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '  name = "gitlabrunner-01"' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '  url = "https://gitlab.gqdn/"' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  token = "token"' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '  executor = "docker"' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  [runners.docker]' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    tls_verify = false' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    image = "docker:latest"' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    privileged = true' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    disable_cache = false' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    volumes = ["/cache"]' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '    shm_size = 0' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  [runners.cache]' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, {}) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '[[runners]]' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '  name = "Ubuntu 16.04 Runner 01"' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '  url = "https://gitlab.fqdn/"' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  token = "token"' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '  executor = "docker"' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  [runners.docker]' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    tls_verify = false' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    image = "docker:latest"' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    privileged = true' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    disable_cache = false' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    cache_dir = "cache"' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'    volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock", "/tmp/builds:/builds"]'
							})
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '    shm_size = 0' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: '  [runners.cache]' }) })
					]
				})
			})
		]
	})
}
function ja(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Pa, { ...n }) }) : Pa(n)
}
var Ma,
	TF,
	PF,
	MF,
	Mn,
	$a = m(() => {
		'use strict'
		W()
		J()
		V()
		Ma = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'CI-CD',
			description: 'CodeClimate in GitLab CI',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['gitlab'],
			title: 'CodeClimate in GitLab CI'
		}
		TF = !0
		b(Ia, 'astro:jsx')
		b(ja, 'astro:jsx')
		;(PF = 'src/content/blog/CodeClimate-in-GitLab-CI.mdx'),
			(MF =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/CodeClimate-in-GitLab-CI.mdx'),
			(Mn = (n = {}) =>
				ja({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Mn[Symbol.for('mdx-component')] = !0
		Mn[Symbol.for('astro.needsHeadRendering')] = !Ma.layout
		Mn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/CodeClimate-in-GitLab-CI.mdx'
	})
var Oa = {}
f(Oa, { default: () => OF })
async function IF() {
	return Promise.resolve().then(() => ($a(), La))
}
var jF,
	LF,
	$F,
	OF,
	Ra = m(() => {
		'use strict'
		;(jF = []),
			(LF = []),
			($F = []),
			(OF = {
				__astroPropagation: !0,
				getMod: IF,
				collectedLinks: jF,
				collectedStyles: LF,
				collectedScripts: $F
			})
	})
var Wa = {}
f(Wa, {
	Content: () => In,
	__usesAstroImage: () => RF,
	default: () => In,
	file: () => NF,
	frontmatter: () => Na,
	getHeadings: () => Ha,
	url: () => UF
})
function Ha() {
	return [
		{ depth: 1, slug: 'the-story', text: 'The Story' },
		{ depth: 1, slug: 'the-steps', text: 'The steps' },
		{ depth: 2, slug: 'compiling', text: 'Compiling' },
		{ depth: 2, slug: 'server', text: 'Server' },
		{ depth: 2, slug: 'client', text: 'Client' },
		{ depth: 1, slug: 'conclusion', text: 'Conclusion' }
	]
}
function Ua(n) {
	let e = {
		a: 'a',
		code: 'code',
		h1: 'h1',
		h2: 'h2',
		li: 'li',
		ol: 'ol',
		p: 'p',
		pre: 'pre',
		span: 'span',
		ul: 'ul',
		...n.components
	}
	return t(F, {
		children: [
			t(e.h1, { id: 'the-story', children: 'The Story' }),
			`
`,
			t(e.p, {
				children: [
					'Recently I was tasked with using migrating a ',
					t(e.a, { href: 'https://github.com/munki/munki', children: 'Munki' }),
					' repository to use SSL and to be accessible external to an organization. Since at it\u2019s simplest, Munki is just some folders accessible over http, and most supporting services for it are LAMP or LNMP stacks, this is pretty simple. The harder part is running client verifications. You can use a pre-shared key, though scripting that implies every machine use the same key, or has something on the server communicating with the client to provide a unique htpasswd entry for each machine. You could choose to not verify your clients as well. The final option is to secure it using SSL client certificates. That is the option I chose.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					`There are two common methods I know of for getting Client certificates to endpoints. They are sneakernet and Simple Client Enrollment Protocol, or SCEP. Sneakernet doesn\u2019t scale well beyond a handful of machines, so SCEP it is.\r
The first step with SCEP was to identify which SCEP service to use. Active Directory Certificate Services would be my first choice, given my environment has a very large AD deployment. Unfortunately that doesn\u2019t appear to be offered. After looking I came to three solutions. Dogtag, originally an AOL project that has since been rolled into FreeIPA, OpenXPKI, an old project without packaging for my distribution of Linux, and the SCEP component of the MicroMDM project. Even though I needed to compile it, I went with the SCEP component of the MicroMDM project because it was the simplest of the solutions, with the least overhead and extra features I didn\u2019t need. @groob will be adding a CI component to the `,
					t(e.a, { href: 'https://github.com/micromdm/scep', children: 'micromdm/scep' }),
					' project soon, so the manual compilation can be replaced with a docker container in the future.'
				]
			}),
			`
`,
			t(e.p, {
				children:
					'Since that docker container doesn\u2019t work yet, the first thing when configuring SCEP was to figure out how to compile it, then configure it, then secure it.'
			}),
			`
`,
			t(e.h1, { id: 'the-steps', children: 'The steps' }),
			`
`,
			t(e.h2, { id: 'compiling', children: 'Compiling' }),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'Create the $GOPATH variable in your shell for go to use.' }),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, { children: t(e.code, { children: 'export GOPATH=~/Projects/GoProjects' }) }),
					`
`
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'Install the Go compiler.' }),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, { children: t(e.code, { children: 'apt install golang' }) }),
					`
`,
					t(e.li, { children: t(e.code, { children: 'brew install go' }) }),
					`
`,
					t(e.li, { children: t(e.code, { children: 'yum install golang' }) }),
					`
`
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, {
						children: [
							'Install ',
							t(e.a, { href: 'https://github.com/Masterminds/glide', children: 'Glide' }),
							' for dependency resolution. Glide is the Go equivalent to pip, cpan, or npm.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							'curl ',
							t(e.a, { href: 'https://glide.sh/get', children: 'https://glide.sh/get' }),
							' | sh'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'Install the dependancies' }),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: t(e.code, { children: 'cd $GOPATH/src/github.com/micromdm/scep/' })
					}),
					`
`,
					t(e.li, { children: t(e.code, { children: 'glide install' }) }),
					`
`
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, {
						children:
							'Compile the client or server binary. Note that you will have to compile the client and server separately on each OS you plan to run it on'
					}),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							'cd ',
							t(e.code, { children: '$GOPATH/src/github.com/micromdm/scep/cmd/scepserver' })
						]
					}),
					`
`,
					t(e.li, { children: t(e.code, { children: 'go build' }) }),
					`
`
				]
			}),
			`
`,
			t(e.h2, { id: 'server', children: 'Server' }),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'Place the binary in a useful location' }),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, { children: t(e.code, { children: 'cp scepserver /usr/sbin' }) }),
					`
`
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, {
						children: 'Create the depot for the server to store the certificate information in'
					}),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, { children: t(e.code, { children: 'mkdir -p /var/lib/scep/depot' }) }),
					`
`,
					t(e.li, {
						children: t(e.code, { children: 'cd /var/lib/scep/depot; scepserver -ca init' })
					}),
					`
`,
					t(e.li, {
						children: [
							'This should be run with some more flags as provided by the ',
							t(e.a, { href: 'https://github.com/micromdm/scep', children: 'micromdm/scep' }),
							' documentation.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, {
						children: [
							'I\u2019m running the server on Ubuntu 16.04, so I have systemd available. I wrote a systemd file similar to this one for so systemd could start and stop the service automatically. This should be modified to include a ',
							t(e.code, { children: '-challenge' }),
							' to suit your environment.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#BABED8' }, children: '    [Unit]' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#F07178' }, children: '    Description' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Micromdm SCEP Server' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#F07178' }, children: '    After' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'syslog.target network.target' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#BABED8' }, children: '    [Service]' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#F07178' }, children: '    Type' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'simple' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#F07178' }, children: '    ExecStart' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '/usr/sbin/scepserver -depot /var/lib/scep/depot'
								})
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#F07178' }, children: '    Restart' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'always' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#BABED8' }, children: '    [Install]' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#F07178' }, children: '    WantedBy' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'multi-user.target' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: [
					'That should get the server running on port 8080 at ',
					t(e.code, { children: 'https://localhost:8080/scep' }),
					`. I use a proxy rule in apache to accept requests over https made to /scep and pass them to the scep server.\r
`,
					t(e.code, { children: 'ProxyPass /scep http://localhost:8080/scep' })
				]
			}),
			`
`,
			t(e.p, {
				children: 'I also have a block into the config that adds support to apache for this'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: 'SSLCACertificateFile' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '    /var/lib/scep/depot/ca.pem'
								})
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Directory ' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '/var/www/munki_repo' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    Options' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' -Indexes' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '    # Make Client auth optional while internal'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    SSLVerifyClient' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' optional' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    Require' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' ip ' }),
								t(e.span, { style: { color: '#F78C6C' }, children: '172' }),
								t(e.span, { style: { color: '#BABED8' }, children: '.' }),
								t(e.span, { style: { color: '#F78C6C' }, children: '16' }),
								t(e.span, { style: { color: '#BABED8' }, children: '.' }),
								t(e.span, { style: { color: '#F78C6C' }, children: '0' }),
								t(e.span, { style: { color: '#BABED8' }, children: '.' }),
								t(e.span, { style: { color: '#F78C6C' }, children: '0' }),
								t(e.span, { style: { color: '#BABED8' }, children: '/' }),
								t(e.span, { style: { color: '#F78C6C' }, children: '12' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    Satisfy' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' any' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Directory' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: 'Next is the client.' }),
			`
`,
			t(e.h2, { id: 'client', children: 'Client' }),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'Compile the client' }),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: t(e.code, { children: '$GOPATH/src/github.com/micromdm/scep/cmd/scepclient' })
					}),
					`
`,
					t(e.li, { children: t(e.code, { children: 'go build' }) }),
					`
`
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'Place the binary in a useful location' }),
					`
`
				]
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, { children: t(e.code, { children: 'cp scepclient /usr/local/sbin' }) }),
					`
`
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, {
						children: [
							'Write a script that makes a SCEP request using your freshly compiled client. I package the script, the public CA, and the client up and install them at image time, placing the script in the munki preflight.d directory installed by munkireport-php, the client in ',
							t(e.code, { children: '/usr/local/sbin/' }),
							', and the cert in ',
							t(e.code, { children: '/Library Managed Installs/certs' })
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '#!/usr/bin/env bash'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: 'HOSTNAME' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '`' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'scutil' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' --get ComputerName' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '`' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '.company.fqdn' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: 'SCEP_URL' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, {
									style: { color: '#C3E88D' },
									children: 'http://scepserver.company.fqdn/scep'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: ' # Your scep server here'
								})
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: 'ORGANIZATION' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Your Org Here' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: ' # This should match what you created the CA certificate with'
								})
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: 'MUNKI_CERT_DIR' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, {
									style: { color: '#C3E88D' },
									children: '/Library/Managed Installs/certs'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: 'CERT_STATUS' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#F78C6C' }, children: '255' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: 'do_scep_request' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '    echo' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, {
									style: { color: '#C3E88D' },
									children: 'Generating Client SSL Certificate'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, {
									style: { color: '#FFCB6B' },
									children: '    /usr/local/sbin/scepclient'
								}),
								t(e.span, { style: { color: '#C3E88D' }, children: ' -private-key' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' ./client.key' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' -server-url' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' $SCEP_URL ' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '-organization' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' $ORGANIZATION ' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '-cn' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' $HOSTNAME' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '    echo' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Modifying certifcate' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#FFCB6B' }, children: '    cat' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' ./client.key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' >>' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' ./client.pem' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '    echo' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, {
									style: { color: '#C3E88D' },
									children: 'Installing Certificate to munki folder'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#FFCB6B' }, children: '    cp' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' ./client.key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#BABED8' }, children: '$MUNKI_CERT_DIR' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#FFCB6B' }, children: '    cp' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' ./client.pem' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#BABED8' }, children: '$MUNKI_CERT_DIR' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '    echo' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Importing SCEP CA' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#FFCB6B' }, children: '    sudo' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' security' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' add-trusted-cert' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' -d' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' -r' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' trustRoot' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' -k' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, {
									style: { color: '#C3E88D' },
									children: '/Library/Keychains/System.keychain'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#BABED8' }, children: '$MUNKI_CERT_DIR' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '/ca.pem' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '    echo' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Done' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '    exit' }),
								t(e.span, { style: { color: '#F78C6C' }, children: ' 0' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '}' })
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'if' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' [' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' !' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' -f' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#BABED8' }, children: '$MUNKI_CERT_DIR' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#BABED8' }, children: '/client.pem ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '];' }),
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: ' then' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '    echo' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#C3E88D' }, children: "File doesn't exist" }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#FFCB6B' }, children: '    do_scep_request' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#89DDFF', fontStyle: 'italic' },
								children: 'else'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#FFCB6B' }, children: '    openssl' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' x509' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' -noout' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' -checkend' }),
								t(e.span, { style: { color: '#F78C6C' }, children: ' 1209600' }),
								t(e.span, { style: { color: '#C3E88D' }, children: ' -in' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#BABED8' }, children: '$MUNKI_CERT_DIR' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '/client.pem' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '    STATUS' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: '$?' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: '    if' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' [' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' $STATUS ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '-ne' }),
								t(e.span, { style: { color: '#F78C6C' }, children: ' 0' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' ];' }),
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: ' then' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '        echo' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' $STATUS' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#82AAFF' }, children: '        echo' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' "' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'file exists and is expiring' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#FFCB6B' },
								children: '        do_scep_request'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#89DDFF', fontStyle: 'italic' },
								children: '    fi'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#89DDFF', fontStyle: 'italic' },
								children: 'fi'
							})
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'The client script outlined here will check for a new client certificate every time munki runs, and will attempt to receive a new one if it is two weeks or less from the current expiration.'
			}),
			`
`,
			t(e.h1, { id: 'conclusion', children: 'Conclusion' }),
			`
`,
			t(e.p, {
				children: [
					'This was my first attempt at setting up SSL client auth, for anything. It took about a week of research, trial, and error to figure out. Without the help of ',
					t(e.code, { children: '@groob' }),
					' & the Mac Admins Slack I never would have gotten the project working.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'Did I miss something? Reach out by emailing ',
					t(e.code, { children: 'ryan@buzzell.io' }),
					' or ',
					t(e.code, { children: '@rbuzzell' }),
					' on the Mac Admins Slack and I\u2019ll put in a correction.\u201D'
				]
			})
		]
	})
}
function za(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Ua, { ...n }) }) : Ua(n)
}
var Na,
	RF,
	UF,
	NF,
	In,
	Ga = m(() => {
		'use strict'
		W()
		J()
		V()
		Na = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'macOS',
			description: "Creating a SCEP service for Munki using MicroMDM's SCEP Project",
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['certificate client auth', 'certificates', 'certificate authority'],
			title: "Creating a SCEP service for Munki using MicroMDM's SCEP Project"
		}
		RF = !0
		b(Ha, 'astro:jsx')
		b(za, 'astro:jsx')
		;(UF = 'src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx'),
			(NF =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx'),
			(In = (n = {}) =>
				za({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		In[Symbol.for('mdx-component')] = !0
		In[Symbol.for('astro.needsHeadRendering')] = !Na.layout
		In.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx'
	})
var Va = {}
f(Va, { default: () => VF })
async function HF() {
	return Promise.resolve().then(() => (Ga(), Wa))
}
var zF,
	WF,
	GF,
	VF,
	Xa = m(() => {
		'use strict'
		;(zF = []),
			(WF = []),
			(GF = []),
			(VF = {
				__astroPropagation: !0,
				getMod: HF,
				collectedLinks: zF,
				collectedStyles: WF,
				collectedScripts: GF
			})
	})
var Ka = {}
f(Ka, {
	Content: () => jn,
	__usesAstroImage: () => XF,
	default: () => jn,
	file: () => qF,
	frontmatter: () => qa,
	getHeadings: () => Za,
	url: () => JF
})
function Za() {
	return []
}
function Ja(n) {
	let e = {
		a: 'a',
		code: 'code',
		li: 'li',
		ol: 'ol',
		p: 'p',
		pre: 'pre',
		span: 'span',
		...n.components
	}
	return t(F, {
		children: [
			t(e.p, {
				children:
					'I at one point had a Cylance package and needed to figure out how to mass deploy it.'
			}),
			`
`,
			t(e.p, { children: 'The manual install directions it came with were' }),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'Download the package' }),
					`
`,
					t(e.li, { children: 'Open terminal and run' }),
					`
`
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, { class: 'line', children: t(e.span, { children: 'cd ~/Downloads/' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: 'cat > cyagent_install_token <<EOF' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: 'B39D7692-572F-41D4-BBC8-3D8F39E542DE' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'Other-Bit-Of-Info' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'EOF' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: 'sudo installer -pkg CylancePROTECT.pkg -target /' })
						})
					]
				})
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'Profit' }),
					`
`
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'This was an overly manual process for what needs to be a Munki based deployment. Upon using ',
					t(e.a, {
						href: 'http://www.mothersruin.com/software/SuspiciousPackage/',
						children: 'Suspicous Package'
					}),
					' to look at the postinstall script I noticed these blocks of code'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, { class: 'line', children: t(e.span, { children: '#!/bin/sh' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, {}) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: 'INSTALL_TOKEN_FILE="/tmp/YvUnIpzc2omyt1ln"' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: 'if ! [ -e "$INSTALL_TOKEN_FILE" ]' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'then' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'	INSTALL_TOKEN_FILE="$(/usr/bin/dirname "$PACKAGE_PATH")/cyagent_install_token"'
							})
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'fi' }) })
					]
				})
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: 'if [ -e "/tmp/YvUnIpzc2omyt1ln" ]' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'then' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '   /bin/rm /tmp/YvUnIpzc2omyt1ln' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'fi' }) })
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Ah-ha! It has a hardcoded location where it expects that file to exist. All we have to do is write a preinstall script in Munki that makes that file exist.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, { class: 'line', children: t(e.span, { children: '#!/bin/sh' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, {}) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: 'cat > /tmp/YvUnIpzc2omyt1ln << EOF' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: 'B39D7692-572F-41D4-BBC8-3D8F39E542DE' })
						}),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'Other-Bit-Of-Info' }) }),
						`
`,
						t(e.span, { class: 'line', children: t(e.span, { children: 'EOF' }) })
					]
				})
			}),
			`
`,
			t(e.p, {
				children: 'After testing it appers this was all it took to get it to deploy with Munki.'
			})
		]
	})
}
function Ya(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Ja, { ...n }) }) : Ja(n)
}
var qa,
	XF,
	JF,
	qF,
	jn,
	Qa = m(() => {
		'use strict'
		W()
		J()
		V()
		qa = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'macOS',
			description: 'Cylance Deployment on macOS',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['cylance', 'security'],
			title: 'Cylance Deployment on macOS'
		}
		XF = !0
		b(Za, 'astro:jsx')
		b(Ya, 'astro:jsx')
		;(JF = 'src/content/blog/Cylance-Deployment-on-macOS.mdx'),
			(qF =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Cylance-Deployment-on-macOS.mdx'),
			(jn = (n = {}) =>
				Ya({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		jn[Symbol.for('mdx-component')] = !0
		jn[Symbol.for('astro.needsHeadRendering')] = !qa.layout
		jn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Cylance-Deployment-on-macOS.mdx'
	})
var ei = {}
f(ei, { default: () => e0 })
async function ZF() {
	return Promise.resolve().then(() => (Qa(), Ka))
}
var YF,
	KF,
	QF,
	e0,
	ti = m(() => {
		'use strict'
		;(YF = []),
			(KF = []),
			(QF = []),
			(e0 = {
				__astroPropagation: !0,
				getMod: ZF,
				collectedLinks: YF,
				collectedStyles: KF,
				collectedScripts: QF
			})
	})
var li = {}
f(li, {
	Content: () => Ln,
	__usesAstroImage: () => t0,
	default: () => Ln,
	file: () => r0,
	frontmatter: () => ri,
	getHeadings: () => si,
	url: () => n0
})
function si() {
	return []
}
function ni(n) {
	let e = { code: 'code', p: 'p', pre: 'pre', span: 'span', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children:
					'As a followup to my earlier brief post about Fedora 25 in syslinux pxe, this one adds Fedora 25 as a function in ipxe.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, { class: 'line', children: t(e.span, { children: '    :fedora25' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'    initrd http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/initrd.img'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'    chain http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/vmlinuz'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'    inst.stage2=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os ip=dhcp'
							})
						})
					]
				})
			})
		]
	})
}
function oi(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(ni, { ...n }) }) : ni(n)
}
var ri,
	t0,
	n0,
	r0,
	Ln,
	ai = m(() => {
		'use strict'
		W()
		J()
		V()
		ri = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Linux',
			description: 'Fedora 25 in iPXE ',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['pxe boot'],
			title: 'Fedora 25 in iPXE '
		}
		t0 = !0
		b(si, 'astro:jsx')
		b(oi, 'astro:jsx')
		;(n0 = 'src/content/blog/Fedora-25-in-iPXE-.mdx'),
			(r0 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-iPXE-.mdx'),
			(Ln = (n = {}) =>
				oi({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Ln[Symbol.for('mdx-component')] = !0
		Ln[Symbol.for('astro.needsHeadRendering')] = !ri.layout
		Ln.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-iPXE-.mdx'
	})
var ii = {}
f(ii, { default: () => i0 })
async function s0() {
	return Promise.resolve().then(() => (ai(), li))
}
var o0,
	l0,
	a0,
	i0,
	ci = m(() => {
		'use strict'
		;(o0 = []),
			(l0 = []),
			(a0 = []),
			(i0 = {
				__astroPropagation: !0,
				getMod: s0,
				collectedLinks: o0,
				collectedStyles: l0,
				collectedScripts: a0
			})
	})
var mi = {}
f(mi, {
	Content: () => $n,
	__usesAstroImage: () => c0,
	default: () => $n,
	file: () => p0,
	frontmatter: () => pi,
	getHeadings: () => hi,
	url: () => d0
})
function hi() {
	return []
}
function di(n) {
	let e = { code: 'code', p: 'p', pre: 'pre', span: 'span', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children:
					'Just a brief entry about what the pxelinux.cfg related to your newer fedora installs should look like. I make the assumption that everything should be pulled from an http(s) mirror server, and nothing should be on the local server, as that is how I tend to setup my pxeboot environments.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, { class: 'line', children: t(e.span, { children: 'LABEL fedora-linux' }) }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { children: '    MENU LABEL Install Fedora 25' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'    KERNEL http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/vmlinuz'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								children:
									'    APPEND initrd=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/initrd.img inst.stage2=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os ip=dhcp'
							})
						})
					]
				})
			})
		]
	})
}
function ui(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(di, { ...n }) }) : di(n)
}
var pi,
	c0,
	d0,
	p0,
	$n,
	yi = m(() => {
		'use strict'
		W()
		J()
		V()
		pi = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Linux',
			description: 'Fedora 25 in Syslinux PXE',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['pxe boot'],
			title: 'Fedora 25 in Syslinux PXE'
		}
		c0 = !0
		b(hi, 'astro:jsx')
		b(ui, 'astro:jsx')
		;(d0 = 'src/content/blog/Fedora-25-in-pxe.mdx'),
			(p0 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-pxe.mdx'),
			($n = (n = {}) =>
				ui({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		$n[Symbol.for('mdx-component')] = !0
		$n[Symbol.for('astro.needsHeadRendering')] = !pi.layout
		$n.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-pxe.mdx'
	})
var Di = {}
f(Di, { default: () => D0 })
async function h0() {
	return Promise.resolve().then(() => (yi(), mi))
}
var u0,
	m0,
	y0,
	D0,
	fi = m(() => {
		'use strict'
		;(u0 = []),
			(m0 = []),
			(y0 = []),
			(D0 = {
				__astroPropagation: !0,
				getMod: h0,
				collectedLinks: u0,
				collectedStyles: m0,
				collectedScripts: y0
			})
	})
var vi = {}
f(vi, {
	Content: () => On,
	__usesAstroImage: () => f0,
	default: () => On,
	file: () => F0,
	frontmatter: () => Fi,
	getHeadings: () => bi,
	url: () => g0
})
function bi() {
	return []
}
function gi(n) {
	let e = { li: 'li', ol: 'ol', p: 'p', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children: `Recently we\u2019ve started implementing Jamf Pro as an MDM. I\u2019m still far more\r
familiar with Munki and a thin imaging based workflow. We\u2019re still going to be\r
using Munki for the majority of our software management, but Jamf will be the\r
tool used for DEP and bootstrapping.`
			}),
			`
`,
			t(e.p, {
				children: `I\u2019ll open this be describing the intended workflow. We\u2019re an AD shop. As part of\r
deployment, we need to name the machine to something acceptable to AD and\r
unique. We then need to preform an AD bind. We also need the time server set and\r
Managed Software Center installed. After that Munki has historically\r
bootstrapped all the software and configuration needed. We do not provide our\r
users admin rights, and we require a local administrator account setup. We also\r
require FV2 enabled on all machines.`
			}),
			`
`,
			t(e.p, {
				children: `After quite a while of trying to get DEP set for our purchasing, we finally got\r
our first shipment of DEP enabled machines (also the first time we\u2019ve wanted to\r
move past 10.12, since UAMDM became very important after 10.12). The first\r
roadblock we encountered was that after rolling through setup assistant, we\r
would need to manually create the admin account to make sure it got a working\r
secure token. The second roadblock was that we would need to manually name the\r
machine and bind it to AD.`
			}),
			`
`,
			t(e.p, {
				children: `The decision was made to utilize SplashBuddy to gather the hostname information\r
and feed it back into Jamf to name the machine and bind to AD. The workflow for\r
doing this in Jamf evolved a few times. The final decision was to tag the steps\r
with custom event triggers, and have a script run on DEP enrolled devices at\r
enrollment. For policies and scripts, running these requires a \u201Cghost package\u201D\r
to run in front of and behind the policy/script to declare that it is being run\r
and it has completed. These ghost packages are just another pair of scripts.`
			}),
			`
`,
			t(e.p, { children: 'The final workflow works something like this:' }),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, { children: 'At enrollment deploy a script' }),
					`
`,
					t(e.li, {
						children: `That script spends almost it\u2019s entire life calling jamf policy -event\r
sb_step_name`
					}),
					`
`,
					t(e.li, { children: 'The first step is to install splash buddy' }),
					`
`,
					t(e.li, { children: 'The second step sets a time server once splashbuddy is installed' }),
					`
`,
					t(e.li, {
						children: `The third step is run a script to collect the information dropped off by the\r
splashbuddy form and insert it into a plist. It will sit here and wait in an\r
until loop for the information to arrive, holding up the parent script. It\r
will wait forever`
					}),
					`
`,
					t(e.li, {
						children: `The fourth step takes that hostname and sets on the machine, then binds to\r
AD`
					}),
					`
`,
					t(e.li, {
						children: `The final step just installs munki, demands a reboot, and tells munki to run\r
on reboot`
					}),
					`
`
				]
			}),
			`
`,
			t(e.p, {
				children: `Behind the scenes, JAMF has been installing all of the configuration profiles to\r
automate the other setup. We also have Jamf install all of our VPP apps after\r
Munki is installed, as it was previously trying to do that during the initial\r
provisioning workflow and that was problematic. In our environment, this has\r
resulted in a consistent and workable flow to get a machine configured for end\r
users.`
			})
		]
	})
}
function wi(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(gi, { ...n }) }) : gi(n)
}
var Fi,
	f0,
	g0,
	F0,
	On,
	Ei = m(() => {
		'use strict'
		W()
		J()
		V()
		Fi = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'macOS',
			description: 'Jamf DEP workflow',
			pubDate: '2019-04-22T04:00:00.000Z',
			tags: ['DEP'],
			title: 'Jamf DEP workflow'
		}
		f0 = !0
		b(bi, 'astro:jsx')
		b(wi, 'astro:jsx')
		;(g0 = 'src/content/blog/Jamf-DEP-workflow.mdx'),
			(F0 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Jamf-DEP-workflow.mdx'),
			(On = (n = {}) =>
				wi({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		On[Symbol.for('mdx-component')] = !0
		On[Symbol.for('astro.needsHeadRendering')] = !Fi.layout
		On.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Jamf-DEP-workflow.mdx'
	})
var Ci = {}
f(Ci, { default: () => C0 })
async function b0() {
	return Promise.resolve().then(() => (Ei(), vi))
}
var w0,
	v0,
	E0,
	C0,
	xi = m(() => {
		'use strict'
		;(w0 = []),
			(v0 = []),
			(E0 = []),
			(C0 = {
				__astroPropagation: !0,
				getMod: b0,
				collectedLinks: w0,
				collectedStyles: v0,
				collectedScripts: E0
			})
	})
var _i = {}
f(_i, {
	Content: () => Rn,
	__usesAstroImage: () => x0,
	default: () => Rn,
	file: () => A0,
	frontmatter: () => Ai,
	getHeadings: () => ki,
	url: () => S0
})
function ki() {
	return []
}
function Si(n) {
	let e = { em: 'em', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children:
					'I thought I might talk about that time I replaced my modem with one that only did DOCSIS 3.0 -> Ethernet conversion, and how that was a mess for a very long time.'
			}),
			`
`,
			t(e.p, {
				children:
					'About a year ago I was looking to get IPv6 into my home, and I needed to replace my modem to do that. So I bought one on Amazon that had good reviews, got on the phone with Time Warner Cable, and got it fully replaced. Unfortunately I didn\u2019t expect it to not do any routing, NAT, firewall features, or not provide DHCP/DNS, and I suddenly had a house full of roommates and IoT devices that didn\u2019t get a network connection. I really didn\u2019t want to move backwards, so I grabbed a pfSense firewall I had between the rest of the house and my homelab, and put it as the WAN firewall. Problem Solved.'
			}),
			`
`,
			t(e.p, {
				children:
					'However, there were some issues with this setup. First and foremost being that I hadn\u2019t planned to make pfSense the WAN firewall for a while, so it was running a Beta or Alpha of pfSense 2.3, and was also not configured correctly for use as a WAN router. I quickly put all the wired ports in the house on the VLAN I had been using for my lab, and restored internet to those. I then had to shore up the firewall and get the NAT rules working correctly, which took a little bit some time and eventually a \u201COh, I have to allow traffic out. Whoops.\u201D'
			}),
			`
`,
			t(e.p, {
				children:
					'Wireless was a different issue. For those I needed to reconfigure a pair of Ubiquiti APs to use the new network instead of the old one that went away when I swapped the modem. The network then proceeded to chug along for a while, having few issues for several weeks.'
			}),
			`
`,
			t(e.p, { children: 'Then the power went out.' }),
			`
`,
			t(e.p, {
				children:
					'Services were having a bit of a time coming back up. I came to discover that this was due to my using static addresses only for DHCP/DNS/AD and gateways. I didn\u2019t use static IPs on my storage or on my VM hosts, so when those went to reboot they couldn\u2019t talk until the DHCP servers were up, which couldn\u2019t come up until the hypervisors and storage were up. After fixing that, and giving static IPs to all of my infrastructure, I haven\u2019t had any issues after power outages.'
			}),
			`
`,
			t(e.p, { children: 'So what did I learn?' }),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children:
							'Do some research on hardware if I\u2019m putting it into place on a production network. Make sure it has the features I expect it to have when I install it.'
					}),
					`
`,
					t(e.li, {
						children: [
							'Static IP ',
							t(e.em, { children: t(e.strong, { children: 'anything' }) }),
							' that is infrastructure. Have a physical stand-by of any critical infrastructure. When I wrote this post I used a clustered DNS / DHCP setup, with one host being physical.'
						]
					}),
					`
`,
					t(e.li, {
						children:
							'Make sure I have a plan B. That pfSense firewall wasn\u2019t ready for where I put it. I was still trying to learn the interface and get some of the services working the way I wanted them to. I lucked out by having it, but I could have been more prepared.'
					}),
					`
`
				]
			})
		]
	})
}
function Bi(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Si, { ...n }) }) : Si(n)
}
var Ai,
	x0,
	S0,
	A0,
	Rn,
	Ti = m(() => {
		'use strict'
		W()
		J()
		V()
		Ai = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Misc Ramblings',
			description: 'My experience replacing a modem',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['homelab'],
			title: 'My experience replacing a modem'
		}
		x0 = !0
		b(ki, 'astro:jsx')
		b(Bi, 'astro:jsx')
		;(S0 = 'src/content/blog/My-experience-replacing-a-modem.mdx'),
			(A0 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/My-experience-replacing-a-modem.mdx'),
			(Rn = (n = {}) =>
				Bi({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Rn[Symbol.for('mdx-component')] = !0
		Rn[Symbol.for('astro.needsHeadRendering')] = !Ai.layout
		Rn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/My-experience-replacing-a-modem.mdx'
	})
var Pi = {}
f(Pi, { default: () => P0 })
async function k0() {
	return Promise.resolve().then(() => (Ti(), _i))
}
var B0,
	_0,
	T0,
	P0,
	Mi = m(() => {
		'use strict'
		;(B0 = []),
			(_0 = []),
			(T0 = []),
			(P0 = {
				__astroPropagation: !0,
				getMod: k0,
				collectedLinks: B0,
				collectedStyles: _0,
				collectedScripts: T0
			})
	})
var Oi = {}
f(Oi, {
	Content: () => Un,
	__usesAstroImage: () => M0,
	default: () => Un,
	file: () => j0,
	frontmatter: () => ji,
	getHeadings: () => Li,
	url: () => I0
})
function Li() {
	return []
}
function Ii(n) {
	let e = { a: 'a', p: 'p', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children: `Really quick one today. As you start migrating to Azure AD, you may find the\r
occasional legacy application that\u2019s ADFS dependent. In my environment, we have\r
an application that\u2019s using Windows session login and ADFS to enter the\r
application, and we can\u2019t move it away from that yet. We are however moving to\r
pure AADJ joins and as a result, needed to get SSSO functional with this legacy\r
app. We stood up HCT earlier, and that made it really simple to complete: we\r
just needed to set up a trusted site list in Intune.`
			}),
			`
`,
			t(e.p, {
				children: `The first step is to enter Intune, and create a \u201CSettings Catalog\u201D configuration\r
profile for a \u201CSite to Zone Assignment List\u201D.`
			}),
			`
`,
			t(e.p, {
				children: `Once there, you\u2019ll need to enable it, then start adding sites to the zone\r
assignments list, and for the SSSO it worked for me on the Intranet setting.`
			}),
			`
`,
			t(e.p, {
				children: `There is a guide available here from Microsoft on the formats they accept for\r
the name, and which zone each of the values is associated with.`
			}),
			`
`,
			t(e.p, {
				children: t(e.a, {
					href: 'https://docs.microsoft.com/en-us/windows/client-management/mdm/policy-csp-internetexplorer?WT.mc_id=Portal-Microsoft_Intune_Workflows#internetexplorer-allowsitetozoneassignmentlist',
					children: 'Policy CSP - InternetExplorer - Windows Client Management'
				})
			})
		]
	})
}
function $i(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Ii, { ...n }) }) : Ii(n)
}
var ji,
	M0,
	I0,
	j0,
	Un,
	Ri = m(() => {
		'use strict'
		W()
		J()
		V()
		ji = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'EntraID',
			description: 'SSSO to ADFS with Hybrid Cloud Trust and Intune',
			pubDate: '2017-07-27T04:00:00.000Z',
			tags: ['adfs'],
			title: 'SSSO to ADFS with Hybrid Cloud Trust and Intune'
		}
		M0 = !0
		b(Li, 'astro:jsx')
		b($i, 'astro:jsx')
		;(I0 = 'src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx'),
			(j0 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx'),
			(Un = (n = {}) =>
				$i({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Un[Symbol.for('mdx-component')] = !0
		Un[Symbol.for('astro.needsHeadRendering')] = !ji.layout
		Un.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx'
	})
var Ui = {}
f(Ui, { default: () => U0 })
async function L0() {
	return Promise.resolve().then(() => (Ri(), Oi))
}
var $0,
	O0,
	R0,
	U0,
	Ni = m(() => {
		'use strict'
		;($0 = []),
			(O0 = []),
			(R0 = []),
			(U0 = {
				__astroPropagation: !0,
				getMod: L0,
				collectedLinks: $0,
				collectedStyles: O0,
				collectedScripts: R0
			})
	})
var Vi = {}
f(Vi, {
	Content: () => Nn,
	__usesAstroImage: () => N0,
	default: () => Nn,
	file: () => z0,
	frontmatter: () => zi,
	getHeadings: () => Wi,
	url: () => H0
})
function Wi() {
	return [
		{ depth: 1, slug: 'dban', text: 'DBAN' },
		{ depth: 1, slug: 'hdd-degausser', text: 'HDD Degausser' },
		{ depth: 1, slug: 'embedded-components', text: 'Embedded Components' },
		{ depth: 1, slug: 'solutions', text: 'Solutions' },
		{ depth: 2, slug: 'full-disk-encryption', text: 'Full Disk Encryption' },
		{ depth: 2, slug: 'physical-shredding', text: 'Physical shredding' },
		{ depth: 2, slug: 'ssd-secure-erase', text: 'SSD Secure erase' }
	]
}
function Hi(n) {
	let e = { h1: 'h1', h2: 'h2', p: 'p', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children: `In the modern era of SSDs in everything, I\u2019m seeing many many questions about\r
how to securely erase them. Some folks aren\u2019t even asking, just assuming that\r
DBAN works or that their magnetic erasers work still. In truth, neither of those\r
is going to be a reliable method for SSDs.`
			}),
			`
`,
			t(e.h1, { id: 'dban', children: 'DBAN' }),
			`
`,
			t(e.p, {
				children: `DBAN will not reliably function on an SSD due to the way SSDs function. An SSD\r
will preform wear leveling. When preforming a write there is no guarantee that\r
it won\u2019t shuffle the writes around or get all of your data, even if you run DBAN\r
multiple times. The storage isn\u2019t even physically indexable the same way a\r
traditional HDD is.`
			}),
			`
`,
			t(e.h1, { id: 'hdd-degausser', children: 'HDD Degausser' }),
			`
`,
			t(e.p, {
				children: `A degausser is also ineffective on an SSD. The degausser is used to scramble the\r
magnetic storage of a traditional HDD, but SSDs have no magnetic storage and are\r
unaffected by a degausser.`
			}),
			`
`,
			t(e.h1, { id: 'embedded-components', children: 'Embedded Components' }),
			`
`,
			t(e.p, {
				children: `Making this an even greater challenge is manufacturers such as Apple embedding\r
storage directly on the motherboard or logic board, and in Apple\u2019s case\r
restricting the ability to boot to non-apple external boot media. No longer can\r
a drive just be removed from a computer and plugged into another one or run\r
through a degausser.`
			}),
			`
`,
			t(e.h1, { id: 'solutions', children: 'Solutions' }),
			`
`,
			t(e.h2, { id: 'full-disk-encryption', children: 'Full Disk Encryption' }),
			`
`,
			t(e.p, {
				children: `One option is to turn on full disk encryption. Most OSes have a native option\r
for this: BitLocker on Windows, FileVault 2 on macOS, the native encryption a T2\r
chip provides on newer Apple hardware, and LUKS on Linux. This protects your\r
data in a few ways, but it also leaves you in a position where you can delete\r
the volume and be reasonably assured that the data is safe. On a Mac with T2, it\r
deletes the keys used to encrypt the volume when you delete the volume. On\r
Windows you can delete the keys from the TPM. I\u2019m not at all certain on Linux\r
what the interactions are, I don\u2019t personally use LUKS there.`
			}),
			`
`,
			t(e.h2, { id: 'physical-shredding', children: 'Physical shredding' }),
			`
`,
			t(e.p, {
				children: `Another option is to physically shred the SSD or computer. This will guarantee\r
the data is gone and ground to a powder.`
			}),
			`
`,
			t(e.h2, { id: 'ssd-secure-erase', children: 'SSD Secure erase' }),
			`
`,
			t(e.p, {
				children: `There is a standard in place for secure erasure of SSDs bootable tools such as\r
parted magic have the ability to utilize. This option is enabled on the SSD\r
hardware, and if it isn\u2019t there no software can make it exist. But this option\r
will tell the SSD to flash all storage to blank and takes a few seconds.\u201D`
			})
		]
	})
}
function Gi(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Hi, { ...n }) }) : Hi(n)
}
var zi,
	N0,
	H0,
	z0,
	Nn,
	Xi = m(() => {
		'use strict'
		W()
		J()
		V()
		zi = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Misc Ramblings',
			description: 'Secure SSD Erase options for Apple and Windows',
			pubDate: '2019-05-24T04:00:00.000Z',
			tags: ['security', 'data disposal'],
			title: 'Secure SSD Erase options for Apple and Windows'
		}
		N0 = !0
		b(Wi, 'astro:jsx')
		b(Gi, 'astro:jsx')
		;(H0 = 'src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx'),
			(z0 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx'),
			(Nn = (n = {}) =>
				Gi({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Nn[Symbol.for('mdx-component')] = !0
		Nn[Symbol.for('astro.needsHeadRendering')] = !zi.layout
		Nn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx'
	})
var Ji = {}
f(Ji, { default: () => J0 })
async function W0() {
	return Promise.resolve().then(() => (Xi(), Vi))
}
var G0,
	V0,
	X0,
	J0,
	qi = m(() => {
		'use strict'
		;(G0 = []),
			(V0 = []),
			(X0 = []),
			(J0 = {
				__astroPropagation: !0,
				getMod: W0,
				collectedLinks: G0,
				collectedStyles: V0,
				collectedScripts: X0
			})
	})
var ec = {}
f(ec, {
	Content: () => Hn,
	__usesAstroImage: () => q0,
	default: () => Hn,
	file: () => Y0,
	frontmatter: () => Yi,
	getHeadings: () => Ki,
	url: () => Z0
})
function Ki() {
	return []
}
function Zi(n) {
	let e = { code: 'code', li: 'li', p: 'p', ul: 'ul', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children:
					'Over the years I\u2019ve collected a few favorite time saving tricks for working in bash or terminal work in general.'
			}),
			`
`,
			t(e.p, {
				children: [
					'This is one I use pretty often while doing support work. ',
					t(e.code, { children: 'w' }),
					' is  all the fun of ',
					t(e.code, { children: 'uptime' }),
					' and ',
					t(e.code, { children: 'last' }),
					' in the space of one letter. ',
					t(e.code, { children: 'user' }),
					' is the username of the logged in user. ',
					t(e.code, { children: 'tty' }),
					' shows how they\u2019re logged in. ',
					t(e.code, { children: 'from' }),
					' shows the hostname or ip address they\u2019re connected from if over ssh. ',
					t(e.code, { children: 'login' }),
					' shows the time or date of the login. ',
					t(e.code, { children: 'idle' }),
					', ',
					t(e.code, { children: 'jcpu' }),
					' and ',
					t(e.code, { children: 'pcpu' }),
					' are useful for seeing how much cpu time a user is taking up, and the ',
					t(e.code, { children: 'what' }),
					' field shows the current command the user is using.'
				]
			}),
			`
`,
			t(e.p, {
				children: `[root@machine ~]# w\r
20:56:50 up 2 days,  1:39,  1 user,  load average: 0.12, 0.28, 0.42\r
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT\r
root     pts/0    machine2.local.t Thu22    2.00s  0.09s  0.06s -bash`
			}),
			`
`,
			t(e.p, {
				children:
					'This group is super useful if you\u2019re like me and make mistakes while typing things out.'
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							t(e.code, { children: 'ctrl + w' }),
							' will remove whatever word your cursor is in.'
						]
					}),
					`
`,
					t(e.li, {
						children: [
							t(e.code, { children: 'ctrl + u' }),
							' will clear from the cursor all the way back to the start of the line'
						]
					}),
					`
`,
					t(e.li, {
						children: [
							t(e.code, { children: 'ctrl + l' }),
							' will clear any lines above the one you\u2019re working in and bring your working line to the top of the screen.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.p, {
				children: [
					t(e.code, { children: '!!' }),
					' is an excellent shortcut for appending or prefixing some bit of command you forgot.'
				]
			}),
			`
`,
			t(e.p, {
				children: `bash-4.3$ cat /var/log/secure\r
cat: /var/log/secure: Permission denied\r
bash-4.3$ suod !!\r
bash: suod: command not found`
			}),
			`
`,
			t(e.p, {
				children: [
					t(e.code, { children: '^^' }),
					' is a great way to fix the typo in that last command. It will replace everything after the first ',
					t(e.code, { children: '^' }),
					' and replace it with everything after the second.'
				]
			}),
			`
`,
			t(e.p, {
				children: `bash-4.3$ ^od^do\r
sudo cat /var/log/secure`
			})
		]
	})
}
function Qi(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Zi, { ...n }) }) : Zi(n)
}
var Yi,
	q0,
	Z0,
	Y0,
	Hn,
	tc = m(() => {
		'use strict'
		W()
		J()
		V()
		Yi = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Misc Ramblings',
			description: 'Terminal tricks: Handy Shortcuts',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['shell tricks'],
			title: 'Terminal tricks: Handy Shortcuts'
		}
		q0 = !0
		b(Ki, 'astro:jsx')
		b(Qi, 'astro:jsx')
		;(Z0 = 'src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx'),
			(Y0 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx'),
			(Hn = (n = {}) =>
				Qi({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Hn[Symbol.for('mdx-component')] = !0
		Hn[Symbol.for('astro.needsHeadRendering')] = !Yi.layout
		Hn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx'
	})
var nc = {}
f(nc, { default: () => nb })
async function K0() {
	return Promise.resolve().then(() => (tc(), ec))
}
var Q0,
	eb,
	tb,
	nb,
	rc = m(() => {
		'use strict'
		;(Q0 = []),
			(eb = []),
			(tb = []),
			(nb = {
				__astroPropagation: !0,
				getMod: K0,
				collectedLinks: Q0,
				collectedStyles: eb,
				collectedScripts: tb
			})
	})
var ic = {}
f(ic, {
	Content: () => zn,
	__usesAstroImage: () => rb,
	default: () => zn,
	file: () => ob,
	frontmatter: () => oc,
	getHeadings: () => lc,
	url: () => sb
})
function lc() {
	return []
}
function sc(n) {
	let e = { p: 'p', ...n.components }
	return t(e.p, { children: 'fdsasdffvdvcx' })
}
function ac(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(sc, { ...n }) }) : sc(n)
}
var oc,
	rb,
	sb,
	ob,
	zn,
	cc = m(() => {
		'use strict'
		W()
		J()
		V()
		oc = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Misc Ramblings',
			description: 'The 87 United States',
			pubDate: '2024-01-03T05:00:00.000Z',
			draft: !0,
			tags: ['humor'],
			title: 'The 87 United States'
		}
		rb = !0
		b(lc, 'astro:jsx')
		b(ac, 'astro:jsx')
		;(sb = 'src/content/blog/The-87-United-States.mdx'),
			(ob =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/The-87-United-States.mdx'),
			(zn = (n = {}) =>
				ac({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		zn[Symbol.for('mdx-component')] = !0
		zn[Symbol.for('astro.needsHeadRendering')] = !oc.layout
		zn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/The-87-United-States.mdx'
	})
var dc = {}
f(dc, { default: () => db })
async function lb() {
	return Promise.resolve().then(() => (cc(), ic))
}
var ab,
	ib,
	cb,
	db,
	pc = m(() => {
		'use strict'
		;(ab = []),
			(ib = []),
			(cb = []),
			(db = {
				__astroPropagation: !0,
				getMod: lb,
				collectedLinks: ab,
				collectedStyles: ib,
				collectedScripts: cb
			})
	})
var Dc = {}
f(Dc, {
	Content: () => Wn,
	__usesAstroImage: () => pb,
	default: () => Wn,
	file: () => ub,
	frontmatter: () => uc,
	getHeadings: () => mc,
	url: () => hb
})
function mc() {
	return []
}
function hc(n) {
	let e = { a: 'a', p: 'p', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children: `Below is a collection of other posts I\u2019ve found very useful and frequently refer\r
to when doing infrequent tasks. Hopefully y\u2019all will find them useful too.`
			}),
			`
`,
			t(e.p, {
				children: [
					'Bash Cheatsheet [',
					t(e.a, {
						href: 'https://ss64.com/bash/syntax-keyboard.html',
						children: 'https://ss64.com/bash/syntax-keyboard.html'
					}),
					`]\r
Apple Notarization Info\r
[`,
					t(e.a, {
						href: 'https://mrmacintosh.com/updated-list-of-macos-notarization-links/',
						children: 'https://mrmacintosh.com/updated-list-of-macos-notarization-links/'
					}),
					`]\r
Linux Partition Alignment Guide\r
[`,
					t(e.a, {
						href: 'http://rainbow.chard.org/2013/01/30/how-to-align-partitions-for-best-performance-using-parted/',
						children:
							'http://rainbow.chard.org/2013/01/30/how-to-align-partitions-for-best-performance-using-parted/'
					}),
					`]\r
Shell Scripting Matters [`,
					t(e.a, {
						href: 'https://dev.to/thiht/shell-scripts-matter',
						children: 'https://dev.to/thiht/shell-scripts-matter'
					}),
					`]\r
MDADM Cheatsheet [`,
					t(e.a, {
						href: 'http://www.ducea.com/2009/03/08/mdadm-cheat-sheet/',
						children: 'http://www.ducea.com/2009/03/08/mdadm-cheat-sheet/'
					}),
					']\u201D'
				]
			})
		]
	})
}
function yc(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(hc, { ...n }) }) : hc(n)
}
var uc,
	pb,
	hb,
	ub,
	Wn,
	fc = m(() => {
		'use strict'
		W()
		J()
		V()
		uc = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Misc Ramblings',
			description: 'Useful Links',
			pubDate: '2019-08-28T04:00:00.000Z',
			tags: ['links'],
			title: 'Useful Links'
		}
		pb = !0
		b(mc, 'astro:jsx')
		b(yc, 'astro:jsx')
		;(hb = 'src/content/blog/Useful-Links.mdx'),
			(ub =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Useful-Links.mdx'),
			(Wn = (n = {}) =>
				yc({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Wn[Symbol.for('mdx-component')] = !0
		Wn[Symbol.for('astro.needsHeadRendering')] = !uc.layout
		Wn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Useful-Links.mdx'
	})
var gc = {}
f(gc, { default: () => gb })
async function mb() {
	return Promise.resolve().then(() => (fc(), Dc))
}
var yb,
	Db,
	fb,
	gb,
	Fc = m(() => {
		'use strict'
		;(yb = []),
			(Db = []),
			(fb = []),
			(gb = {
				__astroPropagation: !0,
				getMod: mb,
				collectedLinks: yb,
				collectedStyles: Db,
				collectedScripts: fb
			})
	})
var Cc = {}
f(Cc, {
	Content: () => Gn,
	__usesAstroImage: () => Fb,
	default: () => Gn,
	file: () => wb,
	frontmatter: () => wc,
	getHeadings: () => vc,
	url: () => bb
})
function vc() {
	return [{ depth: 1, slug: '2024-note', text: '2024 Note:' }]
}
function bc(n) {
	let e = { code: 'code', h1: 'h1', p: 'p', pre: 'pre', span: 'span', ...n.components }
	return t(F, {
		children: [
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<!' }),
								t(e.span, { style: { color: '#F78C6C' }, children: 'DOCTYPE' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' plist' }),
								t(e.span, {
									style: { color: '#89DDFF' },
									children:
										' PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">'
								})
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'plist' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' version' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '1.0' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadContent' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '		<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadContent' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'data' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#BABED8' },
								children: '			YOUR X509/PEM RADIUS CERT HERE'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'data' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadDisplayName' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Certificate' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadIdentifier' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'GUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadOrganization' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '></' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'com.apple.security.pkcs1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadUUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '60EDDC99-F33D-4D91-A93C-601977638A13'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadVersion' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '		</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '		<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'AllowAllAppsAccess' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'true' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'CertServer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'YOUR CERT SERVER FQDN HERE' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'CertTemplate' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'NAME_OF_CERT_TEMPLATE_HERE_REQUIRES_NO_SPACES'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'CertificateAcquisitionMechanism'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'RPC' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'CertificateAuthority' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'YOUR CA NAME HERE' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'CertificateRenewalTimeInterval'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '14' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Description' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'AD Machine Cert' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'EnableAutoRenewal' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'true' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'KeyIsExtractable' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'false' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Keysize' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '2048' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadDisplayName' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'AD Certificate' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadIdentifier' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children:
										'com.company.fqdn.24B78032-17F2-4705-86C1-D36ABE51273C.com.apple.ADCertificate.managed.44169206-CBE1-43FD-BD03-C1F7533CC2CA'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadOrganization' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '></' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'com.apple.ADCertificate.managed'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadUUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '44169206-CBE1-43FD-BD03-C1F7533CC2CA'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadVersion' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '		</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '		<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'AutoJoin' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'true' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'EAPClientConfiguration' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'AcceptEAPTypes' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '					<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '13' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'PayloadCertificateAnchorUUID'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '					<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '60EDDC99-F33D-4D91-A93C-601977638A13'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'TLSTrustedServerNames' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '					<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'YOUR TRUSTED SERVER NAME HERE'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'EncryptionType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'WPA2' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadCertificateUUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '44169206-CBE1-43FD-BD03-C1F7533CC2CA'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadDisplayName' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Wi-Fi' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadIdentifier' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children:
										'com.company.fqdn.24B78032-17F2-4705-86C1-D36ABE51273C.com.apple.wifi.managed.24B78032-17F2-4705-86C1-D36ABE51273C'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadOrganization' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '></' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'com.apple.wifi.managed' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadUUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '24B78032-17F2-4705-86C1-D36ABE51273C'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadVersion' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'SSID_STR' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'YOU_WIFI_SSID_HERE' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'SetupModes' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '				<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'System' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'TLSCertificateRequired' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '			<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'true' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '		</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadDisplayName' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Machine Cert Request w/ WiFi Configuration'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadIdentifier' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'com.company.fqdn.40C664B3-63F3-4E28-9204-9579DB0DC8DC'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadOrganization' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'YOUR ORG | DEPT NAME HERE' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadScope' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'System' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Configuration' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadUUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '40C664B3-63F3-4E28-9204-9579DB0DC8DC'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadVersion' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'plist' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h1, { id: '2024-note', children: '2024 Note:' }),
			`
`,
			t(e.p, {
				children:
					'When copying this over I realized I just dropped the plist file and nothing else.'
			}),
			`
`,
			t(e.p, {
				children: `This is a sanitized version of the plist file/profile that allowed macOS to pull a certificate from ADCS in my old envionment.\r
There may be updates to the format, this may no longer work. Unfortuantely, there\u2019s no macOS or 802.1x in my new environment so I\u2019m unable to check up on it.`
			})
		]
	})
}
function Ec(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(bc, { ...n }) }) : bc(n)
}
var wc,
	Fb,
	bb,
	wb,
	Gn,
	xc = m(() => {
		'use strict'
		W()
		J()
		V()
		wc = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'macOS',
			description: 'Using AD CS for machine-based EAP-TLS on macOS',
			pubDate: '2019-08-28T04:00:00.000Z',
			tags: ['certs', 'macos'],
			title: 'Using AD CS for machine-based EAP-TLS on macOS'
		}
		Fb = !0
		b(vc, 'astro:jsx')
		b(Ec, 'astro:jsx')
		;(bb = 'src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx'),
			(wb =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx'),
			(Gn = (n = {}) =>
				Ec({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Gn[Symbol.for('mdx-component')] = !0
		Gn[Symbol.for('astro.needsHeadRendering')] = !wc.layout
		Gn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx'
	})
var Sc = {}
f(Sc, { default: () => Sb })
async function vb() {
	return Promise.resolve().then(() => (xc(), Cc))
}
var Eb,
	Cb,
	xb,
	Sb,
	Ac = m(() => {
		'use strict'
		;(Eb = []),
			(Cb = []),
			(xb = []),
			(Sb = {
				__astroPropagation: !0,
				getMod: vb,
				collectedLinks: Eb,
				collectedStyles: Cb,
				collectedScripts: xb
			})
	})
var Pc = {}
f(Pc, {
	Content: () => Vn,
	__usesAstroImage: () => Ab,
	default: () => Vn,
	file: () => Bb,
	frontmatter: () => Bc,
	getHeadings: () => _c,
	url: () => kb
})
function _c() {
	return []
}
function kc(n) {
	let e = { p: 'p', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children:
					'Another one of my favorite vim tricks is for the quick decrement or increment of numbers.'
			}),
			`
`,
			t(e.p, {
				children:
					'While in Normal mode, if you bring the cursor to a number, you can use ctrl+a to increment it or ctrl+x to decrement it. As with all vim commands, you can enter a number first and it will do the action that many times. So 400 ctrl+a will add 400 to the highlighted number.'
			}),
			`
`,
			t(e.p, {
				children:
					'The other fun thing this will do is automatically hop to the first number on a line, so if you have the letter \u201Cf\u201D highlighted, but the number \u201C418\u201D is 50 characters to the right, ctrl+a or ctrl+x will hop 50 characters to the right and apply the action to the number.'
			})
		]
	})
}
function Tc(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(kc, { ...n }) }) : kc(n)
}
var Bc,
	Ab,
	kb,
	Bb,
	Vn,
	Mc = m(() => {
		'use strict'
		W()
		J()
		V()
		Bc = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Linux',
			description: 'Vim Tricks: Increment or decrement numbers',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['shortcuts', 'vim'],
			title: 'Vim Tricks: Increment or decrement numbers'
		}
		Ab = !0
		b(_c, 'astro:jsx')
		b(Tc, 'astro:jsx')
		;(kb = 'src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx'),
			(Bb =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx'),
			(Vn = (n = {}) =>
				Tc({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Vn[Symbol.for('mdx-component')] = !0
		Vn[Symbol.for('astro.needsHeadRendering')] = !Bc.layout
		Vn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx'
	})
var Ic = {}
f(Ic, { default: () => Ib })
async function _b() {
	return Promise.resolve().then(() => (Mc(), Pc))
}
var Tb,
	Pb,
	Mb,
	Ib,
	jc = m(() => {
		'use strict'
		;(Tb = []),
			(Pb = []),
			(Mb = []),
			(Ib = {
				__astroPropagation: !0,
				getMod: _b,
				collectedLinks: Tb,
				collectedStyles: Pb,
				collectedScripts: Mb
			})
	})
var Uc = {}
f(Uc, {
	Content: () => Xn,
	__usesAstroImage: () => jb,
	default: () => Xn,
	file: () => $b,
	frontmatter: () => $c,
	getHeadings: () => Oc,
	url: () => Lb
})
function Oc() {
	return []
}
function Lc(n) {
	let e = { li: 'li', p: 'p', ul: 'ul', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children:
					'I thought I\u2019d write down one of my favorite vim tricks. This one is to change or comment a vertical block of text all at once, instead of one line at a time.'
			}),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							`Step One
`,
							t(e.ul, {
								children: [
									`
`,
									t(e.li, {
										children: [
											'Enter Visual Block mode with ',
											t('kbd', {
												children: [t('kbd', { children: 'Ctrl' }), '+', t('kbd', { children: 'v' })]
											}),
											', then highlight a single character wide slice you wish to add comment characters to.'
										]
									}),
									`
`
								]
							}),
							`
`
						]
					}),
					`
`,
					t(e.li, {
						children: [
							`Step two
`,
							t(e.ul, {
								children: [
									`
`,
									t(e.li, {
										children: [
											'Press ',
											t('kbd', {
												children: [
													t('kbd', { children: 'Shift' }),
													'+',
													t('kbd', { children: 'i' })
												]
											}),
											' to enter insert mode, then enter your comment character. Don\u2019t worry, this will only effect one line at first.'
										]
									}),
									`
`
								]
							}),
							`
`
						]
					}),
					`
`,
					t(e.li, {
						children: [
							`Step three
`,
							t(e.ul, {
								children: [
									`
`,
									t(e.li, {
										children: [
											'Press ',
											t('kbd', { children: 'Esc' }),
											' to apply your change to all lines you previously had highlighted.'
										]
									}),
									`
`
								]
							}),
							`
`
						]
					}),
					`
`
				]
			})
		]
	})
}
function Rc(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Lc, { ...n }) }) : Lc(n)
}
var $c,
	jb,
	Lb,
	$b,
	Xn,
	Nc = m(() => {
		'use strict'
		W()
		J()
		V()
		$c = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'Linux',
			description: 'Vim Tricks: Visual Block Mode',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['shortcuts', 'vim'],
			title: 'Vim Tricks: Visual Block Mode'
		}
		jb = !0
		b(Oc, 'astro:jsx')
		b(Rc, 'astro:jsx')
		;(Lb = 'src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx'),
			($b =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx'),
			(Xn = (n = {}) =>
				Rc({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Xn[Symbol.for('mdx-component')] = !0
		Xn[Symbol.for('astro.needsHeadRendering')] = !$c.layout
		Xn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx'
	})
var Hc = {}
f(Hc, { default: () => Hb })
async function Ob() {
	return Promise.resolve().then(() => (Nc(), Uc))
}
var Rb,
	Ub,
	Nb,
	Hb,
	zc = m(() => {
		'use strict'
		;(Rb = []),
			(Ub = []),
			(Nb = []),
			(Hb = {
				__astroPropagation: !0,
				getMod: Ob,
				collectedLinks: Rb,
				collectedStyles: Ub,
				collectedScripts: Nb
			})
	})
var Jc = {}
f(Jc, {
	Content: () => Jn,
	__usesAstroImage: () => zb,
	default: () => Jn,
	file: () => Gb,
	frontmatter: () => Gc,
	getHeadings: () => Vc,
	url: () => Wb
})
function Vc() {
	return [
		{ depth: 1, slug: 'background', text: 'Background' },
		{ depth: 2, slug: 'imaging', text: 'Imaging' },
		{ depth: 2, slug: 'sip', text: 'SIP' },
		{ depth: 2, slug: 'configuration-profiles', text: 'Configuration Profiles' },
		{ depth: 2, slug: 'mdm', text: 'MDM' },
		{ depth: 1, slug: 'how-this-ties-together', text: 'How this ties together' },
		{ depth: 2, slug: 'dep-finally', text: 'DEP, Finally' },
		{ depth: 3, slug: 'security-addendum', text: 'Security addendum' }
	]
}
function Wc(n) {
	let e = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', p: 'p', ...n.components }
	return t(F, {
		children: [
			t(e.p, {
				children:
					'After a stakeholders meeting yesterday, I was left with the realization that many of us in the IT community may be saying \u201CHey, you need this DEP thing if you want to keep managing Apple devices correctly and efficently\u201D. But we may not be explaining what this DEP thing is, and some of us may not be fully understanding it. So this is meant to be a overview of what DEP is and the background needed to understand why you want it without going too deep into the weeds.'
			}),
			`
`,
			t(e.h1, { id: 'background', children: 'Background' }),
			`
`,
			t(e.p, {
				children: [
					'To start, let\u2019s talk about what Apple is doing with configuration. Apple is slowly moving away from the classic tried-and-true methods for configuration such as imaging, modifications to the default user profile, and the ',
					t(e.code, { children: 'defaults' }),
					' command. ',
					t(e.a, {
						href: 'https://scriptingosx.com/2017/12/imac-pro-implications-for-mac-admins/',
						children: 'They\u2019re removing imaging entirely on new hardware'
					}),
					', ',
					t(e.a, {
						href: 'https://discussions.apple.com/thread/7855765?answerId=31510451022#31510451022',
						children: 'protecting the default user profile from modification'
					}),
					', and ',
					t(e.a, {
						href: 'https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html',
						children: 'pushing configuration profiles'
					}),
					' and the preference hierarchy.'
				]
			}),
			`
`,
			t(e.h2, { id: 'imaging', children: 'Imaging' }),
			`
`,
			t(e.p, {
				children: [
					'Monolithic imaging has been going away for a very long time, they\u2019ve been pushing thin image workflows for longer than I\u2019ve been in the industry. They\u2019ve now stopped supporting thin imaging as well with the ',
					t(e.a, {
						href: 'https://support.apple.com/en-gb/HT202770',
						children: 'removal of netboot from the iMac Pro'
					}),
					' and ',
					t(e.a, {
						href: 'https://support.apple.com/en-us/HT208312',
						children: 'netboot components from Server.app'
					}),
					'.'
				]
			}),
			`
`,
			t(e.h2, { id: 'sip', children: 'SIP' }),
			`
`,
			t(e.p, {
				children: [
					'With the introduction of SIP, Apple started locking down critical parts of the operating system so no user can touch them. Not even with ',
					t(e.code, { children: 'sudo' }),
					' or by being root. If you\u2019re familliar with ',
					t(e.code, { children: 'selinux' }),
					' or ',
					t(e.code, { children: 'AppArmor' }),
					' it\u2019s a similar concept, but only modifiable by Apple. This included most of ',
					t(e.code, { children: '/System' }),
					', and the default user profile is in there. With APFS, all of ',
					t(e.code, { children: '/System' }),
					' is expected to become read-only, no more modifications to default profile or any other system directory allowed.'
				]
			}),
			`
`,
			t(e.h2, { id: 'configuration-profiles', children: 'Configuration Profiles' }),
			`
`,
			t(e.p, {
				children: [
					'Apple introduced configuration profiles in 10.8. Since then they\u2019ve been at the top of the preference domain hierarchy. A setting set with a profile cannot be overridden by ',
					t(e.code, { children: 'defaults' }),
					' or ',
					t(e.code, { children: 'sudo defaults' }),
					'. ',
					t(e.a, {
						href: 'https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html',
						children: 'They can control many things by default'
					}),
					' and ',
					t(e.a, {
						href: 'https://github.com/timsutton/mcxToProfile',
						children: 'you can configure existing configurations'
					}),
					' to be compatible. Many softwares are compatible with them as well. ',
					t(e.a, {
						href: 'https://docs.google.com/spreadsheets/d/1ESX5td0y0OP3jdzZ-C2SItm-TUi-iA_bcHCBvaoCumw/edit',
						children: 'Microsoft Office 2016'
					}),
					' is one of many examples.'
				]
			}),
			`
`,
			t(e.h2, { id: 'mdm', children: 'MDM' }),
			`
`,
			t(e.p, {
				children: [
					'Apple has historically been pushing MDM as a way to create and issue Configuration Profiles. They have a reference implementation called Profile Manager, a component of Server.app. This is just for reference, there exists more than one story of profile manager just imploding and everything being lost even with backups. Apple themselves uses Jamf Pro. This has led to a \u201Cfriends don\u2019t let friends use Profile Manager\u201D attitude within the mac admins community. Many options exist for this, ',
					t(e.a, { href: 'https://www.jamf.com/', children: 'Jamf' }),
					', ',
					t(e.a, { href: 'https://simplemdm.com/', children: 'SimpleMDM' }),
					', and ',
					t(e.a, { href: 'https://micromdm.io/', children: 'MicroMDM' }),
					' being just three options.'
				]
			}),
			`
`,
			t(e.h1, { id: 'how-this-ties-together', children: 'How this ties together' }),
			`
`,
			t(e.p, {
				children:
					'With a proper thin imaging workflow a machine would be unboxed, a vanilla copy of the OS installed using a tool like DeployStudio or Imagr, part of that workflow would bind to a directory service, install some bootstrapping tools, complete any MDM enrollment, and pass the software installation and OS configuration on to the bootstrapping tools like Jamf Self Service or Munki. The bootstrapping tool would then download any software from a managed repository and install it, and add any configuration profiles it\u2019s configured to.'
			}),
			`
`,
			t(e.p, {
				children: [
					'Without the ability to image a machine, these bootstrapping tools and any mdm enrollment have to be manually added after the OOBE (out of box experience) is completed. This presents two issues: Having to manually walk through the OOBE on every machine you deploy, and the introduction of ',
					t(e.a, {
						href: 'https://simplemdm.com/2017/11/01/user-approved-mdm-enrollment/',
						children: 'UAMDM'
					}),
					' disabling features of your MDM until a person physically moves the cursor to the \u201CApprove\u201D button on the end-user\u2019s machine. There\u2019s also ',
					t(e.a, {
						href: 'https://developer.apple.com/library/content/technotes/tn2459/_index.html',
						children: 'UAKEL'
					}),
					' for your kernel extensions. This ',
					t(e.em, { children: 'also' }),
					' needs to be preformed by a person physically at the machine.'
				]
			}),
			`
`,
			t(e.h2, { id: 'dep-finally', children: 'DEP, Finally' }),
			`
`,
			t(e.p, {
				children:
					'Sounds like a pain? It is, and Apple recognizes this. DEP exists to make this process easier. DEP is an Apple program where they will work with a vendor to integrate their PoS system with Apple\u2019s backend. Apple also works with you to create a DEP account that your business purchases can be tied to. Once your account exists, and provided your vendor of choice is DEP approved, any purchases made going forwards can be automatically tied to your DEP account.'
			}),
			`
`,
			t(e.p, {
				children:
					'DEP will integrate with your MDM solution(s) and automatically enroll the machine during the OOBE. If you have multiple MDMs, you can choose the MDM you want devices to be configured to go to in the DEP portal, using the serial of a specific device for one, an order number for multiple devices, or several other options. DEP allows you to configure the OOBE as well. After DEP enrolls the machine into your MDM (optionally this can require authentication), the MDM will optionally send a payload with software like Jamf\u2019s Self Service, the Munki Project\u2019s Managed Software Center, or SplashBuddy, which can then be used to bootstrap the rest of the machine\u2019s software and configuration. This process is regularly advertised as able to get you to a \u201Czero-touch\u201D environment: the ability to provide a factory shrinkwrapped box to an end-user and know that the machine can configure itself.'
			}),
			`
`,
			t(e.p, {
				children:
					'DEP also comes with the benefit that MDM it enrolls the machine in is automatically considered user-approved, and a user-approved MDM can issue a configuration profile that whitelists kernel extensions, thus getting you around UAKEL in the same stroke.'
			}),
			`
`,
			t(e.h3, { id: 'security-addendum', children: 'Security addendum' }),
			`
`,
			t(e.p, {
				children:
					'DEP isn\u2019t something that can be gotten around by simply wiping the machine. If a laptop is stolen then wiped, during the OOBE it will check in with Apple to see if there is a DEP configuration available, and if there is it will pull it down again or block the process waiting for authentication. If your device is marked as stolen or placed in lost mode, it will also sit at the OOBE until unlocked or returned.'
			})
		]
	})
}
function Xc(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Wc, { ...n }) }) : Wc(n)
}
var Gc,
	zb,
	Wb,
	Gb,
	Jn,
	qc = m(() => {
		'use strict'
		W()
		J()
		V()
		Gc = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'macOS',
			description: 'What is DEP?',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['dep'],
			title: 'What is DEP?'
		}
		zb = !0
		b(Vc, 'astro:jsx')
		b(Xc, 'astro:jsx')
		;(Wb = 'src/content/blog/What-is-DEP.mdx'),
			(Gb = 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/What-is-DEP.mdx'),
			(Jn = (n = {}) =>
				Xc({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Jn[Symbol.for('mdx-component')] = !0
		Jn[Symbol.for('astro.needsHeadRendering')] = !Gc.layout
		Jn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/What-is-DEP.mdx'
	})
var Zc = {}
f(Zc, { default: () => Zb })
async function Vb() {
	return Promise.resolve().then(() => (qc(), Jc))
}
var Xb,
	Jb,
	qb,
	Zb,
	Yc = m(() => {
		'use strict'
		;(Xb = []),
			(Jb = []),
			(qb = []),
			(Zb = {
				__astroPropagation: !0,
				getMod: Vb,
				collectedLinks: Xb,
				collectedStyles: Jb,
				collectedScripts: qb
			})
	})
var nd = {}
f(nd, {
	Content: () => qn,
	__usesAstroImage: () => Yb,
	default: () => qn,
	file: () => Qb,
	frontmatter: () => Qc,
	getHeadings: () => ed,
	url: () => Kb
})
function ed() {
	return [
		{ depth: 1, slug: 'title', text: 'Title' },
		{ depth: 2, slug: 'jsx-like-expressions', text: 'JSX-like Expressions' },
		{ depth: 3, slug: 'variables', text: 'Variables' },
		{ depth: 3, slug: 'dynamic-attributes', text: 'Dynamic Attributes' },
		{ depth: 2, slug: 'ressions', text: 'ressions' },
		{ depth: 3, slug: 'dynamic-html', text: 'Dynamic HTML' },
		{ depth: 3, slug: 'dynamic-tags', text: 'Dynamic Tags' },
		{ depth: 3, slug: 'fragments', text: 'Fragments' },
		{
			depth: 3,
			slug: 'differences-between-astro-and-jsx',
			text: 'Differences between Astro and JSX'
		},
		{ depth: 4, slug: 'attributes', text: 'Attributes' },
		{ depth: 4, slug: 'multiple-elements', text: 'Multiple Elements' },
		{ depth: 4, slug: 'comments', text: 'Comments' }
	]
}
function Kc(n) {
	let e = {
		a: 'a',
		code: 'code',
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		li: 'li',
		p: 'p',
		pre: 'pre',
		span: 'span',
		strong: 'strong',
		ul: 'ul',
		...n.components
	}
	return t(F, {
		children: [
			t(e.h1, { id: 'title', children: 'Title' }),
			`
`,
			t(e.p, {
				children: t(e.strong, {
					children: 'If you know HTML, you already know enough to write your first Astro component.'
				})
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. The syntax was ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'designed to feel familiar to anyone with experience writing HTML or JSX'
					}),
					', and adds support for including components and JavaScript expressions.'
				]
			}),
			`
`,
			t(e.h2, { id: 'jsx-like-expressions', children: 'JSX-like Expressions' }),
			`
`,
			t(e.p, {
				children: [
					'You can define local JavaScript variables inside of the frontmatter component script between the two code fences (',
					t(e.code, { children: '---' }),
					') of an Astro component. You can then inject these variables into the component\u2019s HTML template using JSX-like expressions!'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					`note[dynamic vs reactive]\r
Using this approach, you can include `,
					t(e.strong, { children: 'dynamic' }),
					' values that are calculated in the frontmatter. But once included, these values are not ',
					t(e.strong, { children: 'reactive' }),
					' and will never change. Astro components are templates that only run once, during the rendering step.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'See below for more examples of ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'differences between Astro and JSX'
					}),
					'.'
				]
			}),
			`
`,
			t(e.h3, { id: 'variables', children: 'Variables' }),
			`
`,
			t(e.p, {
				children: 'Local variables can be added into the HTML using the curly braces syntax:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#BABED8' }, children: '---' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#BABED8' }, children: "const name = 'Astro'" })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#BABED8' }, children: '---' })
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello {name}!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '	<!-- Outputs <h1>Hello Astro!</h1> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-attributes', children: 'Dynamic Attributes' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in curly braces to pass attribute values to both HTML elements and components:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Attribute expressions are supported'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'MyComponent' }),
								t(e.span, {
									style: { color: '#C792EA' },
									children: ' templateLiteralNameAttribute'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '`' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'MyNameIs' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '${' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}`' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can\u2019t assign an event handler to an HTML element in an Astro component:`
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// dont-do-this.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: "<!-- \u274C This doesn't work! \u274C -->"
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' onClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Nothing will happen when you click me!'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// do-this-instead.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' id' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Click Me' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: '	function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '		console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '	}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	document' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'getElementById' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'addEventListener' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'click' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' handleClick)' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h2, { id: 'ressions', children: 'ressions' }),
			`
`,
			t(e.h3, { id: 'dynamic-html', children: 'Dynamic HTML' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' items ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' [' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Dog' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Cat' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Platypus' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ']' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'items' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'map' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '(' }),
								t(e.span, { style: { color: '#BABED8', fontStyle: 'italic' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ')' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' =>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Astro can conditionally display HTML using JSX logical operators and ternary expressions.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#FF9CAC' }, children: ' true' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '&&' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '?' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' :' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Else show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-tags', children: 'Dynamic Tags' }),
			`
`,
			t(e.p, {
				children:
					'You can also use dynamic tags by setting a variable to an HTML tag name or a component import:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'import' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent ' }),
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'from' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: './MyComponent.astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Element ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Component ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <div>Hello!</div> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Component' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <MyComponent /> -->'
							})
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: 'When using dynamic tags:' }),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Variable names must be capitalized.' }),
							' For example, use ',
							t(e.code, { children: 'Element' }),
							', not ',
							t(e.code, { children: 'element' }),
							'. Otherwise, Astro will try to render your variable name as a literal HTML tag.'
						]
					}),
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Hydration directives are not supported.' }),
							' When using ',
							t(e.a, {
								href: '/en/core-concepts/framework-components/#hydrating-interactive-components',
								children: [t(e.code, { children: 'client:*' }), ' hydration directives']
							}),
							', Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.h3, { id: 'fragments', children: 'Fragments' }),
			`
`,
			t(e.p, {
				children: [
					'Astro supports using either ',
					t(e.code, { children: '<Fragment> </Fragment>' }),
					' or the shorthand ',
					t(e.code, { children: '<> </>' }),
					'.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'Fragments can be useful to avoid wrapper elements when adding ',
					t(e.a, {
						href: '/en/reference/directives-reference/#sethtml',
						children: [t(e.code, { children: 'set:*' }), ' directives']
					}),
					', as in the following example:'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' htmlString ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: '<p>Raw HTML content</p>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Fragment' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' set:html' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'htmlString' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, {
				id: 'differences-between-astro-and-jsx',
				children: 'Differences between Astro and JSX'
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between ',
					t(e.code, { children: '.astro' }),
					' files and JSX.'
				]
			}),
			`
`,
			t(e.h4, { id: 'attributes', children: 'Attributes' }),
			`
`,
			t(e.p, {
				children: [
					'In Astro, you use the standard ',
					t(e.code, { children: 'kebab-case' }),
					' format for all HTML attributes instead of the ',
					t(e.code, { children: 'camelCase' }),
					' used in JSX. This even works for ',
					t(e.code, { children: 'class' }),
					', which is not supported by React.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' className' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' dataValue' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' data-value' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'multiple-elements', children: 'Multiple Elements' }),
			`
`,
			t(e.p, {
				children: [
					'An Astro component template can render multiple elements with no need to wrap everything in a single ',
					t(e.code, { children: '<div>' }),
					' or ',
					t(e.code, { children: '<>' }),
					', unlike JavaScript or JSX.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// Template with multiple elements'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'No need to wrap elements in a single containing element.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Astro supports multiple root elements in a template.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'comments', children: 'Comments' }),
			`
`,
			t(e.p, {
				children: 'In Astro, you can use standard HTML comments or JavaScript-style comments.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '<!-- HTML comment syntax is valid in .astro files -->'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '/* JS comment syntax is also valid */'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.'
			})
		]
	})
}
function td(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Kc, { ...n }) }) : Kc(n)
}
var Qc,
	Yb,
	Kb,
	Qb,
	qn,
	rd = m(() => {
		'use strict'
		W()
		J()
		V()
		Qc = {
			heroImage: '../../assets/images/bg.jpg',
			category: 'Misc Ramblings',
			description:
				'The new MacBook Pro 2022 is here. With the Apple M2 chip, a new design, and more, the new MacBook Pro is the best laptop Apple has ever made.',
			pubDate: '2022-07-01T22:00:00.000Z',
			draft: !0,
			tags: ['JavaScript', 'css', 'HTML5', 'GitHub'],
			title: 'MacBook Pro 2022'
		}
		Yb = !0
		b(ed, 'astro:jsx')
		b(td, 'astro:jsx')
		;(Kb = 'src/content/blog/astro%20copy%202.mdx'),
			(Qb =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 2.mdx'),
			(qn = (n = {}) =>
				td({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		qn[Symbol.for('mdx-component')] = !0
		qn[Symbol.for('astro.needsHeadRendering')] = !Qc.layout
		qn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 2.mdx'
	})
var sd = {}
f(sd, { default: () => s8 })
async function e8() {
	return Promise.resolve().then(() => (rd(), nd))
}
var t8,
	n8,
	r8,
	s8,
	od = m(() => {
		'use strict'
		;(t8 = []),
			(n8 = []),
			(r8 = []),
			(s8 = {
				__astroPropagation: !0,
				getMod: e8,
				collectedLinks: t8,
				collectedStyles: n8,
				collectedScripts: r8
			})
	})
var dd = {}
f(dd, {
	Content: () => Zn,
	__usesAstroImage: () => o8,
	default: () => Zn,
	file: () => a8,
	frontmatter: () => ad,
	getHeadings: () => id,
	url: () => l8
})
function id() {
	return [
		{ depth: 2, slug: 'jsx-like-expressions', text: 'JSX-like Expressions' },
		{ depth: 3, slug: 'variables', text: 'Variables' },
		{ depth: 3, slug: 'dynamic-attributes', text: 'Dynamic Attributes' },
		{ depth: 3, slug: 'dynamic-html', text: 'Dynamic HTML' },
		{ depth: 3, slug: 'dynamic-tags', text: 'Dynamic Tags' },
		{ depth: 3, slug: 'fragments', text: 'Fragments' },
		{
			depth: 3,
			slug: 'differences-between-astro-and-jsx',
			text: 'Differences between Astro and JSX'
		},
		{ depth: 4, slug: 'attributes', text: 'Attributes' },
		{ depth: 4, slug: 'multiple-elements', text: 'Multiple Elements' },
		{ depth: 4, slug: 'comments', text: 'Comments' }
	]
}
function ld(n) {
	let e = {
		a: 'a',
		code: 'code',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		li: 'li',
		p: 'p',
		pre: 'pre',
		span: 'span',
		strong: 'strong',
		ul: 'ul',
		...n.components
	}
	return t(F, {
		children: [
			t(e.p, {
				children: t(e.strong, {
					children: 'If you know HTML, you already know enough to write your first Astro component.'
				})
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. The syntax was ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'designed to feel familiar to anyone with experience writing HTML or JSX'
					}),
					', and adds support for including components and JavaScript expressions.'
				]
			}),
			`
`,
			t(e.h2, { id: 'jsx-like-expressions', children: 'JSX-like Expressions' }),
			`
`,
			t(e.p, {
				children: [
					'You can define local JavaScript variables inside of the frontmatter component script between the two code fences (',
					t(e.code, { children: '---' }),
					') of an Astro component. You can then inject these variables into the component\u2019s HTML template using JSX-like expressions!'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					`:::note[dynamic vs reactive]\r
Using this approach, you can include `,
					t(e.strong, { children: 'dynamic' }),
					' values that are calculated in the frontmatter. But once included, these values are not ',
					t(e.strong, { children: 'reactive' }),
					' and will never change. Astro components are templates that only run once, during the rendering step.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'See below for more examples of ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'differences between Astro and JSX'
					}),
					`.\r
:::`
				]
			}),
			`
`,
			t(e.h3, { id: 'variables', children: 'Variables' }),
			`
`,
			t(e.p, {
				children: 'Local variables can be added into the HTML using the curly braces syntax:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' }),
								t(e.span, { style: { color: '#BABED8' }, children: '!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '	<!-- Outputs <h1>Hello Astro!</h1> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-attributes', children: 'Dynamic Attributes' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in curly braces to pass attribute values to both HTML elements and components:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Attribute expressions are supported'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'MyComponent' }),
								t(e.span, {
									style: { color: '#C792EA' },
									children: ' templateLiteralNameAttribute'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '`' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'MyNameIs' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '${' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}`' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can\u2019t assign an event handler to an HTML element in an Astro component:`
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// dont-do-this.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: "<!-- \u274C This doesn't work! \u274C -->"
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' onClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Nothing will happen when you click me!'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// do-this-instead.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' id' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Click Me' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: '	function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '		console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '	}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	document' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'getElementById' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'addEventListener' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'click' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' handleClick)' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: ':::' }),
			`
`,
			t(e.h3, { id: 'dynamic-html', children: 'Dynamic HTML' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' items ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' [' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Dog' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Cat' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Platypus' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ']' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'items' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'map' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '(' }),
								t(e.span, { style: { color: '#BABED8', fontStyle: 'italic' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ')' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' =>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Astro can conditionally display HTML using JSX logical operators and ternary expressions.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#FF9CAC' }, children: ' true' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '&&' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '?' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' :' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Else show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-tags', children: 'Dynamic Tags' }),
			`
`,
			t(e.p, {
				children:
					'You can also use dynamic tags by setting a variable to an HTML tag name or a component import:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'import' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent ' }),
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'from' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: './MyComponent.astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Element ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Component ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <div>Hello!</div> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Component' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <MyComponent /> -->'
							})
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: 'When using dynamic tags:' }),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Variable names must be capitalized.' }),
							' For example, use ',
							t(e.code, { children: 'Element' }),
							', not ',
							t(e.code, { children: 'element' }),
							'. Otherwise, Astro will try to render your variable name as a literal HTML tag.'
						]
					}),
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Hydration directives are not supported.' }),
							' When using ',
							t(e.a, {
								href: '/en/core-concepts/framework-components/#hydrating-interactive-components',
								children: [t(e.code, { children: 'client:*' }), ' hydration directives']
							}),
							', Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.h3, { id: 'fragments', children: 'Fragments' }),
			`
`,
			t(e.p, {
				children: [
					'Astro supports using either ',
					t(e.code, { children: '<Fragment> </Fragment>' }),
					' or the shorthand ',
					t(e.code, { children: '<> </>' }),
					'.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'Fragments can be useful to avoid wrapper elements when adding ',
					t(e.a, {
						href: '/en/reference/directives-reference/#sethtml',
						children: [t(e.code, { children: 'set:*' }), ' directives']
					}),
					', as in the following example:'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' htmlString ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: '<p>Raw HTML content</p>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Fragment' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' set:html' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'htmlString' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, {
				id: 'differences-between-astro-and-jsx',
				children: 'Differences between Astro and JSX'
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between ',
					t(e.code, { children: '.astro' }),
					' files and JSX.'
				]
			}),
			`
`,
			t(e.h4, { id: 'attributes', children: 'Attributes' }),
			`
`,
			t(e.p, {
				children: [
					'In Astro, you use the standard ',
					t(e.code, { children: 'kebab-case' }),
					' format for all HTML attributes instead of the ',
					t(e.code, { children: 'camelCase' }),
					' used in JSX. This even works for ',
					t(e.code, { children: 'class' }),
					', which is not supported by React.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' className' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' dataValue' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' data-value' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'multiple-elements', children: 'Multiple Elements' }),
			`
`,
			t(e.p, {
				children: [
					'An Astro component template can render multiple elements with no need to wrap everything in a single ',
					t(e.code, { children: '<div>' }),
					' or ',
					t(e.code, { children: '<>' }),
					', unlike JavaScript or JSX.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// Template with multiple elements'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'No need to wrap elements in a single containing element.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Astro supports multiple root elements in a template.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'comments', children: 'Comments' }),
			`
`,
			t(e.p, {
				children: 'In Astro, you can use standard HTML comments or JavaScript-style comments.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '<!-- HTML comment syntax is valid in .astro files -->'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '/* JS comment syntax is also valid */'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\r
:::`
			})
		]
	})
}
function cd(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(ld, { ...n }) }) : ld(n)
}
var ad,
	o8,
	l8,
	a8,
	Zn,
	pd = m(() => {
		'use strict'
		W()
		J()
		V()
		ad = {
			heroImage: '../../assets/images/te.jpg',
			category: 'Misc Ramblings',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dia',
			pubDate: '2022-07-02T04:00:00.000Z',
			draft: !0,
			tags: ['JavaScript', 'css', 'HTML5', 'GitHub'],
			title: 'Astro Components'
		}
		o8 = !0
		b(id, 'astro:jsx')
		b(cd, 'astro:jsx')
		;(l8 = 'src/content/blog/astro%20copy%203.mdx'),
			(a8 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 3.mdx'),
			(Zn = (n = {}) =>
				cd({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Zn[Symbol.for('mdx-component')] = !0
		Zn[Symbol.for('astro.needsHeadRendering')] = !ad.layout
		Zn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 3.mdx'
	})
var hd = {}
f(hd, { default: () => h8 })
async function i8() {
	return Promise.resolve().then(() => (pd(), dd))
}
var c8,
	d8,
	p8,
	h8,
	ud = m(() => {
		'use strict'
		;(c8 = []),
			(d8 = []),
			(p8 = []),
			(h8 = {
				__astroPropagation: !0,
				getMod: i8,
				collectedLinks: c8,
				collectedStyles: d8,
				collectedScripts: p8
			})
	})
var gd = {}
f(gd, {
	Content: () => Yn,
	__usesAstroImage: () => u8,
	default: () => Yn,
	file: () => y8,
	frontmatter: () => yd,
	getHeadings: () => Dd,
	url: () => m8
})
function Dd() {
	return [
		{ depth: 2, slug: 'jsx-like-expressions', text: 'JSX-like Expressions' },
		{ depth: 3, slug: 'variables', text: 'Variables' },
		{ depth: 3, slug: 'dynamic-attributes', text: 'Dynamic Attributes' },
		{ depth: 3, slug: 'dynamic-html', text: 'Dynamic HTML' },
		{ depth: 3, slug: 'dynamic-tags', text: 'Dynamic Tags' },
		{ depth: 3, slug: 'fragments', text: 'Fragments' },
		{
			depth: 3,
			slug: 'differences-between-astro-and-jsx',
			text: 'Differences between Astro and JSX'
		},
		{ depth: 4, slug: 'attributes', text: 'Attributes' },
		{ depth: 4, slug: 'multiple-elements', text: 'Multiple Elements' },
		{ depth: 4, slug: 'comments', text: 'Comments' }
	]
}
function md(n) {
	let e = {
		a: 'a',
		code: 'code',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		li: 'li',
		p: 'p',
		pre: 'pre',
		span: 'span',
		strong: 'strong',
		ul: 'ul',
		...n.components
	}
	return t(F, {
		children: [
			t(e.p, {
				children: t(e.strong, {
					children: 'If you know HTML, you already know enough to write your first Astro component.'
				})
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. The syntax was ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'designed to feel familiar to anyone with experience writing HTML or JSX'
					}),
					', and adds support for including components and JavaScript expressions.'
				]
			}),
			`
`,
			t(e.h2, { id: 'jsx-like-expressions', children: 'JSX-like Expressions' }),
			`
`,
			t(e.p, {
				children: [
					'You can define local JavaScript variables inside of the frontmatter component script between the two code fences (',
					t(e.code, { children: '---' }),
					') of an Astro component. You can then inject these variables into the component\u2019s HTML template using JSX-like expressions!'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					`:::note[dynamic vs reactive]\r
Using this approach, you can include `,
					t(e.strong, { children: 'dynamic' }),
					' values that are calculated in the frontmatter. But once included, these values are not ',
					t(e.strong, { children: 'reactive' }),
					' and will never change. Astro components are templates that only run once, during the rendering step.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'See below for more examples of ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'differences between Astro and JSX'
					}),
					`.\r
:::`
				]
			}),
			`
`,
			t(e.h3, { id: 'variables', children: 'Variables' }),
			`
`,
			t(e.p, {
				children: 'Local variables can be added into the HTML using the curly braces syntax:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' }),
								t(e.span, { style: { color: '#BABED8' }, children: '!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '	<!-- Outputs <h1>Hello Astro!</h1> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-attributes', children: 'Dynamic Attributes' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in curly braces to pass attribute values to both HTML elements and components:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Attribute expressions are supported'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'MyComponent' }),
								t(e.span, {
									style: { color: '#C792EA' },
									children: ' templateLiteralNameAttribute'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '`' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'MyNameIs' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '${' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}`' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can\u2019t assign an event handler to an HTML element in an Astro component:`
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// dont-do-this.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: "<!-- \u274C This doesn't work! \u274C -->"
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' onClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Nothing will happen when you click me!'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// do-this-instead.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' id' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Click Me' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: '	function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '		console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '	}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	document' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'getElementById' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'addEventListener' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'click' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' handleClick)' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: ':::' }),
			`
`,
			t(e.h3, { id: 'dynamic-html', children: 'Dynamic HTML' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' items ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' [' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Dog' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Cat' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Platypus' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ']' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'items' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'map' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '(' }),
								t(e.span, { style: { color: '#BABED8', fontStyle: 'italic' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ')' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' =>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Astro can conditionally display HTML using JSX logical operators and ternary expressions.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#FF9CAC' }, children: ' true' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '&&' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '?' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' :' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Else show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-tags', children: 'Dynamic Tags' }),
			`
`,
			t(e.p, {
				children:
					'You can also use dynamic tags by setting a variable to an HTML tag name or a component import:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'import' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent ' }),
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'from' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: './MyComponent.astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Element ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Component ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <div>Hello!</div> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Component' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <MyComponent /> -->'
							})
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: 'When using dynamic tags:' }),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Variable names must be capitalized.' }),
							' For example, use ',
							t(e.code, { children: 'Element' }),
							', not ',
							t(e.code, { children: 'element' }),
							'. Otherwise, Astro will try to render your variable name as a literal HTML tag.'
						]
					}),
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Hydration directives are not supported.' }),
							' When using ',
							t(e.a, {
								href: '/en/core-concepts/framework-components/#hydrating-interactive-components',
								children: [t(e.code, { children: 'client:*' }), ' hydration directives']
							}),
							', Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.h3, { id: 'fragments', children: 'Fragments' }),
			`
`,
			t(e.p, {
				children: [
					'Astro supports using either ',
					t(e.code, { children: '<Fragment> </Fragment>' }),
					' or the shorthand ',
					t(e.code, { children: '<> </>' }),
					'.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'Fragments can be useful to avoid wrapper elements when adding ',
					t(e.a, {
						href: '/en/reference/directives-reference/#sethtml',
						children: [t(e.code, { children: 'set:*' }), ' directives']
					}),
					', as in the following example:'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' htmlString ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: '<p>Raw HTML content</p>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Fragment' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' set:html' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'htmlString' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, {
				id: 'differences-between-astro-and-jsx',
				children: 'Differences between Astro and JSX'
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between ',
					t(e.code, { children: '.astro' }),
					' files and JSX.'
				]
			}),
			`
`,
			t(e.h4, { id: 'attributes', children: 'Attributes' }),
			`
`,
			t(e.p, {
				children: [
					'In Astro, you use the standard ',
					t(e.code, { children: 'kebab-case' }),
					' format for all HTML attributes instead of the ',
					t(e.code, { children: 'camelCase' }),
					' used in JSX. This even works for ',
					t(e.code, { children: 'class' }),
					', which is not supported by React.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' className' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' dataValue' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' data-value' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'multiple-elements', children: 'Multiple Elements' }),
			`
`,
			t(e.p, {
				children: [
					'An Astro component template can render multiple elements with no need to wrap everything in a single ',
					t(e.code, { children: '<div>' }),
					' or ',
					t(e.code, { children: '<>' }),
					', unlike JavaScript or JSX.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// Template with multiple elements'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'No need to wrap elements in a single containing element.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Astro supports multiple root elements in a template.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'comments', children: 'Comments' }),
			`
`,
			t(e.p, {
				children: 'In Astro, you can use standard HTML comments or JavaScript-style comments.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '<!-- HTML comment syntax is valid in .astro files -->'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '/* JS comment syntax is also valid */'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\r
:::`
			})
		]
	})
}
function fd(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(md, { ...n }) }) : md(n)
}
var yd,
	u8,
	m8,
	y8,
	Yn,
	Fd = m(() => {
		'use strict'
		W()
		J()
		V()
		yd = {
			heroImage: '../../assets/images/banner.jpg',
			category: 'Misc Ramblings',
			description:
				'Astro components are HTML templates with superpowers. They are a superset of HTML, with support for including components and JavaScript expressions.',
			pubDate: '2022-07-02T04:00:00.000Z',
			draft: !0,
			tags: ['JavaScript', 'css', 'HTML5', 'GitHub', 'Ordenador'],
			title: 'Components'
		}
		u8 = !0
		b(Dd, 'astro:jsx')
		b(fd, 'astro:jsx')
		;(m8 = 'src/content/blog/astro%20copy%204.mdx'),
			(y8 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 4.mdx'),
			(Yn = (n = {}) =>
				fd({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Yn[Symbol.for('mdx-component')] = !0
		Yn[Symbol.for('astro.needsHeadRendering')] = !yd.layout
		Yn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 4.mdx'
	})
var bd = {}
f(bd, { default: () => b8 })
async function D8() {
	return Promise.resolve().then(() => (Fd(), gd))
}
var f8,
	g8,
	F8,
	b8,
	wd = m(() => {
		'use strict'
		;(f8 = []),
			(g8 = []),
			(F8 = []),
			(b8 = {
				__astroPropagation: !0,
				getMod: D8,
				collectedLinks: f8,
				collectedStyles: g8,
				collectedScripts: F8
			})
	})
var Sd = {}
f(Sd, {
	Content: () => Kn,
	__usesAstroImage: () => w8,
	default: () => Kn,
	file: () => E8,
	frontmatter: () => Ed,
	getHeadings: () => Cd,
	url: () => v8
})
function Cd() {
	return [
		{ depth: 2, slug: 'jsx-like-expressions', text: 'JSX-like Expressions' },
		{ depth: 3, slug: 'variables', text: 'Variables' },
		{ depth: 3, slug: 'dynamic-attributes', text: 'Dynamic Attributes' },
		{ depth: 3, slug: 'dynamic-html', text: 'Dynamic HTML' },
		{ depth: 3, slug: 'dynamic-tags', text: 'Dynamic Tags' },
		{ depth: 3, slug: 'fragments', text: 'Fragments' },
		{
			depth: 3,
			slug: 'differences-between-astro-and-jsx',
			text: 'Differences between Astro and JSX'
		},
		{ depth: 4, slug: 'attributes', text: 'Attributes' },
		{ depth: 4, slug: 'multiple-elements', text: 'Multiple Elements' },
		{ depth: 4, slug: 'comments', text: 'Comments' }
	]
}
function vd(n) {
	let e = {
		a: 'a',
		code: 'code',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		li: 'li',
		p: 'p',
		pre: 'pre',
		span: 'span',
		strong: 'strong',
		ul: 'ul',
		...n.components
	}
	return t(F, {
		children: [
			t(e.p, {
				children: t(e.strong, {
					children: 'If you know HTML, you already know enough to write your first Astro component.'
				})
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. The syntax was ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'designed to feel familiar to anyone with experience writing HTML or JSX'
					}),
					', and adds support for including components and JavaScript expressions.'
				]
			}),
			`
`,
			t(e.h2, { id: 'jsx-like-expressions', children: 'JSX-like Expressions' }),
			`
`,
			t(e.p, {
				children: [
					'You can define local JavaScript variables inside of the frontmatter component script between the two code fences (',
					t(e.code, { children: '---' }),
					') of an Astro component. You can then inject these variables into the component\u2019s HTML template using JSX-like expressions!'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					`:::note[dynamic vs reactive]\r
Using this approach, you can include `,
					t(e.strong, { children: 'dynamic' }),
					' values that are calculated in the frontmatter. But once included, these values are not ',
					t(e.strong, { children: 'reactive' }),
					' and will never change. Astro components are templates that only run once, during the rendering step.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'See below for more examples of ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'differences between Astro and JSX'
					}),
					`.\r
:::`
				]
			}),
			`
`,
			t(e.h3, { id: 'variables', children: 'Variables' }),
			`
`,
			t(e.p, {
				children: 'Local variables can be added into the HTML using the curly braces syntax:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' }),
								t(e.span, { style: { color: '#BABED8' }, children: '!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '	<!-- Outputs <h1>Hello Astro!</h1> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-attributes', children: 'Dynamic Attributes' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in curly braces to pass attribute values to both HTML elements and components:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Attribute expressions are supported'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'MyComponent' }),
								t(e.span, {
									style: { color: '#C792EA' },
									children: ' templateLiteralNameAttribute'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '`' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'MyNameIs' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '${' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}`' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can\u2019t assign an event handler to an HTML element in an Astro component:`
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// dont-do-this.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: "<!-- \u274C This doesn't work! \u274C -->"
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' onClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Nothing will happen when you click me!'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// do-this-instead.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' id' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Click Me' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: '	function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '		console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '	}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	document' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'getElementById' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'addEventListener' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'click' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' handleClick)' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: ':::' }),
			`
`,
			t(e.h3, { id: 'dynamic-html', children: 'Dynamic HTML' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' items ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' [' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Dog' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Cat' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Platypus' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ']' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'items' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'map' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '(' }),
								t(e.span, { style: { color: '#BABED8', fontStyle: 'italic' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ')' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' =>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Astro can conditionally display HTML using JSX logical operators and ternary expressions.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#FF9CAC' }, children: ' true' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '&&' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '?' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' :' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Else show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-tags', children: 'Dynamic Tags' }),
			`
`,
			t(e.p, {
				children:
					'You can also use dynamic tags by setting a variable to an HTML tag name or a component import:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'import' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent ' }),
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'from' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: './MyComponent.astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Element ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Component ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <div>Hello!</div> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Component' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <MyComponent /> -->'
							})
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: 'When using dynamic tags:' }),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Variable names must be capitalized.' }),
							' For example, use ',
							t(e.code, { children: 'Element' }),
							', not ',
							t(e.code, { children: 'element' }),
							'. Otherwise, Astro will try to render your variable name as a literal HTML tag.'
						]
					}),
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Hydration directives are not supported.' }),
							' When using ',
							t(e.a, {
								href: '/en/core-concepts/framework-components/#hydrating-interactive-components',
								children: [t(e.code, { children: 'client:*' }), ' hydration directives']
							}),
							', Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.h3, { id: 'fragments', children: 'Fragments' }),
			`
`,
			t(e.p, {
				children: [
					'Astro supports using either ',
					t(e.code, { children: '<Fragment> </Fragment>' }),
					' or the shorthand ',
					t(e.code, { children: '<> </>' }),
					'.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'Fragments can be useful to avoid wrapper elements when adding ',
					t(e.a, {
						href: '/en/reference/directives-reference/#sethtml',
						children: [t(e.code, { children: 'set:*' }), ' directives']
					}),
					', as in the following example:'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' htmlString ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: '<p>Raw HTML content</p>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Fragment' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' set:html' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'htmlString' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, {
				id: 'differences-between-astro-and-jsx',
				children: 'Differences between Astro and JSX'
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between ',
					t(e.code, { children: '.astro' }),
					' files and JSX.'
				]
			}),
			`
`,
			t(e.h4, { id: 'attributes', children: 'Attributes' }),
			`
`,
			t(e.p, {
				children: [
					'In Astro, you use the standard ',
					t(e.code, { children: 'kebab-case' }),
					' format for all HTML attributes instead of the ',
					t(e.code, { children: 'camelCase' }),
					' used in JSX. This even works for ',
					t(e.code, { children: 'class' }),
					', which is not supported by React.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' className' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' dataValue' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' data-value' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'multiple-elements', children: 'Multiple Elements' }),
			`
`,
			t(e.p, {
				children: [
					'An Astro component template can render multiple elements with no need to wrap everything in a single ',
					t(e.code, { children: '<div>' }),
					' or ',
					t(e.code, { children: '<>' }),
					', unlike JavaScript or JSX.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// Template with multiple elements'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'No need to wrap elements in a single containing element.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Astro supports multiple root elements in a template.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'comments', children: 'Comments' }),
			`
`,
			t(e.p, {
				children: 'In Astro, you can use standard HTML comments or JavaScript-style comments.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '<!-- HTML comment syntax is valid in .astro files -->'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '/* JS comment syntax is also valid */'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\r
:::`
			})
		]
	})
}
function xd(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(vd, { ...n }) }) : vd(n)
}
var Ed,
	w8,
	v8,
	E8,
	Kn,
	Ad = m(() => {
		'use strict'
		W()
		J()
		V()
		Ed = {
			heroImage: '../../assets/images/placeholder-about.jpg',
			category: 'Misc Ramblings',
			description: 'TypeScript2 description here 2',
			pubDate: '2022-07-02T04:00:00.000Z',
			draft: !0,
			tags: ['JavaScript', 'css', 'HTML5', 'GitHub'],
			title: 'TypeScript2'
		}
		w8 = !0
		b(Cd, 'astro:jsx')
		b(xd, 'astro:jsx')
		;(v8 = 'src/content/blog/astro.mdx'),
			(E8 = 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro.mdx'),
			(Kn = (n = {}) =>
				xd({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Kn[Symbol.for('mdx-component')] = !0
		Kn[Symbol.for('astro.needsHeadRendering')] = !Ed.layout
		Kn.moduleId = 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro.mdx'
	})
var kd = {}
f(kd, { default: () => k8 })
async function C8() {
	return Promise.resolve().then(() => (Ad(), Sd))
}
var x8,
	S8,
	A8,
	k8,
	Bd = m(() => {
		'use strict'
		;(x8 = []),
			(S8 = []),
			(A8 = []),
			(k8 = {
				__astroPropagation: !0,
				getMod: C8,
				collectedLinks: x8,
				collectedStyles: S8,
				collectedScripts: A8
			})
	})
var Id = {}
f(Id, {
	Content: () => Qn,
	__usesAstroImage: () => B8,
	default: () => Qn,
	file: () => T8,
	frontmatter: () => Td,
	getHeadings: () => Pd,
	url: () => _8
})
function Pd() {
	return [
		{ depth: 2, slug: 'jsx-like-expressions', text: 'JSX-like Expressions' },
		{ depth: 3, slug: 'variables', text: 'Variables' },
		{ depth: 3, slug: 'dynamic-attributes', text: 'Dynamic Attributes' }
	]
}
function _d(n) {
	let e = {
		a: 'a',
		code: 'code',
		h2: 'h2',
		h3: 'h3',
		p: 'p',
		pre: 'pre',
		span: 'span',
		strong: 'strong',
		...n.components
	}
	return t(F, {
		children: [
			t(e.p, {
				children: t(e.strong, {
					children: 'If you know HTML, you already know enough to write your first Astro component.'
				})
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. The syntax was ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'designed to feel familiar to anyone with experience writing HTML or JSX'
					}),
					', and adds support for including components and JavaScript expressions.'
				]
			}),
			`
`,
			t(e.h2, { id: 'jsx-like-expressions', children: 'JSX-like Expressions' }),
			`
`,
			t(e.p, {
				children: [
					'You can define local JavaScript variables inside of the frontmatter component script between the two code fences (',
					t(e.code, { children: '---' }),
					') of an Astro component. You can then inject these variables into the component\u2019s HTML template using JSX-like expressions!'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					`:::note[dynamic vs reactive]\r
Using this approach, you can include `,
					t(e.strong, { children: 'dynamic' }),
					' values that are calculated in the frontmatter. But once included, these values are not ',
					t(e.strong, { children: 'reactive' }),
					' and will never change. Astro components are templates that only run once, during the rendering step.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'See below for more examples of ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'differences between Astro and JSX'
					}),
					`.\r
:::`
				]
			}),
			`
`,
			t(e.h3, { id: 'variables', children: 'Variables' }),
			`
`,
			t(e.p, {
				children: 'Local variables can be added into the HTML using the curly braces syntax:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' }),
								t(e.span, { style: { color: '#BABED8' }, children: '!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '	<!-- Outputs <h1>Hello Astro!</h1> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-attributes', children: 'Dynamic Attributes' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in curly braces to pass attribute values to both HTML elements and components:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Attribute expressions are supported'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'MyComponent' }),
								t(e.span, {
									style: { color: '#C792EA' },
									children: ' templateLiteralNameAttribute'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '`' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'MyNameIs' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '${' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}`' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can\u2019t assign an event handler to an HTML element in an Astro component:`
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// dont-do-this.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: "<!-- \u274C This doesn't work! \u274C -->"
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' onClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Nothing will happen when you click me!'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// do-this-instead.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' id' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Click Me' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: '	function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '		console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '	}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	document' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'getElementById' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'addEventListener' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'click' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' handleClick)' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			})
		]
	})
}
function Md(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(_d, { ...n }) }) : _d(n)
}
var Td,
	B8,
	_8,
	T8,
	Qn,
	jd = m(() => {
		'use strict'
		W()
		J()
		V()
		Td = {
			heroImage: '../../assets/images/placeholder-hero.jpg',
			category: 'Misc Ramblings',
			description: 'Learn how to create your first Astro component.',
			pubDate: '2022-07-02T04:00:00.000Z',
			draft: !0,
			tags: ['JavaScript', 'css', 'HTML5', 'GitHub'],
			title: 'Tutorial: Create an Astro Component'
		}
		B8 = !0
		b(Pd, 'astro:jsx')
		b(Md, 'astro:jsx')
		;(_8 = 'src/content/blog/create-astro-component.mdx'),
			(T8 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/create-astro-component.mdx'),
			(Qn = (n = {}) =>
				Md({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		Qn[Symbol.for('mdx-component')] = !0
		Qn[Symbol.for('astro.needsHeadRendering')] = !Td.layout
		Qn.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/create-astro-component.mdx'
	})
var Ld = {}
f(Ld, { default: () => L8 })
async function P8() {
	return Promise.resolve().then(() => (jd(), Id))
}
var M8,
	I8,
	j8,
	L8,
	$d = m(() => {
		'use strict'
		;(M8 = []),
			(I8 = []),
			(j8 = []),
			(L8 = {
				__astroPropagation: !0,
				getMod: P8,
				collectedLinks: M8,
				collectedStyles: I8,
				collectedScripts: j8
			})
	})
var Hd = {}
f(Hd, {
	Content: () => er,
	__usesAstroImage: () => $8,
	default: () => er,
	file: () => R8,
	frontmatter: () => Rd,
	getHeadings: () => Ud,
	url: () => O8
})
function Ud() {
	return [
		{ depth: 4, slug: 'update-1232018', text: 'Update 1/23/2018:' },
		{ depth: 4, slug: 'update-132024', text: 'Update 1/3/2024:' }
	]
}
function Od(n) {
	let e = {
		code: 'code',
		h4: 'h4',
		li: 'li',
		ol: 'ol',
		p: 'p',
		pre: 'pre',
		span: 'span',
		...n.components
	}
	return t(F, {
		children: [
			t(e.p, {
				children:
					'Recently I was tasked with writing a profile to allow users to log in without needing a wired connection. The only posts I could find for doing this involve using the now inaccessible iPhone configurator, or reference snippets and images that are inaccessible.'
			}),
			`
`,
			t(e.p, {
				children: [
					'We solved this problem at my last job, and after an afternoon of beating my head against the wall trying to recreate it, I admitted defeat and reached out and asked for a sanitized copy of their profile, which I received the next morning. There are a few \u201Cgotchas\u201D in the profile I\u2019ve noted with the ',
					t(e.code, { children: '#' }),
					' character.'
				]
			}),
			`
`,
			t(e.ol, {
				children: [
					`
`,
					t(e.li, {
						children:
							'You need to have a Base64 copy of the SSL certificate for your RADIUS server. The certificate won\u2019t even install without it.'
					}),
					`
`,
					t(e.li, {
						children:
							'You need to have a friendly display name here, it will appear on the login screen in a drop down.'
					}),
					`
`,
					t(e.li, { children: 'The SSID of the network you wish them to connect to.' }),
					`
`
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'Those three changes should give you everything you be all you need to change to get it working, but you should probably provide reasonable identifiers and descriptions. You should make sure the WiFi is switched on, and that you install this as a system profile using Munki (or an MDM) or by using ',
					t(e.code, {
						children: 'sudo profiles -IF ./com.org.loginWindowWirelessProfile.mobileconfig'
					})
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<?' }),
								t(e.span, { style: { color: '#F07178' }, children: 'xml' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' version' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=\\' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '1.0\\' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' encoding' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=\\' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'UTF-8\\' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '?>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<!' }),
								t(e.span, { style: { color: '#F78C6C' }, children: 'DOCTYPE' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' plist' }),
								t(e.span, {
									style: { color: '#89DDFF' },
									children: ' PUBLIC "- Apple DTD PLIST 1.0 EN" '
								})
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#89DDFF' },
								children: '"http://www.apple.com/DTDs/PropertyList-1.0.dtd\\">'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'plist' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' version' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=\\' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '1.0\\' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadContent' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '        <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadContent' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'data' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#BABED8' },
								children:
									'                # The Base64 Encoded SSL Certificate for your radius server goes here. This is required.'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            </' }),
								t(e.span, { style: { color: '#F07178' }, children: 'data' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadEnabled' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'true' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadIdentifier' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'com.org.radiuscert' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'com.apple.security.root' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadUUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '368DD7D6-DB79-4339-96F8-AA37A5277EE9'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadVersion' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'updated_at_xid' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '270993' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '        </' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '        <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'AuthenticationMethod' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'directory' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'AutoJoin' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'true' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'EAPClientConfiguration' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'AcceptEAPTypes' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '25' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                </' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'OneTimeUserPassword' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'false' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'PayloadCertificateAnchorUUID'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'F8D886A8-7A0F-4062-88B2-BFB189047C66'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                </' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'SystemModeCredentialsSource' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'ActiveDirectory' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'UserName' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '></' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'UserPassword' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '></' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            </' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'EncryptionType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'WPA2' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'HIDDEN_NETWORK' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'false' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Interface' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'BuiltInWireless' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadDisplayName' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '#This displays on the login window'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadEnabled' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'true' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadIdentifier' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'com.org.loginWindowWirelessConfig'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'com.apple.wifi.managed' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadUUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '39762509-B0BE-4152-AE94-C143DAB56DA6'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadVersion' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'ProxyType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'None' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'SSID_STR' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '#yourSSIDHere' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'SetupModes' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '                <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Loginwindow' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '            </' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '        </' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    </' }),
								t(e.span, { style: { color: '#F07178' }, children: 'array' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadDisplayName' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'WiFi Settings' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadIdentifier' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'com.org.loginWindowWirelessProfile'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadOrganization' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '#Your org name here' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadRemovalDisallowed' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'true' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '/>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadScope' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'LoginWindow' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadType' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Configuration' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadUUID' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: '2F8A16E8-513A-493B-AD61-0CB8A0B2DE23'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'string' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'PayloadVersion' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'key' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '    <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: '1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'integer' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'dict' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'plist' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, { class: 'line' })
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'update-1232018', children: 'Update 1/23/2018:' }),
			`
`,
			t(e.p, {
				children: [
					'As a note to myself: If I forget what a base64 encoded certificate is again and it\u2019s an emergency again, this profile specifically wants the bits in a PEM certificate that are between ',
					t(e.code, { children: '-----BEGIN CERTIFICATE-----' }),
					' and ',
					t(e.code, { children: '-----END CERTIFICATE-----' })
				]
			}),
			`
`,
			t(e.h4, { id: 'update-132024', children: 'Update 1/3/2024:' }),
			`
`,
			t(e.p, {
				children:
					'I\u2019m not sure Munki does profile installation anymore. macOS fell off my radar and was looking at this post while moving to Astro'
			})
		]
	})
}
function Nd(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Od, { ...n }) }) : Od(n)
}
var Rd,
	$8,
	O8,
	R8,
	er,
	zd = m(() => {
		'use strict'
		W()
		J()
		V()
		Rd = {
			heroImage: '/src/assets/images/Untitled.png',
			category: 'macOS',
			description: 'macOS Login Window WiFi Profile',
			pubDate: '2017-08-03T04:00:00.000Z',
			tags: ['certificates', '802.1x'],
			title: 'macOS Login Window WiFi Profile'
		}
		$8 = !0
		b(Ud, 'astro:jsx')
		b(Nd, 'astro:jsx')
		;(O8 = 'src/content/blog/macOS-Login-Window-WiFi-Profile.mdx'),
			(R8 =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx'),
			(er = (n = {}) =>
				Nd({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		er[Symbol.for('mdx-component')] = !0
		er[Symbol.for('astro.needsHeadRendering')] = !Rd.layout
		er.moduleId =
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx'
	})
var Wd = {}
f(Wd, { default: () => W8 })
async function U8() {
	return Promise.resolve().then(() => (zd(), Hd))
}
var N8,
	H8,
	z8,
	W8,
	Gd = m(() => {
		'use strict'
		;(N8 = []),
			(H8 = []),
			(z8 = []),
			(W8 = {
				__astroPropagation: !0,
				getMod: U8,
				collectedLinks: N8,
				collectedStyles: H8,
				collectedScripts: z8
			})
	})
var Zd = {}
f(Zd, {
	Content: () => tr,
	__usesAstroImage: () => G8,
	default: () => tr,
	file: () => X8,
	frontmatter: () => Xd,
	getHeadings: () => Jd,
	url: () => V8
})
function Jd() {
	return [
		{ depth: 2, slug: 'jsx-like-expressions', text: 'JSX-like Expressions' },
		{ depth: 3, slug: 'variables', text: 'Variables' },
		{ depth: 3, slug: 'dynamic-attributes', text: 'Dynamic Attributes' },
		{ depth: 3, slug: 'dynamic-html', text: 'Dynamic HTML' },
		{ depth: 3, slug: 'dynamic-tags', text: 'Dynamic Tags' },
		{ depth: 3, slug: 'fragments', text: 'Fragments' },
		{
			depth: 3,
			slug: 'differences-between-astro-and-jsx',
			text: 'Differences between Astro and JSX'
		},
		{ depth: 4, slug: 'attributes', text: 'Attributes' },
		{ depth: 4, slug: 'multiple-elements', text: 'Multiple Elements' },
		{ depth: 4, slug: 'comments', text: 'Comments' }
	]
}
function Vd(n) {
	let e = {
		a: 'a',
		code: 'code',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		li: 'li',
		p: 'p',
		pre: 'pre',
		span: 'span',
		strong: 'strong',
		ul: 'ul',
		...n.components
	}
	return t(F, {
		children: [
			t(e.p, {
				children: t(e.strong, {
					children: 'If you know HTML, you already know enough to write your first Astro component.'
				})
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. The syntax was ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'designed to feel familiar to anyone with experience writing HTML or JSX'
					}),
					', and adds support for including components and JavaScript expressions.'
				]
			}),
			`
`,
			t(e.h2, { id: 'jsx-like-expressions', children: 'JSX-like Expressions' }),
			`
`,
			t(e.p, {
				children: [
					'You can define local JavaScript variables inside of the frontmatter component script between the two code fences (',
					t(e.code, { children: '---' }),
					') of an Astro component. You can then inject these variables into the component\u2019s HTML template using JSX-like expressions!'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					`:::note[dynamic vs reactive]\r
Using this approach, you can include `,
					t(e.strong, { children: 'dynamic' }),
					' values that are calculated in the frontmatter. But once included, these values are not ',
					t(e.strong, { children: 'reactive' }),
					' and will never change. Astro components are templates that only run once, during the rendering step.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'See below for more examples of ',
					t(e.a, {
						href: '#differences-between-astro-and-jsx',
						children: 'differences between Astro and JSX'
					}),
					`.\r
:::`
				]
			}),
			`
`,
			t(e.h3, { id: 'variables', children: 'Variables' }),
			`
`,
			t(e.p, {
				children: 'Local variables can be added into the HTML using the curly braces syntax:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' }),
								t(e.span, { style: { color: '#BABED8' }, children: '!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '	<!-- Outputs <h1>Hello Astro!</h1> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-attributes', children: 'Dynamic Attributes' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in curly braces to pass attribute values to both HTML elements and components:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' name ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Attribute expressions are supported'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'h1' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'MyComponent' }),
								t(e.span, {
									style: { color: '#C792EA' },
									children: ' templateLiteralNameAttribute'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '`' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'MyNameIs' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '${' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'name' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}`' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\r
For example, you can\u2019t assign an event handler to an HTML element in an Astro component:`
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// dont-do-this.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: "<!-- \u274C This doesn't work! \u274C -->"
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' onClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Nothing will happen when you click me!'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// do-this-instead.astro'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' id' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Click Me' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: '	function' }),
								t(e.span, { style: { color: '#82AAFF' }, children: ' handleClick' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '()' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' {' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '		console' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'log' }),
								t(e.span, { style: { color: '#F07178' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button clicked!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#F07178' }, children: ')' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, { style: { color: '#89DDFF' }, children: '	}' })
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#BABED8' }, children: '	document' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'getElementById' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'button' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'addEventListener' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'click' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' handleClick)' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'script' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: ':::' }),
			`
`,
			t(e.h3, { id: 'dynamic-html', children: 'Dynamic HTML' }),
			`
`,
			t(e.p, {
				children:
					'Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' items ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' [' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Dog' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Cat' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#89DDFF' }, children: ',' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'Platypus' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" }),
								t(e.span, { style: { color: '#BABED8' }, children: ']' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '	{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'items' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '.' }),
								t(e.span, { style: { color: '#82AAFF' }, children: 'map' }),
								t(e.span, { style: { color: '#BABED8' }, children: '(' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '(' }),
								t(e.span, { style: { color: '#BABED8', fontStyle: 'italic' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ')' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' =>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'item' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'li' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: ')' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'ul' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children:
					'Astro can conditionally display HTML using JSX logical operators and ternary expressions.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#FF9CAC' }, children: ' true' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '&&' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'visible ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '?' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' :' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' <' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Else show me!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, { id: 'dynamic-tags', children: 'Dynamic Tags' }),
			`
`,
			t(e.p, {
				children:
					'You can also use dynamic tags by setting a variable to an HTML tag name or a component import:'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'import' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent ' }),
								t(e.span, { style: { color: '#89DDFF', fontStyle: 'italic' }, children: 'from' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: './MyComponent.astro' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Element ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'div' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' Component ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' MyComponent' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'Hello!' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Element' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <div>Hello!</div> -->'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Component' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '<!-- renders as <MyComponent /> -->'
							})
						})
					]
				})
			}),
			`
`,
			t(e.p, { children: 'When using dynamic tags:' }),
			`
`,
			t(e.ul, {
				children: [
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Variable names must be capitalized.' }),
							' For example, use ',
							t(e.code, { children: 'Element' }),
							', not ',
							t(e.code, { children: 'element' }),
							'. Otherwise, Astro will try to render your variable name as a literal HTML tag.'
						]
					}),
					`
`,
					t(e.li, {
						children: [
							t(e.strong, { children: 'Hydration directives are not supported.' }),
							' When using ',
							t(e.a, {
								href: '/en/core-concepts/framework-components/#hydrating-interactive-components',
								children: [t(e.code, { children: 'client:*' }), ' hydration directives']
							}),
							', Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.'
						]
					}),
					`
`
				]
			}),
			`
`,
			t(e.h3, { id: 'fragments', children: 'Fragments' }),
			`
`,
			t(e.p, {
				children: [
					'Astro supports using either ',
					t(e.code, { children: '<Fragment> </Fragment>' }),
					' or the shorthand ',
					t(e.code, { children: '<> </>' }),
					'.'
				]
			}),
			`
`,
			t(e.p, {
				children: [
					'Fragments can be useful to avoid wrapper elements when adding ',
					t(e.a, {
						href: '/en/reference/directives-reference/#sethtml',
						children: [t(e.code, { children: 'set:*' }), ' directives']
					}),
					', as in the following example:'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#C792EA' }, children: 'const' }),
								t(e.span, { style: { color: '#BABED8' }, children: ' htmlString ' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: " '" }),
								t(e.span, { style: { color: '#C3E88D' }, children: '<p>Raw HTML content</p>' }),
								t(e.span, { style: { color: '#89DDFF' }, children: "'" })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#FFCB6B' }, children: 'Fragment' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' set:html' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '={' }),
								t(e.span, { style: { color: '#BABED8' }, children: 'htmlString' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '} />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h3, {
				id: 'differences-between-astro-and-jsx',
				children: 'Differences between Astro and JSX'
			}),
			`
`,
			t(e.p, {
				children: [
					'Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between ',
					t(e.code, { children: '.astro' }),
					' files and JSX.'
				]
			}),
			`
`,
			t(e.h4, { id: 'attributes', children: 'Attributes' }),
			`
`,
			t(e.p, {
				children: [
					'In Astro, you use the standard ',
					t(e.code, { children: 'kebab-case' }),
					' format for all HTML attributes instead of the ',
					t(e.code, { children: 'camelCase' }),
					' used in JSX. This even works for ',
					t(e.code, { children: 'class' }),
					', which is not supported by React.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' className' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' dataValue' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'div' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' class' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: 'box' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C792EA' }, children: ' data-value' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '=' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#C3E88D' }, children: '3' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '"' }),
								t(e.span, { style: { color: '#89DDFF' }, children: ' />' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'multiple-elements', children: 'Multiple Elements' }),
			`
`,
			t(e.p, {
				children: [
					'An Astro component template can render multiple elements with no need to wrap everything in a single ',
					t(e.code, { children: '<div>' }),
					' or ',
					t(e.code, { children: '<>' }),
					', unlike JavaScript or JSX.'
				]
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '// Template with multiple elements'
							})
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'No need to wrap elements in a single containing element.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						}),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, { style: { color: '#89DDFF' }, children: '<' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' }),
								t(e.span, {
									style: { color: '#BABED8' },
									children: 'Astro supports multiple root elements in a template.'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '</' }),
								t(e.span, { style: { color: '#F07178' }, children: 'p' }),
								t(e.span, { style: { color: '#89DDFF' }, children: '>' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.h4, { id: 'comments', children: 'Comments' }),
			`
`,
			t(e.p, {
				children: 'In Astro, you can use standard HTML comments or JavaScript-style comments.'
			}),
			`
`,
			t(e.pre, {
				class: 'astro-code material-theme-palenight',
				style: {
					backgroundColor: '#292D3E',
					color: '#babed8',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
					wordWrap: 'break-word'
				},
				tabindex: '0',
				children: t(e.code, {
					children: [
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: t(e.span, {
								style: { color: '#676E95', fontStyle: 'italic' },
								children: '---'
							})
						}),
						`
`,
						t(e.span, { class: 'line' }),
						`
`,
						t(e.span, {
							class: 'line',
							children: [
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '<!-- HTML comment syntax is valid in .astro files -->'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '{' }),
								t(e.span, {
									style: { color: '#676E95', fontStyle: 'italic' },
									children: '/* JS comment syntax is also valid */'
								}),
								t(e.span, { style: { color: '#89DDFF' }, children: '}' })
							]
						})
					]
				})
			}),
			`
`,
			t(e.p, {
				children: `:::caution\r
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\r
:::`
			})
		]
	})
}
function qd(n = {}) {
	let { wrapper: e } = n.components || {}
	return e ? t(e, { ...n, children: t(Vd, { ...n }) }) : Vd(n)
}
var Xd,
	G8,
	V8,
	X8,
	tr,
	Yd = m(() => {
		'use strict'
		W()
		J()
		V()
		Xd = {
			heroImage: '../../assets/images/book.jpg',
			category: 'macOS',
			description:
				'The new MacBook Pro 2022 is here. With the Apple M2 chip, a new design, and more, the new MacBook Pro is the best laptop Apple has ever made.',
			pubDate: '2022-07-02T04:00:00.000Z',
			draft: !0,
			tags: ['PC'],
			title: 'MacBook'
		}
		G8 = !0
		b(Jd, 'astro:jsx')
		b(qd, 'astro:jsx')
		;(V8 = 'src/content/blog/macbook.mdx'),
			(X8 = 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macbook.mdx'),
			(tr = (n = {}) =>
				qd({
					...n,
					components: { Fragment: F, ...n.components, 'astro-image': n.components?.img ?? T }
				}))
		tr[Symbol.for('mdx-component')] = !0
		tr[Symbol.for('astro.needsHeadRendering')] = !Xd.layout
		tr.moduleId = 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macbook.mdx'
	})
var Kd = {}
f(Kd, { default: () => K8 })
async function J8() {
	return Promise.resolve().then(() => (Yd(), Zd))
}
var q8,
	Z8,
	Y8,
	K8,
	Qd = m(() => {
		'use strict'
		;(q8 = []),
			(Z8 = []),
			(Y8 = []),
			(K8 = {
				__astroPropagation: !0,
				getMod: J8,
				collectedLinks: q8,
				collectedStyles: Z8,
				collectedScripts: Y8
			})
	})
var Np = {}
f(Np, {
	$: () => T,
	_: () => rv,
	a: () => Vt,
	b: () => dt,
	c: () => it,
	d: () => ue,
	e: () => Be,
	f: () => nr,
	g: () => lr,
	h: () => ar,
	i: () => kt,
	j: () => gs,
	k: () => ct,
	s: () => Gt,
	u: () => rr
})
async function nr() {
	if (!globalThis?.astroAsset?.imageService) {
		let { default: n } = await Promise.resolve()
			.then(() => (Tn(), Bl))
			.then((e) => e.n)
			.catch((e) => {
				let r = new k(Bo)
				throw ((r.cause = e), r)
			})
		return (
			globalThis.astroAsset || (globalThis.astroAsset = {}),
			(globalThis.astroAsset.imageService = n),
			n
		)
	}
	return globalThis.astroAsset.imageService
}
async function Q8(n, e) {
	if (!n || typeof n != 'object') throw new k({ ...Kr, message: Kr.message(JSON.stringify(n)) })
	if (typeof n.src > 'u')
		throw new k({ ...St, message: St.message(n.src, 'undefined', JSON.stringify(n)) })
	let r = await nr(),
		s = {
			...n,
			src:
				typeof n.src == 'object' && 'then' in n.src ? (await n.src).default ?? (await n.src) : n.src
		},
		o = Ne(s.src) ? s.src.clone ?? s.src : s.src
	s.src = o
	let l = r.validateOptions ? await r.validateOptions(s, e) : s,
		a = r.getSrcSet ? await r.getSrcSet(l, e) : [],
		i = await r.getURL(l, e),
		c = await Promise.all(
			a.map(async (p) => ({
				transform: p.transform,
				url: await r.getURL(p.transform, e),
				descriptor: p.descriptor,
				attributes: p.attributes
			}))
		)
	if (ms(r) && globalThis.astroAsset.addStaticImage && !(us(l.src) && i === l.src)) {
		let p = r.propertiesToHash ?? Bn
		;(i = globalThis.astroAsset.addStaticImage(l, p)),
			(c = a.map((d) => ({
				transform: d.transform,
				url: globalThis.astroAsset.addStaticImage(d.transform, p),
				descriptor: d.descriptor,
				attributes: d.attributes
			})))
	}
	return {
		rawOptions: s,
		options: l,
		src: i,
		srcSet: { values: c, attribute: c.map((p) => `${p.url} ${p.descriptor}`).join(', ') },
		attributes: r.getHTMLAttributes !== void 0 ? await r.getHTMLAttributes(l, e) : {}
	}
}
function Gt(n) {
	return n.replace(/\s+/g, '-')
}
function rr(n) {
	return n.replace(/-/g, ' ')
}
function it(...n) {
	return El(Lt(n))
}
function sr({ globResult: n, contentDir: e }) {
	let r = {}
	for (let s in n) {
		let l = s.replace(new RegExp(`^${e}`), '').split('/')
		if (l.length <= 1) continue
		let a = l[0]
		;(r[a] ??= {}), (r[a][s] = n[s])
	}
	return r
}
function rw({
	contentCollectionToEntryMap: n,
	dataCollectionToEntryMap: e,
	getRenderEntryImport: r
}) {
	return async function (o, l) {
		let a
		if (o in n) a = 'content'
		else if (o in e) a = 'data'
		else {
			console.warn(
				`The collection **${o}** does not exist or is empty. Ensure a collection directory with this name exists.`
			)
			return
		}
		let i = Object.values(a === 'content' ? n[o] : e[o]),
			c = []
		return (
			!Object.assign(
				{
					BASE_URL: '/',
					MODE: 'production',
					DEV: !1,
					PROD: !0,
					SSR: !0,
					SITE: 'https://astro.buzzell.io',
					ASSETS_PREFIX: void 0
				},
				{ Path: process.env.Path }
			)?.DEV && ys.has(o)
				? (c = [...ys.get(o)])
				: ((c = await Promise.all(
						i.map(async (p) => {
							let d = await p()
							return a === 'content'
								? {
										id: d.id,
										slug: d.slug,
										body: d.body,
										collection: d.collection,
										data: d.data,
										async render() {
											return sw({
												collection: d.collection,
												id: d.id,
												renderEntryImport: await r(o, d.slug)
											})
										}
									}
								: { id: d.id, collection: d.collection, data: d.data }
						})
					)),
					ys.set(o, c)),
			typeof l == 'function' ? c.filter(l) : c
		)
	}
}
async function sw({ collection: n, id: e, renderEntryImport: r }) {
	let s = new k({
		...Mo,
		message: `Unexpected error while rendering ${String(n)} \u2192 ${String(e)}.`
	})
	if (typeof r != 'function') throw s
	let o = await r()
	if (o == null || typeof o != 'object') throw s
	let { default: l } = o
	if (ow(l)) {
		let { collectedStyles: a, collectedLinks: i, collectedScripts: c, getMod: p } = l
		if (typeof p != 'function') throw s
		let d = await p()
		if (d == null || typeof d != 'object') throw s
		return {
			Content: A({
				factory(u, g, E) {
					let C = '',
						v = '',
						N = ''
					Array.isArray(a) && (C = a.map((ee) => cs(u, { type: 'inline', content: ee })).join('')),
						Array.isArray(i) &&
							(v = i.map((ee) => cs(u, { type: 'external', src: nt(ee) })).join('')),
						Array.isArray(c) && (N = c.map((ee) => el(ee)).join(''))
					let M = g
					return (
						e.endsWith('mdx') && (M = { components: d.components ?? {}, ...g }),
						Wo(xt(C + v + N), D`${S(u, 'Content', d.Content, M, E)}`)
					)
				},
				propagation: 'self'
			}),
			headings: d.getHeadings?.() ?? [],
			remarkPluginFrontmatter: d.frontmatter ?? {}
		}
	} else {
		if (o.Content && typeof o.Content == 'function')
			return {
				Content: o.Content,
				headings: o.getHeadings?.() ?? [],
				remarkPluginFrontmatter: o.frontmatter ?? {}
			}
		throw s
	}
}
function ow(n) {
	return typeof n == 'object' && n != null && '__astroPropagation' in n
}
function iw(n) {
	return async (e, r) => {
		let s = dp[e]?.entries[r]
		if (s) return n[e][s]
	}
}
async function ev() {
	return (await dt()).map((e) => ({ params: { slug: e.slug }, props: e }))
}
var ew,
	T,
	tw,
	nw,
	kt,
	Ds,
	ys,
	or,
	ip,
	lw,
	cp,
	aw,
	dp,
	cw,
	dw,
	ct,
	lr,
	dt,
	ar,
	gs,
	pw,
	Vt,
	ue,
	hw,
	pp,
	uw,
	hp,
	mw,
	fs,
	yw,
	up,
	Dw,
	Fs,
	fw,
	mp,
	gw,
	yp,
	Fw,
	Dp,
	bw,
	fp,
	ww,
	gp,
	vw,
	Fp,
	Ew,
	bp,
	ep,
	Cw,
	xw,
	tp,
	Sw,
	wp,
	Aw,
	vp,
	kw,
	Ep,
	np,
	Bw,
	_w,
	rp,
	Tw,
	Cp,
	sp,
	Pw,
	Mw,
	op,
	Iw,
	xp,
	jw,
	Sp,
	Lw,
	Ap,
	$w,
	Be,
	Ow,
	kp,
	Rw,
	Bp,
	Uw,
	_p,
	Nw,
	Tp,
	Hw,
	Pp,
	zw,
	Mp,
	Ww,
	Ip,
	Gw,
	jp,
	Vw,
	Lp,
	Xw,
	$p,
	Jw,
	Op,
	Rp,
	lp,
	qw,
	Zw,
	ap,
	Yw,
	Kw,
	Qw,
	Up,
	tv,
	nv,
	rv,
	J = m(() => {
		'use strict'
		vt()
		Sn()
		V()
		W()
		je()
		Cl()
		Tn()
		;(ew = B('https://astro.buzzell.io')),
			(T = A(
				async (n, e, r) => {
					let s = n.createAstro(ew, e, r)
					s.self = T
					let o = s.props
					if (o.alt === void 0 || o.alt === null) throw new k(qr)
					typeof o.width == 'string' && (o.width = parseInt(o.width)),
						typeof o.height == 'string' && (o.height = parseInt(o.height))
					let l = await Ds(o),
						a = {}
					return (
						l.srcSet.values.length > 0 && (a.srcset = l.srcSet.attribute),
						D`${L()}<img${_(l.src, 'src')}${Ee(a)}${Ee(l.attributes)}>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/node_modules/.pnpm/astro@4.0.8_typescript@5.3.3/node_modules/astro/components/Image.astro',
				void 0
			)),
			(tw = B('https://astro.buzzell.io')),
			(nw = A(
				async (n, e, r) => {
					let s = n.createAstro(tw, e, r)
					s.self = nw
					let o = ['webp'],
						l = 'png',
						a = ['gif', 'svg', 'jpg', 'jpeg'],
						{ formats: i = o, pictureAttributes: c = {}, fallbackFormat: p, ...d } = s.props
					if (d.alt === void 0 || d.alt === null) throw new k(qr)
					let h = await Promise.all(
							i.map(
								async (v) => await Ds({ ...d, format: v, widths: d.widths, densities: d.densities })
							)
						),
						u = p ?? l
					!p && Ne(d.src) && a.includes(d.src.format) && (u = d.src.format)
					let g = await Ds({ ...d, format: u, widths: d.widths, densities: d.densities }),
						E = {},
						C = {}
					return (
						d.sizes && (C.sizes = d.sizes),
						g.srcSet.values.length > 0 && (E.srcset = g.srcSet.attribute),
						D`${L()}<picture${Ee(c)}> ${Object.entries(h).map(([v, N]) => {
							let M =
								d.densities || (!d.densities && !d.widths)
									? `${N.src}${N.srcSet.values.length > 0 ? ', ' + N.srcSet.attribute : ''}`
									: N.srcSet.attribute
							return D`<source${_(M, 'srcset')}${_('image/' + N.options.format, 'type')}${Ee(C)}>`
						})} <img${_(g.src, 'src')}${Ee(E)}${Ee(g.attributes)}> </picture>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/node_modules/.pnpm/astro@4.0.8_typescript@5.3.3/node_modules/astro/components/Picture.astro',
				void 0
			)),
			(kt = {
				service: { entrypoint: 'astro/assets/services/noop', config: {} },
				domains: [],
				remotePatterns: []
			})
		new URL('file:///C:/Users/altod/OneDrive/Documents/Projects/SSG%20Blog/dist/')
		Ds = async (n) => await Q8(n, kt)
		ys = new Map()
		;(or = '/src/content/'),
			(ip = Object.assign({
				'/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx': () =>
					Promise.resolve().then(() => (Tl(), _l)),
				'/src/content/blog/CodeClimate-in-GitLab-CI.mdx': () =>
					Promise.resolve().then(() => (Ml(), Pl)),
				'/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx':
					() => Promise.resolve().then(() => (jl(), Il)),
				'/src/content/blog/Cylance-Deployment-on-macOS.mdx': () =>
					Promise.resolve().then(() => ($l(), Ll)),
				'/src/content/blog/Fedora-25-in-iPXE-.mdx': () => Promise.resolve().then(() => (Rl(), Ol)),
				'/src/content/blog/Fedora-25-in-pxe.mdx': () => Promise.resolve().then(() => (Nl(), Ul)),
				'/src/content/blog/Jamf-DEP-workflow.mdx': () => Promise.resolve().then(() => (zl(), Hl)),
				'/src/content/blog/My-experience-replacing-a-modem.mdx': () =>
					Promise.resolve().then(() => (Gl(), Wl)),
				'/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx': () =>
					Promise.resolve().then(() => (Xl(), Vl)),
				'/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx': () =>
					Promise.resolve().then(() => (ql(), Jl)),
				'/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx': () =>
					Promise.resolve().then(() => (Yl(), Zl)),
				'/src/content/blog/The-87-United-States.mdx': () =>
					Promise.resolve().then(() => (Ql(), Kl)),
				'/src/content/blog/Useful-Links.mdx': () => Promise.resolve().then(() => (ta(), ea)),
				'/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx': () =>
					Promise.resolve().then(() => (ra(), na)),
				'/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx': () =>
					Promise.resolve().then(() => (oa(), sa)),
				'/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx': () =>
					Promise.resolve().then(() => (aa(), la)),
				'/src/content/blog/What-is-DEP.mdx': () => Promise.resolve().then(() => (ca(), ia)),
				'/src/content/blog/astro copy 2.mdx': () => Promise.resolve().then(() => (pa(), da)),
				'/src/content/blog/astro copy 3.mdx': () => Promise.resolve().then(() => (ua(), ha)),
				'/src/content/blog/astro copy 4.mdx': () => Promise.resolve().then(() => (ya(), ma)),
				'/src/content/blog/astro.mdx': () => Promise.resolve().then(() => (fa(), Da)),
				'/src/content/blog/create-astro-component.mdx': () =>
					Promise.resolve().then(() => (Fa(), ga)),
				'/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx': () =>
					Promise.resolve().then(() => (wa(), ba)),
				'/src/content/blog/macbook.mdx': () => Promise.resolve().then(() => (Ea(), va))
			})),
			(lw = sr({ globResult: ip, contentDir: or })),
			(cp = Object.assign({})),
			(aw = sr({ globResult: cp, contentDir: or }))
		sr({ globResult: { ...ip, ...cp }, contentDir: or })
		dp = {}
		dp = {
			blog: {
				type: 'content',
				entries: {
					'a-slightly-hidden-limitation-of-hybrid-cloud-trust':
						'/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx',
					'astro-copy-3': '/src/content/blog/astro copy 3.mdx',
					astro: '/src/content/blog/astro.mdx',
					'codeclimate-in-gitlab-ci': '/src/content/blog/CodeClimate-in-GitLab-CI.mdx',
					'astro-copy-2': '/src/content/blog/astro copy 2.mdx',
					'creating-a-scep-service-for-munki-using-micromdms-scep-project':
						'/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx',
					'astro-copy-4': '/src/content/blog/astro copy 4.mdx',
					'create-astro-component': '/src/content/blog/create-astro-component.mdx',
					'cylance-deployment-on-macos': '/src/content/blog/Cylance-Deployment-on-macOS.mdx',
					'fedora-25-in-ipxe-': '/src/content/blog/Fedora-25-in-iPXE-.mdx',
					macbook: '/src/content/blog/macbook.mdx',
					'fedora-25-in-pxe': '/src/content/blog/Fedora-25-in-pxe.mdx',
					'jamf-dep-workflow': '/src/content/blog/Jamf-DEP-workflow.mdx',
					'my-experience-replacing-a-modem':
						'/src/content/blog/My-experience-replacing-a-modem.mdx',
					'secure-ssd-erase-options-for-apple-and-windows':
						'/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx',
					'macos-login-window-wifi-profile':
						'/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx',
					'terminal-tricks-handy-shortcuts':
						'/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx',
					'the-87-united-states': '/src/content/blog/The-87-United-States.mdx',
					'useful-links': '/src/content/blog/Useful-Links.mdx',
					'ssso-to-adfs-with-hybrid-cloud-trust-and-intune':
						'/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx',
					'using-ad-cs-for-machine-based-eap-tls-on-macos':
						'/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx',
					'vim-tricks-increment-or-decrement-numbers':
						'/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx',
					'vim-tricks-visual-block-mode': '/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx',
					'what-is-dep': '/src/content/blog/What-is-DEP.mdx'
				}
			}
		}
		;(cw = Object.assign({
			'/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx': () =>
				Promise.resolve().then(() => (Ta(), _a)),
			'/src/content/blog/CodeClimate-in-GitLab-CI.mdx': () =>
				Promise.resolve().then(() => (Ra(), Oa)),
			'/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx': () =>
				Promise.resolve().then(() => (Xa(), Va)),
			'/src/content/blog/Cylance-Deployment-on-macOS.mdx': () =>
				Promise.resolve().then(() => (ti(), ei)),
			'/src/content/blog/Fedora-25-in-iPXE-.mdx': () => Promise.resolve().then(() => (ci(), ii)),
			'/src/content/blog/Fedora-25-in-pxe.mdx': () => Promise.resolve().then(() => (fi(), Di)),
			'/src/content/blog/Jamf-DEP-workflow.mdx': () => Promise.resolve().then(() => (xi(), Ci)),
			'/src/content/blog/My-experience-replacing-a-modem.mdx': () =>
				Promise.resolve().then(() => (Mi(), Pi)),
			'/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx': () =>
				Promise.resolve().then(() => (Ni(), Ui)),
			'/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx': () =>
				Promise.resolve().then(() => (qi(), Ji)),
			'/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx': () =>
				Promise.resolve().then(() => (rc(), nc)),
			'/src/content/blog/The-87-United-States.mdx': () => Promise.resolve().then(() => (pc(), dc)),
			'/src/content/blog/Useful-Links.mdx': () => Promise.resolve().then(() => (Fc(), gc)),
			'/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx': () =>
				Promise.resolve().then(() => (Ac(), Sc)),
			'/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx': () =>
				Promise.resolve().then(() => (jc(), Ic)),
			'/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx': () =>
				Promise.resolve().then(() => (zc(), Hc)),
			'/src/content/blog/What-is-DEP.mdx': () => Promise.resolve().then(() => (Yc(), Zc)),
			'/src/content/blog/astro copy 2.mdx': () => Promise.resolve().then(() => (od(), sd)),
			'/src/content/blog/astro copy 3.mdx': () => Promise.resolve().then(() => (ud(), hd)),
			'/src/content/blog/astro copy 4.mdx': () => Promise.resolve().then(() => (wd(), bd)),
			'/src/content/blog/astro.mdx': () => Promise.resolve().then(() => (Bd(), kd)),
			'/src/content/blog/create-astro-component.mdx': () =>
				Promise.resolve().then(() => ($d(), Ld)),
			'/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx': () =>
				Promise.resolve().then(() => (Gd(), Wd)),
			'/src/content/blog/macbook.mdx': () => Promise.resolve().then(() => (Qd(), Kd))
		})),
			(dw = sr({ globResult: cw, contentDir: or })),
			(ct = rw({
				contentCollectionToEntryMap: lw,
				dataCollectionToEntryMap: aw,
				getRenderEntryImport: iw(dw)
			})),
			(lr = async () => {
				let n = await ct('blog'),
					e = new Set(n.map((r) => r.data.category))
				return Array.from(e)
			}),
			(dt = async (n) =>
				(await ct('blog'))
					.filter((e) => !e.data.draft)
					.sort((e, r) => r.data.pubDate.valueOf() - e.data.pubDate.valueOf())
					.slice(0, n)),
			(ar = async () => {
				let n = await ct('blog'),
					e = new Set()
				return (
					n.forEach((r) => {
						r.data.tags.forEach((s) => {
							e.add(s.toLowerCase())
						})
					}),
					Array.from(e)
				)
			}),
			(gs = async (n) => {
				let e = await dt(),
					r = n.toLowerCase()
				return e.filter((s) => s.data.tags.some((o) => o.toLowerCase() === r))
			}),
			(pw = B('https://astro.buzzell.io')),
			(Vt = A(
				async (n, e, r) => {
					let s = n.createAstro(pw, e, r)
					s.self = Vt
					let { date: o } = s.props
					return D`${L()}<time class="text-sm font-bold text-opacity-60"${_(
						o.toISOString(),
						'datetime'
					)}> ${o.toLocaleDateString('en-us', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})} </time>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/FormattedDate.astro',
				void 0
			)),
			(ue = {
				author: 'Ryan Buzzell',
				title: 'The Occasional Buzz',
				description: 'Documenation for me that you might find useful',
				lang: 'en-US',
				ogLocale: 'en_US',
				shareMessage: 'Share this post',
				paginationSize: 6
			}),
			(hw = B('https://astro.buzzell.io')),
			(pp = A(
				async (n, e, r) => {
					let s = n.createAstro(hw, e, r)
					s.self = pp
					let { fallback: o = 'animate' } = s.props
					return D`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${_(
						o,
						'content'
					)}>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/node_modules/.pnpm/astro@4.0.8_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro',
				void 0
			)),
			(uw = B('https://astro.buzzell.io')),
			(hp = A(
				async (n, e, r) => {
					let s = n.createAstro(uw, e, r)
					s.self = hp
					let { title: o, description: l = ue.description, ogImage: a, articleDate: i } = s.props,
						c = new URL(s.url.pathname, s.site),
						p = new URL(a || '/open-graph.png', s.url).href,
						h = `${o} \u2022 ${ue.title}`
					return D`<!-- ViewTransitions  -->${S(
						n,
						'ViewTransitions',
						pp,
						{}
					)} <!-- Global Metadata --> <meta charset="utf-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <link rel="icon" type="image/svg+xml" href="/favicon.svg"> <meta name="generator"${_(
						s.generator,
						'content'
					)}> <!-- Canonical URL --> <link rel="canonical"${_(
						c,
						'href'
					)}> <!-- Primary Meta Tags --> <title>${h}

<!-- SEO -->
<meta name="title"${_(h, 'content')}>
<meta name="description"${_(l, 'content')}>
<meta name="author"${_(ue.author, 'content')}>

<!-- Open Graph / Facebook -->
<meta property="og:type"${_(i ? 'article' : 'website', 'content')}>
<meta property="og:url"${_(s.url, 'content')}>
<meta property="og:title"${_(o, 'content')}>
<meta property="og:description"${_(l, 'content')}>
<meta property="og:image"${_(p, 'content')}>
${
	i &&
	D`${S(
		n,
		'Fragment',
		F,
		{},
		{
			default: (u) => D`
			<meta property="article:author"${_(ue.author, 'content')}>
			<meta property="article:published_time"${_(i, 'content')}>
		`
		}
	)}`
}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${_(s.url, 'content')}>
<meta property="twitter:title"${_(o, 'content')}>
<meta property="twitter:description"${_(l, 'content')}>
<meta property="twitter:image"${_(p, 'content')}>

<!-- RSS auto-discovery -->
<link rel="alternate" type="application/rss+xml"${_(ue.title, 'title')} href="/rss.xml"></title>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/BaseHead.astro',
				void 0
			)),
			(mw = B('https://astro.buzzell.io')),
			(fs = A(
				async (n, e, r) => {
					let s = n.createAstro(mw, e, r)
					s.self = fs
					let { href: o, class: l, ...a } = s.props,
						{ pathname: i } = s.url,
						c = o === i || o === i.replace(/\/$/, '')
					return D`${L()}<a${_(o, 'href')}${_(
						it(c ? 'text-opacity-100' : 'text-opacity-60', l),
						'class'
					)} rel="noopener noreferrer "${Ee(a)}> ${ve(n, r.default)} </a>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/HeaderLink.astro',
				void 0
			)),
			(yw = B('https://astro.buzzell.io')),
			(up = A(
				async (n, e, r) => {
					let s = n.createAstro(yw, e, r)
					return (
						(s.self = up),
						D`${L()}<svg xmlns="http://www.w3.org/2000/svg" class="w-8 md:w-6" viewBox="0 0 24 24" stroke-width="1.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path> </svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/GithubIcon.astro',
				void 0
			)),
			(Dw = B('https://astro.buzzell.io')),
			(Fs = A(
				async (n, e, r) => {
					let s = n.createAstro(Dw, e, r)
					return (
						(s.self = Fs),
						D`${L()}<svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z" fill="#007BB5"></path><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"></rect><path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"></path><circle cx="9" cy="8" fill="#FFFFFF" r="2"></circle></g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/linkedinIcon.astro',
				void 0
			)),
			(fw = B('https://astro.buzzell.io')),
			(mp = A(
				async (n, e, r) => {
					let s = n.createAstro(fw, e, r)
					return (
						(s.self = mp),
						D`${L()}<svg viewBox="0 0 16 16" aria-hidden="true" class="w-8 md:w-6" stroke-width="1.3" stroke="none" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"></path></svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/MastodonIcon.astro',
				void 0
			)),
			(gw = B('https://astro.buzzell.io')),
			(yp = A(
				async (n, e, r) => {
					let s = n.createAstro(gw, e, r)
					return (
						(s.self = yp),
						D`${L()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 6l16 0"></path> <path d="M4 12l16 0"></path> <path d="M4 18l16 0"></path> </svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/MenuIcon.astro',
				void 0
			)),
			(Fw = B('https://astro.buzzell.io')),
			(Dp = A(
				async (n, e, r) => {
					let s = n.createAstro(Fw, e, r)
					return (
						(s.self = Dp),
						D`${L()}<svg aria-label="search" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path stroke="none" d="M0 0h24v24H0z"></path> <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6"></path> </svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/SearchIcon.astro',
				void 0
			)),
			(bw = B('https://astro.buzzell.io')),
			(fp = A(
				async (n, e, r) => {
					let s = n.createAstro(bw, e, r)
					return (
						(s.self = fp),
						D`${S(
							n,
							'site-search',
							'site-search',
							{ id: 'search', class: 'ms-auto' },
							{
								default: () =>
									D` ${L()}<button data-open-modal disabled class="flex items-center justify-center rounded-md gap-1"> ${S(
										n,
										'SearchIcon',
										Dp,
										{}
									)} <!-- <span class='md:hidden text-2xl'> Search</span> --> </button> <dialog aria-label="search" class="h-full max-h-full w-full max-w-full border border-zinc-400 bg-white dark:bg-[#0a0910ec] shadow backdrop:backdrop-blur sm:mx-auto sm:mb-auto sm:mt-16 sm:h-max sm:max-h-[calc(100%-8rem)] sm:min-h-[15rem] sm:w-5/6 sm:max-w-[48rem] sm:rounded-md opacity-0"> <div class="dialog-frame flex flex-col gap-4 p-6 pt-12 sm:pt-6"> <button data-close-modal class="ms-auto cursor-pointer rounded-full bg-black text-white px-4 py-2 dark:bg-white dark:text-black">Close</button> ${D`<div class="search-container dark:text-white"> <div id="pagefind__search"></div> </div>`} </div> </dialog> `
							}
						)}  `
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Search.astro',
				void 0
			)),
			(ww = B('https://astro.buzzell.io')),
			(gp = A(
				async (n, e, r) => {
					let s = n.createAstro(ww, e, r)
					return (
						(s.self = gp),
						D`${L()}<svg xmlns="http://www.w3.org/2000/svg" class="w-8 md:w-6" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/TagIcon.astro',
				void 0
			)),
			(vw = B('https://astro.buzzell.io')),
			(Fp = A(
				async (n, e, r) => {
					let s = n.createAstro(vw, e, r)
					return (
						(s.self = Fp),
						D`${L()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path> <path d="M6.343 17.657l-1.414 1.414"></path> <path d="M6.343 6.343l-1.414 -1.414"></path> <path d="M17.657 6.343l1.414 -1.414"></path> <path d="M17.657 17.657l1.414 1.414"></path> <path d="M4 12h-2"></path> <path d="M12 4v-2"></path> <path d="M20 12h2"></path> <path d="M12 20v2"></path> </svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/SunIcon.astro',
				void 0
			)),
			(Ew = B('https://astro.buzzell.io')),
			(bp = A(
				async (n, e, r) => {
					let s = n.createAstro(Ew, e, r)
					return (
						(s.self = bp),
						D`${L()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/MoonIcon.astro',
				void 0
			)),
			(ep = Object.freeze),
			(Cw = Object.defineProperty),
			(xw = (n, e) => ep(Cw(n, 'raw', { value: ep(e || n.slice()) }))),
			(Sw = B('https://astro.buzzell.io')),
			(wp = A(
				async (n, e, r) => {
					let s = n.createAstro(Sw, e, r)
					return (
						(s.self = wp),
						D(
							tp ||
								(tp = xw([
									' ',
									` <script>
	const button = document.getElementById('toggle-theme')

	function setButtonPresssed() {
		const bodyThemeIsDark = document.documentElement.classList.contains('dark')
		button.setAttribute('aria-pressed', String(bodyThemeIsDark))
	}
	setButtonPresssed()
<\/script>`
								])),
							S(
								n,
								'theme-toggle',
								'theme-toggle',
								{ class: 'relative h-6 w-6' },
								{
									default: () =>
										D` ${L()}<button id="toggle-theme" class="group"> <span class="absolute left-0 right-0 top-0 opacity-0 group-aria-pressed:opacity-100"> ${S(
											n,
											'SunIcon',
											Fp,
											{}
										)} </span> <span class="absolute left-0 right-0 top-0 opacity-0 group-aria-[pressed=false]:opacity-100"> ${S(
											n,
											'MoonIcon',
											bp,
											{}
										)} </span> </button> `
								}
							)
						)
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ToggleTheme.astro',
				void 0
			)),
			(Aw = B('https://astro.buzzell.io')),
			(vp = A(
				async (n, e, r) => {
					let s = n.createAstro(Aw, e, r)
					s.self = vp
					let o = [
						{ name: 'Github', url: 'https://github.com/rbuzzell', icon: up },
						{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/rbuzzell/', icon: Fs },
						{ name: 'Mastodon', url: 'https://tech.lgbt/@buzzell', icon: mp }
					]
					return D`${L()}<header class="relative flex items-center h-12 font-semibold"> <a class="text-lg mr-auto" href="/">Home</a> <div id="astro-header-drawer" class="shadow rounded-l-lg md:bg-transparent dark:md:bg-transparent bg-white dark:bg-[#0a0910] md:shadow-none md:rounded-none md:border-none md:h-auto md:static absolute transition-transform duration-300 ease-in translate-x-96 md:translate-x-0 top-12 -right-5 pl-4 pt-6 pb-4 md:p-0 h-[200px] w-[200px] z-50"> <nav class="flex h-full flex-col justify-between gap-12 text-left md:flex-row md:w-full md:gap-5"> <div class="flex flex-col gap-4 md:flex-row md:border-r-2 border-black pr-4 dark:border-white"> ${S(
						n,
						'HeaderLink',
						fs,
						{ href: '/tags', class: 'flex items-center gap-1 text-2xl md:text-base' },
						{
							default: (l) => D` ${S(l, 'TagIcon', gp, {})} Tags
`
						}
					)} </div> <div class="flex justify-center items-center md:justify-end gap-3 md:p-0"> ${o.map(
						(l) =>
							D`${S(
								n,
								'HeaderLink',
								fs,
								{ class: '', href: l.url, target: '_blank', 'aria-label': l.name },
								{ default: (a) => D` <span>${D`${S(a, 'network.icon', l.icon, {})}`} </span> ` }
							)}`
					)} </div> </nav> </div> <div class="flex items-center gap-3 md:pl-3" data-astro-transition-persist="navbar"> <div> ${S(
						n,
						'Search',
						fp,
						{}
					)} </div> ${S(
						n,
						'ToggleTheme',
						wp,
						{}
					)} <button id="astro-header-drawer-button" type="button" class="md:ml-6 md:hidden"> ${S(
						n,
						'MenuIcon',
						yp,
						{}
					)} <span class="sr-only">Show Menu</span> </button> </div> </header> `
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Header.astro',
				'self'
			)),
			(kw = B('https://astro.buzzell.io')),
			(Ep = A(
				async (n, e, r) => {
					let s = n.createAstro(kw, e, r)
					s.self = Ep
					let o = new Date()
					return D`${L()}<footer class="flex justify-center items-center w-full px-16 h-28 border-t-2">
&copy; ${o.getFullYear()} Ryan Buzzell. All rights reserved.
</footer>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Footer.astro',
				void 0
			)),
			(np = Object.freeze),
			(Bw = Object.defineProperty),
			(_w = (n, e) => np(Bw(n, 'raw', { value: np(e || n.slice()) }))),
			(Tw = B('https://astro.buzzell.io')),
			(Cp = A(
				async (n, e, r) => {
					let s = n.createAstro(Tw, e, r)
					return (
						(s.self = Cp),
						D(
							rp ||
								(rp = _w([
									`<script>
	function getTheme() {
		const storedTheme = typeof localStorage !== 'undefined' && localStorage.getItem('theme')

		return (
			storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light')
		)
	}

	function setTheme(newTheme) {
		const html = document.documentElement
		const isDark = newTheme === 'dark'

		html.classList.toggle('dark', isDark)
		html.classList.toggle('light', !isDark)

		localStorage.setItem('theme', newTheme)
	}

	// set initial theme
	setTheme(getTheme())
	document.addEventListener('astro:after-swap', () => setTheme(getTheme()))

	document.addEventListener('theme-change', (e) => {
		setTheme(e.detail.theme)
	})
<\/script>`
								]))
						)
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ProviderTheme.astro',
				void 0
			)),
			(sp = Object.freeze),
			(Pw = Object.defineProperty),
			(Mw = (n, e) => sp(Pw(n, 'raw', { value: sp(e || n.slice()) }))),
			(Iw = B('https://astro.buzzell.io')),
			(xp = A(
				async (n, e, r) => {
					let s = n.createAstro(Iw, e, r)
					return (
						(s.self = xp),
						D(
							op ||
								(op = Mw([
									`<script>
	if (!('animations' in localStorage)) {
		localStorage.setItem('animations', 'true')
	} else {
		localStorage.setItem('animations', 'false')
	}
<\/script>`
								]))
						)
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ProviderAnimations.astro',
				void 0
			)),
			(jw = B('https://astro.buzzell.io')),
			(Sp = A(
				async (n, e, r) => {
					let s = n.createAstro(jw, e, r)
					return (s.self = Sp), D`${!1}`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/TwSizeIndicator.astro',
				void 0
			)),
			(Lw = B('https://astro.buzzell.io')),
			(Ap = A(
				async (n, e, r) => {
					let s = n.createAstro(Lw, e, r)
					return (s.self = Ap), D`${!1}`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/editBlog.astro',
				void 0
			)),
			($w = B('https://astro.buzzell.io')),
			(Be = A(
				async (n, e, r) => {
					let s = n.createAstro($w, e, r)
					s.self = Be
					let { title: o, description: l, image: a, articleDate: i } = s.props
					return D`<html lang="en" class="scroll-smooth" data-astro-cid-37fxchfa> <head>${S(
						n,
						'BaseHead',
						hp,
						{ title: o, description: l, ogImage: a, articleDate: i, 'data-astro-cid-37fxchfa': !0 }
					)}${S(n, 'ProviderTheme', Cp, { 'data-astro-cid-37fxchfa': !0 })}${S(
						n,
						'ProviderAnimations',
						xp,
						{ 'data-astro-cid-37fxchfa': !0 }
					)}${Vo()}</head> <body class="bg-white text-stone-950 dark:bg-[#0a0910] dark:text-white" data-astro-cid-37fxchfa> <main class="px-5 sm:mx-auto sm:max-w-2xl sm:px-8 lg:px-0 antialiased md:max-w-6xl grid gap-12 mt-4 overflow-hidden md:overflow-visible" data-astro-cid-37fxchfa> ${S(
						n,
						'Header',
						vp,
						{ 'data-astro-cid-37fxchfa': !0 }
					)} ${ve(n, r.default)} ${S(n, 'Footer', Ep, {
						'data-astro-cid-37fxchfa': !0
					})} </main> ${S(n, 'TwSizeIndicator', Sp, { 'data-astro-cid-37fxchfa': !0 })} ${S(
						n,
						'EditBlog',
						Ap,
						{ 'data-astro-cid-37fxchfa': !0 }
					)}  </body> </html>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/layouts/BaseLayout.astro',
				void 0
			)),
			(Ow = B('https://astro.buzzell.io')),
			(kp = A(
				async (n, e, r) => {
					let s = n.createAstro(Ow, e, r)
					s.self = kp
					let { tag: o } = s.props
					return D`${L()}<a${_(`/tags/${o.toLowerCase()}`, 'href')}${_(
						o,
						'aria-label'
					)}> <span class="bg-indigo-600 font-semibold text-white dark:bg-indigo-900 dark:text-white shadow text-sm w-fit px-2 py-1 md:px-5 md:py-2 rounded-full"> ${
						o ?? 'Blog Tag'
					} </span> </a>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Tag.astro',
				void 0
			)),
			(Rw = B('https://astro.buzzell.io')),
			(Bp = A(
				async (n, e, r) => {
					let s = n.createAstro(Rw, e, r)
					s.self = Bp
					let { data: o, readTime: l, headings: a, id: i } = s.props,
						{ title: c, description: p, pubDate: d, heroImage: h, tags: u } = o,
						g = d.toISOString()
					return D`${S(
						n,
						'BaseLayout',
						Be,
						{ title: c, description: p, image: h?.src, articleDate: g },
						{
							default: (
								E
							) => D` ${L()}<article class="min-w-full md:py-4 sm:max-w-none md:max-w-none"> <header class="mb-3 flex flex-col justify-center items-center gap-6"> <div class="flex flex-col gap-2"> <div class="flex items-center justify-center gap-x-1"> <p class="text-center text-sm text-opacity-50">
Published ${S(E, 'FormattedDate', Vt, {
								date: d
							})} </p> <p class="text-center text-sm text-opacity-50 font-bold">
- ${l} </p> </div> <h1 class="text-center text-4xl md:text-6xl md:pb-2.5 font-semibold"> ${c} </h1> </div> <div class="flex flex-wrap justify-center items-center gap-2 gap-y-4 md:gap-5"> ${u.map(
								(C) => D`${S(E, 'Tag', kp, { tag: C })}`
							)} </div> </header> ${S(
								E,
								'Fragment',
								F,
								{},
								{
									default: (C) =>
										D`${
											h &&
											D`${S(C, 'Image', T, {
												src: h,
												width: 1e3,
												height: 500,
												quality: 100,
												format: 'jpg',
												loading: 'eager',
												class:
													'rounded-md w-full max-h-[300px]  md:max-h-[500px] my-8 object-cover',
												alt: `img of ${c}`
											})}`
										}`
								}
							)} <hr> <div> ${ve(E, r.default)} </div> </article> `
						}
					)} `
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/layouts/BlogPost.astro',
				void 0
			)),
			(Uw = B('https://astro.buzzell.io')),
			(_p = A(
				async (n, e, r) => {
					let s = n.createAstro(Uw, e, r)
					return (
						(s.self = _p),
						D`${L()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path> <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path> </svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/CopyIcon.astro',
				void 0
			)),
			(Nw = B('https://astro.buzzell.io')),
			(Tp = A(
				async (n, e, r) => {
					let s = n.createAstro(Nw, e, r)
					return (
						(s.self = Tp),
						D`${L()}<svg class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/CheckIcon.astro',
				void 0
			)),
			(Hw = B('https://astro.buzzell.io')),
			(Pp = A(
				async (n, e, r) => {
					let s = n.createAstro(Hw, e, r)
					return (
						(s.self = Pp),
						D`${L()}<pre class="relative shadow-2xl bg-black code"><button aria-label="copy-button" class="copy-button absolute  z-20 top-2 right-2  rounded-md transition-all ease-in max-w-full max-h-fit hover:text-indigo-400">${S(
							n,
							'CopyIcon',
							_p,
							{}
						)}</button><span class="check-span absolute z-10 top-2 right-2  rounded-md transition-all ease-in opacity-0 text-green-300 max-w-full max-h-fit ">${S(
							n,
							'CheckIcon',
							Tp,
							{}
						)}</span>${ve(n, r.default)}</pre> `
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/mdx/Code.astro',
				void 0
			)),
			(zw = B('https://astro.buzzell.io')),
			(Mp = A(
				async (n, e, r) => {
					let s = n.createAstro(zw, e, r)
					s.self = Mp
					let { posts: o } = s.props
					return D`${L()}<section${_(
						it('flex flex-col md:flex-row sm:justify-between gap-8'),
						'class'
					)}> ${
						o.length > 0
							? o.map(
									(l) =>
										D`<div class="flex flex-wrap gap-2"> <div class="min-h-full"> ${S(
											n,
											'Image',
											T,
											{
												src: l.data.heroImage,
												width: 200,
												height: 200,
												format: 'webp',
												class: 'w-16 h-16 object-cover rounded-full  ',
												alt: `img of ${l.data.title}`
											}
										)} </div> <header class="flex justify-center items-center"> <a class="font-medium  hover:underline"${_(
											`/post/${l.slug}/`,
											'href'
										)}> ${l.data.title} </a> </header> </div>`
								)
							: D`<span class="text-gray-500">There are no related posts yet. 😢</span>`
					} </section>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ListRelatedPosts.astro',
				void 0
			)),
			(Ww = B('https://astro.buzzell.io')),
			(Ip = A(
				async (n, e, r) => {
					let s = n.createAstro(Ww, e, r)
					return (
						(s.self = Ip),
						D`<!--?xml version="1.0" ?-->${L()}<svg height="32px" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M448,512l-384,0c-35.328,0 -64,-28.672 -64,-64l0,-384c0,-35.328 28.672,-64 64,-64l384,0c35.328,0 64,28.672 64,64l0,384c0,35.328 -28.672,64 -64,64Z" id="Dark_Blue" style="fill:#1da1f2;fill-rule:nonzero;"></path><path d="M196.608,386.048c120.704,0 186.752,-100.096 186.752,-186.752c0,-2.816 0,-5.632 -0.128,-8.448c12.8,-9.216 23.936,-20.864 32.768,-34.048c-11.776,5.248 -24.448,8.704 -37.76,10.368c13.568,-8.064 23.936,-20.992 28.928,-36.352c-12.672,7.552 -26.752,12.928 -41.728,15.872c-12.032,-12.8 -29.056,-20.736 -47.872,-20.736c-36.224,0 -65.664,29.44 -65.664,65.664c0,5.12 0.64,10.112 1.664,14.976c-54.528,-2.688 -102.912,-28.928 -135.296,-68.608c-5.632,9.728 -8.832,20.992 -8.832,33.024c0,22.784 11.648,42.88 29.184,54.656c-10.752,-0.384 -20.864,-3.328 -29.696,-8.192l0,0.896c0,31.744 22.656,58.368 52.608,64.384c-5.504,1.536 -11.264,2.304 -17.28,2.304c-4.224,0 -8.32,-0.384 -12.288,-1.152c8.32,26.112 32.64,45.056 61.312,45.568c-22.528,17.664 -50.816,28.16 -81.536,28.16c-5.248,0 -10.496,-0.256 -15.616,-0.896c28.928,18.432 63.488,29.312 100.48,29.312" id="Logo__x2014__FIXED" style="fill:#fff;fill-rule:nonzero;"></path></g></svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/TwitterColorIcon.astro',
				void 0
			)),
			(Gw = B('https://astro.buzzell.io')),
			(jp = A(
				async (n, e, r) => {
					let s = n.createAstro(Gw, e, r)
					s.self = jp
					let o = ue.shareMessage,
						l = s.url.href
					return D`${L()}<div class="flex flex-col gap-2"> <span class="mb-1 font-bold text-2xl">Share</span> <ul class="flex gap-3 text-black dark:text-white"> <li> <a${_(
						`https://twitter.com/intent/tweet?text=${o + ' ' + l}`,
						'href'
					)} aria-label="Share on Twitter">${S(n, 'TwitterColorIcon', Ip, {})}</a> </li> <li> <a${_(
						`https://www.linkedin.com/shareArticle?mini=true&url=${l}`,
						'href'
					)} aria-label="Share on LinkedIn"> ${S(n, 'LinkedinIcon', Fs, {})}</a> </li> </ul> </div>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Share.astro',
				void 0
			)),
			(Vw = B('https://astro.buzzell.io')),
			(Lp = A(
				async (n, e, r) => {
					let s = n.createAstro(Vw, e, r)
					s.self = Lp
					let { heading: o } = s.props
					return D`${L()}<li class="flex flex-col"> <a${_('#' + o.slug, 'href')}${_(
						it(
							'bg-slate-200 dark:bg-slate-800 dark:hover:bg-indigo-400 hover:bg-indigo-300 hover:text-white  py-1 px-4 dark:text-white rounded-full mb-2 first-letter:uppercase w-fit line-clamp-2'
						),
						'class'
					)}> ${o.text} </a> ${
						o.subheadings.length > 0 &&
						D`<ul class="ml-3"> ${o.subheadings.map(
							(l) => D`${S(n, 'Astro.self', s.self, { heading: l })}`
						)} </ul>`
					} </li>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/TabletOfContentsHeading.astro',
				void 0
			)),
			(Xw = B('https://astro.buzzell.io')),
			($p = A(
				async (n, e, r) => {
					let s = n.createAstro(Xw, e, r)
					s.self = $p
					let { headings: o } = s.props,
						l = a(o)
					function a(i) {
						let c = [],
							p = new Map()
						return (
							i.forEach((d) => {
								let h = { ...d, subheadings: [] }
								p.set(h.depth, h),
									h.depth === 1 || h.depth === 2
										? c.push(h)
										: p.get(h.depth - 1).subheadings.push(h)
							}),
							c
						)
					}
					return D`${L()}<nav class="max-w-xs dark:text-black"> <h1 class="font-bold mb-3 text-2xl dark:text-white">Index</h1> <ul class="[text-wrap:balance] flex flex-col gap-1"> ${l.map(
						(i) => D`${S(n, 'TableOfContentsHeading', Lp, { heading: i })}`
					)} </ul> </nav>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/TableOfContents.astro',
				void 0
			)),
			(Jw = B('https://astro.buzzell.io')),
			(Op = A(
				async (n, e, r) => {
					let s = n.createAstro(Jw, e, r)
					s.self = Op
					let o = s.props
					return D`${L()}<button${Ee(o)} class="bg-purple-800 p-4 text-white rounded-full"> ${ve(
						n,
						r.default
					)} <!-- Be sure to add a \`<slot/>\` for child content! --> </button>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/mdx/SButton.astro',
				void 0
			)),
			(Rp = { enabled: !1, shortname: '' }),
			(lp = Object.freeze),
			(qw = Object.defineProperty),
			(Zw = (n, e) => lp(qw(n, 'raw', { value: lp(e || n.slice()) }))),
			(Yw = B('https://astro.buzzell.io')),
			(Kw = A(
				async (n, e, r) => {
					let s = n.createAstro(Yw, e, r)
					return (
						(s.self = Kw),
						D(
							ap ||
								(ap = Zw([
									'',
									'<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20"> <div id="disqus_thread"></div> <script>(function(){',
									`
		var d = document,
			s = d.createElement('script')
		s.src = 'https://' + shortname + '.disqus.com/embed.js'
		s.setAttribute('data-timestamp', String(new Date()))
		s.setAttribute('data-theme', localStorage.getItem('theme') ?? 'light') // Pass the string value directly
		;(d.head || d.body).appendChild(s)

		// document.addEventListener('theme-change', (e) => {
		//   todo: reload disqus
		// })
	})();<\/script> </div>`
								])),
							L(),
							ls({ shortname: Rp.shortname })
						)
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Disqus.astro',
				void 0
			)),
			(Qw = B('https://astro.buzzell.io'))
		;(Up = A(
			async (n, e, r) => {
				let s = n.createAstro(Qw, e, r)
				s.self = Up
				let o = await ct('blog'),
					l = s.props,
					a = 3,
					c = ((g) => {
						let E = g.data.tags.map((v) => v.toLowerCase())
						return o
							.filter(
								(v) => v.slug !== g.slug && v.data.tags.some((N) => E.includes(N.toLowerCase()))
							)
							.slice(0, a)
					})(l),
					{ Content: p, headings: d, remarkPluginFrontmatter: h } = await l.render(),
					u = Rp.enabled
				return D`${S(
					n,
					'BlogPost',
					Bp,
					{ id: l.id, data: l.data, headings: d, readTime: h.minutesRead },
					{
						default: (g) =>
							D` ${L()}<div class="grid grid-cols-1 md:grid-cols-[20%_auto] gap-10 mt-8"> <!-- aside  --> <aside class="md:flex flex-col gap-8 hidden"> ${S(
								g,
								'Share',
								jp,
								{}
							)} <div class="sticky top-24 self-start hidden md:block transition-all duration-200"> ${
								d && d.length > 0 && D`${S(g, 'TableOfContents', $p, { headings: d })}`
							} </div> </aside> <!-- post --> <article class="max-w-full w-full"> <div class="prose prose-lg md:prose-xl dark:prose-invert mb-12 min-w-full"> ${S(
								g,
								'Content',
								p,
								{ components: { pre: Pp, SButton: Op } }
							)} </div> <!-- related posts --> <footer> <h2 class="font-bold text-lg dark:text-white mb-6">Related Articles</h2> ${S(
								g,
								'ListRelatedPosts',
								Mp,
								{ posts: c }
							)} </footer> </article> </div> ${u}`
					}
				)}`
			},
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/post/[...slug].astro',
			void 0
		)),
			(tv = 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/post/[...slug].astro'),
			(nv = '/post/[...slug]'),
			(rv = Object.freeze(
				Object.defineProperty(
					{ __proto__: null, default: Up, file: tv, getStaticPaths: ev, url: nv },
					Symbol.toStringTag,
					{ value: 'Module' }
				)
			))
	})
var zp = {}
f(zp, { GET: () => av })
async function lv(n) {
	try {
		let e = await fetch(n)
		return e.ok ? await e.arrayBuffer() : void 0
	} catch {
		return
	}
}
var Hp,
	sv,
	ov,
	av,
	Wp = m(() => {
		'use strict'
		vt()
		Hp = cn(yl(), 1)
		J()
		Tn()
		;(sv = (n) => {
			let e = n.length,
				r = 0,
				s = 0,
				o = 8997,
				l = 0,
				a = 33826,
				i = 0,
				c = 40164,
				p = 0,
				d = 52210
			for (; r < e; )
				(o ^= n.charCodeAt(r++)),
					(s = o * 435),
					(l = a * 435),
					(i = c * 435),
					(p = d * 435),
					(i += o << 8),
					(p += a << 8),
					(l += s >>> 16),
					(o = s & 65535),
					(i += l >>> 16),
					(a = l & 65535),
					(d = (p + (i >>> 16)) & 65535),
					(c = i & 65535)
			return (d & 15) * 281474976710656 + c * 4294967296 + a * 65536 + (o ^ (d >> 4))
		}),
			(ov = (n, e = !1) => (e ? 'W/"' : '"') + sv(n).toString(36) + n.length.toString(36) + '"')
		av = async ({ request: n }) => {
			try {
				let e = await nr()
				if (!('transform' in e)) throw new Error('Configured image service is not a local service')
				let r = new URL(n.url),
					s = await e.parseURL(r, kt)
				if (!s?.src) throw new Error('Incorrect transform returned by `parseURL`')
				let o,
					l = wt(s.src) ? new URL(s.src) : new URL(s.src, r.origin)
				if (wt(s.src) && _n(s.src, kt) === !1) return new Response('Forbidden', { status: 403 })
				if (((o = await lv(l)), !o)) return new Response('Not Found', { status: 404 })
				let { data: a, format: i } = await e.transform(new Uint8Array(o), s, kt)
				return new Response(a, {
					status: 200,
					headers: {
						'Content-Type': Hp.default.getType(i) ?? `image/${i}`,
						'Cache-Control': 'public, max-age=31536000',
						ETag: ov(a.toString()),
						Date: new Date().toUTCString()
					}
				})
			} catch (e) {
				return (
					console.error('Could not process image request:', e),
					new Response(`Server Error: ${e}`, { status: 500 })
				)
			}
		}
	})
var Gp = {}
f(Gp, { onRequest: () => ae, page: () => iv, renderers: () => re })
var iv,
	Vp = m(() => {
		'use strict'
		ke()
		Oe()
		iv = () => Promise.resolve().then(() => (Wp(), zp))
	})
var th = {}
f(th, { $: () => pt, _: () => Cv, a: () => Xt, b: () => Bt })
async function wv({ paginate: n }) {
	let e = await lr(),
		r = await dt()
	return e.flatMap((s) => {
		let o = rr(s.toLowerCase()),
			l = r.filter((a) => a.data.category.toLowerCase() === o)
		return n(l, { params: { category: Gt(s.toLowerCase()) }, pageSize: ue.paginationSize })
	})
}
var cv,
	bs,
	dv,
	Xt,
	pv,
	Xp,
	hv,
	Jp,
	uv,
	Bt,
	mv,
	qp,
	yv,
	Zp,
	Dv,
	pt,
	fv,
	Yp,
	gv,
	Kp,
	Fv,
	Qp,
	bv,
	eh,
	vv,
	Ev,
	Cv,
	ws = m(() => {
		'use strict'
		W()
		je()
		V()
		J()
		Sn()
		;(cv = B('https://astro.buzzell.io')),
			(bs = A(
				async (n, e, r) => {
					let s = n.createAstro(cv, e, r)
					s.self = bs
					let { name: o = 'View All', activeCategory: l } = s.props,
						a = s.url.pathname,
						i = Gt(o.toLowerCase()),
						c = l?.toLocaleLowerCase() === i || (a === '/' && o === 'View All')
					return D`${L()}<a${_(o === 'View All' ? '/' : Gt(`/category/${i}/1`), 'href')}${_(
						it(
							'text-gray-600 dark:text-gray-300  pb-2.5 first-letter:uppercase font-medium hover:text-gray-800 border-b-2 border-opacity-0 dark:border-opacity-0 border-black dark:border-white dark:hover:border-white hover:border-opacity-100 transition-colors duration-150 ease-linear  ',
							c &&
								'border-black border-b-2 text-black z-10  dark:border-white dark:text-white dark:border-opacity-100 border-opacity-100'
						),
						'class'
					)}> ${o} </a>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Category.astro',
				void 0
			)),
			(dv = B('https://astro.buzzell.io')),
			(Xt = A(
				async (n, e, r) => {
					let s = n.createAstro(dv, e, r)
					s.self = Xt
					let o = await lr(),
						{ activeCategory: l } = s.props
					return D`${L()}<div class="relative flex flex-wrap min-w-full gap-5"> ${S(
						n,
						'Category',
						bs,
						{}
					)} ${o.map(
						(a) => D`${S(n, 'Category', bs, { name: a, activeCategory: l })}`
					)} <div class="hidden sm:block absolute w-full bottom-0 border-b-2 -z-40 dark:border-gray-600"></div> </div>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ListCategories.astro',
				void 0
			)),
			(pv = B('https://astro.buzzell.io')),
			(Xp = A(
				async (n, e, r) => {
					let s = n.createAstro(pv, e, r)
					s.self = Xp
					let { width: o = 24, height: l = 24 } = s.props
					return D`${L()}<svg class="feather feather-arrow-up-right" fill="none"${_(
						l,
						'height'
					)} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24"${_(
						o,
						'width'
					)} xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/ArrowUp.astro',
				void 0
			)),
			(hv = B('https://astro.buzzell.io')),
			(Jp = A(
				async (n, e, r) => {
					let s = n.createAstro(hv, e, r)
					s.self = Jp
					let {
						id: o,
						data: { title: l, description: a, pubDate: i, heroImage: c, category: p },
						readTime: d,
						slug: h
					} = s.props
					return D`${L()}<article class="grid grid-rows-[300px_auto] md:grid-rows-[300px_220px] min-h-full group"> <a class="relative overflow-hidden"${_(
						`/post/${h}/`,
						'href'
					)}> ${S(n, 'Image', T, {
						src: c,
						width: 600,
						height: 200,
						format: 'webp',
						class:
							'h-full min-w-full object-cover hover:scale-[101%] transition-all duration-200 rounded-[2px]',
						alt: `img of ${l}`
					})} <div class="z-30 absolute bottom-0 w-full h-20"> <div class="-z-10 absolute bottom-0 glass w-full min-h-full"></div> <div class="flex items-center justify-between gap-x-1 text-white px-6 py-4"> <div class="flex flex-col gap-1 items-center justify-center"> ${S(
						n,
						'FormattedDate',
						Vt,
						{ date: i }
					)} <span class="text-sm"> ${d}</span> </div> <span class="pb-4">${p}</span> </div> </div> </a> <div class="flex justify-between flex-col gap-4 md:gap-0 py-6 pl-1"> <div class="flex flex-col gap-3"> <div class="flex flex-col gap-2"> <a class="text-2xl font-semibold -tracking-wider"${_(
						`/post/${h}/`,
						'href'
					)}> ${l} </a> </div> <p class="overflow-hidden line-clamp-3 text-gray-700 dark:text-white mb-5 font-[400] md:pr-[15%]"> ${a} </p> </div> <footer class="flex justify-between items-center"> <a${_(
						`/post/${h}/`,
						'href'
					)} class="flex justify-center items-center dark:text-white rounded-full hover:translate-x-1 transition-transform duration-150 ease-in-out font-semibold gap-1 group"${_(
						`go to ${l}`,
						'aria-label'
					)}>
Read Post <span class="mt-[1px] group-hover:rotate-45 transition-transform duration-250 ease-in-out">${S(
						n,
						'ArrowUp',
						Xp,
						{ width: '18', height: '18' }
					)}</span> </a> </footer> </div> </article> `
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/PostCard.astro',
				void 0
			)),
			(uv = B('https://astro.buzzell.io')),
			(Bt = A(
				async (n, e, r) => {
					let s = n.createAstro(uv, e, r)
					s.self = Bt
					let { posts: o, FirstBig: l = !1 } = s.props
					return D`${L()}<section${_(
						it(
							'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-3',
							l && 'md:[&>*:first-child]:col-span-2'
						),
						'class'
					)}> ${o.map(async (a) => {
						let { remarkPluginFrontmatter: i } = await a.render()
						return D`${S(n, 'PostCard', Jp, {
							id: a.id,
							data: a.data,
							slug: a.slug,
							readTime: i.minutesRead
						})}`
					})} </section>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ListPosts.astro',
				void 0
			)),
			(mv = B('https://astro.buzzell.io')),
			(qp = A(
				async (n, e, r) => {
					let s = n.createAstro(mv, e, r)
					return (
						(s.self = qp),
						D`${L()}<h1 class="text-5xl font-bold first-letter:uppercase"> ${ve(
							n,
							r.default
						)} </h1>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Title.astro',
				void 0
			)),
			(yv = B('https://astro.buzzell.io')),
			(Zp = A(
				async (n, e, r) => {
					let s = n.createAstro(yv, e, r)
					return (
						(s.self = Zp),
						D`${L()}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="SvgjsPath3009" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="url(&quot;#SvgjsLinearGradient3010&quot;)"></path><defs><linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient3010"><stop stop-opacity=" 1" stop-color="rgba(125, 81, 146)" offset="0"></stop><stop stop-opacity=" 1" stop-color="rgba(125, 81, 146)" offset="0.48"></stop><stop stop-opacity=" 1" stop-color="rgba(128, 5, 166)" offset="1"></stop></linearGradient></defs></svg>`
					)
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/Shape.astro',
				void 0
			)),
			(Dv = B('https://astro.buzzell.io')),
			(pt = A(
				async (n, e, r) => {
					let s = n.createAstro(Dv, e, r)
					s.self = pt
					let { title: o } = s.props
					return D`${L()}<div class="flex justify-start items-center gap-2 title"> ${S(
						n,
						'Shape',
						Zp,
						{}
					)} ${S(n, 'Title', qp, {}, { default: (l) => D`${o}` })} </div>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/TitlePage.astro',
				void 0
			)),
			(fv = B('https://astro.buzzell.io')),
			(Yp = A(
				async (n, e, r) => {
					let s = n.createAstro(fv, e, r)
					s.self = Yp
					let { width: o = 24, height: l = 24 } = s.props
					return D`${L()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-left-filled"${_(
						o,
						'width'
					)}${_(
						l,
						'height'
					)} viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path> </svg>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/ArrowLeft.astro',
				void 0
			)),
			(gv = B('https://astro.buzzell.io')),
			(Kp = A(
				async (n, e, r) => {
					let s = n.createAstro(gv, e, r)
					s.self = Kp
					let { width: o = 24, height: l = 24 } = s.props
					return D`${L()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right-filled"${_(
						o,
						'width'
					)}${_(
						l,
						'height'
					)} viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" stroke-width="0" fill="currentColor"></path> </svg>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/icons/ArrowRight.astro',
				void 0
			)),
			(Fv = B('https://astro.buzzell.io')),
			(Qp = A(
				async (n, e, r) => {
					let s = n.createAstro(Fv, e, r)
					s.self = Qp
					let { page: o } = s.props
					return D`${L()}<div class="flex gap-5 md:gap-1 justify-around md:justify-end"> <!-- Previous Button --> ${
						o.start > 0 &&
						D`<a${_(
							o.url.prev,
							'href'
						)} class="flex items-center justify-center px-8 md:px-4 h-10 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> ${S(
							n,
							'ArrowLeft',
							Yp,
							{}
						)} </a>`
					} <!-- Next Button --> ${
						o.currentPage < o.lastPage &&
						D`<a${_(
							o.url.next,
							'href'
						)} class="flex items-center justify-center px-8 md:px-4 h-10 ml-3 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> ${S(
							n,
							'ArrowRight',
							Kp,
							{}
						)} </a>`
					} </div>`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Pagination.astro',
				void 0
			)),
			(bv = B('https://astro.buzzell.io'))
		;(eh = A(
			async (n, e, r) => {
				let s = n.createAstro(bv, e, r)
				s.self = eh
				let o = s.params,
					{ page: l } = s.props,
					a = rr(o.category.toLowerCase()),
					i = l.data
				return D`${S(
					n,
					'BaseLayout',
					Be,
					{ title: o.category },
					{
						default: (c) =>
							D` ${S(c, 'TitlePage', pt, { title: a })} ${S(c, 'ListCategories', Xt, {
								activeCategory: o.category
							})} ${S(c, 'ListPosts', Bt, { posts: i })} ${S(c, 'Pagination', Qp, { page: l })} `
					}
				)}`
			},
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/category/[category]/[page].astro',
			void 0
		)),
			(vv =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/category/[category]/[page].astro'),
			(Ev = '/category/[category]/[page]'),
			(Cv = Object.freeze(
				Object.defineProperty(
					{ __proto__: null, default: eh, file: vv, getStaticPaths: wv, url: Ev },
					Symbol.toStringTag,
					{ value: 'Module' }
				)
			))
	})
var ir = {}
f(ir, { a: () => Pv, b: () => $v, i: () => kv })
async function Iv() {
	return (await ar()).map((e) => ({ params: { tag: e }, props: { tag: e } }))
}
var xv,
	nh,
	Sv,
	Av,
	kv,
	Bv,
	rh,
	_v,
	Tv,
	Pv,
	Mv,
	sh,
	jv,
	Lv,
	$v,
	cr = m(() => {
		'use strict'
		W()
		je()
		V()
		ws()
		J()
		Sn()
		;(xv = B('https://astro.buzzell.io')),
			(nh = A(
				async (n, e, r) => {
					let s = n.createAstro(xv, e, r)
					s.self = nh
					let l = await dt(5)
					return D`${S(
						n,
						'BaseLayout',
						Be,
						{ title: 'Home' },
						{
							default: (a) =>
								D` ${S(a, 'TitlePage', pt, { title: 'The Occasional Buzz' })} ${S(
									a,
									'ListCategories',
									Xt,
									{}
								)} ${L()}<div> <h2 class="text-lg font-medium tracking-wide text-end">Latest Posts</h2> ${S(
									a,
									'ListPosts',
									Bt,
									{ FirstBig: !0, posts: l }
								)} </div> `
						}
					)} `
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/index.astro',
				void 0
			)),
			(Sv = 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/index.astro'),
			(Av = ''),
			(kv = Object.freeze(
				Object.defineProperty(
					{ __proto__: null, default: nh, file: Sv, url: Av },
					Symbol.toStringTag,
					{ value: 'Module' }
				)
			)),
			(Bv = B('https://astro.buzzell.io')),
			(rh = A(
				async (n, e, r) => {
					let s = n.createAstro(Bv, e, r)
					s.self = rh
					let o = await ar()
					return D`${S(
						n,
						'BaseLayout',
						Be,
						{ title: 'Tags' },
						{
							default: (l) =>
								D` ${S(l, 'TitlePage', pt, {
									title: 'Tags'
								})} ${L()}<div class="flex justify-center flex-wrap gap-4"> ${o.map(
									(a) => D`<a${_(
										`/tags/${a}`,
										'href'
									)} class="inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
#${a} </a>`
								)} </div> `
						}
					)}`
				},
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/tags/index.astro',
				void 0
			)),
			(_v = 'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/tags/index.astro'),
			(Tv = '/tags'),
			(Pv = Object.freeze(
				Object.defineProperty(
					{ __proto__: null, default: rh, file: _v, url: Tv },
					Symbol.toStringTag,
					{ value: 'Module' }
				)
			)),
			(Mv = B('https://astro.buzzell.io'))
		;(sh = A(
			async (n, e, r) => {
				let s = n.createAstro(Mv, e, r)
				s.self = sh
				let { tag: o } = s.props,
					l = await gs(o)
				return D`${S(
					n,
					'BaseLayout',
					Be,
					{ title: o },
					{
						default: (a) =>
							D` ${S(a, 'TitlePage', pt, { title: o })} ${S(a, 'ListPosts', Bt, { posts: l })} `
					}
				)}`
			},
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/tags/[...tag]/index.astro',
			void 0
		)),
			(jv =
				'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/tags/[...tag]/index.astro'),
			(Lv = '/tags/[...tag]'),
			($v = Object.freeze(
				Object.defineProperty(
					{ __proto__: null, default: sh, file: jv, getStaticPaths: Iv, url: Lv },
					Symbol.toStringTag,
					{ value: 'Module' }
				)
			))
	})
var oh = {}
f(oh, { onRequest: () => ae, page: () => Ov, renderers: () => re })
var Ov,
	lh = m(() => {
		'use strict'
		ke()
		Oe()
		Ov = () =>
			Promise.resolve()
				.then(() => (cr(), ir))
				.then((n) => n.i)
	})
var ah = {}
f(ah, { onRequest: () => ae, page: () => Rv, renderers: () => re })
var Rv,
	ih = m(() => {
		'use strict'
		ke()
		Oe()
		Rv = () =>
			Promise.resolve()
				.then(() => (ws(), th))
				.then((n) => n._)
	})
var U = {}
f(U, {
	BRAND: () => yh,
	DIRTY: () => xs,
	EMPTY_PATH: () => uh,
	INVALID: () => $,
	NEVER: () => Kh,
	OK: () => se,
	ParseStatus: () => te,
	Schema: () => O,
	ZodAny: () => Pe,
	ZodArray: () => xe,
	ZodBigInt: () => ze,
	ZodBoolean: () => We,
	ZodBranded: () => en,
	ZodCatch: () => Dt,
	ZodDate: () => Ge,
	ZodDefault: () => et,
	ZodDiscriminatedUnion: () => Yt,
	ZodEffects: () => ce,
	ZodEnum: () => Ke,
	ZodError: () => ie,
	ZodFirstPartyTypeKind: () => I,
	ZodFunction: () => Qt,
	ZodIntersection: () => qe,
	ZodIssueCode: () => y,
	ZodLazy: () => Ze,
	ZodLiteral: () => Ye,
	ZodMap: () => mt,
	ZodNaN: () => ft,
	ZodNativeEnum: () => Qe,
	ZodNever: () => De,
	ZodNull: () => Xe,
	ZodNullable: () => Se,
	ZodNumber: () => He,
	ZodObject: () => le,
	ZodOptional: () => me,
	ZodParsedType: () => w,
	ZodPipeline: () => Mt,
	ZodPromise: () => Me,
	ZodReadonly: () => gt,
	ZodRecord: () => Kt,
	ZodSchema: () => O,
	ZodSet: () => yt,
	ZodString: () => Te,
	ZodSymbol: () => ht,
	ZodTransformer: () => ce,
	ZodTuple: () => be,
	ZodType: () => O,
	ZodUndefined: () => Ve,
	ZodUnion: () => Je,
	ZodUnknown: () => Ce,
	ZodVoid: () => ut,
	addIssueToContext: () => x,
	any: () => Ch,
	array: () => kh,
	bigint: () => Fh,
	boolean: () => Bs,
	coerce: () => Yh,
	custom: () => Ss,
	date: () => bh,
	default: () => Yv,
	defaultErrorMap: () => Tt,
	discriminatedUnion: () => Ph,
	effect: () => Cs,
	enum: () => Nh,
	function: () => Oh,
	getErrorMap: () => Jt,
	getParsedType: () => _e,
	instanceof: () => fh,
	intersection: () => Mh,
	isAborted: () => hr,
	isAsync: () => Zt,
	isDirty: () => ur,
	isValid: () => Pt,
	late: () => Dh,
	lazy: () => Rh,
	literal: () => Uh,
	makeIssue: () => qt,
	map: () => Lh,
	nan: () => gh,
	nativeEnum: () => Hh,
	never: () => Sh,
	null: () => Eh,
	nullable: () => Gh,
	number: () => ks,
	object: () => Bh,
	objectUtil: () => pr,
	oboolean: () => Zh,
	onumber: () => qh,
	optional: () => Wh,
	ostring: () => Jh,
	pipeline: () => Xh,
	preprocess: () => Vh,
	promise: () => zh,
	quotelessJson: () => dh,
	record: () => jh,
	set: () => $h,
	setErrorMap: () => hh,
	strictObject: () => _h,
	string: () => As,
	symbol: () => wh,
	transformer: () => Cs,
	tuple: () => Ih,
	undefined: () => vh,
	union: () => Th,
	unknown: () => xh,
	util: () => z,
	void: () => Ah,
	z: () => Yv
})
function hh(n) {
	ph = n
}
function Jt() {
	return ph
}
function x(n, e) {
	let r = qt({
		issueData: e,
		data: n.data,
		path: n.path,
		errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Jt(), Tt].filter((s) => !!s)
	})
	n.common.issues.push(r)
}
function R(n) {
	if (!n) return {}
	let { errorMap: e, invalid_type_error: r, required_error: s, description: o } = n
	if (e && (r || s))
		throw new Error(
			`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
		)
	return e
		? { errorMap: e, description: o }
		: {
				errorMap: (a, i) =>
					a.code !== 'invalid_type'
						? { message: i.defaultError }
						: typeof i.data > 'u'
							? { message: s ?? i.defaultError }
							: { message: r ?? i.defaultError },
				description: o
			}
}
function qv(n, e) {
	return !!(((e === 'v4' || !e) && Vv.test(n)) || ((e === 'v6' || !e) && Xv.test(n)))
}
function Zv(n, e) {
	let r = (n.toString().split('.')[1] || '').length,
		s = (e.toString().split('.')[1] || '').length,
		o = r > s ? r : s,
		l = parseInt(n.toFixed(o).replace('.', '')),
		a = parseInt(e.toFixed(o).replace('.', ''))
	return (l % a) / Math.pow(10, o)
}
function _t(n) {
	if (n instanceof le) {
		let e = {}
		for (let r in n.shape) {
			let s = n.shape[r]
			e[r] = me.create(_t(s))
		}
		return new le({ ...n._def, shape: () => e })
	} else
		return n instanceof xe
			? new xe({ ...n._def, type: _t(n.element) })
			: n instanceof me
				? me.create(_t(n.unwrap()))
				: n instanceof Se
					? Se.create(_t(n.unwrap()))
					: n instanceof be
						? be.create(n.items.map((e) => _t(e)))
						: n
}
function Es(n, e) {
	let r = _e(n),
		s = _e(e)
	if (n === e) return { valid: !0, data: n }
	if (r === w.object && s === w.object) {
		let o = z.objectKeys(e),
			l = z.objectKeys(n).filter((i) => o.indexOf(i) !== -1),
			a = { ...n, ...e }
		for (let i of l) {
			let c = Es(n[i], e[i])
			if (!c.valid) return { valid: !1 }
			a[i] = c.data
		}
		return { valid: !0, data: a }
	} else if (r === w.array && s === w.array) {
		if (n.length !== e.length) return { valid: !1 }
		let o = []
		for (let l = 0; l < n.length; l++) {
			let a = n[l],
				i = e[l],
				c = Es(a, i)
			if (!c.valid) return { valid: !1 }
			o.push(c.data)
		}
		return { valid: !0, data: o }
	} else return r === w.date && s === w.date && +n == +e ? { valid: !0, data: n } : { valid: !1 }
}
function mh(n, e) {
	return new Ke({ values: n, typeName: I.ZodEnum, ...R(e) })
}
var z,
	pr,
	w,
	_e,
	y,
	dh,
	ie,
	Tt,
	ph,
	qt,
	uh,
	te,
	$,
	xs,
	se,
	hr,
	ur,
	Pt,
	Zt,
	P,
	ye,
	ch,
	O,
	Uv,
	Nv,
	Hv,
	zv,
	Wv,
	Gv,
	vs,
	Vv,
	Xv,
	Jv,
	Te,
	He,
	ze,
	We,
	Ge,
	ht,
	Ve,
	Xe,
	Pe,
	Ce,
	De,
	ut,
	xe,
	le,
	Je,
	dr,
	Yt,
	qe,
	be,
	Kt,
	mt,
	yt,
	Qt,
	Ze,
	Ye,
	Ke,
	Qe,
	Me,
	ce,
	me,
	Se,
	et,
	Dt,
	ft,
	yh,
	en,
	Mt,
	gt,
	Ss,
	Dh,
	I,
	fh,
	As,
	ks,
	gh,
	Fh,
	Bs,
	bh,
	wh,
	vh,
	Eh,
	Ch,
	xh,
	Sh,
	Ah,
	kh,
	Bh,
	_h,
	Th,
	Ph,
	Mh,
	Ih,
	jh,
	Lh,
	$h,
	Oh,
	Rh,
	Uh,
	Nh,
	Hh,
	zh,
	Cs,
	Wh,
	Gh,
	Vh,
	Xh,
	Jh,
	qh,
	Zh,
	Yh,
	Kh,
	Yv,
	Qh = m(() => {
		;(function (n) {
			n.assertEqual = (o) => o
			function e(o) {}
			n.assertIs = e
			function r(o) {
				throw new Error()
			}
			;(n.assertNever = r),
				(n.arrayToEnum = (o) => {
					let l = {}
					for (let a of o) l[a] = a
					return l
				}),
				(n.getValidEnumValues = (o) => {
					let l = n.objectKeys(o).filter((i) => typeof o[o[i]] != 'number'),
						a = {}
					for (let i of l) a[i] = o[i]
					return n.objectValues(a)
				}),
				(n.objectValues = (o) =>
					n.objectKeys(o).map(function (l) {
						return o[l]
					})),
				(n.objectKeys =
					typeof Object.keys == 'function'
						? (o) => Object.keys(o)
						: (o) => {
								let l = []
								for (let a in o) Object.prototype.hasOwnProperty.call(o, a) && l.push(a)
								return l
							}),
				(n.find = (o, l) => {
					for (let a of o) if (l(a)) return a
				}),
				(n.isInteger =
					typeof Number.isInteger == 'function'
						? (o) => Number.isInteger(o)
						: (o) => typeof o == 'number' && isFinite(o) && Math.floor(o) === o)
			function s(o, l = ' | ') {
				return o.map((a) => (typeof a == 'string' ? `'${a}'` : a)).join(l)
			}
			;(n.joinValues = s),
				(n.jsonStringifyReplacer = (o, l) => (typeof l == 'bigint' ? l.toString() : l))
		})(z || (z = {}))
		;(function (n) {
			n.mergeShapes = (e, r) => ({ ...e, ...r })
		})(pr || (pr = {}))
		;(w = z.arrayToEnum([
			'string',
			'nan',
			'number',
			'integer',
			'float',
			'boolean',
			'date',
			'bigint',
			'symbol',
			'function',
			'undefined',
			'null',
			'array',
			'object',
			'unknown',
			'promise',
			'void',
			'never',
			'map',
			'set'
		])),
			(_e = (n) => {
				switch (typeof n) {
					case 'undefined':
						return w.undefined
					case 'string':
						return w.string
					case 'number':
						return isNaN(n) ? w.nan : w.number
					case 'boolean':
						return w.boolean
					case 'function':
						return w.function
					case 'bigint':
						return w.bigint
					case 'symbol':
						return w.symbol
					case 'object':
						return Array.isArray(n)
							? w.array
							: n === null
								? w.null
								: n.then && typeof n.then == 'function' && n.catch && typeof n.catch == 'function'
									? w.promise
									: typeof Map < 'u' && n instanceof Map
										? w.map
										: typeof Set < 'u' && n instanceof Set
											? w.set
											: typeof Date < 'u' && n instanceof Date
												? w.date
												: w.object
					default:
						return w.unknown
				}
			}),
			(y = z.arrayToEnum([
				'invalid_type',
				'invalid_literal',
				'custom',
				'invalid_union',
				'invalid_union_discriminator',
				'invalid_enum_value',
				'unrecognized_keys',
				'invalid_arguments',
				'invalid_return_type',
				'invalid_date',
				'invalid_string',
				'too_small',
				'too_big',
				'invalid_intersection_types',
				'not_multiple_of',
				'not_finite'
			])),
			(dh = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, '$1:')),
			(ie = class extends Error {
				constructor(e) {
					super(),
						(this.issues = []),
						(this.addIssue = (s) => {
							this.issues = [...this.issues, s]
						}),
						(this.addIssues = (s = []) => {
							this.issues = [...this.issues, ...s]
						})
					let r = new.target.prototype
					Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : (this.__proto__ = r),
						(this.name = 'ZodError'),
						(this.issues = e)
				}
				get errors() {
					return this.issues
				}
				format(e) {
					let r =
							e ||
							function (l) {
								return l.message
							},
						s = { _errors: [] },
						o = (l) => {
							for (let a of l.issues)
								if (a.code === 'invalid_union') a.unionErrors.map(o)
								else if (a.code === 'invalid_return_type') o(a.returnTypeError)
								else if (a.code === 'invalid_arguments') o(a.argumentsError)
								else if (a.path.length === 0) s._errors.push(r(a))
								else {
									let i = s,
										c = 0
									for (; c < a.path.length; ) {
										let p = a.path[c]
										c === a.path.length - 1
											? ((i[p] = i[p] || { _errors: [] }), i[p]._errors.push(r(a)))
											: (i[p] = i[p] || { _errors: [] }),
											(i = i[p]),
											c++
									}
								}
						}
					return o(this), s
				}
				toString() {
					return this.message
				}
				get message() {
					return JSON.stringify(this.issues, z.jsonStringifyReplacer, 2)
				}
				get isEmpty() {
					return this.issues.length === 0
				}
				flatten(e = (r) => r.message) {
					let r = {},
						s = []
					for (let o of this.issues)
						o.path.length > 0
							? ((r[o.path[0]] = r[o.path[0]] || []), r[o.path[0]].push(e(o)))
							: s.push(e(o))
					return { formErrors: s, fieldErrors: r }
				}
				get formErrors() {
					return this.flatten()
				}
			})
		ie.create = (n) => new ie(n)
		;(Tt = (n, e) => {
			let r
			switch (n.code) {
				case y.invalid_type:
					n.received === w.undefined
						? (r = 'Required')
						: (r = `Expected ${n.expected}, received ${n.received}`)
					break
				case y.invalid_literal:
					r = `Invalid literal value, expected ${JSON.stringify(
						n.expected,
						z.jsonStringifyReplacer
					)}`
					break
				case y.unrecognized_keys:
					r = `Unrecognized key(s) in object: ${z.joinValues(n.keys, ', ')}`
					break
				case y.invalid_union:
					r = 'Invalid input'
					break
				case y.invalid_union_discriminator:
					r = `Invalid discriminator value. Expected ${z.joinValues(n.options)}`
					break
				case y.invalid_enum_value:
					r = `Invalid enum value. Expected ${z.joinValues(n.options)}, received '${n.received}'`
					break
				case y.invalid_arguments:
					r = 'Invalid function arguments'
					break
				case y.invalid_return_type:
					r = 'Invalid function return type'
					break
				case y.invalid_date:
					r = 'Invalid date'
					break
				case y.invalid_string:
					typeof n.validation == 'object'
						? 'includes' in n.validation
							? ((r = `Invalid input: must include "${n.validation.includes}"`),
								typeof n.validation.position == 'number' &&
									(r = `${r} at one or more positions greater than or equal to ${n.validation.position}`))
							: 'startsWith' in n.validation
								? (r = `Invalid input: must start with "${n.validation.startsWith}"`)
								: 'endsWith' in n.validation
									? (r = `Invalid input: must end with "${n.validation.endsWith}"`)
									: z.assertNever(n.validation)
						: n.validation !== 'regex'
							? (r = `Invalid ${n.validation}`)
							: (r = 'Invalid')
					break
				case y.too_small:
					n.type === 'array'
						? (r = `Array must contain ${
								n.exact ? 'exactly' : n.inclusive ? 'at least' : 'more than'
							} ${n.minimum} element(s)`)
						: n.type === 'string'
							? (r = `String must contain ${
									n.exact ? 'exactly' : n.inclusive ? 'at least' : 'over'
								} ${n.minimum} character(s)`)
							: n.type === 'number'
								? (r = `Number must be ${
										n.exact
											? 'exactly equal to '
											: n.inclusive
												? 'greater than or equal to '
												: 'greater than '
									}${n.minimum}`)
								: n.type === 'date'
									? (r = `Date must be ${
											n.exact
												? 'exactly equal to '
												: n.inclusive
													? 'greater than or equal to '
													: 'greater than '
										}${new Date(Number(n.minimum))}`)
									: (r = 'Invalid input')
					break
				case y.too_big:
					n.type === 'array'
						? (r = `Array must contain ${
								n.exact ? 'exactly' : n.inclusive ? 'at most' : 'less than'
							} ${n.maximum} element(s)`)
						: n.type === 'string'
							? (r = `String must contain ${
									n.exact ? 'exactly' : n.inclusive ? 'at most' : 'under'
								} ${n.maximum} character(s)`)
							: n.type === 'number'
								? (r = `Number must be ${
										n.exact ? 'exactly' : n.inclusive ? 'less than or equal to' : 'less than'
									} ${n.maximum}`)
								: n.type === 'bigint'
									? (r = `BigInt must be ${
											n.exact ? 'exactly' : n.inclusive ? 'less than or equal to' : 'less than'
										} ${n.maximum}`)
									: n.type === 'date'
										? (r = `Date must be ${
												n.exact
													? 'exactly'
													: n.inclusive
														? 'smaller than or equal to'
														: 'smaller than'
											} ${new Date(Number(n.maximum))}`)
										: (r = 'Invalid input')
					break
				case y.custom:
					r = 'Invalid input'
					break
				case y.invalid_intersection_types:
					r = 'Intersection results could not be merged'
					break
				case y.not_multiple_of:
					r = `Number must be a multiple of ${n.multipleOf}`
					break
				case y.not_finite:
					r = 'Number must be finite'
					break
				default:
					;(r = e.defaultError), z.assertNever(n)
			}
			return { message: r }
		}),
			(ph = Tt)
		;(qt = (n) => {
			let { data: e, path: r, errorMaps: s, issueData: o } = n,
				l = [...r, ...(o.path || [])],
				a = { ...o, path: l },
				i = '',
				c = s
					.filter((p) => !!p)
					.slice()
					.reverse()
			for (let p of c) i = p(a, { data: e, defaultError: i }).message
			return { ...o, path: l, message: o.message || i }
		}),
			(uh = [])
		;(te = class n {
			constructor() {
				this.value = 'valid'
			}
			dirty() {
				this.value === 'valid' && (this.value = 'dirty')
			}
			abort() {
				this.value !== 'aborted' && (this.value = 'aborted')
			}
			static mergeArray(e, r) {
				let s = []
				for (let o of r) {
					if (o.status === 'aborted') return $
					o.status === 'dirty' && e.dirty(), s.push(o.value)
				}
				return { status: e.value, value: s }
			}
			static async mergeObjectAsync(e, r) {
				let s = []
				for (let o of r) s.push({ key: await o.key, value: await o.value })
				return n.mergeObjectSync(e, s)
			}
			static mergeObjectSync(e, r) {
				let s = {}
				for (let o of r) {
					let { key: l, value: a } = o
					if (l.status === 'aborted' || a.status === 'aborted') return $
					l.status === 'dirty' && e.dirty(),
						a.status === 'dirty' && e.dirty(),
						l.value !== '__proto__' &&
							(typeof a.value < 'u' || o.alwaysSet) &&
							(s[l.value] = a.value)
				}
				return { status: e.value, value: s }
			}
		}),
			($ = Object.freeze({ status: 'aborted' })),
			(xs = (n) => ({ status: 'dirty', value: n })),
			(se = (n) => ({ status: 'valid', value: n })),
			(hr = (n) => n.status === 'aborted'),
			(ur = (n) => n.status === 'dirty'),
			(Pt = (n) => n.status === 'valid'),
			(Zt = (n) => typeof Promise < 'u' && n instanceof Promise)
		;(function (n) {
			;(n.errToObj = (e) => (typeof e == 'string' ? { message: e } : e || {})),
				(n.toString = (e) => (typeof e == 'string' ? e : e?.message))
		})(P || (P = {}))
		;(ye = class {
			constructor(e, r, s, o) {
				;(this._cachedPath = []),
					(this.parent = e),
					(this.data = r),
					(this._path = s),
					(this._key = o)
			}
			get path() {
				return (
					this._cachedPath.length ||
						(this._key instanceof Array
							? this._cachedPath.push(...this._path, ...this._key)
							: this._cachedPath.push(...this._path, this._key)),
					this._cachedPath
				)
			}
		}),
			(ch = (n, e) => {
				if (Pt(e)) return { success: !0, data: e.value }
				if (!n.common.issues.length) throw new Error('Validation failed but no issues detected.')
				return {
					success: !1,
					get error() {
						if (this._error) return this._error
						let r = new ie(n.common.issues)
						return (this._error = r), this._error
					}
				}
			})
		;(O = class {
			constructor(e) {
				;(this.spa = this.safeParseAsync),
					(this._def = e),
					(this.parse = this.parse.bind(this)),
					(this.safeParse = this.safeParse.bind(this)),
					(this.parseAsync = this.parseAsync.bind(this)),
					(this.safeParseAsync = this.safeParseAsync.bind(this)),
					(this.spa = this.spa.bind(this)),
					(this.refine = this.refine.bind(this)),
					(this.refinement = this.refinement.bind(this)),
					(this.superRefine = this.superRefine.bind(this)),
					(this.optional = this.optional.bind(this)),
					(this.nullable = this.nullable.bind(this)),
					(this.nullish = this.nullish.bind(this)),
					(this.array = this.array.bind(this)),
					(this.promise = this.promise.bind(this)),
					(this.or = this.or.bind(this)),
					(this.and = this.and.bind(this)),
					(this.transform = this.transform.bind(this)),
					(this.brand = this.brand.bind(this)),
					(this.default = this.default.bind(this)),
					(this.catch = this.catch.bind(this)),
					(this.describe = this.describe.bind(this)),
					(this.pipe = this.pipe.bind(this)),
					(this.readonly = this.readonly.bind(this)),
					(this.isNullable = this.isNullable.bind(this)),
					(this.isOptional = this.isOptional.bind(this))
			}
			get description() {
				return this._def.description
			}
			_getType(e) {
				return _e(e.data)
			}
			_getOrReturnCtx(e, r) {
				return (
					r || {
						common: e.parent.common,
						data: e.data,
						parsedType: _e(e.data),
						schemaErrorMap: this._def.errorMap,
						path: e.path,
						parent: e.parent
					}
				)
			}
			_processInputParams(e) {
				return {
					status: new te(),
					ctx: {
						common: e.parent.common,
						data: e.data,
						parsedType: _e(e.data),
						schemaErrorMap: this._def.errorMap,
						path: e.path,
						parent: e.parent
					}
				}
			}
			_parseSync(e) {
				let r = this._parse(e)
				if (Zt(r)) throw new Error('Synchronous parse encountered promise.')
				return r
			}
			_parseAsync(e) {
				let r = this._parse(e)
				return Promise.resolve(r)
			}
			parse(e, r) {
				let s = this.safeParse(e, r)
				if (s.success) return s.data
				throw s.error
			}
			safeParse(e, r) {
				var s
				let o = {
						common: {
							issues: [],
							async: (s = r?.async) !== null && s !== void 0 ? s : !1,
							contextualErrorMap: r?.errorMap
						},
						path: r?.path || [],
						schemaErrorMap: this._def.errorMap,
						parent: null,
						data: e,
						parsedType: _e(e)
					},
					l = this._parseSync({ data: e, path: o.path, parent: o })
				return ch(o, l)
			}
			async parseAsync(e, r) {
				let s = await this.safeParseAsync(e, r)
				if (s.success) return s.data
				throw s.error
			}
			async safeParseAsync(e, r) {
				let s = {
						common: { issues: [], contextualErrorMap: r?.errorMap, async: !0 },
						path: r?.path || [],
						schemaErrorMap: this._def.errorMap,
						parent: null,
						data: e,
						parsedType: _e(e)
					},
					o = this._parse({ data: e, path: s.path, parent: s }),
					l = await (Zt(o) ? o : Promise.resolve(o))
				return ch(s, l)
			}
			refine(e, r) {
				let s = (o) =>
					typeof r == 'string' || typeof r > 'u'
						? { message: r }
						: typeof r == 'function'
							? r(o)
							: r
				return this._refinement((o, l) => {
					let a = e(o),
						i = () => l.addIssue({ code: y.custom, ...s(o) })
					return typeof Promise < 'u' && a instanceof Promise
						? a.then((c) => (c ? !0 : (i(), !1)))
						: a
							? !0
							: (i(), !1)
				})
			}
			refinement(e, r) {
				return this._refinement((s, o) =>
					e(s) ? !0 : (o.addIssue(typeof r == 'function' ? r(s, o) : r), !1)
				)
			}
			_refinement(e) {
				return new ce({
					schema: this,
					typeName: I.ZodEffects,
					effect: { type: 'refinement', refinement: e }
				})
			}
			superRefine(e) {
				return this._refinement(e)
			}
			optional() {
				return me.create(this, this._def)
			}
			nullable() {
				return Se.create(this, this._def)
			}
			nullish() {
				return this.nullable().optional()
			}
			array() {
				return xe.create(this, this._def)
			}
			promise() {
				return Me.create(this, this._def)
			}
			or(e) {
				return Je.create([this, e], this._def)
			}
			and(e) {
				return qe.create(this, e, this._def)
			}
			transform(e) {
				return new ce({
					...R(this._def),
					schema: this,
					typeName: I.ZodEffects,
					effect: { type: 'transform', transform: e }
				})
			}
			default(e) {
				let r = typeof e == 'function' ? e : () => e
				return new et({ ...R(this._def), innerType: this, defaultValue: r, typeName: I.ZodDefault })
			}
			brand() {
				return new en({ typeName: I.ZodBranded, type: this, ...R(this._def) })
			}
			catch(e) {
				let r = typeof e == 'function' ? e : () => e
				return new Dt({ ...R(this._def), innerType: this, catchValue: r, typeName: I.ZodCatch })
			}
			describe(e) {
				let r = this.constructor
				return new r({ ...this._def, description: e })
			}
			pipe(e) {
				return Mt.create(this, e)
			}
			readonly() {
				return gt.create(this)
			}
			isOptional() {
				return this.safeParse(void 0).success
			}
			isNullable() {
				return this.safeParse(null).success
			}
		}),
			(Uv = /^c[^\s-]{8,}$/i),
			(Nv = /^[a-z][a-z0-9]*$/),
			(Hv = /^[0-9A-HJKMNP-TV-Z]{26}$/),
			(zv =
				/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i),
			(Wv = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i),
			(Gv = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$'),
			(Vv =
				/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/),
			(Xv =
				/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/),
			(Jv = (n) =>
				n.precision
					? n.offset
						? new RegExp(
								`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
							)
						: new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`)
					: n.precision === 0
						? n.offset
							? new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$')
							: new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$')
						: n.offset
							? new RegExp(
									'^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$'
								)
							: new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$'))
		Te = class n extends O {
			_parse(e) {
				if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== w.string)) {
					let l = this._getOrReturnCtx(e)
					return x(l, { code: y.invalid_type, expected: w.string, received: l.parsedType }), $
				}
				let s = new te(),
					o
				for (let l of this._def.checks)
					if (l.kind === 'min')
						e.data.length < l.value &&
							((o = this._getOrReturnCtx(e, o)),
							x(o, {
								code: y.too_small,
								minimum: l.value,
								type: 'string',
								inclusive: !0,
								exact: !1,
								message: l.message
							}),
							s.dirty())
					else if (l.kind === 'max')
						e.data.length > l.value &&
							((o = this._getOrReturnCtx(e, o)),
							x(o, {
								code: y.too_big,
								maximum: l.value,
								type: 'string',
								inclusive: !0,
								exact: !1,
								message: l.message
							}),
							s.dirty())
					else if (l.kind === 'length') {
						let a = e.data.length > l.value,
							i = e.data.length < l.value
						;(a || i) &&
							((o = this._getOrReturnCtx(e, o)),
							a
								? x(o, {
										code: y.too_big,
										maximum: l.value,
										type: 'string',
										inclusive: !0,
										exact: !0,
										message: l.message
									})
								: i &&
									x(o, {
										code: y.too_small,
										minimum: l.value,
										type: 'string',
										inclusive: !0,
										exact: !0,
										message: l.message
									}),
							s.dirty())
					} else if (l.kind === 'email')
						Wv.test(e.data) ||
							((o = this._getOrReturnCtx(e, o)),
							x(o, { validation: 'email', code: y.invalid_string, message: l.message }),
							s.dirty())
					else if (l.kind === 'emoji')
						vs || (vs = new RegExp(Gv, 'u')),
							vs.test(e.data) ||
								((o = this._getOrReturnCtx(e, o)),
								x(o, { validation: 'emoji', code: y.invalid_string, message: l.message }),
								s.dirty())
					else if (l.kind === 'uuid')
						zv.test(e.data) ||
							((o = this._getOrReturnCtx(e, o)),
							x(o, { validation: 'uuid', code: y.invalid_string, message: l.message }),
							s.dirty())
					else if (l.kind === 'cuid')
						Uv.test(e.data) ||
							((o = this._getOrReturnCtx(e, o)),
							x(o, { validation: 'cuid', code: y.invalid_string, message: l.message }),
							s.dirty())
					else if (l.kind === 'cuid2')
						Nv.test(e.data) ||
							((o = this._getOrReturnCtx(e, o)),
							x(o, { validation: 'cuid2', code: y.invalid_string, message: l.message }),
							s.dirty())
					else if (l.kind === 'ulid')
						Hv.test(e.data) ||
							((o = this._getOrReturnCtx(e, o)),
							x(o, { validation: 'ulid', code: y.invalid_string, message: l.message }),
							s.dirty())
					else if (l.kind === 'url')
						try {
							new URL(e.data)
						} catch {
							;(o = this._getOrReturnCtx(e, o)),
								x(o, { validation: 'url', code: y.invalid_string, message: l.message }),
								s.dirty()
						}
					else
						l.kind === 'regex'
							? ((l.regex.lastIndex = 0),
								l.regex.test(e.data) ||
									((o = this._getOrReturnCtx(e, o)),
									x(o, { validation: 'regex', code: y.invalid_string, message: l.message }),
									s.dirty()))
							: l.kind === 'trim'
								? (e.data = e.data.trim())
								: l.kind === 'includes'
									? e.data.includes(l.value, l.position) ||
										((o = this._getOrReturnCtx(e, o)),
										x(o, {
											code: y.invalid_string,
											validation: { includes: l.value, position: l.position },
											message: l.message
										}),
										s.dirty())
									: l.kind === 'toLowerCase'
										? (e.data = e.data.toLowerCase())
										: l.kind === 'toUpperCase'
											? (e.data = e.data.toUpperCase())
											: l.kind === 'startsWith'
												? e.data.startsWith(l.value) ||
													((o = this._getOrReturnCtx(e, o)),
													x(o, {
														code: y.invalid_string,
														validation: { startsWith: l.value },
														message: l.message
													}),
													s.dirty())
												: l.kind === 'endsWith'
													? e.data.endsWith(l.value) ||
														((o = this._getOrReturnCtx(e, o)),
														x(o, {
															code: y.invalid_string,
															validation: { endsWith: l.value },
															message: l.message
														}),
														s.dirty())
													: l.kind === 'datetime'
														? Jv(l).test(e.data) ||
															((o = this._getOrReturnCtx(e, o)),
															x(o, {
																code: y.invalid_string,
																validation: 'datetime',
																message: l.message
															}),
															s.dirty())
														: l.kind === 'ip'
															? qv(e.data, l.version) ||
																((o = this._getOrReturnCtx(e, o)),
																x(o, {
																	validation: 'ip',
																	code: y.invalid_string,
																	message: l.message
																}),
																s.dirty())
															: z.assertNever(l)
				return { status: s.value, value: e.data }
			}
			_regex(e, r, s) {
				return this.refinement((o) => e.test(o), {
					validation: r,
					code: y.invalid_string,
					...P.errToObj(s)
				})
			}
			_addCheck(e) {
				return new n({ ...this._def, checks: [...this._def.checks, e] })
			}
			email(e) {
				return this._addCheck({ kind: 'email', ...P.errToObj(e) })
			}
			url(e) {
				return this._addCheck({ kind: 'url', ...P.errToObj(e) })
			}
			emoji(e) {
				return this._addCheck({ kind: 'emoji', ...P.errToObj(e) })
			}
			uuid(e) {
				return this._addCheck({ kind: 'uuid', ...P.errToObj(e) })
			}
			cuid(e) {
				return this._addCheck({ kind: 'cuid', ...P.errToObj(e) })
			}
			cuid2(e) {
				return this._addCheck({ kind: 'cuid2', ...P.errToObj(e) })
			}
			ulid(e) {
				return this._addCheck({ kind: 'ulid', ...P.errToObj(e) })
			}
			ip(e) {
				return this._addCheck({ kind: 'ip', ...P.errToObj(e) })
			}
			datetime(e) {
				var r
				return typeof e == 'string'
					? this._addCheck({ kind: 'datetime', precision: null, offset: !1, message: e })
					: this._addCheck({
							kind: 'datetime',
							precision: typeof e?.precision > 'u' ? null : e?.precision,
							offset: (r = e?.offset) !== null && r !== void 0 ? r : !1,
							...P.errToObj(e?.message)
						})
			}
			regex(e, r) {
				return this._addCheck({ kind: 'regex', regex: e, ...P.errToObj(r) })
			}
			includes(e, r) {
				return this._addCheck({
					kind: 'includes',
					value: e,
					position: r?.position,
					...P.errToObj(r?.message)
				})
			}
			startsWith(e, r) {
				return this._addCheck({ kind: 'startsWith', value: e, ...P.errToObj(r) })
			}
			endsWith(e, r) {
				return this._addCheck({ kind: 'endsWith', value: e, ...P.errToObj(r) })
			}
			min(e, r) {
				return this._addCheck({ kind: 'min', value: e, ...P.errToObj(r) })
			}
			max(e, r) {
				return this._addCheck({ kind: 'max', value: e, ...P.errToObj(r) })
			}
			length(e, r) {
				return this._addCheck({ kind: 'length', value: e, ...P.errToObj(r) })
			}
			nonempty(e) {
				return this.min(1, P.errToObj(e))
			}
			trim() {
				return new n({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] })
			}
			toLowerCase() {
				return new n({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] })
			}
			toUpperCase() {
				return new n({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] })
			}
			get isDatetime() {
				return !!this._def.checks.find((e) => e.kind === 'datetime')
			}
			get isEmail() {
				return !!this._def.checks.find((e) => e.kind === 'email')
			}
			get isURL() {
				return !!this._def.checks.find((e) => e.kind === 'url')
			}
			get isEmoji() {
				return !!this._def.checks.find((e) => e.kind === 'emoji')
			}
			get isUUID() {
				return !!this._def.checks.find((e) => e.kind === 'uuid')
			}
			get isCUID() {
				return !!this._def.checks.find((e) => e.kind === 'cuid')
			}
			get isCUID2() {
				return !!this._def.checks.find((e) => e.kind === 'cuid2')
			}
			get isULID() {
				return !!this._def.checks.find((e) => e.kind === 'ulid')
			}
			get isIP() {
				return !!this._def.checks.find((e) => e.kind === 'ip')
			}
			get minLength() {
				let e = null
				for (let r of this._def.checks)
					r.kind === 'min' && (e === null || r.value > e) && (e = r.value)
				return e
			}
			get maxLength() {
				let e = null
				for (let r of this._def.checks)
					r.kind === 'max' && (e === null || r.value < e) && (e = r.value)
				return e
			}
		}
		Te.create = (n) => {
			var e
			return new Te({
				checks: [],
				typeName: I.ZodString,
				coerce: (e = n?.coerce) !== null && e !== void 0 ? e : !1,
				...R(n)
			})
		}
		He = class n extends O {
			constructor() {
				super(...arguments),
					(this.min = this.gte),
					(this.max = this.lte),
					(this.step = this.multipleOf)
			}
			_parse(e) {
				if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== w.number)) {
					let l = this._getOrReturnCtx(e)
					return x(l, { code: y.invalid_type, expected: w.number, received: l.parsedType }), $
				}
				let s,
					o = new te()
				for (let l of this._def.checks)
					l.kind === 'int'
						? z.isInteger(e.data) ||
							((s = this._getOrReturnCtx(e, s)),
							x(s, {
								code: y.invalid_type,
								expected: 'integer',
								received: 'float',
								message: l.message
							}),
							o.dirty())
						: l.kind === 'min'
							? (l.inclusive ? e.data < l.value : e.data <= l.value) &&
								((s = this._getOrReturnCtx(e, s)),
								x(s, {
									code: y.too_small,
									minimum: l.value,
									type: 'number',
									inclusive: l.inclusive,
									exact: !1,
									message: l.message
								}),
								o.dirty())
							: l.kind === 'max'
								? (l.inclusive ? e.data > l.value : e.data >= l.value) &&
									((s = this._getOrReturnCtx(e, s)),
									x(s, {
										code: y.too_big,
										maximum: l.value,
										type: 'number',
										inclusive: l.inclusive,
										exact: !1,
										message: l.message
									}),
									o.dirty())
								: l.kind === 'multipleOf'
									? Zv(e.data, l.value) !== 0 &&
										((s = this._getOrReturnCtx(e, s)),
										x(s, { code: y.not_multiple_of, multipleOf: l.value, message: l.message }),
										o.dirty())
									: l.kind === 'finite'
										? Number.isFinite(e.data) ||
											((s = this._getOrReturnCtx(e, s)),
											x(s, { code: y.not_finite, message: l.message }),
											o.dirty())
										: z.assertNever(l)
				return { status: o.value, value: e.data }
			}
			gte(e, r) {
				return this.setLimit('min', e, !0, P.toString(r))
			}
			gt(e, r) {
				return this.setLimit('min', e, !1, P.toString(r))
			}
			lte(e, r) {
				return this.setLimit('max', e, !0, P.toString(r))
			}
			lt(e, r) {
				return this.setLimit('max', e, !1, P.toString(r))
			}
			setLimit(e, r, s, o) {
				return new n({
					...this._def,
					checks: [...this._def.checks, { kind: e, value: r, inclusive: s, message: P.toString(o) }]
				})
			}
			_addCheck(e) {
				return new n({ ...this._def, checks: [...this._def.checks, e] })
			}
			int(e) {
				return this._addCheck({ kind: 'int', message: P.toString(e) })
			}
			positive(e) {
				return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: P.toString(e) })
			}
			negative(e) {
				return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: P.toString(e) })
			}
			nonpositive(e) {
				return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: P.toString(e) })
			}
			nonnegative(e) {
				return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: P.toString(e) })
			}
			multipleOf(e, r) {
				return this._addCheck({ kind: 'multipleOf', value: e, message: P.toString(r) })
			}
			finite(e) {
				return this._addCheck({ kind: 'finite', message: P.toString(e) })
			}
			safe(e) {
				return this._addCheck({
					kind: 'min',
					inclusive: !0,
					value: Number.MIN_SAFE_INTEGER,
					message: P.toString(e)
				})._addCheck({
					kind: 'max',
					inclusive: !0,
					value: Number.MAX_SAFE_INTEGER,
					message: P.toString(e)
				})
			}
			get minValue() {
				let e = null
				for (let r of this._def.checks)
					r.kind === 'min' && (e === null || r.value > e) && (e = r.value)
				return e
			}
			get maxValue() {
				let e = null
				for (let r of this._def.checks)
					r.kind === 'max' && (e === null || r.value < e) && (e = r.value)
				return e
			}
			get isInt() {
				return !!this._def.checks.find(
					(e) => e.kind === 'int' || (e.kind === 'multipleOf' && z.isInteger(e.value))
				)
			}
			get isFinite() {
				let e = null,
					r = null
				for (let s of this._def.checks) {
					if (s.kind === 'finite' || s.kind === 'int' || s.kind === 'multipleOf') return !0
					s.kind === 'min'
						? (r === null || s.value > r) && (r = s.value)
						: s.kind === 'max' && (e === null || s.value < e) && (e = s.value)
				}
				return Number.isFinite(r) && Number.isFinite(e)
			}
		}
		He.create = (n) =>
			new He({ checks: [], typeName: I.ZodNumber, coerce: n?.coerce || !1, ...R(n) })
		ze = class n extends O {
			constructor() {
				super(...arguments), (this.min = this.gte), (this.max = this.lte)
			}
			_parse(e) {
				if ((this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== w.bigint)) {
					let l = this._getOrReturnCtx(e)
					return x(l, { code: y.invalid_type, expected: w.bigint, received: l.parsedType }), $
				}
				let s,
					o = new te()
				for (let l of this._def.checks)
					l.kind === 'min'
						? (l.inclusive ? e.data < l.value : e.data <= l.value) &&
							((s = this._getOrReturnCtx(e, s)),
							x(s, {
								code: y.too_small,
								type: 'bigint',
								minimum: l.value,
								inclusive: l.inclusive,
								message: l.message
							}),
							o.dirty())
						: l.kind === 'max'
							? (l.inclusive ? e.data > l.value : e.data >= l.value) &&
								((s = this._getOrReturnCtx(e, s)),
								x(s, {
									code: y.too_big,
									type: 'bigint',
									maximum: l.value,
									inclusive: l.inclusive,
									message: l.message
								}),
								o.dirty())
							: l.kind === 'multipleOf'
								? e.data % l.value !== BigInt(0) &&
									((s = this._getOrReturnCtx(e, s)),
									x(s, { code: y.not_multiple_of, multipleOf: l.value, message: l.message }),
									o.dirty())
								: z.assertNever(l)
				return { status: o.value, value: e.data }
			}
			gte(e, r) {
				return this.setLimit('min', e, !0, P.toString(r))
			}
			gt(e, r) {
				return this.setLimit('min', e, !1, P.toString(r))
			}
			lte(e, r) {
				return this.setLimit('max', e, !0, P.toString(r))
			}
			lt(e, r) {
				return this.setLimit('max', e, !1, P.toString(r))
			}
			setLimit(e, r, s, o) {
				return new n({
					...this._def,
					checks: [...this._def.checks, { kind: e, value: r, inclusive: s, message: P.toString(o) }]
				})
			}
			_addCheck(e) {
				return new n({ ...this._def, checks: [...this._def.checks, e] })
			}
			positive(e) {
				return this._addCheck({
					kind: 'min',
					value: BigInt(0),
					inclusive: !1,
					message: P.toString(e)
				})
			}
			negative(e) {
				return this._addCheck({
					kind: 'max',
					value: BigInt(0),
					inclusive: !1,
					message: P.toString(e)
				})
			}
			nonpositive(e) {
				return this._addCheck({
					kind: 'max',
					value: BigInt(0),
					inclusive: !0,
					message: P.toString(e)
				})
			}
			nonnegative(e) {
				return this._addCheck({
					kind: 'min',
					value: BigInt(0),
					inclusive: !0,
					message: P.toString(e)
				})
			}
			multipleOf(e, r) {
				return this._addCheck({ kind: 'multipleOf', value: e, message: P.toString(r) })
			}
			get minValue() {
				let e = null
				for (let r of this._def.checks)
					r.kind === 'min' && (e === null || r.value > e) && (e = r.value)
				return e
			}
			get maxValue() {
				let e = null
				for (let r of this._def.checks)
					r.kind === 'max' && (e === null || r.value < e) && (e = r.value)
				return e
			}
		}
		ze.create = (n) => {
			var e
			return new ze({
				checks: [],
				typeName: I.ZodBigInt,
				coerce: (e = n?.coerce) !== null && e !== void 0 ? e : !1,
				...R(n)
			})
		}
		We = class extends O {
			_parse(e) {
				if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== w.boolean)) {
					let s = this._getOrReturnCtx(e)
					return x(s, { code: y.invalid_type, expected: w.boolean, received: s.parsedType }), $
				}
				return se(e.data)
			}
		}
		We.create = (n) => new We({ typeName: I.ZodBoolean, coerce: n?.coerce || !1, ...R(n) })
		Ge = class n extends O {
			_parse(e) {
				if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== w.date)) {
					let l = this._getOrReturnCtx(e)
					return x(l, { code: y.invalid_type, expected: w.date, received: l.parsedType }), $
				}
				if (isNaN(e.data.getTime())) {
					let l = this._getOrReturnCtx(e)
					return x(l, { code: y.invalid_date }), $
				}
				let s = new te(),
					o
				for (let l of this._def.checks)
					l.kind === 'min'
						? e.data.getTime() < l.value &&
							((o = this._getOrReturnCtx(e, o)),
							x(o, {
								code: y.too_small,
								message: l.message,
								inclusive: !0,
								exact: !1,
								minimum: l.value,
								type: 'date'
							}),
							s.dirty())
						: l.kind === 'max'
							? e.data.getTime() > l.value &&
								((o = this._getOrReturnCtx(e, o)),
								x(o, {
									code: y.too_big,
									message: l.message,
									inclusive: !0,
									exact: !1,
									maximum: l.value,
									type: 'date'
								}),
								s.dirty())
							: z.assertNever(l)
				return { status: s.value, value: new Date(e.data.getTime()) }
			}
			_addCheck(e) {
				return new n({ ...this._def, checks: [...this._def.checks, e] })
			}
			min(e, r) {
				return this._addCheck({ kind: 'min', value: e.getTime(), message: P.toString(r) })
			}
			max(e, r) {
				return this._addCheck({ kind: 'max', value: e.getTime(), message: P.toString(r) })
			}
			get minDate() {
				let e = null
				for (let r of this._def.checks)
					r.kind === 'min' && (e === null || r.value > e) && (e = r.value)
				return e != null ? new Date(e) : null
			}
			get maxDate() {
				let e = null
				for (let r of this._def.checks)
					r.kind === 'max' && (e === null || r.value < e) && (e = r.value)
				return e != null ? new Date(e) : null
			}
		}
		Ge.create = (n) => new Ge({ checks: [], coerce: n?.coerce || !1, typeName: I.ZodDate, ...R(n) })
		ht = class extends O {
			_parse(e) {
				if (this._getType(e) !== w.symbol) {
					let s = this._getOrReturnCtx(e)
					return x(s, { code: y.invalid_type, expected: w.symbol, received: s.parsedType }), $
				}
				return se(e.data)
			}
		}
		ht.create = (n) => new ht({ typeName: I.ZodSymbol, ...R(n) })
		Ve = class extends O {
			_parse(e) {
				if (this._getType(e) !== w.undefined) {
					let s = this._getOrReturnCtx(e)
					return x(s, { code: y.invalid_type, expected: w.undefined, received: s.parsedType }), $
				}
				return se(e.data)
			}
		}
		Ve.create = (n) => new Ve({ typeName: I.ZodUndefined, ...R(n) })
		Xe = class extends O {
			_parse(e) {
				if (this._getType(e) !== w.null) {
					let s = this._getOrReturnCtx(e)
					return x(s, { code: y.invalid_type, expected: w.null, received: s.parsedType }), $
				}
				return se(e.data)
			}
		}
		Xe.create = (n) => new Xe({ typeName: I.ZodNull, ...R(n) })
		Pe = class extends O {
			constructor() {
				super(...arguments), (this._any = !0)
			}
			_parse(e) {
				return se(e.data)
			}
		}
		Pe.create = (n) => new Pe({ typeName: I.ZodAny, ...R(n) })
		Ce = class extends O {
			constructor() {
				super(...arguments), (this._unknown = !0)
			}
			_parse(e) {
				return se(e.data)
			}
		}
		Ce.create = (n) => new Ce({ typeName: I.ZodUnknown, ...R(n) })
		De = class extends O {
			_parse(e) {
				let r = this._getOrReturnCtx(e)
				return x(r, { code: y.invalid_type, expected: w.never, received: r.parsedType }), $
			}
		}
		De.create = (n) => new De({ typeName: I.ZodNever, ...R(n) })
		ut = class extends O {
			_parse(e) {
				if (this._getType(e) !== w.undefined) {
					let s = this._getOrReturnCtx(e)
					return x(s, { code: y.invalid_type, expected: w.void, received: s.parsedType }), $
				}
				return se(e.data)
			}
		}
		ut.create = (n) => new ut({ typeName: I.ZodVoid, ...R(n) })
		xe = class n extends O {
			_parse(e) {
				let { ctx: r, status: s } = this._processInputParams(e),
					o = this._def
				if (r.parsedType !== w.array)
					return x(r, { code: y.invalid_type, expected: w.array, received: r.parsedType }), $
				if (o.exactLength !== null) {
					let a = r.data.length > o.exactLength.value,
						i = r.data.length < o.exactLength.value
					;(a || i) &&
						(x(r, {
							code: a ? y.too_big : y.too_small,
							minimum: i ? o.exactLength.value : void 0,
							maximum: a ? o.exactLength.value : void 0,
							type: 'array',
							inclusive: !0,
							exact: !0,
							message: o.exactLength.message
						}),
						s.dirty())
				}
				if (
					(o.minLength !== null &&
						r.data.length < o.minLength.value &&
						(x(r, {
							code: y.too_small,
							minimum: o.minLength.value,
							type: 'array',
							inclusive: !0,
							exact: !1,
							message: o.minLength.message
						}),
						s.dirty()),
					o.maxLength !== null &&
						r.data.length > o.maxLength.value &&
						(x(r, {
							code: y.too_big,
							maximum: o.maxLength.value,
							type: 'array',
							inclusive: !0,
							exact: !1,
							message: o.maxLength.message
						}),
						s.dirty()),
					r.common.async)
				)
					return Promise.all(
						[...r.data].map((a, i) => o.type._parseAsync(new ye(r, a, r.path, i)))
					).then((a) => te.mergeArray(s, a))
				let l = [...r.data].map((a, i) => o.type._parseSync(new ye(r, a, r.path, i)))
				return te.mergeArray(s, l)
			}
			get element() {
				return this._def.type
			}
			min(e, r) {
				return new n({ ...this._def, minLength: { value: e, message: P.toString(r) } })
			}
			max(e, r) {
				return new n({ ...this._def, maxLength: { value: e, message: P.toString(r) } })
			}
			length(e, r) {
				return new n({ ...this._def, exactLength: { value: e, message: P.toString(r) } })
			}
			nonempty(e) {
				return this.min(1, e)
			}
		}
		xe.create = (n, e) =>
			new xe({
				type: n,
				minLength: null,
				maxLength: null,
				exactLength: null,
				typeName: I.ZodArray,
				...R(e)
			})
		le = class n extends O {
			constructor() {
				super(...arguments),
					(this._cached = null),
					(this.nonstrict = this.passthrough),
					(this.augment = this.extend)
			}
			_getCached() {
				if (this._cached !== null) return this._cached
				let e = this._def.shape(),
					r = z.objectKeys(e)
				return (this._cached = { shape: e, keys: r })
			}
			_parse(e) {
				if (this._getType(e) !== w.object) {
					let p = this._getOrReturnCtx(e)
					return x(p, { code: y.invalid_type, expected: w.object, received: p.parsedType }), $
				}
				let { status: s, ctx: o } = this._processInputParams(e),
					{ shape: l, keys: a } = this._getCached(),
					i = []
				if (!(this._def.catchall instanceof De && this._def.unknownKeys === 'strip'))
					for (let p in o.data) a.includes(p) || i.push(p)
				let c = []
				for (let p of a) {
					let d = l[p],
						h = o.data[p]
					c.push({
						key: { status: 'valid', value: p },
						value: d._parse(new ye(o, h, o.path, p)),
						alwaysSet: p in o.data
					})
				}
				if (this._def.catchall instanceof De) {
					let p = this._def.unknownKeys
					if (p === 'passthrough')
						for (let d of i)
							c.push({
								key: { status: 'valid', value: d },
								value: { status: 'valid', value: o.data[d] }
							})
					else if (p === 'strict')
						i.length > 0 && (x(o, { code: y.unrecognized_keys, keys: i }), s.dirty())
					else if (p !== 'strip')
						throw new Error('Internal ZodObject error: invalid unknownKeys value.')
				} else {
					let p = this._def.catchall
					for (let d of i) {
						let h = o.data[d]
						c.push({
							key: { status: 'valid', value: d },
							value: p._parse(new ye(o, h, o.path, d)),
							alwaysSet: d in o.data
						})
					}
				}
				return o.common.async
					? Promise.resolve()
							.then(async () => {
								let p = []
								for (let d of c) {
									let h = await d.key
									p.push({ key: h, value: await d.value, alwaysSet: d.alwaysSet })
								}
								return p
							})
							.then((p) => te.mergeObjectSync(s, p))
					: te.mergeObjectSync(s, c)
			}
			get shape() {
				return this._def.shape()
			}
			strict(e) {
				return (
					P.errToObj,
					new n({
						...this._def,
						unknownKeys: 'strict',
						...(e !== void 0
							? {
									errorMap: (r, s) => {
										var o, l, a, i
										let c =
											(a =
												(l = (o = this._def).errorMap) === null || l === void 0
													? void 0
													: l.call(o, r, s).message) !== null && a !== void 0
												? a
												: s.defaultError
										return r.code === 'unrecognized_keys'
											? { message: (i = P.errToObj(e).message) !== null && i !== void 0 ? i : c }
											: { message: c }
									}
								}
							: {})
					})
				)
			}
			strip() {
				return new n({ ...this._def, unknownKeys: 'strip' })
			}
			passthrough() {
				return new n({ ...this._def, unknownKeys: 'passthrough' })
			}
			extend(e) {
				return new n({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) })
			}
			merge(e) {
				return new n({
					unknownKeys: e._def.unknownKeys,
					catchall: e._def.catchall,
					shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
					typeName: I.ZodObject
				})
			}
			setKey(e, r) {
				return this.augment({ [e]: r })
			}
			catchall(e) {
				return new n({ ...this._def, catchall: e })
			}
			pick(e) {
				let r = {}
				return (
					z.objectKeys(e).forEach((s) => {
						e[s] && this.shape[s] && (r[s] = this.shape[s])
					}),
					new n({ ...this._def, shape: () => r })
				)
			}
			omit(e) {
				let r = {}
				return (
					z.objectKeys(this.shape).forEach((s) => {
						e[s] || (r[s] = this.shape[s])
					}),
					new n({ ...this._def, shape: () => r })
				)
			}
			deepPartial() {
				return _t(this)
			}
			partial(e) {
				let r = {}
				return (
					z.objectKeys(this.shape).forEach((s) => {
						let o = this.shape[s]
						e && !e[s] ? (r[s] = o) : (r[s] = o.optional())
					}),
					new n({ ...this._def, shape: () => r })
				)
			}
			required(e) {
				let r = {}
				return (
					z.objectKeys(this.shape).forEach((s) => {
						if (e && !e[s]) r[s] = this.shape[s]
						else {
							let l = this.shape[s]
							for (; l instanceof me; ) l = l._def.innerType
							r[s] = l
						}
					}),
					new n({ ...this._def, shape: () => r })
				)
			}
			keyof() {
				return mh(z.objectKeys(this.shape))
			}
		}
		le.create = (n, e) =>
			new le({
				shape: () => n,
				unknownKeys: 'strip',
				catchall: De.create(),
				typeName: I.ZodObject,
				...R(e)
			})
		le.strictCreate = (n, e) =>
			new le({
				shape: () => n,
				unknownKeys: 'strict',
				catchall: De.create(),
				typeName: I.ZodObject,
				...R(e)
			})
		le.lazycreate = (n, e) =>
			new le({
				shape: n,
				unknownKeys: 'strip',
				catchall: De.create(),
				typeName: I.ZodObject,
				...R(e)
			})
		Je = class extends O {
			_parse(e) {
				let { ctx: r } = this._processInputParams(e),
					s = this._def.options
				function o(l) {
					for (let i of l) if (i.result.status === 'valid') return i.result
					for (let i of l)
						if (i.result.status === 'dirty')
							return r.common.issues.push(...i.ctx.common.issues), i.result
					let a = l.map((i) => new ie(i.ctx.common.issues))
					return x(r, { code: y.invalid_union, unionErrors: a }), $
				}
				if (r.common.async)
					return Promise.all(
						s.map(async (l) => {
							let a = { ...r, common: { ...r.common, issues: [] }, parent: null }
							return {
								result: await l._parseAsync({ data: r.data, path: r.path, parent: a }),
								ctx: a
							}
						})
					).then(o)
				{
					let l,
						a = []
					for (let c of s) {
						let p = { ...r, common: { ...r.common, issues: [] }, parent: null },
							d = c._parseSync({ data: r.data, path: r.path, parent: p })
						if (d.status === 'valid') return d
						d.status === 'dirty' && !l && (l = { result: d, ctx: p }),
							p.common.issues.length && a.push(p.common.issues)
					}
					if (l) return r.common.issues.push(...l.ctx.common.issues), l.result
					let i = a.map((c) => new ie(c))
					return x(r, { code: y.invalid_union, unionErrors: i }), $
				}
			}
			get options() {
				return this._def.options
			}
		}
		Je.create = (n, e) => new Je({ options: n, typeName: I.ZodUnion, ...R(e) })
		;(dr = (n) =>
			n instanceof Ze
				? dr(n.schema)
				: n instanceof ce
					? dr(n.innerType())
					: n instanceof Ye
						? [n.value]
						: n instanceof Ke
							? n.options
							: n instanceof Qe
								? Object.keys(n.enum)
								: n instanceof et
									? dr(n._def.innerType)
									: n instanceof Ve
										? [void 0]
										: n instanceof Xe
											? [null]
											: null),
			(Yt = class n extends O {
				_parse(e) {
					let { ctx: r } = this._processInputParams(e)
					if (r.parsedType !== w.object)
						return x(r, { code: y.invalid_type, expected: w.object, received: r.parsedType }), $
					let s = this.discriminator,
						o = r.data[s],
						l = this.optionsMap.get(o)
					return l
						? r.common.async
							? l._parseAsync({ data: r.data, path: r.path, parent: r })
							: l._parseSync({ data: r.data, path: r.path, parent: r })
						: (x(r, {
								code: y.invalid_union_discriminator,
								options: Array.from(this.optionsMap.keys()),
								path: [s]
							}),
							$)
				}
				get discriminator() {
					return this._def.discriminator
				}
				get options() {
					return this._def.options
				}
				get optionsMap() {
					return this._def.optionsMap
				}
				static create(e, r, s) {
					let o = new Map()
					for (let l of r) {
						let a = dr(l.shape[e])
						if (!a)
							throw new Error(
								`A discriminator value for key \`${e}\` could not be extracted from all schema options`
							)
						for (let i of a) {
							if (o.has(i))
								throw new Error(
									`Discriminator property ${String(e)} has duplicate value ${String(i)}`
								)
							o.set(i, l)
						}
					}
					return new n({
						typeName: I.ZodDiscriminatedUnion,
						discriminator: e,
						options: r,
						optionsMap: o,
						...R(s)
					})
				}
			})
		qe = class extends O {
			_parse(e) {
				let { status: r, ctx: s } = this._processInputParams(e),
					o = (l, a) => {
						if (hr(l) || hr(a)) return $
						let i = Es(l.value, a.value)
						return i.valid
							? ((ur(l) || ur(a)) && r.dirty(), { status: r.value, value: i.data })
							: (x(s, { code: y.invalid_intersection_types }), $)
					}
				return s.common.async
					? Promise.all([
							this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
							this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })
						]).then(([l, a]) => o(l, a))
					: o(
							this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
							this._def.right._parseSync({ data: s.data, path: s.path, parent: s })
						)
			}
		}
		qe.create = (n, e, r) => new qe({ left: n, right: e, typeName: I.ZodIntersection, ...R(r) })
		be = class n extends O {
			_parse(e) {
				let { status: r, ctx: s } = this._processInputParams(e)
				if (s.parsedType !== w.array)
					return x(s, { code: y.invalid_type, expected: w.array, received: s.parsedType }), $
				if (s.data.length < this._def.items.length)
					return (
						x(s, {
							code: y.too_small,
							minimum: this._def.items.length,
							inclusive: !0,
							exact: !1,
							type: 'array'
						}),
						$
					)
				!this._def.rest &&
					s.data.length > this._def.items.length &&
					(x(s, {
						code: y.too_big,
						maximum: this._def.items.length,
						inclusive: !0,
						exact: !1,
						type: 'array'
					}),
					r.dirty())
				let l = [...s.data]
					.map((a, i) => {
						let c = this._def.items[i] || this._def.rest
						return c ? c._parse(new ye(s, a, s.path, i)) : null
					})
					.filter((a) => !!a)
				return s.common.async
					? Promise.all(l).then((a) => te.mergeArray(r, a))
					: te.mergeArray(r, l)
			}
			get items() {
				return this._def.items
			}
			rest(e) {
				return new n({ ...this._def, rest: e })
			}
		}
		be.create = (n, e) => {
			if (!Array.isArray(n))
				throw new Error('You must pass an array of schemas to z.tuple([ ... ])')
			return new be({ items: n, typeName: I.ZodTuple, rest: null, ...R(e) })
		}
		;(Kt = class n extends O {
			get keySchema() {
				return this._def.keyType
			}
			get valueSchema() {
				return this._def.valueType
			}
			_parse(e) {
				let { status: r, ctx: s } = this._processInputParams(e)
				if (s.parsedType !== w.object)
					return x(s, { code: y.invalid_type, expected: w.object, received: s.parsedType }), $
				let o = [],
					l = this._def.keyType,
					a = this._def.valueType
				for (let i in s.data)
					o.push({
						key: l._parse(new ye(s, i, s.path, i)),
						value: a._parse(new ye(s, s.data[i], s.path, i))
					})
				return s.common.async ? te.mergeObjectAsync(r, o) : te.mergeObjectSync(r, o)
			}
			get element() {
				return this._def.valueType
			}
			static create(e, r, s) {
				return r instanceof O
					? new n({ keyType: e, valueType: r, typeName: I.ZodRecord, ...R(s) })
					: new n({ keyType: Te.create(), valueType: e, typeName: I.ZodRecord, ...R(r) })
			}
		}),
			(mt = class extends O {
				get keySchema() {
					return this._def.keyType
				}
				get valueSchema() {
					return this._def.valueType
				}
				_parse(e) {
					let { status: r, ctx: s } = this._processInputParams(e)
					if (s.parsedType !== w.map)
						return x(s, { code: y.invalid_type, expected: w.map, received: s.parsedType }), $
					let o = this._def.keyType,
						l = this._def.valueType,
						a = [...s.data.entries()].map(([i, c], p) => ({
							key: o._parse(new ye(s, i, s.path, [p, 'key'])),
							value: l._parse(new ye(s, c, s.path, [p, 'value']))
						}))
					if (s.common.async) {
						let i = new Map()
						return Promise.resolve().then(async () => {
							for (let c of a) {
								let p = await c.key,
									d = await c.value
								if (p.status === 'aborted' || d.status === 'aborted') return $
								;(p.status === 'dirty' || d.status === 'dirty') && r.dirty(),
									i.set(p.value, d.value)
							}
							return { status: r.value, value: i }
						})
					} else {
						let i = new Map()
						for (let c of a) {
							let p = c.key,
								d = c.value
							if (p.status === 'aborted' || d.status === 'aborted') return $
							;(p.status === 'dirty' || d.status === 'dirty') && r.dirty(), i.set(p.value, d.value)
						}
						return { status: r.value, value: i }
					}
				}
			})
		mt.create = (n, e, r) => new mt({ valueType: e, keyType: n, typeName: I.ZodMap, ...R(r) })
		yt = class n extends O {
			_parse(e) {
				let { status: r, ctx: s } = this._processInputParams(e)
				if (s.parsedType !== w.set)
					return x(s, { code: y.invalid_type, expected: w.set, received: s.parsedType }), $
				let o = this._def
				o.minSize !== null &&
					s.data.size < o.minSize.value &&
					(x(s, {
						code: y.too_small,
						minimum: o.minSize.value,
						type: 'set',
						inclusive: !0,
						exact: !1,
						message: o.minSize.message
					}),
					r.dirty()),
					o.maxSize !== null &&
						s.data.size > o.maxSize.value &&
						(x(s, {
							code: y.too_big,
							maximum: o.maxSize.value,
							type: 'set',
							inclusive: !0,
							exact: !1,
							message: o.maxSize.message
						}),
						r.dirty())
				let l = this._def.valueType
				function a(c) {
					let p = new Set()
					for (let d of c) {
						if (d.status === 'aborted') return $
						d.status === 'dirty' && r.dirty(), p.add(d.value)
					}
					return { status: r.value, value: p }
				}
				let i = [...s.data.values()].map((c, p) => l._parse(new ye(s, c, s.path, p)))
				return s.common.async ? Promise.all(i).then((c) => a(c)) : a(i)
			}
			min(e, r) {
				return new n({ ...this._def, minSize: { value: e, message: P.toString(r) } })
			}
			max(e, r) {
				return new n({ ...this._def, maxSize: { value: e, message: P.toString(r) } })
			}
			size(e, r) {
				return this.min(e, r).max(e, r)
			}
			nonempty(e) {
				return this.min(1, e)
			}
		}
		yt.create = (n, e) =>
			new yt({ valueType: n, minSize: null, maxSize: null, typeName: I.ZodSet, ...R(e) })
		;(Qt = class n extends O {
			constructor() {
				super(...arguments), (this.validate = this.implement)
			}
			_parse(e) {
				let { ctx: r } = this._processInputParams(e)
				if (r.parsedType !== w.function)
					return x(r, { code: y.invalid_type, expected: w.function, received: r.parsedType }), $
				function s(i, c) {
					return qt({
						data: i,
						path: r.path,
						errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Jt(), Tt].filter((p) => !!p),
						issueData: { code: y.invalid_arguments, argumentsError: c }
					})
				}
				function o(i, c) {
					return qt({
						data: i,
						path: r.path,
						errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Jt(), Tt].filter((p) => !!p),
						issueData: { code: y.invalid_return_type, returnTypeError: c }
					})
				}
				let l = { errorMap: r.common.contextualErrorMap },
					a = r.data
				if (this._def.returns instanceof Me) {
					let i = this
					return se(async function (...c) {
						let p = new ie([]),
							d = await i._def.args.parseAsync(c, l).catch((g) => {
								throw (p.addIssue(s(c, g)), p)
							}),
							h = await Reflect.apply(a, this, d)
						return await i._def.returns._def.type.parseAsync(h, l).catch((g) => {
							throw (p.addIssue(o(h, g)), p)
						})
					})
				} else {
					let i = this
					return se(function (...c) {
						let p = i._def.args.safeParse(c, l)
						if (!p.success) throw new ie([s(c, p.error)])
						let d = Reflect.apply(a, this, p.data),
							h = i._def.returns.safeParse(d, l)
						if (!h.success) throw new ie([o(d, h.error)])
						return h.data
					})
				}
			}
			parameters() {
				return this._def.args
			}
			returnType() {
				return this._def.returns
			}
			args(...e) {
				return new n({ ...this._def, args: be.create(e).rest(Ce.create()) })
			}
			returns(e) {
				return new n({ ...this._def, returns: e })
			}
			implement(e) {
				return this.parse(e)
			}
			strictImplement(e) {
				return this.parse(e)
			}
			static create(e, r, s) {
				return new n({
					args: e || be.create([]).rest(Ce.create()),
					returns: r || Ce.create(),
					typeName: I.ZodFunction,
					...R(s)
				})
			}
		}),
			(Ze = class extends O {
				get schema() {
					return this._def.getter()
				}
				_parse(e) {
					let { ctx: r } = this._processInputParams(e)
					return this._def.getter()._parse({ data: r.data, path: r.path, parent: r })
				}
			})
		Ze.create = (n, e) => new Ze({ getter: n, typeName: I.ZodLazy, ...R(e) })
		Ye = class extends O {
			_parse(e) {
				if (e.data !== this._def.value) {
					let r = this._getOrReturnCtx(e)
					return x(r, { received: r.data, code: y.invalid_literal, expected: this._def.value }), $
				}
				return { status: 'valid', value: e.data }
			}
			get value() {
				return this._def.value
			}
		}
		Ye.create = (n, e) => new Ye({ value: n, typeName: I.ZodLiteral, ...R(e) })
		Ke = class n extends O {
			_parse(e) {
				if (typeof e.data != 'string') {
					let r = this._getOrReturnCtx(e),
						s = this._def.values
					return (
						x(r, { expected: z.joinValues(s), received: r.parsedType, code: y.invalid_type }), $
					)
				}
				if (this._def.values.indexOf(e.data) === -1) {
					let r = this._getOrReturnCtx(e),
						s = this._def.values
					return x(r, { received: r.data, code: y.invalid_enum_value, options: s }), $
				}
				return se(e.data)
			}
			get options() {
				return this._def.values
			}
			get enum() {
				let e = {}
				for (let r of this._def.values) e[r] = r
				return e
			}
			get Values() {
				let e = {}
				for (let r of this._def.values) e[r] = r
				return e
			}
			get Enum() {
				let e = {}
				for (let r of this._def.values) e[r] = r
				return e
			}
			extract(e) {
				return n.create(e)
			}
			exclude(e) {
				return n.create(this.options.filter((r) => !e.includes(r)))
			}
		}
		Ke.create = mh
		Qe = class extends O {
			_parse(e) {
				let r = z.getValidEnumValues(this._def.values),
					s = this._getOrReturnCtx(e)
				if (s.parsedType !== w.string && s.parsedType !== w.number) {
					let o = z.objectValues(r)
					return (
						x(s, { expected: z.joinValues(o), received: s.parsedType, code: y.invalid_type }), $
					)
				}
				if (r.indexOf(e.data) === -1) {
					let o = z.objectValues(r)
					return x(s, { received: s.data, code: y.invalid_enum_value, options: o }), $
				}
				return se(e.data)
			}
			get enum() {
				return this._def.values
			}
		}
		Qe.create = (n, e) => new Qe({ values: n, typeName: I.ZodNativeEnum, ...R(e) })
		Me = class extends O {
			unwrap() {
				return this._def.type
			}
			_parse(e) {
				let { ctx: r } = this._processInputParams(e)
				if (r.parsedType !== w.promise && r.common.async === !1)
					return x(r, { code: y.invalid_type, expected: w.promise, received: r.parsedType }), $
				let s = r.parsedType === w.promise ? r.data : Promise.resolve(r.data)
				return se(
					s.then((o) =>
						this._def.type.parseAsync(o, { path: r.path, errorMap: r.common.contextualErrorMap })
					)
				)
			}
		}
		Me.create = (n, e) => new Me({ type: n, typeName: I.ZodPromise, ...R(e) })
		ce = class extends O {
			innerType() {
				return this._def.schema
			}
			sourceType() {
				return this._def.schema._def.typeName === I.ZodEffects
					? this._def.schema.sourceType()
					: this._def.schema
			}
			_parse(e) {
				let { status: r, ctx: s } = this._processInputParams(e),
					o = this._def.effect || null,
					l = {
						addIssue: (a) => {
							x(s, a), a.fatal ? r.abort() : r.dirty()
						},
						get path() {
							return s.path
						}
					}
				if (((l.addIssue = l.addIssue.bind(l)), o.type === 'preprocess')) {
					let a = o.transform(s.data, l)
					return s.common.issues.length
						? { status: 'dirty', value: s.data }
						: s.common.async
							? Promise.resolve(a).then((i) =>
									this._def.schema._parseAsync({ data: i, path: s.path, parent: s })
								)
							: this._def.schema._parseSync({ data: a, path: s.path, parent: s })
				}
				if (o.type === 'refinement') {
					let a = (i) => {
						let c = o.refinement(i, l)
						if (s.common.async) return Promise.resolve(c)
						if (c instanceof Promise)
							throw new Error(
								'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
							)
						return i
					}
					if (s.common.async === !1) {
						let i = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s })
						return i.status === 'aborted'
							? $
							: (i.status === 'dirty' && r.dirty(), a(i.value), { status: r.value, value: i.value })
					} else
						return this._def.schema
							._parseAsync({ data: s.data, path: s.path, parent: s })
							.then((i) =>
								i.status === 'aborted'
									? $
									: (i.status === 'dirty' && r.dirty(),
										a(i.value).then(() => ({ status: r.value, value: i.value })))
							)
				}
				if (o.type === 'transform')
					if (s.common.async === !1) {
						let a = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s })
						if (!Pt(a)) return a
						let i = o.transform(a.value, l)
						if (i instanceof Promise)
							throw new Error(
								'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
							)
						return { status: r.value, value: i }
					} else
						return this._def.schema
							._parseAsync({ data: s.data, path: s.path, parent: s })
							.then((a) =>
								Pt(a)
									? Promise.resolve(o.transform(a.value, l)).then((i) => ({
											status: r.value,
											value: i
										}))
									: a
							)
				z.assertNever(o)
			}
		}
		ce.create = (n, e, r) => new ce({ schema: n, typeName: I.ZodEffects, effect: e, ...R(r) })
		ce.createWithPreprocess = (n, e, r) =>
			new ce({
				schema: e,
				effect: { type: 'preprocess', transform: n },
				typeName: I.ZodEffects,
				...R(r)
			})
		me = class extends O {
			_parse(e) {
				return this._getType(e) === w.undefined ? se(void 0) : this._def.innerType._parse(e)
			}
			unwrap() {
				return this._def.innerType
			}
		}
		me.create = (n, e) => new me({ innerType: n, typeName: I.ZodOptional, ...R(e) })
		Se = class extends O {
			_parse(e) {
				return this._getType(e) === w.null ? se(null) : this._def.innerType._parse(e)
			}
			unwrap() {
				return this._def.innerType
			}
		}
		Se.create = (n, e) => new Se({ innerType: n, typeName: I.ZodNullable, ...R(e) })
		et = class extends O {
			_parse(e) {
				let { ctx: r } = this._processInputParams(e),
					s = r.data
				return (
					r.parsedType === w.undefined && (s = this._def.defaultValue()),
					this._def.innerType._parse({ data: s, path: r.path, parent: r })
				)
			}
			removeDefault() {
				return this._def.innerType
			}
		}
		et.create = (n, e) =>
			new et({
				innerType: n,
				typeName: I.ZodDefault,
				defaultValue: typeof e.default == 'function' ? e.default : () => e.default,
				...R(e)
			})
		Dt = class extends O {
			_parse(e) {
				let { ctx: r } = this._processInputParams(e),
					s = { ...r, common: { ...r.common, issues: [] } },
					o = this._def.innerType._parse({ data: s.data, path: s.path, parent: { ...s } })
				return Zt(o)
					? o.then((l) => ({
							status: 'valid',
							value:
								l.status === 'valid'
									? l.value
									: this._def.catchValue({
											get error() {
												return new ie(s.common.issues)
											},
											input: s.data
										})
						}))
					: {
							status: 'valid',
							value:
								o.status === 'valid'
									? o.value
									: this._def.catchValue({
											get error() {
												return new ie(s.common.issues)
											},
											input: s.data
										})
						}
			}
			removeCatch() {
				return this._def.innerType
			}
		}
		Dt.create = (n, e) =>
			new Dt({
				innerType: n,
				typeName: I.ZodCatch,
				catchValue: typeof e.catch == 'function' ? e.catch : () => e.catch,
				...R(e)
			})
		ft = class extends O {
			_parse(e) {
				if (this._getType(e) !== w.nan) {
					let s = this._getOrReturnCtx(e)
					return x(s, { code: y.invalid_type, expected: w.nan, received: s.parsedType }), $
				}
				return { status: 'valid', value: e.data }
			}
		}
		ft.create = (n) => new ft({ typeName: I.ZodNaN, ...R(n) })
		;(yh = Symbol('zod_brand')),
			(en = class extends O {
				_parse(e) {
					let { ctx: r } = this._processInputParams(e),
						s = r.data
					return this._def.type._parse({ data: s, path: r.path, parent: r })
				}
				unwrap() {
					return this._def.type
				}
			}),
			(Mt = class n extends O {
				_parse(e) {
					let { status: r, ctx: s } = this._processInputParams(e)
					if (s.common.async)
						return (async () => {
							let l = await this._def.in._parseAsync({ data: s.data, path: s.path, parent: s })
							return l.status === 'aborted'
								? $
								: l.status === 'dirty'
									? (r.dirty(), xs(l.value))
									: this._def.out._parseAsync({ data: l.value, path: s.path, parent: s })
						})()
					{
						let o = this._def.in._parseSync({ data: s.data, path: s.path, parent: s })
						return o.status === 'aborted'
							? $
							: o.status === 'dirty'
								? (r.dirty(), { status: 'dirty', value: o.value })
								: this._def.out._parseSync({ data: o.value, path: s.path, parent: s })
					}
				}
				static create(e, r) {
					return new n({ in: e, out: r, typeName: I.ZodPipeline })
				}
			}),
			(gt = class extends O {
				_parse(e) {
					let r = this._def.innerType._parse(e)
					return Pt(r) && (r.value = Object.freeze(r.value)), r
				}
			})
		gt.create = (n, e) => new gt({ innerType: n, typeName: I.ZodReadonly, ...R(e) })
		;(Ss = (n, e = {}, r) =>
			n
				? Pe.create().superRefine((s, o) => {
						var l, a
						if (!n(s)) {
							let i = typeof e == 'function' ? e(s) : typeof e == 'string' ? { message: e } : e,
								c =
									(a = (l = i.fatal) !== null && l !== void 0 ? l : r) !== null && a !== void 0
										? a
										: !0,
								p = typeof i == 'string' ? { message: i } : i
							o.addIssue({ code: 'custom', ...p, fatal: c })
						}
					})
				: Pe.create()),
			(Dh = { object: le.lazycreate })
		;(function (n) {
			;(n.ZodString = 'ZodString'),
				(n.ZodNumber = 'ZodNumber'),
				(n.ZodNaN = 'ZodNaN'),
				(n.ZodBigInt = 'ZodBigInt'),
				(n.ZodBoolean = 'ZodBoolean'),
				(n.ZodDate = 'ZodDate'),
				(n.ZodSymbol = 'ZodSymbol'),
				(n.ZodUndefined = 'ZodUndefined'),
				(n.ZodNull = 'ZodNull'),
				(n.ZodAny = 'ZodAny'),
				(n.ZodUnknown = 'ZodUnknown'),
				(n.ZodNever = 'ZodNever'),
				(n.ZodVoid = 'ZodVoid'),
				(n.ZodArray = 'ZodArray'),
				(n.ZodObject = 'ZodObject'),
				(n.ZodUnion = 'ZodUnion'),
				(n.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
				(n.ZodIntersection = 'ZodIntersection'),
				(n.ZodTuple = 'ZodTuple'),
				(n.ZodRecord = 'ZodRecord'),
				(n.ZodMap = 'ZodMap'),
				(n.ZodSet = 'ZodSet'),
				(n.ZodFunction = 'ZodFunction'),
				(n.ZodLazy = 'ZodLazy'),
				(n.ZodLiteral = 'ZodLiteral'),
				(n.ZodEnum = 'ZodEnum'),
				(n.ZodEffects = 'ZodEffects'),
				(n.ZodNativeEnum = 'ZodNativeEnum'),
				(n.ZodOptional = 'ZodOptional'),
				(n.ZodNullable = 'ZodNullable'),
				(n.ZodDefault = 'ZodDefault'),
				(n.ZodCatch = 'ZodCatch'),
				(n.ZodPromise = 'ZodPromise'),
				(n.ZodBranded = 'ZodBranded'),
				(n.ZodPipeline = 'ZodPipeline'),
				(n.ZodReadonly = 'ZodReadonly')
		})(I || (I = {}))
		;(fh = (n, e = { message: `Input not instance of ${n.name}` }) => Ss((r) => r instanceof n, e)),
			(As = Te.create),
			(ks = He.create),
			(gh = ft.create),
			(Fh = ze.create),
			(Bs = We.create),
			(bh = Ge.create),
			(wh = ht.create),
			(vh = Ve.create),
			(Eh = Xe.create),
			(Ch = Pe.create),
			(xh = Ce.create),
			(Sh = De.create),
			(Ah = ut.create),
			(kh = xe.create),
			(Bh = le.create),
			(_h = le.strictCreate),
			(Th = Je.create),
			(Ph = Yt.create),
			(Mh = qe.create),
			(Ih = be.create),
			(jh = Kt.create),
			(Lh = mt.create),
			($h = yt.create),
			(Oh = Qt.create),
			(Rh = Ze.create),
			(Uh = Ye.create),
			(Nh = Ke.create),
			(Hh = Qe.create),
			(zh = Me.create),
			(Cs = ce.create),
			(Wh = me.create),
			(Gh = Se.create),
			(Vh = ce.createWithPreprocess),
			(Xh = Mt.create),
			(Jh = () => As().optional()),
			(qh = () => ks().optional()),
			(Zh = () => Bs().optional()),
			(Yh = {
				string: (n) => Te.create({ ...n, coerce: !0 }),
				number: (n) => He.create({ ...n, coerce: !0 }),
				boolean: (n) => We.create({ ...n, coerce: !0 }),
				bigint: (n) => ze.create({ ...n, coerce: !0 }),
				date: (n) => Ge.create({ ...n, coerce: !0 })
			}),
			(Kh = $),
			(Yv = Object.freeze({
				__proto__: null,
				defaultErrorMap: Tt,
				setErrorMap: hh,
				getErrorMap: Jt,
				makeIssue: qt,
				EMPTY_PATH: uh,
				addIssueToContext: x,
				ParseStatus: te,
				INVALID: $,
				DIRTY: xs,
				OK: se,
				isAborted: hr,
				isDirty: ur,
				isValid: Pt,
				isAsync: Zt,
				get util() {
					return z
				},
				get objectUtil() {
					return pr
				},
				ZodParsedType: w,
				getParsedType: _e,
				ZodType: O,
				ZodString: Te,
				ZodNumber: He,
				ZodBigInt: ze,
				ZodBoolean: We,
				ZodDate: Ge,
				ZodSymbol: ht,
				ZodUndefined: Ve,
				ZodNull: Xe,
				ZodAny: Pe,
				ZodUnknown: Ce,
				ZodNever: De,
				ZodVoid: ut,
				ZodArray: xe,
				ZodObject: le,
				ZodUnion: Je,
				ZodDiscriminatedUnion: Yt,
				ZodIntersection: qe,
				ZodTuple: be,
				ZodRecord: Kt,
				ZodMap: mt,
				ZodSet: yt,
				ZodFunction: Qt,
				ZodLazy: Ze,
				ZodLiteral: Ye,
				ZodEnum: Ke,
				ZodNativeEnum: Qe,
				ZodPromise: Me,
				ZodEffects: ce,
				ZodTransformer: ce,
				ZodOptional: me,
				ZodNullable: Se,
				ZodDefault: et,
				ZodCatch: Dt,
				ZodNaN: ft,
				BRAND: yh,
				ZodBranded: en,
				ZodPipeline: Mt,
				ZodReadonly: gt,
				custom: Ss,
				Schema: O,
				ZodSchema: O,
				late: Dh,
				get ZodFirstPartyTypeKind() {
					return I
				},
				coerce: Yh,
				any: Ch,
				array: kh,
				bigint: Fh,
				boolean: Bs,
				date: bh,
				discriminatedUnion: Ph,
				effect: Cs,
				enum: Nh,
				function: Oh,
				instanceof: fh,
				intersection: Mh,
				lazy: Rh,
				literal: Uh,
				map: Lh,
				nan: gh,
				nativeEnum: Hh,
				never: Sh,
				null: Eh,
				nullable: Gh,
				number: ks,
				object: Bh,
				oboolean: Zh,
				onumber: qh,
				optional: Wh,
				ostring: Jh,
				pipeline: Xh,
				preprocess: Vh,
				promise: zh,
				record: jh,
				set: $h,
				strictObject: _h,
				string: As,
				symbol: wh,
				transformer: Cs,
				tuple: Ih,
				undefined: vh,
				union: Th,
				unknown: xh,
				void: Ah,
				NEVER: Kh,
				ZodIssueCode: y,
				quotelessJson: dh,
				ZodError: ie
			}))
	})
var _s = m(() => {
	Qh()
})
var mr = ne((Ie) => {
	'use strict'
	var eu =
			':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
		Kv = eu + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
		tu = '[' + eu + '][' + Kv + ']*',
		Qv = new RegExp('^' + tu + '$'),
		e2 = function (n, e) {
			let r = [],
				s = e.exec(n)
			for (; s; ) {
				let o = []
				o.startIndex = e.lastIndex - s[0].length
				let l = s.length
				for (let a = 0; a < l; a++) o.push(s[a])
				r.push(o), (s = e.exec(n))
			}
			return r
		},
		t2 = function (n) {
			let e = Qv.exec(n)
			return !(e === null || typeof e > 'u')
		}
	Ie.isExist = function (n) {
		return typeof n < 'u'
	}
	Ie.isEmptyObject = function (n) {
		return Object.keys(n).length === 0
	}
	Ie.merge = function (n, e, r) {
		if (e) {
			let s = Object.keys(e),
				o = s.length
			for (let l = 0; l < o; l++) r === 'strict' ? (n[s[l]] = [e[s[l]]]) : (n[s[l]] = e[s[l]])
		}
	}
	Ie.getValue = function (n) {
		return Ie.isExist(n) ? n : ''
	}
	Ie.isName = t2
	Ie.getAllMatches = e2
	Ie.nameRegexp = tu
})
var Ps = ne((lu) => {
	'use strict'
	var Ts = mr(),
		n2 = { allowBooleanAttributes: !1, unpairedTags: [] }
	lu.validate = function (n, e) {
		e = Object.assign({}, n2, e)
		let r = [],
			s = !1,
			o = !1
		n[0] === '\uFEFF' && (n = n.substr(1))
		for (let l = 0; l < n.length; l++)
			if (n[l] === '<' && n[l + 1] === '?') {
				if (((l += 2), (l = ru(n, l)), l.err)) return l
			} else if (n[l] === '<') {
				let a = l
				if ((l++, n[l] === '!')) {
					l = su(n, l)
					continue
				} else {
					let i = !1
					n[l] === '/' && ((i = !0), l++)
					let c = ''
					for (
						;
						l < n.length &&
						n[l] !== '>' &&
						n[l] !== ' ' &&
						n[l] !== '	' &&
						n[l] !==
							`
` &&
						n[l] !== '\r';
						l++
					)
						c += n[l]
					if (
						((c = c.trim()),
						c[c.length - 1] === '/' && ((c = c.substring(0, c.length - 1)), l--),
						!d2(c))
					) {
						let h
						return (
							c.trim().length === 0
								? (h = "Invalid space after '<'.")
								: (h = "Tag '" + c + "' is an invalid name."),
							Q('InvalidTag', h, de(n, l))
						)
					}
					let p = o2(n, l)
					if (p === !1)
						return Q('InvalidAttr', "Attributes for '" + c + "' have open quote.", de(n, l))
					let d = p.value
					if (((l = p.index), d[d.length - 1] === '/')) {
						let h = l - d.length
						d = d.substring(0, d.length - 1)
						let u = ou(d, e)
						if (u === !0) s = !0
						else return Q(u.err.code, u.err.msg, de(n, h + u.err.line))
					} else if (i)
						if (p.tagClosed) {
							if (d.trim().length > 0)
								return Q(
									'InvalidTag',
									"Closing tag '" + c + "' can't have attributes or invalid starting.",
									de(n, a)
								)
							{
								let h = r.pop()
								if (c !== h.tagName) {
									let u = de(n, h.tagStartPos)
									return Q(
										'InvalidTag',
										"Expected closing tag '" +
											h.tagName +
											"' (opened in line " +
											u.line +
											', col ' +
											u.col +
											") instead of closing tag '" +
											c +
											"'.",
										de(n, a)
									)
								}
								r.length == 0 && (o = !0)
							}
						} else
							return Q(
								'InvalidTag',
								"Closing tag '" + c + "' doesn't have proper closing.",
								de(n, l)
							)
					else {
						let h = ou(d, e)
						if (h !== !0) return Q(h.err.code, h.err.msg, de(n, l - d.length + h.err.line))
						if (o === !0) return Q('InvalidXml', 'Multiple possible root nodes found.', de(n, l))
						e.unpairedTags.indexOf(c) !== -1 || r.push({ tagName: c, tagStartPos: a }), (s = !0)
					}
					for (l++; l < n.length; l++)
						if (n[l] === '<')
							if (n[l + 1] === '!') {
								l++, (l = su(n, l))
								continue
							} else if (n[l + 1] === '?') {
								if (((l = ru(n, ++l)), l.err)) return l
							} else break
						else if (n[l] === '&') {
							let h = i2(n, l)
							if (h == -1) return Q('InvalidChar', "char '&' is not expected.", de(n, l))
							l = h
						} else if (o === !0 && !nu(n[l]))
							return Q('InvalidXml', 'Extra text at the end', de(n, l))
					n[l] === '<' && l--
				}
			} else {
				if (nu(n[l])) continue
				return Q('InvalidChar', "char '" + n[l] + "' is not expected.", de(n, l))
			}
		if (s) {
			if (r.length == 1)
				return Q('InvalidTag', "Unclosed tag '" + r[0].tagName + "'.", de(n, r[0].tagStartPos))
			if (r.length > 0)
				return Q(
					'InvalidXml',
					"Invalid '" +
						JSON.stringify(
							r.map((l) => l.tagName),
							null,
							4
						).replace(/\r?\n/g, '') +
						"' found.",
					{ line: 1, col: 1 }
				)
		} else return Q('InvalidXml', 'Start tag expected.', 1)
		return !0
	}
	function nu(n) {
		return (
			n === ' ' ||
			n === '	' ||
			n ===
				`
` ||
			n === '\r'
		)
	}
	function ru(n, e) {
		let r = e
		for (; e < n.length; e++)
			if (n[e] == '?' || n[e] == ' ') {
				let s = n.substr(r, e - r)
				if (e > 5 && s === 'xml')
					return Q(
						'InvalidXml',
						'XML declaration allowed only at the start of the document.',
						de(n, e)
					)
				if (n[e] == '?' && n[e + 1] == '>') {
					e++
					break
				} else continue
			}
		return e
	}
	function su(n, e) {
		if (n.length > e + 5 && n[e + 1] === '-' && n[e + 2] === '-') {
			for (e += 3; e < n.length; e++)
				if (n[e] === '-' && n[e + 1] === '-' && n[e + 2] === '>') {
					e += 2
					break
				}
		} else if (
			n.length > e + 8 &&
			n[e + 1] === 'D' &&
			n[e + 2] === 'O' &&
			n[e + 3] === 'C' &&
			n[e + 4] === 'T' &&
			n[e + 5] === 'Y' &&
			n[e + 6] === 'P' &&
			n[e + 7] === 'E'
		) {
			let r = 1
			for (e += 8; e < n.length; e++)
				if (n[e] === '<') r++
				else if (n[e] === '>' && (r--, r === 0)) break
		} else if (
			n.length > e + 9 &&
			n[e + 1] === '[' &&
			n[e + 2] === 'C' &&
			n[e + 3] === 'D' &&
			n[e + 4] === 'A' &&
			n[e + 5] === 'T' &&
			n[e + 6] === 'A' &&
			n[e + 7] === '['
		) {
			for (e += 8; e < n.length; e++)
				if (n[e] === ']' && n[e + 1] === ']' && n[e + 2] === '>') {
					e += 2
					break
				}
		}
		return e
	}
	var r2 = '"',
		s2 = "'"
	function o2(n, e) {
		let r = '',
			s = '',
			o = !1
		for (; e < n.length; e++) {
			if (n[e] === r2 || n[e] === s2) s === '' ? (s = n[e]) : s !== n[e] || (s = '')
			else if (n[e] === '>' && s === '') {
				o = !0
				break
			}
			r += n[e]
		}
		return s !== '' ? !1 : { value: r, index: e, tagClosed: o }
	}
	var l2 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, 'g')
	function ou(n, e) {
		let r = Ts.getAllMatches(n, l2),
			s = {}
		for (let o = 0; o < r.length; o++) {
			if (r[o][1].length === 0)
				return Q('InvalidAttr', "Attribute '" + r[o][2] + "' has no space in starting.", tn(r[o]))
			if (r[o][3] !== void 0 && r[o][4] === void 0)
				return Q('InvalidAttr', "Attribute '" + r[o][2] + "' is without value.", tn(r[o]))
			if (r[o][3] === void 0 && !e.allowBooleanAttributes)
				return Q('InvalidAttr', "boolean attribute '" + r[o][2] + "' is not allowed.", tn(r[o]))
			let l = r[o][2]
			if (!c2(l)) return Q('InvalidAttr', "Attribute '" + l + "' is an invalid name.", tn(r[o]))
			if (!s.hasOwnProperty(l)) s[l] = 1
			else return Q('InvalidAttr', "Attribute '" + l + "' is repeated.", tn(r[o]))
		}
		return !0
	}
	function a2(n, e) {
		let r = /\d/
		for (n[e] === 'x' && (e++, (r = /[\da-fA-F]/)); e < n.length; e++) {
			if (n[e] === ';') return e
			if (!n[e].match(r)) break
		}
		return -1
	}
	function i2(n, e) {
		if ((e++, n[e] === ';')) return -1
		if (n[e] === '#') return e++, a2(n, e)
		let r = 0
		for (; e < n.length; e++, r++)
			if (!(n[e].match(/\w/) && r < 20)) {
				if (n[e] === ';') break
				return -1
			}
		return e
	}
	function Q(n, e, r) {
		return { err: { code: n, msg: e, line: r.line || r, col: r.col } }
	}
	function c2(n) {
		return Ts.isName(n)
	}
	function d2(n) {
		return Ts.isName(n)
	}
	function de(n, e) {
		let r = n.substring(0, e).split(/\r?\n/)
		return { line: r.length, col: r[r.length - 1].length + 1 }
	}
	function tn(n) {
		return n.startIndex + n[1].length
	}
})
var iu = ne((Ms) => {
	var au = {
			preserveOrder: !1,
			attributeNamePrefix: '@_',
			attributesGroupName: !1,
			textNodeName: '#text',
			ignoreAttributes: !0,
			removeNSPrefix: !1,
			allowBooleanAttributes: !1,
			parseTagValue: !0,
			parseAttributeValue: !1,
			trimValues: !0,
			cdataPropName: !1,
			numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 },
			tagValueProcessor: function (n, e) {
				return e
			},
			attributeValueProcessor: function (n, e) {
				return e
			},
			stopNodes: [],
			alwaysCreateTextNode: !1,
			isArray: () => !1,
			commentPropName: !1,
			unpairedTags: [],
			processEntities: !0,
			htmlEntities: !1,
			ignoreDeclaration: !1,
			ignorePiTags: !1,
			transformTagName: !1,
			transformAttributeName: !1,
			updateTag: function (n, e, r) {
				return n
			}
		},
		p2 = function (n) {
			return Object.assign({}, au, n)
		}
	Ms.buildOptions = p2
	Ms.defaultOptions = au
})
var du = ne((ES, cu) => {
	'use strict'
	var Is = class {
		constructor(e) {
			;(this.tagname = e), (this.child = []), (this[':@'] = {})
		}
		add(e, r) {
			e === '__proto__' && (e = '#__proto__'), this.child.push({ [e]: r })
		}
		addChild(e) {
			e.tagname === '__proto__' && (e.tagname = '#__proto__'),
				e[':@'] && Object.keys(e[':@']).length > 0
					? this.child.push({ [e.tagname]: e.child, ':@': e[':@'] })
					: this.child.push({ [e.tagname]: e.child })
		}
	}
	cu.exports = Is
})
var hu = ne((CS, pu) => {
	var h2 = mr()
	function u2(n, e) {
		let r = {}
		if (
			n[e + 3] === 'O' &&
			n[e + 4] === 'C' &&
			n[e + 5] === 'T' &&
			n[e + 6] === 'Y' &&
			n[e + 7] === 'P' &&
			n[e + 8] === 'E'
		) {
			e = e + 9
			let s = 1,
				o = !1,
				l = !1,
				a = ''
			for (; e < n.length; e++)
				if (n[e] === '<' && !l) {
					if (o && D2(n, e))
						(e += 7),
							([entityName, val, e] = m2(n, e + 1)),
							val.indexOf('&') === -1 &&
								(r[b2(entityName)] = { regx: RegExp(`&${entityName};`, 'g'), val })
					else if (o && f2(n, e)) e += 8
					else if (o && g2(n, e)) e += 8
					else if (o && F2(n, e)) e += 9
					else if (y2) l = !0
					else throw new Error('Invalid DOCTYPE')
					s++, (a = '')
				} else if (n[e] === '>') {
					if ((l ? n[e - 1] === '-' && n[e - 2] === '-' && ((l = !1), s--) : s--, s === 0)) break
				} else n[e] === '[' ? (o = !0) : (a += n[e])
			if (s !== 0) throw new Error('Unclosed DOCTYPE')
		} else throw new Error('Invalid Tag instead of DOCTYPE')
		return { entities: r, i: e }
	}
	function m2(n, e) {
		let r = ''
		for (; e < n.length && n[e] !== "'" && n[e] !== '"'; e++) r += n[e]
		if (((r = r.trim()), r.indexOf(' ') !== -1))
			throw new Error('External entites are not supported')
		let s = n[e++],
			o = ''
		for (; e < n.length && n[e] !== s; e++) o += n[e]
		return [r, o, e]
	}
	function y2(n, e) {
		return n[e + 1] === '!' && n[e + 2] === '-' && n[e + 3] === '-'
	}
	function D2(n, e) {
		return (
			n[e + 1] === '!' &&
			n[e + 2] === 'E' &&
			n[e + 3] === 'N' &&
			n[e + 4] === 'T' &&
			n[e + 5] === 'I' &&
			n[e + 6] === 'T' &&
			n[e + 7] === 'Y'
		)
	}
	function f2(n, e) {
		return (
			n[e + 1] === '!' &&
			n[e + 2] === 'E' &&
			n[e + 3] === 'L' &&
			n[e + 4] === 'E' &&
			n[e + 5] === 'M' &&
			n[e + 6] === 'E' &&
			n[e + 7] === 'N' &&
			n[e + 8] === 'T'
		)
	}
	function g2(n, e) {
		return (
			n[e + 1] === '!' &&
			n[e + 2] === 'A' &&
			n[e + 3] === 'T' &&
			n[e + 4] === 'T' &&
			n[e + 5] === 'L' &&
			n[e + 6] === 'I' &&
			n[e + 7] === 'S' &&
			n[e + 8] === 'T'
		)
	}
	function F2(n, e) {
		return (
			n[e + 1] === '!' &&
			n[e + 2] === 'N' &&
			n[e + 3] === 'O' &&
			n[e + 4] === 'T' &&
			n[e + 5] === 'A' &&
			n[e + 6] === 'T' &&
			n[e + 7] === 'I' &&
			n[e + 8] === 'O' &&
			n[e + 9] === 'N'
		)
	}
	function b2(n) {
		if (h2.isName(n)) return n
		throw new Error(`Invalid entity name ${n}`)
	}
	pu.exports = u2
})
var mu = ne((xS, uu) => {
	var w2 = /^[-+]?0x[a-fA-F0-9]+$/,
		v2 = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/
	!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt)
	!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat)
	var E2 = { hex: !0, leadingZeros: !0, decimalPoint: '.', eNotation: !0 }
	function C2(n, e = {}) {
		if (((e = Object.assign({}, E2, e)), !n || typeof n != 'string')) return n
		let r = n.trim()
		if (e.skipLike !== void 0 && e.skipLike.test(r)) return n
		if (e.hex && w2.test(r)) return Number.parseInt(r, 16)
		{
			let s = v2.exec(r)
			if (s) {
				let o = s[1],
					l = s[2],
					a = x2(s[3]),
					i = s[4] || s[6]
				if (!e.leadingZeros && l.length > 0 && o && r[2] !== '.') return n
				if (!e.leadingZeros && l.length > 0 && !o && r[1] !== '.') return n
				{
					let c = Number(r),
						p = '' + c
					return p.search(/[eE]/) !== -1 || i
						? e.eNotation
							? c
							: n
						: r.indexOf('.') !== -1
							? (p === '0' && a === '') || p === a || (o && p === '-' + a)
								? c
								: n
							: l
								? a === p || o + a === p
									? c
									: n
								: r === p || r === o + p
									? c
									: n
				}
			} else return n
		}
	}
	function x2(n) {
		return (
			n &&
				n.indexOf('.') !== -1 &&
				((n = n.replace(/0+$/, '')),
				n === '.'
					? (n = '0')
					: n[0] === '.'
						? (n = '0' + n)
						: n[n.length - 1] === '.' && (n = n.substr(0, n.length - 1))),
			n
		)
	}
	uu.exports = C2
})
var Du = ne((AS, yu) => {
	'use strict'
	var Os = mr(),
		nn = du(),
		S2 = hu(),
		A2 = mu(),
		SS =
			'<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'.replace(
				/NAME/g,
				Os.nameRegexp
			),
		js = class {
			constructor(e) {
				;(this.options = e),
					(this.currentNode = null),
					(this.tagsNodeStack = []),
					(this.docTypeEntities = {}),
					(this.lastEntities = {
						apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
						gt: { regex: /&(gt|#62|#x3E);/g, val: '>' },
						lt: { regex: /&(lt|#60|#x3C);/g, val: '<' },
						quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
					}),
					(this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: '&' }),
					(this.htmlEntities = {
						space: { regex: /&(nbsp|#160);/g, val: ' ' },
						cent: { regex: /&(cent|#162);/g, val: '\xA2' },
						pound: { regex: /&(pound|#163);/g, val: '\xA3' },
						yen: { regex: /&(yen|#165);/g, val: '\xA5' },
						euro: { regex: /&(euro|#8364);/g, val: '\u20AC' },
						copyright: { regex: /&(copy|#169);/g, val: '\xA9' },
						reg: { regex: /&(reg|#174);/g, val: '\xAE' },
						inr: { regex: /&(inr|#8377);/g, val: '\u20B9' }
					}),
					(this.addExternalEntities = k2),
					(this.parseXml = M2),
					(this.parseTextData = B2),
					(this.resolveNameSpace = _2),
					(this.buildAttributesMap = P2),
					(this.isItStopNode = $2),
					(this.replaceEntitiesValue = j2),
					(this.readStopNodeData = R2),
					(this.saveTextToParentTag = L2),
					(this.addChild = I2)
			}
		}
	function k2(n) {
		let e = Object.keys(n)
		for (let r = 0; r < e.length; r++) {
			let s = e[r]
			this.lastEntities[s] = { regex: new RegExp('&' + s + ';', 'g'), val: n[s] }
		}
	}
	function B2(n, e, r, s, o, l, a) {
		if (n !== void 0 && (this.options.trimValues && !s && (n = n.trim()), n.length > 0)) {
			a || (n = this.replaceEntitiesValue(n))
			let i = this.options.tagValueProcessor(e, n, r, o, l)
			return i == null
				? n
				: typeof i != typeof n || i !== n
					? i
					: this.options.trimValues
						? $s(n, this.options.parseTagValue, this.options.numberParseOptions)
						: n.trim() === n
							? $s(n, this.options.parseTagValue, this.options.numberParseOptions)
							: n
		}
	}
	function _2(n) {
		if (this.options.removeNSPrefix) {
			let e = n.split(':'),
				r = n.charAt(0) === '/' ? '/' : ''
			if (e[0] === 'xmlns') return ''
			e.length === 2 && (n = r + e[1])
		}
		return n
	}
	var T2 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, 'gm')
	function P2(n, e, r) {
		if (!this.options.ignoreAttributes && typeof n == 'string') {
			let s = Os.getAllMatches(n, T2),
				o = s.length,
				l = {}
			for (let a = 0; a < o; a++) {
				let i = this.resolveNameSpace(s[a][1]),
					c = s[a][4],
					p = this.options.attributeNamePrefix + i
				if (i.length)
					if (
						(this.options.transformAttributeName && (p = this.options.transformAttributeName(p)),
						p === '__proto__' && (p = '#__proto__'),
						c !== void 0)
					) {
						this.options.trimValues && (c = c.trim()), (c = this.replaceEntitiesValue(c))
						let d = this.options.attributeValueProcessor(i, c, e)
						d == null
							? (l[p] = c)
							: typeof d != typeof c || d !== c
								? (l[p] = d)
								: (l[p] = $s(c, this.options.parseAttributeValue, this.options.numberParseOptions))
					} else this.options.allowBooleanAttributes && (l[p] = !0)
			}
			if (!Object.keys(l).length) return
			if (this.options.attributesGroupName) {
				let a = {}
				return (a[this.options.attributesGroupName] = l), a
			}
			return l
		}
	}
	var M2 = function (n) {
		n = n.replace(
			/\r\n?/g,
			`
`
		)
		let e = new nn('!xml'),
			r = e,
			s = '',
			o = ''
		for (let l = 0; l < n.length; l++)
			if (n[l] === '<')
				if (n[l + 1] === '/') {
					let i = Ft(n, '>', l, 'Closing Tag is not closed.'),
						c = n.substring(l + 2, i).trim()
					if (this.options.removeNSPrefix) {
						let h = c.indexOf(':')
						h !== -1 && (c = c.substr(h + 1))
					}
					this.options.transformTagName && (c = this.options.transformTagName(c)),
						r && (s = this.saveTextToParentTag(s, r, o))
					let p = o.substring(o.lastIndexOf('.') + 1)
					if (c && this.options.unpairedTags.indexOf(c) !== -1)
						throw new Error(`Unpaired tag can not be used as closing tag: </${c}>`)
					let d = 0
					p && this.options.unpairedTags.indexOf(p) !== -1
						? ((d = o.lastIndexOf('.', o.lastIndexOf('.') - 1)), this.tagsNodeStack.pop())
						: (d = o.lastIndexOf('.')),
						(o = o.substring(0, d)),
						(r = this.tagsNodeStack.pop()),
						(s = ''),
						(l = i)
				} else if (n[l + 1] === '?') {
					let i = Ls(n, l, !1, '?>')
					if (!i) throw new Error('Pi Tag is not closed.')
					if (
						((s = this.saveTextToParentTag(s, r, o)),
						!(
							(this.options.ignoreDeclaration && i.tagName === '?xml') ||
							this.options.ignorePiTags
						))
					) {
						let c = new nn(i.tagName)
						c.add(this.options.textNodeName, ''),
							i.tagName !== i.tagExp &&
								i.attrExpPresent &&
								(c[':@'] = this.buildAttributesMap(i.tagExp, o, i.tagName)),
							this.addChild(r, c, o)
					}
					l = i.closeIndex + 1
				} else if (n.substr(l + 1, 3) === '!--') {
					let i = Ft(n, '-->', l + 4, 'Comment is not closed.')
					if (this.options.commentPropName) {
						let c = n.substring(l + 4, i - 2)
						;(s = this.saveTextToParentTag(s, r, o)),
							r.add(this.options.commentPropName, [{ [this.options.textNodeName]: c }])
					}
					l = i
				} else if (n.substr(l + 1, 2) === '!D') {
					let i = S2(n, l)
					;(this.docTypeEntities = i.entities), (l = i.i)
				} else if (n.substr(l + 1, 2) === '![') {
					let i = Ft(n, ']]>', l, 'CDATA is not closed.') - 2,
						c = n.substring(l + 9, i)
					if (((s = this.saveTextToParentTag(s, r, o)), this.options.cdataPropName))
						r.add(this.options.cdataPropName, [{ [this.options.textNodeName]: c }])
					else {
						let p = this.parseTextData(c, r.tagname, o, !0, !1, !0)
						p == null && (p = ''), r.add(this.options.textNodeName, p)
					}
					l = i + 2
				} else {
					let i = Ls(n, l, this.options.removeNSPrefix),
						c = i.tagName,
						p = i.rawTagName,
						d = i.tagExp,
						h = i.attrExpPresent,
						u = i.closeIndex
					this.options.transformTagName && (c = this.options.transformTagName(c)),
						r && s && r.tagname !== '!xml' && (s = this.saveTextToParentTag(s, r, o, !1))
					let g = r
					if (
						(g &&
							this.options.unpairedTags.indexOf(g.tagname) !== -1 &&
							((r = this.tagsNodeStack.pop()), (o = o.substring(0, o.lastIndexOf('.')))),
						c !== e.tagname && (o += o ? '.' + c : c),
						this.isItStopNode(this.options.stopNodes, o, c))
					) {
						let E = ''
						if (d.length > 0 && d.lastIndexOf('/') === d.length - 1) l = i.closeIndex
						else if (this.options.unpairedTags.indexOf(c) !== -1) l = i.closeIndex
						else {
							let v = this.readStopNodeData(n, p, u + 1)
							if (!v) throw new Error(`Unexpected end of ${p}`)
							;(l = v.i), (E = v.tagContent)
						}
						let C = new nn(c)
						c !== d && h && (C[':@'] = this.buildAttributesMap(d, o, c)),
							E && (E = this.parseTextData(E, c, o, !0, h, !0, !0)),
							(o = o.substr(0, o.lastIndexOf('.'))),
							C.add(this.options.textNodeName, E),
							this.addChild(r, C, o)
					} else {
						if (d.length > 0 && d.lastIndexOf('/') === d.length - 1) {
							c[c.length - 1] === '/'
								? ((c = c.substr(0, c.length - 1)), (o = o.substr(0, o.length - 1)), (d = c))
								: (d = d.substr(0, d.length - 1)),
								this.options.transformTagName && (c = this.options.transformTagName(c))
							let E = new nn(c)
							c !== d && h && (E[':@'] = this.buildAttributesMap(d, o, c)),
								this.addChild(r, E, o),
								(o = o.substr(0, o.lastIndexOf('.')))
						} else {
							let E = new nn(c)
							this.tagsNodeStack.push(r),
								c !== d && h && (E[':@'] = this.buildAttributesMap(d, o, c)),
								this.addChild(r, E, o),
								(r = E)
						}
						;(s = ''), (l = u)
					}
				}
			else s += n[l]
		return e.child
	}
	function I2(n, e, r) {
		let s = this.options.updateTag(e.tagname, r, e[':@'])
		s === !1 || (typeof s == 'string' && (e.tagname = s), n.addChild(e))
	}
	var j2 = function (n) {
		if (this.options.processEntities) {
			for (let e in this.docTypeEntities) {
				let r = this.docTypeEntities[e]
				n = n.replace(r.regx, r.val)
			}
			for (let e in this.lastEntities) {
				let r = this.lastEntities[e]
				n = n.replace(r.regex, r.val)
			}
			if (this.options.htmlEntities)
				for (let e in this.htmlEntities) {
					let r = this.htmlEntities[e]
					n = n.replace(r.regex, r.val)
				}
			n = n.replace(this.ampEntity.regex, this.ampEntity.val)
		}
		return n
	}
	function L2(n, e, r, s) {
		return (
			n &&
				(s === void 0 && (s = Object.keys(e.child).length === 0),
				(n = this.parseTextData(
					n,
					e.tagname,
					r,
					!1,
					e[':@'] ? Object.keys(e[':@']).length !== 0 : !1,
					s
				)),
				n !== void 0 && n !== '' && e.add(this.options.textNodeName, n),
				(n = '')),
			n
		)
	}
	function $2(n, e, r) {
		let s = '*.' + r
		for (let o in n) {
			let l = n[o]
			if (s === l || e === l) return !0
		}
		return !1
	}
	function O2(n, e, r = '>') {
		let s,
			o = ''
		for (let l = e; l < n.length; l++) {
			let a = n[l]
			if (s) a === s && (s = '')
			else if (a === '"' || a === "'") s = a
			else if (a === r[0])
				if (r[1]) {
					if (n[l + 1] === r[1]) return { data: o, index: l }
				} else return { data: o, index: l }
			else a === '	' && (a = ' ')
			o += a
		}
	}
	function Ft(n, e, r, s) {
		let o = n.indexOf(e, r)
		if (o === -1) throw new Error(s)
		return o + e.length - 1
	}
	function Ls(n, e, r, s = '>') {
		let o = O2(n, e + 1, s)
		if (!o) return
		let l = o.data,
			a = o.index,
			i = l.search(/\s/),
			c = l,
			p = !0
		i !== -1 && ((c = l.substr(0, i).replace(/\s\s*$/, '')), (l = l.substr(i + 1)))
		let d = c
		if (r) {
			let h = c.indexOf(':')
			h !== -1 && ((c = c.substr(h + 1)), (p = c !== o.data.substr(h + 1)))
		}
		return { tagName: c, tagExp: l, closeIndex: a, attrExpPresent: p, rawTagName: d }
	}
	function R2(n, e, r) {
		let s = r,
			o = 1
		for (; r < n.length; r++)
			if (n[r] === '<')
				if (n[r + 1] === '/') {
					let l = Ft(n, '>', r, `${e} is not closed`)
					if (n.substring(r + 2, l).trim() === e && (o--, o === 0))
						return { tagContent: n.substring(s, r), i: l }
					r = l
				} else if (n[r + 1] === '?') r = Ft(n, '?>', r + 1, 'StopNode is not closed.')
				else if (n.substr(r + 1, 3) === '!--') r = Ft(n, '-->', r + 3, 'StopNode is not closed.')
				else if (n.substr(r + 1, 2) === '![') r = Ft(n, ']]>', r, 'StopNode is not closed.') - 2
				else {
					let l = Ls(n, r, '>')
					l &&
						((l && l.tagName) === e && l.tagExp[l.tagExp.length - 1] !== '/' && o++,
						(r = l.closeIndex))
				}
	}
	function $s(n, e, r) {
		if (e && typeof n == 'string') {
			let s = n.trim()
			return s === 'true' ? !0 : s === 'false' ? !1 : A2(n, r)
		} else return Os.isExist(n) ? n : ''
	}
	yu.exports = js
})
var Fu = ne((gu) => {
	'use strict'
	function U2(n, e) {
		return fu(n, e)
	}
	function fu(n, e, r) {
		let s,
			o = {}
		for (let l = 0; l < n.length; l++) {
			let a = n[l],
				i = N2(a),
				c = ''
			if ((r === void 0 ? (c = i) : (c = r + '.' + i), i === e.textNodeName))
				s === void 0 ? (s = a[i]) : (s += '' + a[i])
			else {
				if (i === void 0) continue
				if (a[i]) {
					let p = fu(a[i], e, c),
						d = z2(p, e)
					a[':@']
						? H2(p, a[':@'], c, e)
						: Object.keys(p).length === 1 && p[e.textNodeName] !== void 0 && !e.alwaysCreateTextNode
							? (p = p[e.textNodeName])
							: Object.keys(p).length === 0 &&
								(e.alwaysCreateTextNode ? (p[e.textNodeName] = '') : (p = '')),
						o[i] !== void 0 && o.hasOwnProperty(i)
							? (Array.isArray(o[i]) || (o[i] = [o[i]]), o[i].push(p))
							: e.isArray(i, c, d)
								? (o[i] = [p])
								: (o[i] = p)
				}
			}
		}
		return (
			typeof s == 'string'
				? s.length > 0 && (o[e.textNodeName] = s)
				: s !== void 0 && (o[e.textNodeName] = s),
			o
		)
	}
	function N2(n) {
		let e = Object.keys(n)
		for (let r = 0; r < e.length; r++) {
			let s = e[r]
			if (s !== ':@') return s
		}
	}
	function H2(n, e, r, s) {
		if (e) {
			let o = Object.keys(e),
				l = o.length
			for (let a = 0; a < l; a++) {
				let i = o[a]
				s.isArray(i, r + '.' + i, !0, !0) ? (n[i] = [e[i]]) : (n[i] = e[i])
			}
		}
	}
	function z2(n, e) {
		let { textNodeName: r } = e,
			s = Object.keys(n).length
		return !!(s === 0 || (s === 1 && (n[r] || typeof n[r] == 'boolean' || n[r] === 0)))
	}
	gu.prettify = U2
})
var wu = ne((BS, bu) => {
	var { buildOptions: W2 } = iu(),
		G2 = Du(),
		{ prettify: V2 } = Fu(),
		X2 = Ps(),
		Rs = class {
			constructor(e) {
				;(this.externalEntities = {}), (this.options = W2(e))
			}
			parse(e, r) {
				if (typeof e != 'string')
					if (e.toString) e = e.toString()
					else throw new Error('XML data is accepted in String or Bytes[] form.')
				if (r) {
					r === !0 && (r = {})
					let l = X2.validate(e, r)
					if (l !== !0) throw Error(`${l.err.msg}:${l.err.line}:${l.err.col}`)
				}
				let s = new G2(this.options)
				s.addExternalEntities(this.externalEntities)
				let o = s.parseXml(e)
				return this.options.preserveOrder || o === void 0 ? o : V2(o, this.options)
			}
			addEntity(e, r) {
				if (r.indexOf('&') !== -1) throw new Error("Entity value can't have '&'")
				if (e.indexOf('&') !== -1 || e.indexOf(';') !== -1)
					throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'")
				if (r === '&') throw new Error("An entity with value '&' is not permitted")
				this.externalEntities[e] = r
			}
		}
	bu.exports = Rs
})
var Su = ne((_S, xu) => {
	var J2 = `
`
	function q2(n, e) {
		let r = ''
		return e.format && e.indentBy.length > 0 && (r = J2), Eu(n, e, '', r)
	}
	function Eu(n, e, r, s) {
		let o = '',
			l = !1
		for (let a = 0; a < n.length; a++) {
			let i = n[a],
				c = Z2(i)
			if (c === void 0) continue
			let p = ''
			if ((r.length === 0 ? (p = c) : (p = `${r}.${c}`), c === e.textNodeName)) {
				let E = i[c]
				Y2(p, e) || ((E = e.tagValueProcessor(c, E)), (E = Cu(E, e))),
					l && (o += s),
					(o += E),
					(l = !1)
				continue
			} else if (c === e.cdataPropName) {
				l && (o += s), (o += `<![CDATA[${i[c][0][e.textNodeName]}]]>`), (l = !1)
				continue
			} else if (c === e.commentPropName) {
				;(o += s + `<!--${i[c][0][e.textNodeName]}-->`), (l = !0)
				continue
			} else if (c[0] === '?') {
				let E = vu(i[':@'], e),
					C = c === '?xml' ? '' : s,
					v = i[c][0][e.textNodeName]
				;(v = v.length !== 0 ? ' ' + v : ''), (o += C + `<${c}${v}${E}?>`), (l = !0)
				continue
			}
			let d = s
			d !== '' && (d += e.indentBy)
			let h = vu(i[':@'], e),
				u = s + `<${c}${h}`,
				g = Eu(i[c], e, p, d)
			e.unpairedTags.indexOf(c) !== -1
				? e.suppressUnpairedNode
					? (o += u + '>')
					: (o += u + '/>')
				: (!g || g.length === 0) && e.suppressEmptyNode
					? (o += u + '/>')
					: g && g.endsWith('>')
						? (o += u + `>${g}${s}</${c}>`)
						: ((o += u + '>'),
							g && s !== '' && (g.includes('/>') || g.includes('</'))
								? (o += s + e.indentBy + g + s)
								: (o += g),
							(o += `</${c}>`)),
				(l = !0)
		}
		return o
	}
	function Z2(n) {
		let e = Object.keys(n)
		for (let r = 0; r < e.length; r++) {
			let s = e[r]
			if (n.hasOwnProperty(s) && s !== ':@') return s
		}
	}
	function vu(n, e) {
		let r = ''
		if (n && !e.ignoreAttributes)
			for (let s in n) {
				if (!n.hasOwnProperty(s)) continue
				let o = e.attributeValueProcessor(s, n[s])
				;(o = Cu(o, e)),
					o === !0 && e.suppressBooleanAttributes
						? (r += ` ${s.substr(e.attributeNamePrefix.length)}`)
						: (r += ` ${s.substr(e.attributeNamePrefix.length)}="${o}"`)
			}
		return r
	}
	function Y2(n, e) {
		n = n.substr(0, n.length - e.textNodeName.length - 1)
		let r = n.substr(n.lastIndexOf('.') + 1)
		for (let s in e.stopNodes) if (e.stopNodes[s] === n || e.stopNodes[s] === '*.' + r) return !0
		return !1
	}
	function Cu(n, e) {
		if (n && n.length > 0 && e.processEntities)
			for (let r = 0; r < e.entities.length; r++) {
				let s = e.entities[r]
				n = n.replace(s.regex, s.val)
			}
		return n
	}
	xu.exports = q2
})
var ku = ne((TS, Au) => {
	'use strict'
	var K2 = Su(),
		Q2 = {
			attributeNamePrefix: '@_',
			attributesGroupName: !1,
			textNodeName: '#text',
			ignoreAttributes: !0,
			cdataPropName: !1,
			format: !1,
			indentBy: '  ',
			suppressEmptyNode: !1,
			suppressUnpairedNode: !0,
			suppressBooleanAttributes: !0,
			tagValueProcessor: function (n, e) {
				return e
			},
			attributeValueProcessor: function (n, e) {
				return e
			},
			preserveOrder: !1,
			commentPropName: !1,
			unpairedTags: [],
			entities: [
				{ regex: new RegExp('&', 'g'), val: '&amp;' },
				{ regex: new RegExp('>', 'g'), val: '&gt;' },
				{ regex: new RegExp('<', 'g'), val: '&lt;' },
				{ regex: new RegExp("'", 'g'), val: '&apos;' },
				{ regex: new RegExp('"', 'g'), val: '&quot;' }
			],
			processEntities: !0,
			stopNodes: [],
			oneListGroup: !1
		}
	function tt(n) {
		;(this.options = Object.assign({}, Q2, n)),
			this.options.ignoreAttributes || this.options.attributesGroupName
				? (this.isAttribute = function () {
						return !1
					})
				: ((this.attrPrefixLen = this.options.attributeNamePrefix.length), (this.isAttribute = nE)),
			(this.processTextOrObjNode = eE),
			this.options.format
				? ((this.indentate = tE),
					(this.tagEndChar = `>
`),
					(this.newLine = `
`))
				: ((this.indentate = function () {
						return ''
					}),
					(this.tagEndChar = '>'),
					(this.newLine = ''))
	}
	tt.prototype.build = function (n) {
		return this.options.preserveOrder
			? K2(n, this.options)
			: (Array.isArray(n) &&
					this.options.arrayNodeName &&
					this.options.arrayNodeName.length > 1 &&
					(n = { [this.options.arrayNodeName]: n }),
				this.j2x(n, 0).val)
	}
	tt.prototype.j2x = function (n, e) {
		let r = '',
			s = ''
		for (let o in n)
			if (Object.prototype.hasOwnProperty.call(n, o))
				if (typeof n[o] > 'u') this.isAttribute(o) && (s += '')
				else if (n[o] === null)
					this.isAttribute(o)
						? (s += '')
						: o[0] === '?'
							? (s += this.indentate(e) + '<' + o + '?' + this.tagEndChar)
							: (s += this.indentate(e) + '<' + o + '/' + this.tagEndChar)
				else if (n[o] instanceof Date) s += this.buildTextValNode(n[o], o, '', e)
				else if (typeof n[o] != 'object') {
					let l = this.isAttribute(o)
					if (l) r += this.buildAttrPairStr(l, '' + n[o])
					else if (o === this.options.textNodeName) {
						let a = this.options.tagValueProcessor(o, '' + n[o])
						s += this.replaceEntitiesValue(a)
					} else s += this.buildTextValNode(n[o], o, '', e)
				} else if (Array.isArray(n[o])) {
					let l = n[o].length,
						a = ''
					for (let i = 0; i < l; i++) {
						let c = n[o][i]
						typeof c > 'u' ||
							(c === null
								? o[0] === '?'
									? (s += this.indentate(e) + '<' + o + '?' + this.tagEndChar)
									: (s += this.indentate(e) + '<' + o + '/' + this.tagEndChar)
								: typeof c == 'object'
									? this.options.oneListGroup
										? (a += this.j2x(c, e + 1).val)
										: (a += this.processTextOrObjNode(c, o, e))
									: (a += this.buildTextValNode(c, o, '', e)))
					}
					this.options.oneListGroup && (a = this.buildObjectNode(a, o, '', e)), (s += a)
				} else if (this.options.attributesGroupName && o === this.options.attributesGroupName) {
					let l = Object.keys(n[o]),
						a = l.length
					for (let i = 0; i < a; i++) r += this.buildAttrPairStr(l[i], '' + n[o][l[i]])
				} else s += this.processTextOrObjNode(n[o], o, e)
		return { attrStr: r, val: s }
	}
	tt.prototype.buildAttrPairStr = function (n, e) {
		return (
			(e = this.options.attributeValueProcessor(n, '' + e)),
			(e = this.replaceEntitiesValue(e)),
			this.options.suppressBooleanAttributes && e === 'true' ? ' ' + n : ' ' + n + '="' + e + '"'
		)
	}
	function eE(n, e, r) {
		let s = this.j2x(n, r + 1)
		return n[this.options.textNodeName] !== void 0 && Object.keys(n).length === 1
			? this.buildTextValNode(n[this.options.textNodeName], e, s.attrStr, r)
			: this.buildObjectNode(s.val, e, s.attrStr, r)
	}
	tt.prototype.buildObjectNode = function (n, e, r, s) {
		if (n === '')
			return e[0] === '?'
				? this.indentate(s) + '<' + e + r + '?' + this.tagEndChar
				: this.indentate(s) + '<' + e + r + this.closeTag(e) + this.tagEndChar
		{
			let o = '</' + e + this.tagEndChar,
				l = ''
			return (
				e[0] === '?' && ((l = '?'), (o = '')),
				(r || r === '') && n.indexOf('<') === -1
					? this.indentate(s) + '<' + e + r + l + '>' + n + o
					: this.options.commentPropName !== !1 &&
						  e === this.options.commentPropName &&
						  l.length === 0
						? this.indentate(s) + `<!--${n}-->` + this.newLine
						: this.indentate(s) + '<' + e + r + l + this.tagEndChar + n + this.indentate(s) + o
			)
		}
	}
	tt.prototype.closeTag = function (n) {
		let e = ''
		return (
			this.options.unpairedTags.indexOf(n) !== -1
				? this.options.suppressUnpairedNode || (e = '/')
				: this.options.suppressEmptyNode
					? (e = '/')
					: (e = `></${n}`),
			e
		)
	}
	tt.prototype.buildTextValNode = function (n, e, r, s) {
		if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName)
			return this.indentate(s) + `<![CDATA[${n}]]>` + this.newLine
		if (this.options.commentPropName !== !1 && e === this.options.commentPropName)
			return this.indentate(s) + `<!--${n}-->` + this.newLine
		if (e[0] === '?') return this.indentate(s) + '<' + e + r + '?' + this.tagEndChar
		{
			let o = this.options.tagValueProcessor(e, n)
			return (
				(o = this.replaceEntitiesValue(o)),
				o === ''
					? this.indentate(s) + '<' + e + r + this.closeTag(e) + this.tagEndChar
					: this.indentate(s) + '<' + e + r + '>' + o + '</' + e + this.tagEndChar
			)
		}
	}
	tt.prototype.replaceEntitiesValue = function (n) {
		if (n && n.length > 0 && this.options.processEntities)
			for (let e = 0; e < this.options.entities.length; e++) {
				let r = this.options.entities[e]
				n = n.replace(r.regex, r.val)
			}
		return n
	}
	function tE(n) {
		return this.options.indentBy.repeat(n)
	}
	function nE(n) {
		return n.startsWith(this.options.attributeNamePrefix) && n !== this.options.textNodeName
			? n.substr(this.attrPrefixLen)
			: !1
	}
	Au.exports = tt
})
var _u = ne((PS, Bu) => {
	'use strict'
	var rE = Ps(),
		sE = wu(),
		oE = ku()
	Bu.exports = { XMLParser: sE, XMLValidator: rE, XMLBuilder: oE }
})
var Tu,
	Pu = m(() => {
		_s()
		Tu = U.object({
			title: U.string(),
			pubDate: U.union([U.string(), U.number(), U.date()])
				.transform((n) => new Date(n))
				.refine((n) => !isNaN(n.getTime())),
			description: U.string().optional(),
			customData: U.string().optional(),
			categories: U.array(U.string()).optional(),
			author: U.string().optional(),
			commentsUrl: U.string().optional(),
			source: U.object({ url: U.string().url(), title: U.string() }).optional(),
			enclosure: U.object({
				url: U.string(),
				length: U.number().positive().int().finite(),
				type: U.string()
			}).optional()
		})
	})
function rn(n, e, r) {
	let s = n.replace(/\/index.html$/, '')
	return (
		e === !1 ? (s = s.replace(/(\/+)?$/, '')) : lE(n) || (s = s.replace(/(\/+)?$/, '/')),
		(s = s.replace(/\/+/g, '/')),
		new URL(s, r)
	)
}
function yr(n) {
	try {
		return new URL(n), !0
	} catch {}
	return !1
}
function lE(n) {
	let e = n.lastIndexOf('.'),
		r = n.lastIndexOf('/')
	return e > r ? n.slice(e + 1) : ''
}
var aE,
	Us,
	Mu = m(() => {
		;(aE = (n) => n.join('.')),
			(Us = (n, e) => {
				if (n.code === 'invalid_type') {
					let r = JSON.stringify(aE(n.path))
					return n.received === 'undefined'
						? { message: `${r} is required.` }
						: { message: `${r} should be ${n.expected}, not ${n.received}.` }
				}
				return { message: e.defaultError }
			})
	})
async function ju(n) {
	let e = await dE(n)
	return new Response(e, { headers: { 'Content-Type': 'application/xml' } })
}
async function dE(n) {
	let e = await pE(n)
	return await uE(e)
}
async function pE(n) {
	let e = await cE.safeParseAsync(n, { errorMap: Us })
	if (e.success) return e.data
	throw new Error(
		[
			'[RSS] Invalid or missing options:',
			...e.error.errors.map((s) => {
				let o = s.path.join('.'),
					l = `${s.message} (${o})`,
					a = s.code
				return o === 'items' && a === 'invalid_union'
					? [
							l,
							'The `items` property requires properly typed `title`, `pubDate`, and `link` keys.',
							"Check your collection's schema, and visit https://docs.astro.build/en/guides/rss/#generating-items for more info."
						].join(`
`)
					: l
			})
		].join(`
`)
	)
}
function hE(n) {
	return Promise.all(
		Object.entries(n).map(async ([e, r]) => {
			let { url: s, frontmatter: o } = await r()
			if (s == null)
				throw new Error(
					"[RSS] You can only glob entries within 'src/pages/' when passing import.meta.glob() directly. Consider mapping the result to an array of RSSFeedItems. See the RSS docs for usage examples: https://docs.astro.build/en/guides/rss/#2-list-of-rss-feed-objects"
				)
			let l = Iu.safeParse({ ...o, link: s }, { errorMap: Us })
			if (l.success) return l.data
			let a = new Error(
				[
					`[RSS] ${e} has invalid or missing frontmatter.
Fix the following properties:`,
					...l.error.errors.map((i) => i.message)
				].join(`
`)
			)
			throw ((a.file = e), a)
		})
	)
}
async function uE(n) {
	let { items: e, site: r } = n,
		s = { ignoreAttributes: !1, suppressEmptyNode: !0, suppressBooleanAttributes: !1 },
		o = new Dr.XMLParser(s),
		l = { '?xml': { '@_version': '1.0', '@_encoding': 'UTF-8' } }
	if (typeof n.stylesheet == 'string') {
		let a = /\.xsl$/i.test(n.stylesheet)
		l['?xml-stylesheet'] = { '@_href': n.stylesheet, ...(a && { '@_type': 'text/xsl' }) }
	}
	if (((l.rss = { '@_version': '2.0' }), e.find((a) => a.content))) {
		let a = 'http://purl.org/rss/1.0/modules/content/'
		;(l.rss['@_xmlns:content'] = a),
			n.xmlns?.content && n.xmlns.content === a && delete n.xmlns.content
	}
	if (n.xmlns) for (let [a, i] of Object.entries(n.xmlns)) l.rss[`@_xmlns:${a}`] = i
	return (
		(l.rss.channel = {
			title: n.title,
			description: n.description,
			link: rn(r, n.trailingSlash, void 0).href
		}),
		typeof n.customData == 'string' &&
			Object.assign(l.rss.channel, o.parse(`<channel>${n.customData}</channel>`).channel),
		(l.rss.channel.item = e.map((a) => {
			let i = yr(a.link) ? a.link : rn(a.link, n.trailingSlash, r).href,
				c = { title: a.title, link: i, guid: { '#text': i, '@_isPermaLink': 'true' } }
			if (
				(a.description && (c.description = a.description),
				a.pubDate && (c.pubDate = a.pubDate.toUTCString()),
				typeof a.content == 'string' && (c['content:encoded'] = a.content),
				typeof a.customData == 'string' &&
					Object.assign(c, o.parse(`<item>${a.customData}</item>`).item),
				Array.isArray(a.categories) && (c.category = a.categories),
				typeof a.author == 'string' && (c.author = a.author),
				typeof a.commentsUrl == 'string' &&
					(c.comments = yr(a.commentsUrl)
						? a.commentsUrl
						: rn(a.commentsUrl, n.trailingSlash, r).href),
				a.source &&
					(c.source = o.parse(`<source url="${a.source.url}">${a.source.title}</source>`).source),
				a.enclosure)
			) {
				let p = yr(a.enclosure.url) ? a.enclosure.url : rn(a.enclosure.url, n.trailingSlash, r).href
				c.enclosure = o.parse(
					`<enclosure url="${p}" length="${a.enclosure.length}" type="${a.enclosure.type}"/>`
				).enclosure
			}
			return c
		})),
		new Dr.XMLBuilder(s).build(l)
	)
}
var Dr,
	Iu,
	iE,
	cE,
	Lu = m(() => {
		_s()
		Dr = cn(_u(), 1)
		je()
		Pu()
		Mu()
		;(Iu = Tu.extend({ link: U.string(), content: U.string().optional() })),
			(iE = U.record(U.function().returns(U.promise(U.any())))),
			(cE = U.object({
				title: U.string(),
				description: U.string(),
				site: U.preprocess((n) => (n instanceof URL ? n.href : n), U.string().url()),
				items: U.array(Iu)
					.or(iE)
					.transform((n) =>
						Array.isArray(n)
							? n
							: (console.warn(
									un(
										'[RSS] Passing a glob result directly has been deprecated. Please migrate to the `pagesGlobToRssItems()` helper: https://docs.astro.build/en/guides/rss/'
									)
								),
								hE(n))
					),
				xmlns: U.record(U.string()).optional(),
				stylesheet: U.union([U.string(), U.boolean()]).optional(),
				customData: U.string().optional(),
				trailingSlash: U.boolean().default(!0)
			}))
	})
var $u = {}
f($u, { get: () => mE })
async function mE() {
	let n = await ct('blog')
	return ju({
		title: ue.title,
		description: ue.description,
		site: 'https://astro.buzzell.io',
		items: n.map((e) => ({ ...e.data, link: `post/${e.slug}/` }))
	})
}
var Ou = m(() => {
	'use strict'
	Lu()
	J()
})
var Ru = {}
f(Ru, { onRequest: () => ae, page: () => yE, renderers: () => re })
var yE,
	Uu = m(() => {
		'use strict'
		ke()
		Oe()
		yE = () => Promise.resolve().then(() => (Ou(), $u))
	})
var Nu = {}
f(Nu, { onRequest: () => ae, page: () => DE, renderers: () => re })
var DE,
	Hu = m(() => {
		'use strict'
		ke()
		Oe()
		DE = () =>
			Promise.resolve()
				.then(() => (J(), Np))
				.then((n) => n._)
	})
var zu = {}
f(zu, { onRequest: () => ae, page: () => fE, renderers: () => re })
var fE,
	Wu = m(() => {
		'use strict'
		ke()
		Oe()
		fE = () =>
			Promise.resolve()
				.then(() => (cr(), ir))
				.then((n) => n.a)
	})
var Gu = {}
f(Gu, { onRequest: () => ae, page: () => gE, renderers: () => re })
var gE,
	Vu = m(() => {
		'use strict'
		ke()
		Oe()
		gE = () =>
			Promise.resolve()
				.then(() => (cr(), ir))
				.then((n) => n.b)
	})
vt()
var sn = cn(Sr(), 1)
vt()
var pC = cn(Sr(), 1)
je()
function Br({ onlyFirst: n = !1 } = {}) {
	let e = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|')
	return new RegExp(e, n ? void 0 : 'g')
}
var U9 = Br()
W()
V()
function Wy(n) {
	for (var e = [], r = 0; r < n.length; ) {
		var s = n[r]
		if (s === '*' || s === '+' || s === '?') {
			e.push({ type: 'MODIFIER', index: r, value: n[r++] })
			continue
		}
		if (s === '\\') {
			e.push({ type: 'ESCAPED_CHAR', index: r++, value: n[r++] })
			continue
		}
		if (s === '{') {
			e.push({ type: 'OPEN', index: r, value: n[r++] })
			continue
		}
		if (s === '}') {
			e.push({ type: 'CLOSE', index: r, value: n[r++] })
			continue
		}
		if (s === ':') {
			for (var o = '', l = r + 1; l < n.length; ) {
				var a = n.charCodeAt(l)
				if ((a >= 48 && a <= 57) || (a >= 65 && a <= 90) || (a >= 97 && a <= 122) || a === 95) {
					o += n[l++]
					continue
				}
				break
			}
			if (!o) throw new TypeError('Missing parameter name at '.concat(r))
			e.push({ type: 'NAME', index: r, value: o }), (r = l)
			continue
		}
		if (s === '(') {
			var i = 1,
				c = '',
				l = r + 1
			if (n[l] === '?') throw new TypeError('Pattern cannot start with "?" at '.concat(l))
			for (; l < n.length; ) {
				if (n[l] === '\\') {
					c += n[l++] + n[l++]
					continue
				}
				if (n[l] === ')') {
					if ((i--, i === 0)) {
						l++
						break
					}
				} else if (n[l] === '(' && (i++, n[l + 1] !== '?'))
					throw new TypeError('Capturing groups are not allowed at '.concat(l))
				c += n[l++]
			}
			if (i) throw new TypeError('Unbalanced pattern at '.concat(r))
			if (!c) throw new TypeError('Missing pattern at '.concat(r))
			e.push({ type: 'PATTERN', index: r, value: c }), (r = l)
			continue
		}
		e.push({ type: 'CHAR', index: r, value: n[r++] })
	}
	return e.push({ type: 'END', index: r, value: '' }), e
}
function Gy(n, e) {
	e === void 0 && (e = {})
	for (
		var r = Wy(n),
			s = e.prefixes,
			o = s === void 0 ? './' : s,
			l = '[^'.concat(Xy(e.delimiter || '/#?'), ']+?'),
			a = [],
			i = 0,
			c = 0,
			p = '',
			d = function (he) {
				if (c < r.length && r[c].type === he) return r[c++].value
			},
			h = function (he) {
				var j = d(he)
				if (j !== void 0) return j
				var G = r[c],
					K = G.type,
					Ae = G.index
				throw new TypeError('Unexpected '.concat(K, ' at ').concat(Ae, ', expected ').concat(he))
			},
			u = function () {
				for (var he = '', j; (j = d('CHAR') || d('ESCAPED_CHAR')); ) he += j
				return he
			};
		c < r.length;

	) {
		var g = d('CHAR'),
			E = d('NAME'),
			C = d('PATTERN')
		if (E || C) {
			var v = g || ''
			o.indexOf(v) === -1 && ((p += v), (v = '')),
				p && (a.push(p), (p = '')),
				a.push({
					name: E || i++,
					prefix: v,
					suffix: '',
					pattern: C || l,
					modifier: d('MODIFIER') || ''
				})
			continue
		}
		var N = g || d('ESCAPED_CHAR')
		if (N) {
			p += N
			continue
		}
		p && (a.push(p), (p = ''))
		var M = d('OPEN')
		if (M) {
			var v = u(),
				ee = d('NAME') || '',
				oe = d('PATTERN') || '',
				ge = u()
			h('CLOSE'),
				a.push({
					name: ee || (oe ? i++ : ''),
					pattern: ee && !oe ? l : oe,
					prefix: v,
					suffix: ge,
					modifier: d('MODIFIER') || ''
				})
			continue
		}
		h('END')
	}
	return a
}
function nl(n, e) {
	return Vy(Gy(n, e), e)
}
function Vy(n, e) {
	e === void 0 && (e = {})
	var r = Jy(e),
		s = e.encode,
		o =
			s === void 0
				? function (c) {
						return c
					}
				: s,
		l = e.validate,
		a = l === void 0 ? !0 : l,
		i = n.map(function (c) {
			if (typeof c == 'object') return new RegExp('^(?:'.concat(c.pattern, ')$'), r)
		})
	return function (c) {
		for (var p = '', d = 0; d < n.length; d++) {
			var h = n[d]
			if (typeof h == 'string') {
				p += h
				continue
			}
			var u = c ? c[h.name] : void 0,
				g = h.modifier === '?' || h.modifier === '*',
				E = h.modifier === '*' || h.modifier === '+'
			if (Array.isArray(u)) {
				if (!E)
					throw new TypeError('Expected "'.concat(h.name, '" to not repeat, but got an array'))
				if (u.length === 0) {
					if (g) continue
					throw new TypeError('Expected "'.concat(h.name, '" to not be empty'))
				}
				for (var C = 0; C < u.length; C++) {
					var v = o(u[C], h)
					if (a && !i[d].test(v))
						throw new TypeError(
							'Expected all "'
								.concat(h.name, '" to match "')
								.concat(h.pattern, '", but got "')
								.concat(v, '"')
						)
					p += h.prefix + v + h.suffix
				}
				continue
			}
			if (typeof u == 'string' || typeof u == 'number') {
				var v = o(String(u), h)
				if (a && !i[d].test(v))
					throw new TypeError(
						'Expected "'
							.concat(h.name, '" to match "')
							.concat(h.pattern, '", but got "')
							.concat(v, '"')
					)
				p += h.prefix + v + h.suffix
				continue
			}
			if (!g) {
				var N = E ? 'an array' : 'a string'
				throw new TypeError('Expected "'.concat(h.name, '" to be ').concat(N))
			}
		}
		return p
	}
}
function Xy(n) {
	return n.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}
function Jy(n) {
	return n && n.sensitive ? '' : 'i'
}
var qy = new Intl.DateTimeFormat([], {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: !1
	}),
	Nt = { debug: 20, info: 30, warn: 40, error: 50, silent: 90 }
function ds(n, e, r, s, o = !0) {
	let l = n.level,
		a = n.dest,
		i = { label: r, level: e, message: s, newLine: o }
	Zy(l, e) && a.write(i)
}
function Zy(n, e) {
	return Nt[n] <= Nt[e]
}
function rl(n, e, r, s = !0) {
	return ds(n, 'info', e, r, s)
}
function sl(n, e, r, s = !0) {
	return ds(n, 'warn', e, r, s)
}
function ol(n, e, r, s = !0) {
	return ds(n, 'error', e, r, s)
}
function ll(...n) {
	'_astroGlobalDebug' in globalThis && globalThis._astroGlobalDebug(...n)
}
function al({ level: n, label: e }) {
	let r = `${qy.format(new Date())}`,
		s = []
	return (
		n === 'error' || n === 'warn' ? (s.push(hn(r)), s.push(`[${n.toUpperCase()}]`)) : s.push(r),
		e && s.push(`[${e}]`),
		n === 'error'
			? lo(s.join(' '))
			: n === 'warn'
				? un(s.join(' '))
				: s.length === 1
					? kr(s[0])
					: kr(s[0]) + ' ' + ao(s.splice(1).join(' '))
	)
}
if (typeof process < 'u') {
	let n = process
	'argv' in n &&
		Array.isArray(n.argv) &&
		(n.argv.includes('--verbose') || n.argv.includes('--silent'))
}
var En = class {
		options
		constructor(e) {
			this.options = e
		}
		info(e, r, s = !0) {
			rl(this.options, e, r, s)
		}
		warn(e, r, s = !0) {
			sl(this.options, e, r, s)
		}
		error(e, r, s = !0) {
			ol(this.options, e, r, s)
		}
		debug(e, ...r) {
			ll(e, ...r)
		}
		level() {
			return this.options.level
		}
		forkIntegrationLogger(e) {
			return new Ht(this.options, e)
		}
	},
	Ht = class n {
		options
		label
		constructor(e, r) {
			;(this.options = e), (this.label = r)
		}
		fork(e) {
			return new n(this.options, e)
		}
		info(e) {
			rl(this.options, this.label, e)
		}
		warn(e) {
			sl(this.options, this.label, e)
		}
		error(e) {
			ol(this.options, this.label, e)
		}
		debug(e) {
			ll(this.label, e)
		}
	}
function Yy(n, e) {
	let r = n
			.map(
				(l) =>
					'/' +
					l
						.map((a) =>
							a.spread
								? `:${a.content.slice(3)}(.*)?`
								: a.dynamic
									? `:${a.content}`
									: a.content
											.normalize()
											.replace(/\?/g, '%3F')
											.replace(/#/g, '%23')
											.replace(/%5B/g, '[')
											.replace(/%5D/g, ']')
											.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
						)
						.join('')
			)
			.join(''),
		s = ''
	return e === 'always' && n.length && (s = '/'), nl(r + s)
}
function Cn(n) {
	return {
		route: n.route,
		type: n.type,
		pattern: new RegExp(n.pattern),
		params: n.params,
		component: n.component,
		generate: Yy(n.segments, n._meta.trailingSlash),
		pathname: n.pathname || void 0,
		segments: n.segments,
		prerender: n.prerender,
		redirect: n.redirect,
		redirectRoute: n.redirectRoute ? Cn(n.redirectRoute) : void 0,
		fallbackRoutes: n.fallbackRoutes.map((e) => Cn(e))
	}
}
function Ky(n) {
	let e = []
	for (let l of n.routes) {
		e.push({ ...l, routeData: Cn(l.routeData) })
		let a = l
		a.routeData = Cn(l.routeData)
	}
	let r = new Set(n.assets),
		s = new Map(n.componentMetadata),
		o = new Map(n.clientDirectives)
	return { ...n, assets: r, componentMetadata: s, clientDirectives: o, routes: e }
}
var il = Ky({
	adapterName: '@astrojs/cloudflare',
	routes: [
		{
			file: '',
			links: [],
			scripts: [],
			styles: [],
			routeData: {
				type: 'endpoint',
				route: '/_image',
				pattern: '^\\/_image$',
				segments: [[{ content: '_image', dynamic: !1, spread: !1 }]],
				params: [],
				component:
					'node_modules/.pnpm/astro@4.0.8_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js',
				pathname: '/_image',
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: 'ignore' }
			}
		},
		{
			file: '',
			links: [],
			scripts: [{ type: 'external', value: '/_astro/hoisted.O-e-S4g_.js' }],
			styles: [
				{ type: 'external', src: '/_astro/_page_.iMQ_dUjM.css' },
				{ type: 'external', src: '/_astro/_slug_.gG1ww3y8.css' }
			],
			routeData: {
				route: '/',
				type: 'page',
				pattern: '^\\/$',
				segments: [],
				params: [],
				component: 'src/pages/index.astro',
				pathname: '/',
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: 'ignore' }
			}
		},
		{
			file: '',
			links: [],
			scripts: [{ type: 'external', value: '/_astro/hoisted.2YE2Kjb3.js' }],
			styles: [
				{ type: 'external', src: '/_astro/_page_.iMQ_dUjM.css' },
				{ type: 'external', src: '/_astro/_slug_.gG1ww3y8.css' }
			],
			routeData: {
				route: '/category/[category]/[page]',
				type: 'page',
				pattern: '^\\/category\\/([^/]+?)\\/([^/]+?)\\/?$',
				segments: [
					[{ content: 'category', dynamic: !1, spread: !1 }],
					[{ content: 'category', dynamic: !0, spread: !1 }],
					[{ content: 'page', dynamic: !0, spread: !1 }]
				],
				params: ['category', 'page'],
				component: 'src/pages/category/[category]/[page].astro',
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: 'ignore' }
			}
		},
		{
			file: '',
			links: [],
			scripts: [],
			styles: [],
			routeData: {
				route: '/rss.xml',
				type: 'endpoint',
				pattern: '^\\/rss\\.xml$',
				segments: [[{ content: 'rss.xml', dynamic: !1, spread: !1 }]],
				params: [],
				component: 'src/pages/rss.xml.ts',
				pathname: '/rss.xml',
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: 'ignore' }
			}
		},
		{
			file: '',
			links: [],
			scripts: [{ type: 'external', value: '/_astro/hoisted.lUD4mmd1.js' }],
			styles: [
				{ type: 'external', src: '/_astro/_page_.iMQ_dUjM.css' },
				{ type: 'external', src: '/_astro/_slug_.gG1ww3y8.css' }
			],
			routeData: {
				route: '/post/[...slug]',
				type: 'page',
				pattern: '^\\/post(?:\\/(.*?))?\\/?$',
				segments: [
					[{ content: 'post', dynamic: !1, spread: !1 }],
					[{ content: '...slug', dynamic: !0, spread: !0 }]
				],
				params: ['...slug'],
				component: 'src/pages/post/[...slug].astro',
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: 'ignore' }
			}
		},
		{
			file: '',
			links: [],
			scripts: [{ type: 'external', value: '/_astro/hoisted.1ljuQ_6q.js' }],
			styles: [
				{ type: 'external', src: '/_astro/_page_.iMQ_dUjM.css' },
				{ type: 'external', src: '/_astro/_slug_.gG1ww3y8.css' }
			],
			routeData: {
				route: '/tags',
				type: 'page',
				pattern: '^\\/tags\\/?$',
				segments: [[{ content: 'tags', dynamic: !1, spread: !1 }]],
				params: [],
				component: 'src/pages/tags/index.astro',
				pathname: '/tags',
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: 'ignore' }
			}
		},
		{
			file: '',
			links: [],
			scripts: [{ type: 'external', value: '/_astro/hoisted.2YE2Kjb3.js' }],
			styles: [
				{ type: 'external', src: '/_astro/_page_.iMQ_dUjM.css' },
				{ type: 'external', src: '/_astro/_slug_.gG1ww3y8.css' }
			],
			routeData: {
				route: '/tags/[...tag]',
				type: 'page',
				pattern: '^\\/tags(?:\\/(.*?))?\\/?$',
				segments: [
					[{ content: 'tags', dynamic: !1, spread: !1 }],
					[{ content: '...tag', dynamic: !0, spread: !0 }]
				],
				params: ['...tag'],
				component: 'src/pages/tags/[...tag]/index.astro',
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: 'ignore' }
			}
		}
	],
	site: 'https://astro.buzzell.io',
	base: '/',
	trailingSlash: 'ignore',
	compressHTML: !0,
	componentMetadata: [
		['\0astro:content', { propagation: 'in-tree', containsHead: !1 }],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/post/[...slug].astro',
			{ propagation: 'in-tree', containsHead: !0 }
		],
		[
			'\0@astro-page:src/pages/post/[...slug]@_@astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		['\0@astrojs-ssr-virtual-entry', { propagation: 'in-tree', containsHead: !1 }],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/rss.xml.ts',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		['\0@astro-page:src/pages/rss.xml@_@ts', { propagation: 'in-tree', containsHead: !1 }],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/utils/post.ts',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/utils/index.ts',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Category.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ListCategories.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/category/[category]/[page].astro',
			{ propagation: 'in-tree', containsHead: !0 }
		],
		[
			'\0@astro-page:src/pages/category/[category]/[page]@_@astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/index.astro',
			{ propagation: 'in-tree', containsHead: !0 }
		],
		['\0@astro-page:src/pages/index@_@astro', { propagation: 'in-tree', containsHead: !1 }],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/HeaderLink.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/Header.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/layouts/BaseLayout.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/layouts/BlogPost.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/tags/[...tag]/index.astro',
			{ propagation: 'in-tree', containsHead: !0 }
		],
		[
			'\0@astro-page:src/pages/tags/[...tag]/index@_@astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/pages/tags/index.astro',
			{ propagation: 'in-tree', containsHead: !0 }
		],
		['\0@astro-page:src/pages/tags/index@_@astro', { propagation: 'in-tree', containsHead: !1 }],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ListPosts.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/ListRelatedPosts.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/TabletOfContentsHeading.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		],
		[
			'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/components/TableOfContents.astro',
			{ propagation: 'in-tree', containsHead: !1 }
		]
	],
	renderers: [],
	clientDirectives: [
		[
			'idle',
			'(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'
		],
		[
			'load',
			'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'
		],
		[
			'media',
			'(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'
		],
		[
			'only',
			'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'
		],
		[
			'visible',
			'(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();'
		]
	],
	entryModules: {
		'\0@astrojs-ssr-virtual-entry': '_worker.mjs',
		'\0@astro-renderers': 'renderers.mjs',
		'\0empty-middleware': '_empty-middleware.mjs',
		'/node_modules/.pnpm/astro@4.0.8_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js':
			'chunks/pages/generic_DOxd_UB9.mjs',
		'/src/pages/rss.xml.ts': 'chunks/pages/rss_zo1zaHwS.mjs',
		'\0@astrojs-manifest': 'manifest_9Jf1g-Ec.mjs',
		'\0@astro-page:node_modules/.pnpm/astro@4.0.8_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js':
			'chunks/generic_r8I7Z0tF.mjs',
		'\0@astro-page:src/pages/index@_@astro': 'chunks/index_wJcxtxgF.mjs',
		'\0@astro-page:src/pages/category/[category]/[page]@_@astro': 'chunks/_page__1IqWXyP-.mjs',
		'\0@astro-page:src/pages/rss.xml@_@ts': 'chunks/rss_zd3bZ-ZM.mjs',
		'\0@astro-page:src/pages/post/[...slug]@_@astro': 'chunks/_.._Lt3R7Jmt.mjs',
		'\0@astro-page:src/pages/tags/index@_@astro': 'chunks/index_hJq8HtLu.mjs',
		'\0@astro-page:src/pages/tags/[...tag]/index@_@astro': 'chunks/index_rtvUaAbt.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx?astroContentCollectionEntry=true':
			'chunks/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust_tMwotQFr.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/CodeClimate-in-GitLab-CI.mdx?astroContentCollectionEntry=true':
			'chunks/CodeClimate-in-GitLab-CI_mqFcYUb5.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx?astroContentCollectionEntry=true':
			'chunks/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project_s88DscEA.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Cylance-Deployment-on-macOS.mdx?astroContentCollectionEntry=true':
			'chunks/Cylance-Deployment-on-macOS_lQMb0D2o.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-iPXE-.mdx?astroContentCollectionEntry=true':
			'chunks/Fedora-25-in-iPXE-_Df5xz5oa.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-pxe.mdx?astroContentCollectionEntry=true':
			'chunks/Fedora-25-in-pxe_swcTy8v4.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Jamf-DEP-workflow.mdx?astroContentCollectionEntry=true':
			'chunks/Jamf-DEP-workflow_ou5EnZ9a.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/My-experience-replacing-a-modem.mdx?astroContentCollectionEntry=true':
			'chunks/My-experience-replacing-a-modem_fu2QaNW9.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx?astroContentCollectionEntry=true':
			'chunks/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune_70FVNsRD.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx?astroContentCollectionEntry=true':
			'chunks/Secure-SSD-Erase-options-for-Apple-and-Windows_v3_EgZei.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx?astroContentCollectionEntry=true':
			'chunks/Terminal-tricks-Handy-Shortcuts_HJm4klTl.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/The-87-United-States.mdx?astroContentCollectionEntry=true':
			'chunks/The-87-United-States_3jLxAJ48.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Useful-Links.mdx?astroContentCollectionEntry=true':
			'chunks/Useful-Links_Ee4AsBHV.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx?astroContentCollectionEntry=true':
			'chunks/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS_17bSMI-e.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx?astroContentCollectionEntry=true':
			'chunks/Vim-Tricks-Increment-or-decrement-numbers_LGrbS9NQ.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx?astroContentCollectionEntry=true':
			'chunks/Vim-Tricks-Visual-Block-Mode_U8kDziea.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/What-is-DEP.mdx?astroContentCollectionEntry=true':
			'chunks/What-is-DEP_8TxlbXBg.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 2.mdx?astroContentCollectionEntry=true':
			'chunks/astro copy 2_6lN2TFX8.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 3.mdx?astroContentCollectionEntry=true':
			'chunks/astro copy 3_QUZrhpCT.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 4.mdx?astroContentCollectionEntry=true':
			'chunks/astro copy 4_lEfyElRc.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro.mdx?astroContentCollectionEntry=true':
			'chunks/astro_GMlYrsMd.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/create-astro-component.mdx?astroContentCollectionEntry=true':
			'chunks/create-astro-component_A9vOUE8V.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx?astroContentCollectionEntry=true':
			'chunks/macOS-Login-Window-WiFi-Profile_gjfO5xHC.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macbook.mdx?astroContentCollectionEntry=true':
			'chunks/macbook_a3QZUbxy.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx?astroPropagatedAssets':
			'chunks/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust_CDZc2Knx.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/CodeClimate-in-GitLab-CI.mdx?astroPropagatedAssets':
			'chunks/CodeClimate-in-GitLab-CI_OHnfODpv.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx?astroPropagatedAssets':
			'chunks/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project_3s_w02xP.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Cylance-Deployment-on-macOS.mdx?astroPropagatedAssets':
			'chunks/Cylance-Deployment-on-macOS_DOfTP1kG.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-iPXE-.mdx?astroPropagatedAssets':
			'chunks/Fedora-25-in-iPXE-_L1iXgGwu.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-pxe.mdx?astroPropagatedAssets':
			'chunks/Fedora-25-in-pxe_oDAQ3rpo.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Jamf-DEP-workflow.mdx?astroPropagatedAssets':
			'chunks/Jamf-DEP-workflow_Gk4C7RR2.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/My-experience-replacing-a-modem.mdx?astroPropagatedAssets':
			'chunks/My-experience-replacing-a-modem_tVMNi6Mr.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx?astroPropagatedAssets':
			'chunks/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune_BiGTi8GT.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx?astroPropagatedAssets':
			'chunks/Secure-SSD-Erase-options-for-Apple-and-Windows_G_79bU7a.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx?astroPropagatedAssets':
			'chunks/Terminal-tricks-Handy-Shortcuts_-s2ZMnd3.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/The-87-United-States.mdx?astroPropagatedAssets':
			'chunks/The-87-United-States_CQYtGkvj.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Useful-Links.mdx?astroPropagatedAssets':
			'chunks/Useful-Links_DpAhDRhF.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx?astroPropagatedAssets':
			'chunks/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS_zsvSmC_o.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx?astroPropagatedAssets':
			'chunks/Vim-Tricks-Increment-or-decrement-numbers_QRbnLLUR.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx?astroPropagatedAssets':
			'chunks/Vim-Tricks-Visual-Block-Mode_bwijaIsy.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/What-is-DEP.mdx?astroPropagatedAssets':
			'chunks/What-is-DEP__q8HZeqv.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 2.mdx?astroPropagatedAssets':
			'chunks/astro copy 2_YMUZdcws.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 3.mdx?astroPropagatedAssets':
			'chunks/astro copy 3_1jjSgTr8.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 4.mdx?astroPropagatedAssets':
			'chunks/astro copy 4_ZngbZxxm.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro.mdx?astroPropagatedAssets':
			'chunks/astro_VWPTFCJ1.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/create-astro-component.mdx?astroPropagatedAssets':
			'chunks/create-astro-component_UX6g8rCO.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx?astroPropagatedAssets':
			'chunks/macOS-Login-Window-WiFi-Profile_5bJq4LoX.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macbook.mdx?astroPropagatedAssets':
			'chunks/macbook_bRhr6zkv.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust.mdx':
			'chunks/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust_jGO5Aqeq.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/CodeClimate-in-GitLab-CI.mdx':
			'chunks/CodeClimate-in-GitLab-CI_Gxmti12B.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project.mdx':
			'chunks/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project_Mdz-knMw.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Cylance-Deployment-on-macOS.mdx':
			'chunks/Cylance-Deployment-on-macOS_WiO7yOdb.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-iPXE-.mdx':
			'chunks/Fedora-25-in-iPXE-_Vw6abd98.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Fedora-25-in-pxe.mdx':
			'chunks/Fedora-25-in-pxe_O4T6FFDv.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Jamf-DEP-workflow.mdx':
			'chunks/Jamf-DEP-workflow_NqkZp0hE.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/My-experience-replacing-a-modem.mdx':
			'chunks/My-experience-replacing-a-modem_qReZalz7.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune.mdx':
			'chunks/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune_OCXPF2PA.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Secure-SSD-Erase-options-for-Apple-and-Windows.mdx':
			'chunks/Secure-SSD-Erase-options-for-Apple-and-Windows_tkjdGS1D.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Terminal-tricks-Handy-Shortcuts.mdx':
			'chunks/Terminal-tricks-Handy-Shortcuts_pE15tm72.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/The-87-United-States.mdx':
			'chunks/The-87-United-States_6AwO_mIr.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Useful-Links.mdx':
			'chunks/Useful-Links_I_gdIeos.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS.mdx':
			'chunks/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS_0xpf7Kqo.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Increment-or-decrement-numbers.mdx':
			'chunks/Vim-Tricks-Increment-or-decrement-numbers_GQcEcWEO.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/Vim-Tricks-Visual-Block-Mode.mdx':
			'chunks/Vim-Tricks-Visual-Block-Mode_UbsP_dTW.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/What-is-DEP.mdx':
			'chunks/What-is-DEP_lWLxWWa_.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 2.mdx':
			'chunks/astro copy 2_qvGASHGZ.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 3.mdx':
			'chunks/astro copy 3_8WsSM0Ql.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro copy 4.mdx':
			'chunks/astro copy 4_hrhRXiVj.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/astro.mdx':
			'chunks/astro_2es9H2TH.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/create-astro-component.mdx':
			'chunks/create-astro-component_4JPlkJJE.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macOS-Login-Window-WiFi-Profile.mdx':
			'chunks/macOS-Login-Window-WiFi-Profile_874kcnhp.mjs',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/src/content/blog/macbook.mdx':
			'chunks/macbook_vxGrWpsK.mjs',
		'/astro/hoisted.js?q=0': '_astro/hoisted.O-e-S4g_.js',
		'/astro/hoisted.js?q=2': '_astro/hoisted.2YE2Kjb3.js',
		'/astro/hoisted.js?q=1': '_astro/hoisted.lUD4mmd1.js',
		'/astro/hoisted.js?q=3': '_astro/hoisted.1ljuQ_6q.js',
		'C:/Users/altod/OneDrive/Documents/Projects/SSG Blog/node_modules/.pnpm/@pagefind+default-ui@1.0.4/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs':
			'_astro/ui-core.gZoRiGqG.js',
		'astro:scripts/before-hydration.js': ''
	},
	assets: [
		'/_astro/Untitled.vTFCdCCP.png',
		'/_astro/bg.S5lDKigC.jpg',
		'/_astro/placeholder-about.wqyabTIj.jpg',
		'/_astro/placeholder-hero.GamGidh7.jpg',
		'/_astro/te.7nM7T2s1.jpg',
		'/_astro/banner.XpSPdX8n.jpg',
		'/_astro/book.9iQvwl4M.jpg',
		'/_astro/Manrope-SemiBold.cUhEALx3.woff2',
		'/_astro/Manrope-Medium.KaKNC7oT.woff2',
		'/_astro/Manrope-Regular.ctLcT9Zr.woff2',
		'/_astro/Manrope-Light.jqZ9KcWP.woff2',
		'/_astro/_page_.iMQ_dUjM.css',
		'/_astro/_slug_.gG1ww3y8.css',
		'/demo.gif',
		'/favicon.svg',
		'/open-graph.png',
		'/openblog-lighthouse-score.svg',
		'/project.png',
		'/robots.txt',
		'/$server_build/renderers.mjs',
		'/$server_build/_empty-middleware.mjs',
		'/$server_build/_worker.mjs',
		'/_astro/hoisted.1ljuQ_6q.js',
		'/_astro/hoisted.2YE2Kjb3.js',
		'/_astro/hoisted.lUD4mmd1.js',
		'/_astro/hoisted.O-e-S4g_.js',
		'/_astro/ui-core.gZoRiGqG.js',
		'/admin/index.html',
		'/$server_build/_astro/banner.XpSPdX8n.jpg',
		'/$server_build/_astro/bg.S5lDKigC.jpg',
		'/$server_build/_astro/book.9iQvwl4M.jpg',
		'/$server_build/_astro/Manrope-Light.jqZ9KcWP.woff2',
		'/$server_build/_astro/Manrope-Medium.KaKNC7oT.woff2',
		'/$server_build/_astro/Manrope-Regular.ctLcT9Zr.woff2',
		'/$server_build/_astro/Manrope-SemiBold.cUhEALx3.woff2',
		'/$server_build/_astro/placeholder-about.wqyabTIj.jpg',
		'/$server_build/_astro/placeholder-hero.GamGidh7.jpg',
		'/$server_build/_astro/te.7nM7T2s1.jpg',
		'/$server_build/_astro/Untitled.vTFCdCCP.png',
		'/$server_build/_astro/_page_.iMQ_dUjM.css',
		'/$server_build/_astro/_slug_.gG1ww3y8.css',
		'/$server_build/chunks/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust_CDZc2Knx.mjs',
		'/$server_build/chunks/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust_jGO5Aqeq.mjs',
		'/$server_build/chunks/A-slightly-hidden-limitation-of-Hybrid-Cloud-Trust_tMwotQFr.mjs',
		'/$server_build/chunks/astro copy 2_6lN2TFX8.mjs',
		'/$server_build/chunks/astro copy 2_qvGASHGZ.mjs',
		'/$server_build/chunks/astro copy 2_YMUZdcws.mjs',
		'/$server_build/chunks/astro copy 3_1jjSgTr8.mjs',
		'/$server_build/chunks/astro copy 3_8WsSM0Ql.mjs',
		'/$server_build/chunks/astro copy 3_QUZrhpCT.mjs',
		'/$server_build/chunks/astro copy 4_hrhRXiVj.mjs',
		'/$server_build/chunks/astro copy 4_lEfyElRc.mjs',
		'/$server_build/chunks/astro copy 4_ZngbZxxm.mjs',
		'/$server_build/chunks/astro_2es9H2TH.mjs',
		'/$server_build/chunks/astro_Ga2QNYCL.mjs',
		'/$server_build/chunks/astro_GMlYrsMd.mjs',
		'/$server_build/chunks/astro_VWPTFCJ1.mjs',
		'/$server_build/chunks/CodeClimate-in-GitLab-CI_Gxmti12B.mjs',
		'/$server_build/chunks/CodeClimate-in-GitLab-CI_mqFcYUb5.mjs',
		'/$server_build/chunks/CodeClimate-in-GitLab-CI_OHnfODpv.mjs',
		'/$server_build/chunks/create-astro-component_4JPlkJJE.mjs',
		'/$server_build/chunks/create-astro-component_A9vOUE8V.mjs',
		'/$server_build/chunks/create-astro-component_UX6g8rCO.mjs',
		'/$server_build/chunks/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project_3s_w02xP.mjs',
		'/$server_build/chunks/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project_Mdz-knMw.mjs',
		'/$server_build/chunks/Creating-a-SCEP-service-for-Munki-using-MicroMDMs-SCEP-Project_s88DscEA.mjs',
		'/$server_build/chunks/Cylance-Deployment-on-macOS_DOfTP1kG.mjs',
		'/$server_build/chunks/Cylance-Deployment-on-macOS_lQMb0D2o.mjs',
		'/$server_build/chunks/Cylance-Deployment-on-macOS_WiO7yOdb.mjs',
		'/$server_build/chunks/Fedora-25-in-iPXE-_Df5xz5oa.mjs',
		'/$server_build/chunks/Fedora-25-in-iPXE-_L1iXgGwu.mjs',
		'/$server_build/chunks/Fedora-25-in-iPXE-_Vw6abd98.mjs',
		'/$server_build/chunks/Fedora-25-in-pxe_O4T6FFDv.mjs',
		'/$server_build/chunks/Fedora-25-in-pxe_oDAQ3rpo.mjs',
		'/$server_build/chunks/Fedora-25-in-pxe_swcTy8v4.mjs',
		'/$server_build/chunks/generic_r8I7Z0tF.mjs',
		'/$server_build/chunks/index_hJq8HtLu.mjs',
		'/$server_build/chunks/index_rtvUaAbt.mjs',
		'/$server_build/chunks/index_wJcxtxgF.mjs',
		'/$server_build/chunks/Jamf-DEP-workflow_Gk4C7RR2.mjs',
		'/$server_build/chunks/Jamf-DEP-workflow_NqkZp0hE.mjs',
		'/$server_build/chunks/Jamf-DEP-workflow_ou5EnZ9a.mjs',
		'/$server_build/chunks/macbook_a3QZUbxy.mjs',
		'/$server_build/chunks/macbook_bRhr6zkv.mjs',
		'/$server_build/chunks/macbook_vxGrWpsK.mjs',
		'/$server_build/chunks/macOS-Login-Window-WiFi-Profile_5bJq4LoX.mjs',
		'/$server_build/chunks/macOS-Login-Window-WiFi-Profile_874kcnhp.mjs',
		'/$server_build/chunks/macOS-Login-Window-WiFi-Profile_gjfO5xHC.mjs',
		'/$server_build/chunks/My-experience-replacing-a-modem_fu2QaNW9.mjs',
		'/$server_build/chunks/My-experience-replacing-a-modem_qReZalz7.mjs',
		'/$server_build/chunks/My-experience-replacing-a-modem_tVMNi6Mr.mjs',
		'/$server_build/chunks/rss_zd3bZ-ZM.mjs',
		'/$server_build/chunks/Secure-SSD-Erase-options-for-Apple-and-Windows_G_79bU7a.mjs',
		'/$server_build/chunks/Secure-SSD-Erase-options-for-Apple-and-Windows_tkjdGS1D.mjs',
		'/$server_build/chunks/Secure-SSD-Erase-options-for-Apple-and-Windows_v3_EgZei.mjs',
		'/$server_build/chunks/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune_70FVNsRD.mjs',
		'/$server_build/chunks/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune_BiGTi8GT.mjs',
		'/$server_build/chunks/SSSO-to-ADFS-with-Hybrid-Cloud-Trust-and-Intune_OCXPF2PA.mjs',
		'/$server_build/chunks/Terminal-tricks-Handy-Shortcuts_-s2ZMnd3.mjs',
		'/$server_build/chunks/Terminal-tricks-Handy-Shortcuts_HJm4klTl.mjs',
		'/$server_build/chunks/Terminal-tricks-Handy-Shortcuts_pE15tm72.mjs',
		'/$server_build/chunks/The-87-United-States_3jLxAJ48.mjs',
		'/$server_build/chunks/The-87-United-States_6AwO_mIr.mjs',
		'/$server_build/chunks/The-87-United-States_CQYtGkvj.mjs',
		'/$server_build/chunks/Useful-Links_DpAhDRhF.mjs',
		'/$server_build/chunks/Useful-Links_Ee4AsBHV.mjs',
		'/$server_build/chunks/Useful-Links_I_gdIeos.mjs',
		'/$server_build/chunks/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS_0xpf7Kqo.mjs',
		'/$server_build/chunks/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS_17bSMI-e.mjs',
		'/$server_build/chunks/Using-AD-CS-for-machine-based-EAP-TLS-on-macOS_zsvSmC_o.mjs',
		'/$server_build/chunks/Vim-Tricks-Increment-or-decrement-numbers_GQcEcWEO.mjs',
		'/$server_build/chunks/Vim-Tricks-Increment-or-decrement-numbers_LGrbS9NQ.mjs',
		'/$server_build/chunks/Vim-Tricks-Increment-or-decrement-numbers_QRbnLLUR.mjs',
		'/$server_build/chunks/Vim-Tricks-Visual-Block-Mode_bwijaIsy.mjs',
		'/$server_build/chunks/Vim-Tricks-Visual-Block-Mode_U8kDziea.mjs',
		'/$server_build/chunks/Vim-Tricks-Visual-Block-Mode_UbsP_dTW.mjs',
		'/$server_build/chunks/What-is-DEP_8TxlbXBg.mjs',
		'/$server_build/chunks/What-is-DEP_lWLxWWa_.mjs',
		'/$server_build/chunks/What-is-DEP__q8HZeqv.mjs',
		'/$server_build/chunks/_.._Lt3R7Jmt.mjs',
		'/$server_build/chunks/_page__1IqWXyP-.mjs',
		'/$server_build/chunks/astro/assets-service_Gf3E_GuP.mjs',
		'/$server_build/chunks/pages/generic_DOxd_UB9.mjs',
		'/$server_build/chunks/pages/index_modv3N2J.mjs',
		'/$server_build/chunks/pages/rss_zo1zaHwS.mjs',
		'/$server_build/chunks/pages/_page__NGaYTHDx.mjs',
		'/$server_build/chunks/pages/__0LDUr_je.mjs'
	]
})
je()
W()
V()
ke()
function FE(n, e) {
	for (let r of e)
		if (typeof r == 'string') {
			if (r === n) return r
		} else for (let s of r.codes) if (s === n) return r.path
}
function fe(n) {
	return n.replaceAll('_', '-').toLowerCase()
}
function bE(n) {
	let e = []
	for (let r of n)
		if (typeof r == 'string') e.push(r)
		else for (let s of r.codes) e.push(s)
	return e
}
var sm = Symbol.for('astro.routeData')
function wE(n, e) {
	let r = n.split('/')
	for (let s of r)
		for (let o of e)
			if (typeof o == 'string') {
				if (fe(s) === fe(o)) return !0
			} else if (s === o.path) return !0
	return !1
}
function vE(n, e, r) {
	if (n)
		return async (s, o) => {
			if (!n) return await o()
			let l = Reflect.get(s.request, sm)
			if (l && l.type !== 'page' && l.type !== 'fallback') return await o()
			let a = s.url,
				{ locales: i, defaultLocale: c, fallback: p, routing: d } = n,
				h = await o()
			if (h instanceof Response) {
				let u = a.pathname.includes(`/${c}`)
				if (n.routing === 'prefix-other-locales' && u) {
					let g = a.pathname.replace(`/${c}`, '')
					return (
						h.headers.set('Location', g), new Response(null, { status: 404, headers: h.headers })
					)
				} else if (n.routing === 'prefix-always') {
					if (a.pathname === e + '/' || a.pathname === e)
						return r === 'always'
							? s.redirect(`${to(rt(e, n.defaultLocale))}`)
							: s.redirect(`${rt(e, n.defaultLocale)}`)
					if (!wE(a.pathname, n.locales))
						return new Response(null, { status: 404, headers: h.headers })
				}
				if (h.status >= 300 && p) {
					let g = n.fallback ? Object.keys(n.fallback) : [],
						C = a.pathname.split('/').find((v) => {
							for (let N of i)
								if (typeof N == 'string') {
									if (N === v) return !0
								} else if (N.path === v) return !0
							return !1
						})
					if (C && g.includes(C)) {
						let v = p[C],
							N = FE(v, i),
							M
						return (
							N === c && d === 'prefix-other-locales'
								? (M = a.pathname.replace(`/${C}`, ''))
								: (M = a.pathname.replace(`/${C}`, `/${N}`)),
							s.redirect(M)
						)
					}
				}
			}
			return h
		}
}
var EE = (n) => {
		Reflect.set(n.request, sm, n.route)
	},
	CE = new Date(0),
	Xu = 'deleted',
	xE = Symbol.for('astro.responseSent'),
	fr = class {
		constructor(e) {
			this.value = e
		}
		json() {
			if (this.value === void 0) throw new Error('Cannot convert undefined to an object.')
			return JSON.parse(this.value)
		}
		number() {
			return Number(this.value)
		}
		boolean() {
			return this.value === 'false' || this.value === '0' ? !1 : !!this.value
		}
	},
	gr = class {
		#e
		#t
		#n
		constructor(e) {
			;(this.#e = e), (this.#t = null), (this.#n = null)
		}
		delete(e, r) {
			let s = { expires: CE }
			r?.domain && (s.domain = r.domain),
				r?.path && (s.path = r.path),
				this.#o().set(e, [Xu, (0, sn.serialize)(e, Xu, s), !1])
		}
		get(e) {
			if (this.#n?.has(e)) {
				let [s, , o] = this.#n.get(e)
				return o ? new fr(s) : void 0
			}
			let r = this.#s()
			if (e in r) {
				let s = r[e]
				return new fr(s)
			}
		}
		has(e) {
			if (this.#n?.has(e)) {
				let [, , s] = this.#n.get(e)
				return s
			}
			return !!this.#s()[e]
		}
		set(e, r, s) {
			let o
			if (typeof r == 'string') o = r
			else {
				let a = r.toString()
				a === Object.prototype.toString.call(r) ? (o = JSON.stringify(r)) : (o = a)
			}
			let l = {}
			if (
				(s && Object.assign(l, s),
				this.#o().set(e, [o, (0, sn.serialize)(e, o, l), !0]),
				this.#e[xE])
			)
				throw new k({ ...bn })
		}
		*headers() {
			if (this.#n != null) for (let [, e] of this.#n) yield e[1]
		}
		#s() {
			return this.#t || this.#r(), this.#t || (this.#t = {}), this.#t
		}
		#o() {
			return this.#n || (this.#n = new Map()), this.#n
		}
		#r() {
			let e = this.#e.headers.get('cookie')
			e && (this.#t = (0, sn.parse)(e))
		}
	},
	Js = Symbol.for('astro.cookies')
function qs(n, e) {
	Reflect.set(n, Js, e)
}
function SE(n) {
	return Reflect.has(n, Js)
}
function AE(n) {
	let e = Reflect.get(n, Js)
	if (e != null) return e
}
function* kE(n) {
	let e = AE(n)
	if (!e) return []
	for (let r of e.headers()) yield r
	return []
}
var BE = {
	write(n) {
		let e = console.error
		return (
			Nt[n.level] < Nt.error && (e = console.log),
			n.label === 'SKIP_FORMAT' ? e(n.message) : e(al(n) + ' ' + n.message),
			!0
		)
	}
}
async function om(n, e, r) {
	let s = !1,
		o,
		a = n(e, async () => ((s = !0), (o = r()), o))
	return await Promise.resolve(a).then(async (i) => {
		if (s)
			if (typeof i < 'u') {
				if (!(i instanceof Response)) throw new k(wn)
				return Ju(e, i)
			} else {
				if (o) return o
				throw new k(wn)
			}
		else {
			if (typeof i > 'u') throw new k(Po)
			if (i instanceof Response) return Ju(e, i)
			throw new k(wn)
		}
	})
}
function Ju(n, e) {
	return n.cookies !== void 0 && !SE(e) && qs(e, n.cookies), e
}
function lm(n) {
	return n?.type === 'redirect'
}
function am(n) {
	return n?.type === 'fallback'
}
function _E(n, e) {
	let r = n.redirectRoute,
		s = n.redirect
	if (typeof r < 'u') return r?.generate(e) || r?.pathname || '/'
	if (typeof s == 'string') {
		let o = s
		for (let l of Object.keys(e)) {
			let a = e[l]
			;(o = o.replace(`[${l}]`, a)), (o = o.replace(`[...${l}]`, a))
		}
		return o
	} else if (typeof s > 'u') return '/'
	return s.destination
}
function TE(n, e = 'GET') {
	let r = n.redirectRoute
	return typeof r?.redirect == 'object' ? r.redirect.status : e !== 'GET' ? 308 : 301
}
var PE = {
		default() {
			return new Response(null, { status: 301 })
		}
	},
	ME = { page: () => Promise.resolve(PE), onRequest: (n, e) => e(), renderers: [] },
	IE = ['string', 'number', 'undefined']
function jE([n, e], r) {
	if (!IE.includes(typeof e))
		throw new k({ ...Vr, message: Vr.message(n, e, typeof e), location: { file: r } })
}
function LE(n, { ssr: e, route: r }) {
	if ((!e || r.prerender) && !n.getStaticPaths)
		throw new k({ ...ko, location: { file: r.component } })
}
function $E(n, e, r) {
	if (!Array.isArray(n))
		throw new k({ ...Gr, message: Gr.message(typeof n), location: { file: r.component } })
	n.forEach((s) => {
		if ((typeof s == 'object' && Array.isArray(s)) || s === null)
			throw new k({ ...Wr, message: Wr.message(Array.isArray(s) ? 'array' : typeof s) })
		if (
			s.params === void 0 ||
			s.params === null ||
			(s.params && Object.keys(s.params).length === 0)
		)
			throw new k({ ...Ao, location: { file: r.component } })
		for (let [o, l] of Object.entries(s.params))
			typeof l > 'u' ||
				typeof l == 'string' ||
				typeof l == 'number' ||
				e.warn(
					'router',
					`getStaticPaths() returned an invalid path param: "${o}". A string, number or undefined value was expected, but got \`${JSON.stringify(
						l
					)}\`.`
				),
				typeof l == 'string' &&
					l === '' &&
					e.warn(
						'router',
						`getStaticPaths() returned an invalid path param: "${o}". \`undefined\` expected for an optional param, but got empty string.`
					)
	})
}
function OE(n) {
	return (r) => {
		let s = {}
		return (
			n.forEach((o, l) => {
				o.startsWith('...') ? (s[o.slice(3)] = r[l + 1] ? r[l + 1] : void 0) : (s[o] = r[l + 1])
			}),
			s
		)
	}
}
function im(n, e) {
	let r = Object.entries(n).reduce((s, o) => {
		jE(o, e.component)
		let [l, a] = o
		return a !== void 0 && (s[l] = typeof a == 'string' ? Er(a) : a.toString()), s
	}, {})
	return JSON.stringify(e.generate(r))
}
function RE(n) {
	return function (r, s = {}) {
		let { pageSize: o, params: l, props: a } = s,
			i = o || 10,
			c = 'page',
			p = l || {},
			d = a || {},
			h
		if (n.params.includes(`...${c}`)) h = !1
		else if (n.params.includes(`${c}`)) h = !0
		else throw new k({ ...Jr, message: Jr.message(c) })
		let u = Math.max(1, Math.ceil(r.length / i))
		return [...Array(u).keys()].map((E) => {
			let C = E + 1,
				v = i === 1 / 0 ? 0 : (C - 1) * i,
				N = Math.min(v + i, r.length),
				M = { ...p, [c]: h || C > 1 ? String(C) : void 0 },
				ee = Ns(n.generate({ ...M })),
				oe = C === u ? void 0 : Ns(n.generate({ ...M, page: String(C + 1) })),
				ge =
					C === 1
						? void 0
						: Ns(n.generate({ ...M, page: !h && C - 1 === 1 ? void 0 : String(C - 1) }))
			return {
				params: M,
				props: {
					...d,
					page: {
						data: r.slice(v, N),
						start: v,
						end: N - 1,
						size: i,
						total: r.length,
						currentPage: C,
						lastPage: u,
						url: { current: ee, next: oe, prev: ge }
					}
				}
			}
		})
	}
}
function Ns(n) {
	return n === '' ? '/' : n
}
async function UE({ mod: n, route: e, routeCache: r, logger: s, ssr: o }) {
	let l = r.get(e)
	if (!n)
		throw new Error('This is an error caused by Astro and not your code. Please file an issue.')
	if (l?.staticPaths) return l.staticPaths
	if ((LE(n, { ssr: o, route: e }), o && !e.prerender)) {
		let c = Object.assign([], { keyed: new Map() })
		return r.set(e, { ...l, staticPaths: c }), c
	}
	let a = []
	if (!n.getStaticPaths) throw new Error('Unexpected Error.')
	;(a = await n.getStaticPaths({ paginate: RE(e) })), $E(a, s, e)
	let i = a
	i.keyed = new Map()
	for (let c of i) {
		let p = im(c.params, e)
		i.keyed.set(p, c)
	}
	return r.set(e, { ...l, staticPaths: i }), i
}
var zs = class {
	logger
	cache = {}
	mode
	constructor(e, r = 'production') {
		;(this.logger = e), (this.mode = r)
	}
	clearAll() {
		this.cache = {}
	}
	set(e, r) {
		this.mode === 'production' &&
			this.cache[e.component]?.staticPaths &&
			this.logger.warn(null, `Internal Warning: route cache overwritten. (${e.component})`),
			(this.cache[e.component] = r)
	}
	get(e) {
		return this.cache[e.component]
	}
}
function NE(n, e, r, s) {
	let o = im(e, r),
		l = n.keyed.get(o)
	if (l) return l
	s.debug('router', `findPathItemByKey() - Unexpected cache miss looking for ${o}`)
}
async function HE(n) {
	let { logger: e, mod: r, route: s, routeCache: o, pathname: l, ssr: a } = n
	if (!s || s.pathname) return [{}, {}]
	let i = zE(s, l) ?? {}
	if (lm(s) || am(s)) return [i, {}]
	r && WE(s, r, i)
	let c = await UE({ mod: r, route: s, routeCache: o, logger: e, ssr: a }),
		p = NE(c, i, s, e)
	if (!p && (!a || s.prerender))
		throw new k({ ...gn, message: gn.message(l), hint: gn.hint([s.component]) })
	let d = p?.props ? { ...p.props } : {}
	return [i, d]
}
function zE(n, e) {
	if (n.params.length) {
		let r = n.pattern.exec(decodeURIComponent(e))
		if (r) return OE(n.params)(r)
	}
}
function WE(n, e, r) {
	if (n.type === 'endpoint' && e.getStaticPaths) {
		let s = n.segments[n.segments.length - 1],
			o = Object.values(r),
			l = o[o.length - 1]
		if (s.length === 1 && s[0].dynamic && l === void 0)
			throw new k({
				...Fn,
				message: Fn.message(n.route),
				hint: Fn.hint(n.component),
				location: { file: n.component }
			})
	}
}
var qu = Symbol.for('astro.locals')
async function Zu(n) {
	let e = n.request,
		r = n.pathname ?? new URL(e.url).pathname,
		[s, o] = await HE({
			mod: n.mod,
			route: n.route,
			routeCache: n.env.routeCache,
			pathname: r,
			logger: n.env.logger,
			ssr: n.env.ssr
		}),
		l = {
			...n,
			pathname: r,
			params: s,
			props: o,
			locales: n.locales,
			routing: n.routing,
			defaultLocale: n.defaultLocale
		}
	return (
		Object.defineProperty(l, 'locals', {
			enumerable: !0,
			get() {
				return Reflect.get(e, qu)
			},
			set(a) {
				if (typeof a != 'object') throw new k(vn)
				Reflect.set(e, qu, a)
			}
		}),
		l
	)
}
function cm(n) {
	if (n === '*') return [{ locale: n, qualityValue: void 0 }]
	let e = [],
		r = n.split(',').map((s) => s.trim())
	for (let s of r) {
		let o = s.split(';').map((i) => i.trim()),
			l = o[0],
			a = o[1]
		if (o)
			if (a && a.startsWith('q=')) {
				let i = Number.parseFloat(a.slice(2))
				Number.isNaN(i) || i > 1
					? e.push({ locale: l, qualityValue: void 0 })
					: e.push({ locale: l, qualityValue: i })
			} else e.push({ locale: l, qualityValue: void 0 })
	}
	return e
}
function dm(n, e) {
	let r = bE(e).map(fe)
	return n
		.filter((s) => (s.locale !== '*' ? r.includes(fe(s.locale)) : !0))
		.sort((s, o) => {
			if (s.qualityValue && o.qualityValue) {
				if (s.qualityValue > o.qualityValue) return -1
				if (s.qualityValue < o.qualityValue) return 1
			}
			return 0
		})
}
function pm(n, e) {
	let r = n.headers.get('Accept-Language'),
		s
	if (r) {
		let l = dm(cm(r), e).at(0)
		if (l && l.locale !== '*')
			for (let a of e)
				if (typeof a == 'string') fe(a) === fe(l.locale) && (s = a)
				else for (let i of a.codes) fe(i) === fe(l.locale) && (s = a.path)
	}
	return s
}
function hm(n, e) {
	let r = n.headers.get('Accept-Language'),
		s = []
	if (r) {
		let o = dm(cm(r), e)
		if (o.length === 1 && o.at(0).locale === '*')
			return e.map((l) => (typeof l == 'string' ? l : l.codes.at(0)))
		if (o.length > 0)
			for (let l of o)
				for (let a of e)
					if (typeof a == 'string') fe(a) === fe(l.locale) && s.push(a)
					else for (let i of a.codes) i === l.locale && s.push(a.path)
	}
	return s
}
function um(n, e, r, s) {
	let o = new URL(n.url)
	for (let l of o.pathname.split('/'))
		for (let a of e)
			if (typeof a == 'string') {
				if (fe(a) === fe(l)) return a
			} else if (a.path === l) return a.codes.at(0)
	if (r === 'prefix-other-locales') return s
}
var Yu = Symbol.for('astro.clientAddress'),
	Hs = Symbol.for('astro.locals')
function mm({
	request: n,
	params: e,
	site: r,
	props: s,
	adapterName: o,
	locales: l,
	routingStrategy: a,
	defaultLocale: i
}) {
	let c, p, d
	return {
		cookies: new gr(n),
		request: n,
		params: e,
		site: r ? new URL(r) : void 0,
		generator: `Astro v${es}`,
		props: s,
		redirect(u, g) {
			return new Response(null, { status: g || 302, headers: { Location: u } })
		},
		get preferredLocale() {
			if (c) return c
			if (l) return (c = pm(n, l)), c
		},
		get preferredLocaleList() {
			if (p) return p
			if (l) return (p = hm(n, l)), p
		},
		get currentLocale() {
			return d || (l && (d = um(n, l, a, i)), d)
		},
		url: new URL(n.url),
		get clientAddress() {
			if (Yu in n) return Reflect.get(n, Yu)
			throw o ? new k({ ...Rt, message: Rt.message(o) }) : new k(zr)
		},
		get locals() {
			let u = Reflect.get(n, Hs)
			if ((u === void 0 && ((u = {}), Reflect.set(n, Hs, u)), typeof u != 'object')) throw new k(vn)
			return u
		},
		set locals(u) {
			if (typeof u != 'object') throw new k(vn)
			Reflect.set(n, Hs, u)
		}
	}
}
async function GE(n, e, r, s) {
	let o = mm({
			request: r.request,
			params: r.params,
			props: r.props,
			site: e.site,
			adapterName: e.adapterName,
			routingStrategy: r.routing,
			defaultLocale: r.defaultLocale,
			locales: r.locales
		}),
		l
	return (
		s
			? (l = await om(s, o, async () => await ts(n, o, e.ssr, e.logger)))
			: (l = await ts(n, o, e.ssr, e.logger)),
		qs(l, o.cookies),
		l
	)
}
function VE(...n) {
	let e = n.filter((s) => !!s),
		r = e.length
	return r
		? (s, o) => {
				return l(0, s)
				function l(a, i) {
					let c = e[a]
					return c(i, async () => (a < r - 1 ? l(a + 1, i) : o()))
				}
			}
		: (o, l) => l()
}
function Zs(n, e, r) {
	return r ? rt(r, Cr(n)) : e ? nt(rt(e, Cr(n))) : n
}
function XE(n, e, r) {
	return n.type === 'inline'
		? { props: {}, children: n.content }
		: { props: { rel: 'stylesheet', href: Zs(n.src, e, r) }, children: '' }
}
function JE(n, e, r) {
	return new Set(n.map((s) => XE(s, e, r)))
}
function qE(n, e, r) {
	return n.type === 'external'
		? ZE(n.value, e, r)
		: { props: { type: 'module' }, children: n.value }
}
function ZE(n, e, r) {
	return { props: { type: 'module', src: Zs(n, e, r) }, children: '' }
}
function Ku(n, e) {
	let r = decodeURI(n)
	return e.routes.find((s) => s.pattern.test(r) || s.fallbackRoutes.some((o) => o.pattern.test(r)))
}
var Qu = Symbol.for('astro.clientAddress'),
	YE = Symbol.for('astro.responseSent')
function KE(n) {
	if (n && n.expressions?.length === 1) return n.expressions[0]
}
var Ws = class {
	#e
	#t
	#n
	constructor(e, r, s) {
		if (((this.#e = e), (this.#t = r), (this.#n = s), r))
			for (let o of Object.keys(r)) {
				if (this[o] !== void 0) throw new k({ ...Xr, message: Xr.message(o) })
				Object.defineProperty(this, o, {
					get() {
						return !0
					},
					enumerable: !0
				})
			}
	}
	has(e) {
		return this.#t ? !!this.#t[e] : !1
	}
	async render(e, r = []) {
		if (!this.#t || !this.has(e)) return
		let s = this.#e
		if (!Array.isArray(r))
			this.#n.warn(
				null,
				`Expected second parameter to be an array, received a ${typeof r}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
			)
		else if (r.length > 0) {
			let a = this.#t[e],
				i = typeof a == 'function' ? await a(s) : await a,
				c = KE(i)
			if (c)
				return await lt(s, async () => (typeof c == 'function' ? c(...r) : c)).then((d) =>
					d != null ? String(d) : d
				)
			if (typeof i == 'function')
				return await we(s, i(...r)).then((p) => (p != null ? String(p) : p))
		}
		let o = await lt(s, this.#t[e])
		return $e(s, o)
	}
}
function QE(n) {
	let { params: e, request: r, resolve: s, locals: o } = n,
		l = new URL(r.url),
		a = new Headers()
	a.set('Content-Type', 'text/html')
	let i = { status: n.status, statusText: 'OK', headers: a }
	Object.defineProperty(i, 'headers', { value: i.headers, enumerable: !0, writable: !1 })
	let c = n.cookies,
		p,
		d,
		h,
		u = {
			styles: n.styles ?? new Set(),
			scripts: n.scripts ?? new Set(),
			links: n.links ?? new Set(),
			componentMetadata: n.componentMetadata ?? new Map(),
			renderers: n.renderers,
			clientDirectives: n.clientDirectives,
			compressHTML: n.compressHTML,
			partial: n.partial,
			pathname: n.pathname,
			cookies: c,
			createAstro(g, E, C) {
				let v = new Ws(u, C, n.logger)
				return {
					__proto__: g,
					get clientAddress() {
						if (!(Qu in r))
							throw n.adapterName ? new k({ ...Rt, message: Rt.message(n.adapterName) }) : new k(zr)
						return Reflect.get(r, Qu)
					},
					get cookies() {
						return c || ((c = new gr(r)), (u.cookies = c), c)
					},
					get preferredLocale() {
						if (p) return p
						if (n.locales) return (p = pm(r, n.locales)), p
					},
					get preferredLocaleList() {
						if (d) return d
						if (n.locales) return (d = hm(r, n.locales)), d
					},
					get currentLocale() {
						if (h || (n.locales && ((h = um(r, n.locales, n.routingStrategy, n.defaultLocale)), h)))
							return h
					},
					params: e,
					props: E,
					locals: o,
					request: r,
					url: l,
					redirect(M, ee) {
						if (r[YE]) throw new k({ ...bn })
						return new Response(null, { status: ee || 302, headers: { Location: M } })
					},
					response: i,
					slots: v
				}
			},
			resolve: s,
			response: i,
			_metadata: {
				hasHydrationScript: !1,
				hasRenderedHead: !1,
				hasDirectives: new Set(),
				headInTree: !1,
				extraHead: [],
				propagators: new Set()
			}
		}
	return u
}
async function em({ mod: n, renderContext: e, env: r, cookies: s }) {
	if (lm(e.route))
		return new Response(null, {
			status: TE(e.route, e.request.method),
			headers: { location: _E(e.route, e.params) }
		})
	if (am(e.route)) return new Response(null, { status: 404 })
	if (!n) throw new k(Io)
	let o = n.default
	if (!o) throw new Error(`Expected an exported Astro component but received typeof ${typeof o}`)
	let l = QE({
			adapterName: r.adapterName,
			links: e.links,
			styles: e.styles,
			logger: r.logger,
			params: e.params,
			pathname: e.pathname,
			componentMetadata: e.componentMetadata,
			resolve: r.resolve,
			renderers: r.renderers,
			clientDirectives: r.clientDirectives,
			compressHTML: r.compressHTML,
			request: e.request,
			partial: !!n.partial,
			site: r.site,
			scripts: e.scripts,
			ssr: r.ssr,
			status: e.status ?? 200,
			cookies: s,
			locals: e.locals ?? {},
			locales: e.locales,
			defaultLocale: e.defaultLocale,
			routingStrategy: e.routing
		}),
		a = await Qo(l, o, e.props, {}, r.streaming, e.route)
	return l.cookies && qs(a, l.cookies), a
}
var Gs = class {
		env
		#e
		#t = { before: [] }
		#n
		constructor(e) {
			this.env = e
		}
		setEnvironment() {}
		setEndpointHandler(e) {
			this.#n = e
		}
		setMiddlewareFunction(e) {
			this.#e = e
		}
		unsetMiddlewareFunction() {
			this.#e = void 0
		}
		getEnvironment() {
			return this.env
		}
		async renderRoute(e, r) {
			for (let o of this.#t.before) o(e, r)
			let s = await this.#s(e, this.env, r, this.#e)
			if (e.route.type === 'endpoint') {
				if (!this.#n)
					throw new Error(
						'You created a pipeline that does not know how to handle the result coming from an endpoint.'
					)
				return this.#n(e.request, s)
			} else return s
		}
		async #s(e, r, s, o) {
			let l = mm({
				request: e.request,
				params: e.params,
				props: e.props,
				site: r.site,
				adapterName: r.adapterName,
				locales: e.locales,
				routingStrategy: e.routing,
				defaultLocale: e.defaultLocale
			})
			switch (e.route.type) {
				case 'page':
				case 'fallback':
				case 'redirect':
					return o
						? await om(o, l, () => em({ mod: s, renderContext: e, env: r, cookies: l.cookies }))
						: await em({ mod: s, renderContext: e, env: r, cookies: l.cookies })
				case 'endpoint':
					return await GE(s, r, e, o)
				default:
					throw new Error(`Couldn't find route of type [${e.route.type}]`)
			}
		}
		onBeforeRenderRoute(e) {
			this.#t.before.push(e)
		}
	},
	Fr = class extends Error {
		originalResponse
		constructor(e) {
			super(), (this.originalResponse = e)
		}
	},
	Vs = class extends Gs {
		constructor(e) {
			super(e), this.setEndpointHandler(this.#e)
		}
		async #e(e, r) {
			if (r.headers.get('X-Astro-Response') === 'Not-Found') throw new Fr(r)
			return r
		}
	},
	e9 = Symbol.for('astro.locals'),
	tm = Symbol.for('astro.responseSent'),
	t9 = new Set([404, 500]),
	Xs = class {
		#e
		#t
		#n
		#s = new En({ dest: BE, level: 'info' })
		#o
		#r
		#i
		#c = !1
		constructor(e, r = !0) {
			;(this.#e = e),
				(this.#t = { routes: e.routes.map((s) => s.routeData) }),
				(this.#n = new Map(e.routes.map((s) => [s.routeData, s]))),
				(this.#o = dn(this.#e.base)),
				(this.#r = new Vs(this.#h(r))),
				(this.#i = new Ht(this.#s.options, this.#e.adapterName))
		}
		getAdapterLogger() {
			return this.#i
		}
		#h(e = !1) {
			return {
				adapterName: this.#e.adapterName,
				logger: this.#s,
				mode: 'production',
				compressHTML: this.#e.compressHTML,
				renderers: this.#e.renderers,
				clientDirectives: this.#e.clientDirectives,
				resolve: async (r) => {
					if (!(r in this.#e.entryModules)) throw new Error(`Unable to resolve [${r}]`)
					let s = this.#e.entryModules[r]
					switch (!0) {
						case s.startsWith('data:'):
						case s.length === 0:
							return s
						default:
							return Zs(s, this.#e.base, this.#e.assetsPrefix)
					}
				},
				routeCache: new zs(this.#s),
				site: this.#e.site,
				ssr: !0,
				streaming: e
			}
		}
		set setManifestData(e) {
			this.#t = e
		}
		removeBase(e) {
			return e.startsWith(this.#e.base) ? e.slice(this.#o.length + 1) : e
		}
		#u(e) {
			let r = new URL(e.url)
			return nt(this.removeBase(r.pathname))
		}
		match(e) {
			let r = new URL(e.url)
			if (this.#e.assets.has(r.pathname)) return
			let s = nt(this.removeBase(r.pathname)),
				o = Ku(s, this.#t)
			if (!(!o || o.prerender)) return o
		}
		async render(e, r, s) {
			let o, l
			if (
				(r && ('routeData' in r || 'locals' in r)
					? ('routeData' in r && (o = r.routeData), 'locals' in r && (l = r.locals))
					: ((o = r), (l = s), (r || l) && this.#m()),
				e.url !== vr(e.url) && (e = new Request(vr(e.url), e)),
				o || (o = this.match(e)),
				!o)
			)
				return this.#l(e, { status: 404 })
			Reflect.set(e, e9, l ?? {})
			let a = this.#u(e),
				i = this.#y(o, a),
				c = await this.#p(o),
				p = await c.page(),
				d = new URL(e.url),
				h = await this.#d(d, e, o, c, i),
				u
			try {
				let g = vE(this.#e.i18n, this.#e.base, this.#e.trailingSlash)
				g
					? (c.onRequest
							? this.#r.setMiddlewareFunction(VE(g, c.onRequest))
							: this.#r.setMiddlewareFunction(g),
						this.#r.onBeforeRenderRoute(EE))
					: c.onRequest && this.#r.setMiddlewareFunction(c.onRequest),
					(u = await this.#r.renderRoute(h, p))
			} catch (g) {
				return g instanceof Fr
					? this.#l(e, { status: 404, response: g.originalResponse })
					: (this.#s.error(null, g.stack || g.message || String(g)), this.#l(e, { status: 500 }))
			}
			return o.type === 'page' || o.type === 'redirect'
				? t9.has(u.status)
					? this.#l(e, { response: u, status: u.status })
					: (Reflect.set(u, tm, !0), u)
				: u
		}
		#m() {
			this.#c ||
				(this.#s.warn(
					'deprecated',
					`The adapter ${this.#e.adapterName} is using a deprecated signature of the 'app.render()' method. From Astro 4.0, locals and routeData are provided as properties on an optional object to this method. Using the old signature will cause an error in Astro 5.0. See https://github.com/withastro/astro/pull/9199 for more information.`
				),
				(this.#c = !0))
		}
		setCookieHeaders(e) {
			return kE(e)
		}
		async #d(e, r, s, o, l = 200) {
			if (s.type === 'endpoint') {
				let a = '/' + this.removeBase(e.pathname),
					c = await o.page()
				return await Zu({
					request: r,
					pathname: a,
					route: s,
					status: l,
					env: this.#r.env,
					mod: c,
					locales: this.#e.i18n?.locales,
					routing: this.#e.i18n?.routing,
					defaultLocale: this.#e.i18n?.defaultLocale
				})
			} else {
				let a = nt(this.removeBase(e.pathname)),
					i = this.#n.get(s),
					c = new Set(),
					p = JE(i.styles),
					d = new Set()
				for (let u of i.scripts)
					'stage' in u
						? u.stage === 'head-inline' && d.add({ props: {}, children: u.children })
						: d.add(qE(u))
				let h = await o.page()
				return await Zu({
					request: r,
					pathname: a,
					componentMetadata: this.#e.componentMetadata,
					scripts: d,
					styles: p,
					links: c,
					route: s,
					status: l,
					mod: h,
					env: this.#r.env,
					locales: this.#e.i18n?.locales,
					routing: this.#e.i18n?.routing,
					defaultLocale: this.#e.i18n?.defaultLocale
				})
			}
		}
		async #l(e, { status: r, response: s, skipMiddleware: o = !1 }) {
			let l = `/${r}${this.#e.trailingSlash === 'always' ? '/' : ''}`,
				a = Ku(l, this.#t),
				i = new URL(e.url)
			if (a) {
				if (a.prerender) {
					let d = a.route.endsWith(`/${r}`) ? '.html' : '',
						h = new URL(`${this.#o}/${r}${d}`, i),
						u = await fetch(h.toString()),
						g = { status: r }
					return this.#a(u, s, g)
				}
				let p = await this.#p(a)
				try {
					let d = await this.#d(i, e, a, p, r),
						h = await p.page()
					o === !1 && p.onRequest && this.#r.setMiddlewareFunction(p.onRequest),
						o && this.#r.unsetMiddlewareFunction()
					let u = await this.#r.renderRoute(d, h)
					return this.#a(u, s)
				} catch {
					if (o === !1 && p.onRequest)
						return this.#l(e, { status: r, response: s, skipMiddleware: !0 })
				}
			}
			let c = this.#a(new Response(null, { status: r }), s)
			return Reflect.set(c, tm, !0), c
		}
		#a(e, r, s) {
			if (!r)
				return s !== void 0
					? new Response(e.body, { status: s.status, statusText: e.statusText, headers: e.headers })
					: e
			let o = s?.status ? s.status : r.status === 200 ? e.status : r.status
			try {
				r.headers.delete('Content-type')
			} catch {}
			return new Response(e.body, {
				status: o,
				statusText: o === 200 ? e.statusText : r.statusText,
				headers: new Headers([...Array.from(e.headers), ...Array.from(r.headers)])
			})
		}
		#y(e, r) {
			if (!e.pattern.exec(r)) {
				for (let o of e.fallbackRoutes) if (o.pattern.test(r)) return 302
			}
			let s = dn(e.route)
			return s.endsWith('/404') ? 404 : s.endsWith('/500') ? 500 : 200
		}
		async #p(e) {
			if (e.type === 'redirect') return ME
			if (this.#e.pageMap) {
				let r = this.#e.pageMap.get(e.component)
				if (!r)
					throw new Error(`Unexpectedly unable to find a component instance for route ${e.route}`)
				return await r()
			} else {
				if (this.#e.pageModule) return this.#e.pageModule
				throw new Error(
					"Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
				)
			}
		}
	},
	n9 = typeof process == 'object' && Object.prototype.toString.call(process) === '[object process]'
function r9() {
	return new Proxy(
		{},
		{
			get: (n, e) => {
				console.warn(
					`Unable to access \`import.meta\0.env.${e.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`
				)
			}
		}
	)
}
n9 || (process.env = r9())
function ym(n) {
	let e = new Xs(n)
	return {
		onRequest: async (s) => {
			let o = s.request,
				{ env: l } = s
			process.env = l
			let { pathname: a } = new URL(o.url)
			if (n.assets.has(a)) return l.ASSETS.fetch(o)
			let i = e.match(o)
			Reflect.set(o, Symbol.for('astro.clientAddress'), o.headers.get('cf-connecting-ip'))
			let c = {
					runtime: {
						waitUntil: (d) => {
							s.waitUntil(d)
						},
						env: s.env,
						cf: o.cf,
						caches
					}
				},
				p = await e.render(o, i, c)
			if (e.setCookieHeaders) for (let d of e.setCookieHeaders(p)) p.headers.append('Set-Cookie', d)
			return p
		},
		manifest: n
	}
}
var nm = Object.freeze(
		Object.defineProperty({ __proto__: null, createExports: ym }, Symbol.toStringTag, {
			value: 'Module'
		})
	),
	s9 = () => Promise.resolve().then(() => (Vp(), Gp)),
	o9 = () => Promise.resolve().then(() => (lh(), oh)),
	l9 = () => Promise.resolve().then(() => (ih(), ah)),
	a9 = () => Promise.resolve().then(() => (Uu(), Ru)),
	i9 = () => Promise.resolve().then(() => (Hu(), Nu)),
	c9 = () => Promise.resolve().then(() => (Wu(), zu)),
	d9 = () => Promise.resolve().then(() => (Vu(), Gu)),
	p9 = new Map([
		[
			'node_modules/.pnpm/astro@4.0.8_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js',
			s9
		],
		['src/pages/index.astro', o9],
		['src/pages/category/[category]/[page].astro', l9],
		['src/pages/rss.xml.ts', a9],
		['src/pages/post/[...slug].astro', i9],
		['src/pages/tags/index.astro', c9],
		['src/pages/tags/[...tag]/index.astro', d9]
	]),
	Dm = Object.assign(il, { pageMap: p9, renderers: re }),
	h9 = void 0,
	fm = ym(Dm),
	rA = fm.onRequest,
	sA = fm.manifest,
	rm = 'start'
rm in nm && nm[rm](Dm, h9)
export { sA as manifest, rA as onRequest, p9 as pageMap }
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
