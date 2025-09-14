import { useEffect, useState, useCallback } from "react";
import maleIcon from "../assets/avatar-masculino.svg";
import femaleIcon from "../assets/avatar-feminino.svg";

export default function useRandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tick, setTick] = useState(0);

  const refresh = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://randomuser.me/api/?nat=br,us,gb,es", {
          signal,
        });
        if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`);
        const data = await res.json();
        const u = data.results?.[0];
        if (!u) throw new Error("Resposta inválida da API (sem usuário)");

        const normalized = {
          firstName: u.name.first,
          lastName: u.name.last,
          fullName: `${u.name.first} ${u.name.last}`,
          gender: u.gender,
          avatar: u.gender === "male" ? maleIcon : femaleIcon, // 👈 só o SVG local
          location: {
            city: u.location?.city || "",
            country: u.location?.country || "",
          },
          email: u.email || "",
          phone: u.phone || "",
        };

        setUser(normalized);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("useRandomUser:", err);
        setError(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();

    return () => controller.abort();
  }, [tick]);

  return { user, loading, error, refresh };
}
