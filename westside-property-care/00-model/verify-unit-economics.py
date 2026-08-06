#!/usr/bin/env python3
"""
Verification of every arithmetic claim in
westside-property-care/00-model/unit-economics.md

REWRITTEN 2026-08-05 for the owner's signed model:
  $279/month flat  ·  March 1 - October 31 (8 months)  ·  2 visits/month
  2 hours on-site per visit, no rollover  ·  heavier pool scope

The previous version of this script verified a twelve-month, four-price model
that no longer exists. Roughly 150 of its 159 assertions were dead. It was
rewritten, not patched.

EXTENDED 2026-08-06 for decisions.md D-27: the Founding Member rate is now
date-bounded (signed on or before 2027-02-28), not capped at four members.
No existing check changed. The W-block at the end of section 7 is new and
covers unit-economics.md section 7.6.

Run:  python3 verify-unit-economics.py
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


# ===================================================================
# LOCKED INPUTS  (CANON.md section 3 / signed agreement)
# ===================================================================
PRICE = 279                 # L1  membership, per month, flat
SEASON_MONTHS = 8           # L2  March 1 - October 31
VISITS_PER_MONTH = 2        # L3
VISITS_PER_SEASON = 16      # L3
CAP_HOURS = 2.0             # L4  on-site ceiling per visit
ROUTE_DAYS_PER_MONTH = 4    # L5  Mon + Fri, weeks 1 and 3

chk("L01 visits per season", VISITS_PER_MONTH * SEASON_MONTHS, VISITS_PER_SEASON)
chk("L02 route days per season", ROUTE_DAYS_PER_MONTH * SEASON_MONTHS, 32)
chk("L03 season revenue per client", PRICE * SEASON_MONTHS, 2232)
chk("L04 price per visit (pro-ration, A2)", PRICE / VISITS_PER_MONTH, 139.50)
chk("L05 $279 over 4 hrs of entitlement",
    r2(PRICE / (VISITS_PER_MONTH * CAP_HOURS)), 69.75)

# ===================================================================
# STEP 1 - the operating assumption (unit-economics.md section 2)
# ===================================================================
# 2.1 checklist blocks -> property shapes
BLOCKS_ALWAYS = 10 + 20 + 15 + 10 + 10 + 5      # blocks 1,4,5,6,7,8
BLOCK_POOL = 30                                  # block 2
BLOCK_KITCHEN = 20                               # block 3
chk("S01 checklist blocks total 120 min",
    BLOCKS_ALWAYS + BLOCK_POOL + BLOCK_KITCHEN, 120)

MIN_BOTH = BLOCKS_ALWAYS + BLOCK_POOL + BLOCK_KITCHEN     # 120
MIN_POOL = BLOCKS_ALWAYS + BLOCK_POOL                     # 100
MIN_KIT = BLOCKS_ALWAYS + BLOCK_KITCHEN                   # 90
MIN_NEITHER = BLOCKS_ALWAYS                               # 70
chk("S02 pool + kitchen minutes", MIN_BOTH, 120)
chk("S03 pool only minutes", MIN_POOL, 100)
chk("S04 kitchen only minutes", MIN_KIT, 90)
chk("S05 neither minutes (not a target client)", MIN_NEITHER, 70)
chk("S06 pool+kitchen equals the 2-hour ceiling", MIN_BOTH / 60, CAP_HOURS)

# A6 book composition: 2 of each of the first three shapes
ROUND_MIN = 2 * MIN_BOTH + 2 * MIN_POOL + 2 * MIN_KIT
chk("S07 one full round of six, minutes", ROUND_MIN, 620)
chk("S08 derived average minutes", r2(ROUND_MIN / 6), 103.33)
ONSITE = 1.75                                    # A11 planning allowance
chk("S09 planning allowance rounds 1.72 up to 1.75", r2(ROUND_MIN / 6 / 60), 1.72)

# 2.2 drive allowance (A12)
DEADHEAD = 0.50                                  # home -> route -> home
BETWEEN = 0.25                                   # between consecutive stops


def route_day_hours(stops):
    return stops * ONSITE + DEADHEAD + (stops - 1) * BETWEEN


def ceiling_day_hours(stops):
    return stops * CAP_HOURS + DEADHEAD + (stops - 1) * BETWEEN


chk("S10 2-stop route day", route_day_hours(2), 4.25)
chk("S11 3-stop route day", route_day_hours(3), 6.25)
chk("S12 4-stop route day", route_day_hours(4), 8.25)
chk("S13 3-stop ceiling day", ceiling_day_hours(3), 7.00)
chk("S14 4-stop ceiling day", ceiling_day_hours(4), 9.25)
chk("S15 2-stop ceiling day", ceiling_day_hours(2), 4.75)

# designed 3-stop day on the A6 composition (one of each shape)
designed = (MIN_BOTH + MIN_POOL + MIN_KIT) / 60 + DEADHEAD + 2 * BETWEEN
chk("S16 designed route day on-site minutes", MIN_BOTH + MIN_POOL + MIN_KIT, 310)
chk("S17 designed route day hours", r2(designed), 6.17)

# route hours by book size
chk("S18 4c route hrs/month", route_day_hours(2) * ROUTE_DAYS_PER_MONTH, 17.0)
chk("S19 6c route hrs/month", route_day_hours(3) * ROUTE_DAYS_PER_MONTH, 25.0)
chk("S20 8c route hrs/month", route_day_hours(4) * ROUTE_DAYS_PER_MONTH, 33.0)
RT4 = route_day_hours(2) * 32
RT6 = route_day_hours(3) * 32
RT8 = route_day_hours(4) * 32
chk("S21 4c route hrs/season", RT4, 136)
chk("S22 6c route hrs/season", RT6, 200)
chk("S23 8c route hrs/season", RT8, 264)

# Option B (rejected): 2 stops x 6 route days
chk("S24 Option B route days/month", 12 / 2, 6)
chk("S25 Option B extra dead-head hrs/month", (6 - 4) * DEADHEAD, 1.0)
chk("S26 Option B extra dead-head hrs/season", (6 - 4) * DEADHEAD * 8, 8.0)
chk("S27 Option B revenue per route day",
    r2(PRICE * 6 / 6), 279.00)                   # 6 clients over 6 route days

# ===================================================================
# ASSUMPTIONS (section 3)
# ===================================================================
WK_IN, WK_OFF = 35, 17
chk("A16a season weeks reconcile to a year", WK_IN + WK_OFF, 52)
chk("A16b season days", 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, 245)
chk("A16c season days = 35 weeks", 245 / 7, 35)

MEM_PROJ_SEASON = 2.0        # A3
MEM_PROJ_2026 = 0.5          # A4
MEM_PROJ_VALUE = 275         # A5
NM_VALUE = 250               # A10
PROJ_HRS = 3.0               # A13
MILE = 0.74                  # A18
CARD, PER_TXN, CARD_SHARE = 0.029, 0.30, 0.50    # A24
NM_OFF = 4                   # A8
NM_2026 = 8                  # A9
STARTUP = 99 + 1200          # A27 + A30


def processing(mem_rev, mem_txn, proj_rev, proj_n, nm_rev, nm_n):
    a = mem_rev * CARD + mem_txn * PER_TXN
    b = proj_rev * CARD + proj_n * PER_TXN
    c = (nm_rev * CARD_SHARE) * CARD + (nm_n * CARD_SHARE) * PER_TXN
    return a, b, c, a + b + c


# ===================================================================
# SCENARIO A - 2026 PARTIAL SEASON (section 4)
# ===================================================================
PER_CLIENT_2026 = 139.50 + 279 + 279
chk("P01 2026 revenue per client", PER_CLIENT_2026, 697.50)
chk("P02 2026 = 5 visits at the per-visit rate", 5 * 139.50, 697.50)
ROUTE_DAYS_2026 = 2 + 4 + 4
chk("P03 2026 route days", ROUTE_DAYS_2026, 10)
chk("P04 2026 visits reconcile at 6 clients", ROUTE_DAYS_2026 * 3, 6 * 5)

RESULTS_2026 = {}
for n, stops, admin_wk, supplies_mo, route_mi, supply_trips in [
        (4, 2, 2.5, 50, 20, 10),
        (6, 3, 3.0, 65, 25, 12),
        (8, 4, 3.5, 85, 30, 14)]:
    mem = n * PER_CLIENT_2026
    mp_n = int(n * MEM_PROJ_2026)
    mp = mp_n * MEM_PROJ_VALUE
    nm = NM_2026 * NM_VALUE
    gross = mem + mp + nm

    hrs_route = ROUTE_DAYS_2026 * route_day_hours(stops)
    jobs = mp_n + NM_2026
    hrs = hrs_route + jobs * PROJ_HRS + admin_wk * 11

    mi = ROUTE_DAYS_2026 * route_mi + jobs * 20 + supply_trips * 15
    veh = rd(mi * MILE)
    _, _, _, ptot = processing(mem, n * 3, mp, mp_n, nm, NM_2026)
    exp = veh + supplies_mo * 3 + 55 * 3 + 29 * 3 + rd(ptot) + 35 * 3 + 60 + 350
    net = gross - exp
    RESULTS_2026[n] = dict(mem=mem, mp=mp, nm=nm, gross=gross, hrs=hrs,
                           mi=mi, veh=veh, proc=rd(ptot), exp=exp, net=net,
                           after=net - STARTUP)

chk("P05 2026-4c membership", RESULTS_2026[4]["mem"], 2790)
chk("P06 2026-4c member projects", RESULTS_2026[4]["mp"], 550)
chk("P07 2026-4c non-member", RESULTS_2026[4]["nm"], 2000)
chk("P08 2026-4c gross", RESULTS_2026[4]["gross"], 5340)
chk("P09 2026-4c hours", RESULTS_2026[4]["hrs"], 100.0)
chk("P10 2026-4c miles", RESULTS_2026[4]["mi"], 550)
chk("P11 2026-4c vehicle", RESULTS_2026[4]["veh"], 407)
chk("P12 2026-4c processing", RESULTS_2026[4]["proc"], 131)
chk("P13 2026-4c expenses", RESULTS_2026[4]["exp"], 1455)
chk("P14 2026-4c net", RESULTS_2026[4]["net"], 3885)
chk("P15 2026-4c net/hr", r2(RESULTS_2026[4]["net"] / 100.0), 38.85)
chk("P16 2026-4c after startup", RESULTS_2026[4]["after"], 2586)
chk("P17 2026-4c after startup /hr", r2(RESULTS_2026[4]["after"] / 100.0), 25.86)

chk("P18 2026-6c membership", RESULTS_2026[6]["mem"], 4185)
chk("P19 2026-6c member projects", RESULTS_2026[6]["mp"], 825)
chk("P20 2026-6c gross", RESULTS_2026[6]["gross"], 7010)
chk("P21 2026-6c route hours", ROUTE_DAYS_2026 * route_day_hours(3), 62.5)
chk("P22 2026-6c hours", RESULTS_2026[6]["hrs"], 128.5)
chk("P23 2026-6c miles", RESULTS_2026[6]["mi"], 650)
chk("P24 2026-6c vehicle", RESULTS_2026[6]["veh"], 481)
a, b, c, tot = processing(4185, 18, 825, 3, 2000, 8)
chk("P25 2026-6c proc membership", r2(a), 126.77)
chk("P26 2026-6c proc member proj", r2(b), 24.83)
chk("P27 2026-6c proc non-member", r2(c), 30.20)
chk("P28 2026-6c proc total", rd(tot), 182)
chk("P29 2026-6c expenses", RESULTS_2026[6]["exp"], 1625)
chk("P30 2026-6c net", RESULTS_2026[6]["net"], 5385)
chk("P31 2026-6c net/hr", r2(RESULTS_2026[6]["net"] / 128.5), 41.91)
chk("P32 2026-6c after startup", RESULTS_2026[6]["after"], 4086)
chk("P33 2026-6c after startup /hr", r2(RESULTS_2026[6]["after"] / 128.5), 31.80)

chk("P34 2026-8c membership", RESULTS_2026[8]["mem"], 5580)
chk("P35 2026-8c gross", RESULTS_2026[8]["gross"], 8680)
chk("P36 2026-8c hours", RESULTS_2026[8]["hrs"], 157.0)
chk("P37 2026-8c miles", RESULTS_2026[8]["mi"], 750)
chk("P38 2026-8c vehicle", RESULTS_2026[8]["veh"], 555)
chk("P39 2026-8c processing", RESULTS_2026[8]["proc"], 232)
chk("P40 2026-8c expenses", RESULTS_2026[8]["exp"], 1809)
chk("P41 2026-8c net", RESULTS_2026[8]["net"], 6871)
chk("P42 2026-8c net/hr", r2(RESULTS_2026[8]["net"] / 157.0), 43.76)
chk("P43 2026-8c after startup /hr", r2(RESULTS_2026[8]["after"] / 157.0), 35.49)
chk("P44 startup total", STARTUP, 1299)

# ---- 4.3 the gap, Nov 2026 - Feb 2027
gap_rev = NM_OFF * NM_VALUE
gap_fixed = (55 + 29 + 35) * 4
gap_mi = NM_OFF * 20 + 4 * 15
gap_veh = rd(gap_mi * MILE)
_, _, gc, _ = processing(0, 0, 0, 0, gap_rev, NM_OFF)
gap_exp = gap_fixed + gap_veh + rd(gc)
gap_net = gap_rev - gap_exp
gap_hrs = NM_OFF * PROJ_HRS + 1.0 * WK_OFF
chk("G01 gap revenue", gap_rev, 1000)
chk("G02 gap monthly fixed cost", 55 + 29 + 35, 119)
chk("G03 gap fixed cost over 4 months", gap_fixed, 476)
chk("G04 gap miles", gap_mi, 140)
chk("G05 gap vehicle", gap_veh, 104)
chk("G06 gap processing", rd(gc), 15)
chk("G07 gap expenses", gap_exp, 595)
chk("G08 gap net", gap_net, 405)
chk("G09 gap hours", gap_hrs, 29)
chk("G10 gap net/hr", r2(gap_net / gap_hrs), 13.97)

# combined Aug 2026 - Feb 2027 at six clients
comb_gross = RESULTS_2026[6]["gross"] + gap_rev
comb_exp = RESULTS_2026[6]["exp"] + gap_exp
comb_net = comb_gross - comb_exp
comb_hrs = RESULTS_2026[6]["hrs"] + gap_hrs
chk("G11 combined gross", comb_gross, 8010)
chk("G12 combined expenses", comb_exp, 2220)
chk("G13 combined operating net", comb_net, 5790)
chk("G14 combined after startup", comb_net - STARTUP, 4491)
chk("G15 combined hours", comb_hrs, 157.5)
chk("G16 combined after-startup /hr", r2((comb_net - STARTUP) / comb_hrs), 28.51)

# 4.4 September-start variant
chk("V01 Sept-start per client", 2 * PRICE, 558)
chk("V02 Sept-start membership at 6", 6 * 2 * PRICE, 3348)
chk("V03 Sept-start shortfall", 4185 - 3348, 837)
chk("V04 Sept-start route days", 8, 8)
chk("V05 Sept-start route hours", 8 * route_day_hours(3), 50.0)

# ===================================================================
# SCENARIO B - FULL SEASON (sections 5 and 6)
# ===================================================================
RESULTS = {}
for n, stops, nm_in, admin_wk, supplies_mo, route_mi, supply_trips, equip in [
        (4, 2, 22, 2.5, 50, 20, 30, 600),
        (6, 3, 30, 3.0, 65, 25, 40, 600),
        (8, 4, 18, 3.5, 85, 30, 45, 700)]:
    mem = PRICE * SEASON_MONTHS * n
    mp_n = int(n * MEM_PROJ_SEASON)
    mp = mp_n * MEM_PROJ_VALUE
    nm_n = nm_in + NM_OFF
    nm = nm_n * NM_VALUE
    gross = mem + mp + nm

    hrs_route = 32 * route_day_hours(stops)
    jobs = mp_n + nm_n
    admin = admin_wk * WK_IN + 1.0 * WK_OFF
    hrs = hrs_route + jobs * PROJ_HRS + admin

    mi = 32 * route_mi + jobs * 20 + supply_trips * 15
    veh = rd(mi * MILE)
    pa, pb, pc, ptot = processing(mem, n * SEASON_MONTHS, mp, mp_n, nm, nm_n)
    exp = (veh + supplies_mo * SEASON_MONTHS + 55 * 12 + 29 * 12
           + rd(ptot) + 35 * 12 + equip + 60 + 350)
    net = gross - exp
    in_season_hrs = hrs_route + (mp_n + nm_in) * PROJ_HRS + admin_wk * WK_IN
    RESULTS[n] = dict(mem=mem, mp_n=mp_n, mp=mp, nm_n=nm_n, nm=nm, gross=gross,
                      hrs_route=hrs_route, jobs=jobs, admin=admin, hrs=hrs,
                      mi=mi, veh=veh, pa=pa, pb=pb, pc=pc, proc=rd(ptot),
                      exp=exp, net=net, in_season=in_season_hrs)

R4, R6, R8 = RESULTS[4], RESULTS[6], RESULTS[8]

# ---- 6 clients (section 5)
chk("B01 6c membership", R6["mem"], 13392)
chk("B02 6c membership per month", PRICE * 6, 1674)
chk("B03 6c member project count", R6["mp_n"], 12)
chk("B04 6c member projects $", R6["mp"], 3300)
chk("B05 6c non-member jobs", R6["nm_n"], 34)
chk("B06 6c non-member $", R6["nm"], 8500)
chk("B07 6c gross", R6["gross"], 25192)
chk("B08 6c membership share %", round(100 * R6["mem"] / R6["gross"], 1), 53.2)
chk("B09 6c project share %",
    round(100 * (R6["mp"] + R6["nm"]) / R6["gross"], 1), 46.8)
chk("B10 6c project revenue", R6["mp"] + R6["nm"], 11800)

chk("B11 6c route hours", R6["hrs_route"], 200)
chk("B12 6c project jobs", R6["jobs"], 46)
chk("B13 6c project hours", R6["jobs"] * PROJ_HRS, 138)
chk("B14 6c admin hours", R6["admin"], 122)
chk("B15 6c total hours", R6["hrs"], 460)
chk("B16 6c in-season hours", R6["in_season"], 431)
chk("B17 6c off-season hours", R6["hrs"] - R6["in_season"], 29)
chk("B18 6c in-season hrs/week", round(R6["in_season"] / WK_IN, 1), 12.3)
chk("B19 6c in-season days/week", round(R6["in_season"] / WK_IN / 8, 2), 1.54)

chk("B20 6c miles", R6["mi"], 2320)
chk("B21 6c vehicle $", R6["veh"], 1717)
chk("B22 6c membership transactions", 6 * SEASON_MONTHS, 48)
chk("B23 6c proc membership", r2(R6["pa"]), 402.77)
chk("B24 6c proc member proj", r2(R6["pb"]), 99.30)
chk("B25 6c proc non-member", r2(R6["pc"]), 128.35)
chk("B26 6c proc total", R6["proc"], 630)
chk("B27 6c expenses", R6["exp"], 5305)
chk("B28 6c expense ratio %", round(100 * R6["exp"] / R6["gross"], 1), 21.1)
chk("B29 6c net", R6["net"], 19887)
chk("B30 6c net/hr", r2(R6["net"] / R6["hrs"]), 43.23)
chk("B31 6c gross/hr", r2(R6["gross"] / R6["hrs"]), 54.77)
chk("B32 6c revenue per route day", r2(R6["mem"] / 32), 418.50)
chk("B33 6c revenue per route day, monthly form", r2(PRICE * 6 / 4), 418.50)
chk("B34 6c attach rate %", round(100 * R6["mp_n"] / (6 * 16), 1), 12.5)

# ---- 4 clients (section 6.1)
chk("B35 4c membership", R4["mem"], 8928)
chk("B36 4c member projects", R4["mp"], 2200)
chk("B37 4c non-member jobs", R4["nm_n"], 26)
chk("B38 4c non-member $", R4["nm"], 6500)
chk("B39 4c gross", R4["gross"], 17628)
chk("B40 4c route hours", R4["hrs_route"], 136)
chk("B41 4c project hours", R4["jobs"] * PROJ_HRS, 102)
chk("B42 4c admin hours", R4["admin"], 104.5)
chk("B43 4c total hours", R4["hrs"], 342.5)
chk("B44 4c in-season hours", R4["in_season"], 313.5)
chk("B45 4c in-season hrs/week", round(R4["in_season"] / WK_IN, 1), 9.0)
chk("B46 4c in-season days/week", round(R4["in_season"] / WK_IN / 8, 2), 1.12)
chk("B47 4c miles", R4["mi"], 1770)
chk("B48 4c vehicle $", R4["veh"], 1310)
chk("B49 4c proc membership", r2(R4["pa"]), 268.51)
chk("B50 4c proc member proj", r2(R4["pb"]), 66.20)
chk("B51 4c proc non-member", r2(R4["pc"]), 98.15)
chk("B52 4c proc total", R4["proc"], 433)
chk("B53 4c expenses", R4["exp"], 4581)
chk("B54 4c net", R4["net"], 13047)
chk("B55 4c net/hr", r2(R4["net"] / R4["hrs"]), 38.09)
chk("B56 4c gross/hr", r2(R4["gross"] / R4["hrs"]), 51.47)
chk("B57 4c revenue per route day", r2(PRICE * 4 / 4), 279.00)

# ---- 8 clients (section 6.2)
chk("B58 8c membership", R8["mem"], 17856)
chk("B59 8c member projects", R8["mp"], 4400)
chk("B60 8c non-member jobs", R8["nm_n"], 22)
chk("B61 8c non-member $", R8["nm"], 5500)
chk("B62 8c gross", R8["gross"], 27756)
chk("B63 8c route hours", R8["hrs_route"], 264)
chk("B64 8c project hours", R8["jobs"] * PROJ_HRS, 114)
chk("B65 8c admin hours", R8["admin"], 139.5)
chk("B66 8c total hours", R8["hrs"], 517.5)
chk("B67 8c in-season hours", R8["in_season"], 488.5)
chk("B68 8c in-season hrs/week", round(R8["in_season"] / WK_IN, 1), 14.0)
chk("B69 8c in-season days/week", round(R8["in_season"] / WK_IN / 8, 2), 1.74)
chk("B70 8c miles", R8["mi"], 2395)
chk("B71 8c vehicle $", R8["veh"], 1772)
chk("B72 8c proc membership", r2(R8["pa"]), 537.02)
chk("B73 8c proc member proj", r2(R8["pb"]), 132.40)
chk("B74 8c proc non-member", r2(R8["pc"]), 83.05)
chk("B75 8c proc total", R8["proc"], 752)
chk("B76 8c expenses", R8["exp"], 5742)
chk("B77 8c net", R8["net"], 22014)
chk("B78 8c net/hr", r2(R8["net"] / R8["hrs"]), 42.54)
chk("B79 8c gross/hr", r2(R8["gross"] / R8["hrs"]), 53.63)
chk("B80 8c revenue per route day", r2(PRICE * 8 / 4), 558.00)

# ---- 6 vs 8 (section 6.3)
chk("C01 delta membership", R8["mem"] - R6["mem"], 4464)
chk("C02 delta gross", R8["gross"] - R6["gross"], 2564)
chk("C03 delta expenses", R8["exp"] - R6["exp"], 437)
chk("C04 delta net", R8["net"] - R6["net"], 2127)
chk("C05 delta net %", round(100 * (R8["net"] - R6["net"]) / R6["net"], 1), 10.7)
chk("C06 delta hours", R8["hrs"] - R6["hrs"], 57.5)
chk("C07 delta hours %", round(100 * (R8["hrs"] - R6["hrs"]) / R6["hrs"], 1), 12.5)
chk("C08 marginal rate past the cap",
    r2((R8["net"] - R6["net"]) / (R8["hrs"] - R6["hrs"])), 36.99)
chk("C09 net/hr goes DOWN past the cap",
    r2(R8["net"] / R8["hrs"]) - r2(R6["net"] / R6["hrs"]), -0.69)
chk("C10 marginal rate is below the $40 floor",
    1 if (R8["net"] - R6["net"]) / (R8["hrs"] - R6["hrs"]) < 40 else 0, 1)

# ---- self-employment tax (section 9.3)
def se(net):
    return rd(net * 0.9235 * 0.153)


chk("T01 6c SE base", rd(R6["net"] * 0.9235), 18366)
chk("T02 6c SE tax", se(R6["net"]), 2810)
chk("T03 6c after SE", R6["net"] - se(R6["net"]), 17077)
chk("T04 6c after-SE per hour", r2((R6["net"] - se(R6["net"])) / R6["hrs"]), 37.12)
chk("T05 4c SE tax", se(R4["net"]), 1843)
chk("T06 4c after SE", R4["net"] - se(R4["net"]), 11204)
chk("T07 8c SE tax", se(R8["net"]), 3110)
chk("T08 8c after SE", R8["net"] - se(R8["net"]), 18904)

# ---- vehicle: full cost vs pump cost (section 9.2)
gal = R6["mi"] / 18
chk("T09 6c gallons", round(gal, 1), 128.9)
chk("T10 6c pump cost", rd(gal * 3.30), 425)
chk("T11 6c non-cash vehicle cost", R6["veh"] - rd(gal * 3.30), 1292)

# ===================================================================
# DOWNSIDE AND SENSITIVITY (section 7)
# ===================================================================
# 7.1 zero project revenue
hrsZ = RT6 + (2.0 * WK_IN + 0.5 * WK_OFF)
miZ = 32 * 25 + 16 * 15
vehZ = rd(miZ * MILE)
za, _, _, _ = processing(R6["mem"], 48, 0, 0, 0, 0)
expZ = vehZ + 65 * 8 + 55 * 12 + 29 * 12 + rd(za) + 35 * 12 + 600 + 60 + 350
netZ = R6["mem"] - expZ
chk("Z01 zero-project admin hours", 2.0 * WK_IN + 0.5 * WK_OFF, 78.5)
chk("Z02 zero-project hours", hrsZ, 278.5)
chk("Z03 zero-project miles", miZ, 1040)
chk("Z04 zero-project vehicle", vehZ, 770)
chk("Z05 zero-project processing", rd(za), 403)
chk("Z06 zero-project expenses", expZ, 4131)
chk("Z07 zero-project net", netZ, 9261)
chk("Z08 zero-project net/hr", r2(netZ / hrsZ), 33.25)

# 7.2 losing one member
lost_rev = PRICE * SEASON_MONTHS
lost_fees = rd(lost_rev * CARD + SEASON_MONTHS * PER_TXN)
chk("Z09 lost member revenue", lost_rev, 2232)
chk("Z10 lost member card fees saved", lost_fees, 67)
chk("Z11 lost member net cost", lost_rev - lost_fees, 2165)
chk("Z12 lost member % of net",
    round(100 * (lost_rev - lost_fees) / R6["net"], 1), 10.9)

# 7.3 revenue per on-site hour by property shape
h_kit = VISITS_PER_SEASON * MIN_KIT / 60
h_pool = VISITS_PER_SEASON * MIN_POOL / 60
h_both = VISITS_PER_SEASON * MIN_BOTH / 60
chk("Z13 kitchen-only on-site hrs/season", h_kit, 24.0)
chk("Z14 pool-only on-site hrs/season", r2(h_pool), 26.67)
chk("Z15 both on-site hrs/season", h_both, 32.0)
chk("Z16 kitchen-only $/on-site hr", r2(2232 / h_kit), 93.00)
chk("Z17 pool-only $/on-site hr", r2(2232 / h_pool), 83.70)
chk("Z18 both $/on-site hr", r2(2232 / h_both), 69.75)
chk("Z19 spread across shapes", round((2232 / h_kit) / (2232 / h_both), 3), 1.333)
chk("Z20 both-shape rate equals the $279/4hr figure",
    r2(2232 / h_both), r2(PRICE / 4))
# the shape deliberately excluded from the book
h_neither = VISITS_PER_SEASON * MIN_NEITHER / 60
chk("Z20a neither-shape on-site hrs/season", r2(h_neither), 18.67)
chk("Z20b neither-shape $/on-site hr", r2(2232 / h_neither), 119.57)
chk("Z20c visit frequency vs a pool service", VISITS_PER_MONTH / 4, 0.5)

# 7.4 member project rate sensitivity: 2.0 -> 1.5
mpS_n = int(6 * 1.5)
mpS = mpS_n * MEM_PROJ_VALUE
grossS = R6["mem"] + mpS + R6["nm"]
jobsS = mpS_n + R6["nm_n"]
hrsS = RT6 + jobsS * PROJ_HRS + R6["admin"]
miS = 32 * 25 + jobsS * 20 + 40 * 15
vehS = rd(miS * MILE)
_, _, _, ptS = processing(R6["mem"], 48, mpS, mpS_n, R6["nm"], R6["nm_n"])
expS = vehS + 65 * 8 + 55 * 12 + 29 * 12 + rd(ptS) + 35 * 12 + 600 + 60 + 350
netS = grossS - expS
chk("Z21 sens member projects", mpS, 2475)
# 100 * 9 / 96 = 9.375 sits exactly on a rounding midpoint; nudge past it so the
# result does not depend on banker's rounding.
chk("Z22 sens attach rate %", round(100 * mpS_n / (6 * 16) + 1e-9, 1), 9.4)
chk("Z23 sens gross", grossS, 24367)
chk("Z24 sens hours", hrsS, 451)
chk("Z25 sens miles", miS, 2260)
chk("Z26 sens vehicle", vehS, 1672)
chk("Z27 sens processing", rd(ptS), 606)
chk("Z28 sens expenses", expS, 5236)
chk("Z29 sens net", netS, 19131)
chk("Z30 sens net/hr", r2(netS / hrsS), 42.42)
chk("Z31 sens net delta", R6["net"] - netS, 756)
chk("Z32 sens per-hour delta",
    r2(r2(R6["net"] / R6["hrs"]) - r2(netS / hrsS)), 0.81)

# 7.5 off-route client
off_hrs = 0.5 * VISITS_PER_SEASON
off_cost = rd(off_hrs * r2(R6["net"] / R6["hrs"]))
chk("Z33 off-route unpaid drive hrs/season", off_hrs, 8.0)
chk("Z34 off-route margin destroyed", off_cost, 346)
chk("Z35 off-route % of client revenue", round(100 * off_cost / 2232, 1), 15.5)

# 7.6 the Founding Member lock  (added 2026-08-06 with decisions.md D-27)
# D-27: eligibility is a DATE (signed on or before 2027-02-28), not a member count.
# The lock protects the 2027 season only - 8 billed months, identical for every
# member inside the window.
BOOK_CAP = 6                          # CANON section 3, hard cap
FOUNDING_WINDOW_CLOSES = "2027-02-28"  # D-27
SEASON_2027_OPENS = "2027-03-01"      # L2
FOUNDING_MEMBER_CAP = None            # D-27: there is no member-count cap
LOCK_MONTHS = SEASON_MONTHS           # the lock bites on the 2027 season only

# A31: no 2027 price increase is modelled, so the lock is a $0 line
chk("W01 A31 - Scenario B prices all six at $279 in 2027",
    R6["mem"], PRICE * SEASON_MONTHS * BOOK_CAP)
chk("W02 modelled cost of the Founding lock",
    R6["mem"] - PRICE * SEASON_MONTHS * BOOK_CAP, 0)


def lock_exposure(members, delta, months=LOCK_MONTHS):
    """Revenue forgone if the 2027 standard rate were set `delta` above $279."""
    return members * delta * months


chk("W03 exposure, 1 locked member, +$10/mo", lock_exposure(1, 10), 80)
chk("W04 exposure, 1 locked member, +$20/mo", lock_exposure(1, 20), 160)
chk("W05 exposure, whole book locked, +$10/mo", lock_exposure(BOOK_CAP, 10), 480)
chk("W06 exposure, whole book locked, +$20/mo", lock_exposure(BOOK_CAP, 20), 960)

# case 1 - stretch case: all six sign inside the window. Only members 5 and 6 are
# treated differently by D-27 and the withdrawn "first 4" rule.
DIFFERENTLY_TREATED = BOOK_CAP - 4
chk("W07 members the two rules treat differently", DIFFERENTLY_TREATED, 2)
chk("W08 D-27 cost vs 'first 4', +$10/mo", lock_exposure(DIFFERENTLY_TREATED, 10), 160)
chk("W09 D-27 max cost vs 'first 4', +$20/mo", lock_exposure(DIFFERENTLY_TREATED, 20), 320)
D27_MAX = lock_exposure(DIFFERENTLY_TREATED, 20)
chk("W10 D-27 max cost as % of 6c net", round(100 * D27_MAX / R6["net"], 1), 1.6)
chk("W11 D-27 max cost as % of 6c membership", round(100 * D27_MAX / R6["mem"], 1), 2.4)
chk("W12 D-27 max cost in non-member jobs", round(D27_MAX / NM_VALUE, 2), 1.28)

# case 2 - honest forecast (section 4.2): two members by Oct 31 2026; members 3-6
# sign during the 2027 season. Illustration: 3 and 4 start May 1 and are billed 6
# of the 8 season months. Under "first 4" they would have been locked; under D-27
# they are not.
chk("W13 'first 4' cost on the honest forecast, +$20/mo, 6 billed months",
    lock_exposure(2, 20, months=6), 240)

# guards - the mechanism itself
chk("W14 founding window closes before the 2027 season opens",
    1 if FOUNDING_WINDOW_CLOSES < SEASON_2027_OPENS else 0, 1)
chk("W15 founding eligibility carries no member-count cap",
    1 if FOUNDING_MEMBER_CAP is None else 0, 1)
chk("W16 the lock protects the 8-month 2027 season", LOCK_MONTHS, 8)

# ===================================================================
# CASH FLOW (section 8)
# ===================================================================
in_month = PRICE * 6 + R6["mp"] / 8 + 7500 / 8
off_month = 1000 / 4
chk("F01 in-season member projects/month", r2(R6["mp"] / 8), 412.50)
chk("F02 in-season non-member/month", r2(7500 / 8), 937.50)
chk("F03 in-season month total", r2(in_month), 3024.00)
chk("F04 off-season month total", r2(off_month), 250.00)
chk("F05 cash flow reconciles to gross",
    r2(in_month * 8 + off_month * 4), 25192.00)
chk("F06 seasonal swing", r2(in_month - off_month), 2774.00)
chk("F07 swing vs superseded model's $565", round((in_month - off_month) / 565, 2), 4.91)
chk("F08 winter reserve needed per in-season month", rd(476 / 8), 60)

# ===================================================================
# COMPARISON TO THE SUPERSEDED YEAR-ROUND MODEL (section 9.1)
# ===================================================================
OLD_MEM, OLD_MP, OLD_NM = 20568, 4125, 10000       # superseded - DEAD numbers
OLD_GROSS, OLD_EXP, OLD_NET, OLD_HRS = 34693, 6257, 28436, 561
chk("X01 superseded gross reconciles", OLD_MEM + OLD_MP + OLD_NM, OLD_GROSS)
chk("X02 superseded net reconciles", OLD_GROSS - OLD_EXP, OLD_NET)
chk("X03 membership gap", OLD_MEM - R6["mem"], 7176)
chk("X04 member project gap", OLD_MP - R6["mp"], 825)
chk("X05 non-member gap", OLD_NM - R6["nm"], 1500)
chk("X06 revenue deltas sum to the gross gap",
    (OLD_MEM - R6["mem"]) + (OLD_MP - R6["mp"]) + (OLD_NM - R6["nm"]),
    OLD_GROSS - R6["gross"])
chk("X07 gross gap", OLD_GROSS - R6["gross"], 9501)
chk("X08 expense gap", OLD_EXP - R6["exp"], 952)
chk("X09 net gap", OLD_NET - R6["net"], 8549)
chk("X10 net gap = gross gap - expense gap",
    (OLD_GROSS - R6["gross"]) - (OLD_EXP - R6["exp"]), 8549)
chk("X11 hours gap", OLD_HRS - R6["hrs"], 101)
chk("X12 per-hour gap", r2(50.69 - r2(R6["net"] / R6["hrs"])), 7.46)
chk("X13 membership gap %", round(100 * (OLD_MEM - R6["mem"]) / OLD_MEM, 1), 34.9)
chk("X14 superseded project share %",
    round(100 * (OLD_MP + OLD_NM) / OLD_GROSS, 1), 40.7)

# per-client comparison
OLD_PER_CLIENT = 3468          # superseded pool-configuration property x 12 - DEAD
chk("X15 seasonal per client", PRICE * SEASON_MONTHS, 2232)
chk("X16 per-client difference", OLD_PER_CLIENT - 2232, 1236)
chk("X17 per-client difference %", round(100 * 1236 / OLD_PER_CLIENT, 1), 35.6)
chk("X18 six identical properties would give", 6 * 1236, 7416)
chk("X19 the mix-based gap is the right one", OLD_MEM - R6["mem"], 7176)
chk("X20 the two gaps differ by", 7416 - 7176, 240)

# pool-service comparison (CANON section 5)
chk("X21 pool service low as % of $279", round(100 * 121 / PRICE, 1), 43.4)
chk("X22 pool service high as % of $279", round(100 * 142 / PRICE, 1), 50.9)

# ===================================================================
# GUARDS - no superseded membership price may reappear
# ===================================================================
DEAD_PRICES = (229, 249, 269, 289, 329)
chk("N01 membership price is 279", PRICE, 279)
chk("N02 no dead price is the membership price",
    1 if PRICE not in DEAD_PRICES else 0, 1)
chk("N03 season is 8 months, not 12", SEASON_MONTHS, 8)
chk("N04 no membership figure uses x12",
    1 if R6["mem"] != PRICE * 12 * 6 else 0, 1)

# ------------------------------------------------------------- report
fails = [c for c in CHECKS if not c[1]]
for name, ok, got, want in CHECKS:
    print(f"{'PASS' if ok else 'FAIL'}  {name:46s} got={got!r:>14} want={want!r}")
print(f"\n{len(CHECKS) - len(fails)}/{len(CHECKS)} checks passed.")
raise SystemExit(1 if fails else 0)
