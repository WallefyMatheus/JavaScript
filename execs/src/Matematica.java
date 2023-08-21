public class Matematica {
    private double a;
    private double b;
    private double c;

    public void set(double a,double b,double c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public double Sum() {
        return this.a + this.b;
    }

    public double Minus() {
        return this.a - this.b;
    }

    public double[] Bhaskara() {
        double delta = (this.b * this.b) - (4 * this.a * this.c);

        double[] raizes = new double[2];

        raizes[0] = ((Math.sqrt(delta) - this.b) /(2*this.a));
        raizes[1] = ((Math.sqrt(delta) + this.b) /(2*this.a));

        return raizes;
    }
}
