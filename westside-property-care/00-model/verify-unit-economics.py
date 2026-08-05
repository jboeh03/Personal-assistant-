#!/usr/bin/env python3
"""
Verification of every arithmetic claim in
westside-property-care/00-model/unit-economics.md
after the 2026-08-05 four-configuration pricing resolution.

Run:  python3 verify_unit_economics.py
Each check prints PASS/FAIL. Exit code 1 if any check fails.
"""

CHECKS = []


def chk(name, got, want, tol=0.005):
    ok = abs(got - want) <= tol
    CHECKS.append((name, ok, got, want))
    return ok


def r2(x):          # round to cents
    return round(x + 1e-9, 2)


def rd(x):          # round to whole dollars
    return int(round(x + 1e-9))


# ---------------------------------------------------------------- prices
BASE, POOL, KITCHEN = 229, 60, 40
P_NEITHER = BASE                      # 229
P_KIT     = BASE + KITCHEN            # 269
P_POOL    = BASE + POOL               # 289
P_BOTH    = BASE + POOL + KITCHEN     # 329

chk("C01 $269 = 229+40", P_KIT, 269)
chk("C02 $289 = 229+60", P_POOL, 289)
chk("C03 $329 = 229+60+40", P_BOTH, 329)

# ------------------------------------------------------------- A1 mix
# 6-client book: 1 neither, 2 kitchen-only, 1 pool-only, 2 both
MIX6 = {P_NEITHER: 1, P_KIT: 2, P_POOL: 1, P_BOTH: 2}
m6 = sum(p * n for p, n in MIX6.items())
chk("C04 6-client monthly book", m6, 1714)
chk("C05 6-client blended avg", r2(m6 / 6), 285.67)
chk("C06 mix via attributes", 6 * BASE + 4 * KITCHEN + 3 * POOL, 1714)
chk("C07 6-client annual membership", m6 * 12, 20568)

# launch four = subset: 2 kitchen-only, 1 pool-only, 1 both
MIX4 = {P_KIT: 2, P_POOL: 1, P_BOTH: 1}
m4 = sum(p * n for p, n in MIX4.items())
chk("C08 4-client monthly book", m4, 1156)
chk("C09 4-client blended avg", m4 / 4, 289)
chk("C10 4-client annual membership", m4 * 12, 13872)
chk("C11 clients 5+6 close the book", m4 + P_NEITHER + P_BOTH, m6)

# 8-client: book + one kitchen-only + one pool-only
m8 = m6 + P_KIT + P_POOL
chk("C12 8-client monthly book", m8, 2272)
chk("C13 8-client annual membership", m8 * 12, 27264)
chk("C14 8-client blended avg", m8 / 8, 284)

# what the resolution is worth on this mix (2 kitchen-only x $40 x 12)
chk("C15 value of the 4th configuration", 2 * KITCHEN * 12, 960)

# -------------------------------------------------------- assumptions
PROJ_PER_CLIENT, PROJ_VALUE = 2.5, 275
NM_VALUE = 250
MILE = 0.74
CARD, PER_TXN, CARD_SHARE = 0.029, 0.30, 0.50


def processing(mem_rev, mem_txn, proj_rev, proj_n, nm_rev, nm_n):
    a = mem_rev * CARD + mem_txn * PER_TXN
    b = proj_rev * CARD + proj_n * PER_TXN
    c = (nm_rev * CARD_SHARE) * CARD + (nm_n * CARD_SHARE) * PER_TXN
    return a, b, c, a + b + c


# ============================================================ 4 CLIENTS
mem4 = m4 * 12
mp4_n = int(4 * PROJ_PER_CLIENT)
mp4 = mp4_n * PROJ_VALUE
nm4_n = int(0.75 * 40)
nm4 = nm4_n * NM_VALUE
gross4 = mem4 + mp4 + nm4
chk("C16 4c member projects count", mp4_n, 10)
chk("C17 4c member projects $", mp4, 2750)
chk("C18 4c non-member jobs", nm4_n, 30)
chk("C19 4c non-member $", nm4, 7500)
chk("C20 4c gross", gross4, 24122)

hrs_route4 = ((2 * 1.5) + 0.5) * 4 * 12
chk("C21 4c route hrs/month", ((2 * 1.5) + 0.5) * 4, 14.0)
chk("C22 4c route hrs/year", hrs_route4, 168)
hrs4 = hrs_route4 + (mp4_n + nm4_n) * 3 + 2.5 * 52
chk("C23 4c project hours", (mp4_n + nm4_n) * 3, 120)
chk("C24 4c admin hours", 2.5 * 52, 130)
chk("C25 4c total hours", hrs4, 418)

