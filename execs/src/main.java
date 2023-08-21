public class main {
    public static void main(String[] args){
        Matematica count = new Matematica();

        count.set(2,-4,0);

        double soma = count.Sum();

        // System.out.println(soma);

        double bhask[] = count.Bhaskara();

        System.out.printf("As raízes de Bhaskara são: %f, %f", bhask[0],bhask[1]);

        // System.out.println(Math.sqrt(4));
    }
}
