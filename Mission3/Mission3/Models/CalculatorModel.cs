using System;
using System.ComponentModel.DataAnnotations;


namespace Mission3.Models
{
    public class CalculatorModel
    {
        
        [Range(0,100)]
        public int Assignments { get; set; }
        public int GroupProject { get; set; }
        public int Quizzes { get; set; }
        public int Exams { get; set; }
        public int Intex { get; set; }


    }
}