mi4 = 48 * 20 + (mp4_n + nm4_n) * 20 + 30 * 15
chk("C26 4c miles", mi4, 2210)
chk("C27 4c vehicle $", rd(mi4 * MILE), 1635)
a, b, c, tot4 = processing(mem4, 48, mp4, mp4_n, nm4, nm4_n)
chk("C28 4c proc membership", r2(a), 416.69)
chk("C29 4c proc member proj", r2(b), 82.75)
chk("C30 4c proc non-member", r2(c), 113.25)
chk("C31 4c proc total", rd(tot4), 613)
exp4 = rd(mi4 * MILE) + 600 + 660 + 348 + rd(tot4) + 420 + 600 + 60 + 350
chk("C32 4c expenses", exp4, 5286)
net4 = gross4 - exp4
chk("C33 4c net", net4, 18836)
chk("C34 4c net/hr", r2(net4 / hrs4), 45.06)
chk("C35 4c gross/hr", r2(gross4 / hrs4), 57.71)
chk("C36 4c year-1 net after LLC", net4 - 99, 18737)
chk("C37 4c revenue per route day", m4 / 4, 289)

# ============================================================ 6 CLIENTS
mem6 = m6 * 12
mp6_n = int(6 * PROJ_PER_CLIENT)
mp6 = mp6_n * PROJ_VALUE
nm6_n = 40
nm6 = nm6_n * NM_VALUE
gross6 = mem6 + mp6 + nm6
chk("C38 6c member projects count", mp6_n, 15)
chk("C39 6c member projects $", mp6, 4125)
chk("C40 6c non-member $", nm6, 10000)
chk("C41 6c gross", gross6, 34693)

hrs_route6 = ((3 * 1.5) + 0.5) * 4 * 12
chk("C42 6c route hrs/month", ((3 * 1.5) + 0.5) * 4, 20.0)
chk("C43 6c route hrs/year", hrs_route6, 240)
hrs6 = hrs_route6 + (mp6_n + nm6_n) * 3 + 3.0 * 52
chk("C44 6c project hours", (mp6_n + nm6_n) * 3, 165)
chk("C45 6c admin hours", 3.0 * 52, 156)
chk("C46 6c total hours", hrs6, 561)

mi6 = 48 * 25 + (mp6_n + nm6_n) * 20 + 40 * 15
chk("C47 6c miles", mi6, 2900)
chk("C48 6c vehicle $", rd(mi6 * MILE), 2146)
a, b, c, tot6 = processing(mem6, 72, mp6, mp6_n, nm6, nm6_n)
chk("C49 6c proc membership", r2(a), 618.07)
chk("C50 6c proc member proj", r2(b), 124.13)
chk("C51 6c proc non-member", r2(c), 151.00)
chk("C52 6c proc total", rd(tot6), 893)
exp6 = rd(mi6 * MILE) + 780 + 660 + 348 + rd(tot6) + 420 + 600 + 60 + 350
chk("C53 6c expenses", exp6, 6257)
chk("C54 6c expense ratio %", round(100 * exp6 / gross6, 1), 18.0)
net6 = gross6 - exp6
chk("C55 6c net", net6, 28436)
chk("C56 6c net/hr", r2(net6 / hrs6), 50.69)
chk("C57 6c gross/hr", r2(gross6 / hrs6), 61.84)
chk("C58 6c revenue per route day", m6 / 4, 428.50)
chk("C59 6c membership share %", round(100 * mem6 / gross6, 1), 59.3)
chk("C60 6c project share %", round(100 * (mp6 + nm6) / gross6, 1), 40.7)
chk("C61 6c hours/week", round(hrs6 / 52, 1), 10.8)
chk("C62 6c days/week", round(hrs6 / 52 / 8, 2), 1.35)
chk("C63 6c attach rate %", round(100 * mp6_n / (6 * 24), 1), 10.4)

# vehicle: fuel vs full cost
gal = mi6 / 18
chk("C64 6c gallons", round(gal, 1), 161.1)
chk("C65 6c pump cost", rd(gal * 3.30), 532)
chk("C66 6c non-cash vehicle", rd(mi6 * MILE) - rd(gal * 3.30), 1614)

# SE tax
se6 = net6 * 0.9235 * 0.153
chk("C67 6c SE base", rd(net6 * 0.9235), 26261)
chk("C68 6c SE tax", rd(se6), 4018)
chk("C69 6c after SE", net6 - rd(se6), 24418)
chk("C70 6c after-SE per hour", r2((net6 - rd(se6)) / hrs6), 43.53)

