enum S { A = "a", "b c" = 2 }

enum T {
  X = S["A"],
  Y = S["b c"] + 1,
  Z = `t${T["X"]}`,
}

expect(T).toEqual({ X: "a", Y: 3, 3: "Y", Z: "ta" });
