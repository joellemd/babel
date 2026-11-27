enum S { A = "a", "b c" = 2 }

enum T {
  X = S["A"],
  Y = S["b c"] + 1,
  Z = `t${T["X"]}`,
}