# ============================================================ 8 CLIENTS
mem8 = m8 * 12
mp8_n = int(8 * PROJ_PER_CLIENT)
mp8 = mp8_n * PROJ_VALUE
nm8_n = int(0.6 * 40)
nm8 = nm8_n * NM_VALUE
gross8 = mem8 + mp8 + nm8
chk("C71 8c member projects", mp8, 5500)
chk("C72 8c non-member jobs", nm8_n, 24)
chk("C73 8c non-member $", nm8, 6000)
chk("C74 8c gross", gross8, 38764)

hrs_route8 = ((4 * 1.5) + 0.5) * 4 * 12
chk("C75 8c route hrs/month", ((4 * 1.5) + 0.5) * 4, 26.0)
chk("C76 8c route hrs/year", hrs_route8, 312)
hrs8 = hrs_route8 + (mp8_n + nm8_n) * 3 + 3.5 * 52
chk("C77 8c project hours", (mp8_n + nm8_n) * 3, 132)
chk("C78 8c admin hours", 3.5 * 52, 182)
chk("C79 8c total hours", hrs8, 626)

mi8 = 48 * 30 + (mp8_n + nm8_n) * 20 + 45 * 15
chk("C80 8c miles", mi8, 2995)
chk("C81 8c vehicle $", rd(mi8 * MILE), 2216)
a, b, c, tot8 = processing(mem8, 96, mp8, mp8_n, nm8, nm8_n)
chk("C82 8c proc membership", r2(a), 819.46)
chk("C83 8c proc total", rd(tot8), 1076)
exp8 = rd(mi8 * MILE) + 1020 + 660 + 348 + rd(tot8) + 420 + 700 + 60 + 350
chk("C84 8c expenses", exp8, 6850)
net8 = gross8 - exp8
chk("C85 8c net", net8, 31914)
chk("C86 8c net/hr", r2(net8 / hrs8), 50.98)
chk("C87 8c hours/week", round(hrs8 / 52, 1), 12.0)
chk("C88 8c days/week", round(hrs8 / 52 / 8, 2), 1.50)
se8 = net8 * 0.9235 * 0.153
chk("C89 8c SE tax", rd(se8), 4509)
chk("C90 8c after SE", net8 - rd(se8), 27405)
se4 = net4 * 0.9235 * 0.153
chk("C91 4c SE tax", rd(se4), 2661)
chk("C92 4c after SE", net4 - rd(se4), 16175)

# 6 vs 8 comparison
chk("C93 delta gross", gross8 - gross6, 4071)
chk("C94 delta expenses", exp8 - exp6, 593)
chk("C95 delta net", net8 - net6, 3478)
chk("C96 delta net %", round(100 * (net8 - net6) / net6, 1), 12.2)
chk("C97 delta hours", hrs8 - hrs6, 65)
chk("C98 delta hours %", round(100 * (hrs8 - hrs6) / hrs6, 1), 11.6)
chk("C99 marginal rate", r2((net8 - net6) / (hrs8 - hrs6)), 53.51)

# 8-client sensitivity: non-member falls to 0.4/week
nmS_n = int(0.4 * 40)
nmS = nmS_n * NM_VALUE
grossS = mem8 + mp8 + nmS
chk("C100 sens non-member $", nmS, 4000)
chk("C101 sens gross", grossS, 36764)
hrsS = hrs_route8 + (mp8_n + nmS_n) * 3 + 3.5 * 52
chk("C102 sens hours", hrsS, 602)
miS = 48 * 30 + (mp8_n + nmS_n) * 20 + 45 * 15
chk("C103 sens miles", miS, 2835)
chk("C104 sens vehicle $", rd(miS * MILE), 2098)
a, b, c, totS = processing(mem8, 96, mp8, mp8_n, nmS, nmS_n)
chk("C105 sens proc total", rd(totS), 1045)
expS = rd(miS * MILE) + 1020 + 660 + 348 + rd(totS) + 420 + 700 + 60 + 350
chk("C106 sens expenses", expS, 6701)
netS = grossS - expS
chk("C107 sens net", netS, 30063)
chk("C108 sens net/hr", r2(netS / hrsS), 49.94)
chk("C109 sens delta net vs 6c", netS - net6, 1627)
chk("C110 sens marginal rate", r2((netS - net6) / (hrsS - hrs6)), 39.68)

# ======================================================= CASH FLOW (S6)
proj_total = mp6 + nm6
chk("C111 project revenue total", proj_total, 14125)
green = proj_total * 0.70
dorm = proj_total * 0.30
chk("C112 green season projects", r2(green), 9887.50)
chk("C113 dormant season projects", r2(dorm), 4237.50)
chk("C114 green project/month", r2(green / 7), 1412.50)
chk("C115 dormant project/month", r2(dorm / 5), 847.50)
gm = m6 + green / 7
dm = m6 + dorm / 5
chk("C116 green month total", r2(gm), 3126.50)
chk("C117 dormant month total", r2(dm), 2561.50)
chk("C118 cash-flow reconciles to gross", r2(gm * 7 + dm * 5), 34693.00)
chk("C119 seasonal swing", r2(gm - dm), 565.00)

