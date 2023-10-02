Fixpoint fibonacci (n : nat) : nat :=
    match n with
        | 0 | S 0 => 1
        | S (S p as p') => fibonacci p' + fibonacci p
    end.

Lemma fibonacci_eq n :
  fibonacci (S (S n)) = fibonacci (S n) + fibonacci n.
Proof.
  reflexivity.
Qed.