# ================================================== DOWNSIDE (S7)
# 7.1 zero project revenue
hrsZ = hrs_route6 + 2.0 * 52
chk("C120 zero-project hours", hrsZ, 344)
miZ = 48 * 25 + 20 * 15
chk("C121 zero-project miles", miZ, 1500)
chk("C122 zero-project vehicle $", rd(miZ * MILE), 1110)
a, _, _, _ = processing(mem6, 72, 0, 0, 0, 0)
chk("C123 zero-project processing", rd(a), 618)
expZ = rd(miZ * MILE) + 780 + 660 + 348 + rd(a) + 420 + 600 + 60 + 350
chk("C124 zero-project expenses", expZ, 4946)
netZ = mem6 - expZ
chk("C125 zero-project net", netZ, 15622)
chk("C126 zero-project net/hr", r2(netZ / hrsZ), 45.41)

# 7.2 losing one member
def loss(price):
    rev = price * 12
    saved = rev * CARD + 12 * PER_TXN
    return rev, rd(rev - saved)


chk("C127 lose $229 revenue", loss(229)[0], 2748)
chk("C128 lose $229 net", loss(229)[1], 2665)
chk("C129 lose $269 net", loss(269)[1], 3131)
chk("C130 lose $289 net", loss(289)[1], 3364)
chk("C131 lose $329 revenue", loss(329)[0], 3948)
chk("C132 lose $329 net", loss(329)[1], 3830)
chk("C133 worst case % of net", round(100 * loss(329)[1] / net6, 1), 13.5)
chk("C134 best case % of net", round(100 * loss(229)[1] / net6, 1), 9.4)
chk("C135 $329 vs $229 ratio", round(3948 / 2748, 2), 1.44)

# 7.3 off-route client
off = 12 * r2(net6 / hrs6)
chk("C136 off-route margin lost", rd(off), 608)
chk("C137 off-route % of $289 client", round(100 * rd(off) / 3468, 1), 17.5)
chk("C138 off-route % of $229 client", round(100 * rd(off) / 2748, 1), 22.1)

# ==================================================== BRIDGE (S8)
draft = 4 * 229 * 12 + 8 * 249
chk("C139 draft membership", 4 * 229 * 12, 10992)
chk("C140 draft projects", 8 * 249, 1992)
chk("C141 draft total", draft, 12984)
step1 = draft + 2 * 229 * 12
chk("C142 +2 clients at base", 2 * 229 * 12, 5496)
chk("C143 running total 1", step1, 18480)
addons = (4 * KITCHEN + 3 * POOL) * 12
chk("C144 add-on revenue", addons, 4080)
chk("C145 add-ons reconcile", mem6 - 6 * 229 * 12, 4080)
step2 = step1 + addons
chk("C146 running total 2", step2, 22560)
step3 = step2 + 2 * (2 * 249)
chk("C147 member proj scaling", 2 * (2 * 249), 996)
chk("C148 running total 3", step3, 23556)
uplift = mp6 - 6 * 2 * 249
chk("C149 member proj uplift", uplift, 1137)
step4 = step3 + uplift
chk("C150 running total 4", step4, 24693)
chk("C151 bridge closes on gross", step4 + 10000, gross6)
chk("C152 total improvement", gross6 - draft, 21709)
chk("C153 multiple vs draft", round(gross6 / draft, 2), 2.67)
imp = gross6 - draft
chk("C154 share non-member %", round(100 * 10000 / imp, 1), 46.1)
chk("C155 share +2 clients %", round(100 * 5496 / imp, 1), 25.3)
chk("C156 share add-ons %", round(100 * addons / imp, 1), 18.8)
chk("C157 share proj uplift %", round(100 * uplift / imp, 1), 5.2)
chk("C158 share proj scaling %", round(100 * 996 / imp, 1), 4.6)
chk("C159 shares sum to 100",
    round(100 * (10000 + 5496 + addons + uplift + 996) / imp, 1), 100.0)

# ------------------------------------------------------------- report
fails = [c for c in CHECKS if not c[1]]
for name, ok, got, want in CHECKS:
    print(f"{'PASS' if ok else 'FAIL'}  {name:42s} got={got!r:>14} want={want!r}")
print(f"\n{len(CHECKS) - len(fails)}/{len(CHECKS)} checks passed.")
raise SystemExit(1 if fails else 0)
